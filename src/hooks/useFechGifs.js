import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFechGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [categoria]); // <----- solo se dispara el use effects cuando cambia la categoria loq  va entre llaves es el gatillo

  return state;
};
