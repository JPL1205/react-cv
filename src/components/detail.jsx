import { useState } from "react";
import "./detail.css";

export const personDetail = [
  {
    Name: "Leo Li",
    Email: "1234@gmail.com",
    Phone: "6505753574",
    Address: "CA",
  },
];

export default function Detail({ onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleEnter() {
    const detail = {
      Name: name,
      Email: email,
      Phone: phone,
      Address: address,
    };
    personDetail[0] = detail;
    onSave(detail);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  }

  return (
    <section id="detail">
      <h1>Personal Details</h1>
      <h3>Full name</h3>
      <input
        type="text"
        placeholder="First and last name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>
        Email <span>recommended</span>
      </h3>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>
        Phone number <span>recommended</span>
      </h3>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <h3>
        Address <span>recommended</span>
      </h3>
      <input
        type="text"
        placeholder="City, country"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleEnter}>Enter</button>
    </section>
  );
}
