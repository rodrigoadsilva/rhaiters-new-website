$('.banner').css({'height': (($(window).height()))+'px'});
 
$(window).on('resize', function(){
 $('.banner').css({'height': (($(window).height()))+'px'});
});

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()


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