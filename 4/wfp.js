let hamburger = document.querySelector(" .hamburger");
let sidebar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close-sidebar");
let sidebarLinks = document.querySelectorAll(".sidebar-links li");

// opening and closing the sidebar

hamburger.addEventListener("click", () => {
  sidebar.style.left = 0;
});
closeSidebar.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
sidebarLinks.forEach((li) => {
  li.addEventListener("click", () => {
    sidebar.style.left = "-100%";
  });
});
// scrolling to the clicked section
$(function () {
  "use strict";
  $(".links li").click(function () {
    $("html, body").animate(
      {
        scrollTop:
          $("#" + $(this).data("scroll")).offset().top +
          1 -
          $(".navbar").height(),
      },
      1000
    );
    $(this).addClass("home1").siblings().removeClass("home1");
  });
});
$(function () {
  "use strict";

  $(".prnt").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - $(".navbar").height()) {
      var prntId = $(this).attr("id");
      $('.links li[data-scroll = "' + prntId + '"]')
        .addClass("home1")
        .siblings()
        .removeClass("home1");
      $(".buy").removeClass("home1");
    }
  });
});
$(function () {
  "use strict";
  $(window).scroll(function () {
    $(".prnt").each(function () {
      if (
        $(window).scrollTop() >
        $(this).offset().top - $(".navbar").height()
      ) {
        var prntId = $(this).attr("id");
        $('.links li[data-scroll = "' + prntId + '"]')
          .addClass("home1")
          .siblings()
          .removeClass("home1");
        $(".buy").removeClass("home1");
      }
    });
  });
});
// faq functionality
$(function () {
  "use strict";
  $(".faq ul li a i").click(function () {
    $(this).toggleClass("fa-plus-circle fa-minus-circle");
    $(this).parent().next("div").toggleClass("hddn", 500);
  });
});
// pop up of the buy ticket
$(function () {
  "use strict";
  $(".buy1").click(function () {
    $(".pop-up").fadeIn(400);
    $(".inner").css({
      top: "5%",
    });
  });
  $(".pop-up").click(function () {
    $(this).fadeOut(400);
    $(".inner").css({
      top: "-57%",
    });
  });
  $(".inner").click(function (e) {
    e.stopPropagation();
  });
  $(".pop-up .exit").click(function () {
    $(".pop-up").fadeOut(400);
    $(".inner").css({
      top: "-57%",
    });
  });
  $(".pop-up-button").click(function () {
    $(".pop-up").fadeOut(400);
    $(".inner").css({
      top: "-57%",
    });
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".pop-up").fadeOut(400);
    }
  });
});

// Header fixed on scroll
$(function () {
  "use strict";
  $(window).on("scroll", function () {
    $("div.navbar").css({
      backgroundColor: "#060c21",
      height: "72",
    });
    if ($(window).scrollTop() > 50) {
      $("div.navbar").css(
        {
          backgroundColor: "#060c21",
          height: "72",
        },
        800
      );
    } else {
      $("div.navbar").css(
        {
          height: 0,
        },
        800
      );
    }
  });
});
//  scroll to top
$(function () {
  "use strict";
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut(500);
    }
  });
});
$(function () {
  "use strict";
  $(".back-to-top").click(function (Event) {
    Event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// the schedule selction of the day
$(function () {
  "use strict";
  $("div.date a").click(function () {
    $(this).addClass("acti").siblings("a").removeClass("acti");
    $("#" + $(this).data("select"))
      .removeClass("selected")
      .siblings()
      .addClass("selected");
  });
});

// Gallery carousel (uses the Owl Carousel library)
$(".gallery-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  center: true,
  responsive: {
    0: { items: 1 },
    768: { items: 3 },
    992: { items: 4 },
    1200: { items: 5 },
  },
});
