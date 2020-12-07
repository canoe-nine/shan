//视频弹框
var btn = document.getElementsByClassName('btn');
var tk = document.getElementsByClassName('tk')[0];
var vid = document.getElementsByTagName('video')[0];
var close = document.getElementsByClassName('close')[0];
for(let i=0; i<btn.length;i++){
	btn[i].onclick = function(){
	tk.style.display = 'block';
	vid.currentTime=0;   //每次点击都从新开始播放
	vid.play();
}
}

close.onclick = function(){
	tk.style.display = 'none';
	vid.pause();
}

//角色点击切换

var dj = document.getElementsByClassName('zj');
var js = document.getElementsByClassName('bz');
for(var i=0;i<dj.length;i++){
	dj[i].setAttribute("index",i)
	dj[i].onclick = function(){
		var index = this.getAttribute("index");
		for(var i=0;i<dj.length;i++){
			js[i].style.display = 'none';
			dj[i].style.opacity = 0.6;
		}
		js[index].style.display = 'block';
		this.style.opacity = 1;
	}
}


// 接收从其他页面传递的参数并触发当前页面事件
function clickFun(arg1,arg2,arg3) {
	if (arg1==arg2) {
		clickEvent(arg3);
	}
}

function clickEvent(argument) {
	(()=>{
		// 兼容IE
		if(document.all) {
		    argument.click();
		}
		// 兼容其它浏览器
		else {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			argument.dispatchEvent(e);
		}
	})();
}
var loc = location.href;
var n1 = loc.length;
var n2 = loc.indexOf('=');
var txt = decodeURI(loc.substr(n2+1,n1-n2));

clickFun(txt,"huanglong",dj[1]);
clickFun(txt,"tusizi",dj[2]);
clickFun(txt,"chongming",dj[3]);


// 角色页面导航栏
var huanglong=document.getElementsByClassName('huanglong')[0];
var tusizi=document.getElementsByClassName('tusizi')[0];
var chongming=document.getElementsByClassName('chongming')[0];

function daoHangJueSe(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) {
	arg1.onclick = function(){
		arg2.style.display = 'none';
		arg3.style.opacity = 0.6;

		arg4.style.display = 'none';
		arg5.style.opacity = 0.6;

		arg6.style.display = 'none';
		arg7.style.opacity = 0.6;

		arg8.style.display = 'block';
		arg9.style.opacity = 1;
	}
}
daoHangJueSe(huanglong,js[0],dj[0],js[2],dj[2],js[3],dj[3],js[1],dj[1]);
daoHangJueSe(tusizi,js[0],dj[0],js[1],dj[1],js[3],dj[3],js[2],dj[2]);
daoHangJueSe(chongming,js[0],dj[0],js[2],dj[2],js[1],dj[1],js[3],dj[3]);



