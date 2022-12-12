import { useState } from "react";

// IMPORTANTE: Cada componente puede tener su propio estado su propio hooks
export const AddCategory = ({ onNewCategory }) => {
  // Aca en las props traigo desestructurado lo que necesito

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;

    //    setCategories( categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim());
    setInputValue(""); //Aca limpiamos lo que se agrega por el input
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
