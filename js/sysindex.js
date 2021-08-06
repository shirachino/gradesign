$(function() {
	// 模态框淡入淡出
	$('.mod_one').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastadd').show();
		$('.fastadd').css('opacity', 1);
	});
	$('.mod_two').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastsearch').show();
		$('.fastsearch').css('opacity', 1);
	});
	$('.mod_thr').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastsold').show();
		$('.fastsold').css('opacity', 1);
	});
		// 调用关闭
	$('.close').eq(0).on('click',() => { cls($('.fastadd').get(0)); });
	$('.mydefbtn_default').eq(0).on('click',() => { cls($('.fastadd').get(0)); });
	$('.close').eq(1).on('click',() => { cls($('.fastsearch').get(0)); });
	$('.mydefbtn_default').eq(1).on('click',() => { cls($('.fastsearch').get(0)); });
	$('.close').eq(2).on('click',() => { cls($('.fastsold').get(0)); });
	$('.mydefbtn_default').eq(2).on('click',() => { cls($('.fastsold').get(0)); });
		// 关闭函数
	function cls(modal) {
		$('.mask').css('animation','fadeout .3s');
		modal.style.animation = 'fadeout .3s';
		setTimeout(function () {
			$('.mask').hide();
			modal.style.display = 'none';
			$('.mask').css('animation','fadein .7s');
			modal.style.animation = 'fadein .5s';
		}, 300)
		$('.mask').css('opacity', 0);
		modal.style.opacity = 0;
	}
	// 模态框淡入淡出end
});
