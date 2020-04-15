$(document).ready(function(){
    //Smooth scrool
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }//if
    });

    var l1 = document.getElementById('1')
    var l2 = document.getElementById('2')
    var l3 = document.getElementById('3')
    var l4 = document.getElementById('4')

    var div1 = document.getElementById('txt1')
    var div2 = document.getElementById('txt2')
    var div3 = document.getElementById('txt3')
    var div4 = document.getElementById('txt4')

    
    l1.onclick = function(){
        l2.style.flexBasis = '40%'
        l1.style.transition = '1s'
        l2.style.transition = '1s'
        l1.style.flexBasis = '60%'
        
        div1.style.display = 'block';
        div1.style.transition = '1s'
        div2.style.transition = '1s'
        div2.style.display = 'none';

    }
    l2.onclick = function(){
        l1.style.flexBasis = '40%'
        l1.style.transition = '1s'
        l2.style.transition = '1s'
        l2.style.flexBasis = '60%'

        div2.style.display = 'block';
        div1.style.transition = '1s'
        div2.style.transition = '1s'
        div1.style.display = 'none';

    }
    l3.onclick = function(){
        l4.style.flexBasis = '40%'
        l4.style.transition = '1s'
        l3.style.transition = '1s'
        l3.style.flexBasis = '60%'

        div3.style.display = 'block';
        div3.style.transition = '1s'
        div4.style.transition = '1s'
        div4.style.display = 'none';

    }
    l4.onclick = function(){
        l3.style.flexBasis = '40%'
        l3.style.transition = '1s'
        l4.style.transition = '1s'
        l4.style.flexBasis = '60%'

        div4.style.display = 'block';
        div4.style.transition = '1s'
        div3.style.transition = '1s'
        div3.style.display = 'none';

    }
  });
