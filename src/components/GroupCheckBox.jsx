import { useState } from "react";

function GroupCheckBox() {
  const [languages, setLanguage] = useState({
    html: false,
    css: false,
    js: false,
  });

  function handleChange(e) {
    const { name, checked } = e.target;
    setLanguage((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

   const isAllChecked = Object.values(languages).every(Boolean)

  function handleSelectAll(e) {
    const { checked } = e.target;
    setLanguage({
      html: checked,
      css: checked,
      js: checked,
    });
  }

  return (
    <div>
      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          name="html"
          checked={languages.html}
          onChange={handleChange}
        />
        HTML
      </label>

      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          name="css"
          checked={languages.css}
          onChange={handleChange}
        />
        CSS
      </label>

      <label htmlFor="js">
        <input
          type="checkbox"
          id="js"
          name="js"
          checked={languages.js}
          onChange={handleChange}
        />
        JS
      </label>
      <div>
        <label htmlFor="all">
          <input
            type="checkbox"
            id="all"
            checked={isAllChecked}
            onChange={handleSelectAll}
          />
          Select all
        </label>
      </div>

      <p>{languages.html ? "HTML Selected" : "HTML Not Selected"}</p>
      <p>{languages.css ? "CSS Selected" : "CSS Not Selected"}</p>
      <p>{languages.js ? "JS Selected" : "JS Not Selected"}</p>
    </div>
  );
}

export default GroupCheckBox;
