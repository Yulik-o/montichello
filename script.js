// First slider
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  vertical: true,
  dotsClass: "vertical-dots",
  // verticalSwiping: true;
});

// const headerEl = document.querySelector(".header_wrapper");
// headerEl;
document.body.addEventListener("scroll", (event) =>
  console.log(event.target.scrollTop)
);

// Second slider
$(".multiple-items").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  // vertical: false;
});

let gallery = $(".gallery a").simpleLightbox();
gallery.on("show.simplelightbox", function () {
  gallery.next();
});
