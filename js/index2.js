window.onload=function () {
	// 轮播
	var imgArr=document.getElementsByClassName('lunbo_li');
	var liArr=document.getElementsByClassName('b2c_ul_li');
	var ul=document.getElementsByClassName('b2_luobo')[0];
	var b2_center=document.getElementsByClassName('b2_center')[0];

	var num=0;
	var num1=1;
	function dianJi(li,la,u,n,n1,s) {
		li.onclick=function() {
			u.style.cssText="margin-top: "+s+"px;";
			for(var i=0;i<liArr.length;i++){
				la[i].style.cssText="background-position: -682px -494px;";
			}

			li.style.cssText="background-position: -732px -494px;";
			num=n;
			num1=n1;
		}
	}
	dianJi(liArr[0],liArr,ul,0,1,0);
	dianJi(liArr[1],liArr,ul,1,2,-344);
	dianJi(liArr[2],liArr,ul,2,3,-688);
	dianJi(liArr[3],liArr,ul,3,4,-1032);
	dianJi(liArr[4],liArr,ul,4,5,-1376);
	dianJi(liArr[5],liArr,ul,5,0,-1720);

	setInterval(function() {
		ul.style.cssText="margin-top:"+(-344*num+(-344))+"px;";
		num++;
		if (num>5) {
			num=0;
			ul.style.cssText="margin-top: 0px;";
		}
		
	},3000)	

	liArr[0].style.cssText="background-position: -732px -494px;";
	
	setInterval(function fun2() {
		liArr[num1].style.cssText="background-position: -732px -494px;";
		if (num1-1!=-1&&num1<=5) {
			liArr[num1].style.cssText="background-position: -732px -494px;";
			liArr[num1-1].style.cssText="background-position: -682px -494px;";
		}else if (num1-1==-1) {
			liArr[0].style.cssText="background-position: -732px -494px;";
			liArr[5].style.cssText="background-position: -682px -494px;";
		}
		num1++;
		if (num1>5) {
			num1=0;
		}
	},3000);


	// 切换
	var zuixin=document.getElementsByClassName('zuixin')[0];
	var xinwen=document.getElementsByClassName('xinwen')[0];
	var huodong=document.getElementsByClassName('huodong')[0];
	var gonggao=document.getElementsByClassName('gonggao')[0];
	var b2_right=document.getElementsByClassName('b2_right')[0];
	var fenlei = document.getElementById('fenlei');
	
	
	var b2n_ul=document.getElementsByClassName('b2');
	var zi=document.getElementsByClassName('zi');

	function xianYin(arg1,arg2,arg3,arg4,arg5) {

		arg3.addEventListener("mouseover",function () {
			arg1.onmouseover=function () {
			arg2.style.display="block";
			}
			arg1.onmouseout=function () {
			arg2.style.display="none";
			}
			arg5.style.display="none";
		})
		arg3.addEventListener("mouseout",function () {
			arg5.style.display="block";
		})
	}


	xianYin(xinwen,b2n_ul[2],fenlei,b2n_ul[0],b2n_ul[1]);
	xianYin(huodong,b2n_ul[3],fenlei,b2n_ul[0],b2n_ul[1]);
	xianYin(gonggao,b2n_ul[4],fenlei,b2n_ul[0],b2n_ul[1]);
	xianYin(zuixin,b2n_ul[0],fenlei,b2n_ul[0],b2n_ul[1]);

	// 角色
	var rwimg = document.getElementsByClassName('rwimg');
	var rwimg1 = document.getElementsByClassName('rwimg1');
	var rw = document.getElementsByClassName('rw');

	var renwujieshao = document.getElementsByClassName('renwujieshao');
	var renwudatu = document.getElementsByClassName('renwudatu');

	function clickFun(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
		arg1.onclick = function () {
			arg2.style.display = "block";
			arg3.style.display = "none";
			arg4.style.display = "none";
			arg5.style.display = "none";

			arg6.style.left="80px";
			arg7.style.left="-480px";
			arg8.style.left="-480px";
			arg9.style.left="-480px";
			
			setTimeout(function () {
				arg10.style.right="-100px";
				arg11.style.right="-900px";
				arg12.style.right="-900px";
				arg13.style.right="-900px";
			},100)
		}
	}

	clickFun(rw[3],rwimg1[3],rwimg1[0],rwimg1[1],rwimg1[2],renwujieshao[3],renwujieshao[2],renwujieshao[1],renwujieshao[0],renwudatu[3],renwudatu[2],renwudatu[1],renwudatu[0]);
	clickFun(rw[2],rwimg1[2],rwimg1[0],rwimg1[1],rwimg1[3],renwujieshao[2],renwujieshao[3],renwujieshao[1],renwujieshao[0],renwudatu[2],renwudatu[3],renwudatu[1],renwudatu[0]);
	clickFun(rw[1],rwimg1[1],rwimg1[0],rwimg1[2],rwimg1[3],renwujieshao[1],renwujieshao[3],renwujieshao[2],renwujieshao[0],renwudatu[1],renwudatu[3],renwudatu[2],renwudatu[0]);
	clickFun(rw[0],rwimg1[0],rwimg1[1],rwimg1[2],rwimg1[3],renwujieshao[0],renwujieshao[3],renwujieshao[2],renwujieshao[1],renwudatu[0],renwudatu[3],renwudatu[2],renwudatu[1]);

	// 模块五左部分
	var t_caption = getEleByCN('t_caption');
	var in_hold = getEleByCN('in_hold');
	var caption_img = getEleByCN('caption_img');
	var caption_text = getEleByCN('caption_text');
	for(var i=1;i<4;i++){
		in_hold[i].style.display = "none";
		caption_img[i].style.display = "none";
		caption_text[i].style.cssText = "text-decoration: underline;color: #626262;";
	}
	
	inHide(t_caption[0],in_hold[0],in_hold[1],in_hold[2],in_hold[3],caption_text[0],caption_img[0],caption_text[1],caption_text[2],caption_text[3],caption_img[1],caption_img[2],caption_img[3]);
	
	inHide(t_caption[1],in_hold[1],in_hold[0],in_hold[2],in_hold[3],caption_text[1],caption_img[1],caption_text[0],caption_text[2],caption_text[3],caption_img[0],caption_img[2],caption_img[3]);
	
	inHide(t_caption[2],in_hold[2],in_hold[1],in_hold[0],in_hold[3],caption_text[2],caption_img[2],caption_text[1],caption_text[0],caption_text[3],caption_img[1],caption_img[0],caption_img[3]);
	
	inHide(t_caption[3],in_hold[3],in_hold[1],in_hold[2],in_hold[0],caption_text[3],caption_img[3],caption_text[1],caption_text[2],caption_text[0],caption_img[1],caption_img[2],caption_img[0]);
	
	function inHide(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13){
		obj1.onmouseover = function(){
			obj2.style.display = "block";
			obj3.style.display = "none";
			obj4.style.display = "none";
			obj5.style.display = "none";
			
			//obj6==obj1
			obj6.style.cssText = "text-decoration: none;color: #FFFFFF;";
			obj7.style.display = "block";
			obj8.style.cssText = "text-decoration: underline;color: #626262;";
			obj9.style.cssText = "text-decoration: underline;color: #626262;";
			obj10.style.cssText = "text-decoration: underline;color: #626262;";
			obj11.style.display = "none";
			obj12.style.display = "none";
			obj13.style.display = "none";
		}
	}
	
	// 模块五右部分
	var b5_title = getEleByCN('b5_title');
	var d_txt1 = getEleByCN('d_txt1');
	var d_txt2 = getEleByCN('d_txt2');
	var changeImg = getEleByCN('changeImg')[0];
	var changeImg1 = getEleByCN('changeImg1')[0];
	
	var si=0;
	setInterval(function(){
		if(si%2==0){
			b5_title[0].innerHTML = "镜花缘介绍";
			d_txt1[0].style.color = "#e5ca91";
			d_txt2[0].style.color = "#566495";
			changeImg.style.top = "222px";
			changeImg1.style.top = "0";
		}else if(si%2!=0){
			b5_title[0].innerHTML = "三大副本秘境介绍";
			d_txt2[0].style.color = "#e5ca91";
			d_txt1[0].style.color = "#566495";
			changeImg.style.top = "0";
			changeImg1.style.top = "222px";
		}
		si++;
		if(si>3){
			si=0;
		}
	},2000);
	
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



	// 模块四
	var all = document.getElementById('all');
	var SSR = document.getElementById('SSR');
	var SR = document.getElementById('SR');
	var R = document.getElementById('R');
	var N = document.getElementById('N');
	var Y = document.getElementById('Y');

	var w_all = document.getElementById('w_all');
	var w_SSR = document.getElementById('w_SSR');
	var w_SR = document.getElementById('w_SR');
	var w_R = document.getElementById('w_R');
	var w_N = document.getElementById('w_N');
	var w_Y = document.getElementById('w_Y');

	var bg = document.getElementsByClassName('li_bg');

	var prev = document.getElementById('jl_btn_left');
	var next = document.getElementById('jl_btn_right');

	var all_len = document.getElementById('w_all').getElementsByClassName('jl_slide');
	var SSR_len = document.getElementById('w_SSR').getElementsByClassName('jl_slide');
	var SR_len = document.getElementById('w_SR').getElementsByClassName('jl_slide');
	var R_len = document.getElementById('w_R').getElementsByClassName('jl_slide');
	var N_len = document.getElementById('w_N').getElementsByClassName('jl_slide');
	var Y_len = document.getElementById('w_Y').getElementsByClassName('jl_slide');

	var allImg = document.getElementsByClassName('jl_img');
	var ssrImg = document.getElementsByClassName('ssr_img');
	var srImg = document.getElementsByClassName('sr_img');
	var rImg = document.getElementsByClassName('r_img');
	var nImg = document.getElementsByClassName('n_img');
	var jsErr = ['陆景','太子长琴','烛光','烛阴','蚩黎','三曜','相柳','祝融','宵明','九尾狐','夸父','魅','乘黄','共工','凤皇','四时','天狗','chi','钟灵','丹朱','强良','葱聋','天狐','驳','奢比','青丘之主','鬼面童子','大鸢','何罗','毕方','天吴','白蛇','羿','巫礼','句芒','祸斗','青兔','从从','比翼','仇除','般','陆吾','鼓','孟极','长蛇','罗罗','菌人','涂山','青鸟','精卫','梁渠','朱瑾','山膏','窃脂'];
	var ssrErr = ['陆景','太子长琴','烛光','烛阴','蚩黎','三曜','相柳','祝融','宵明','九尾狐','夸父','魅','乘黄','共工','凤皇'];
	var srErr = ['四时','天狗','chi','钟灵','丹朱','强良','葱聋','天狐','驳','奢比','青丘之主','鬼面童子','大鸢','何罗','毕方','天吴','白蛇','羿','巫礼','句芒','祸斗'];
	var rErr = ['青兔','从从','比翼','仇除','般','陆吾','鼓','孟极','长蛇','罗罗','菌人','涂山','青鸟','精卫','梁渠','朱瑾'];
	var nErr = ['山膏','窃脂','视肉','赤狐','犀牛','小蟹','土蝼','并封','薄鱼','耳鼠','婴勺'];
	
	function imgC(jsImg,jsErr,i){
		jsImg[i].onmouseover = function(){
			jsImg[i].src="img/img2/"+jsErr[i]+".png";
		}
		jsImg[i].onmouseout = function(){
			jsImg[i].src="img/img2/"+jsErr[i]+1+".png";
		}
	}
	imgC(allImg,jsErr,0);imgC(allImg,jsErr,1);imgC(allImg,jsErr,2);imgC(allImg,jsErr,3);imgC(allImg,jsErr,4);imgC(allImg,jsErr,5);imgC(allImg,jsErr,6);imgC(allImg,jsErr,7);imgC(allImg,jsErr,8);imgC(allImg,jsErr,9);imgC(allImg,jsErr,10);imgC(allImg,jsErr,11);imgC(allImg,jsErr,12);imgC(allImg,jsErr,13);imgC(allImg,jsErr,14);imgC(allImg,jsErr,15);imgC(allImg,jsErr,16);imgC(allImg,jsErr,17);imgC(allImg,jsErr,18);imgC(allImg,jsErr,19);imgC(allImg,jsErr,20);imgC(allImg,jsErr,21);imgC(allImg,jsErr,22);imgC(allImg,jsErr,23);imgC(allImg,jsErr,24);
	imgC(allImg,jsErr,25);imgC(allImg,jsErr,26);imgC(allImg,jsErr,27);imgC(allImg,jsErr,28);imgC(allImg,jsErr,29);imgC(allImg,jsErr,30);imgC(allImg,jsErr,31);imgC(allImg,jsErr,32);imgC(allImg,jsErr,33);imgC(allImg,jsErr,34);imgC(allImg,jsErr,35);imgC(allImg,jsErr,36);imgC(allImg,jsErr,37);imgC(allImg,jsErr,38);imgC(allImg,jsErr,39);imgC(allImg,jsErr,40);imgC(allImg,jsErr,41);imgC(allImg,jsErr,42);imgC(allImg,jsErr,43);imgC(allImg,jsErr,44);imgC(allImg,jsErr,45);imgC(allImg,jsErr,46);imgC(allImg,jsErr,47);imgC(allImg,jsErr,48);imgC(allImg,jsErr,49);imgC(allImg,jsErr,50);imgC(allImg,jsErr,51);imgC(allImg,jsErr,52);imgC(allImg,jsErr,53);

	imgC(ssrImg,ssrErr,0);imgC(ssrImg,ssrErr,1);imgC(ssrImg,ssrErr,2);imgC(ssrImg,ssrErr,3);imgC(ssrImg,ssrErr,4);imgC(ssrImg,ssrErr,5);imgC(ssrImg,ssrErr,6);imgC(ssrImg,ssrErr,7);imgC(ssrImg,ssrErr,8);imgC(ssrImg,ssrErr,9);imgC(ssrImg,ssrErr,10);imgC(ssrImg,ssrErr,11);imgC(ssrImg,ssrErr,12);imgC(ssrImg,ssrErr,13);imgC(ssrImg,ssrErr,14);

	imgC(srImg,srErr,0);imgC(srImg,srErr,1);imgC(srImg,srErr,2);imgC(srImg,srErr,3);imgC(srImg,srErr,4);imgC(srImg,srErr,5);imgC(srImg,srErr,6);imgC(srImg,srErr,7);imgC(srImg,srErr,8);imgC(srImg,srErr,9);imgC(srImg,srErr,10);imgC(srImg,srErr,11);imgC(srImg,srErr,12);imgC(srImg,srErr,13);imgC(srImg,srErr,14);imgC(srImg,srErr,15);imgC(srImg,srErr,16);imgC(srImg,srErr,17);imgC(srImg,srErr,18);imgC(srImg,srErr,19);imgC(srImg,srErr,20);

	imgC(rImg,rErr,0);imgC(rImg,rErr,1);imgC(rImg,rErr,2);imgC(rImg,rErr,3);imgC(rImg,rErr,4);imgC(rImg,rErr,5);imgC(rImg,rErr,6);imgC(rImg,rErr,7);imgC(rImg,rErr,8);imgC(rImg,rErr,9);imgC(rImg,rErr,10);imgC(rImg,rErr,11);imgC(rImg,rErr,12);imgC(rImg,rErr,13);imgC(rImg,rErr,14);imgC(rImg,rErr,15);

	imgC(nImg,nErr,0);imgC(nImg,nErr,1);imgC(nImg,nErr,2);imgC(nImg,nErr,3);imgC(nImg,nErr,4);imgC(nImg,nErr,5);imgC(nImg,nErr,6);imgC(nImg,nErr,7);imgC(nImg,nErr,8);imgC(nImg,nErr,9);imgC(nImg,nErr,10);


	bg.onmouseover = function(){
		bg.style.cssText = "background-image: url('img/img1/sprite.png');background-position:-327px -595px;background-repeat: no-repeat;width:104px;height:36px;color:white";
	}
	
	var i = 6;
	prev.onclick = function(){
		i--;
		if(i<1||i==5){
			i=0;
		}
		panduan();
	}
	var i=0;
	next.onclick = function(){
		i++;
		if(i>5){
			i=5;
		}
		panduan();
	}

	function panduan(){
		if(i==0){
			w_all.style.left= "0px";
		}
		if(i==1){
			w_all.style.left= "-934px";
		}
		if(i==2){
			w_all.style.left= "-1868px";
		}
		if(i==3){
			w_all.style.left= "-2802px";
		}
		if(i==4){
			w_all.style.left= "-3736px";
		}
		if(i==5){
			w_all.style.left= "-4670px";
		}
	}
	function fengzhuang(anniu,a,b,c,d,e,f,bg1,bg2,bg3,bg4,bg5,bg6,len){
		anniu.onclick = function(){
			a.style.cssText = "display:block;";
			b.style.cssText = "display:none;";
			c.style.cssText = "display:none;";
			d.style.cssText = "display:none;";
			e.style.cssText = "display:none;";
			f.style.cssText = "display:none;";
			bg1.style.cssText = "background-image: url('img/img1/sprite.png');background-position:-327px -595px;background-repeat: no-repeat;width:104px;height:36px;color:white";
			bg2.style.cssText = "background-image: none;color: #5d64a0;";
			bg3.style.cssText = "background-image: none;color: #5d64a0;";
			bg4.style.cssText = "background-image: none;color: #5d64a0;";
			bg5.style.cssText = "background-image: none;color: #5d64a0;";
			bg6.style.cssText = "background-image: none;color: #5d64a0;";

			var j = len.length;
			if(j==6){
				prev.onclick = function(){
				j--;
				if(j<1||j==5){
					j=0;
				}
				panduan();
			}
				var j=0;
				next.onclick = function(){
					j++;
					if(j>5){
						j=5;
					}
					panduan();
				}

			}
			if(j==3){
				prev.onclick = function(){
				j--;
				console.log(j);
				if(j<1||j==2){
					j=0;
				}
				panduan();
			}
				var j=2;
				next.onclick = function(){
					j++;
					if(j>2){
						j=2;
					}
					panduan();
				}

			}

			if(j==2){
				prev.onclick = function(){
				j--;
				console.log(j);
				if(j<1||j==1){
					j=0;
				}
				panduan();
			}
				var j=1;
				next.onclick = function(){
					j++;
					if(j>1){
						j=1;
					}
					panduan();
				}

			}

			function panduan(){
				if(j==0){
					a.style.left= "0px";
				}
				if(j==1){
					a.style.left= "-934px";
				}
				if(j==2){
					a.style.left= "-1868px";
				}
				if(j==3){
					a.style.left= "-2802px";
				}
				if(j==4){
					a.style.left= "-3736px";
				}
				if(j==5){
					a.style.left= "-4670px";
				}
			}


		}

	};

	fengzhuang(all,w_all,w_SSR,w_SR,w_R,w_N,w_Y,bg[0],bg[1],bg[2],bg[3],bg[4],bg[5],all_len);
	fengzhuang(SSR,w_SSR,w_all,w_SR,w_R,w_N,w_Y,bg[1],bg[0],bg[2],bg[3],bg[4],bg[5],SSR_len);
	fengzhuang(SR,w_SR,w_all,w_SSR,w_R,w_N,w_Y,bg[2],bg[0],bg[1],bg[3],bg[4],bg[5],SR_len);
	fengzhuang(R,w_R,w_all,w_SSR,w_SR,w_N,w_Y,bg[3],bg[0],bg[1],bg[2],bg[4],bg[5],R_len);
	fengzhuang(N,w_N,w_all,w_SSR,w_SR,w_R,w_Y,bg[4],bg[0],bg[1],bg[2],bg[3],bg[5],N_len);
	fengzhuang(Y,w_Y,w_all,w_SSR,w_SR,w_R,w_N,bg[5],bg[0],bg[1],bg[2],bg[3],bg[4],Y_len);




}
