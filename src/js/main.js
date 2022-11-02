const enter = document.querySelector('.header__button--enter');
const enterModal = document.querySelector('.modal-enter');
const closeEnterModal = document.querySelector('.modal-enter__close');
const reg = document.querySelector('.header__button--reg');
const regModal = document.querySelector('.modal-reg');
const closeRegModal = document.querySelector('.modal-reg__close');
const burger = document.querySelector('.header__burger');
const buttons = document.querySelector('.header__buttons');
const closeButtons = document.querySelector('.header__close');

enter.addEventListener('click', () => {
    enterModal.classList.add('modal-enter--active');
    buttons.classList.remove('header__buttons--active');
    document.body.style.overflowY = 'hidden';
})
closeEnterModal.addEventListener('click', () => {
    enterModal.classList.remove('modal-enter--active');
    document.querySelectorAll('.modal-enter__input').forEach((e) => {
        e.value = '';
    })
    document.body.style.overflowY = '';
})

reg.addEventListener('click', () => {
    regModal.classList.add('modal-reg--active');
    buttons.classList.remove('header__buttons--active');
    document.body.style.overflowY = 'hidden';
})
closeRegModal.addEventListener('click', () => {
    regModal.classList.remove('modal-reg--active');
    document.querySelectorAll('.modal-reg__input').forEach((e) => {
        e.value = '';
    })
    document.body.style.overflowY = '';
})

burger.addEventListener('click', () => {
    buttons.classList.add('header__buttons--active');
    document.body.style.overflowY = 'hidden';
});

closeButtons.addEventListener('click', () => {
    buttons.classList.remove('header__buttons--active');
    document.body.style.overflowY = '';
})


const swiperReviews = new Swiper('.reviews__swiper', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.reviews-swiper-pag',
    },
});

function initTariffsSlider() {
    document.querySelector('.tariffs__cards').classList.add('swiper-wrapper');
    document.querySelectorAll('.tariffs__card').forEach((e) => {
        e.classList.add('swiper-slide');
    })
    const swiperTariffs = new Swiper('.tariffs__wrapper', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.tariffs-swiper-pag',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidePerGroup: 1,
            },
            650: {
                slidesPerView: 2,
                slidePerGroup: 1,
            }
          }
    });
}

function initStepsSlider() {
    document.querySelector('.steps__cards').classList.add('swiper-wrapper');
    document.querySelectorAll('.steps__card').forEach((e) => {
        e.classList.add('swiper-slide');
    })
    const swiperSteps = new Swiper('.steps__wrapper', {
        slidesPerView: 'auto',
        loop: true,
        slidePerGroup: 1,
        spaceBetween: 35,
        pagination: {
            el: '.steps-swiper-pag',
        },
    });
}

window.document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width <= 768) { 
        initTariffsSlider();
    } else {
        document.querySelector('.tariffs__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.tariffs__card').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
    if (width <= 450) { 
        initStepsSlider();
    } else {
        document.querySelector('.steps__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.steps__card').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width <= 768) { 
        initTariffsSlider();
    } else {
        document.querySelector('.tariffs__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.header__item').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
    if (width <= 450) { 
        initStepsSlider();
    } else {
        document.querySelector('.steps__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.steps__card').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
});
