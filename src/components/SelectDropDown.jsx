import React, { useState } from "react";

function SelectDropDown() {
  const [language, setLanguage] = useState("");
  const languages = ["C", "C++", "Python", "JavaScript", "Java"];

  return (
    <div>
      {/* <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">---Select Language</option>
        <option value="c">C</option>
        <option value="c++">C++</option>
        <option value="python">Python</option>
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
      </select>

      <div style={{ marginTop: "10px" }}>
        {language ? (
          <p>Selected Language: {language.toUpperCase()}</p>
        ) : (
          <p>No language selected</p>
        )}
      </div> */}
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">---Select Dynamic Language</option>
        {languages.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      {language ? (
        <p>Selected Language: {language.toUpperCase()}</p>
      ) : (
        <p>No language selected</p>
      )}
    </div>
  );
}

export default SelectDropDown;
