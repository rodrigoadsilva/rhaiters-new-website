
/*
 * Ajusta o tamanho do cover
 */
$('.banner').css({'height': (($(window).height()))+'px'});
$(window).on('resize', function(){
 $('.banner').css({'height': (($(window).height()))+'px'});
});

$(document).ready(function(){

    // ********************* NAVBAR BEHAVIOR ****************************
    // Close navbar on click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    })
    // Check if navbar is toggle to change color
    let navbarBlack = false;
    $('#navbarToggle').on('click',function(){
        if(!navbarBlack){
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.8)");

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
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.8)");
            navbarBlack = true;
        }
        else{
            $('#navbarTop').css("background-color", "rgba(1, 1, 1, 0.2)");
            navbarBlack = false;
        }
    });
    //*******************************************************************

    //*********************** COVER BEHAVIOR ****************************
    let coverChanger = setInterval(function(){
        
    });

});


/*$("#banner").animate({
    opacity: 0
}, 1000, function() {
    // Callback
    $(this).css("background", `url("./assets/images/cover/originals/cover_1.jpg") fixed center no-repeat`).promise().done(function(){
        // Callback of the callback :)
        $(this).animate({
            opacity: 1
        }, 600)
    });    
});*/