/* ============================= */
/* COUNTER ANIMATION */
/* ============================= */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


/* ============================= */
/* STICKY HEADER SHADOW */
/* ============================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }

});


/* ============================= */
/* HAMBURGER MENU */
/* ============================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


/* ============================= */
/* CLOSE MENU WHEN LINK CLICKED */
/* ============================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});