"use strict"
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");
const main = document.querySelector("main");
const navItems = document.querySelector("ul");
const navLinks = document.querySelectorAll(".nav-link")

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
  })
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
      document.getElementById("welcome-statement").innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i, callback);
      }, 50); // Adjust the typing speed by changing the timeout value
    } else {
      setTimeout(callback, 1000); // Wait for 1 second before starting the next statement
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

  // Start displaying the texts
  displayTexts();