// Slides
var thumbs = document.querySelectorAll('.swiper-thumb');
var sliders = document.querySelectorAll('.swiper');
var swiperNext = document.querySelectorAll('.swiper-button-next');
var swiperPrev = document.querySelectorAll('.swiper-button-prev');
for (let i = 0; i <= sliders.length; i++) {
    var sliderThumbs = 'sliderThumbs' + i;
    var swiper = 'swiper' + i;
    sliderThumbs = new Swiper(thumbs[i], {
        direction: "horizontal",
        slidesPerView: 4,
        spaceBetween: 8,
        freeMode: true,
        breakpoints: {
            0: {
                direction: "vertical",
                spaceBetween: 0
            },
            606: {
                direction: "horizontal",
                spaceBetween: 8
            }
        }
    });

    swiper = new Swiper(sliders[i], {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 1,
        navigation: {
            nextEl: swiperNext[i],
            prevEl: swiperPrev[i]
        },

        thumbs: {
            swiper: sliderThumbs
        },
        breakpoints: {
            0: {
                direction: "horizontal"
            },
           606: {
                direction: "horizontal"
            }
        }
    });
}

// Href by id
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        var topOffset = 100;
        if(window.screen.width < 730) {
            topOffset = 30;
        }
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Fix header by scroll
var sticky = {
    sticky_after: 200,
    init: function() {
        this.scroll();
        this.events();
    },

    scroll: function() {
        if(window.scrollY > this.sticky_after) {
            document.body.classList.add("down");
        }
        else {
            document.body.classList.remove("down");
        }
    },

    events: function() {
        window.addEventListener("scroll", this.scroll.bind(this));
    }
};
document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));

// Burger menu
var openBurgerMenu = document.querySelectorAll('.burger-menu')[0];
var closeBurgerMenu = document.querySelectorAll('.burger-close__control')[0];
var menu = document.querySelectorAll('.header__menu')[0];
openBurgerMenu.addEventListener('click', function(e) {
    menu.classList.add("show");
});
/*closeBurgerMenu.addEventListener('click', function(e) {
    menu.classList.remove("show");
});*/
menu.addEventListener('click', function(e) {
    menu.classList.remove("show");
});

// Animate
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       250,
        callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();