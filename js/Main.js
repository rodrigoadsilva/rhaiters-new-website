$(document).ready(function(){
    /*
     * Ajusta o tamanho do cover
     */
    $('#banner').css({'height': (($(window).height()))+'px'});
    $(window).on('resize', function(){
      $('#banner').css({'height': (($(window).height()))+'px'});
    });

    $('#orcamentoBtn').colorRotator({
      //colors: ['#fbff00','#fcff5e','#fafc86','#fbfcb3'],          //Yellow
      //colors: ['#14b331','#11a62c','#0f8c26','#0c611b'],        //Green
      colors: ['#0c3b61','#114e80','#1562a1','#1a7bc9'],         //Blue
      property: 'background'
    });

    $('#impressorasBtn').colorRotator({
      //colors: ['#fbff00','#fcff5e','#fafc86','#fbfcb3'],          //Yellow
      //colors: ['#14b331','#11a62c','#0f8c26','#0c611b'],        //Green
      colors: ['#0c3b61','#114e80','#1562a1','#1a7bc9'],         //Blue
      property: 'background'
    });

    /*
     * NAVBAR BEHAVIOR
     */
    // Close navbar on click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    })
    // Close navbar on click outside
    $(document).click(function () {
        // if($(".navbar-collapse").hasClass("in")){
          $('.navbar-collapse').collapse('hide');
        // }
     });
     $(window).scroll(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Check if navbar is toggle to change color
    let navbarBlack = false;
    $('#navbarToggle').on('click',function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 10){
            navbarBlack = false;
        }
        if(!navbarBlack){
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.95)");
            navbarBlack = true;
        }
        else{
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.2)");
            navbarBlack = false;
        }
    });
    
    // Check scroll to change navbar color
    $(window).scroll(function (event) {
        let scroll = $(window).scrollTop();
        if(scroll >= 10){
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.95)");
            navbarBlack = true;
        }
        else{
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.2)");
            navbarBlack = false;
        }
    });
    
    /*
     * COVER BEHAVIOR
     */
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    let coverImage = 1;
    
    function changeCover(){
      $("#banner").fadeTo('slow', 0.3, function(){
        if(coverImage == 1){
          $(this).toggleClass(`banner_${coverImage} banner_${coverImage+1}`);
          $('#coverTitle').hide().html('<strong>Consultoria em TI</strong>').fadeIn('slow');
          $('#coverSubtitle').hide().html('Assumimos a operação do dia a dia de sua TI, resolvendo os problemas dos usuários e da estrutura da empresa').fadeIn('slow');
        }
        else if(coverImage == 2){
          $(this).toggleClass(`banner_${coverImage} banner_${coverImage+1}`);
          $('#coverTitle').hide().html('<strong>Manutenção de Equipamentos</strong>').fadeIn('slow');
          $('#coverSubtitle').hide().html('A manutenção adequada de um hardware é tão importante quanto a de um software').fadeIn('slow');
        }
        else{
          $(this).toggleClass(`banner_${coverImage} banner_${coverImage-2}`);
          $('#coverTitle').hide().html('<strong>Especialistas em Tecnologia</strong>').fadeIn('slow');
          $('#coverSubtitle').hide().html('Disponibilizando para sua empresa especialistas prontamente aptos a entregar soluções de alta qualidade').fadeIn('slow');
        }
        coverImage++;
        if(coverImage == 4){coverImage = 1;}
      }).fadeTo('slow', 1);
      sleep(6000).then(() => { changeCover() });
    };
    sleep(6000).then(() => { changeCover() });
});
