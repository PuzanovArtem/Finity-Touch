import"./modulepreload-polyfill-B5Qt9EMX.js";console.log("main");const i=document.querySelector(".burger"),s=document.querySelector(".header__content"),t=document.querySelectorAll(".nav-link");function n(){const e=i.classList.toggle("active");s.classList.toggle("active"),e&&(document.body.style.overflow="hidden"),e||(document.body.style.overflow="auto")}i.addEventListener("click",n);function o(){i.classList.remove("active"),s.classList.remove("active"),document.body.style.overflow="scroll"}t.forEach(e=>e.addEventListener("click",o));new Swiper(" .idea_swiper-container",{breakpoints:{1300:{slidesPerView:4},970:{slidesPerView:3},650:{slidesPerView:2},0:{slidesPerView:1.2}},spaceBetween:40});new Swiper(".team__swiper-container",{slidesPerView:4,spaceBetween:47,breakpoints:{1300:{slidesPerView:4},900:{slidesPerView:3},0:{slidesPerView:2,spaceBetween:20}},navigation:{nextEl:".nav-right",prevEl:".nav-left"}});new Swiper(" .partner_slider-block",{spaceBetween:100,breakpoints:{1700:{slidesPerView:6},1450:{slidesPerView:5},1200:{slidesPerView:4},720:{slidesPerView:2.5},0:{slidesPerView:2,spaceBetween:40}},loop:!0,freeMode:!0,autoplay:{delay:0,OnInteraction:!1},speed:3e3});const r=document.querySelectorAll(".main-questions .question-block");r.forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("hide")})});