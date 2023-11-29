
document.addEventListener("DOMContentLoaded", () => {
  const count = document.querySelectorAll(".counter");

  count.forEach((item, i) => {
      const countNum = item.textContent.replace(",", "").replace("건", "");
      let init = 1;

      let countAnim = setInterval(() => {
          if(countNum - init < 1000) {
              init = init + 10;
              item.textContent = init + "건";
              if(init >= countNum) {
                  clearInterval(countAnim);
              }
          } else if(countNum - init < 100) {
              init = init + 1;
              item.textContent = init + "건";
              if(init >= countNum) {
                  clearInterval(countAnim);
              }
          } else {
              init = init + 100;
              item.textContent = init + "건";
              if(init >= countNum) {
                  clearInterval(countAnim);
              }
          }
          
      }, 1000 / countNum * 100);
  });

  const sliderOpt = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      responsive: [
          {
            breakpoint: 1320,
            on : $('.slider').on('breakpoint', function(event, slick, breakpoint){
              // console.log(event, slick, breakpoint); 
              if(breakpoint === null) {
                  $('.slider').slick('unslick');
              }
            }) ,
          },
          
      ]
  }

  // const sliderReset = function() {
  //     $(".slidebox").removeAttr("style");
  // }
  
  const setSlider = function() {
      let winWidth = $(window).width();
      if(winWidth >= 1320){
          $('.slider').slick('unslick');
          // sliderReset();
      } else {
          $('.slider').slick(sliderOpt);
      }
  }      

  $(window).on("resize", function() {
      setSlider();
  });

  setSlider();
});