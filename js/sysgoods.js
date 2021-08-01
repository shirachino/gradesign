window.addEventListener('load', function() {
	// 模态框淡入淡出
	var btnadd = document.querySelector('.addbtn');
	var addmodal = document.querySelector('.add');

	var btnrev = document.querySelector('.revbtn');
	var revmodal = document.querySelector('.rev');

	var mask = document.querySelector('.mask');

	var close = document.querySelectorAll('.close');
	var btndef = document.querySelectorAll('.mydefbtn_default')
	btnadd.addEventListener('click', function() {
		mask.style.display = 'block';
		mask.style.opacity = 1;
		addmodal.style.display = 'block';
		addmodal.style.opacity = 1;
	});
	btnrev.addEventListener('click', function() {
		mask.style.display = 'block';
		mask.style.opacity = 1;
		revmodal.style.display = 'block';
		revmodal.style.opacity = 1;
	});
	// 关闭
	close[0].addEventListener('click', clsadd);
	btndef[0].addEventListener('click', clsadd);
	function clsadd() {
		mask.style.animation = 'fadeout .3s';
		addmodal.style.animation = 'fadeout .3s';
		setTimeout(function() {
			mask.style.display = 'none';
			addmodal.style.display = 'none';
			mask.style.animation = 'fadein .7s';
			addmodal.style.animation = 'fadein .5s';
		}, 300)
		mask.style.opacity = 0;
		addmodal.style.opacity = 0;
	}
	
	close[1].addEventListener('click', clsrev);
	btndef[1].addEventListener('click', clsrev);
	function clsrev() {
		mask.style.animation = 'fadeout .3s';
		revmodal.style.animation = 'fadeout .3s';
		setTimeout(function() {
			mask.style.display = 'none';
			revmodal.style.display = 'none';
			mask.style.animation = 'fadein .7s';
			revmodal.style.animation = 'fadein .5s';
		}, 300)
		mask.style.opacity = 0;
		revmodal.style.opacity = 0;
	}
});
