const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const stopAnimation = document.getElementById("root");
const displayHeroSection = document.getElementById("hero");
const hiddenElements = document.querySelectorAll(".hidden");
const enableFunctionality = document.querySelectorAll(".enableFunctionality");
hiddenElements.forEach((el) => observer.observe(el));

setTimeout(() => {
  stopAnimation.innerText = "";
}, 2000);

setTimeout(() => {
  document.body.style.display = "block";
  displayHeroSection.style.display = "grid";
  displayHeroSection.style.opacity = 1;
}, 3000);

setTimeout(() => {
  displayHeroSection.style.display = "none";
}, 4500);

setTimeout(() => {
  enableFunctionality.forEach((el) => (el.style.display = "flex"));
}, 6000);
