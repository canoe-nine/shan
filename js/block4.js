window.onload = function(){
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
				var j=1;
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


