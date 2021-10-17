let header = document.querySelector(".header");
let headerBtnContainer = document.querySelector(".navBtn-container");

header.addEventListener("click", headerHander);
function headerHander(e) {
   if (
      e.target.classList.contains("line") ||
      e.target.classList.contains("header__navBtn")
   ) {
      headerBtnContainer.classList.toggle("header__navBtn--active");
   }
}

let heroInputs = document.querySelectorAll(".hero__input");
heroInputs.forEach((input) => {
   input.addEventListener("focus", inputFocus);
   input.addEventListener("blur", inputBlur);
});

function inputFocus(e) {
   document
      .querySelector(`label[for=${e.target.id}]`)
      .classList.add("hero__label--active");
}

function inputBlur(e) {
   if (!e.target.value) {
      document
         .querySelector(`label[for=${e.target.id}]`)
         .classList.remove("hero__label--active");
   }
}

let timeLine1 = gsap.timeline({
   scrollTrigger: {
      trigger: ".main",
      start: "10%",
      end: "50%",
      scrub: 1,
   },
});


timeLine1.to(".header",  { backgroundColor: "#0f0f0f" });
