let window_width;
let mobile_nav_mode;
const NavbarLinks = $('#links');
const MenuToogler = $('#mobile-toogler');
const Hamburguer = $('#toogle-menu');
const MobileNavbar = $('#mobile-nav');

$(() =>{
    checkResponsivity();
    mobile_nav_mode = 0;
})

$(window).on('resize', () =>{
    checkResponsivity();
})

Hamburguer.on('click', (event) =>{
    if(mobile_nav_mode === 0){
        mobile_nav_mode = 1;
        Hamburguer.html(`<i class="bi bi-x-circle-fill"></i>`);
        MobileNavbar.addClass('active');
    }else if (mobile_nav_mode === 1){
        mobile_nav_mode = 0;
        Hamburguer.html(`<i class="bi bi-list"></i>`);
        MobileNavbar.removeClass('active');
    }
})

function checkResponsivity(){
    window_width = $(window).width();
    NavbarLinks.removeClass();
    if (window_width < 780 && NavbarLinks.hasClass('hidden') == false){
       NavbarLinks.addClass('hidden');
       MenuToogler.removeClass('hidden');
       Hamburguer.show();
    }else{
        NavbarLinks.addClass('links');
        MenuToogler.addClass('hidden');
    }
}