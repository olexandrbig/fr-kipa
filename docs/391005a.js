(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{483:function(t,e,n){"use strict";n.r(e);n(52),n(20),n(51),n(148),n(101);var o={scrollToTop:!0,head:function(){return{title:this.$t("index.title"),meta:[{hid:"og:site_name",name:"og:site_name",content:this.$t("index.title")},{hid:"og:url",property:"og:url",content:this.$store.state.baseUrl+this.$route.path},{hid:"name",itemprop:"name",content:this.$t("index.title")},{hid:"og:title",property:"og:title",content:this.$t("index.title")},{hid:"description",name:"description",content:this.$t("index.description")},{hid:"descriptionItem",itemprop:"description",content:this.$t("index.description")},{hid:"og:description",property:"og:description",content:this.$t("index.description")},{hid:"og:image",property:"og:image",content:this.$store.state.baseUrl+n(363)}]}},methods:{getViewIcon:function(){return this.getInfo(this.$store.state.activeView).view.icon},getViewName:function(){var t=this.getInfo(this.$store.state.activeView),view=t.view,e=t.module;return"".concat(e.name," / ").concat(view.name)},getViewType:function(){return this.getInfo(this.$store.state.activeView).view.type},getInfo:function(t){var e=t.split(":"),n=e[0],o=e[1],r=e[2],c=this.$store.state.appData.find((function(t){return t.code===n})),view=null;r?view=c.views.find((function(t){return t.code===o})).views.find((function(t){return t.code==="".concat(o,":").concat(r)})):view=c.views.find((function(t){return t.code===o}));return{module:c,view:view}},featureIsNotAvailable:function(){this.$toast.error("This feature is not yet available")}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix relative"},[n("h2",{staticClass:"view-title"},[n("fa",{attrs:{icon:["fas","boxes-stacked"]}}),t._v(" Designer\n    ")],1),t._v(" "),n("p",[t._v('Welcome to workflow designer. Start building your application by clicking "Chose an operation"')])])])}),[],!1,null,null,null);e.default=component.exports}}]);