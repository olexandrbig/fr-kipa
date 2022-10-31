(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutActiveView",methods:{mainHeight:function(){return(window&&window.innerHeight)-60}}},r=(o(408),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"active-view"},[o("ClientOnly",[o("div",{staticClass:"module-details",style:{height:t.mainHeight()+"px"}},[o("div",{staticClass:"module-details-gap"},[o("nuxt")],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},131:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutFooter",data:function(){return{fullYear:(new Date).getFullYear()}},computed:{version:function(){return this.$store.state.appVersion}}},r=(o(410),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"site-footer"},[o("div",{staticClass:"grid"},[o("div",{staticClass:"col-1-3"},[o("p",{staticClass:"footer-company-description"},[t._v("\n        © "+t._s(t.fullYear)+" All rights reserved\n      ")])]),t._v(" "),o("div",{staticClass:"col-1-3 pull-right"},[o("p",{staticClass:"footer-company-description text-right"},[t._v("\n        v"+t._s(t.version)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},132:function(t,e,o){"use strict";o.r(e);o(38),o(31),o(53),o(32),o(54);var n=o(20),r=(o(45),o(52),o(35),o(51),o(56)),l=o(75);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"LayoutOperationsNav",data:function(){return{activeMenus:[]}},computed:{activeModuleCode:function(){return this.$store.state.activeModule},activeOperations:function(){return this.$store.state.appOperations}},methods:d(d({},Object(r.b)({removeOperation:"removeOperation"})),{},{isActiveMenu:function(t){return this.activeMenus.includes(t)},deactivateMenu:function(t){this.activeMenus=this.activeMenus.filter((function(e){return e!==t}))},activateMenu:function(t){this.activeMenus.push(t)},categoryToIcon:function(t){return l.a.categoryToIcon(t)},isActiveViewClass:function(t){return this.$store.state.activeView==="".concat(this.activeModuleCode,":").concat(t)&&"active"},mainHeight:function(){return(window&&window.innerHeight)-30}})},m=(o(412),o(14)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"operation-nav",style:{height:t.mainHeight()+"px"}},[o("ul",{staticClass:"operation-features text-center"},t._l(t.activeOperations,(function(e,n){return o("li",{key:e.id,staticClass:"operation-feature",class:t.isActiveViewClass(e.id)},[o("nuxt-link",{staticClass:"operation-item w-80 m-t-30 pointer",attrs:{to:"/edit?id="+e.id}},[o("div",{staticClass:"operation-title relative"},[o("span",{staticClass:"pull-right"},[t.isActiveMenu(e.id)?o("fa",{key:"on",class:"feature-icon",attrs:{icon:["fas","xmark"]},on:{click:function(o){return t.deactivateMenu(e.id)}}}):o("fa",{key:"off",class:"feature-icon",attrs:{icon:["fas","ellipsis-vertical"]},on:{click:function(o){return t.activateMenu(e.id)}}}),t._v(" "),o("transition",{attrs:{name:"dropdown"}},[t.isActiveMenu(e.id)?o("div",{staticClass:"dropdown-menu",class:{active:t.isActiveMenu(e.id)}},[o("ul",{staticClass:"dropdown-menu-nav"},[o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Move up"}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Move up")])])]),t._v(" "),o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Move down"}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Move down")])])]),t._v(" "),o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Remove"},on:{click:function(o){return t.removeOperation(e.id)}}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Remove")])])])])]):t._e()])],1),t._v(" "),o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas",t.categoryToIcon(e.category)]}})],1),t._v(" "),o("span",{staticClass:"text-ellipsis"},[t._v(t._s(e.name))])]),t._v(" "),o("span",{staticClass:"operation-next"},[o("fa",{attrs:{icon:["fas","arrow-down-long"]}}),t._v(" "),o("span",{staticClass:"operation-next-add"},[o("nuxt-link",{staticClass:"add-action",attrs:{to:"/add?after="+(n+1)}},[o("fa",{staticClass:"add-action-icon",attrs:{icon:["fas","plus"]}})],1)],1)],1)])],1)})),0),t._v(" "),o("ul",{staticClass:"operation-features text-center"},[o("li",[o("nuxt-link",{staticClass:"add-action",attrs:{to:"/add"}},[o("fa",{staticClass:"add-action-icon",attrs:{icon:["fas","plus"]}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},133:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutSiteNav",components:{Logo:o(134).default},computed:{appData:function(){return this.$store.state.appData}},methods:{featureIsNotAvailable:function(){this.$toast.error("This feature is not yet available")},activateModule:function(t){this.$store.dispatch("activateModule",t)},isActiveModuleClass:function(t){return this.$store.state.activeModule===t&&"active"},mainHeight:function(){return(window&&window.innerHeight)-30}}},r=(o(416),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"site-nav",style:{height:t.mainHeight()+"px"}},[o("div",{staticClass:"text-center"},[o("Logo",{staticClass:"site-logo"})],1),t._v(" "),o("ul",{staticClass:"site-modules"},[o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","magnifying-glass"]}})],1)])]),t._v(" "),t._l(t.appData,(function(e){return o("li",{key:e.code,staticClass:"site-module",class:t.isActiveModuleClass(e.code)},[o("nuxt-link",{staticClass:"module-link pointer",attrs:{to:""+e.link},on:{click:function(o){return t.activateModule(e.code)}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas",e.icon]}})],1)])],1)}))],2),t._v(" "),o("ul",{staticClass:"site-modules site-modules-bottom"},[o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","users"]}})],1)])]),t._v(" "),o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","heart-pulse"]}})],1)])]),t._v(" "),o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","right-from-bracket"]}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:o(134).default})},134:function(t,e,o){"use strict";o.r(e);o(414);var n=o(14),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"logo",attrs:{src:o(357),alt:"Company"}})}),[],!1,null,null,null);e.default=component.exports},141:function(t,e,o){"use strict";var n=o(1),r=o(354);n.a.use(r.a)},142:function(t,e,o){"use strict";o(51);var n=o(1),r=o(143);n.a.use(r.a),e.a=function(t){var e=t.app,n=t.store;e.i18n=new r.a({locale:n.state.locale,fallbackLocale:"en",messages:{en:o(449)}}),e.i18n.path=function(link){return e.i18n.locale===e.i18n.fallbackLocale?"/".concat(link):"/".concat(e.i18n.locale,"/").concat(link)}}},144:function(t,e,o){"use strict";var n=o(1),r=o(145);n.a.component("BarChart",{extends:r.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("LineChart",{extends:r.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},182:function(t,e,o){var content=o(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("82c7a9be",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("79051960",content,!0,{sourceMap:!1})},184:function(t,e,o){var content=o(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("7dcf4d40",content,!0,{sourceMap:!1})},185:function(t,e,o){var content=o(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("657ad568",content,!0,{sourceMap:!1})},186:function(t,e,o){var content=o(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("1930a9a0",content,!0,{sourceMap:!1})},187:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("0af91e56",content,!0,{sourceMap:!1})},188:function(t,e,o){var content=o(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("56b15182",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},r=(o(400),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("div",{staticClass:"loading-page"},[t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading-dots"},[o("h3",[t._v("Loading")]),t._v(" "),o("h3",[o("small",{staticClass:"dot one"},[t._v(".")]),o("small",{staticClass:"dot two"},[t._v(".")]),o("small",{staticClass:"dot three"},[t._v(".")])])])}],!1,null,"3c83b890",null);e.default=component.exports},356:function(t,e,o){"use strict";var n=o(130),r=o(131),l=o(132),c=o(133),d={name:"Default",components:{LayoutActiveView:n.default,LayoutFooter:r.default,LayoutOperationsNav:l.default,LayoutSiteNav:c.default}},f=(o(418),o(14)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-root"},[o("div",{staticClass:"page-wrap"},[o("LayoutSiteNav"),t._v(" "),o("LayoutOperationsNav"),t._v(" "),o("LayoutActiveView",[o("nuxt")],1)],1),t._v(" "),o("LayoutFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LayoutSiteNav:o(133).default,LayoutOperationsNav:o(132).default,LayoutActiveView:o(130).default,LayoutFooter:o(131).default})},357:function(t,e,o){t.exports=o.p+"img/logo.f4979ad.png"},360:function(t,e,o){o(361),t.exports=o(362)},400:function(t,e,o){"use strict";o(182)},401:function(t,e,o){var n=o(29)(!1);n.push([t.i,".loading-page[data-v-3c83b890]{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.3);text-align:center;padding-top:430px;font-size:30px;z-index:99}.loading-dots[data-v-3c83b890]{text-align:center;z-index:5;display:inline-block;padding:10px 20px 20px}.loading-dots .dot[data-v-3c83b890]{display:inline;margin-left:.2em;margin-right:.2em;position:relative;top:-.6em;font-size:1.6em;line-height:1em;opacity:0;-webkit-animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite;animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite}.loading-dots .dot.one[data-v-3c83b890]{-webkit-animation-delay:.2s;animation-delay:.2s}.loading-dots .dot.two[data-v-3c83b890]{-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dots .dot.three[data-v-3c83b890]{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}@keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}",""]),t.exports=n},404:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("2998b330",content,!0,{sourceMap:!1})},405:function(t,e,o){var n=o(29)(!1);n.push([t.i,'html{font-family:"Georama",Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#344c84;overflow-x:hidden}*,:after,:before{box-sizing:border-box;margin:0}.container{position:relative;font-weight:400;padding-top:100px;margin:0 auto;display:block;width:100%}.title{display:block;font-size:40px;font-weight:300;letter-spacing:1px;padding:20px 0 10px}.list-unstyled{list-style:none}.btn,.list-unstyled li{display:inline-block}.btn{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:14px 15px 13px;font-size:12px;line-height:1em;background:#7e1548;border:1px solid #7e1548;color:#fff;text-decoration:none;border-radius:4px;cursor:pointer}.btn:hover{opacity:.9}.btn.btn-default,.btn.btn-primary{color:#fff;text-decoration:none}.btn.btn-primary{background:#3f3363;border-color:#3f3363}.btn.btn-toggle{color:#fff;text-decoration:none}.btn.btn-toggle.nuxt-link-exact-active{color:#fff;background:#7e1548;border-color:#7e1548;text-decoration:none}.btn.btn-link,.btn.btn-link.nuxt-link-exact-active{color:#fff;text-decoration:none}.btn.btn-link.disabled{background:#e8e9eb;border-color:#e8e9eb}.btn.btn-link.disabled,.nuxt-link-exact-active{color:#344c84;text-decoration:none}.form-control{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:10px;font-size:14px;min-width:200px;width:100%;height:auto}@media (max-width:1280px){.form-control{font-size:12px}}select.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;text-indent:10px;line-height:39px;height:41px}.form-control-borderless,select.form-control-borderless{border:none;padding:4px 0;height:24px;line-height:21px;text-indent:0}.form-control-lg{min-width:379px;width:100%}.form-control-sm{width:96px;min-width:96px}.pull-left{float:left!important}.pull-right{float:right!important}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.clearfix{display:inline-block}* html .clearfix{height:1%}.clearfix{display:block}*{box-sizing:border-box}.grid{margin-right:-20px}.grid:after{content:"";display:table;clear:both}[class*=col-]{float:left;padding-right:20px}.col-2-3{width:66.66%}.col-1-3{width:33.33%}.col-1-2{width:50%}.col-1-4{width:25%}.col-1-8{width:12.5%}.col-1-1{width:100%}.col-offset-1-3{margin-left:33.33%}.pointer{cursor:pointer}.inline-block{display:inline-block}.relative{position:relative}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.p-20{padding:20px}.m-b-0{margin-bottom:0!important}.m-b-10{margin-bottom:10px}.m-b-20{margin-bottom:20px}.m-b-40{margin-bottom:40px}.m-t-5{margin-top:5px}.m-t-10{margin-top:10px}.m-t-20{margin-top:20px}.m-t-30{margin-top:30px}.m-lr-5{margin-left:5px;margin-right:5px}.m-l-10{margin-left:10px}.m-r-10{margin-right:10px}.m-r-20{margin-right:20px}.m-lr-2{margin-left:2px;margin-right:2px}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;left:-9999px}[type=checkbox]:checked+label,[type=checkbox]:not(:checked)+label{position:relative;padding-left:1.95em;cursor:pointer}[type=checkbox]:checked+label:before,[type=checkbox]:not(:checked)+label:before{content:"";position:absolute;left:0;top:0;width:1.25em;height:1.25em;border:2px solid #ccc;background:#fff;border-radius:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1)}[type=checkbox]:checked+label:after,[type=checkbox]:not(:checked)+label:after{content:"\\2713\\0020";position:absolute;top:.15em;left:.22em;font-size:1.3em;line-height:.8;color:#344c84;transition:all .2s;font-family:"Lucida Sans Unicode","Arial Unicode MS",Arial}[type=checkbox]:not(:checked)+label:after{opacity:0;transform:scale(0)}[type=checkbox]:checked+label:after{opacity:1;transform:scale(1)}[type=checkbox]:disabled:checked+label:before,[type=checkbox]:disabled:not(:checked)+label:before{box-shadow:none;border-color:#bbb;background-color:#ddd}[type=checkbox]:disabled:checked+label:after{color:#999}[type=checkbox]:disabled+label{color:#aaa}[type=checkbox]:checked:focus+label:before,[type=checkbox]:not(:checked):focus+label:before{border:2px dotted #344c84}input.ios-toggle{opacity:0;position:absolute}input.ios-toggle+span{position:relative;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.4s ease;height:20px;width:40px;border:1px solid #aaa;border-radius:60px;cursor:pointer;top:3px;margin-right:3px}input.ios-toggle+span:before{content:"";position:absolute;display:block;transition:.2s cubic-bezier(.24,0,.5,1);height:20px;width:41px;top:0;left:0;border-radius:30px}input.ios-toggle+span:after{content:"";position:absolute;display:block;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 0 0 rgba(0,0,0,.04),0 4px 9px rgba(0,0,0,.13),0 3px 3px rgba(0,0,0,.05);transition:.35s cubic-bezier(.54,1.6,.5,1);background:#f5f5f5;height:18px;width:18px;top:1px;left:0;border-radius:60px}input.ios-toggle:checked+span:before{background:#344c84;transition:width .2s cubic-bezier(0,0,0,.1)}input.ios-toggle:checked+span:after{left:22px}pre{display:block;padding:9.5px;margin:0;font-size:13px;line-height:1.4;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}@media (max-width:1280px){pre{font-size:11px}}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{width:100%;max-height:300px;overflow:auto;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;margin-bottom:0}.truncate{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vab{vertical-align:bottom}.violations{color:#cf4747}.warnings{color:#feba49}.ok{color:#2a94a2}.disabled{color:#000;cursor:not-allowed}.w-100{width:100%}.highlight{color:#44b49c;text-decoration:underline}.highlight:hover{text-decoration:none}.highlight-white{color:#fff;text-decoration:underline}.highlight-white:hover{text-decoration:none}.toasted.bubble.success{color:#fff!important;background:#44b49c!important}.toasted.bubble.error{color:#fff!important;background:#cf4747!important}.toasted.bubble.info{color:#fff!important;background:#344c84!important}.toasted.bubble .action{color:#fff!important;text-decoration:underline!important}.panel{background:#fff;padding:15px;border-radius:10px;margin:10px 0}.view-title{margin-top:15px;margin-bottom:15px}.right-actions{position:absolute;right:0;top:-10px}table{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;text-align:left;padding:8px 8px 8px 0}tr:nth-child(2n){background-color:#ddd}.table-borderless td,.table-borderless th{border:none}.table-borderless tr{border-bottom:1px solid #ddd}.table-borderless tr:nth-child(2n){background-color:transparent}.table-borderless tr:last-child{border-bottom:none}.dropdown-menu{top:100%;right:-5px;position:absolute;z-index:10;height:auto;min-width:auto;margin-top:10px;overflow-y:auto;background-color:#fff;border:1px solid grey;background-clip:padding-box}.dropdown-menu-link{display:flex;align-items:normal;justify-content:flex-end;text-decoration:none;color:rgba(0,0,0,.6);padding:5px 10px}.dropdown-menu-nav{list-style:none;padding:0;text-align:right}.dropdown-menu-link:hover{color:#344c84;background-color:rgba(79,79,79,.1)}.dropdown-menu-text{font-weight:300;margin-left:10px;margin-right:10px}.dropdown-enter-active,.dropdown-leave-active{transition:all .5s}.dropdown-enter,.dropdown-leave-to{opacity:0;transform:translateY(30px)}',""]),t.exports=n},408:function(t,e,o){"use strict";o(183)},409:function(t,e,o){var n=o(29)(!1);n.push([t.i,".active-view{display:block;float:left;width:calc(100% - 460px);background:#f5f5f5;height:100%;min-height:100%}.module-details{overflow-y:auto;overflow-x:hidden;width:100%;float:left;padding:10px 20px}",""]),t.exports=n},410:function(t,e,o){"use strict";o(184)},411:function(t,e,o){var n=o(29)(!1);n.push([t.i,".footer-company-description{margin-top:8px;margin-bottom:0;color:#1155cb}.site-footer{background:#fff;border-top:1px solid #1155cb}.site-footer a{color:#1155cb}.site-footer a:hover{text-decoration:none}",""]),t.exports=n},412:function(t,e,o){"use strict";o(185)},413:function(t,e,o){var n=o(29)(!1);n.push([t.i,'.add-action{margin:10px auto;display:inline-block;border-radius:50%;width:40px;height:40px;line-height:38px;color:#1155cb;border:1px solid #1155cb}.add-action,add-action-icon{font-size:2em}.operation-nav{display:block;float:left;height:100%;min-height:100%;width:400px;overflow-y:auto;overflow-x:hidden;background:#fff;border-right:1px solid #1155cb}.operation-features{list-style:none;padding:0;float:left;width:100%}.operation-feature{display:inline-block;background:#fff;float:left;position:relative;width:100%}.operation-features>.operation-feature>.operation-item{font-weight:700}.operation-item{text-decoration:none;color:#043558;line-height:30px;padding:5px;display:inline-block;width:100%;border:1px solid #1155cb;text-align:left}.operation-next{content:" ";display:none;width:24px;height:30px;line-height:28px;position:absolute;top:100%;left:50%;color:#1155cb;margin-left:-12px;z-index:1;font-size:28px;text-align:center}.operation-feature:not(:last-child) .operation-item .operation-next{display:inline-block}.operation-next-add .add-action{display:none;font-size:10px;border-radius:50%;width:16px;height:16px;line-height:13px;background:#fff;margin-top:0;margin-bottom:0;margin-left:-8px;left:50%;position:absolute;top:3px;z-index:1}.operation-next:hover .operation-next-add .add-action{display:inline-block}.operation-feature.active .operation-item,.operation-item:hover,.operation-subfeature.active .operation-item{background:#f5f5f5}.operation-sublist .operation-item{padding-left:40px}.operation-text{line-height:15px}.w-80{width:80%}.feature-icon{font-size:1.3em;vertical-align:middle;width:20px!important;text-align:center;display:inline-block}.text-ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=n},414:function(t,e,o){"use strict";o(186)},415:function(t,e,o){var n=o(29)(!1);n.push([t.i,".logo{height:48px;width:auto;display:inline-block}",""]),t.exports=n},416:function(t,e,o){"use strict";o(187)},417:function(t,e,o){var n=o(29)(!1);n.push([t.i,".site-logo{margin:20px auto 24px}.site-nav{display:block;float:left;height:100%;min-height:100%;width:60px;overflow-y:auto;overflow-x:hidden;background:#fff;position:relative;border-right:1px solid #1155cb}.site-modules{list-style:none;padding:0;float:left;width:100%;text-align:center}.site-modules-bottom{position:absolute;bottom:0;left:0}.site-modules-bottom .site-module:first-child{border-top:1px solid #1155cb}.site-modules-bottom .site-module:last-child{border-bottom:none}.site-module{background:transparent;float:left;border-bottom:1px solid #1155cb;position:relative}.module-link,.site-module{display:inline-block;width:100%}.module-link{text-decoration:none;color:#1155cb;line-height:30px;padding:10px 20px}.module-link:hover,.site-module.active .module-link{background:hsla(0,0%,100%,.2)}.module-icon{font-size:1.3em;vertical-align:middle;text-align:center}",""]),t.exports=n},418:function(t,e,o){"use strict";o(188)},419:function(t,e,o){var n=o(29)(!1);n.push([t.i,'#__layout,#__nuxt,.app-root,body,html{height:100%}.page-wrap{min-height:100%;margin-bottom:-30px;background:#efefef}.page-wrap:after{content:"";display:block}.page-wrap:after,.site-footer{height:30px}.site-footer{padding:0 10px;color:#fff;position:relative}',""]),t.exports=n},420:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return d})),o.d(e,"getters",(function(){return f})),o.d(e,"mutations",(function(){return m})),o.d(e,"actions",(function(){return h}));o(35),o(180),o(45),o(52),o(50),o(101),o(19),o(99);var n=o(452),r=o(75),l=o(421).operations,c=o(422).version,d=function(){return{languages:[{title:"English",code:"en"}],locale:"en",appVersion:c,appOperations:[],allOperations:l,availableOperations:[],appData:[{link:"/",code:"m1",name:"Designer",icon:"boxes-stacked",views:[{code:"OVERVIEW",name:"Overview",icon:"th-large",type:"pageA"},{code:"PRODUCT",name:"Product data",icon:"boxes",views:[{code:"PRODUCT:VARIANTS",name:"Variants",icon:"list",type:"pageB"},{code:"PRODUCT:VERSIONS",name:"Versions",icon:"tasks",type:"pageC"},{code:"PRODUCT:BALANCE",name:"Balance",icon:"balance-scale",type:"pageD"}]},{code:"DRAFTS",name:"Drafts",icon:"pencil-ruler",type:"pageE"}]}],tabs:["m1:OVERVIEW","m1:PRODUCT:VERSIONS"],activeModule:"m1",activeView:"m1:PRODUCT:VERSIONS"}},f={availableOperations:function(t){return t.availableOperations}},m={SET_ACTIVE_MODULE:function(t,e){t.activeModule=e},ADD_TAB:function(t,e){t.tabs.push(e)},REMOVE_TAB:function(t,e){t.tabs=t.tabs.filter((function(t){return t!==e}))},REMOVE_ACTIVE:function(t,e){var o=t.tabs.indexOf(e);t.activeView=t.tabs.length>1?o>0?t.tabs[o-1]:t.tabs[0]:null},SET_ACTIVE_VIEW:function(t,e){t.activeView=e},SET_AVAILABLE_OPERATIONS:function(t,e){t.availableOperations=e},ADD_ACTIVE_OPERATION:function(t,e){var o=e.operation,l=e.after,c=t.appOperations.length,d=r.a.getObjectCopy(o);d.id=Object(n.a)(),t.appOperations.splice(l||c,0,d)},REMOVE_ACTIVE_OPERATION:function(t,e){t.appOperations=t.appOperations.filter((function(t){return t.id!==e}))}},h={addOperation:function(t,e){var o=t.commit;t.state;o("ADD_ACTIVE_OPERATION",{operation:e.operation,after:e.after})},removeOperation:function(t,e){var o=t.commit;t.state;o("REMOVE_ACTIVE_OPERATION",e)},activateModule:function(t,e){var o=t.commit;t.state;o("SET_ACTIVE_MODULE",e)},activateTab:function(t,e){var o=t.commit,n=t.state;o("SET_ACTIVE_VIEW",e),n.tabs.includes(e)||o("ADD_TAB",e)},closeTab:function(t,e){var o=t.commit;e===t.state.activeView&&o("REMOVE_ACTIVE",e),o("REMOVE_TAB",e)},getAvailableOperations:function(t,e){var o=t.commit,n=t.state,r=e.search,filter=r&&r.toLowerCase();o("SET_AVAILABLE_OPERATIONS",filter?n.allOperations.filter((function(t){return t.name&&t.name.toLowerCase().includes(filter)||t.version&&t.version.toLowerCase().includes(filter)||t.tags&&t.tags.find((function(t){return t.toLowerCase().includes(filter)})).length})):n.allOperations)}}},421:function(t){t.exports=JSON.parse('{"operations":[{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea2","version":"1.0.0","name":"Get file(s) from (S)FTP server","description":"Retrieves one or more files specified by full path from FTP server","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":1,"category":"FILE","resultDescription":"","isContainerOp":false,"searchTags":["FTP","file","pull file from ftp","retrieve file from FTP"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea3","version":"1.0.0","name":"List files in (S)FTP directory","description":"Lists the contents of the remote working directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":3,"category":"FILE","resultDescription":"List of file details","isContainerOp":false,"searchTags":["ftp","list files in directory"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea4","version":"1.0.0","name":"Put FTP file","description":"Puts file into remote (S)FTP directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":2,"category":"FILE","resultDescription":"List of file details of transfered files","isContainerOp":false,"searchTags":["ftp","list files in directory"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea5","version":"1.0.0","name":"delete remote FTP file","description":"Deletes a file from the remote working directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":4,"category":"FILE","resultDescription":"Information on deleted file","isContainerOp":false,"searchTags":["ftp","delete file in (S)ftp remote directory"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb38","version":"1.0.0","name":"Groovy Map","description":"Map data using grooy","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"aef2cf7e-14b6-4f99-9ca5-e85d17d1ab24","sequenceInGroup":1,"category":"MAPPING","resultDescription":"Data transformation of one data structue into another","isContainerOp":false,"searchTags":["Map data","data mapping","data transformation","groovy"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb39","version":"1.0.0","name":"Retrieve messages","description":"Retrieve messages from Kafka topic","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"5faf3d6c-f0e8-4540-b903-c656820ffc43","sequenceInGroup":1,"category":"KAFKA","resultDescription":"List of messages in data pipeline","isContainerOp":false,"searchTags":["messaging","read messages","kafka","read message"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb40","version":"1.0.0","name":"Send messages","description":"Send messages to Kafka topic","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"5faf3d6c-f0e8-4540-b903-c656820ffc43","sequenceInGroup":2,"category":"KAFKA","resultDescription":"One or many messsages are sent to Kafka topic","isContainerOp":false,"searchTags":["messaging","send messages","kafka","send message"]}]}')},422:function(t){t.exports=JSON.parse('{"name":"admin-area","version":"0.5.0","private":true,"scripts":{"dev":"nuxt","build":"nuxt build","start":"nuxt start","generate":"nuxt generate","lint:fix":"eslint --fix --ext \\".js,.vue\\" --ignore-path .gitignore .","lint:js":"eslint --ext \\".js,.vue\\" --ignore-path .gitignore .","lint":"yarn lint:js"},"dependencies":{"@fortawesome/free-brands-svg-icons":"^6.2.0","@fortawesome/free-regular-svg-icons":"^6.2.0","@fortawesome/free-solid-svg-icons":"^6.2.0","@nuxt/content":"^1.14.0","@nuxtjs/axios":"^5.13.6","@nuxtjs/pwa":"^3.3.5","@nuxtjs/robots":"^2.5.0","@nuxtjs/sitemap":"^2.4.0","@nuxtjs/toast":"^3.3.1","chart.js":"^2.9.4","core-js":"^3.15.1","nuxt":"^2.15.7","nuxt-fontawesome":"^0.4.0","uuid":"^9.0.0","vue-chartjs":"^3.5.1","vue-i18n":"^8.25.0","vue-underscore":"^0.1.4"},"devDependencies":{"@babel/eslint-parser":"^7.14.7","@nuxtjs/eslint-config":"^6.0.1","@nuxtjs/eslint-module":"^3.0.2","eslint":"^7.29.0","eslint-plugin-nuxt":"^2.0.0","eslint-plugin-vue":"^7.12.1"}}')},449:function(t){t.exports=JSON.parse('{"index":{"title":"Main page","description":"Main page"}}')},451:function(t,e,o){var map={"./af":208,"./af.js":208,"./ar":209,"./ar-dz":210,"./ar-dz.js":210,"./ar-kw":211,"./ar-kw.js":211,"./ar-ly":212,"./ar-ly.js":212,"./ar-ma":213,"./ar-ma.js":213,"./ar-sa":214,"./ar-sa.js":214,"./ar-tn":215,"./ar-tn.js":215,"./ar.js":209,"./az":216,"./az.js":216,"./be":217,"./be.js":217,"./bg":218,"./bg.js":218,"./bm":219,"./bm.js":219,"./bn":220,"./bn-bd":221,"./bn-bd.js":221,"./bn.js":220,"./bo":222,"./bo.js":222,"./br":223,"./br.js":223,"./bs":224,"./bs.js":224,"./ca":225,"./ca.js":225,"./cs":226,"./cs.js":226,"./cv":227,"./cv.js":227,"./cy":228,"./cy.js":228,"./da":229,"./da.js":229,"./de":230,"./de-at":231,"./de-at.js":231,"./de-ch":232,"./de-ch.js":232,"./de.js":230,"./dv":233,"./dv.js":233,"./el":234,"./el.js":234,"./en-au":235,"./en-au.js":235,"./en-ca":236,"./en-ca.js":236,"./en-gb":237,"./en-gb.js":237,"./en-ie":238,"./en-ie.js":238,"./en-il":239,"./en-il.js":239,"./en-in":240,"./en-in.js":240,"./en-nz":241,"./en-nz.js":241,"./en-sg":242,"./en-sg.js":242,"./eo":243,"./eo.js":243,"./es":244,"./es-do":245,"./es-do.js":245,"./es-mx":246,"./es-mx.js":246,"./es-us":247,"./es-us.js":247,"./es.js":244,"./et":248,"./et.js":248,"./eu":249,"./eu.js":249,"./fa":250,"./fa.js":250,"./fi":251,"./fi.js":251,"./fil":252,"./fil.js":252,"./fo":253,"./fo.js":253,"./fr":254,"./fr-ca":255,"./fr-ca.js":255,"./fr-ch":256,"./fr-ch.js":256,"./fr.js":254,"./fy":257,"./fy.js":257,"./ga":258,"./ga.js":258,"./gd":259,"./gd.js":259,"./gl":260,"./gl.js":260,"./gom-deva":261,"./gom-deva.js":261,"./gom-latn":262,"./gom-latn.js":262,"./gu":263,"./gu.js":263,"./he":264,"./he.js":264,"./hi":265,"./hi.js":265,"./hr":266,"./hr.js":266,"./hu":267,"./hu.js":267,"./hy-am":268,"./hy-am.js":268,"./id":269,"./id.js":269,"./is":270,"./is.js":270,"./it":271,"./it-ch":272,"./it-ch.js":272,"./it.js":271,"./ja":273,"./ja.js":273,"./jv":274,"./jv.js":274,"./ka":275,"./ka.js":275,"./kk":276,"./kk.js":276,"./km":277,"./km.js":277,"./kn":278,"./kn.js":278,"./ko":279,"./ko.js":279,"./ku":280,"./ku.js":280,"./ky":281,"./ky.js":281,"./lb":282,"./lb.js":282,"./lo":283,"./lo.js":283,"./lt":284,"./lt.js":284,"./lv":285,"./lv.js":285,"./me":286,"./me.js":286,"./mi":287,"./mi.js":287,"./mk":288,"./mk.js":288,"./ml":289,"./ml.js":289,"./mn":290,"./mn.js":290,"./mr":291,"./mr.js":291,"./ms":292,"./ms-my":293,"./ms-my.js":293,"./ms.js":292,"./mt":294,"./mt.js":294,"./my":295,"./my.js":295,"./nb":296,"./nb.js":296,"./ne":297,"./ne.js":297,"./nl":298,"./nl-be":299,"./nl-be.js":299,"./nl.js":298,"./nn":300,"./nn.js":300,"./oc-lnc":301,"./oc-lnc.js":301,"./pa-in":302,"./pa-in.js":302,"./pl":303,"./pl.js":303,"./pt":304,"./pt-br":305,"./pt-br.js":305,"./pt.js":304,"./ro":306,"./ro.js":306,"./ru":307,"./ru.js":307,"./sd":308,"./sd.js":308,"./se":309,"./se.js":309,"./si":310,"./si.js":310,"./sk":311,"./sk.js":311,"./sl":312,"./sl.js":312,"./sq":313,"./sq.js":313,"./sr":314,"./sr-cyrl":315,"./sr-cyrl.js":315,"./sr.js":314,"./ss":316,"./ss.js":316,"./sv":317,"./sv.js":317,"./sw":318,"./sw.js":318,"./ta":319,"./ta.js":319,"./te":320,"./te.js":320,"./tet":321,"./tet.js":321,"./tg":322,"./tg.js":322,"./th":323,"./th.js":323,"./tk":324,"./tk.js":324,"./tl-ph":325,"./tl-ph.js":325,"./tlh":326,"./tlh.js":326,"./tr":327,"./tr.js":327,"./tzl":328,"./tzl.js":328,"./tzm":329,"./tzm-latn":330,"./tzm-latn.js":330,"./tzm.js":329,"./ug-cn":331,"./ug-cn.js":331,"./uk":332,"./uk.js":332,"./ur":333,"./ur.js":333,"./uz":334,"./uz-latn":335,"./uz-latn.js":335,"./uz.js":334,"./vi":336,"./vi.js":336,"./x-pseudo":337,"./x-pseudo.js":337,"./yo":338,"./yo.js":338,"./zh-cn":339,"./zh-cn.js":339,"./zh-hk":340,"./zh-hk.js":340,"./zh-mo":341,"./zh-mo.js":341,"./zh-tw":342,"./zh-tw.js":342};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=451},75:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(15),r={categoryToIcon:function(t){return function(t){switch(t){case"FILE":return"folder-tree";case"MAPPING":return"sliders";case"KAFKA":return"atom";default:return"plus"}}(t)},getObjectCopy:function(t){return function(t){if(t&&"object"===Object(n.a)(t)){var e={};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&(e[p]=t[p]);return e}return t}(t)}}}},[[360,10,1,11]]]);