
//表单验证
var inp = document.getElementsByClassName('inp');
var err = document.getElementsByClassName('err');
var acc = document.getElementsByClassName('acc');
//var inp0 = inp[0].value;
//var reg0 = /^[a-z\d]{5,20}$/;
//var inp1 = inp[1].value;
//var reg1 = /^[^ ]{6,20}$/;

//inp[0].onchange = function(){
//	if(reg0.test(inp0)){
//		err[0].style.display = 'none';
//		acc[0].style.border = '1px solid green';
//		}else{
//			acc[0].style.border = '1px solid red';
//			err[0].style.display = 'block';
//		}
//}
//inp[1].onchange = function(){
//	if(reg1.test(inp1)){
//		err[1].style.display = 'none';
//		acc[1].style.border = '1px solid green';
//		}else{
//			acc[1].style.border = '1px solid red';
//			err[1].style.display = 'block';
//	}
//}

var phone_reg = /^[a-z\d]{5,20}$/;
var pass_reg = /^[^ ]{6,20}$/;
var dl = document.getElementsByClassName('dl')[0];
var check = document.getElementById('check');
var tz = document.getElementsByClassName('tz')[0];
focuClick(inp[0],err[0],phone_reg);
focuClick(inp[1],err[1],pass_reg);
function focuClick(obj3,obj4,reg){      //inp,err,phone_reg
		obj3.onfocus = function(){
			obj4.innerHTML = '&nbsp;&nbsp;';
			obj3.style.border="1.5px solid white";
			obj3.style.background = "rgba(255,255,255,0.5)";
		}
		obj3.onblur = function(){
			obj3.style.border="1.5px solid #5a5a5a";
			if(obj3.value==''){
				obj4.style.display = 'block'
				obj3.style.border="1.5px solid red";
				obj4.innerHTML = '<img src="img/img4/rico_error.png"/>不能为空!';
				obj4.style.color = "red";
			}else if(!reg.test(obj3.value)){
					obj4.style.display = 'block'
					obj3.style.border="1.5px solid red";
					obj4.innerHTML = '<img src="img/img4/rico_error.png"/>格式有误!';
					obj4.style.color = "red";
			}else{
				obj3.style.border="1.5px solid #cbcbcb";
				obj4.style.display = 'none';
			}
		}
	}

dl.onclick = function(){
		if(phone_reg.test(inp[0].value)==true&&pass_reg.test(inp[1].value)==true){
			if(check.checked==true){
				tz.setAttribute('href','index.html')
			}else{
				alert("请同意相关隐私协议!");
			}
		}else{
			alert("登录失败!");
		}
	}


