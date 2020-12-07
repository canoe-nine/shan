window.onload = function(){

	var tab_li = document.getElementsByClassName('tab_li');
	var remove_line = document.getElementById('remove_line');
	
	function tabNav(tabErr,leftErr){
		tabErr.onmouseover = function(){
			remove_line.style.cssText = "left:"+leftErr+"px";
		}
		for(var i=0;i<tab_li.length;i++){
			tab_li[i].onmouseout = function(){
				remove_line.style.cssText = "left:145px;";
			}
		}
	}
	tabNav(tab_li[0],28);
	tabNav(tab_li[1],145);
	tabNav(tab_li[2],255);
	tabNav(tab_li[3],370);
	tabNav(tab_li[4],485);

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
