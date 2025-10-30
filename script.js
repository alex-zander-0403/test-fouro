let swiper1 = null;
let swiper2 = null;

function swipersInit() {
  if (!swiper1) {
    swiper1 = new Swiper(".swiper1", {
      spaceBetween: 20,
      slidesPerView: "auto",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }

  if (!swiper2) {
    swiper2 = new Swiper(".swiper2", {
      spaceBetween: 20,
      slidesPerView: "auto",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }
}

if (window.innerWidth >= 1200) {
  swipersInit();
}

function swipersDestroy() {
  if (swiper1) {
    swiper1.destroy(false, true);
    swiper1 = null;
  }

  if (swiper2) {
    swiper2.destroy(false, true);
    swiper2 = null;
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    swipersDestroy();
  } else {
    swipersInit();
  }
});
