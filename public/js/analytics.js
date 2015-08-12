(function(){
	
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	
	function getCookie(cn,t) {
		var name = cn + "=",flag = "";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) flag = c.substring(name.length,c.length);
		}
		if(flag == ""){
			var d = new Date(), cv = "",exp = "";
			var t = String(d.getTime());
			cv = Base64.encode(t);
			d.setTime(d.getTime() + (365*24*60*60*1000));
			exp = "expires=" + d.toGMTString();
			document.cookie = cn+"="+cv+"; "+exp;
			flag = cv;
		}
		return flag;
	}

	var f = window,
	obj = f.GraphShare,
	P = {
		arg : {},
		token:f[obj].q[0][1]['id'],
		event:f[obj].q[0][0],
		set : function(){
			this.token = f[obj].q[0][0];
			this.arg['token'] = f[obj].q[0][1]['id'];
			this.arg['width'] = f.innerWidth;
			this.arg['height'] = f.innerHeight;
			this.arg['platform'] = f.navigator.platform;
			this.arg['name'] = f.navigator.appName;
			this.arg['codeName'] = f.navigator.appCodeName;
			this.arg['version'] = f.navigator.appVersion;
			this.arg['product'] = f.navigator.product;
			this.arg['userAgent'] = f.navigator.userAgent;
			this.arg['language'] = f.navigator.language;
			this.arg['domain'] = f.location;
			this.arg['dID'] = getCookie("destnictid",f[obj].q[0][0]);
			
		},
		get : {
			d : function(argu){
				var dt = {};
				dt["fixed"] = P.arg;
				dt["flex"] = argu;
				//console.log(JSON.stringify(dt));
				return Base64.encode(JSON.stringify(dt));
			},
			api : function(arg){
				if(arg == "api")
					return ("https:" == f.location.protocol ? "https://" : "http://") + "54.169.131.194:8011";//"yogender.bizfy.net/gshape/gscapture.php";
				else
					return "";
			}
		}
	},
	S = function(){
		delete f[obj].q;
		return null;
	},
	Z = function(){
        this.__track = function(arg,argu) {
			argu['timeStamp'] = (1*new Date());
			argu['pageURL'] = f.location.href;
			argu['event'] = arg;
			http.g(argu);
        }
    },
	R = function(){
		this.api = function(argu){
			var i = P.get.api("api")+"?data="+P.get.d(argu);
			return i;
		}
		this.g = function(argu){
			var W = window;
			var c = W.XMLHttpRequest;
			if(!c) return ! 1;
			var d = new c;
			d.open("GET", this.api(argu), !0);
			d.withCredentials = !0;
			d.setRequestHeader("Content-Type", "text/plain");
			d.onreadystatechange = function() {
				if(d.readyState == 4){
					console.log(d.responseText);
				}
			};
			d.send();
		}
		this.post = function(){}
	}
	var http = new R();
	P.set();
	
	http.g({"event":P.event,"timeStamp":(1*new Date()), "pageURL":f.location.href});
	graph = new Z();
	
})(window);

