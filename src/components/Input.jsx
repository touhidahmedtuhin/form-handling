import { useState } from "react";

function Input() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div>
      {/* name field */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <br />
      <br />
      {/* email field */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />

      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default Input;
