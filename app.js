var main = function() {
  /* Push the body and the nav over by 285px over */
var images = ['images/beach_background.jpg',
               'images/boat_background.jpg'];

  var randomNumber = Math.floor(Math.random() * images.length);
  var bgImg = images[randomNumber];
  
  $('.jumbotron').css({'background': 'url('+bgImg+')'});
  // document.body.background = bgImg;
  // $('.jumbotron').addClass(bgImg);


  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });


};


$(document).ready(main);