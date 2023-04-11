let toggler = document.querySelector(".navbar .toggler");
let navbar = document.querySelector(".navbar .navbar-nav");
let closeBtn = document.getElementById("closeBtn");
let btnSearch = document.querySelector(".navbar .icons .search");
let searchForm = document.querySelector(".search-form");
let closeSearch = document.querySelector(".search-form .close");

toggler.onclick = function() {
    navbar.classList.add("active");
};
closeBtn.onclick = function() {
    navbar.classList.remove("active");
};
window.onscroll = function() {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    if (window.scrollY > 0) {
        document.querySelector(".navbar").classList.add("active");
    } else {
        document.querySelector(".navbar").classList.remove("active");
    }
};
window.onload = function() {
    if (window.scrollY > 0) {
        document.querySelector(".navbar").classList.add("active");
    } else {
        document.querySelector(".navbar").classList.remove("active");
    }
};
btnSearch.onclick = function() {
    searchForm.classList.add("active");
};
closeSearch.onclick = function() {
    searchForm.classList.remove("active");
};

// Swiper
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 15,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".clients-slider", {
    grabCursor: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
