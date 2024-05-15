import './main.scss'

console.log('main')



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

// Idea

new Swiper(' .idea_swiper-container', {
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        970: {
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

// Team

new Swiper('.team__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 47,
    //slidesPerColumn: 2,
    //gridRows: 2,

    
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },

    navigation: {
        nextEl: '.nav-right',
        prevEl: '.nav-left'
    }
    
})

//Partners

new Swiper(' .partner_slider-block', {

    spaceBetween: 100,
    //slidesPerView: 2,
    //watchOwerflow: true,

    breakpoints: {
        1700: {
            slidesPerView: 6,
        },        
        1450: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2,

            spaceBetween: 40,
        }
    },

    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        OnInteraction: false
    },

    speed: 3000
})

// QuestionS


const questionBlock = document.querySelectorAll('.main-questions .question-block')

questionBlock.forEach((block => {
    block.addEventListener("click", function() {
        this.classList.toggle('hide')
    })
}))


