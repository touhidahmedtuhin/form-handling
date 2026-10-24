import { useState } from "react";

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked); 
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleChange} 
        />
        Accept Terms & Conditions
      </label>

      <p>{isChecked ? "✅ Checked" : "❌ Not Checked"}</p>
    </div>
  );
}


export default CheckBox;
