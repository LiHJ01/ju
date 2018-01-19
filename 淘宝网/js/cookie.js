//设置cookie
function setCookie(name, value, expires, path, domain, secure) {
     var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
     if (expires instanceof Date) {
          cookieText += ";expires="+expires;
     }
     if (path) {
          cookieText += ";path="+path;
     }
     if (domain) {
          cookieText += ";domain="+domain;
     }
     if (secure) {
          cookieText += ";" + secure;
     }
     document.cookie = cookieText;
     return decodeURIComponent(cookieText);
}
//获取cookie
function getCookie(name) {
     var cookie = decodeURIComponent(document.cookie);	
     //user4=abc;user=zhang3;user5=abc
     var cookieStr = cookie.replace(/ /g, "");
     console.log(cookieStr);		
     var arr = cookieStr.split(";");
     for (var i=0; i<arr.length; i++) {
          var str = arr[i];			
          var arr2 = str.split("=");
          if (arr2.length >= 2) {
               if (arr2[0] == name) {
	     return arr2[1];
     	}
          }
     }
     return null;
}
//删除cookie
function removeCookie(name) {
     document.cookie = encodeURIComponent(name) + "= ; expires=" + new Date();
}
