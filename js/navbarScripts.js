//-------------OnScroll Navbar Effect--------------//
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 30){
        $('#navbar').addClass('navSlowUp');
    } 
    else{
        $('#navbar').removeClass('navSlowUp');
    }
});



// ------------------Side Navbar [Mobile View]-------------//
function openSideNavOuter(){
    $('#sideNavOuter').css({'right':'0'});
    $('body').css({'overflow': 'hidden','right': '30%'});
    // $('body').addClass('change-body-opacity');
}
function closeSideNavOuter(){
    $('#sideNavOuter').css({'right':'-100%'});
    $('body').css('overflow', 'auto');
    // $('body').removeClass('change-body-opacity');
}
function openSideNavProducts(){
    $('#sideNavProducts').css({'right':'0'});
    $('body').css({'overflow': 'hidden','right': '30%'});
    // $('body').addClass('change-body-opacity');
}
function closeSideNavProducts(){
    $('#sideNavProducts').css({'right':'-100%'});
    $('body').css('overflow', 'auto');
    // $('body').removeClass('change-body-opacity');
}
//2142985428