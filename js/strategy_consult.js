window.onload=function() {
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