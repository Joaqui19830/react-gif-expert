// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/GetGif";


// // DESPUES VER HOOKS PERSONALIZADO POR QUE NO FUNCA
// export const useFetchGrifs = (category) => {
 
//     const [images, setImages] = useState([]);
//     const [isLoading, setIsLoading] = useState( true );

//     const getImages = async () => {
//       const newImages = await getGifs(category);
//       setImages(newImages);
//       setIsLoading(false)
//     };
//     // usseEfect se dice que produce efectos secundarios, que se entiende por efecto secundario, se entiende algun
//     // proceso que se quiere ejecutar cuando alog suceda por ej: cuando el counter cambie quiero disparar un efecto
//     useEffect(() => {
//       getImages();
//     }, []);

//     return {
//         images,
//         isLoading
//     }
// }
