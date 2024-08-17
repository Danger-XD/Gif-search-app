const searchBtn = document.getElementById("search-btn");
const loader = document.querySelector(".loader");
const searchBox = document.querySelector(".search-box");
function getGif() {
  const searchText = document.getElementById("search-text");
  const apiKey = "";
  let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchText.value)}&lang=en&rating=r&limit=24`;
  const wrapper = document.querySelector(".wrapper");
  fetch(apiUrl)
    .then((res) => res.json())
    .then((item) => {
      // console.log(item.data);
      // console.log(searchText.value);
      // console.log(apiUrl);
      // console.log(item.data[7].images.fixed_width.url);
      const gifs = item.data;
      gifs.forEach(gif =>{
        const gifUrl = gif.images.original.url;
        // console.log(gifUrl);
        let imgContainer = document.createElement("div");
        imgContainer.className = ("img-container");
        let image = document.createElement("img");
        image.className = ("gif-image");
        image.src = gifUrl;
        wrapper.append(imgContainer);
        imgContainer.append(image);
        function getUrl(){
          console.log(gifUrl);
          navigator.clipboard.writeText(gifUrl);
          alert("gif-URL has been copied to your clipboard.");
        }
        imgContainer.addEventListener("click",getUrl);
      })
    })
    .catch((err) => console.log(err));
}
searchBtn.addEventListener("click", getGif);
window.addEventListener("load",loaderGif);
function loaderGif(){
  setTimeout(()=>{
    loader.style.display = "none";
    searchBox.style.display = "flex";
  },3000)
  
}
clearInterval()