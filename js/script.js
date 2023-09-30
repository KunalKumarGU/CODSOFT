var loader = document.getElementById("loaderWrapper");
var page = document.getElementById("pageWrapper");
const searchBar = document.getElementById("searchBar");
var typeSound = new Audio("./sounds/type.mp3");
var mouseSound = new Audio("./sounds/mouse.mp3");
const searchBarWrapper = document.getElementById("searchBarWrapper");
var afterLoader = document.getElementById("afterLoader");
searchBarWrapper.addEventListener("click", () => {
  main();
});

document.onload = function () {};

const array = ["K", "u", "n", "a", "l", " ", "K", "u", "m", "a", "r"];
let i = 0;
let j = 0;

intro = setInterval(() => {
  loader.style.left += j;
  j += 1;
  if (j == 45) {
    clearInterval(intro);
  }
}, 15);
function main() {
  x = setInterval(() => {
    typeSound.play();
    searchBar.value += array[i];
    i += 1;
    if (i == array.length) {
      clearInterval(x);
      mouseSound.play();
    }
  }, 70);

  setTimeout(() => {
    loader.style.display = "none";
    afterLoader.style.height = "150px";
    afterLoader.style.top = "300px";
    afterLoader.style.left = "400px";
    afterLoader.style.display = "block";
  }, 2300);

  setTimeout(() => {
    afterLoader.style.top = "350px";
  }, 2350);
  setTimeout(() => {
    afterLoader.style.height = "30.7px";
    afterLoader.style.top = "87px";
    afterLoader.style.left = "-90px";
  }, 2800);

  setTimeout(() => {
    afterLoader.style.display = "none";
    page.style.opacity = 1;
  }, 3700);
}
