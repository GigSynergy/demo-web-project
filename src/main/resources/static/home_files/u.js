(function(c,ac){var i=null;var x=(function(){var at=0,aq=c.navigator.userAgent,ar=null;if(c.navigator.appName==="Microsoft Internet Explorer"){ar=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(ar.exec(aq)!=null){at=parseFloat(RegExp.$1)}}else{if(c.navigator.appName==="Netscape"){ar=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");if(ar.exec(aq)!=null){at=parseFloat(RegExp.$1)}}}return at}());var Y=x>0&&(x<8||(x<10&&ac.compatMode&&ac.compatMode==="BackCompat"));var y=(x>0&&(x<11||ac.documentMode!==11));var F=null;var e=function(av){try{var aq=av.network,au=new Image();for(var at=0;at<av.data.length;at++){aq+="_:_"+av.data[at]}au.src="//"+av.jsdomain+"/acttr?p="+av.params+"&m="+encodeURIComponent(aq)+"&t="+(new Date()).getTime()}catch(ar){}};var m=function(){try{var aq=i.network,au=new Image();for(var at=0;at<arguments.length;at++){aq+="_:_"+arguments[at]}au.src="//"+i.jsdomain+"/acttr?p="+i.params+"&m="+encodeURIComponent(aq)+"&t="+(new Date()).getTime()}catch(ar){}};var ap=function(){if(arguments.length===0){return}var aq=systemConfig.network;for(var au=0;au<arguments.length;au++){aq+="_:_"+arguments[au]}var at="//"+systemConfig.jsdomain+"/acttr?p="+systemConfig.params+"&m="+encodeURIComponent(aq)+"&t="+(new Date()).getTime();if(arguments[0]==="talc-fs"){if(typeof c.navigator.sendBeacon!=="undefined"&&c.navigator.sendBeacon){c.navigator.sendBeacon(at,"")}else{var av=new Image();av.src=at}}else{var ar=new Image();ar.src=at}};var v=function(aq,au){try{var at=y?ac.getElementById("utxsh01"):ac.utxsh01;if(typeof au==="undefined"){au=[]}if(at){at[aq].apply(at,au)}else{return null}}catch(ar){m("fl-mng-ex",W(ar))}};var W=function(aq){var ar=aq.toString();if(x>0&&typeof aq.description==="string"&&ar.indexOf(aq.description)<0){ar+=" "+aq.description}return ar};var k=function(){var aq={};if(c.innerWidth){aq.pageYOffset=c.pageYOffset;aq.pageXOffset=c.pageXOffset;aq.innerWidth=Math.min(c.innerWidth,ac.documentElement.clientWidth);aq.innerHeight=Math.min(c.innerHeight,ac.documentElement.clientHeight)}else{if(ac.documentElement&&ac.documentElement.clientWidth){aq.pageYOffset=ac.documentElement.scrollTop;aq.pageXOffset=ac.documentElement.scrollLeft;aq.innerWidth=ac.documentElement.clientWidth;aq.innerHeight=ac.documentElement.clientHeight}else{if(ac.body){aq.pageYOffset=ac.body.scrollTop;aq.pageXOffset=ac.body.scrollLeft;aq.innerWidth=ac.body.clientWidth;aq.innerHeight=ac.body.clientHeight}}}return aq};var u=function(){var ar=ac.getElementsByTagName("title");var au="";for(var at=0,aq=ar.length;at<aq;at+=1){if("textContent" in ar[at]){au+=""+ar[at].textContent}else{au+=""+ar[at].innerText}}return au};var R=function(){try{if(c.navigator.plugins&&c.navigator.mimeTypes.length){var au=c.navigator.plugins["Shockwave Flash"];if(au!=null&&c.navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin!=null){return(au.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]<9?1:2)}return 0}else{if(c.ActiveXObject){try{var ar=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(aq){try{var ar=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(at){return 0}}if(ar!=null){return(ar.GetVariable("$version").split(" ")[1].split(",")[0]<9?1:2)}}}return 0}catch(aq){m("fl-check-ex");return 0}};var ao=function(){var aq=0;if(c.navigator.plugins&&c.navigator.mimeTypes.length){var au=c.navigator.plugins["Shockwave Flash"];if(au!=null&&c.navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin!=null){aq=(au.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]<9?1:2)}}else{if(c.ActiveXObject){try{var at=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(ar){try{var at=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(ar){}}if(at!=null){aq=at.GetVariable("$version").split(" ")[1].split(",")[0]}}}return aq};var l=function(aq){var ar=/[,.:;?!(){}]/gi;aq=aq.replace(ar," . ");aq=aq.toLowerCase();ar=/[0-9]{5,}/gi;aq=aq.replace(ar," ");if(aq.indexOf("'")>=0){ar=/( "|" )/gi;aq=aq.replace(ar," . ")}return aq};var H=function(){var aw=ac.getElementsByTagName("meta"),av="";for(var au=0;au<aw.length;au++){if(aw[au].getAttribute("name")&&aw[au].getAttribute("name").indexOf("description")!==-1&&aw[au].getAttribute("content")){av=aw[au].getAttribute("content").toLowerCase();break}}av+=" "+ac.title;var ax=l(av.replace(/[^A-Za-z\s]/g,"").replace(/\b(\w{1,2}|the|and|for)\b/g,"").replace(/[\s\n\r]/g," ").replace(/ +/g," ")).replace(/^\s*(.*)/,"$1").replace(/(.*?)\s*$/,"$1"),ay=ax.split(" "),ar=[];for(var at=0;at<ay.length;at++){var az=false;for(var aq=0;aq<ar.length;aq++){if(ay[at]===ar[aq]){az=true;break}}if(!az){ar.push(ay[at])}}return"##||##"+ar.toString().replace(/,/g," ").substring(0,512)};var g=function(){var ar=(function(){var ax,ay,az="wg_tl_do"+Math.round(Math.random()*10000000)+"=cookie",aw=ac.location.hostname.split(".");for(ax=aw.length-1;ax>=0;ax--){ay=aw.slice(ax).join(".");ac.cookie=az+";domain=."+ay+";";if(ac.cookie.indexOf(az)>-1){ac.cookie=az.split("=")[0]+"=;domain=."+ay+";expires=Thu, 01 Jan 1970 00:00:01 GMT;";return ay}}})();function au(ax){var aw=ac.createElement("a");aw.href=ax;return aw.hostname}var av=ac.getElementsByTagName("script"),aq="";for(var at=0;at<av.length;at++){if(av[at].src&&au(av[at].src).indexOf(ar)===-1){aq+=av[at].src+"|"}}return"##||##"+aq.substr(0,aq.length-1)};var V=function(aq){if(c.getComputedStyle){var ar=c.getComputedStyle(aq,null);return{displayStyle:ar.display,visibilityStyle:ar.visibility,overflowStyle:ar.overflow}}else{if(aq.currentStyle){var at=aq.currentStyle;return{displayStyle:at.display,visibilityStyle:at.visibility,overflowStyle:at.overflow}}else{return{displayStyle:aq.style.display,visibilityStyle:aq.style.visibility,overflowStyle:aq.style.overflow}}}};var T=function(ar){var aq=V(ar),at=typeof ar.getBoundingClientRect==="function"?(ar.getBoundingClientRect().width===0):true;if(ar.offsetWidth===0&&at){return false}if(aq.displayStyle==="none"||aq.visibilityStyle==="hidden"){return false}if(ar.offsetHeight===0){if(aq.overflowStyle==="hidden"){return false}if(ar.innerHMTL!==""){return true}return false}return true};var w=function(ar){try{return typeof c.jQuery==="function"&&typeof c.jQuery._data==="function"&&typeof c.jQuery._data(ar,"events").click==="object"}catch(aq){return false}};var a=function(aq){aq=aq.replace(/^\s*(.*)/,"$1");aq=aq.replace(/(.*?)\s*$/,"$1");return aq};var am=function(aq){if(typeof aq!=="undefined"){return aq.target}else{return c.event.srcElement}};var L=function(ar){var aq=null;if(ar.type==="SCRIPT"){aq=ac.createElement("script");aq.src=ar.src;aq.type="text/javascript";if(typeof ar.id!=="undefined"){aq.id=ar.id}if(ar.loc==="HEAD"){ac.getElementsByTagName("head")[0].appendChild(aq)}else{ac.body.appendChild(aq)}if(typeof ar.callback!=="undefined"){ar.callback()}}else{if(ar.type==="CSS"){aq=ac.createElement("link");aq.href=ar.href;if(typeof ar.id!=="undefined"){aq.id=ar.id}aq.rel="stylesheet";aq.type="text/css";aq.media="screen";ac.getElementsByTagName("head")[0].appendChild(aq);if(typeof ar.callback!=="undefined"){ar.callback()}}else{if(ar.type==="DIV"){aq=ac.createElement("div");if(typeof ar.id!=="undefined"){aq.id=ar.id}if(typeof ar.className!=="undefined"){aq.className=ar.className}if(typeof ar.style!=="undefined"){aq.style=ar.style}return aq}}}};var t=function(){var at="",av=c.name.toString().match(new RegExp("FA[-_].+\\|\\d{10}\\|[tdalo]\\|.+\\|.*\\|[a-z0-9]{32}\\|.*","g")),ar=av?av[0]:"",ay=ar.split("|"),ax=(ac.body.nodeName.toUpperCase()==="FRAMESET"),aw={};if(ar.substr(0,2)==="FA"){aw.timeElapsed=Math.round((new Date()).getTime()/1000)-ay[1]}var aq=(new RegExp("lll[a-zA-Z0-9]{11}00","g")).exec(c.location.href);if(aq!==null){at=aq[0];aw.timeElapsed=0}var au=k();aw.redirect=i.redirectDomainPattern&&ac.domain.match(new RegExp(i.redirectDomainPattern,"ig"))!=null;aw.brandingRequired=(!aw.redirect&&((aw.timeElapsed<25&&ay.length>=3&&ay[2].match(new RegExp("^[tda]$","g"))!=null)||at.match(new RegExp("[12]00$"))!=null));aw.isTA=(ay.length>=3&&ay[2]==="t")||at.substr(13,1)===2;aw.isDA=aw.isTA||(aw.brandingRequired&&ar.substr(0,3)!=="FA-");aw.adType=ay.length>=3?ay[2]:"";aw.debugStr=aw.timeElapsed+"|"+(typeof c.onbeforeunload==="function")+"|"+au.innerWidth+"x"+au.innerHeight+"|"+(typeof ac.body.onclick==="function"||typeof ac.onclick==="function")+"|"+ar+"|"+c.screen.width+"x"+c.screen.height+"|"+at+"|"+aw.redirect+"|"+aw.brandingRequired+"|"+(ac.body?ac.body.innerHTML.length:0);aw.lpDebugStr=aw.timeElapsed+"|"+(typeof c.onbeforeunload==="function")+"|"+au.innerWidth+"x"+au.innerHeight+"|"+(typeof ac.body.onclick==="function"||typeof ac.onclick==="function")+"|"+c.screen.width+"x"+c.screen.height+"|"+at+"|"+aw.redirect+"|"+aw.brandingRequired+"|"+(ac.body?ac.body.innerHTML.length:0)+"|"+(ax?1:0)+"|"+ar;aw.params=ay;aw.tokenCheck=aq;aw.winName=ar;aw.isNTA=ay.length>6&&ay[6]==="nta";return aw};var p=function(){return F};var K=function(){return(ac.location.protocol+"//partners.cmptch.com/ca2")};var X=function(){var ar=y?ac.getElementById("utxsh01"):ac.utxsh01;if(typeof ar!=="undefined"&&ar){return}else{var aq=ac.createElement("div"),at=ac.location.protocol+"//partners.cmptch.com/ca2";if(y){aq.innerHTML="<object id='utxsh01' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='"+ac.location.protocol+" + //download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'width='1' height='1'><param name='movie' value='"+i.utFlash+"' /><param name='quality' value='high' /><param name='wmode' value='transparent' /><param name='allowScriptAccess' value='always' /><param name='flashVars' value='keywordsURL="+encodeURIComponent(at)+"&amp;ntaTimer="+i.ntaTimer+"' /></object>"}else{aq.innerHTML="<object id='utxsh01' data='"+i.utFlash+"' width='1' height='1' type='application/x-shockwave-flash'><param name='quality' value='high' /><param name='wmode' value='transparent' /><param name='allowScriptAccess' value='always' /><param name='flashVars' value='keywordsURL="+encodeURIComponent(at)+"&amp;ntaTimer="+i.ntaTimer+"' /></object>"}Z(aq)}};var O=function(ar,aq){if(typeof ar!=="undefined"&&ar!==""){for(var au in aq){if(aq[au]===ar){return}}var at=ac.createElement("iframe");at.setAttribute("src",ar);at.setAttribute("frameborder","0");at.setAttribute("scrolling","no");at.setAttribute("marginwidth","0");at.setAttribute("marginheight","0");at.setAttribute("allowtransparency","true");at.width="1px";at.height="1px";ac.body.appendChild(at)}};var A=function(){if(typeof c.name!=="undefined"){var aq=c.name.toString().match(new RegExp("FA[-_].+\\|\\d{10}\\|[tdalo]\\|.+\\|.*\\|[a-z0-9]{32}\\|.*","g"));if(aq){var ar=aq[0].split("|");if(Math.round((new Date()).getTime()/1000)-ar[1]>600){c.name="";return false}return true}}return c.location.href.match(new RegExp("lll[a-zA-Z0-9]{11}00","g"))!=null};var s=function(){if(c.WXIsAdWindow()){if(!F){F=t()}if(!F.redirect){an.init()}if(F.brandingRequired){if(ac.body.nodeName.toUpperCase()==="FRAMESET"){F.debugStr+="|FRAMESET|0"}return true}}return false};var an=(function(){var ar=function(){var av="//partners.cmptch.com/lpl",au="//partners.cmptch.com/flash/lpa.swf";var at=ac.createElement("div");at.id="lpWorkerDiv";if(c.PMO.Util.useObject){at.innerHTML="<object id='lpWorker' name='lpWorker' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='"+ac.location.protocol+"//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' width='1' height='1'><param name='movie' value="+au+"/><param name='quality' value='high' /><param name='wmode' value='transparent' /><param name='allowScriptAccess' value='always' /><param name='flashVars' value='lpDest="+encodeURIComponent(av)+"&amp;sof=1' /></object>"}else{at.innerHTML="<object id='lpWorker' name='lpWorker' data="+au+" width='1' height='1' type='application/x-shockwave-flash'><param name='quality' value='high' /><param name='wmode' value='transparent' /><param name='allowScriptAccess' value='always' /><param name='flashVars' value='lpDest="+encodeURIComponent(av)+"&amp;sof=1' /></object>"}Z(at)};var aq=function(){var at={network:i.network,cc:F!==null?F.lpDebugStr:"",uri:ac.location.href,referrer:ac.referrer,page_title:u(),content:(ac.location.protocol==="http:"?ac.getElementsByTagName("html")[0].innerHTML:"")};if(typeof c.PMJSON!=="undefined"){return c.PMJSON.stringify(at)}else{return JSON.stringify(at)}};return{init:ar,getParams:aq}}());var G=function(aq){var ar=["/acttr?p="+i.params+"&m="+encodeURIComponent(i.network)+"_%3A_dt-log_%3A_"+aq];v("ipDet",ar)};var U={init:function(){if(typeof ac.hidden==="undefined"){return}ac.addEventListener(this.getVisibilityEvent(),this.handleVisibilityChange,false)},pageVisible:function(){return typeof ac.hidden!=="undefined"?!ac.hidden:-1},getVisibilityEvent:function(){if(typeof ac.mozHidden!=="undefined"){return"mozvisibilitychange"}else{if(typeof ac.msHidden!=="undefined"){return"msvisibilitychange"}else{if(typeof ac.webkitHidden!=="undefined"){return"webkitvisibilitychange"}}}return"visibilitychange"},handleVisibilityChange:function(){if(U.pageVisible()){c.PMO.Interface.notify({type:"TABFOCUS"})}},isHidden:function(){var aq=this.getHiddenProp();if(!aq){return false}return ac[aq.hiddenProperty]},getHiddenProp:function(){var ar=["webkit","moz","ms","o"];if("hidden" in ac){return{hiddenProperty:"hidden",hiddenEvent:"visibilitychange"}}for(var aq=0;aq<ar.length;aq++){if((ar[aq]+"Hidden") in ac){return{hiddenProperty:ar[aq]+"Hidden",hiddenEvent:ar[aq]+"visibilitychange"}}}return null},isSupported:function(){var aq=this.getHiddenProp();if(!aq){return false}return true},hasPageFocus:function(){if(this.isSupported()){return !this.isHidden()}else{return ac.hasFocus()}}};U.init();var ai=function(aq){if(typeof c.PMJSON!=="undefined"){return c.PMJSON.stringify(aq)}else{return JSON.stringify(aq)}};var z=(function(){var az,ay=[],aq={startTime:1,fetchStart:1,requestStart:1,responseStart:1,responseEnd:1,duration:1};var aw=function(){return typeof c.performance!=="undefined"&&typeof c.performance.getEntries!=="undefined"};var ar=function(){return{trckTime:new Date().getTime()-c.PMOStartTime,timeElapsed:az.timeElapsed,perfEntries:ay}};var at=function(){var aC=ac.getElementsByTagName("head")[0].getElementsByTagName("script"),aF="0",aE="0";for(var aD=0;aD<aC.length;aD++){if(aC[aD].src.indexOf("//stats.g.doubleclick.net/dc.js")!==-1){aF="1"}if(aC[aD].src.indexOf("/javascript/tracking/googleanalytics.js")!=-1){aE="1"}}return aF+"_:_"+aE};var av=function(){var aC=c.performance.getEntries();for(var aE in aC){if(typeof aC[aE].name!=="undefined"&&aC[aE].name.indexOf("__utm.gif?")!==-1&&aC[aE].name.indexOf("utmac=UA-313748")!==-1){var aD=aC[aE],aF={name:aD.name};for(var aG in aD){if(aq[aG]===1){aF[aG]=Math.floor(aD[aG])}}ay.push(aF)}}};var aA=function(){try{return typeof c.navigator.sendBeacon=="function"}catch(aC){return false}};var ax=function(aD){var aE=false;if(aA()){aE=c.navigator.sendBeacon(aD,"")}if(!aA()||!aE){var aC=c.XDomainRequest?true:false;var aF;if(aC){aF=new c.XDomainRequest();aF.open("POST",aD,false);aF.send()}else{aF=new XMLHttpRequest();aF.open("POST",aD,false);aF.setRequestHeader("Content-Type","text/plain;charset=UTF-8");aF.send()}}};var aB=function(){var aC;av();if(ay.length>0){aC="//"+i.jsdomain+"/acttr?p="+i.params+"&m="+encodeURIComponent(i.network+"_:_life-perf-beacon_:_"+ai(ar()))+"&t="+(new Date()).getTime()}else{aC="//"+i.jsdomain+"/acttr?p="+i.params+"&m="+encodeURIComponent(i.network+"_:_life-perf-script_:_"+at())+"&t="+(new Date()).getTime()}ax(aC)};var au=function(){if(aw()){try{if(c.location.hostname==="www.lifescript.com"){av();az=t();if(ay.length>0){m("life-perf",ai(ar()))}else{if(typeof c.performance.clearResourceTimings==="function"&&typeof c.performance.setResourceTimingBufferSize==="function"){c.performance.setResourceTimingBufferSize(1000);c.performance.clearResourceTimings()}if(typeof c.addEventListener!=="undefined"){c.addEventListener("unload",aB,false)}else{c.attachEvent("onunload",aB)}m("life-perf-unload-set",az.timeElapsed,(new Date()).getTime()-c.PMOStartTime)}}}catch(aC){m("life-perf-ex",W(aC))}}};return{run:au,isSupported:aw}}());var ad=function(){var aq="";for(var ar=0;ar<8;ar++){aq+=String.fromCharCode(Math.floor(Math.random()*(122-97+1)+97))}aq+=Math.floor(Math.random()*100001);return aq};var N=function(){var ar="TEST";try{c.localStorage.setItem(ar,ar);c.localStorage.removeItem(ar);return true}catch(aq){return false}};var P=function(){return !N()||typeof c.postMessage==="undefined"};var E=function(){m("snbx-load")};var M=function(aq,at){var ar=(typeof aq.DP!=="undefined")&&(typeof aq.DP.hasDisplayResponse!="undefined")&&(aq.DP.displayEngine!=5||at==1);c.PMO.Interface.triggerJSCallback(ar)};var C=function(at,aq){var ar=new RegExp("(?:^| )("+at+")(?:$| )");return ar.test(aq)};var Q=function(ar){var aq=ar||c.event;return typeof aq.button!=="undefined"&&aq.button===0||(typeof ar.which!=="undefined"&&ar.which===1)};var J=function(){var au=c.navigator.userAgent.toLowerCase();var at=/(chrome)[ \/]([\w.]+)/.exec(au)||/(webkit)[ \/]([\w.]+)/.exec(au)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(au)||/(msie) ([\w.]+)/.exec(au)||au.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(au)||[];var av=at[1]||"",ar=at[2]||"0";var aq={};if(av){aq[av]=true;aq.version=ar}if(aq.chrome){aq.webkit=true}else{if(aq.webkit){aq.safari=true}}return aq};var al=function(aq){if(typeof aq==="string"){return encodeURIComponent(aq).replace(/\~/g,"%7E").replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\'/g,"%27")}return aq};var D=function(aq){var ar=aq.target||aq.srcElement;while(ar&&ar.nodeName.toUpperCase()!=="A"){ar=ar.parentNode}return ar};var B=function(aq){try{if(typeof DPO.adknw==="undefined"){Util.insertFrame(aq);DPO.adknw=true}}catch(ar){m("adknw-ex",W(ar))}};var af=function(){DPO.adknw=true};var I=function(aq){var ar=ac.createElement("iframe");ar.setAttribute("frameborder","0");ar.setAttribute("scrolling","no");ar.setAttribute("marginwidth","0");ar.setAttribute("marginheight","0");ar.setAttribute("allowtransparency","true");ar.style.border="0px";ar.style.height="0px";ar.style.width="0px";ar.setAttribute("src",aq);Z(ar)};var f=function(ar,av){try{var au="fa"+(typeof av==="undefined"?Util.getRandomToken():av);if(!ac.getElementById(au)){var aq=ac.createElement("img");aq.id=au;aq.src=ar;aq.width=1;aq.height=1;aq.style.width="1px";aq.style.height="1px";ac.body.appendChild(aq)}}catch(at){m("trck-img-ex",W(at))}};var aa=function(aq){if(typeof aq.data!=="undefined"){timers.dispCanShow=parseInt(aq.data.dispCanShow,10);timers.transCanShow=parseInt(aq.data.transCanShow,10)}else{timers.dispCanShow=parseInt(aq.dispCanShow,10);timers.transCanShow=parseInt(aq.transCanShow,10)}};var b=function(ar){var aq=ar?ar:c.event;if(aq.stopPropagation){aq.stopPropagation()}if(aq.cancelBubble!==null){aq.cancelBubble=true}};var ah=function(aw,au){var ar=function(az){var aB=az.split("-"),ax=aB.length;if(ax===1){return aB[0]}var aA=az.charAt(0)==="-"?aB[0].charAt(0).toUpperCase()+aB[0].substring(1):aB[0];for(var ay=1;ay<ax;ay++){aA+=aB[ay].charAt(0).toUpperCase()+aB[ay].substring(1)}return aA};if(!aw||!au){return null}if(au==="float"){au=(typeof aw.style.styleFloat==="undefined")?"cssFloat":"styleFloat"}else{au=ar(au)}var av=aw.style[au],at;if(!av||av==="auto"){var aq=ac.defaultView;if(aq&&aq.getComputedStyle){at=aq.getComputedStyle(aw,null);av=at?at[au]:null}else{if(typeof aw.currentStyle!=="undefined"){at=aw.currentStyle;av=at?at[au]:null}}}if(au==="opacity"){return av?parseFloat(av):1}return av==="auto"?null:av};var r=function(ar,au){var at="fa"+(typeof au==="undefined"?ad():au);if(!ac.getElementById(at)){var aq=ac.createElement("img");aq.id=at;aq.src=ar;aq.width=1;aq.height=1;aq.style.width="1px";aq.style.height="1px";Z(aq)}};var o=function(ar){if(typeof ar.extImp!=="undefined"){var aq=ac.createElement("iframe");aq.setAttribute("src",ar.extImp);aq.setAttribute("frameborder","0");aq.setAttribute("scrolling","no");aq.setAttribute("marginwidth","0");aq.setAttribute("marginheight","0");aq.setAttribute("allowtransparency","true");aq.width="1px";aq.height="1px";ac.body.appendChild(aq)}};var ag=function(at,ar){if(!ac.getElementById(at)){var aq=ac.createElement("img");aq.style.width="1px";aq.style.height="1px";aq.id=at;aq.src=ar+"?"+(Math.round(new Date().getTime()/1000));ac.body.appendChild(aq)}};var ab=function(aq){if(typeof aq==="string"){return encodeURIComponent(aq).replace(/\~/g,"%7E").replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\'/g,"%27")}return aq};var j=function(){return externalConfig.helpURL};var d=function(){c.open(j(),"_blank")};var h=function(){var ar;var aq=ac.createElement("iframe");aq.setAttribute("frameborder","0");aq.setAttribute("scrolling","no");aq.setAttribute("marginwidth","0");aq.setAttribute("marginheight","0");aq.setAttribute("allowtransparency","true");aq.setAttribute("style","border: 0px; width: 0px !important; height: 0px !important;");ac.body.appendChild(aq);switch(arguments.length){case 1:ar=aq.contentWindow.open(arguments[0]);break;case 2:ar=aq.contentWindow.open(arguments[0],arguments[1]);break;case 3:ar=aq.contentWindow.open(arguments[0],arguments[1],arguments[2]);break}ac.body.removeChild(aq);return ar};var n=function(aq,ar){if(aq===""){return false}if(typeof ar==="undefined"&&typeof externalConfig.IEVersion!=="undefined"&&externalConfig.IEVersion){if(externalConfig.IEVersion<9){ar="width="+Math.min(1200,c.screen.width)+",height="+Math.min(800,c.screen.height)+",top=0,left=0,menubar=yes,toolbar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"}else{h(aq,"_blank");c.PMO.Interface.notify({type:"HIDETLAD"});return false}}h(aq,"_blank",ar);c.PMO.Interface.notify({type:"HIDETLAD"})};var aj=function(aq){return systemConfig.transHelp+(systemConfig.transHelp.indexOf("?")!==-1?"&":"?")+"t="+systemConfig.adsType[aq]+(systemConfig.appName!==""?"&an="+ab(systemConfig.appName):"")};var ae=function(aq){if(aq===0){c.open(aj(aq),"_blank",systemConfig.transHelpWin)}else{n(aj(aq))}};(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(at){if(this===void 0||this===null){throw new TypeError()}var au=Object(this);var aq=au.length>>>0;if(aq===0){return -1}var av=0;if(arguments.length>0){av=Number(arguments[1]);if(av!==av){av=0}else{if(av!==0&&av!==(1/0)&&av!==-(1/0)){av=(av>0||-1)*Math.floor(Math.abs(av))}}}if(av>=aq){return -1}var ar=av>=0?av:Math.max(aq-Math.abs(av),0);for(;ar<aq;ar++){if(ar in au&&au[ar]===at){return ar}}return -1}}}());var Z=function(aq){if(ac.body.nodeName.toUpperCase()==="FRAMESET"){ac.documentElement.insertBefore(aq,ac.body)}else{ac.body.appendChild(aq)}};var S={backComp:Y,useObject:y,IEVersion:x,log:e,flashManager:v,getExceptionInfo:W,getPageInfo:k,getTitleContent:u,checkFlash:R,getFlashVersion:ao,getMetaKeywords:H,fetchExtJS:g,getElementStyleObject:V,isElementVisible:T,hasJQClick:w,trim:a,getEventSource:am,factory:L,createAdInfoObject:t,getCheckAdsUrl:K,adUtilObj:X,setExtImpression:O,isAdWindow:A,isBrandingRequiered:s,LPWorker:an,logRIP:G,visibilityTracker:U,getRandomToken:ad,isLegacyBrowser:P,hasStorage:N,logSandboxLoad:E,runCallbackLogicForDisplayAds:M,logDisplayModule:ap,testClassname:C,isLeftClick:Q,getBrowserInfo:J,encodeURI:al,trackAdknw:B,insertFrame:I,insertTrackingImage:f,cancelClickEvent:b,getStyle:ah,setTrackingImage:r,setExternalImp:o,setTrckImg:ag,encodeURICustom:ab,openHomeURL:d,getAdInfoObject:p,startPerformanceManager:z.run,appendToBody:Z};var q=function(){try{if(typeof c.PMO.Interface!=="undefined"){if(c.PMO.Interface.checkModule("UTL")){return}else{c.PMO.Interface.register({name:"UTL",instance:this,events:null})}}else{c.setTimeout(q,50)}}catch(aq){}};var ak=function(){try{if(typeof c.PMO.Interface!=="undefined"){if(c.PMO.Interface.checkModule("UTL")){return}else{c.PMO.Util=S;i=c.PMO.Interface.getPrimaryConfig();q()}}else{c.setTimeout(ak,50)}}catch(aq){}};return{init:ak}}(this,document)).init();