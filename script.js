// search locomotivejs github and check the Smooth name box and copy the js code.
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"), // main----- islye likha q k main pori website ka div hai taky smooth 
                                        //scrolling pori webpage pr lagy.
    smooth: true
});
//                  -------locomotive End-------



var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

//   Swiper css

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 