"use strict"
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");
const main = document.querySelector("main");
const navItems = document.querySelector("ul");
const cardss = document.getElementById("card");

const viewMode = function(){
    light.addEventListener("click", ()=>{
        light.classList.add("d-none");
        dark.classList.remove("d-none");
        navBar.style.background = "linear-gradient(to bottom left, #d7d7d7, #f9f9f9)";
        body.style.background = "linear-gradient(to bottom left, #d7d7d7, #f9f9f9, #e8e8e8, #c6c6c6";
        cardss.style.color = "black"
        main.classList.remove("text-white");
    });
    
    dark.addEventListener("click", ()=>{
        dark.classList.add("d-none")
        light.classList.remove("d-none");
        navBar.style.background = "linear-gradient(to bottom right,  #333333, #444444)";
        body.style.background = "linear-gradient(to bottom right, #000000, #111111, #222222, #333333, #444444)";
        cardss.style.color = "black"
        main.classList.add("text-white");
    });
}
viewMode();

  
 // Define an array of objects containing the card data
const cards = [
    {
      imgSrc: "javascript.png",
      title: "Card title 3",
      text: "Expert.",
      link: "#"
    },
    {
      imgSrc: "css.png",
      title: "Card title 3",
      text: "Expert.",
      link: "#"
    },
    {
      imgSrc: "html5.png",
      title: "Card title 3",
      text: "Expert.",
      link: "#"
    }
  ];

  const frameworks = [
    {
        imgSrc: "react.png",
        title: "Card title 1",
        text: "Beginner",
        link: "#"
      },
      {
        imgSrc: "bootstrap.png",
        title: "Card title 2",
        text: "Intermediate.",
        link: "#"
      },
  ];
  
  // Get the container element where the cards will be rendered
  const container = document.getElementById("cardContainer");
 
  // Loop through the cards array and create a new card element for each object
  cards.forEach(card => {
    // Create a new card element
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("id", "card")
    newCard.style.width = "18rem";
  
    // Create the card's image element
    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.classList.add("card-img-start");
    newCard.appendChild(img);
  
    // Create the card's body element
    const body = document.createElement("div");
    body.classList.add("card-body");
    newCard.appendChild(body);
  
    // Create the card's title element
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = card.title;
    body.appendChild(title);
  
    // Create the card's text element
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = card.text;
    body.appendChild(text);
  
    // Create the card's link element
    const link = document.createElement("a");
    link.href = card.link;
    link.classList.add("btn", "btn-primary");
    link.textContent = "Go somewhere";
    body.appendChild(link);
  
    // Append the new card element to the container
    container.appendChild(newCard);
  });
  const frameworksCard = document.getElementById("frameWorks");
  frameworks.forEach(card => {
    // Create a new card element
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("id", "card")
    newCard.style.width = "18rem";
  
    // Create the card's image element
    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.classList.add("card-img-start");
    newCard.appendChild(img);
  
    // Create the card's body element
    const body = document.createElement("div");
    body.classList.add("card-body");
    newCard.appendChild(body);
  
    // Create the card's title element
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = card.title;
    body.appendChild(title);
  
    // Create the card's text element
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = card.text;
    body.appendChild(text);
  
    // Create the card's link element
    const link = document.createElement("a");
    link.href = card.link;
    link.classList.add("btn", "btn-primary");
    link.textContent = "Go somewhere";
    body.appendChild(link);
  
    // Append the new card element to the container
    frameworksCard.appendChild(newCard);
  });