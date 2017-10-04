$(function(){
    var carouselList = $("#carousel ul");
        
    setInterval(changeSlide,3000);
    
    function changeSlide(){
      carouselList.animate({marginLeft:-400}, 400, moveFristSlide);
    }

    function moveFristSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        $(lastItem.after(firstItem)
    )
      $(carouselList.css({marginLeft:0}));
    };
  });