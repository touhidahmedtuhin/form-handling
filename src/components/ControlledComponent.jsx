import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  return (
    <>
      <h2>Handling Input Field</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name :"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your Name: {name}</p>
      </div>
    </>
  );
}

export default ControlledComponent;
