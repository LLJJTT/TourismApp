webpackJsonp([1],{"74wO":function(t,e){},BE4n:function(t,e){},"K4K/":function(t,e){},MVEF:function(t,e,i){t.exports=i.p+"static/img/kongmingdeng.b41a0ed.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("mtWM"),n=i.n(a),o={data:function(){return{recommendAjax:"http://112.74.63.14/interface/recommend.php",input5:"",moveImg:[{src:"static/img/shanshui.jpeg"},{src:"static/img/fengye.jpeg"},{src:"static/img/hupo.jpeg"}],swiperdata:[]}},methods:{goDetail:function(t){this.$router.push({name:"details",params:{detailData:t,collectionType:"rec"}})},lookMore:function(){this.$router.push({path:"/index/recommendlist"})},getRecommendData:function(){var t=this;n()({type:"GET",url:this.recommendAjax}).then(function(e){for(var i=0;i<4;i++)t.swiperdata.push(e.data[i])})}},created:function(){this.getRecommendData()}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"homepage"}},[i("div",{attrs:{id:"moveimg"}},[i("el-carousel",{attrs:{interval:2e3,type:"card",height:"140px","indicator-position":"none"}},t._l(t.moveImg,function(t){return i("el-carousel-item",{key:t.id},[i("li",{staticClass:"lii"},[i("img",{attrs:{src:t.src,alt:""}})])])}))],1),t._v(" "),i("div",{attrs:{id:"search"}},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入关键字搜索"},model:{value:t.input5,callback:function(e){t.input5=e},expression:"input5"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),t._v(" "),i("div",{attrs:{id:"recommend"}},[i("ul",{staticClass:"top_ul"},[i("li",[t._v("下一站推荐")]),t._v(" "),i("li",[t._v("满足丰富多样的出行方式")]),t._v(" "),i("li",{on:{click:t.lookMore}},[t._v("查看更多"),i("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])]),t._v(" "),i("div",{attrs:{id:"swiper"}},[i("el-carousel",{attrs:{interval:2e3,arrow:"hover",height:"200px","indicator-position":"none"}},t._l(t.swiperdata,function(e){return i("el-carousel-item",{key:e.id},[i("li",{attrs:{id:"swiper_li"}},[i("p",{attrs:{id:"scenery_name"}},[t._v(t._s(e.name))]),t._v(" "),i("img",{attrs:{src:e.src,alt:""},on:{click:function(i){t.goDetail(e)}}})])])}))],1)])},staticRenderFns:[]};var c=i("VU/8")(o,r,!1,function(t){i("K4K/")},"data-v-c2e5265a",null).exports,l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navbar"}},t._l(t.tabs,function(e){return i("el-col",{key:e.key,attrs:{span:6}},[i("router-link",{class:e.key==t.tab?"active":"",attrs:{to:e.path},nativeOn:{click:function(i){t.handleClick(e.key)}}},[i("div",{staticClass:"wrapper"},[i("li",[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("li",[t._v(t._s(e.name))])])])],1)}))},staticRenderFns:[]};var d=i("VU/8")({data:function(){return{tabs:[{name:"首页",path:"homepage",key:1,src:"static/img/index1.png"},{name:"目的地",path:"destination",key:2,src:"static/img/destnation0.png"},{name:"攻略",path:"find",key:3,src:"static/img/find0.png"},{name:"我的",path:"my",key:4,src:"static/img/me0.png"}],tab:""}},methods:{handleClick:function(t){this.tab=t,1==this.tab?(this.tabs[0].src="static/img/index1.png",this.tabs[1].src="static/img/destnation0.png",this.tabs[2].src="static/img/find0.png",this.tabs[3].src="static/img/me0.png"):2==this.tab?(this.tabs[0].src="static/img/index0.png",this.tabs[1].src="static/img/destnation1.png",this.tabs[2].src="static/img/find0.png",this.tabs[3].src="static/img/me0.png"):3==this.tab?(this.tabs[0].src="static/img/index0.png",this.tabs[1].src="static/img/destnation0.png",this.tabs[2].src="static/img/find1.png",this.tabs[3].src="static/img/me0.png"):4==this.tab&&(this.tabs[0].src="static/img/index0.png",this.tabs[1].src="static/img/destnation0.png",this.tabs[2].src="static/img/find0.png",this.tabs[3].src="static/img/me1.png")}},created:function(){},mounted:function(){}},l,!1,function(t){i("74wO")},"data-v-6607ab49",null).exports,u=i("mvHQ"),p=i.n(u),h={data:function(){return{phoneNumber:"",passWord:"",img:{background:"url("+i("uSSU")+")"},loginUrl:"http://112.74.63.14/interface/login.php"}},methods:{Login:function(){var t=this;if(""==this.phoneNumber)this.$notify({message:"请输入手机号",type:"error",duration:1e3,offset:200});else if(1!=/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber))this.$notify({message:"请输入正确手机号",type:"error",duration:1e3,offset:200});else if(""==this.passWord)this.$notify({message:"请输入密码",type:"error",duration:1e3,offset:200});else if(this.passWord.length<6||this.passWord.length>11)this.$notify({message:"密码长度6-11位",type:"error",center:!0,duration:1e3,offset:200});else{var e=new FormData;e.append("username",this.phoneNumber),e.append("pwd",this.passWord),n()({method:"POST",url:this.loginUrl,data:e,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){console.log(e.data);var i=t;if(2==e.data.status)t.$notify({message:e.data.msg,type:"warning",center:!0,duration:1e3,offset:200});else if(1==e.data.status){sessionStorage.setItem("username",t.phoneNumber);var s=p()(e);sessionStorage.loginUser=s,t.$notify({message:e.data.msg,type:"success",center:!0,duration:1e3,offset:200,onClose:function(){i.$router.push({path:"/index/homepage"})}})}else t.$notify({message:e.data.msg,type:"error",center:!0,duration:1e3,offset:200})}).catch(function(e){t.$notify({message:"未知错误",type:"error",duration:2e3,offset:200})})}},goRegister:function(){this.$router.push({path:"/register"})},goForget:function(){this.$notify({message:"请联系管理员Tel:187-4570-8406",type:"success",duration:1500,offset:200})},success:function(){this.$router.push({path:"/index/homepage"})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.img,attrs:{id:"login"}},[i("p",{staticClass:"font"},[t._v("Welcome")]),t._v(" "),i("p",{staticClass:"font"},[t._v("Welcome to the green world where you can find hopeful and vitality")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"phone inp",attrs:{placeholder:"请输入11位手机号"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],staticClass:"pass inp",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}}),t._v(" "),i("el-button",{staticClass:"inp",attrs:{type:"primary"},nativeOn:{click:function(e){t.Login(e)}}},[t._v("Login")]),t._v(" "),i("el-row",[i("el-col",{attrs:{span:8},nativeOn:{click:function(e){t.goRegister(e)}}},[t._v("注册用户")]),t._v(" "),i("el-col",{attrs:{span:8}},[t._v("|")]),t._v(" "),i("el-col",{attrs:{span:8},nativeOn:{click:function(e){t.goForget(e)}}},[t._v("忘记密码")])],1)],1)},staticRenderFns:[]};var m=i("VU/8")(h,v,!1,function(t){i("OYyU")},"data-v-df1a9612",null).exports,f="",g={phoneCode:f,data:function(){return{img:{background:"url("+i("MVEF")+")"},phoneNumber:"",code:""}},methods:{goBack:function(){this.$router.push({path:"/login"})},findPass:function(){""==this.phoneNumber?this.$message({message:"请输入手机号",type:"error",center:!0}):1!=/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber)?this.$message({message:"请输入正确手机号",type:"error",center:!0}):""==this.code?this.$message({message:"请输入验证码",type:"error",center:!0}):this.code!=f?this.$message({message:"验证码输入错误",type:"error",center:!0}):this.code==f&&(this.$message({message:"请重新注册修改密码",type:"success",center:!0,duration:5e3}),this.$router.push({path:"/register"}))},getCodeBg:function(){var t=document.querySelector("#getcode");1==/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber)?(t.style.background="#261b88",t.removeAttribute("disabled")):(t.style.background="",t.setAttribute("disabled","disabled"))},getCode:function(){var t=document.querySelector("#getcode");t.setAttribute("disabled","disabled");var e=15,i=setInterval(function(){if(e--,t.innerText=e+"s重发",10==e){t.removeAttribute("disabled"),e=15,clearInterval(i),t.innerText="获取验证码",f="";for(var s=0;s<5;s++){var a=Math.floor(10*Math.random());f+=a}alert(f)}},1e3)}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.img,attrs:{id:"forget"}},[i("div",{attrs:{id:"head"}},[i("i",{staticClass:"el-icon-arrow-left",on:{click:t.goBack}}),t._v("\n\t\t找回密码\n\t")]),t._v(" "),i("ul",[i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"inp",attrs:{id:"phone",type:"text",placeholder:"注册的手机号"},domProps:{value:t.phoneNumber},on:{keyup:t.getCodeBg,input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"inp",attrs:{id:"code",type:"text",placeholder:"点击右侧获取验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),i("button",{staticClass:"inp",attrs:{disabled:"",id:"getcode"},on:{click:t.getCode}},[t._v("获取验证码")])]),t._v(" "),i("li",[i("button",{staticClass:"inp",attrs:{id:"next"},on:{click:t.findPass}},[t._v("找回")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"foot"}},[e("p",[this._v("忘记手机号?   请联系开发者 或"),e("a",{attrs:{href:"tel:18745708406"}},[this._v("联系客服")])])])}]};var y=i("VU/8")(g,_,!1,function(t){i("UY8P")},"data-v-1301eb40",null).exports,b={data:function(){return{img:{background:"url("+i("MVEF")+")"},phoneNumber:"",passWord:"",sureCode:"",imgCode:"",registerUrl:"http://112.74.63.14/interface/register.php"}},methods:{goBack:function(){this.$router.push({path:"/login"})},regSuccess:function(){var t=this;if(""==this.phoneNumber)this.$notify({message:"请输入手机号",type:"error",duration:800,offset:200});else if(1!=/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber))this.$notify({message:"请输入正确手机号",type:"error",duration:800,offset:200});else if(""==this.passWord)this.$notify({message:"请输入密码",type:"error",duration:800,offset:200});else if(this.passWord.length<6||this.passWord.length>11)this.$notify({message:"密码长度在6-11位",type:"error",duration:800,offset:200});else if(""==this.sureCode)this.$notify({message:"请输入验证码",type:"error",duration:800,offset:200});else if(this.sureCode!=this.imgCode)this.$notify({message:"验证码输入错误",type:"error",duration:800,offset:200});else if(this.sureCode==this.imgCode){console.log(this.phoneNumber),console.log(this.passWord);var e=new FormData;e.append("username",this.phoneNumber),e.append("pwd",this.passWord),n()({method:"POST",url:this.registerUrl,data:e,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){if(console.log(e.data),0==e.data.status)t.$notify({message:e.data.msg,type:"error",duration:2e3,offset:200});else if(1==e.data.status){var i=t;t.$notify({message:e.data.msg,type:"success",duration:3e3,offset:200,onClose:function(){i.$router.push({path:"/login"})}})}else t.$notify({message:e.data.msg,type:"success",duration:2e3,offset:200})}).catch(function(e){t.$notify({message:"未知错误",type:"error",duration:2e3,offset:200})})}},createCode:function(){this.imgCode="";for(var t=new Array(0,1,2,3,4,5,6,7,8,9),e=0;e<5;e++){var i=Math.floor(10*Math.random());this.imgCode+=t[i]}},refresh:function(){1==/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNmuber)&&this.passWord.length>=6&&this.passWord.length<=11&&(this.createCode(),console.log(this.imgCode))}},created:function(){this.createCode()}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.img,attrs:{id:"register"}},[i("div",{attrs:{id:"head"}},[i("i",{staticClass:"el-icon-arrow-left",on:{click:t.goBack}}),t._v("\n\t\t注册\n\t")]),t._v(" "),i("div",{attrs:{id:"content"}},[i("div",{staticClass:"wrapper"},[i("el-row",[i("el-col",{staticClass:"title",attrs:{span:8}},[t._v("手机号")]),t._v(" "),i("el-col",{attrs:{span:16}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"inp phoneNmuber",attrs:{type:"number",placeholder:"请输入11位手机号"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})])],1)],1),t._v(" "),i("div",{staticClass:"wrapper"},[i("el-row",[i("el-col",{staticClass:"title",attrs:{span:8}},[t._v("密码")]),t._v(" "),i("el-col",{attrs:{span:16}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],staticClass:"inp passWord",attrs:{type:"password",placeholder:"密码限定6-11位"},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}})])],1)],1),t._v(" "),i("div",{staticClass:"wrapper"},[i("el-row",[i("el-col",{staticClass:"title",attrs:{span:8}},[t._v("验证码")]),t._v(" "),i("el-col",{attrs:{span:16}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sureCode,expression:"sureCode"}],staticClass:"inp sureCode",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.sureCode},on:{input:function(e){e.target.composing||(t.sureCode=e.target.value)}}})]),t._v(" "),i("el-col",{attrs:{span:12}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.imgCode,expression:"imgCode"}],staticClass:"inp code",attrs:{type:"text",readonly:"readonly"},domProps:{value:t.imgCode},on:{click:t.refresh,input:function(e){e.target.composing||(t.imgCode=e.target.value)}}})])],1)],1)],1)],1)]),t._v(" "),i("div",{attrs:{id:"complete"}},[i("el-button",{staticClass:"finish",on:{click:t.regSuccess}},[t._v("完成")])],1)])},staticRenderFns:[]};var x=i("VU/8")(b,C,!1,function(t){i("qidz")},"data-v-0da863e4",null).exports,w={name:"app",components:{HomePage:c,Navbar:d,Login:m,Forget:y,Register:x}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var k=i("VU/8")(w,$,!1,function(t){i("zJ3n")},null,null).exports,D=i("/ocq"),S={data:function(){return{heilongjiang:[],cityAjax:"http://112.74.63.14/interface/city.php"}},methods:{goCityList:function(t){this.$router.push({name:"cityscenerylist",params:{id:t}})}},created:function(){var t=this;n()({method:"GET",url:this.cityAjax}).then(function(e){t.heilongjiang=e.data})},mounted:function(){}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"destination"}},[i("div",{attrs:{id:"title"}},[t._v("\n    目的地\n  ")]),t._v(" "),i("div",{staticClass:"wrapper"},[i("el-row",t._l(t.heilongjiang,function(e){return i("el-col",{key:e.id,attrs:{span:8}},[i("div",{staticClass:"div_img",on:{click:function(i){t.goCityList(e.id)}}},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("p",{staticClass:"city"},[t._v(t._s(e.city_name))]),t._v(" "),i("p",{staticClass:"intro"},[t._v(t._s(e.info))])])}))],1)])},staticRenderFns:[]};var A=i("VU/8")(S,N,!1,function(t){i("lrvq")},"data-v-f6745b34",null).exports,U={data:function(){return{ajaxUrl:"http://112.74.63.14/interface/strategy.php",findData:[]}},methods:{},created:function(){var t=this;n()({method:"GET",url:this.ajaxUrl}).then(function(e){t.findData=e.data})},mounted:function(){}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"find"}},[i("div",{attrs:{id:"title"}},[t._v("\n    全新攻略\n  ")]),t._v(" "),i("el-row",t._l(t.findData,function(e){return i("el-col",{key:e.id,attrs:{span:24}},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"div_img"},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("div",[i("p",{staticClass:"city"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"intro"},[t._v(t._s(e.introduce))])])])])}))],1)},staticRenderFns:[]};var F=i("VU/8")(U,T,!1,function(t){i("svXO")},"data-v-78c18015",null).exports,V={data:function(){return{centerDialogVisible:!1,collection:"static/img/collection.png",aboutus:"static/img/aboutus.png",head_imgSrc:"static/img/head_img_unlogin.png",username:"您还未登录",login:"去登录",userStatus:""}},methods:{goLogin:function(){var t=this;""!=this.userStatus&&null!=this.userStatus&&void 0!=this.userStatus?this.$notify({message:"退出成功",type:"success",duration:3e3,offset:200,onClose:function(){sessionStorage.removeItem("username"),sessionStorage.removeItem("loginUser"),t.username="您还未登录",t.login="去登录",t.centerDialogVisible=!1,t.head_imgSrc="static/img/head_img_unlogin.png"}}):t.$router.push({path:"/login"})},aboutUs:function(){this.$router.push({path:"/index/aboutus"})},goCollection:function(){this.$router.push({path:"/index/collection"})}},created:function(){this.userStatus=sessionStorage.getItem("username"),""!=this.userStatus&&null!=this.userStatus&&void 0!=this.userStatus&&(this.head_imgSrc="static/img/head_img_login.png",this.username=this.userStatus,this.login="退出")},mounted:function(){}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"my"}},[i("div",{attrs:{id:"title"}},[t._v("\n    我的\n  ")]),t._v(" "),i("div",{attrs:{id:"head_img"}},[i("ul",[i("li",[i("img",{attrs:{src:t.head_imgSrc,alt:""}})]),t._v(" "),i("li",[t._v(t._s(t.username))])])]),t._v(" "),i("div",{attrs:{id:"select"}},[i("ul",[i("li",{on:{click:t.goCollection}},[i("img",{attrs:{src:t.collection,alt:""}}),t._v("  "),i("span",[t._v("我的收藏")])]),t._v(" "),i("li",{on:{click:t.aboutUs}},[i("img",{attrs:{src:t.aboutus,alt:""}}),t._v("  "),i("span",[t._v("关于我")])])])]),t._v(" "),i("button",{attrs:{id:"logout"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v(t._s(t.login))]),t._v(" "),i("el-dialog",{attrs:{visible:t.centerDialogVisible,width:"80%",top:"15rem",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("span",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[i("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.goLogin}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var W=i("VU/8")(V,E,!1,function(t){i("ypnN")},"data-v-174c1957",null).exports,P={data:function(){return{}},components:{"v-nav":d}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"index"}},[e("v-nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var R=i("VU/8")(P,O,!1,function(t){i("o7gc")},"data-v-119cce92",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"aboutus"}},[e("div",{attrs:{id:"title"}},[e("i",{staticClass:"el-icon-back prev",on:{click:this.prev}}),this._v("\n\t\t关于我\n\t")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"introduce"}},[e("p",[this._v("\n\t\t\t本人学识渊博，经验丰富，代码风骚，效率恐怖"),e("br"),this._v("\n\t\t\tc c++ java php无所不通 熟练掌握各种框架"),e("br"),this._v("\n\t\t\t深山苦练20年，一天只睡三十分钟，电话通知出bug后秒登vpn"),e("br"),this._v("\n\t\t\t千里之外定位问题，瞬间修复"),e("br"),this._v("\n\t\t\t本人身强体壮，可连续编程100小时不休息，讨论方案24小时不喝水"),e("br"),this._v("\n\t\t\t上至带项目，出方案，下至盗账号，威胁pm，学校不支持编程已辍学，家人不支持编程已断绝关系，老婆不支持编程已离婚，小孩不支持编程已送孤儿院"),e("br"),this._v("备用电源光钎百兆永不断网，门口已经埋雷无人干扰"),e("br"),this._v("现本人求一份IT公司端茶送水工作，谢谢"),e("br")]),this._v(" "),e("p",[this._v("2018年1月24日")])])}]};var B=i("VU/8")({data:function(){return{}},methods:{prev:function(){this.$router.push({path:"/index/my"})}}},j,!1,function(t){i("PqAC")},"data-v-41fac832",null).exports,M={data:function(){return{listData:[],colUrl:"http://112.74.63.14/interface/collectionlist.php",list_hidden:!1,wrapper_hidden:!0}},methods:{prev:function(){this.$router.push({path:"/index/my"})},goDetail:function(t){this.$router.push({name:"details",params:{detailData:t,collectionType:"des"}})},getCollectionData:function(){var t=this,e=JSON.parse(sessionStorage.loginUser).data.user_id;console.log(e);var i=new FormData;i.append("user_id",e),""!=e&&null!=e&void 0!=e?n()({method:"POST",url:this.colUrl,data:i,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){console.log(e.data),0==e.data.status?t.list_hidden=!0:e.data.length>=1&&(t.listData=e.data,t.listData.map(function(t){t.level=Number(t.level)}))}).catch(function(t){console.log(t)}):this.list_hidden=!0}},created:function(){var t=sessionStorage.getItem("username");""==t||null==t||void 0==t?this.list_hidden=!0:this.getCollectionData()},mounted:function(){}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"collection"}},[i("div",{attrs:{id:"title"}},[i("i",{staticClass:"el-icon-back prev",on:{click:t.prev}}),t._v("\n\t\t我得收藏\n\t")]),t._v(" "),t.list_hidden?i("div",{attrs:{id:"list"}},[t._m(0)]):t._e(),t._v(" "),t._l(t.listData,function(e){return t.wrapper_hidden?i("div",{staticClass:"wrapper",on:{click:function(i){t.goDetail(e)}}},[i("div",{staticClass:"info"},[i("div",{staticClass:"list_left"},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("div",{staticClass:"list_right"},[i("ul",[i("li",[i("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.level,callback:function(i){t.$set(e,"level",i)},expression:"item.level"}})],1),t._v(" "),i("li",[i("span",{staticClass:"type"},[t._v(t._s(e.type))]),i("span",{staticClass:"address"},[i("i",[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])]):t._e()})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"empty"}},[e("p",[this._v("好看的不能让TA溜走")]),this._v(" "),e("p",[this._v("点击"),e("i",{staticClass:"el-icon-star-off"}),this._v("收起来")]),this._v(" "),e("p",[this._v("登录后喜欢会同步保存，永远不会消失")])])}]};var L=i("VU/8")(M,I,!1,function(t){i("uHH+")},"data-v-027b68dc",null).exports,q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"personalinfo","element-loading-text":"放心肯定加载不出来","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("div",{attrs:{id:"title"}},[i("i",{staticClass:"el-icon-back prev",on:{click:t.prev}}),t._v("\n\t\t\t个人资料\n\t\t")]),t._v(" "),i("div",{attrs:{id:"intro"}},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("个人信息")]),t._v(" "),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._v(" "),i("div",{staticClass:"text item"},[i("div",{staticClass:"op"},[i("span",[t._v("性别")]),t._v(" "),i("el-select",{attrs:{size:"small"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.gendel,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"op"},[i("span",[t._v("年龄")]),t._v(" "),i("el-select",{attrs:{size:"small"},model:{value:t.valueAge,callback:function(e){t.valueAge=e},expression:"valueAge"}},t._l(t.Age,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}))],1)])])],1)])},staticRenderFns:[]};var H=i("VU/8")({data:function(){return{loading:!1,value:"男",gendel:[{value:"男",label:"男"},{value:"女",label:"女"}],valueAge:25,Age:[]}},methods:{prev:function(){this.$router.push({path:"/index/my"})},getAge:function(){this.Age=[];for(var t=12;t<=70;t++)this.Age.push(t)}},mounted:function(){},created:function(){this.getAge()}},q,!1,function(t){i("BE4n")},"data-v-6e6ef00b",null).exports,z={data:function(){return{centerDialogVisible:!1,detailData:[],collectStatus:!1,user_id:"",scenery_id:"",collectUrl:"http://112.74.63.14/interface/collection.php",cancelUrl:"http://112.74.63.14/interface/cancelcollection.php",ifcollectUrl:"http://112.74.63.14/interface/ifcollect.php",collectionType:"",col:"el-icon-star-off collection"}},methods:{startNum:function(){for(var t="",e=0;e<this.detailData.level;e++)t+=e;var i=t.length;this.detailData.level=1==i?"A":2==i?"AA":3==i?"AAA":4==i?"AAAA":"AAAAA"},goLogin:function(){this.$router.push({path:"/login"})},goBack:function(){history.back()},collect:function(){var t,e=this,i=sessionStorage.getItem("username");""!=i&&null!=i&void 0!=i?"des"==this.collectionType?0==this.collectStatus?((t=new FormData).append("user_id",this.user_id),t.append("scenery_id",this.scenery_id),n()({method:"POST",url:this.collectUrl,data:t,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(t){1==t.data.status?(e.col="el-icon-star-on collection",e.collectStatus=!0,e.$notify({type:"success",message:"收藏成功",duration:800,offset:100})):0==t.data.status&&(e.col="el-icon-star-off collection",e.collectStatus=!1,e.$notify({type:"success",message:"收藏失败",duration:800,offset:100}))}).catch(function(t){e.$notify({type:"error",message:"收藏失败",duration:800,offset:100})})):((t=new FormData).append("user_id",this.user_id),t.append("scenery_id",this.scenery_id),n()({method:"POST",url:this.cancelUrl,data:t,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(t){1==t.data.status?(e.col="el-icon-star-off collection",e.collectStatus=!1,e.$notify({type:"warning",message:"你已经取消收藏",duration:800,offset:100})):0==t.data.status&&(e.col="el-icon-star-on collection",e.collectStatus=!0,e.$notify({type:"error",message:"取消收藏失败",duration:800,offset:100}))}).catch(function(t){e.$notify({type:"error",message:"取消收藏失败",duration:800,offset:100})})):"rec"==this.collectionType&&this.$toast({message:"不可收藏",duration:1e3,position:"middle",type:"success"}):this.$toast({message:"你还没有登录",duration:1e3,position:"middle",type:"success"})},ifCollection:function(){var t=this;if("des"==this.collectionType){var e=JSON.parse(sessionStorage.loginUser);this.user_id=e.data.user_id;var i=new FormData;i.append("user_id",this.user_id),i.append("scenery_id",this.scenery_id),n()({method:"POST",url:this.ifcollectUrl,data:i,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){1==e.data.length?(t.col="el-icon-star-on collection",t.collectStatus=!0):0==e.data.status&&(t.col="el-icon-star-off collection",t.collectStatus=!1)}).catch(function(t){console.log(t)})}}},created:function(){this.detailData=this.$route.params.detailData,this.collectionType=this.$route.params.collectionType,this.scenery_id=this.detailData.scenery_id,this.startNum();var t=sessionStorage.getItem("username");""!=t&&null!=t&void 0!=t&&this.ifCollection()}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"details"}},[i("div",{attrs:{id:"head"}},[i("span",{staticClass:"name"},[t._v(t._s(t.detailData.name))]),t._v(" "),i("i",{class:t.col,on:{click:t.collect}})]),t._v(" "),i("div",{attrs:{id:"swiper"}},[i("img",{attrs:{src:t.detailData.src,alt:""}})]),t._v(" "),i("div",{attrs:{id:"infomation"}},[i("el-card",{staticClass:"box-card"},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v("基本信息")])]),t._v(" "),i("div",{staticClass:"info"},[i("li",[i("i",[t._v("景区级别：")]),i("i",[t._v(t._s(t.detailData.level))])]),t._v(" "),i("li",[i("i",[t._v("景点类型：")]),t._v(t._s(t.detailData.type))]),t._v(" "),i("li",[i("i",[t._v("交通路线：")]),t._v(t._s(t.detailData.route))]),t._v(" "),i("li",[i("i",[t._v("景区电话：")]),t._v(t._s(t.detailData.telephone))]),t._v(" "),i("li",[i("i",[t._v("景区地址：")]),t._v(t._s(t.detailData.address))])])]),t._v(" "),i("el-card",{staticClass:"box-card"},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v("景点介绍")])]),t._v(" "),i("div",{staticClass:"intro_div"},[i("li",[t._v(t._s(t.detailData.introduce))])])])],1),t._v(" "),i("el-dialog",{attrs:{title:"立即去登录",visible:t.centerDialogVisible,width:"80%",top:"15rem",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.goLogin}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var J=i("VU/8")(z,K,!1,function(t){i("cFCO")},null,null).exports,X={data:function(){return{wrapperData:[],recommendlistAjax:"http://112.74.63.14/interface/recommend.php"}},methods:{goBack:function(){history.back()},goDetails:function(t){this.$router.push({name:"details",params:{detailData:t,collectionType:"rec"}})}},created:function(){var t=this;n()({type:"POST",url:this.recommendlistAjax}).then(function(e){t.wrapperData=e.data})}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"recommendlist"}},[i("div",{attrs:{id:"head"}},[i("i",{staticClass:"el-icon-back prev",on:{click:t.goBack}}),t._v(" "),i("span",{staticClass:"name"},[t._v("下一站推荐")])]),t._v(" "),t._l(t.wrapperData,function(e){return i("div",{staticClass:"wrapper"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-card",{attrs:{"body-style":{padding:"5px"}}},[i("img",{staticClass:"image",attrs:{src:e.src},on:{click:function(i){t.goDetails(e)}}}),t._v(" "),i("div",{staticStyle:{padding:"8px"}},[i("span",[t._v(t._s(e.name))])])])],1)],1)],1)})],2)},staticRenderFns:[]};var G=i("VU/8")(X,Y,!1,function(t){i("x9MK")},"data-v-438182d6",null).exports,Q={data:function(){return{cityAjax:"http://112.74.63.14/interface/city_list.php",id:"",listData:[]}},methods:{goBack:function(){history.back()},goDetail:function(t){console.log(t),this.$router.push({name:"details",params:{detailData:t,collectionType:"des"}})}},created:function(){var t=this;this.id=this.$route.params.id;var e=new FormData;e.append("city_id",this.id),n()({method:"POST",url:this.cityAjax,data:e,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){t.listData=e.data,t.listData.map(function(t){t.level=Number(t.level)})}).catch(function(t){console.log(t)})}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"cityscenerylist"}},[i("div",{attrs:{id:"head"}},[i("i",{staticClass:"el-icon-back prev",on:{click:t.goBack}}),t._v(" "),i("span",{staticClass:"city_name"},[t._v("当前城市名字")])]),t._v(" "),t._l(t.listData,function(e){return i("div",{staticClass:"wrapper",on:{click:function(i){t.goDetail(e)}}},[i("div",{staticClass:"scenery_name"},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"list_left"},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("div",{staticClass:"list_right"},[i("ul",[i("li",[i("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.level,callback:function(i){t.$set(e,"level",i)},expression:"item.level"}})],1),t._v(" "),i("li",[i("span",{staticClass:"type"},[t._v(t._s(e.type))]),i("span",{staticClass:"address"},[i("i",[t._v(t._s(e.address))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])])})],2)},staticRenderFns:[]};var tt=i("VU/8")(Q,Z,!1,function(t){i("X01C")},"data-v-eb96bb48",null).exports;s.default.use(D.a);var et=new D.a({base:"/biyesheji/",linkActiveClass:"active",linkExactActiveClass:"active",routes:[{path:"/",redirect:"/index"},{path:"/login",name:"login",component:m},{path:"/register",name:"register",component:x},{path:"/forget",name:"forget",component:y},{path:"/index",component:R,children:[{path:"/",redirect:"/index/homepage"},{path:"homepage",name:"homepage",component:c},{path:"destination",name:"destination",component:A},{path:"find",name:"find",component:F},{path:"my",name:"my",component:W},{path:"aboutus",name:"aboutus",component:B},{path:"collection",name:"collection",component:L},{path:"personalinfo",name:"personalinfo",component:H},{path:"details",name:"details",component:J},{path:"recommendlist",name:"recommendlist",component:G},{path:"cityscenerylist",name:"cityscenerylist",component:tt}]}]}),it=i("v5o6"),st=i.n(it),at=i("zL8q"),nt=i.n(at),ot=(i("tvR6"),i("Au9i")),rt=i.n(ot);i("d8/S");st.a.attach(document.body),s.default.use(nt.a),s.default.use(rt.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:et,template:"<App/>",components:{App:k}})},OYyU:function(t,e){},PqAC:function(t,e){},UY8P:function(t,e){},X01C:function(t,e){},cFCO:function(t,e){},"d8/S":function(t,e){},lrvq:function(t,e){},o7gc:function(t,e){},qidz:function(t,e){},svXO:function(t,e){},tvR6:function(t,e){},"uHH+":function(t,e){},uSSU:function(t,e,i){t.exports=i.p+"static/img/pubu.5bcabb1.jpg"},x9MK:function(t,e){},ypnN:function(t,e){},zJ3n:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.79e14ebbcbc92d72a979.js.map