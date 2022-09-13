document.getElementById("logo").addEventListener("click", ()=>{
    window.location.href = "index.html";
})

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});