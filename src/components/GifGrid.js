import React, { useEffect, useState } from "react";
import { GifGridItems } from "./GifGridItems";
import { useFechGifs } from "../hooks/useFechGifs";

export const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFechGifs(categoria);

  return (
    <>
      {loading && "cargando..."}
      <h3>{categoria}</h3>

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
