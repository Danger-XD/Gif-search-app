let apiKey="";
let apiUrl=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=smile&lang=en&rating=g`;
let wrapper=document.querySelector(".wrapper");
let searchBtn= document.getElementById("search-btn");
function getGif(){
    fetch(apiUrl)
    .then(res=>res.json())
    .then(item =>{
    console.log(item.data[1].images.original.url)
    let image = document.createElement("img");
    image.src = item.data[7].images.original.url;
    wrapper.append(image);
}
)
.catch(err=>console.log(err));
};
searchBtn.addEventListener("click",getGif);
