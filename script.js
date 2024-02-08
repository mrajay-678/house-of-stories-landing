let bigImg = (content, name) => {
  let count = 1;
  let myInterval = setInterval(() => {
    count >= 7 && clearInterval(myInterval);
    count++;
    let cnotainer = content.classList;
    console.log(cnotainer[1]);
    document.querySelector(`.${cnotainer[1]} div`).innerHTML = count <= 7 ? `<img  class="image-pop-up" src="/images/HOS_12 July-08.jpg"/>` : "<img src='./images/HOS_12 July-08.jpg'/>";
  }, 500);
};
setInterval(() => {
  document.querySelector(".gradient-img").style.top = Math.floor(Math.random() * 600) + "px";
  document.querySelector(".gradient-img").style.left = Math.floor(Math.random() * 600) + "px";
}, 10000);

const div1 = document.querySelectorAll(".animate__fadeInUp_section");
div1.forEach(element => {
  element.addEventListener("animationend", e => {
    document.querySelector("." + element.classList[1]).style.opacity = 1;
  });
});
document.querySelector(".loader__barcode").addEventListener("animationend", () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight + 200,
      behavior: "smooth",
    });
  }, 500);
});

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});
