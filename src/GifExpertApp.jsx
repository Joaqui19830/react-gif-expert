import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // Por defecto tiene el index donde hicimos el archivo barril
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // Aca dice si la categoria existe no haga nada sino insertalo

    setCategories([newCategory, ...categories]); // Que la ultima catery sea la primera en agregarse
    // setCategories(cat => [... cat, 'Goku'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories ={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
        //    (
        //     <div key={category}>
        //       <h3>{category}</h3>
        //       <li>{category}</li>
        //     </div>
        //   )
      ))}
    </>
  );
};
