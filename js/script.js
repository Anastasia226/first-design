let n1 = $(".n-1").text();
let n2 = $(".n-2").text();
let n3 = $(".n-3").text();
let n4 = $(".n-4").text();
let countNum = 1;
let heading_setting = [
  {},
  {
    obj: 0,
    heading: "дизайн интерьера ",
    subtitle:
      " Подземный сток изменяет динамометаморфизм, за счет чего увеличивается мощность коры под многими хребтами.",
  },
  {
    obj: 1,
    heading: "Heading",
    subtitle: "subtitle",
  },
  {
    obj: 2,
    heading: "дизайн интерьера",
    subtitle:
      " Подземный сток изменяет динамометаморфизм, за счет чего увеличивается мощность коры под многими хребтами.",
  },
  {
    obj: 3,
    heading: "Heading",
    subtitle: "subtitle",
  },
  {
    obj: 4,
    heading: "Heading",
    subtitle: "subtitle",
  },
];
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
//слайдер для заголовка
$(document).on("click", ".list", function () {
  $(".active").removeClass("active");
  $(this).addClass("active");
  let text = $(this).text();
  for (let i = 0; i < 5; i++) {
    if (text == i) {
      $("#heading").text(heading_setting[i].heading);
      $("#subtitle").text(heading_setting[i].subtitle);
    }
  }
});
//слайдер для фото
// $("#slider").each(function () {
//   // Создаем карусель

//   // При клике по кнопке Влево
//   $(this)
//     .find(".js-prev")
//     .on("click", function () {
//       // Перематываем карусель назад
//       alert("prev");
//     });

//   // При клике по кнопке Вправо
//   $(this)
//     .find(".js-next")
//     .on("click", function () {
//       // Перематываем карусель вперед
//       alert("next");
//     });
// });
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
