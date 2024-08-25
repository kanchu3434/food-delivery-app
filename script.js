constmobile =document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobileLink.addEventListener("click",function(){
    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');

})

mobileLink.addEventListener('click',function(){
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle('is-active');
        mobileLink.classList.toggle('active');
    }
})

var step =100;
var stepfilter = 60;
var scrolling = true;

$(".back").bind('click',function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        screenLeft : '-='+step + "px"
    });
})

$(".next").bind('click',function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        screenLeft : '+='+step + "px"
    });
})

$(".back-menus").bind('click',function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        screenLeft : '-='+stepfilter + "px"
    });
})

$(".next-menus").bind('click',function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        screenLeft : '+='+stepfilter + "px"
    });
})
