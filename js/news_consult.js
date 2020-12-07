window.onload = function(){
	// 修改
	var arrowR = getEleByCN('arrowR')[0];
	var arrRight_icon = getEleByCN('arrRight_icon')[0];
	var playList = getEleByCN('play_list')[0];
	var videoPlayer = getEleByCN('videoPlayer')[0];
	var arrowTop = getEleByCN('arrowTop')[0];
	var arrowBottom = getEleByCN('arrowBottom')[0];
	bgClick(arrowR,arrRight_icon,playList,arrowTop,arrowBottom);
	bgTBClick(arrowBottom,playList,arrowTop);
	function bgTBClick(obj5,obj6,obj7){
		obj5.onclick = function(){
			if(obj6.offsetTop==0){
				obj6.style.top = "-309px";
				obj5.style.top = "602px";
				obj7.style.top = "309px";
			}else if(obj6.offsetTop==-309){
				obj6.style.top = "-309px";
				obj5.style.top = "602px";
			}
		}
		obj7.onclick = function(){
			if(obj6.offsetTop==0){
				obj6.style.top = "0px";
				obj7.style.top = "0px";
			}else if(obj6.offsetTop==-309){
				obj6.style.top = "0px";
				obj7.style.top = "0px";
				obj5.style.top = "293px";
			}
		}
	}
	// obj3-->play_list/obj2-->arrRight_icon/obj1-->arrowR
	function bgClick(obj1,obj2,obj3,obj8,obj9){
		obj1.onclick = function(){
			//拉开
			if (obj1.offsetLeft == 0) {
				obj3.style.left = "0px";
				obj1.style.left = "180px";
				obj2.style.cssText = "background: url('./img/img3/arLeftW.png');";
				// 上下箭头出现
				obj8.style.display = "block";
				obj9.style.display = "block";
								
				obj1.onmouseover = function(){
					obj2.style.cssText = "background: url('./img/img3/arLeftO.png');";
				}
				obj1.onmouseout = function(){
					obj2.style.cssText = "background: url('./img/img3/arLeftW.png');";
				}
				obj3.onmouseover = function(){
					obj3.style.left = "0px";
					obj1.style.left = "180px";
				}
			}
			//收起
			if (obj1.offsetLeft == 180) {
				obj3.style.left = "-180px";
				obj1.style.left = "0px";
				arrRight_icon.style.cssText = "background: url('./img/img3/arRightW.png');";
				
				// 上下箭头消失
				obj8.style.display = "none";
				obj9.style.display = "none";
				
				obj1.onmouseover = function(){
					obj2.style.cssText = "background: url('./img/img3/arRightO.png');";
				}
				obj1.onmouseout = function(){
					obj2.style.cssText = "background: url('./img/img3/arRightW.png');";
				}
			}	
		}
	}
	// obj3-->play_list/obj2-->arrRight_icon/obj1-->arrowR
	// function bgClick(obj1,obj2,obj3){
	// 	obj1.onclick = function(){
	// 		//拉开
	// 		if (obj1.offsetLeft == 0) {
	// 			obj3.style.left = "0px";
	// 			obj1.style.left = "180px";
	// 			obj2.style.cssText = "background: url('./img/img3/arLeftW.png');";
	// 			obj1.onmouseover = function(){
	// 				obj2.style.cssText = "background: url('./img/img3/arLeftO.png');";
	// 			}
	// 			obj1.onmouseout = function(){
	// 				obj2.style.cssText = "background: url('./img/img3/arLeftW.png');";
	// 			}
	// 			obj3.onmouseover = function(){
	// 				obj3.style.left = "0px";
	// 				obj1.style.left = "180px";
	// 			}
	// 		}
	// 		//收起
	// 		if (obj1.offsetLeft == 180) {
	// 			obj3.style.left = "-180px";
	// 			obj1.style.left = "0px";
	// 			arrRight_icon.style.cssText = "background: url('./img/img3/arRightW.png');";
	// 			obj1.onmouseover = function(){
	// 				obj2.style.cssText = "background: url('./img/img3/arRightO.png');";
	// 			}
	// 			obj1.onmouseout = function(){
	// 				obj2.style.cssText = "background: url('./img/img3/arRightW.png');";
	// 			}
	// 		}	
	// 	}
	// }
	function getEleByCN(className){
		return document.getElementsByClassName(className);
	}

	function getEleByCN(className){
		return document.getElementsByClassName(className);
	}

	// 导航栏跳转至角色介绍并传参
	var huanglong=document.getElementsByClassName('huanglong')[0];
	var tusizi=document.getElementsByClassName('tusizi')[0];
	var chongming=document.getElementsByClassName('chongming')[0];
	function jump(a,b,c) {
		a.onclick=function() {
			location.href=b+'.html?'+'txt='+c;
		}
	}
	jump(huanglong,"roles","huanglong");
	jump(tusizi,"roles","tusizi");
	jump(chongming,"roles","chongming");
	
}