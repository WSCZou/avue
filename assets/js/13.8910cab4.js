(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{526:function(e,t,a){"use strict";var n=a(3),i=a(55).find,r=a(175),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("find")},527:function(e,t,a){"use strict";var n=a(12),i=a(177),r=a(10),s=a(30),c=a(528),o=a(15),l=a(56),u=a(178);i("search",(function(e,t,a){return[function(t){var a=s(this),i=null==t?void 0:l(t,e);return i?n(i,t,a):new RegExp(t)[e](o(a))},function(e){var n=r(this),i=o(e),s=a(t,n,i);if(s.done)return s.value;var l=n.lastIndex;c(l,0)||(n.lastIndex=0);var h=u(n,i);return c(n.lastIndex,l)||(n.lastIndex=l),null===h?-1:h.index}]}))},528:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},828:function(e,t,a){"use strict";a.r(t);a(116),a(7),a(171),a(172),a(289),a(37),a(527),a(526);var n={name:"fp",data:function(){return{form:{},selectlist:[],search:{},page:{currentPage:1,total:0,pageSizes:[10,30,50,100,200,1e3],pageSize:50},option:{addBtn:!1,border:!0,index:!0,reserveSelection:!1,size:"mini",align:"center",headerAlign:"center",excelBtn:!0,selection:!0,delBtn:!1,menuWidth:80,filterDic:!0,filterNull:!0,searchFilterNull:!0,searchFilterDic:!0,dialogWidth:"30%",column:[{label:"编号",width:80,prop:"compid",span:24,disabled:!0,search:!0},{label:"是否发票",prop:"isFp",width:80,span:24,type:"select",search:!0,dicData:[{label:"需要",value:!0},{label:"不需要",value:!1}]},{label:"发票状态",prop:"flag",width:80,span:24,type:"select",search:!0,dicData:[{label:"未开具",value:!1},{label:"已开具",value:!0}]},{label:"公司名",prop:"mc",span:24,search:!0,overHidden:!0},{label:"税号",prop:"sh",span:24,search:!0,overHidden:!0},{label:"QQ号",prop:"qq",span:24,width:160,search:!0,overHidden:!0},{label:"日期",span:24,width:160,prop:"datetime",disabled:!0}]},data:[]}},methods:{rowUpdate:function(e,t,a,n){var i=this,r=this.deepClone(this.form),s=this.Bmob.Query("ticket");s.set("id",r.objectId),Object.keys(r).forEach((function(e){["createdAt","updatedAt","objectId"].includes(e)||s.set(e,r[e])})),s.save().then((function(){i.getList(),a()})).catch((function(){a()}))},searchChange:function(e,t){this.page.currentPage=1,this.getList(),t()},selectionChange:function(e){this.selectlist=e},setFlag:function(){var e=this;this.selectlist.forEach((function(t){e.Bmob.Query("ticket").get(t.objectId).then((function(a){a.set("flag",!0),e.$set(e.data[t.$index],"flag",!0),a.save()}))})),this.$refs.crud.toggleSelection(),this.$message.success("设置成功")},rowStyle:function(e){if(!e.row.flag)return{backgroundColor:"rgba(245,108,108,0.1)"}},refreshChange:function(){this.data=[],this.$message.success("刷新成功"),this.getList()},sizeChange:function(e){this.page.pageSize=e,this.getList()},currentChange:function(e){this.page.currentPage=e,this.getList()},getList:function(){var e=this;if(this.$refs.auth.flag){var t=this.Bmob.Query("ticket");for(var a in this.search)t.equalTo(a,"==",this.search[a]);t.count().then((function(a){e.page.total=a;var n=(e.page.currentPage-1)*e.page.pageSize,i=e.page.pageSize*e.page.currentPage;for(var r in t.limit(i),t.skip(n),e.search)t.equalTo(r,"==",e.search[r]);t.order("-datetime","-compid"),t.find().then((function(t){e.data=t}))}))}}}},i=a(29),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fp"},[a("avue-crud",{ref:"crud",attrs:{option:e.option,page:e.page,search:e.search,"row-style":e.rowStyle,data:e.data},on:{"update:page":function(t){e.page=t},"update:search":function(t){e.search=t},"row-update":e.rowUpdate,"search-change":e.searchChange,"size-change":e.sizeChange,"current-change":e.currentChange,"refresh-change":e.refreshChange,"selection-change":e.selectionChange},scopedSlots:e._u([{key:"menuLeft",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-s-order",size:"mini"},on:{click:e.setFlag}},[e._v("开 票")])]}}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}}),e._v(" "),a("auth",{ref:"auth",on:{submit:e.getList}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);