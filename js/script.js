let n1 = $(".n-1").text();
let n2 = $(".n-2").text();
let n3 = $(".n-3").text();
let n4 = $(".n-4").text();
let countNum = 1;

function p1() {
  let b = document.getElementById("hr1");
  b.align = "left";
}
function p2() {
  let b = document.getElementById("hr1");
  b.align = "center";
}
function p3() {
  let b = document.getElementById("hr1");
  b.align = "right";
}

$(window).scroll(function () {
  // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
  if (scrTop > $(".numeric").offset().top - $(window).height()) {
    numAnimate();
    countNum--;
  }
});
//анимация цифр
function numAnimate() {
  var number = 1;
  if (countNum == 1) {
    setInterval(function () {
      number++;
      if (number <= n1) {
        $(".n-1").text(number);
      }
      if (number <= n2) {
        $(".n-2").text(number);
      }
      if (number <= n3) {
        $(".n-3").text(number);
      }
      if (number <= n4) {
        $(".n-4").text(number);
      }
    }, 40);
  }
  countNum--;
}

$(document).ready(function () {
  //слайдер для заголовка
  $(".slider-heading").slick({
    dots: true,
    arrows: false,
  });
  //слайдер для фото
  $(".slider").slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  const slickDots = document.querySelector(".slick-dots");
  for (let i = 0; i < slickDots.children.length; i++) {
    $(".slick-dots")
      .children(`:eq(${i})`)
      .html(`0${i + 1}`);
  }
  $(".dots").append($(".slider-heading >ul"));
});
