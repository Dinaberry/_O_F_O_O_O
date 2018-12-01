//第一次输入的脚本
var count=0;
var timeInterval = setInterval(function(){
	count++;
	$(".enter_input ").val("这是第"+count+"次联系客服退押金了，注册账号185****1996,城市：成都，支付宝账号:185****1996,身份证后4位：6666,,已经提现远大于15个工作日了,迟迟还未到账！！！");
	var el=document.getElementById("downup");
	var event = document.createEvent('Events');
	event.initEvent('touchstart', true, true); 
	el.dispatchEvent(event); 
},30000)//30秒钟发送一次



//第二次输入的脚本
clearInterval(timeInterval);
