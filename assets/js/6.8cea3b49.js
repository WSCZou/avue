(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{526:function(t,e,n){"use strict";var r=n(3),i=n(55).find,s=n(175),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},530:function(t,e,n){"use strict";var r=n(2),i=n(121).PROPER,s=n(16),o=n(10),a=n(38),f=n(15),c=n(4),u=n(293),l=RegExp.prototype,d=l.toString,h=r(u),m=c((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),v=i&&"toString"!=d.name;(m||v)&&s(RegExp.prototype,"toString",(function(){var t=o(this),e=f(t.source),n=t.flags;return"/"+e+"/"+f(void 0===n&&a(l,t)&&!("flags"in l)?h(t):n)}),{unsafe:!0})},534:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=[{label:"支付宝",value:0},{label:"微信",value:1},{label:"对公",value:2}],i=[{label:"插件定制/远程协助",value:1,money:100},{label:"全家桶",value:2,money:999,hide:!0},{label:"数据大屏",value:4,money:2499},{label:"商业桶",value:3,money:2999},{label:"BladeXAvue联合版",value:10,href:"https://bladex.vip/#/pay?version=3",disabled:!0,hide:!0,money:6600}]},548:function(t,e,n){"use strict";var r=n(3),i=n(2),s=n(30),o=n(79),a=n(15),f=i("".slice),c=Math.max,u=Math.min;r({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var n,r,i=a(s(this)),l=i.length,d=o(t);return d===1/0&&(d=0),d<0&&(d=c(l+d,0)),(n=void 0===e?l:o(e))<=0||n===1/0||d>=(r=u(d+n,l))?"":f(i,d,r)}})},550:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",f="month",c="quarter",u="year",l="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,o=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:u,w:a,d:o,D:l,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",A={};A[y]=v;var b=function(t){return t instanceof _},k=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)A[t]&&(r=t),e&&(A[t]=e,r=t);else{var i=t.name;A[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},P=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},w=p;w.l=k,w.i=b,w.w=function(t,e){return P(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function v(t){this.$L=k(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=P(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return P(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<P(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,c=!!w.u(e)||e,d=w.p(t),h=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return c?h(1,0):h(31,11);case f:return c?h(1,g):h(0,g+1);case a:var A=this.$locale().weekStart||0,b=(v<A?v+7:v)-A;return h(c?p-b:p+(6-b),g);case o:case l:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,c=w.p(t),d="set"+(this.$u?"UTC":""),h=(a={},a[o]=d+"Date",a[l]=d+"Date",a[f]=d+"Month",a[u]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[c],m=c===o?this.$D+(e-this.$W):e;if(c===f||c===u){var v=this.clone().set(l,1);v.$d[h](m),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(n,c){var l,d=this;n=Number(n);var h=w.p(c),m=function(t){var e=P(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(h===f)return this.set(f,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===o)return m(1);if(h===a)return m(7);var v=(l={},l[i]=t,l[s]=e,l[r]=1e3,l)[h]||1,g=this.$d.getTime()+n*v;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,o=this.$m,a=this.$M,f=n.weekdays,c=n.months,u=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},l=function(t){return w.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,f,2),ddd:u(n.weekdaysShort,this.$W,f,3),dddd:f[this.$W],H:String(s),HH:w.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,o,!0),A:h(s,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||v[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,d){var h,m=w.p(l),v=P(n),g=(v.utcOffset()-this.utcOffset())*t,p=this-v,y=w.m(this,v);return y=(h={},h[u]=y/12,h[f]=y,h[c]=y/3,h[a]=(p-g)/6048e5,h[o]=(p-g)/864e5,h[s]=p/e,h[i]=p/t,h[r]=p/1e3,h)[m]||p,d?y:w.a(y)},g.daysInMonth=function(){return this.endOf(f).$D},g.$locale=function(){return A[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=k(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),M=_.prototype;return P.prototype=M,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",f],["$y",u],["$D",l]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),P.extend=function(t,e){return t.$i||(t(e,_,P),t.$i=!0),P},P.locale=k,P.isDayjs=b,P.unix=function(t){return P(1e3*t)},P.en=A[y],P.Ls=A,P.p={},P}()},832:function(t,e,n){"use strict";n.r(e);n(39),n(40),n(47),n(7),n(117),n(289),n(37),n(292),n(297),n(116),n(171),n(172),n(296),n(120),n(288),n(174),n(548),n(530),n(287),n(526);var r=n(534),i=n(550),s=n.n(i),o=function(t,e,n){e.length<5?n(new Error("QQ号不正确")):n()},a={name:"pay",data:function(){return{config:r.a,img:"",fpbox:!1,datetime:"",datecheck:null,ordercheck:null,fpform:{},fpoption:{size:"mini",emptyBtn:!1,column:[{label:"订单号",prop:"orderid",disabled:!0,span:24},{label:"公司名称",prop:"mc",rules:[{required:!0,message:"请输入公司名称",trigger:"blur"}],span:24},{label:"公司税号",prop:"sh",rules:[{required:!0,message:"请输入公司税号",trigger:"blur"}],span:24}]},box:!1,list:r.a,id:"",form:{orderid:"",datetime:"",qq:"",day:0,type:0},option:{menuPosition:"left",emptyBtn:!1,submitBtn:!1,column:[{label:"",labelWidth:1,formslot:!0,row:!0,prop:"default"},{label:"产品名称",formslot:!0,row:!0,prop:"name"},{label:"产品类型",type:"radio",border:!0,formslot:!0,dataType:"number",dicData:r.a,span:24,row:!0,prop:"version"},{label:"授权期限",type:"radio",border:!0,display:!1,dicData:[{label:"永久",value:0}],row:!0,prop:"day"},{label:"",formslot:!0,labelWidth:1,row:!0,prop:"money"},{label:"联系QQ",span:7,row:!0,rules:[{required:!0,message:"请输入联系QQ",trigger:"blur"},{validator:o,trigger:"blur"}],prop:"qq"},{label:"支付方式",type:"radio",border:!0,dicData:r.b,formslot:!0,row:!0,prop:"type"},{label:"购买说明",prop:"info",span:24}]}}},watch:{$route:function(){this.init()},box:function(t){t||(clearInterval(this.ordercheck),clearInterval(this.datecheck))},"form.version":{handler:function(t){var e=r.a.filter((function(e){return e.value===t}))[0];this.form.name=e.label,this.form.money=e.money,[3,4].includes(t)&&(this.form.type=1),this.$router.push({path:"/views/pay",query:{version:t}})}}},created:function(){this.init()},computed:{wxpay:function(){return 1===this.form.type},datetimeList:function(){return this.datetime.split("")},className:function(){return 0===this.form.type?"".concat("pay","--bule"):"".concat("pay","--green")},btncolor:function(){return 0===this.form.type?"primary":"success"},imgsrc:function(){return 0===this.form.type?"/images/zfbicon.png":" /images/wxicon.png"},text:function(){return 0===this.form.type?"支付宝":"微信"},code:function(){return this.img}},methods:{handleSelect:function(t){t.href?window.location.href=t.href:this.form.version=t.value},init:function(){this.form.version=Number(this.store.session.get("version")||3)},update:function(t,e,n){var r=this.deepClone(e),i=this.Bmob.Query(n||"order");return i.set("id",t),delete r.createdAt,delete r.updatedAt,delete r.objectId,Object.keys(r).forEach((function(t){r[t]&&i.set(t,r[t])})),i.save()},insert:function(t,e){var n=this.Bmob.Query(e||"order");return Object.keys(t).forEach((function(e){e.includes("$")?n.set(e.replace("$","")+"_text",t[e]):n.set(e,t[e])})),n.save()},tradeNo:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),i=t.getHours(),s=t.getMinutes(),o=t.getSeconds();String(n).length<2&&(n="0"+n),String(r).length<2&&(r="0"+r),String(i).length<2&&(i="0"+i),String(s).length<2&&(s="0"+s),String(o).length<2&&(o="0"+o);var a="".concat(e).concat(n).concat(r).concat(i).concat(s).concat(o);return this.id=Math.random().toString(36).substr(2,6),a+"_"+this.id},handleFpSubmit:function(t,e){var n=this;this.fpform.flag=!1,this.$confirm("确认提交发票信息，一经提交无法修改？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.insert(n.fpform,"ticket").then((function(){n.$axios.post(n.website.API+"/sendfp",Object.assign(n.fpform,n.form)),n.fpbox=!1,e(),n.$message.success("发票提交成功"),n.msgtip()}))})).catch((function(){e()}))},queryOrderid:function(){var t=this;this.ordercheck=setInterval((function(){var e=t.Bmob.Query("order");e.equalTo("orderid","==",t.form.orderid),e.find().then((function(e){e[0].flag&&(t.box=!1,[3,4].includes(t.form.version)?t.fpbox=!0:t.msgtip(),0==t.box&&(clearInterval(t.ordercheck),clearInterval(t.datecheck)))}))}),1e3)},msgtip:function(){var t=this;[1].includes(this.form.version)?this.$alert("订单提交成功，请添加客服微信:avue_smallwei","提示",{confirmButtonText:"确定",callback:function(){t.$router.push("/")}}):this.$alert("相关资料已经发送".concat(this.form.qq,"@qq.com邮箱请查收"),"提示",{confirmButtonText:"确定",callback:function(){t.$router.push("/docs/vip")}})},queryTime:function(){var t=this;this.datetime="05:00";var e=299;this.datecheck=setInterval((function(){return function(){if(e>=0){var n=Math.floor(e/60),r=Math.floor(e%60);n<10&&(n="0"+n),r<10&&(r="0"+r),t.datetime=n+":"+r,--e}else t.box=!1,clearInterval(t.datecheck)}()}),1e3)},handleSubmit:function(){var t=this;if(this.form.qq.length<5||""==this.form.qq)this.$message.error("QQ号不正确");else{this.queryOrderid(),this.queryTime();var e=this.Bmob.Query("order");e.equalTo("qq","==",this.form.qq),e.equalTo("type","==",this.form.type),e.equalTo("version","==",this.form.version),e.equalTo("flag","==",!1);var n=function(){t.$axios.post(t.website.API+"/payinfo",{orderid:t.form.orderid,type:t.form.type,version:t.form.version}).then((function(e){var n=e.data.data.data;t.img=n}))};e.find().then((function(e){var r=e[0];if(t.img="",t.validatenull(r)){t.form.orderid=t.tradeNo(),t.fpform.orderid=t.form.orderid,t.form.datetime=s()().format("YYYY-MM-DD HH:mm:ss");var i=t.deepClone(t.form);delete i.objectId,delete i.createdAt,delete i.updatedAt,t.insert(i).then((function(e){t.form=t.deepClone(Object.assign(i,e)),n(),t.box=!0,t.$axios.post(t.website.API+"/sendmsg",{qq:t.form.qq,type:t.form.$type,version:t.form.$version,money:t.form.money,orderid:t.form.orderid})}))}else t.form=r,t.update(t.form.objectId,{datetime:s()().format("YYYY-MM-DD HH:mm:ss")}),t.fpform.orderid=t.form.orderid,t.id=t.form.orderid.split("_")[1],n(),t.box=!0}))}}}},f=n(29),c=Object(f.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pay"},[n("el-card",{staticClass:"pay__content"},[n("avue-form",{ref:"form",attrs:{option:t.option},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"pay__title"},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAADt0lEQVR4XrWWX2hcRRTGf2fu3XSTpqEbK5qmtAhqxaBKDagFpVAJ2LwIWAUriFgVVUFELKAKVfBRX1RAQEC0BMFH0RcLJQj4IraIapWoaZptUrKJxqb7584cQ5hhNnu5u1Twg8MZuLPz2+98c9mVO55RANLb6gBkp8v0FkKUcoUyXJkEMMme5liyp/WhGclG/Rnyf0HFAxKMfIDjKOhxIPFQ+a9Q6QFNkl2tu1DuUQWQR2S7G43gQkkO6rMMeUoXlymJHlMLuI0qS6IvAWkXt1LkVACT3lp/dr1eBJKYVXRpRrM7UZlkAyjgAHhK+t0u7zYfBbwKHG4/z2zaIDyP8E56S/3dAI5FIqm+gQIqhK6OLaT6Sm6/MAhMAW8BR9qzN9ExKcq3KAAvpDc3PvHgxGd5ryoH1AG+1II6QOUJ6dMRP+bE9y+BBwGAH6IJ79RXipUL4EenPJTsbXwElIA+DI8Fd6JgLaw1QFRAEYw+CpQwWsHwBcp+ov70uZtcpppxHgUUdKPLkeS65nvmansjMBFydJnQbAqTtwvXDkG9AagcxuhuhBMoB9mspcCK0ABuyQJOPNCPER6XAXdSLcM4EIXFFTi0Dnz4bsP8EqQiqDKGMI3KQZR2NYGLgEQocYs2zAJKA4VYAsoQKhhgZRV2VuC5CcMv5+GPBRAFAUFlGEenasB84AQowZf+bebVsYxKfCUcqHd4uQ5ZJrz2gGH3Djj9u1IZEFIDagElJ+/yUrDQCVVdNf/gWIou46idhbU6HD1gmNwnzNfg/n3w2THh0LiwuCxF0HPhvgdOGhbhAY45YAwHsYTlVZgYMzx9n3BhBdaaMH6DIMBMVelLhAJVPTDnNIKtmQsg9R0LAyWhWoOXP3Y8+b7j51kYLMObJ5ST3wuVQYo0G6H526ve6ay/PO21DoXfqvDVd/DTLIxcBd/8CJ9PC5WtgHaFajenqi3mcESXvlsL5RS2lmD8+g0Qb08p1kJ/qRuTc72dtmRG869MKAywdydMnVLOzMDwNnDFxJqHds/UXUzP0uJTrHfZ4XpbWTh1hvWxwo4hwVCoS8Bx4K9OpylRDrBAy1VLr8t2Oy3CflVuwso1OPpxkhowtVWMqEhfgqojC58DFoEZ4CzwNfArhOcRHP6YASRACdgCDAD9fp3mfls3Szun5b9AA7gMrPl15sE5pxkgvhzQBEoRmgOSAwZoBLe6jVcjGPU9/D5KbyhEKNaXH20RNIJte75Fo+054gCKnW5QDePNwQozzZ8R13n9Cx1eymjGjLG7AAAAAElFTkSuQmCC"}}),t._v(" "),n("span",[t._v("选择分类")])])]}},{key:"info",fn:function(e){return[n("span",[t._v("下单后会将授权资料发送至 "),n("b",{staticStyle:{color:"red"}},[t._v(t._s(t.form.qq))]),t._v("@qq.com，注意查收")])]}},{key:"name",fn:function(e){return[n("h2",{staticClass:"pay__name"},[t._v("Avue商业授权系列——"+t._s(t.form.name))])]}},{key:"version",fn:function(e){return[n("div",{staticClass:"pay__list"},[t._l(t.config,(function(e,r){return[e.hide?t._e():n("div",{key:r,staticClass:"pay__item",class:{"pay__item--active":t.form.version==e.value},on:{click:function(n){return t.handleSelect(e)}}},[n("div",{staticClass:"pay__item-name"},[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"pay__item-money"},[n("span",[t._v("¥")]),t._v("\n                "+t._s(e.money)+"\n              ")]),t._v(" "),t.form.version==e.value?n("img",{staticClass:"pay__item-img",attrs:{src:"https://www.kuaifaka.com/static/img/xiadui.29ad1d0.png"}}):t._e()])]}))],2)]}},{key:"money",fn:function(e){return[n("div",{staticClass:"pay__title"},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAMAAAA4Nk+sAAACZ1BMVEU2kPgzaf82kPg0dP03lPg2kPg2kPg2kPg3mPc2kPg2kPg2kPg2kPg2kPg2kPg2kPg2kPg3lfc2kPg2kPg2kPg2kPg2kPg3l/c2kPg2kPg2kPg2kPgzaf82kPgzaf8zaf82kPg1e/wzav82kPg2jvk2jvk1hfo3k/g2kvg0efw3k/g3k/g3lfc0dP01gvs0df03lPg2h/o3mPc0df00cv4zbv4zbP83lfc1fvszaf83mPc1g/s0d/03l/c3lPg2kPgzaf82ivk2h/o3lPg1gfszbP81ffw0cv43lfc3k/g2kPg2jfk2h/o1hPo1gfszaf8zaf80cP42kPg2h/o1hfo1gfs1hfo0e/w1hPo0eP01ffw0evwzbv82jPk0df01f/s2jvk2jPkzav81fvs0b/4zaf82jfk1gfs2jPk1iPo0d/01fPw2j/g2jvkzbv41h/o0eP01e/w0cf4zcP40cv42i/k1hvo2j/g0e/w2jfkzbf81hPozaf8za/82kPg2ifo1hfo0ef0zbP8zbf42jfk1iPo1f/s2kPgzaf81gPszaf8zbv41iPk0evw0d/0zbv4zbP8zaf8zaf80cP41fvs0e/w1fvw0efw0dv00c/00cP4zbf4za/8zav80dv0zbP4zaf83lvc3lPgzaf81gvs0df02kfg2kvg2i/k0cP41f/s2ifk1fPw1g/s1hfo2iPo0efw1hvo2j/g0c/00cv4za/8zav81ffw0dP01e/wzbf41gfs2jPk2kPg1fvs0d/00cf40b/42jfk2ivk2h/o1hPo0evw0eP02jvk0dv03lvczbv43lPi6h+BDAAAAo3RSTlMAABQAAAcDAQAaCRsEGQsWEgAVDREGAgAXDA4Q9Qrz8hMAAAWpAAAATIDO8c4RJlTeUW+7qKzNBPOFzg/Sz5mw0LfSXs4AbgA30WozAM9QfhxV/ppn9oV60N3O0IMdEPXeG87U4fiGGrU5/tYc8t4hagL9bK+OO1TYHOEj9qgIcSrS24OoVS8P7Q/8aC3bvM3Bwc9K9yGB8/Ly8/Py0uGV8RV8quAzBAAAAbJJREFUeF5Vz1Vz20AUhuFj2o1kyVJEkcxp0jbMWGRmZmZmZmZmhjWFGcuMPyqSPHYn7+x388zeHEhJSTWaNHkKTCuePiPdyGLROU1Xe1Ekc+CgBaGq3f14bLR1OcDQlfXZNpvNkuDK3PcbEMZowo8t+f/ZPiKy3e1DCu1eHN43cUCCB2cdnMqJCGlCQeHs8XEuGZ6XM/Lc6DGLxi1ZOqy0rLxizahqnYf8+Rf5FWtqDH3o+Rlu/9zbQcgrC8DrN9HWd3UtDbX1zb/bagydOQsAo4w5X77OnTe/a+Gu7j17l3USsgJhQD5pVaxpNb+2h+fb1/H8euLdqDHAiNymupbN1Nbmbc6aHdROL3muXmRAcXj2f/t+gD308TD79wh79Bg57jmhAGD6ZGPolHQ6LEm9ZzySl5ylMejJ5xtqL9Av2mi64xJ9+Qq56gCjjGtvu67f6P5081YnuX2HkLuyyYz7XuIQs/uMyUh88PDR4ydPnwX8/kDA/9KNTFZcqiq6BM7l4gR9qhZnTHOUYGVZqzGBUn0KmMlBykk5nZQ+/VkdOM5I463JgiID8TCSHclkxvjcB/q7gATqiPsDAAAAAElFTkSuQmCC"}}),t._v(" "),n("span",[t._v("填写信息/购买方式")])])]}},{key:"type",fn:function(e){return[n("div",{staticStyle:{display:"flex","align-items":"center"}},[[3,4].includes(t.form.version)?t._e():[n("img",{attrs:{src:"/images/zfbicon.png",alt:"",width:"40"}}),t._v("\n               \n            "),n("el-radio",{attrs:{label:0},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("支付宝")])],t._v(" "),n("img",{attrs:{src:"/images/wxicon.png",alt:"",width:"40"}}),t._v("\n             \n          "),n("el-radio",{attrs:{label:1},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("微信")])],2)]}}]),model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),t._v(" "),n("div",{staticClass:"pay__footer"},[n("div",{staticClass:"pay__footer-box"},[n("div",{staticClass:"pay__footer-name"},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAABTVBMVEU2kPg2kPg2kPg2kPg2kPg2kPg2kPg2kPg2kPg2kPg3l/f///81hPo1g/s1f/s1gfs3mPc1gfsza/81gfs0cP4za/81fvs1gvo1gfs2jPk2i/k1f/s2jfk2ifo0d/02iPo1gvs1e/w1hvo2ivk1gPs1fPw2jvk1ffw3lPg0ePw1fvs3lvc0c/2UwvyTvP2UxPuTuv2UwPw0cf6Uxfs0efw0cP5dmfw1hfo0dv0zbv41g/s0dP02kPg0evw2kfg3k/g1hPo2h/o0df00cv02kvhepfpepfldl/2Uw/w2j/kzbP6Uxvs3lfczbf5eofteofo3kvhepPo0cv5dlf01fvw3lfiUv/xdm/xdnPxdnftdnvszb/5TkPxeovo2hvqTvvyWuv2ewf01g/o0b/7///9dlv1en/szbP+Tu/2Uwfzh7P6Tvfxdkf1dk/1dlP3TiYzGAAAAGHRSTlMcBxUFAxIBABoK5gDmSQDmSQDo6Vnq51lcC3P7AAABB0lEQVR4XnXPVW/DMBSGYSd2UhxTmFNmZhozMzPv/1/uNFI0tdu+y0ev5GM0MRI0uqop8KHVRmunHdmI+8c9aHRM65SvVFngpVCjtdCOHMb9HhQQLa3WMbqyKUhuHkBsJvOSSr1fH2Wzr8nkSjqdz6+ziDz8HkH4D8WI+vj82n9cLpWOT07Pnra2L3cXlyhE9SpKoamHYxYHxzg3SqCJek+JFnT7oH9M2VBlkwfNzSd+8pqTg94X99w8JnJODlo9L7r5Bbz/Bl8CXdusuvkN6C2n3YFO9hnyupPbYdGaAp2eee57DvKKEm3q9uwcKI2GR/+nmPEOoZfBiPgYenCMjyCWYGpwmLDfjRRESpQ7YWcAAAAASUVORK5CYII="}}),t._v(" "),n("span",[t._v("\n          Avue商业授权系列——"+t._s(t.form.name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"pay__footer-money"},[n("span",[t._v("支付金额 : ")]),t._v(" "),n("span",[t._v("￥"+t._s(t.form.money))])]),t._v(" "),n("div",{staticClass:"pay__footer-menu",on:{click:t.handleSubmit}},[t._v("\n        确认订单\n      ")])])]),t._v(" "),n("el-dialog",{staticClass:"pay__dialog",attrs:{title:"发票信息",top:"40px","close-on-click-modal":!1,visible:t.fpbox,width:"400px"},on:{"update:visible":function(e){t.fpbox=e}}},[n("avue-form",{attrs:{option:t.fpoption},on:{submit:t.handleFpSubmit},model:{value:t.fpform,callback:function(e){t.fpform=e},expression:"fpform"}})],1),t._v(" "),n("el-dialog",{staticClass:"pay__dialog",attrs:{title:"订单信息",top:"40px","close-on-click-modal":!1,visible:t.box,width:"400px"},on:{"update:visible":function(e){t.box=e}}},[n("div",{staticClass:"header"},[n("div",{staticClass:"tip"},[n("img",{attrs:{src:t.imgsrc,width:"60",alt:""}}),t._v(" "),n("span",{staticClass:"text",class:t.className},[t._v("\n          请使用"+t._s(t.text)+"扫一扫"),n("br"),t._v("\n          扫描二维码完成支付"),n("br")])]),t._v(" "),n("p",{directives:[{name:"loading",rawName:"v-loading",value:!t.code,expression:"!code"}],staticClass:"money"},[t._v("￥"+t._s(t.form.money))]),t._v(" "),n("img",{staticClass:"code",attrs:{src:t.code,alt:""}}),t._v(" "),n("span",{staticClass:"text",class:t.className},[t._v("\n        请在5分钟内扫码付款\n      ")]),t._v(" "),n("p",{staticClass:"datetime",class:t.className},t._l(t.datetimeList,(function(e,r){return n("span",{key:r},[t._v("\n          "+t._s(e)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"body"},[n("p",[t._v("产品名称: "+t._s(t.form.name))]),t._v(" "),n("p",[t._v("订单单号: "+t._s(t.form.orderid))]),t._v(" "),n("p",[t._v("下单时间: "+t._s(t.form.datetime))]),t._v(" "),n("p",[t._v("支付方式: "+t._s(t.text))])])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);