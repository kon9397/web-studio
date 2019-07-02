function slider() {
    let slideIndex = 1;
  
    slideShow(slideIndex);
    function slideShow(n) {
      let slides = document.querySelectorAll('.slider-text');
      if (n > slides.length) {
        slideIndex = 1;
      } 
      if(n < slideIndex) {
        slideIndex = slides.length;
      }
      slides.forEach(slide => {
        slide.classList.remove('active');
      })
  
      slides[slideIndex - 1].classList.add('active');
    }
  
    document.querySelectorAll('.switcher').forEach(function(switcher) {
      switcher.addEventListener('click', function() {
        document.querySelectorAll('.switcher').forEach(function(dot) {
          dot.classList.remove('active');
        });
  
        var n = parseInt(this.getAttribute('data-slide'));
        slideShow(slideIndex = n);
        this.classList.add('active');
      })
    });
}