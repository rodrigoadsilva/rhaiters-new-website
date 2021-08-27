
/*
 * Ajusta o tamanho do cover
 */
$('#banner').css({'height': (($(window).height()))+'px'});
$(window).on('resize', function(){
 $('#banner').css({'height': (($(window).height()))+'px'});
});
/*
 * 
 * Busca os reviews
 *  
 */
let googleReviews;
googleReviews = JSON.parse(localStorage.getItem("googleReviews"));
/*$.get("api/getReviews.php", function(data){
    googleReviews = JSON.parse(data);
});*/


$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
    /*owl.owlCarousel({
        center: true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });*/

    // ********************* NAVBAR BEHAVIOR ****************************
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
    //*******************************************************************

    //*********************** COVER BEHAVIOR ****************************
    let coverImage = 1;
    let coverChanger = setInterval(function(){
        $("#banner").fadeTo('slow', 0.3, function(){
            if(coverImage == 1){
                $(this).toggleClass(`banner_${coverImage} banner_${coverImage+1}`);
                $('#coverTitle').hide().html('<strong>Consultoria para o seu negócio</strong>').fadeIn('slow');
                $('#coverSubtitle').hide().html('Quisque tincidunt semper gravida. Nunc ut leo quis ex maximus lacinia vitae sit amet orci. Nulla dapibus feugiat quam eu ultricies. Praesent id mollis turpis. Curabitur tellus eros, luctus sit amet lectus ac, facilisis lobortis quam.').fadeIn('slow');
            }
            else if(coverImage == 2){
                $(this).toggleClass(`banner_${coverImage} banner_${coverImage+1}`);
                $('#coverTitle').hide().html('<strong>E uma placa-mãe de fundo</strong>').fadeIn('slow');
                $('#coverSubtitle').hide().html('Aenean sollicitudin volutpat ornare. Donec magna sem, aliquam eu est sit amet, gravida dignissim enim. Nulla tempus odio arcu, eu venenatis nunc scelerisque vel. ').fadeIn('slow');
            }
            else{
                $(this).toggleClass(`banner_${coverImage} banner_${coverImage-2}`);
                $('#coverTitle').hide().html('<strong>Especialistas em tecnologia</strong>').fadeIn('slow');
                $('#coverSubtitle').hide().html('Disponibilizando para sua empresa especialistas prontamente aptos a entregar soluções de alta qualidade').fadeIn('slow');
            }
            coverImage++;
            if(coverImage == 4){coverImage = 1;}
        }).fadeTo('slow', 1);
    }, 6000);


});
