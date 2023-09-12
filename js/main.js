document.addEventListener('DOMContentLoaded', () => {

    const toggleAccordion = () => {
        const accordion = document.querySelector('.accordion');

        if(accordion) {
            const accordionItems = accordion.querySelectorAll('.accordion__item');

            accordionItems.forEach(item => {
                const toggleButton = item.querySelector('.accordion__item-toggle');
                const itemBlock = item.querySelector('.accordion__item-block');

                toggleButton.addEventListener('click', e => {
                    const target = e.target;

                    if(item.classList.contains('active')) {
                        itemBlock.style.maxHeight = '0';
                    } else {
                        itemBlock.style.maxHeight = itemBlock.scrollHeight + 'px';
                    }

                    item.classList.toggle('active');
                })
            })
        }
    }

    // const addFormFiles = () => {
    //     const inputFileWrapper = document.querySelector('.form__files');
    //
    //     if(inputFileWrapper) {
    //         const inputFile = inputFileWrapper.querySelector('input[type="file"]')
    //         console.log(inputFile)
    //         inputFile.addEventListener('change', (e) => {
    //             const target = e.target;
    //
    //             const elemsWrapper = document.createElement('div');
    //             elemsWrapper.classList.add('files-wrapper');
    //             inputFileWrapper.append(elemsWrapper);
    //
    //
    //             for (let i = 0; i < inputFile.files.length; i++) {
    //                 const newElem = document.createElement('span');
    //                 newElem.classList.add('files__item');
    //                 newElem.textContent = inputFile.files[i].name;
    //                 elemsWrapper.append(newElem);
    //             }
    //
    //
    //         })
    //     }
    // }
    //
    // addFormFiles()

    const mapPopup = () => {
        const mapSection = document.querySelector('.map');

        if(mapSection) {
            if(window.innerWidth > 550) {
                const popup = mapSection.querySelector('.project_popup')
                mapSection.addEventListener('click', e => {
                    const target = e.target;

                    if(target.classList.contains('map__circle')) {
                        popup.classList.add('active')
                    } else if(!target.closest('.project_popup')) {
                        popup.classList.remove('active')
                    }
                })
            }
        }
    }

    mapPopup()

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

    const autoHeightElems = (selector) => {
        const elems = document.querySelectorAll(selector);

        if(elems) {
            let arrayHeight = [];
            elems.forEach(elem => {
                arrayHeight.push(elem.offsetHeight);
            })
            elems.forEach(elem => {
                elem.style.height = Math.max(...arrayHeight) + 'px';
            })
        }
    }

    autoHeightElems('.projects-standard__slider .project__text');
    autoHeightElems('.projects-standard__slider .project__title');
    autoHeightElems('.projects-standard__slider .project__location');

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

    const viewSwitcher = () => {
        const switcher = document.querySelector('.view-switcher');

        if (switcher) {
            switcher.addEventListener('click', (e) => {
                const target = e.target;
                const switchBtns = switcher.querySelectorAll('button');

                if(!target.classList.contains('active')) {
                    switchBtns.forEach(btn => {
                        btn.classList.remove('active');
                    })
                    target.classList.add('active');
                }
            })
        }
    }

    const dropdownToggle = () => {
        const dropdownWrapper = document.querySelector('.dropdown')

        if(dropdownWrapper) {
            const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
            const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
            const dropdownItems = dropdownList.querySelectorAll('.dropdown__item');
            const dropdownInput = dropdownWrapper.querySelector('.dropdown__input')

            dropdownBtn.addEventListener('click', function (e) {
                const target = e.target;

                if(dropdownWrapper.classList.contains('open')) {
                    dropdownWrapper.classList.remove('open');
                    dropdownList.style.maxHeight = '0';
                } else {
                    dropdownWrapper.classList.add('open');
                    dropdownList.style.maxHeight = dropdownList.scrollHeight + 'px';
                }

            });

            dropdownItems.forEach(function(listItem) {
                listItem.addEventListener('click', function (e) {
                    dropdownItems.forEach(function(el) {
                        el.classList.remove('active');
                    })
                    e.target.classList.add('active');
                    dropdownBtn.innerHTML = `
                        ${this.innerText}
                        <svg class="dropdown__arrow" width="15" height="15">
                            <use xlink:href="#dropdown-arrow"></use>
                        </svg>
                    `;
                    dropdownInput.value = this.dataset.value;
                    dropdownWrapper.classList.remove('open');
                    dropdownWrapper.classList.add('active');
                })
            })

            document.addEventListener('click', function (e) {
                if ( e.target !== dropdownBtn ){
                    // dropdownBtn.classList.remove('dropdown__button_active');
                    dropdownWrapper.classList.remove('open');
                    dropdownList.style.maxHeight = '0';
                }
            })

            // document.addEventListener('keydown', function (e) {
            //     if( e.key === 'Tab' || e.key === 'Escape' ) {
            //         dropdownBtn.classList.remove('dropdown__button_active');
            //         dropdownList.classList.remove('dropdown__list_visible');
            //     }
            // })
        }
    }

    const trackScroll = () => {
        const menu = document.querySelector('.burger-menu');
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
        const pageWidth = document.documentElement.clientWidth;

        if (pageWidth <= 767) {
            if (scrolled > coords) {
                menu.classList.add('fixed');
            } else {
                menu.classList.remove('fixed');
            }
        }
    }

    let projectsBigSwiper;

    const projectsBigSlider = () => {
        if(window.innerWidth > 480) {
             projectsBigSwiper = new Swiper('.projects-big__slider', {
                // Optional parameters
                slidesPerView: "auto",

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }

    const projectsStandardSwiperOnPc = new Swiper('.projects-standard__slider_pc', {
        // Optional parameters
        slidesPerView: "auto",

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const projectsStandardOnMobile = () => {
        if (window.innerWidth <= 767) {
            const projectsStandardSwiperOnMobile = new Swiper('.projects-standard__slider_mobile', {
                // Optional parameters
                slidesPerView: "auto",

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }

    projectsStandardOnMobile();

    const popupSwiper = new Swiper('.popup-swiper', {
        // Optional parameters
        slidesPerView: "auto",
        init: false,
    });
    const setActiveCircle = function () {
        if(window.innerWidth <= 550) {
            const mapSection = document.querySelector('.map');

            if(mapSection) {
                const circles = mapSection.querySelectorAll('.map__circle');
                circles.forEach(circle => {
                    circle.classList.remove('active');
                })
                mapSection.querySelector(`#circle${this.activeIndex + 1}`).classList.add('active');
            }
        }
    }
    popupSwiper.on('init', function () {
        if(window.innerWidth <= 550) {
            const mapSection = document.querySelector('.map');
            mapSection.querySelector(`#circle${this.activeIndex + 1}`).classList.add('active');
        }
    })
    popupSwiper.init();
    popupSwiper.on('slideChange', setActiveCircle)

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

    dropdownToggle();
    viewSwitcher();
    toggleBurgerMenu();
    projectsBigSlider();
    toggleAccordion();
    nextButton();
})

$(function(){
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
    });
});