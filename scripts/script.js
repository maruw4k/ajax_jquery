$(document).ready(function () {
   
   $('.opcja').click(function () {
      option = $(this).attr("data-value");
      $('#select').html(option + "&nbsp;<span class='caret'></span>");
   });
   
   
   $("#search").click(function () {
      $(".car").css("visibility", "visible");
      
      var wyjscie = '';
      
      $.getJSON('car.json', function (result) {
         $.each(result, function (key, val) {
            if (option == val.typ_samochodu) {
               wyjscie += '<button class="accordion"> ' + val.nazwa + '</button>';
               wyjscie += ' <div class="panel" id="panel">';
               wyjscie += ' <p>' + val.opis + '</p>';
               wyjscie += '<div class=""><img class="img-responsive center-block text-center" src="' + val.img + '"</></div>';
               wyjscie += '</div>';
            }
         });
         
         $("#car").html(wyjscie);
         var acc = $(".accordion");
         var panel = $(".panel");
        
            $(acc).each(function (index) {
               $(this).on("click", function () {
                  var setClasses = !this.classList.contains('active');
                  $().setClass(acc, 'active', 'remove');
                  $().setClass(panel, 'show', 'remove');
                  if (setClasses) {
                     this.classList.toggle("active");
                     this.nextElementSibling.classList.toggle("show");
                  }
               });
            });
        
         
         $.fn.setClass = function (els, className, fnName) {
            $(els).each(function (index) {
               
                
               $(this).find('p').hide().fadeIn('slow');
               $(this).find('img').hide().fadeIn('slow');
               
               this.classList[fnName](className);
            });
         }
      });
   });
});