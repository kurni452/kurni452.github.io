$(function() {
  // Your jQuery code goes inside this special $(function) call
      
    $('.title').mouseenter(function() {
    $('body').addClass("paused");
    console.log("hover");
  });

    $('.title').mouseleave(function() {
    $('body').removeClass("paused");
    console.log("hover");
  });
    
    
  });

