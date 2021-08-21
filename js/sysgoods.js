Vue.config.devtools = true;
$(function(){
	// 模态框淡入淡出
	$('.addbtn').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.add').show();
		$('.add').css('opacity', 1);
	});
	$('.revbtn').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.rev').show();
		$('.rev').css('opacity', 1);
	});
	$('.soldbtn').on('click',function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.sold').show();
		$('.sold').css('opacity', 1);
	});
		// 调用关闭
	// for(i=0; i<$('.close').length;i++){
	// 	$('.close').on('click',() => { cls($('.mydefmodal')); });
	// 	$('.mydefbtn_default').on('click',() => { cls($('.mydefmodal')); });
	// } //for循环失败
	
	$('.close').eq(0).on('click',() => { cls($('.add').get(0)); });
	$('.mydefbtn_default').eq(0).on('click',() => { cls($('.add').get(0)); });
	$('.close').eq(1).on('click',() => { cls($('.rev').get(0)); });
	$('.mydefbtn_default').eq(1).on('click',() => { cls($('.rev').get(0)); });
	$('.close').eq(2).on('click',() => { cls($('.sold').get(0)); });
	$('.mydefbtn_default').eq(2).on('click',() => { cls($('.sold').get(0)); });
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
		// 原生JS写法
	// btnadd.addEventListener('click', function () {
	// 	mask.style.display = 'block';
	// 	mask.style.opacity = 1;
	// 	addmodal.style.display = 'block';
	// 	addmodal.style.opacity = 1;
	// });
	// btnrev.addEventListener('click', function () {
	// 	mask.style.display = 'block';
	// 	mask.style.opacity = 1;
	// 	revmodal.style.display = 'block';
	// 	revmodal.style.opacity = 1;
	// });
	// btnsold.addEventListener('click', function () {
	// 	mask.style.display = 'block';
	// 	mask.style.opacity = 1;
	// 	soldmodal.style.display = 'block';
	// 	soldmodal.style.opacity = 1;
	// });
	// 关闭

	// close[1].addEventListener('click', clsrev);
	// btndef[1].addEventListener('click', clsrev);
	// function clsrev() {
	// 	mask.style.animation = 'fadeout .3s';
	// 	revmodal.style.animation = 'fadeout .3s';
	// 	setTimeout(function () {
	// 		mask.style.display = 'none';
	// 		revmodal.style.display = 'none';
	// 		mask.style.animation = 'fadein .7s';
	// 		revmodal.style.animation = 'fadein .5s';
	// 	}, 300)
	// 	mask.style.opacity = 0;
	// 	revmodal.style.opacity = 0;
	// }

	// close[2].addEventListener('click', clssold);
	// btndef[2].addEventListener('click', clssold);
	// function clssold() {
	// 	mask.style.animation = 'fadeout .3s';
	// 	soldmodal.style.animation = 'fadeout .3s';
	// 	setTimeout(function () {
	// 		mask.style.display = 'none';
	// 		soldmodal.style.display = 'none';
	// 		mask.style.animation = 'fadein .7s';
	// 		soldmodal.style.animation = 'fadein .5s';
	// 	}, 300)
	// 	mask.style.opacity = 0;
	// 	soldmodal.style.opacity = 0;
	// }
	// 模态框淡入淡出end
});
	
	