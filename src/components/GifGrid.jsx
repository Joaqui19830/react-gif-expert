

import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGif";

import { useEffect, useState } from "react";
// import { useFetchGrifs } from "../hooks/useFetchGrifs";


export const GifGrid = ({ category }) => {

  // const {images, isLoading} = useFetchGrifs(category); IMPLEMENTACION DE HOOKS
  // console.log({images, isLoading});
  const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      // setIsLoading(false)
    };
    // usseEfect se dice que produce efectos secundarios, que se entiende por efecto secundario, se entiende algun
    // proceso que se quiere ejecutar cuando alog suceda por ej: cuando el counter cambie quiero disparar un efecto
    useEffect(() => {
      getImages();
    }, []);


  return (
    <>
      <h3>{category}</h3>
    

      <div className="card-grid ">
        {
          //SEGUN FERNANDO QUE PEREZA HACERLO ASI ENTONCES DIRECTAMENTE HACE DESESTRUCTURACION DE ID Y TITULO
          // images.map(image => (
          //   <li key={image.id}>{image.title}</li>
          // ))
          images.map((image) => (
            <GifItem key={image.id}
            {...image } // Esto sirve para traer todas las propiedades de la imagen trae todo lo de abajo y mas 
            // title={image.title}
            // url={image.url} 
            />
          ))
        }
      </div>
    </>
  );
};
