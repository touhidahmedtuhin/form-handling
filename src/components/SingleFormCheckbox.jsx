import React, { useState } from "react";

function SingleFormCheckbox() {
  const [agree, setAgree] = useState(false);

  function handleAgree(e) {
    setAgree(e.target.checked);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(agree ? "Agreed ✅" : "Not Agreed ❌");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={handleAgree}
          />
          Accept Terms & Conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SingleFormCheckbox;
