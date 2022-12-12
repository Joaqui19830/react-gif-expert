export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=H7UzG4Fyof3pnsT09LJcFarnwJ4Xy3Fe&q=${category}&limit=10`

    const resp = await fetch(url);
     // console.log(resp);
    const {data} = await resp.json()
//    console.log(data);

const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}));

console.log(gifs);
return gifs;
 
}
