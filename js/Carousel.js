//************************ CAROUSEL FUNCTIONS ************************** 
function constructCarousel(){
  const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
    ],
  });

  function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;
   
    function slide () {
      slideTimeout = setTimeout(
        function () {
          if (nextIndex >= slidesCount ) {
            nextIndex = 0;
          }
          slider.scrollItem(nextIndex++);
        },
        miliseconds
      );
    }
   
    slider.ele.addEventListener('glider-animated', function() {
      window.clearInterval(slideTimeout);
      slide();
    });
   
    slide();
  }
   
  sliderAuto(glider, 5000);
}