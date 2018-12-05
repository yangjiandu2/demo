//获取ID
function $id(id){
 			return document.getElementById(id);
 		}

//随机数
		function getRand(minNum,maxNum){
		return parseInt(Math.random()*(maxNum-minNum)+1)+minNum;
		}
			
			
//获取时间的字符串
 	var date =new Date();
	function dateToString(date){
		//alert(date.getMonth()+1)
		//alert(date.getDate())	
		var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var w=date.getDay()//0-6
		var d=date.getDate()//day
		var h=date.getHours()
		var f=date.getMinutes()
		var s=date.getSeconds()
		return y+"年"+dbnum(m)+"月"+dbnum(d)+"日"+" "+dbnum(h)+":"+dbnum(f)+":"+dbnum(s)+" "+week[w];		
	}
	function dbnum(num){
	 return num/10<1? 0+""+num:num;	
	}
	dateToString(date);

//添加一个节点到指定某个元素后面
	function inserAfter(targetEle,newEle){
		var parentEle=targetEle.parentNode;
		if(parentEle.lastElementChild===targetEle){
			parentEle.appendChild(newEle);
		}else{
			parentEle.insertBefore(newEle,targetEle.nextElementSibling);
		}
	}
//获取从某日到某日的秒数
	function diff(startTime,endTime){
	   return (endTime.getTime()-startTime.getTime())/1000;
	}
//随机获取颜色
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	var rand = 0;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0,15);
		color += str[rand];
	}
	return color;
}

//兼容IE8以及以下的浏览器button属性
function getButton(eve){
	if(eve){
		return eve.button;
	}else{
		var button = event.button;
		switch(button){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;	
		}
	}
}
	


