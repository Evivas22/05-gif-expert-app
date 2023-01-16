import React, { useState } from "react";

export const AddCategory = ({ setCategoria }) => {
  const [inputValue, setInputValue] = useState("Ingrese una categoria");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategoria((cat) => [inputValue, ...cat]);
      setInputValue("goku");
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
