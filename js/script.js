//Пролистывание на верх
$(".on_top").click(function() {
 $("html, body").animate({
 scrollTop: 0 + "px"
 }, {
 duration: 600
 });
});
/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
$(window).scroll(function () { 
 if ($(this).scrollTop() > 300) $('.on_top').fadeIn();
 else $('.on_top').fadeOut();
});
