(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{535:function(t,e,i){},551:function(t,e,i){"use strict";i(535)},586:function(t,e,i){"use strict";i.r(e);i(117),i(287);var n={name:"sqs",data:function(){return{loading:!1,flag:!1,form:{id:"",date:"",name:"",qq:""}}},props:{active:{type:Object,default:function(){return{}}}},watch:{active:{handler:function(){this.init()},deep:!0},data:{handler:function(){this.init()},deep:!0}},created:function(){this.init()},computed:{data:function(){return{img:"/images/sqstemp.jpg",list:[{left:140,top:665,text:'" '.concat(this.form.name,' "'),color:"#333",size:34,bold:!0,style:"黑体"},{left:280,top:1049,text:this.form.id,color:"#333",size:26,bold:!0,style:"黑体"},{left:740,top:1049,text:this.form.date,color:"#333",bold:!0,size:26,style:"黑体"}]}}},methods:{init:function(){var t=this;this.flag=!1,this.form.id=this.active.compid||this.$route.query.id,this.form.date=this.active.datetime||this.$route.query.date,this.form.name=this.active.mc||this.$route.query.name,this.form.qq=(this.active.qq||this.$route.query.qq)+"@qq.com",setTimeout((function(){t.flag=!0}))},handleSend:function(){var t=this;this.loading=!0,this.$refs.license.getFile(this.form.name).then((function(e){var i=new FormData;i.append("file",e,e.name),i.append("qq",t.form.qq),i.append("id",t.form.id),i.append("token","avue"),t.$axios.post(t.website.API+"/upload",i,{"Content-Type":"multipart/form-data"}).then((function(){t.loading=!1,t.$message.success("发送成功")})).catch((function(){t.$message.error("发送失败"),t.loading=!1}))}))},handleUpload:function(){this.$refs.license.getPdf(this.form.name)}}},a=(i(551),i(29)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sqs"},[t.flag?i("el-button",{on:{click:t.handleUpload}},[t._v("下载授权书")]):t._e(),t._v(" "),t.flag?i("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSend}},[t._v("发送授权书")]):t._e(),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),t.flag?i("div",{staticClass:"content"},[i("avue-license",{ref:"license",attrs:{option:t.data}})],1):t._e(),t._v(" "),i("auth",{ref:"auth",on:{submit:t.init}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);