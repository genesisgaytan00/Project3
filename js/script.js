function initMap(){
    let iit={lat:41.8349, lng:-87.6270};
    let map = new google.maps.Map(
        document.getElementById('map'),{center:iit,zoom: 16}
    );
    let marker = new google.maps.Marker({position: iit, map: map});
}

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("active");
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].classList.add("active");
//   dots[slideIndex-1].className += " active";
// }
