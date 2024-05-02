import './fund.scss'

console.log('login')


// burger

const burger = document.querySelector('.burger');
const content = document.querySelector('.header__content');
const navLink = document.querySelectorAll('.nav-link');


function openMenu(){
    const activeBurger =  burger.classList.toggle('active');
    const activeContent = content.classList.toggle('active');
    if(activeBurger){
        document.body.style.overflow = 'hidden';
    }if(!activeBurger){
        document.body.style.overflow = 'auto';
    }
}

burger.addEventListener('click', openMenu)

function closeMenu(){
    burger.classList.remove('active');
    content.classList.remove('active');
    document.body.style.overflow = 'scroll';
}

navLink.forEach(n => n.addEventListener('click', closeMenu));



//fund_section-3 question
const questionBlockFund = document.querySelectorAll('.fund .section-3 .question-block')

questionBlockFund.forEach((block => {
    block.addEventListener("click", function() {
        this.classList.toggle('hide')
    })
}))

//fund_thesis swiper
new Swiper(' .fund-thesis__swiper-container', {
    breakpoints: {
        1300: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1.2,
        }
    },

    spaceBetween: 40,
})