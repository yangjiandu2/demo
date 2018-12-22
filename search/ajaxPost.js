	function ajaxPost(obj){//fn = function(){alert(11)}  fn();
		var xhr = null;	
		if(XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		obj.url = obj.url + "?rand=" + new Date().getTime();
		xhr.open("post",obj.url);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//"uname=tom&age=23"
		xhr.send(params(obj.data));
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					obj.success(xhr.responseText);
				}else{
					obj.error("请求失败了，失败状态："+xhr.status+",失败原因"+xhr.statusText);
				}
			}
		}
	}
	function params(obj){
		var arr = [];
		for(var item in obj){
			arr.push(item + "=" + encodeURI(obj[item]) );
		}
		return arr.join("&");
	}
