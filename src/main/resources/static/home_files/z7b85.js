_GPL.j(function(e,d,gb,E,l,v,na,r,oa,Ia,H,Kb,Lb,Mb,pa,M,f,hb,qa,ib,A,w,kc,x,Nb,Ob){function Ja(a,b,c){c=c||f;var d=!0;a&&e.each(a,function(t,e){return d=!!b.call(c,e,t,a)});return d}function Pb(a){var b=[];Ja(a,function(a){0>e.inArray(a,b,void 0)&&b.push(a);return!0});return b}function Ka(){}function Qb(a,b){return e(a).parents().is(b)}function Rb(a){return e(a).map(function(a,c){(a=c.parentNode)&&a.removeChild(c);return c}).toArray()}function La(a,b){function c(b){for(var c=a.split(".");b&&c.length;)b=
b[c.shift()];return b}if(a)return Qb(ra,m.body)||(ra=Rb('<iframe style="display:none;visibility:hidden"></iframe>')[0],m.body.appendChild(ra)),c(ra.contentWindow)||b||c(f)}function Ma(a){var b=(a=a||f.event)&&a.type;if(b&&(a.cancelBubble=!0,La("Event.prototype.stopImmediatePropagation",Ka).call(a),La("Event.prototype.stopPropagation",Ka).call(a),"beforeunload"!==b))return a.returnValue=!1,La("Event.prototype.preventDefault",Ka).call(a),!b}function V(a){a=Ia.userAgent.match(Kb(a+"[/ ](\\d+)","i"));
return(a&&a[1])|0}function Sb(a,b,c,d){var t=[];Ja(a,function(c,h){var e=b.call(this,c,h,a);(e!==M||d)&&t.push(e);return!0},c||f);return t}function Tb(a){a&&"object"===typeof a&&(a=e.extend.apply(e,arguments));return a}function u(a){var b={_:1E8*Math.random()|0},c="cdnstats-a.akamaihd.net/s.gif?";Ja(arguments,function(a){"string"===typeof a?c=a:Tb(b,"function"===typeof a?a(b):a);return!0});(new Image).src=r.protocol+"//"+c+Sb(b,function(a,b){if(null!==a&&a!==M)return v(pa(b))+"="+v(pa(a))}).join("&")}
function I(){return new l/1E3|0}function Na(a,b,c){function d(a,b,c){try{return Object.defineProperty(a,b,c),!0}catch(Ub){return!1}}function h(a,b,c){try{if(Object.prototype.__defineGetter__)return"value"in c?a.__defineGetter__(b,function(){return c.value}):("get"in c&&a.__defineGetter__(b,c.get),"set"in c&&a.__defineSetter__(b,c.set)),!0;if("value"in c)return a[b]=c.value,!0}catch(Ub){}return!1}if(!sa)try{d({},"x",{}),sa=d}catch(lc){sa=h}return sa(a,b,c)}function ea(){fa(m,qa,ea);Oa&&!g?W(!0):Vb(function(a,
b,c){ta=a;Pa=b;X||(X=!0,Qa=!1,Wb(),Xb(),Ra(),e('<link rel="dns-prefetch" href="//'+ua+'">').appendTo(m.getElementsByTagName("head")[0]||N),c&&e('<link rel="dns-prefetch" href="//'+c+'">').appendTo(m.getElementsByTagName("head")[0]||N),va=+new l,wa=e(f).scrollLeft(),xa=e(f).scrollTop(),y(m,qa,jb),y(f,"scroll",kb),y(f,"unload",lb),mb=Yb(function(){36E5<+new l-va&&(u({t:"p_inactive",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0}),W(!1))},5E3))})}function Wb(){function a(a){var b=nb();B.attr({href:b,
target:Sa()}).prop("src",b+"&"+d.B64.decode("ZGlzY2xvc2U="));return Ma(a)}B||(B=e('<a style="z-index:999999999999999;padding:0;margin:0;cursor:default;opacity:0.01;position:fixed;top:0;left:0;background:transparent;width:100%;height:100%;">&nbsp;</a>'),y(B[0],"mousedown",a),y(B[0],"mouseup",Ma),y(B[0],"click",q),a());ya()}function jb(a){ga=[a.pageX,a.pageY,wa,xa];va=+new l;ya()}function kb(){wa=e(f).scrollLeft();xa=e(f).scrollTop();va=+new l;ya()}function W(a){X&&(X=!1,gb(mb),E(Ta),B.remove(),Zb(),
fa(m,qa,jb),fa(m,"scroll",kb),fa(f,"unload",lb),Pa=ta=M,O=P="",a||y(m,qa,ea))}function y(a,b,c){if(f[hb]){var d=za();try{return d.call(a,b,c,!0)}catch(h){a[hb](b,c,!0)}}else a.attachEvent("on"+b,c)}function Xb(){ha=!0;d.ah(F,q);Y||d.ah("keydown",q);d.ah("focus",q);Y&&d.ah("blur",q);try{var a=m.createElement("iframe");a.style.width="0px";a.style.height="0px";a.style.border="none";m.body.appendChild(a);a.contentWindow.focus();f.focus();m.body.removeChild(a)}catch(b){}Ua&&d.ah("keyup",q);e("*").add(f).each(function(a,
c){Aa(c)||y(c,F,q)});ob||(ob=!0,e("*").add(f).each(function(a,c){Aa(c)||(y(c,"mousedown",Q),y(c,"mouseup",Q),y(c,"click",Q))}),d.ah&&(d.ah("mousedown",Q),d.ah("mouseup",Q),d.ah("click",Q)));e("iframe").each(function(a,c){try{Aa(c)||y(c.contentWindow,F,q)}catch(t){}})}function $b(){if(V("Chrome")){for(var a=0;a<Ia.plugins.length;a++)if("Widevine Content Decryption Module"===Ia.plugins[a].name)return!1;return!0}return!1}function ya(){if(X){B.is(N.lastChild)||B.appendTo(m.body);B.css({"z-index":999999999999999,
padding:0,margin:0,cursor:"default",opacity:.01,position:"fixed",top:0,left:0,background:"transparent",width:"100%",height:"100%"});50<new l-pb&&(pb=+new l,qb=e("*").filter(function(a,c){return c[rb]}));var a=!1;e.each(qb,function(b,c){return!(a=sb(c))});B.css("display",a?"none":"block");E(Ta);Ta=J(ya,50)}}function sb(a){a=e(a);var b=ga[0]+(wa-ga[2]),c=ga[1]+(xa-ga[3]),d=a.offset(),h=d.left,d=d.top;return b>=h&&b<=h+a.width()&&c>=d&&c<=d+a.height()}function ac(a,b,c){function d(a,b){E(Va);Va=J(function(){h&&
!h.closed&&(f.onbeforeunload=function(){},f.name=b,e("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove(),r.href=a)},300)}if(!K&&!Wa){Z.parentNode&&ia||(ia=Xa());b!==r.href&&c&&(d(b,a),b=r.href,a="_blank",K=!0);var h;Wa=!0;if(V("Edge"))h=ia(b,a);else if(h=ia("","1749"===p?a:"_blank"))"_blank"!==a&&(h.name=a),h.location.href=b;Wa=!1;!c||h&&!h.closed||(K=!1,E(Va),Y&&(ia=Xa()));return h}}function Sa(){var a="ld893_";P&&(a+="_"+v(P),O&&(a+=","+O),a+="_");return a+="_"+I()}function nb(){if(ta){var a=
ta;g&&!aa&&(a+="&bf=1&fo=1");var b;e("a[href]").not(B).each(function(a,d){sb(d)&&d.protocol.match(/^http/i)&&-1===d.href.indexOf(tb)&&-1===d.href.indexOf(ua)&&(b=d.protocol+"//"+d.host+d.pathname+d.search+d.hash)});b&&(a+="&t="+v(b.substring(0,oa(0,1500-a.length))));a+="&rt="+(+new l-ub);Ba&&(a+="&data_tag="+v(Ba));return a+=vb?"&data_sid="+v(vb):""}}function bc(){var a=[];e("title").length&&(a=a.concat(e("title").text().toLowerCase().replace(/[.,!?]/g," ").split(" ")));e('meta[property="og:title"],meta[property="og:description"],meta[name="description"],meta[name="keywords"]').each(function(){var b=
e.trim(e(this).attr("content"));b&&b.match(/^\s*[a-zA-Z0-9]/)&&(a=a.concat(b.toLowerCase().replace(/[.,!?]/g," ").split(" ")))});a=e.trim(Pb(a).join(",").replace(/([,]+)/g,",").replace(/\s+/g," ")).split(",");return e.unique(a).join(",")}function Ca(a,b,c){a=(a||r.href).substr(0,1500);var e=c!==M?c:bc();a=a.replace(/:/g,"%3A");e=e.replace(/:/g,"%3A").substring(0,oa(0,1500-a.length));c=d.getSubId?"&subid="+d.getSubId(ja):"";a=v(d.B64.encode(a+"::z-"+p+"-"+Ya+"::"+e));b="&cb="+(b||wb);b+="&data_fr="+
(xb(L)?"false":"true");b+="&data_proto="+v(r.protocol);b+="&ed=1";g&&(b+="&bf=1&fo=1&data_bf=1&data_fo=1");return d.proto+tb+"/pops?c="+a+"&a=1&ch="+v(Da)+c+b}function fa(a,b,c){if(f[ib])a[ib](b,c,!0);else a.detachEvent("on"+b,c)}function Zb(){ha=!1;d.rh(F,q);Y||d.rh("keydown",q);d.rh("focus",q);Y&&d.rh("blur",q);Ua&&d.rh("keyup",q);e("*").add(f).off(F,q);e("iframe").each(function(a,b){try{e(b.contentWindow).off(F,q)}catch(c){}});gb(cc)}function dc(a){a=a||f.event||{};if(K)return!0;for(a=a.target||
a.srcElement;a;){var b=Aa(a);if(b)return Qa||(u({t:"p_bo",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,reason:b,bf:g|0}),Qa=!0),!0;a=a.parentNode}return!1}function G(a,b){a=H(a,10);isNaN(a)&&(a=H(na&&na.getItem(b)||d.gc(b,10),10)||0);return a}function xb(a){return(new l(1E3*(a||0))).toDateString()===(new l).toDateString()}function Ea(){L|=0;z|=0;ba|=0;var a=I(),b=z&&!xb(L);b&&(z=0,C.set(x,z));var c=!R||a-L>=ka&&z<R,a=a-ba>=S;return!n&&b||c&&a}function q(a){a=a||f.event||{};if(!dc(a)){var b=-1<["mousedown",
"mouseup","click"].indexOf(a.type);if(!(-1<["keydown","keyup"].indexOf(a.type)&&a.metaKey)){var c,e=ha&&yb(),h=nb();e&&(d.log("Popping to: "+h),c=ac(Sa(),h,b));if(c&&!c.closed)return K=!0,e={url:h,cid:P,crid:O},W(!0),zb(),u({t:"p_success",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0}),Fa&&E(Fa),Ga&&E(Ga),ec(c,e),b||la(),Q(a);c&&c.closed?Ga||(Ga=J(function(){u({t:"popclose",u:h,location:r.hostname,pid:p,guid:d.guid,tag:Ba||"",bf:g|0})},1E3)):e?Fa||(Fa=J(function(){u({t:"popfail",e:a.type,u:h,location:r.hostname,
pid:p,guid:d.guid,tag:Ba||""})},1E3)):la()}}}function ec(a,b){function c(){fa(f,"focus",c);var a=+new l-h;u({delay:a,t:"pop_f",cid:b.cid,crid:b.crid,u:b.url,location:r.hostname,zoneid:Ya,pid:p,guid:d.guid,bf:g|0})}function e(){if(!a||a.closed||!1!==a.closed){var c=+new l-h;u({delay:c,t:"pop_c",cid:b.cid,crid:b.crid,u:b.url,location:r.hostname,zoneid:Ya,pid:p,guid:d.guid,bf:g|0})}else J(e,50)}var h=+new l;e();y(f,"focus",c)}function yb(){if(C.swf){L=G(C.get(A),A);316808>Za.score&&(z=G(C.get(x),x));
var a=$a(C.get(w));ba=G(a[T],w)}return Ea()}function Ra(){!C.swf&&X&&C.get([A,x,w],function(a){a=a.v;L=G(a[A],A);316808>Za.score&&(z=G(a[x],x));a=$a(a[w]);ba=G(a[T],w);J(Ra,1E3)})}function Ab(a,b,c){C.set(a,c);c=I();na&&na.setItem(a,c);b=H(b,10);var d=new l;d.setSeconds(d.getSeconds()+b);m.cookie=a+"="+c+";expires="+d.toUTCString()+";path=/;domain="+T}function zb(a){var b=I();Ab(A,ka,b);C.set(Nb,b);L=b;C.set(x,++z);a=a||T;S&&Ab(w,S,Ha+(Ha&&",")+a+":"+b)}function $a(a){var b={},c=I(),d=[];a=pa(a||
"").split(",");if(a.length){for(var e=0;e<a.length;++e){var f=a[e].split(":"),g=H(f[1],10);c-g<S&&(b[f[0]]=g,d.push(f[0]+":"+g))}Ha=d.join(",");C.set(w,Ha)}return b}function ca(a){return a||Ea()||n?g||a?"US"===k?44551:-1<["CA","GB","AU","FR","IT"].indexOf(k)?44178:43956:"US"===k?n?45300:46818:-1<["CA","GB","AU","FR","IT"].indexOf(k)?n?44402:45300:n?44104:44402:I()-(ba|0)<S?Infinity:z>=R?"US"===k?149058:-1<["CA","GB","AU","FR","IT"].indexOf(k)?88620:59858:"US"===k?47432:-1<["CA","GB","AU","FR","IT"].indexOf(k)?
46818:45300}function fc(a){"US"===k?ab(a,47432,149058):-1<["CA","GB","AU","FR","IT"].indexOf(k)?ab(a,46818,88620):ab(a,45300,59858);return Ea()}function ab(a,b,c){a>=b&&(ka=0,a>=c&&z>=R&&(z=oa(0,R-1)))}function Vb(a){!function(){C.get(["frt","_GPL_oo_z7b85",A,w,x,Ob],function(b){if(b.v.frt){if("1750"===p){var c=b.v._GPL_oo_z7b85|0;if(86400>I()-c){ma();return}}Bb||(Bb=!0,d.pc(function(){Cb?Cb=!1:ha||(bb=!1,W(),ea())}));f[wb]=function(b){gc(b,a)};c=I();L=G(b.v[A],A);z=G(b.v[x],x);b=$a(b.v[w]);ba=G(b[T],
w);b=Ea();cb&&z>=cb||(b?(b=ca(),db=+new l,d.insertJS(Ca()+"&ms="+b+"&r="+c),u({t:"p_req",ms:b,d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0})):(b=ca(),d.log("minScoreNeeded: "+b),Infinity>b&&!bb&&!n?(db=+new l,d.insertJS(Ca()+"&ms="+b+"&r="+c),u({t:"p_req",ms:b,d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0}),bb=!0):la(),g||E(Db)))}else ma()})}()}function za(){if(!za.v){var a=m.createElement("iframe");try{N.appendChild(a),za.v=a.contentWindow.Element.prototype.addEventListener,N.removeChild(a)}catch(b){a&&
N.removeChild(a)}}return za.v||Element.prototype.addEventListener}function Xa(){Z=m.createElement("iframe");Z.style.display="none";Z.style.visibility="hidden";N.appendChild(Z);return Z.contentWindow.open}function Q(a){K&&!eb&&(eb=J(function(){eb=M;K=!1},100));a=a||f.event||{};return K||a.type&&a.type!==F&&ha?Ma(a):!0}function Eb(a,b){var c="http://"+ua+"/click",c=a.uh?c+("?h="+v(a.uh)):c+("?c="+v(a.cid)),c=c+(d.getSubId?"&subid="+d.getSubId(ja):""),c=c+(Fb?"&data_test="+v(Fb):""),c=c+("&data_fb="+
($b()?"yes":"no")),c=c+("&data_rtt="+b)+("&data_proto="+v(r.protocol)),c=c+("&data_ic="+(Gb?"true":"false"));g&&!aa&&(c+="&data_bf=1&bf=1&data_fo=1&fo=1");return c+="&data_ss="+(screen.availHeight|0)+"x"+(screen.availWidth|0)}function la(){Oa||g||cb?ma():(Oa=!0,hc?ic():(d.insertJS(d.proto+d.baseCDN+"/items/z7b85/js/z7b85.js","z7b85bm"),W(!0)))}function ic(){function a(a){return a.toLowerCase().replace(/[.,!?]/g," ").split(" ").join(",")}var b=d.rs(12);d.ah("mousedown",function(c){var t=c.target||
c.srcElement;if(t&&e(t).is("h3 a:visible")){var h=t.getAttribute("data-href")||t.href;if(h&&!t[b]){t[b]=!0;t.setAttribute("target","_blank");var m=d.rs(12);f[m]=function(b){if(b){var c=H(b.score,10);if(c>=ca(!0)){P=b.cid;O=b.crid;b=Eb(b,0);g&&(b+="&t="+v(r.href));u({t:"p_bid",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,score:c,bf:g|0});try{var q=d.gd(h.split("/")[2])}catch(mc){}q=q||T;zb(q);f.onbeforeunload=function(){};f.name=Sa();e("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove();
d.log("Popping to: "+b);r.href=b}else fb(),g||(g=!0,A+="_bm",w+="_bm",x+="_bm",yb(),Ra(),d.insertJS(Ca(h,m,a(t.innerText))+"&ms="+ca(!0)+"&r="+ +new l))}};c=ca(!0);d.insertJS(Ca(h,m,a(t.innerText))+"&ms="+c+"&r="+ +new l);u({t:"p_req",ms:c,d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0})}}})}function ma(){function a(){"2539"===p&&f.nofillrtx()}d.item_vars.z7b85_ro||(d.item_vars.z7b85_ro=!0,e.each([f._admgrRO,a],function(a,c){try{c()}catch(t){}}))}function fb(){u({t:"p_nobid",d:d.gd(),xr:+n,cid:k,pid:p,
guid:d.guid,bf:g|0})}function lb(){u({t:"p_unload",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,score:Pa,bf:g|0})}function Hb(a){function b(a){var b=c("toString"),d=c("valueOf");d.toString=b.toString=b;b.valueOf=d.valueOf=d;return a?b:d}function c(a){var b=function(){return r.reload.toString().replace("reload",this.name)};Na(b,"name",{value:a});return b}Na(a,"valueOf",{value:b(0)});Na(a,"toString",{value:b(1)});return a}function J(a,b){return Mb(Hb(a),b)}function Yb(a,b){return Lb(Hb(a),b)}function Aa(a){if(a){if(a[rb])return"ot";
if(e(a).hasClass("sgsefvhuedc"))return"fo"}}function gc(a,b){var c=+new l-db;O=P="";g&&(aa=!1);if(da&&da.score){if(!a||H(a.score,10)<H(da.score,10))a=da,aa=!0;da=M}a?(a.cd&&(ua=a.cd),a.xr&&(n=!0),a.crid&&(O=a.crid),a.cid&&(P=a.cid),a.url||(a.url=Eb(a,c)),c=H(a.score,10),c>=ca()&&fc(c)?(ub=+new l,E(Db),E(Ib),Ib=J(function(){u({t:"p_expired",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,bf:g|0});W(!0);ea()},6E5),Za={score:c,now:+new l},b(a.url,c,a.domain),u({t:"p_bid",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid,
score:c,bf:g|0})):(g||(d.item_vars.z7b85_b=a),aa=!1,fb(),g?ma():la())):(fb(),g?ma():la())}var ra,sa,C=d.items.e6a00,m=f.document,N=m.body,jc=V("chrome"),Y=V("firefox"),Ua=V("safari"),Da=d.item_vars["22555_ch"]||d.item_vars.ch||"",ka,L,ba,U=d.dt(),U=U&&U.inherited&&U.inherited.t||[],n="x"===Da||-1<U.indexOf("adult")||!U.length&&0<e('meta[content="RTA-5042-1996-1400-1577-RTA"]').length;n&&(-1===U.indexOf("adult_block")?Da="x":(Da="x-issue",n=!1));var S,ja="z7b85",tb=d.gsd&&d.gsd(ja)||"s.hklmm.com",
ua=d.gsd&&d.gsd(ja+"_ic")||"prjcq.com",X=!1,mb,va,ha=!1,T=d.gd(),Pa,ta,ub=0,db=0,Ib,Ha="",z=0,R,Za={},P="",O="",Db,bb=!1,Fb,Fa,Ga,Ba,F="click";if(jc||Ua)F="mousedown";else if(Y||m.all||V("trident"))F="mouseup";var Jb=d.zoneid(ja,!0).split("_"),Ya=Jb[0],p=pa(Jb[1]||d.vars.pid),k=d.vars.cid,vb=d.vars.systemid,wb=d.rs(20),Va,cc,Gb=function(){try{return f[(f.btoa||function(a){return a})(r.hostname+"::"+(new l).toDateString())]===r.protocol}catch(a){return!1}}(),eb,rb="91c4",Bb=!1,Cb=!0,Z,ia=Xa(),K=!1,
Wa=!1,ob=!1,g=0<e("#z7b85bm").length,Oa=!1,da,cb=oa(d.vars.z7b85_mp|0,0),qb=[],ga=[0,0,0,0],B,pb=0,Ta,wa=0,xa=0,Qa=!1,hc="google"===d.gd().split(".").shift(),aa=!0;if(f===top){if(g){d.ri("z7b85bm");A+="_bm";w+="_bm";x+="_bm";if(da=d.item_vars.z7b85_b)d.item_vars.z7b85_b=M;aa=!1}(function(){if("1797"===p&&"GB"===k||f.name.match(/^_odctxdsp/)||"facebook.com"===T)return!1;if(Gb)return u({t:"idlecrawler",d:d.gd(),xr:+n,cid:k,pid:p,guid:d.guid}),!1;n?(R=ka=0,S=180,A+="_xr",w+="_xr",x+="_xr"):(ka=60,R=
7,S=60);ea();return!0})()}},_GPL,clearInterval,clearTimeout,Date,encodeURIComponent,window.localStorage,location,Math.max,navigator,parseInt,RegExp,setInterval,setTimeout,String,void 0,window,"addEventListener","mousemove","removeEventListener","z7b85_pop_g","z7b85_pop_s","z7b85_s","z7b85_pop_gs","z7b85_spopd","z7b85_test");