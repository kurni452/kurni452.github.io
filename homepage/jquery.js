$(function() {
  // Your jQuery code goes inside this special $(function) call
  
  console.log("hi from 2-animate-image.js");
  
  // Your code goes here
  
  // $(document).scroll(function() {   
  //   $(".title").css({'letter-spacing': '20px'});
  // });

  	var position = $(window).scrollTop(); 

	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    	if(scroll > position) {
        console.log('scrollDown');
        $('.title').css({'letter-spacing': '35px'});
        $('figcaption').css({'letter-spacing': '5px'});
    } else {
         console.log('scrollUp');
         $('.title').css({'letter-spacing': '10px'});
         $('figcaption').css({'letter-spacing': '2px'});
    }
    position = scroll;
});
  
});

