$(function(){
	// 用户设置下拉菜单
	$(".set").hover(function () {
		$(".user_set").stop().slideToggle(200);
	})
	// 导航栏缓动
	$("summary").on("click",function(){
		$(this).parent().next().stop().slideToggle(300);
		$(this).toggleClass("change");
	})
})