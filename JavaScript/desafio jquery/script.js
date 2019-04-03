$(document).ready(function() {
     $("a").attr({"target" : "_blank"});

     $("h2").click(function(){
       $(this).css("color", "red");
     });

     $("li:nth-last-child(1)").prepend('<i class="fab fa-pinterest"></i>');
     $("li:eq(0)").prepend('<i class="fab fa-facebook-f"></i>');
     $("li:eq(1)").prepend('<i class="fab fa-instagram"></i>');
     $("li:eq(2)").prepend('<i class="fab fa-twitter"></i>');

     $("ul:eq(1) li:eq(3)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
     $("ul:eq(1) li:eq(3)").after('<li><a href="#">link 5</a></li>')



})
