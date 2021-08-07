$(function() {
	// 模态框淡入淡出
	$('.mod_one').on('click', function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastadd').show();
		$('.fastadd').css('opacity', 1);
	});
	$('.mod_two').on('click', function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastsearch').show();
		$('.fastsearch').css('opacity', 1);
	});
	$('.mod_thr').on('click', function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.fastsold').show();
		$('.fastsold').css('opacity', 1);
	});
	$('#newmem').on('click', function() {
		$('.mask').show();
		$('.mask').css('opacity', 1);
		$('.mem').show();
		$('.mem').css('opacity', 1);
	});
	// 调用关闭
	$('.close').eq(0).on('click', () => {
		cls($('.fastadd').get(0));
	});
	$('.mydefbtn_default').eq(0).on('click', () => {
		cls($('.fastadd').get(0));
	});
	$('.close').eq(1).on('click', () => {
		cls($('.fastsearch').get(0));
	});
	$('.mydefbtn_default').eq(1).on('click', () => {
		cls($('.fastsearch').get(0));
	});
	$('.close').eq(2).on('click', () => {
		cls($('.fastsold').get(0));
	});
	$('.mydefbtn_default').eq(2).on('click', () => {
		cls($('.fastsold').get(0));
	});
	$('.close').eq(3).on('click', () => {
		cls($('.mem').get(0));
	});
	// 关闭函数
	function cls(modal) {
		$('.mask').css('animation', 'fadeout .3s');
		modal.style.animation = 'fadeout .3s';
		setTimeout(function() {
			$('.mask').hide();
			modal.style.display = 'none';
			$('.mask').css('animation', 'fadein .7s');
			modal.style.animation = 'fadein .5s';
		}, 300)
		$('.mask').css('opacity', 0);
		modal.style.opacity = 0;
	}
	// 模态框淡入淡出end

	// 备忘录
	// 获取本地缓存数据
	function getLocalData() {
		var data = localStorage.getItem("memdata")
		if (data !== null) {
			return JSON.parse(data); //字符串转换为数组
		} else {
			return [];
		}
	}
	// 将数据转换成字符串保存到本地存储
	function saveLocalData(data) {
		localStorage.setItem("memdata", JSON.stringify(data)); //数组对象转换成字符串
	}
	// 渲染页面
	function loadLocalData() {
		var data = getLocalData();
		$(".memarea").empty();
		$.each(data, function(i, n) {
			// if(n.time !== ""){
			// 	n.time = n.time + " 之前记得完成：";
			// }
			n.time = n.time !== "" ? n.time + " 之前记得完成：" : n.time;
			$(".memarea").append('<div class="membox"><span data-index=' + i + '>&times;</span><i>' + n.time + '</i>' + n.inner +
				'</div>');
		})
	}
	// 调用渲染页面
	loadLocalData();
	// 对备忘录区域的关闭按钮添加删除事件
	$(".memarea").on("click", "span", function() {
		var data = getLocalData();
		var index = $(this).attr("data-index");
		data.splice(index, 1);
		saveLocalData(data);
		loadLocalData();
	})
	// 将输入的内容保存至本地存储
	$("#memconfirm").on("click", function() {
		if ($(".mem textarea").val() === "") {
			alert('您还没有输入内容！');
		} else {
			var local = getLocalData();
			local.push({
				inner: $(".mem textarea").val(),
				time: $(".mem input").val()
			});
			$(".mem textarea").val("");
			$(".mem input").val("");
			saveLocalData(local);
			loadLocalData();
		}
	});
	// 确认按钮调用关闭
	$('.mydefbtn_primary').eq(3).on('click', () => {
		cls($('.mem').get(0));
	});
	// 备忘录end
});
