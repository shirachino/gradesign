window.addEventListener('load', function() {
	// 模态框淡入淡出
	var mask = document.querySelector('.mask');
	var modal = document.querySelector('.mydefmodal');
	var close = document.querySelector('.close');
	var btndef = document.querySelector('.mydefbtn_default')
	
	var btnone = document.querySelector('.mod_one');
	var fastaddmodal = document.querySelector('.fastadd');
	
	btnone.addEventListener('click', function() {
		mask.style.display = 'block';
		mask.style.opacity = 1;
		fastaddmodal.style.display = 'block';
		fastaddmodal.style.opacity = 1;
	})
	// 关闭通用
	close.addEventListener('click', cls);
	btndef.addEventListener('click', cls);
	function cls() {
		mask.style.animation = 'fadeout .3s';
		modal.style.animation = 'fadeout .3s';
		setTimeout(function() {
			mask.style.display = 'none';
			modal.style.display = 'none';
			mask.style.animation = 'fadein .7s';
			modal.style.animation = 'fadein .5s';
		}, 300)
		mask.style.opacity = 0;
		modal.style.opacity = 0;
	}
});
