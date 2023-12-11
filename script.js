const light = document.getElementById("light");
const dark = document.getElementById("dark");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");
const main = document.querySelector("main");
const navItems = document.querySelector("ul");

light.addEventListener("click", ()=>{
    light.classList.add("d-none");
    dark.classList.remove("d-none");
    navBar.style.background = "linear-gradient(to bottom left, #d7d7d7, #f9f9f9)";
    body.style.background = "linear-gradient(to bottom left, #d7d7d7, #f9f9f9, #e8e8e8, #c6c6c6";
    main.classList.remove("text-white");
});

dark.addEventListener("click", ()=>{
    dark.classList.add("d-none")
    light.classList.remove("d-none");
    navBar.style.background = "linear-gradient(to bottom right,  #333333, #444444)";
    body.style.background = "linear-gradient(to bottom right, #000000, #111111, #222222, #333333, #444444)";
    main.classList.add("text-white");
});