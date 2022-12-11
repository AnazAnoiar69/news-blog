const menuBtn = document.querySelectorAll(".toggle-menu");
const menuBar = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector('body')
let isShowing = false;

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    isShowing = !isShowing;
    console.log(isShowing)
    toggleMenu( isShowing, menuBar, overlay, body)
    
  });
});

const toggleMenu = ( isShowing, menuBar, overlay, body ) => {

    isShowing && menuBar.classList.remove("translate-x-full")
    isShowing && overlay.classList.remove("hidden")
    isShowing && overlay.classList.add("bg-gray-600")
    isShowing && body.classList.toggle("fixed")
    !isShowing && menuBar.classList.add("translate-x-full")
    !isShowing && overlay.classList.add("hidden")
    !isShowing && overlay.classList.remove("bg-gray-600")
    !isShowing && body.classList.toggle("fixed")
    
};


