  // add icons
  $('.playspace').append('<i class="em em-no_good"></i>');
  $('.playspace').append('<i class="em em-feelsgood"></i>');
  $('.playspace').append('<i class="em em-older_woman"></i>');



  $(document).ready(function(){

  // set the initial positions

  $('h1').css({
  	opacity:0
  });

  $('.em-no_good').css({
    top: 0,
    left: 600
  });

  $('.em-feelsgood').css({
    top: 210,
    left: 400
  });

  $('.em-older_woman').css({
    top: 210,
    left: 410
  });


  $('.refresh').click(function(){
  console.log("yay!");       
  reset();
  console.log("yay!");

      });

  });
  // play!

    $('.em-no_good').animate({top:210}, 1000);
    $('.em-no_good').animate({left: 50}, 1000);

  // after 660ms...
  setTimeout(function() {
    // ...runaway
    $('.em-feelsgood').animate({
      left: 0
    }, 1500, 'easeInOutBounce');
    }, 660);

  setTimeout(function() {
  $('h1').css({
  	opacity:100
  }, 2000, 'easeInOutBounce');
    }, 1860);



  



function reset(){

$('h1').css({
    opacity:0
  });

  $('.em-no_good').css({
    top: 0,
    left: 600
  });

  $('.em-feelsgood').css({
    top: 210,
    left: 400
  });

  $('.em-older_woman').css({
    top: 210,
    left: 410
  });

    $('.em-no_good').animate({top:210}, 1000);
    $('.em-no_good').animate({left: 50}, 1000);

  setTimeout(function() {
    // ...runaway
    $('.em-feelsgood').animate({
      left: 0
    }, 1500, 'easeInOutBounce');
    }, 660);

  setTimeout(function() {
  $('h1').css({
    opacity:100
  }, 2000, 'easeInOutBounce');
    }, 1860);

};

