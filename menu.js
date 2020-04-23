jQuery(document).ready(function ($) {
    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      var counter = 1;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
          counter--;
          if(counter==0) counter=6;
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
          counter++;
          if(counter==7) counter=1;
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });

      $('a.play').click(function(){
        window.location.href = "levels/_"+counter+"/_"+counter+".html";
      });
  
  });    

  var body = document.getElementById("body");

  body.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var pozycjax = x.toString(); 
    var pozycjay = y.toString();
    var pozycja = pozycjax/15 + " " + pozycjay/23;
    console.log(pozycja); 

    body.style.backgroundPosition = pozycja;
    });








  