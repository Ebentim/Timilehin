"use strict"
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");
const main = document.querySelector("main");
const navItems = document.querySelector("ul");
const navLinks = document.querySelectorAll(".nav-link")
const skillItem = document.querySelectorAll(".skill-item")
const footer = document.querySelector("footer");

const darkMode = {
  darkIconDisplay: "none",
  background: "linear-gradient(to bottom right, #000000, #111111, #222222, #333333, #444444)",
  color: "#ffffff",
  navBackground: "linear-gradient(to bottom left, #333333, #444444)"
};

const lightMode = {
  lightIconDisplay: "none",
  background: "linear-gradient(to bottom left, #d7d7d7, #f9f9f9, #e8e8e8, #c6c6c6)",
  color: "#000000",
  navBackground: "linear-gradient(to bottom left, #d7d7d7, #f9f9f9)"
};

dark.addEventListener("click",()=>{
  dark.style.display = darkMode.darkIconDisplay;
  light.style.display = "block";
  body.style.background = darkMode.background;
  body.style.color = darkMode.color;
  navBar.style.background = darkMode.navBackground;
  const navLinksItems= Array.from(navLinks).slice(0, navLinks.length);
  navLinksItems.forEach(links =>{
    links.style.color = darkMode.color
  });
  const skillitems = Array.from(skillItem).slice(0, skillItem.length);
  skillitems.forEach(item =>{
    item.style.background = darkMode.background;
    item.style.color = darkMode.color;
  });
})
light.addEventListener("click",()=>{
  light.style.display = lightMode.lightIconDisplay;
  dark.style.display = "block";
  body.style.background = lightMode.background;
  body.style.color = lightMode.color;
  navBar.style.background = lightMode.navBackground;
  const navLinksItems= Array.from(navLinks).slice(0, navLinks.length)
  navLinksItems.forEach(links => {
    links.style.color = lightMode.color;
  });
  const skillitems = Array.from(skillItem).slice(0, skillItem.length);
  skillitems.forEach(item =>{
    item.style.background = lightMode.background;
    item.style.color = lightMode.color;
  });
  footer.style.color = darkMode.color;
})

const statements = [
  `Hi my name is Olayuwa Timilehin Ebenezer`,
  "I am a self-taught frontend developer",
  "A Mineral Processing Engineering Graduate,",
  "and a former assistant Lecturer",
  "I love coding,",
  "Learning new things,",
  "Building  projects,",
  "Exploring technologies,",
  "Connecting with the world.",
  "You are welcome to my website",
  ];

  function typeWriter(text, i, callback) {
    if (i < text.length) {
      const welcomeStatement =  document.getElementById("welcome-statement")
      welcomeStatement.style.fontSize = "50px"
      welcomeStatement.innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i, callback);
      }, 50);
    } else {
      setTimeout(callback, 1000); 
    }
  }

  function displayTexts() {
    let index = 0;

    function nextStatement() {
      document.getElementById("welcome-statement").innerHTML = '';
      typeWriter(statements[index], 0, function() {
        index++;
        if (index < statements.length) {
          nextStatement();
        } else {
          // All statements are typed, display the next element
          document.getElementById("container").style.display = "block";
        }
      });
    }

    nextStatement();
  }
  displayTexts();
  
  const plus = document.querySelectorAll(".fa-plus");
  const x = document.querySelectorAll(".fa-x");
  const journey = document.querySelectorAll(".journey");
  
  const plusArray = Array.from(plus).splice(0, plus.length);
  const xArray = Array.from(x).splice(0, x.length);
  const journeyArray = Array.from(journey).splice(0, journey.length);
  
  function show() {
    const skillItems = document.querySelectorAll(".skill-item");
  
    skillItems.forEach(item => {
      const journey = item.querySelector(".journey");
      const x = item.querySelector(".fa-x");
      const plus = item.querySelectorAll(".fa-plus");
  
      item.addEventListener("click", () => {
        toggleDisplay(journey);
        toggleDisplay(x);
        togglePlus(plus);
      });
    });
  
    function togglePlus(elements) {
      elements.forEach(element => {
        element.style.display = (element.style.display === "flex" || element.style.display === "") ? "none" : "flex";
      });
    }
  
    function toggleDisplay(element) {
      element.style.display = (element.style.display === "none" || element.style.display === "") ? "flex" : "none";
    }
  }
  
  show();
  