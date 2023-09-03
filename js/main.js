document.addEventListener('DOMContentLoaded', () => {

    const directionsAccordion = () => {
        const accordion = document.querySelector('.directions__accordion');

        if(accordion) {
            const accordionItems = accordion.querySelectorAll('.accordion__item');

            accordionItems.forEach(item => {
                const toggleButton = item.querySelector('.accordion__item-toggle');
                const itemText = item.querySelector('.accordion__item-text');

                toggleButton.addEventListener('click', e => {
                    const target = e.target;
                    console.log(itemText.scrollHeight)

                    if(item.classList.contains('active')) {
                        itemText.style.maxHeight = null;
                    } else {
                        itemText.style.maxHeight = itemText.scrollHeight + 'px';
                    }

                    item.classList.toggle('active');
                })
            })
        }
    }

    const nextButton = () => {
        const btn = document.querySelector('.btn_next');

        if(btn) {
            btn.addEventListener('click', e => {
                e.preventDefault();


                document.getElementById('content').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    const toggleBurgerMenu = () => {
        const openBtns = document.querySelectorAll('.burger');
        const closeBtn = document.querySelector('.menu__close');
        const menu = document.querySelector('.burger-menu');
        const documentWidth = window.innerWidth;

        if(documentWidth <= 767) {
            openBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    menu.classList.add('open')
                })
            })

            closeBtn.addEventListener('click', () => {
                menu.classList.remove('open');
            })


        }
    }

    const trackScroll = () => {
        const menu = document.querySelector('.burger-menu');
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
        const pageWidth = document.documentElement.clientWidth;

        if(pageWidth <= 767) {
            if(scrolled > coords) {
                menu.classList.add('fixed');
            } else {
                menu.classList.remove('fixed');
            }
        }
    }



    const projectsSlider = () => {
        const projectsSwiper = new Swiper('.projects__slider', {
            // Optional parameters
            slidesPerView: "auto",

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        if(projectsSwiper) {
            if(window.innerWidth <= 480) {
                projectsSwiper.destroy(true, true);
            }
        }
    }

    const lettersSwiper = new Swiper('.letters__slider', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 27,
            },
            1600: {
                spaceBetween: 40,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    window.addEventListener('scroll', trackScroll)

    toggleBurgerMenu();
    projectsSlider();
    directionsAccordion();
    nextButton();
})