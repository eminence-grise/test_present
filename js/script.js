//������������� �� ����
$(".on_top").click(function() {
 $("html, body").animate({
 scrollTop: 0 + "px"
 }, {
 duration: 600
 });
});
/* � ����������� �� ��������� ������ ��������� � �������� top_show, �������� ��� ��������� ������ "������" */
$(window).scroll(function () { 
 if ($(this).scrollTop() > 300) $('.on_top').fadeIn();
 else $('.on_top').fadeOut();
});
