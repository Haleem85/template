import useEdit from "./useEdit";
import React, { useState } from "react";

const Editable = () => {
  const { status: editable, editStatus: toggleEditable } = useEdit();
  const [inputValue, setInputValue] = useState("Title");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {editable ? (
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleEditable}>{editable ? "Cancel" : "Edit"}</button>
    </div>
  );
};
export default Editable;
