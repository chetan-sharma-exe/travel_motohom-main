(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  $(document).ready(function () {
    $(".nav-item.dropdown .nav-link").click(function (e) {
      e.preventDefault();
      let dropdownMenu = $(this).next(".dropdown-menu");

      if (dropdownMenu.hasClass("show")) {
        $(".dropdown-menu").removeClass("show");
        // $(this).next(".dropdown-menu").removeClass("show");
      } else {
        $(".dropdown-menu").removeClass("show"); // Close other dropdowns
        dropdownMenu.addClass("show");
      }
    });

    // Close dropdown when clicking outside
    $(document).click(function (e) {
      if (!$(e.target).closest(".nav-item.dropdown").length) {
        $(".dropdown-menu").removeClass("show");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  $(".carousel-one").owlCarousel({
    items: 3, // Number of items visible
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: true, // Show next/prev buttons
    dots: true, // Show navigation dots
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Time between slides
    responsive: {
      0: { items: 1 }, // 1 item for small screens
      600: { items: 2 }, // 2 items for medium screens
      1000: { items: 3 }, // 3 items for large screens
    },
  });
});

$(document).ready(function () {
  $(".carousel-two").owlCarousel({
    items: 2, // Number of items visible
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: true, // Show next/prev buttons
    dots: true, // Show navigation dots
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Time between slides
    responsive: {
      0: { items: 1 }, // 1 item for small screens
      600: { items: 2 }, // 2 items for medium screens
      //   1000: { items: 3 }, // 3 items for large screens
    },
  });
});

function downloadPDF(event) {
  event.preventDefault(); // Prevent form submission
  const link = document.createElement("a");
  link.href = "./assets/catalogue/MOTOHOM CATLOGE B.pdf"; // Path to PDF
  link.download = "MOTOHOM_CATALOGUE.pdf"; // Custom download filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
