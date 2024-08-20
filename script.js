const searchBtn = document.getElementById("search-btn");
const searchBox = document.querySelector(".search-box");

function getGif() {
  const searchText = document.getElementById("search-text");
  const apiKey = "dBD6nL4ML4lvNN0uH2O28XrdqWKWVNMN";
  let gifLimit = 24;
  let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
    searchText.value
  )}&lang=en&rating=r&limit=${gifLimit}&offset=0`;
  const loader = document.querySelector(".loader");
  const wrapper = document.querySelector(".wrapper");
  loader.style.display="block";
  wrapper.style.display="none";

  wrapper.innerHTML = "";
  fetch(apiUrl)
    .then((res) => res.json())
    .then((item) => {
      // console.log(item.data);
      // console.log(searchText.value);
      // console.log(apiUrl);
      // console.log(item.data[7].images.fixed_width.url);
      const gifs = item.data;
      gifs.forEach((gif) => {
        // console.log(gifUrl);
        let imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        let image = document.createElement("img");
        image.className = "gif-image";
        const gifUrl = gif.images.original.url;
        image.setAttribute("src",gifUrl);
        image.onload = () => {
          gifLimit--;
          if(gifLimit == 0){
            loader.style.display="none";
            wrapper.style.display="grid";
          }
        };
        imgContainer.append(image);
        wrapper.append(imgContainer);
        function getUrl() {
          console.log(gifUrl);
          navigator.clipboard.writeText(gifUrl);
          alert("gif-URL has been copied to your clipboard.");
        }
        imgContainer.addEventListener("click", getUrl);
      });
    })
    .catch((err) => console.log(err));
}
searchBtn.addEventListener("click", getGif);
window.addEventListener("load", getGif);
// function loaderGif() {
//   setTimeout(() => {
//     loader.style.display="none";
//     wrapper.style.display ="block";
//   }, 3000);
// }
