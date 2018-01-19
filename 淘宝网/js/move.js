function createxhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	return new ActiveXObject("Microsoft.XMLHTTP");
}
function getStyleAttr(obj, attr) {
		if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
			return getComputedStyle(obj, null)[attr];
			//var style = window.getComputedStyle("元素", "伪类");
		}else{
			return obj.currentStyle[attr]; //支持IE8-
	   }
}
//obj节点对象
//attr属性
//target目标值
//fn回调函数
//s多少秒执行一次定时器
function move(obj,attr,target,s,fn){
	//目标值
	if(attr=="opacity"){
		target = target*100;
	}else{
		target = target;
	}
	//先清除定时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//获取box的初始位置
		if(attr=="opacity"){
			var start = getStyleAttr(obj,attr)*100;//获取页面样式
			start = parseInt(start);
		}else{
			//getStyleAttr(obj,attr)带单位，parseInt()转成number类型
			var start = parseInt(getStyleAttr(obj,attr));
		}
        //给一个速度
        var speed = (target-start)/5;
		speed= speed>0?Math.ceil(speed):Math.floor(speed);
//		console.log(target);
		//判断是否达到目标值	
		if(start==target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
			if(attr=="opacity"){
				obj.style.opacity = (start+speed)/100;
			    obj.style.filter = "alpha(opacity="+(start+speed)+")";
			}else{
				obj.style[attr] = start+speed+"px";
			}
			
		}
        
	},s)
}
