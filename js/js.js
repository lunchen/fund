function createBannerImg(){
	for(var i=0;i<5;i++){
		$(".banner").append("<a><img src='./image/banner"+(i+1)+".jpg' /></a>");
		index = i;
	};
};
createBannerImg();
function createBannerDots(){
	for(var i=0;i<5;i++){
		$(".banner1").find(".dots").append("<a class='dot'></a>");
	};
};
createBannerDots();
// banner 初始化
var	$index = $(".dot"),
	_index,
	x = 0;
$(".banner a:eq(0)").find("img").css("display","block");
$(".dots .dot:eq("+ x +")").addClass("current");
// 点点切换
$(".dots .dot").mouseover(function(){
	for(var i = 0;i<$index.length;i++){
		$(this).addClass("current").siblings().removeClass("current");
		var _index = $(this).index();
	}
	$(".banner a:eq("+ _index + ")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ _index + ")").addClass("current").siblings().removeClass("current");
	x =_index;
});

// 向右切换
$(".banner1 .banner-r").click(function(){
	clearInterval(time);
	x >=4 ? x = 0 : ++x;
	$(".banner a:eq("+ x +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ x + ")").addClass("current").siblings().removeClass("current");
	time = setInterval(timer,2000);
});
// 向左切换
$(".banner1 .banner-l").click(function(){
	clearInterval(time);
	x <= 0 ? x = 4 : x--;
	$(".banner a:eq("+ x +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ x + ")").addClass("current").siblings().removeClass("current");
	time = setInterval(timer,2000);
});
// 定时轮播
var timer = function(){
	x++;
	x ==5 ? $(".dots .dot:eq(0)").mouseover() : $(".dots .dot:eq("+ x +")").mouseover();
}
	time = setInterval(timer,2000);
$(".banner").mouseover(function(){
	clearInterval(time);
}).mouseleave(function(){
	time = setInterval(timer,2000);
});



var floardata = ["科技","生活","设计","娱乐","农业","公益"]
$.ajax({
	url:"http://www.ikindness.cn/api/test/getFund",
	type:"get",
	success : (function(data){
		console.log(data)
		$(".c-kind-a").append(template("tmpl",data));
		for(var i=0;i<6;i++){
			$(".div1").eq(i).find(".theFloor").html((i+1)+"F");
			$(".div1").eq(i).find(".theName").html(floardata[i]);
		}
		console.log(data.data.length);
		var theWidth,k=0;
		for(var j=0,len=data.data.length;j<len;j++){
			theWidth = parseInt(data.data[j].rate);
			if(j%8 != 0){
				$(".schedule-current").eq(k).css("width",theWidth + "%");
				k++;
			}
		}
	})
})


