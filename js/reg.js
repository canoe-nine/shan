window.onload = function(){
	var phone_reg = /^1[3456789]\d{9}$/;
	var pswd_reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	var charty_reg = /(^bai\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	var email_reg =/^[A-Za-z1-9]([\u4e00-\u9fa5]|[A-Za-z0-9])+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/;
	var userName_reg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
	var getNum_reg = /^[0-9]{4}$/;
	// 手机号注册
	var type_tel = getEleByCN('type_tel')[0];
	var type_eml = getEleByCN('type_eml')[0];
	var tel_cont = getEleByCN('tel_cont')[0];
	var eml_cont = getEleByCN('eml_cont')[0];
	var phone = getEleById('phone');
	var pho_txt = getEleById('pho_txt');
	var pswd = getEleById('pswd');
	var pswd_txt = getEleByCN('pswd_txt');
	var rePswd = getEleById('rePswd');
	var rePswd_txt = getEleByCN('rePswd_txt');
	var username = getEleById('username');
	var user_txt = getEleByCN('user_txt');
	var charity = getEleById('charityNum');
	var charity_txt = getEleByCN('charity_txt');
	
//	调用函数
	clickType(type_tel,type_eml,tel_cont,eml_cont);
	clickType(type_eml,type_tel,eml_cont,tel_cont);
	focuClick(phone,pho_txt,phone_reg);
	focuClick(pswd,pswd_txt[0],pswd_reg);
	focuClickPswd(rePswd,rePswd_txt[0],pswd);
	focuClick(username,user_txt[0],userName_reg);
	focuClick(charity,charity_txt[0],charty_reg);
	// 邮箱注册
	var email = getEleById('email');
	var emal_txt = getEleById('emal_txt');
	var pswd1 = getEleById('pswd1');
	var rePswd1 = getEleById('rePswd1');
	var username1 = getEleById('username1');
	var charity1 = getEleById('charityNum1');
	
	focuClick(pswd1,pswd_txt[1],pswd_reg);
	focuClickPswd(rePswd1,rePswd_txt[1],pswd1);
	focuClick(username1,user_txt[1],userName_reg);
	focuClick(charity1,charity_txt[1],charty_reg);
	focuClick(email,emal_txt,email_reg);
	//验证码验证
	var getBtn = getEleByCN('getButton');
	var getInput = getEleByCN('getInput');
	var getNum_txt = getEleByCN('getNum_txt');
	for(var j=0;j<getBtn.length;j++){
		getBtn[j].value = "获取验证码";
		getNumClick(getBtn[j]);
		focuClick(getInput[j],getNum_txt[j],getNum_reg);
	}
	function getNumClick(obj8){
		obj8.onclick = function(){
			getNum(obj8);
		}
	}
	var count = 60;
	function getNum(numBtn){
		if(count==0){
			numBtn.removeAttribute("disabled");
			numBtn.value = "获取验证码";
			count = 60;
			return false;
		}else{
			numBtn.setAttribute("disabled",true);
			numBtn.value = "重新发送(" + count + ")";
			count--;
		}
		setTimeout(function(){
			getNum(numBtn);
		},1000);
	}
	// 注册、登录按钮
	var regist_btn = getEleByCN('regist_btn');
//	var login_btn = getEleByCN('login_btn');
	var agree = getEleById('agree');
	var agree1 = getEleById('agree1');
	var tz = getEleByCN('tz')[0];
	
	regist_btn[0].onclick = function(){
		if(phone_reg.test(phone.value)==true&&pswd_reg.test(pswd.value)==true &&pswd.value==rePswd.value &&userName_reg.test(username.value)==true &&charty_reg.test(charity.value)==true){
			if(agree.checked==true){
				alert("注册成功!");
				tz.setAttribute('href','login.html')
			}else{
				alert("请同意相关协议!");
			}
		}else{
			alert("注册失败!");
		}
	}
//	
	regist_btn[1].onclick = function(){
		if(email_reg.test(email.value)==true&&pswd_reg.test(pswd1.value)==true&&pswd1.value==rePswd1.value&&userName_reg.test(username1.value)==true&&charty_reg.test(charity1.value)==true){
			if(agree1.checked==true){
				alert("注册成功!");
				tz.setAttribute('href','login.html')
			}else{
				alert("请同意相关协议!");
			}
		}else{
			alert("信息填写格式错误，注册失败!");
		}
	}
	
	function focuClick(obj3,obj4,reg){
		obj3.onfocus = function(){
			obj4.innerHTML = '&nbsp;&nbsp;';
			obj3.style.border="1.5px solid #cbcbcb";
			obj3.style.background = "rgba(255,255,255,0.6)";
		}
		obj3.onblur = function(){
			obj3.style.border="1.5px solid #5a5a5a";
			if(obj3.value==''){
				obj3.style.border="1.5px solid red";
				obj4.innerHTML = '&nbsp;&nbsp;*不能为空!';
				obj4.style.fontSize = '13px';
				obj4.style.color = "#d72020";
			}else if(!reg.test(obj3.value)){
					obj3.style.border="1.5px solid red";
					obj4.innerHTML = '&nbsp;&nbsp;*格式错误!';
					obj4.style.fontSize = '13px';
					obj4.style.color = "#d72020";
			}else{
				obj3.style.border="1.5px solid #cbcbcb";
				obj4.innerHTML = '&nbsp;&nbsp;';
			}
		}
	}
	function focuClickPswd(obj5,obj6,old){
		obj5.onfocus = function(){
			obj5.style.border="1.5px solid #cbcbcb";
			obj5.style.background = "rgba(255,255,255,0.6)";
		}
		obj5.onblur = function(){
			obj5.style.border="1.5px solid red";
			if(obj5.value==''){
				obj5.style.border="1.5px solid red";
				obj6.innerHTML = '&nbsp;&nbsp;*不能为空!';
				obj6.style.fontSize = '13px';
				obj6.style.color = "#d72020";
			}else if(obj5.value!=old.value){
					obj5.style.border="1.5px solid red";
					obj6.innerHTML = '&nbsp;&nbsp;*密码不一致!';
					obj6.style.fontSize = '13px';
					obj6.style.color = "#d72020";
			}else{
				obj5.style.border="1.5px solid #cbcbcb";
				obj6.innerHTML = '&nbsp;&nbsp;';
			}
		}
	}
	
//	手机邮箱切换
	function clickType(btn1,btn2,show1,show2){
		btn1.onclick = function(){
			btn1.style.cssText = "color: #FFFFFF;background: #d72020;";
			show1.style.display = "block";
			btn2.style.cssText = "color: #666666;background: #e4e4e4;";
			show2.style.display = "none";
		}
	}
	
	function getEleByCN(classname){
		return document.getElementsByClassName(classname);
	}
	function getEleById(idValue){
		return document.getElementById(idValue);
	}
}