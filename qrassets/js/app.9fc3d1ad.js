(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},s={app:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"25f2":function(e,t,i){"use strict";var a=i("e887"),s=i.n(a);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("8bbf"),s=i.n(a),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Home")],1)},r=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},["0"!=e.setting.page||e.admin.logined?e._e():i("div",{staticClass:"container-fluid h-100"},[i("div",{staticClass:"h-100 d-flex justify-content-center align-items-center flex-column"},[i("h3",{staticClass:"text-center goldText"},[e._v("18LUCK")]),i("h3",{staticClass:"mb-5 text-center goldText"},[e._v("PATRTY")]),i("h5",{staticClass:"mb-5 text-center goldText"},[e._v("領獎登錄")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.adminForm.name,expression:"adminForm.name"}],attrs:{placeholder:"請輸入密碼"},domProps:{value:e.adminForm.name},on:{input:function(t){t.target.composing||e.$set(e.adminForm,"name",t.target.value)}}}),i("div",{staticClass:"goldButton m-1 px-3",on:{click:e.signin}},[e._v("登入")])])])]),"0"!==e.setting.page&&e.admin.logined?i("div",{staticClass:"container-fluid"},[i("el-menu",{staticClass:"menu",attrs:{"default-active":e.setting.page,mode:"horizontal","background-color":"#333","text-color":"#fff","active-text-color":"#C7B071"},on:{select:e.handleSelect}},[i("el-menu-item",{attrs:{index:"2",width:"25%"}},[e._v("領獎登錄")]),i("el-menu-item",{attrs:{index:"4",width:"25%"}},[e._v("獎項紀錄")])],1),"1"==e.setting.page|"2"==e.setting.page?i("div",{staticClass:"capturer d-flex justify-content-between align-items-stretch flex-row"},[i("div",{staticClass:"QRCODE"},[i("qrcode-reader",{attrs:{camera:e.setting.cameraSettings,track:!1,paused:e.setting.paused},on:{decode:e.onDecode}})],1),i("div",{staticClass:"QRCODEResult d-flex align-items-center flex-column pt-4"},[i("h3",{staticClass:"text-danger"},[e._v(e._s(e.prizeTitle))]),i("p",[e._v(e._s(e.member.gid)+" "+e._s(e.member.name))]),i("p",{staticClass:"text-warning"},[e._v(e._s(e.member.ex))]),e.member.gid&&e.prizeTitle?i("div",{staticClass:"sendButton",on:{click:e.addPrize}},[i("i",{staticClass:"fas fa-thumbs-up mx-2"}),e._v("確得獎者資料")]):e._e(),e.member.logined?i("div",{staticClass:"reCapture",on:{click:e.unPauseCamera}},[i("i",{staticClass:"fas fa-sync-alt mx-2"}),e._v("已領獎")]):e._e()])]):e._e(),"2"==e.setting.page?i("div",{staticClass:"prizeWarp"},[i("div",{staticClass:"report px-3 py-0"},[i("div",[i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="6獎"}}},[e._v("6獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="5獎"}}},[e._v("5獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="4獎"}}},[e._v("4獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="3獎"}}},[e._v("3獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="2獎"}}},[e._v("2獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="1獎"}}},[e._v("1獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="加碼獎"}}},[e._v("加碼獎")]),i("div",{staticClass:"goldButton prizeBtn",on:{click:function(t){e.prizeTitle="新生買回"}}},[e._v("新生買回")])]),i("div",[i("span",{staticClass:"text-white"},[e._v("備註: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.plusPrize,expression:"plusPrize"}],domProps:{value:e.plusPrize},on:{input:function(t){t.target.composing||(e.plusPrize=t.target.value)}}})])])]):e._e(),"2"==e.setting.page?i("div",{staticClass:"prizeList"},[i("div",{staticClass:"report"},e._l(e.firestorePrize,(function(t){return i("div",{staticClass:"reportiItem"},[i("div",{staticClass:"row no-gutters"},[e._m(0,!0),i("div",{staticClass:"col-11"},[i("p",[i("span",{staticClass:"text-white"},[e._v(e._s(t.prizeTitle)+" "+e._s(t.plusPrize))]),i("span",{staticClass:"goldText"},[e._v(e._s(t.member.name)+" ")]),i("span",{staticClass:"grayText"},[e._v(e._s(t.member.gid)+" ")])]),i("p",[i("span",[e._v(e._s(t.member.ex)+" ")]),i("span",{staticClass:"grayText"},[e._v(e._s(t.datetime))])])])])])})),0)]):e._e(),"4"==e.setting.page?i("div",{staticClass:"reportTotalData p-2"},[i("div",{staticClass:"w-100 p-2 text-center"},[i("span",{staticClass:"grayText"},[e._v("已領獎人數")]),i("span",{staticClass:"goldText mr-2"},[e._v(e._s(e.firestorePrize.length))])])]):e._e(),"4"==e.setting.page?i("div",{staticClass:"reportRecord"},[i("div",{staticClass:"report p-3"},e._l(e.firestorePrize,(function(t){return i("div",{staticClass:"reportiItem"},[i("div",{staticClass:"row no-gutters"},[e._m(1,!0),i("div",{staticClass:"col-11"},[i("p",[i("span",{staticClass:"text-white"},[e._v(e._s(t.prizeTitle)+" "+e._s(t.plusPrize))]),i("span",{staticClass:"goldText"},[e._v(e._s(t.member.name)+" ")]),i("span",{staticClass:"grayText"},[e._v(e._s(t.member.gid)+" ")])]),i("p",[i("span",[e._v(e._s(t.member.ex)+" ")]),i("span",{staticClass:"grayText"},[e._v(e._s(t.datetime))]),i("span",{staticClass:"float-right",on:{click:function(i){return e.deletePrize(t.id)}}},[e._v("刪除")])])])])])})),0)]):e._e()],1):e._e()])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-1"},[i("span",{staticClass:"grayText"},[i("i",{staticClass:"fas fa-trophy mt-3 mx-2"})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-1"},[i("span",{staticClass:"grayText"},[i("i",{staticClass:"fas fa-trophy mt-3 mx-2"})])])}],l=(i("7f7f"),{data:function(){return{firestorePrize:{},adminForm:{name:""},adminPassword:"18luck",admin:{device:"",name:"",logined:!1},member:{gid:"",name:"",ex:"",logined:!1},prizeTitle:"",plusPrize:"",fireData_Prize:{member:{},prizeTitle:"",plusPrize:"",time:"",datetime:"",admin:{}},setting:{page:"0",capture:"",paused:!1,cameraSettings:{audio:!1,video:{facingMode:{ideal:"environment"}}}}}},firestore:function(){return{firestorePrize:z.collection("prize").orderBy("time","desc")}},methods:{signin:function(){this.adminForm.name===this.adminPassword&&(window.localStorage.setItem("admin",this.adminForm.name),window.localStorage.setItem("loginTime",this.getNowTime()),this.admin.name=this.adminForm.name,this.admin.time=this.getNowTime(),this.checkAdminLogined())},checkAdminLogined:function(){window.localStorage.admin===this.adminPassword?(this.admin.name=window.localStorage.admin,this.admin.time=this.getNowTime(),this.admin.logined=!0,this.setting.page="2"):(this.logined=!1,this.setting.page="0",window.localStorage.removeItem("admin"),window.localStorage.removeItem("loginTime")),window.localStorage.setItem("loginTime",this.getNowTime())},handleSelect:function(e,t){this.setting.page=e,this.setting.capture={},this.unPauseCamera()},onDecode:function(e){var t=this;try{if(this.setting.capture=JSON.parse(e),this.setting.capture.hasOwnProperty("gid")){this.member.gid=this.setting.capture.gid,this.member.name=this.setting.capture.name,this.member.ex=this.setting.capture.ex;var i=this.firestorePrize.filter((function(e){return e.member.gid===t.member.gid}));this.check2QRcode(),i.length>0?this.member.logined=!0:this.member.logined=!1}else console.log("未知的QRcode")}catch(a){this.errorQRcode="未知的QRcode"}},getNowTime:function(){var e=new Date,t=e.getMonth()+1;t<10&&(t="0"+t);var i=e.getDate();i<10&&(i="0"+i);var a=e.getHours();a<10&&(a="0"+a);var s=e.getMinutes();s<10&&(s="0"+s);var n=e.getSeconds();return n<10&&(n="0"+n),e.getFullYear()+"-"+t+"-"+i+" "+a+":"+s+":"+n},check2QRcode:function(){console.log("check2QRcode"),console.log(this.member.gid),this.member.gid&&this.pauseCamera()},pauseCamera:function(){this.setting.paused=!0},unPauseCamera:function(){this.fireData_Prize.member=null,this.setting.capture=null,this.setting.paused=!1,this.member={gid:"",name:"",ex:"",logined:!1},this.prizeTitle="",this.plusPrize=""},addPrize:function(){var e=this;this.fireData_Prize.member=this.member,this.fireData_Prize.prizeTitle=this.prizeTitle,this.fireData_Prize.plusPrize=this.plusPrize,this.fireData_Prize.time=Date.now(),this.fireData_Prize.datetime=this.getNowTime(),this.fireData_Prize.admin=this.admin,z.collection("prize").add(this.fireData_Prize).then((function(){e.unPauseCamera()}))},deletePrize:function(e){z.collection("prize").doc(e).delete()}},mounted:function(){if(this.admin.device=new MobileDetect(window.navigator.userAgent).ua,window.localStorage.loginTime){var e=new Date(window.localStorage.loginTime),t=new Date(this.getNowTime()),i=t.getTime()-e.getTime();i>864e5&&(window.localStorage.removeItem("admin"),window.localStorage.removeItem("loginTime"))}this.checkAdminLogined()}}),d=l,m=(i("25f2"),i("2877")),u=Object(m["a"])(d,o,c,!1,null,"abdd32c4",null),p=u.exports,g={name:"app",components:{Home:p}},f=g,v=(i("5c0b"),Object(m["a"])(f,n,r,!1,null,null,null)),h=v.exports,_=i("9a3e"),C=i("0ff2"),b=i("59ca"),w=i.n(b);i("ea7b"),i("e71f");i.d(t,"db",(function(){return z})),s.a.use(_["default"]),s.a.use(C["a"]),w.a.initializeApp({apiKey:"AIzaSyB8wsv5ZBbqNb_Rt5Fq_6-ICcMhM0lGcfw",authDomain:"party-39350.firebaseapp.com",databaseURL:"https://party-39350.firebaseio.com",projectId:"party-39350",storageBucket:"party-39350.appspot.com",messagingSenderId:"82383501173",appId:"1:82383501173:web:78a0141942a6449a79453c",measurementId:"G-WPCQ61C6K1"}),s.a.config.productionTip=!1;var z=w.a.firestore();s.a.config.ignoredElements=["qrcode-reader","QrcodeReader"],new s.a({render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var a=i("e332"),s=i.n(a);s.a},"8bbf":function(e,t){e.exports=Vue},e332:function(e,t,i){},e887:function(e,t,i){}});
//# sourceMappingURL=app.9fc3d1ad.js.map