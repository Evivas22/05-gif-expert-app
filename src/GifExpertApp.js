import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categoria, setCategoria] = useState([""]);

  return (
    <>
      <h1> GifExpertApp</h1>
      <h2>Add Category</h2>
      <AddCategory setCategoria={setCategoria} />
      <hr />

      <ol>
        {categoria.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
