var title = ["科技", "生活", "设计", "娱乐", "农业", "公益"];
$.ajax({
	url:"http://www.ikindness.cn/api/test/getFund"
}).done(function(data){
	console.log(data);
	$(".fullNav").floor({
		data : data.data
	});
});

$.fn.extend({
	floor : function(data){
		var data = data.data;
		for(j = 0;j<6;j++){
			$firstDiv = $("<div class='first'></div>");
			$firstDiv.append("<div class='floor-info'><a href=''>"+
								"<span class='num'>"+(j+1)+"F</span >"+
								"<span class='name'>"+title[j+1]+"</span>"+
								"<span class='icon'>▶</span>"+
								"</a></div>");
			$firstUl = $("<ul class='nav-list'></ul>");
			for(i = 0+8*j;i<8+8*j;i++){	
				var _data = data;
				if(i == 0+8*j){
					$firstUl.append("<li> <img class='main-img' src='"+_data[i].image+"' /> <a class='first-link' href=''> <div class='info'>"+
								"<div class='name'>"+_data[i].name+"</div><div class='money'> <span>已筹金额￥</span> <span class='J_money'>"+_data[i].sum+"</span>"+
								"</div><span class='link'><span class='text'>查看项目></span></span></div></a></li>");	
				}else{

					$firstUl.append("<li class='nav-item'><a class='link' href=''><span class='project-area'><img src='"+_data[i].image+"' /></span>"+
						"<span class='project-text'>" + _data[i].name + "</span><div class='hidden'></div></a><span class='tag-con'>"+
						"<span class='tag-link'>"+_data[i].label[0]+"</span><span class='tag-link'>"+_data[i].label[1]+"</span>"+
						"<span class='tag-link'>"+_data[i].label[2]+"</span></span><span class='bar'><i class='full'></i>"+
	      				"</span><span class='project'><span class='other-info'><span class='every-info info-deal'><em class='info-num'>"+_data[i].rate+"</em>"+
	      				"<em class='info-name'>达成率</em></span><span class='every-info info-dollar'><em class='info-num'>"+_data[i].sum+"</em>"+
	      				"<em class='info-name'>已筹金额</em></span><span class='every-info info-support'><em class='info-num'>"+_data[i].amount+"</em>"+
	      				"<em class='info-name'>支持人数</em></span></span></span></li>");
				}	

			}
			$firstDiv.append($firstUl);
			$firstDiv.appendTo(".fullNav");
			// if($(".tag-link").text() == 'undefined'){
			// 	console.log($(this).text());
			// }
			if($('.tag-con').find('.tag-link').eq(2).text()=='undefined'){
				console.log($(this));
				$(this).eq(0).css({'height':'0px'})
			}
		}
		
		
	}
})