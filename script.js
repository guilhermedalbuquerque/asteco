/* ================================================
   script.js — Asteco Assistência Técnica
   Responsável por: slider, scroll animation,
   navbar scroll e menu mobile.
================================================ */

/* ---- SLIDER ---- */
const imagens = [
  { src: "img/conjunto1.png", legenda: "Acionamento eletrônico para atuação pneumática" },
  { src: "img/conjunto2.png", legenda: "Controle de freio da carreta/reboque" },
  { src: "img/conjunto3.png", legenda: "Reguladores e secadores APU" },
  { src: "img/conjunto7.png", legenda: "Válvulas protetoras de 4 circuitos e de 6 vias" },
  { src: "img/conjunto8.png", legenda: "Válvula do freio de serviço, manete e moduladora do ABS" },
  { src: "img/conjunto4.png", legenda: "Compressores" },
  { src: "img/conjunto5.png", legenda: "Hidráulicos para elevação" },
  { src: "img/conjunto6.png", legenda: "Macacos hidráulicos" }
];

let index = 0;

const slide = document.getElementById("slideImagem");
const legenda = document.getElementById("legenda");
const legendaMobile = document.getElementById("legendaMobile");
const contador = document.getElementById("contador");
const slideContainer = document.querySelector(".slide-container");

function atualizarSlide() {
  slide.src = imagens[index].src;
  slide.alt = imagens[index].legenda;

  /* legenda desktop (overlay ao hover) */
  legenda.innerText = imagens[index].legenda;

  /* legenda mobile (sempre visível abaixo do card) */
  legendaMobile.innerText = imagens[index].legenda;

  contador.innerText = (index + 1) + " / " + imagens.length;
}

atualizarSlide();

document.querySelector(".next").onclick = () => {
  index = (index + 1) % imagens.length;
  atualizarSlide();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarSlide();
};

/* ---- SCROLL ANIMATION ---- */
const elementos = document.querySelectorAll('.animar');

window.addEventListener('scroll', () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('ativo');
    }
  });
});

/* ---- NAVBAR SCROLL ---- */
window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scroll", window.scrollY > 50);
});

/* ---- MENU MOBILE ---- */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("ativo");
  navMenu.classList.toggle("aberto");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("ativo");
    navMenu.classList.remove("aberto");
  });
});