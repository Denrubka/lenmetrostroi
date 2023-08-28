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

    const lettersSwiper = new Swiper('.letters__slider', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const projectsSwiper = new Swiper('.projects__slider', {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 80,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    directionsAccordion();
    nextButton();
})