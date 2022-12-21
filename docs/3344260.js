(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutActiveView",methods:{mainHeight:function(){return(window&&window.innerHeight)-60}}},r=(o(414),o(15)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"active-view"},[o("ClientOnly",[o("div",{staticClass:"module-details",style:{height:t.mainHeight()+"px"}},[o("div",{staticClass:"module-details-gap"},[o("nuxt")],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},133:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutFooter",data:function(){return{fullYear:(new Date).getFullYear()}},computed:{version:function(){return this.$store.state.appVersion}}},r=(o(416),o(15)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"site-footer"},[o("div",{staticClass:"grid"},[o("div",{staticClass:"col-1-3"},[o("p",{staticClass:"footer-company-description"},[t._v("\n        © "+t._s(t.fullYear)+" All rights reserved\n      ")])]),t._v(" "),o("div",{staticClass:"col-1-3 pull-right"},[o("p",{staticClass:"footer-company-description text-right"},[t._v("\n        v"+t._s(t.version)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},134:function(t,e,o){"use strict";o.r(e);o(40),o(30),o(54),o(31),o(55);var n=o(21),r=(o(46),o(53),o(36),o(52),o(57)),l=o(76);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"LayoutOperationsNav",data:function(){return{activeMenus:[]}},computed:{activeModuleCode:function(){return this.$store.state.activeModule},activeOperations:function(){return this.$store.state.appOperations}},methods:d(d({},Object(r.b)({removeOperation:"removeOperation"})),{},{isActiveMenu:function(t){return this.activeMenus.includes(t)},deactivateMenu:function(t){this.activeMenus=this.activeMenus.filter((function(e){return e!==t}))},activateMenu:function(t){this.activeMenus.push(t)},categoryToIcon:function(t){return l.a.categoryToIcon(t)},isActiveViewClass:function(t){return this.$store.state.activeView==="".concat(this.activeModuleCode,":").concat(t)&&"active"},mainHeight:function(){return(window&&window.innerHeight)-30}})},m=(o(418),o(15)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"operation-nav",style:{height:t.mainHeight()+"px"}},[o("ul",{staticClass:"operation-features text-center"},t._l(t.activeOperations,(function(e,n){return o("li",{key:e.id,staticClass:"operation-feature",class:t.isActiveViewClass(e.id)},[o("nuxt-link",{staticClass:"operation-item w-80 m-t-30 pointer",attrs:{to:"edit?id="+e.id}},[o("div",{staticClass:"operation-title relative"},[o("span",{staticClass:"pull-right"},[t.isActiveMenu(e.id)?o("fa",{key:"on",class:"feature-icon",attrs:{icon:["fas","xmark"]},on:{click:function(o){return t.deactivateMenu(e.id)}}}):o("fa",{key:"off",class:"feature-icon",attrs:{icon:["fas","ellipsis-vertical"]},on:{click:function(o){return t.activateMenu(e.id)}}}),t._v(" "),o("transition",{attrs:{name:"dropdown"}},[t.isActiveMenu(e.id)?o("div",{staticClass:"dropdown-menu",class:{active:t.isActiveMenu(e.id)}},[o("ul",{staticClass:"dropdown-menu-nav"},[o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Move up"}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Move up")])])]),t._v(" "),o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Move down"}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Move down")])])]),t._v(" "),o("li",{staticClass:"dropdown-menu-item"},[o("a",{staticClass:"dropdown-menu-link",attrs:{href:"",title:"Remove"},on:{click:function(o){return t.removeOperation(e.id)}}},[o("div",{staticClass:"dropdown-menu-text"},[t._v("Remove")])])])])]):t._e()])],1),t._v(" "),o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas",t.categoryToIcon(e.category)]}})],1),t._v(" "),o("span",{staticClass:"text-ellipsis"},[t._v(t._s(e.name))])]),t._v(" "),o("span",{staticClass:"operation-next"},[o("fa",{attrs:{icon:["fas","arrow-down-long"]}}),t._v(" "),o("span",{staticClass:"operation-next-add"},[o("nuxt-link",{staticClass:"add-action",attrs:{to:"add?after="+(n+1)}},[o("fa",{staticClass:"add-action-icon",attrs:{icon:["fas","plus"]}})],1)],1)],1)])],1)})),0),t._v(" "),o("ul",{staticClass:"operation-features text-center"},[o("li",[o("nuxt-link",{staticClass:"add-action",attrs:{to:"/add"}},[o("fa",{staticClass:"add-action-icon",attrs:{icon:["fas","plus"]}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},135:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutSiteNav",components:{Logo:o(136).default},computed:{appData:function(){return this.$store.state.appData}},methods:{featureIsNotAvailable:function(){this.$toast.error("This feature is not yet available")},activateModule:function(t){this.$store.dispatch("activateModule",t)},isActiveModuleClass:function(t){return this.$store.state.activeModule===t&&"active"},mainHeight:function(){return(window&&window.innerHeight)-30}}},r=(o(422),o(15)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"site-nav",style:{height:t.mainHeight()+"px"}},[o("div",{staticClass:"text-center"},[o("Logo",{staticClass:"site-logo"})],1),t._v(" "),o("ul",{staticClass:"site-modules"},[o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","magnifying-glass"]}})],1)])]),t._v(" "),t._l(t.appData,(function(e){return o("li",{key:e.code,staticClass:"site-module",class:t.isActiveModuleClass(e.code)},[o("nuxt-link",{staticClass:"module-link pointer",attrs:{to:""+e.link},on:{click:function(o){return t.activateModule(e.code)}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas",e.icon]}})],1)])],1)}))],2),t._v(" "),o("ul",{staticClass:"site-modules site-modules-bottom"},[o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","users"]}})],1)])]),t._v(" "),o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","heart-pulse"]}})],1)])]),t._v(" "),o("li",{staticClass:"site-module"},[o("a",{staticClass:"module-link pointer",on:{click:function(e){return t.featureIsNotAvailable()}}},[o("span",{staticClass:"module-icon"},[o("fa",{attrs:{icon:["fas","right-from-bracket"]}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:o(136).default})},136:function(t,e,o){"use strict";o.r(e);o(420);var n=o(15),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"logo",attrs:{src:o(363),alt:"Company"}})}),[],!1,null,null,null);e.default=component.exports},143:function(t,e,o){"use strict";var n=o(1),r=o.n(n),l=o(359);r.a.use(l.a)},144:function(t,e,o){"use strict";o(52);var n=o(1),r=o.n(n),l=o(145);r.a.use(l.a),e.a=function(t){var e=t.app,n=t.store;e.i18n=new l.a({locale:n.state.locale,fallbackLocale:"en",messages:{en:o(455)}}),e.i18n.path=function(link){return e.i18n.locale===e.i18n.fallbackLocale?"/".concat(link):"/".concat(e.i18n.locale,"/").concat(link)}}},146:function(t,e,o){"use strict";var n=o(1),r=o.n(n),l=o(147);r.a.component("BarChart",{extends:l.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),r.a.component("LineChart",{extends:l.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},184:function(t,e,o){var content=o(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("82c7a9be",content,!0,{sourceMap:!1})},185:function(t,e,o){var content=o(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("79051960",content,!0,{sourceMap:!1})},186:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("7dcf4d40",content,!0,{sourceMap:!1})},187:function(t,e,o){var content=o(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("657ad568",content,!0,{sourceMap:!1})},188:function(t,e,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("1930a9a0",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("0af91e56",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("56b15182",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},r=(o(406),o(15)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("div",{staticClass:"loading-page"},[t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading-dots"},[o("h3",[t._v("Loading")]),t._v(" "),o("h3",[o("small",{staticClass:"dot one"},[t._v(".")]),o("small",{staticClass:"dot two"},[t._v(".")]),o("small",{staticClass:"dot three"},[t._v(".")])])])}],!1,null,"3c83b890",null);e.default=component.exports},361:function(t,e,o){"use strict";var n=o(132),r=o(133),l=o(134),c=o(135),d={name:"Default",components:{LayoutActiveView:n.default,LayoutFooter:r.default,LayoutOperationsNav:l.default,LayoutSiteNav:c.default}},f=(o(424),o(15)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-root"},[o("div",{staticClass:"page-wrap"},[o("LayoutSiteNav"),t._v(" "),o("LayoutOperationsNav"),t._v(" "),o("LayoutActiveView",[o("nuxt")],1)],1),t._v(" "),o("LayoutFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LayoutSiteNav:o(135).default,LayoutOperationsNav:o(134).default,LayoutActiveView:o(132).default,LayoutFooter:o(133).default})},363:function(t,e,o){t.exports=o.p+"img/logo.f4979ad.png"},365:function(t,e,o){o(366),t.exports=o(367)},406:function(t,e,o){"use strict";o(184)},407:function(t,e,o){var n=o(32)(!1);n.push([t.i,".loading-page[data-v-3c83b890]{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.3);text-align:center;padding-top:430px;font-size:30px;z-index:99}.loading-dots[data-v-3c83b890]{text-align:center;z-index:5;display:inline-block;padding:10px 20px 20px}.loading-dots .dot[data-v-3c83b890]{display:inline;margin-left:.2em;margin-right:.2em;position:relative;top:-.6em;font-size:1.6em;line-height:1em;opacity:0;-webkit-animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite;animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite}.loading-dots .dot.one[data-v-3c83b890]{-webkit-animation-delay:.2s;animation-delay:.2s}.loading-dots .dot.two[data-v-3c83b890]{-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dots .dot.three[data-v-3c83b890]{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}@keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}",""]),t.exports=n},410:function(t,e,o){var content=o(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("2998b330",content,!0,{sourceMap:!1})},411:function(t,e,o){var n=o(32)(!1);n.push([t.i,'html{font-family:"Georama",Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#344c84;overflow-x:hidden}*,:after,:before{box-sizing:border-box;margin:0}.container{position:relative;font-weight:400;padding-top:100px;margin:0 auto;display:block;width:100%}.title{display:block;font-size:40px;font-weight:300;letter-spacing:1px;padding:20px 0 10px}.list-unstyled{list-style:none}.btn,.list-unstyled li{display:inline-block}.btn{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:14px 15px 13px;font-size:12px;line-height:1em;background:#7e1548;border:1px solid #7e1548;color:#fff;text-decoration:none;border-radius:4px;cursor:pointer}.btn:hover{opacity:.9}.btn.btn-default,.btn.btn-primary{color:#fff;text-decoration:none}.btn.btn-primary{background:#3f3363;border-color:#3f3363}.btn.btn-toggle{color:#fff;text-decoration:none}.btn.btn-toggle.nuxt-link-exact-active{color:#fff;background:#7e1548;border-color:#7e1548;text-decoration:none}.btn.btn-link,.btn.btn-link.nuxt-link-exact-active{color:#fff;text-decoration:none}.btn.btn-link.disabled{background:#e8e9eb;border-color:#e8e9eb}.btn.btn-link.disabled,.nuxt-link-exact-active{color:#344c84;text-decoration:none}.form-control{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:10px;font-size:14px;min-width:200px;width:100%;height:auto}@media (max-width:1280px){.form-control{font-size:12px}}select.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;text-indent:10px;line-height:39px;height:41px}select.form-control-native{-webkit-appearance:initial;-moz-appearance:initial;appearance:auto}.form-control-borderless,select.form-control-borderless{border:none;padding:4px 0;height:24px;line-height:21px;text-indent:0}.form-control-lg{min-width:379px;width:100%}.form-control-sm{width:96px;min-width:96px}.pull-left{float:left!important}.pull-right{float:right!important}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.clearfix{display:inline-block}* html .clearfix{height:1%}.clearfix{display:block}*{box-sizing:border-box}.grid{margin-right:-20px}.grid:after{content:"";display:table;clear:both}[class*=col-]{float:left;padding-right:20px}.col-2-3{width:66.66%}.col-1-3{width:33.33%}.col-1-2{width:50%}.col-1-4{width:25%}.col-1-8{width:12.5%}.col-1-1{width:100%}.col-offset-1-3{margin-left:33.33%}.pointer{cursor:pointer}.inline-block{display:inline-block}.relative{position:relative}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.p-20{padding:20px}.m-b-0{margin-bottom:0!important}.m-b-10{margin-bottom:10px}.m-b-20{margin-bottom:20px}.m-b-40{margin-bottom:40px}.m-t-5{margin-top:5px}.m-t-10{margin-top:10px}.m-t-20{margin-top:20px}.m-t-30{margin-top:30px}.m-lr-5{margin-left:5px;margin-right:5px}.m-l-10{margin-left:10px}.m-r-10{margin-right:10px}.m-r-20{margin-right:20px}.m-lr-2{margin-left:2px;margin-right:2px}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;left:-9999px}[type=checkbox]:checked+label,[type=checkbox]:not(:checked)+label{position:relative;padding-left:1.95em;cursor:pointer}[type=checkbox]:checked+label:before,[type=checkbox]:not(:checked)+label:before{content:"";position:absolute;left:0;top:0;width:1.25em;height:1.25em;border:2px solid #ccc;background:#fff;border-radius:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1)}[type=checkbox]:checked+label:after,[type=checkbox]:not(:checked)+label:after{content:"\\2713\\0020";position:absolute;top:.15em;left:.22em;font-size:1.3em;line-height:.8;color:#344c84;transition:all .2s;font-family:"Lucida Sans Unicode","Arial Unicode MS",Arial}[type=checkbox]:not(:checked)+label:after{opacity:0;transform:scale(0)}[type=checkbox]:checked+label:after{opacity:1;transform:scale(1)}[type=checkbox]:disabled:checked+label:before,[type=checkbox]:disabled:not(:checked)+label:before{box-shadow:none;border-color:#bbb;background-color:#ddd}[type=checkbox]:disabled:checked+label:after{color:#999}[type=checkbox]:disabled+label{color:#aaa}[type=checkbox]:checked:focus+label:before,[type=checkbox]:not(:checked):focus+label:before{border:2px dotted #344c84}input.ios-toggle{opacity:0;position:absolute}input.ios-toggle+span{position:relative;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.4s ease;height:20px;width:40px;border:1px solid #aaa;border-radius:60px;cursor:pointer;top:3px;margin-right:3px}input.ios-toggle+span:before{content:"";position:absolute;display:block;transition:.2s cubic-bezier(.24,0,.5,1);height:20px;width:41px;top:0;left:0;border-radius:30px}input.ios-toggle+span:after{content:"";position:absolute;display:block;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 0 0 rgba(0,0,0,.04),0 4px 9px rgba(0,0,0,.13),0 3px 3px rgba(0,0,0,.05);transition:.35s cubic-bezier(.54,1.6,.5,1);background:#f5f5f5;height:18px;width:18px;top:1px;left:0;border-radius:60px}input.ios-toggle:checked+span:before{background:#344c84;transition:width .2s cubic-bezier(0,0,0,.1)}input.ios-toggle:checked+span:after{left:22px}pre{display:block;padding:9.5px;margin:0;font-size:13px;line-height:1.4;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}@media (max-width:1280px){pre{font-size:11px}}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{width:100%;max-height:300px;overflow:auto;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;margin-bottom:0}.truncate{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vab{vertical-align:bottom}.violations{color:#cf4747}.warnings{color:#feba49}.ok{color:#2a94a2}.disabled{color:#000;cursor:not-allowed}.w-100{width:100%}.highlight{color:#44b49c;text-decoration:underline}.highlight:hover{text-decoration:none}.highlight-white{color:#fff;text-decoration:underline}.highlight-white:hover{text-decoration:none}.toasted.bubble.success{color:#fff!important;background:#44b49c!important}.toasted.bubble.error{color:#fff!important;background:#cf4747!important}.toasted.bubble.info{color:#fff!important;background:#344c84!important}.toasted.bubble .action{color:#fff!important;text-decoration:underline!important}.panel{background:#fff;padding:15px;border-radius:10px;margin:10px 0}.view-title{margin-top:15px;margin-bottom:15px}.right-actions{position:absolute;right:0;top:-10px}table{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;text-align:left;padding:8px 8px 8px 0}tr:nth-child(2n){background-color:#ddd}.table-borderless td,.table-borderless th{border:none}.table-borderless tr{border-bottom:1px solid #ddd}.table-borderless tr:nth-child(2n){background-color:transparent}.table-borderless tr:last-child{border-bottom:none}.dropdown-menu{top:100%;right:-5px;position:absolute;z-index:10;height:auto;min-width:auto;margin-top:10px;overflow-y:auto;background-color:#fff;border:1px solid grey;background-clip:padding-box}.dropdown-menu-link{display:flex;align-items:normal;justify-content:flex-end;text-decoration:none;color:rgba(0,0,0,.6);padding:5px 10px}.dropdown-menu-nav{list-style:none;padding:0;text-align:right}.dropdown-menu-link:hover{color:#344c84;background-color:rgba(79,79,79,.1)}.dropdown-menu-text{font-weight:300;margin-left:10px;margin-right:10px}.dropdown-enter-active,.dropdown-leave-active{transition:all .5s}.dropdown-enter,.dropdown-leave-to{opacity:0;transform:translateY(30px)}',""]),t.exports=n},414:function(t,e,o){"use strict";o(185)},415:function(t,e,o){var n=o(32)(!1);n.push([t.i,".active-view{display:block;float:left;width:calc(100% - 460px);background:#f5f5f5;height:100%;min-height:100%}.module-details{overflow-y:auto;overflow-x:hidden;width:100%;float:left;padding:10px 20px}",""]),t.exports=n},416:function(t,e,o){"use strict";o(186)},417:function(t,e,o){var n=o(32)(!1);n.push([t.i,".footer-company-description{margin-top:8px;margin-bottom:0;color:#1155cb}.site-footer{background:#fff;border-top:1px solid #1155cb}.site-footer a{color:#1155cb}.site-footer a:hover{text-decoration:none}",""]),t.exports=n},418:function(t,e,o){"use strict";o(187)},419:function(t,e,o){var n=o(32)(!1);n.push([t.i,'.add-action{margin:10px auto;display:inline-block;border-radius:50%;width:40px;height:40px;line-height:38px;color:#1155cb;border:1px solid #1155cb}.add-action,add-action-icon{font-size:2em}.operation-nav{display:block;float:left;height:100%;min-height:100%;width:400px;overflow-y:auto;overflow-x:hidden;background:#fff;border-right:1px solid #1155cb}.operation-features{list-style:none;padding:0;float:left;width:100%}.operation-feature{display:inline-block;background:#fff;float:left;position:relative;width:100%}.operation-features>.operation-feature>.operation-item{font-weight:700}.operation-item{text-decoration:none;color:#043558;line-height:30px;padding:5px;display:inline-block;width:100%;border:1px solid #1155cb;text-align:left}.operation-next{content:" ";display:none;width:24px;height:30px;line-height:28px;position:absolute;top:100%;left:50%;color:#1155cb;margin-left:-12px;z-index:1;font-size:28px;text-align:center}.operation-feature:not(:last-child) .operation-item .operation-next{display:inline-block}.operation-next-add .add-action{display:none;font-size:10px;border-radius:50%;width:16px;height:16px;line-height:13px;background:#fff;margin-top:0;margin-bottom:0;margin-left:-8px;left:50%;position:absolute;top:3px;z-index:1}.operation-next:hover .operation-next-add .add-action{display:inline-block}.operation-feature.active .operation-item,.operation-item:hover,.operation-subfeature.active .operation-item{background:#f5f5f5}.operation-sublist .operation-item{padding-left:40px}.operation-text{line-height:15px}.w-80{width:80%}.feature-icon{font-size:1.3em;vertical-align:middle;width:20px!important;text-align:center;display:inline-block}.text-ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=n},420:function(t,e,o){"use strict";o(188)},421:function(t,e,o){var n=o(32)(!1);n.push([t.i,".logo{height:48px;width:auto;display:inline-block}",""]),t.exports=n},422:function(t,e,o){"use strict";o(189)},423:function(t,e,o){var n=o(32)(!1);n.push([t.i,".site-logo{margin:20px auto 24px}.site-nav{display:block;float:left;height:100%;min-height:100%;width:60px;overflow-y:auto;overflow-x:hidden;background:#fff;position:relative;border-right:1px solid #1155cb}.site-modules{list-style:none;padding:0;float:left;width:100%;text-align:center}.site-modules-bottom{position:absolute;bottom:0;left:0}.site-modules-bottom .site-module:first-child{border-top:1px solid #1155cb}.site-modules-bottom .site-module:last-child{border-bottom:none}.site-module{background:transparent;float:left;border-bottom:1px solid #1155cb;position:relative}.module-link,.site-module{display:inline-block;width:100%}.module-link{text-decoration:none;color:#1155cb;line-height:30px;padding:10px 20px}.module-link:hover,.site-module.active .module-link{background:hsla(0,0%,100%,.2)}.module-icon{font-size:1.3em;vertical-align:middle;text-align:center}",""]),t.exports=n},424:function(t,e,o){"use strict";o(190)},425:function(t,e,o){var n=o(32)(!1);n.push([t.i,'#__layout,#__nuxt,.app-root,body,html{height:100%}.page-wrap{min-height:100%;margin-bottom:-30px;background:#efefef}.page-wrap:after{content:"";display:block}.page-wrap:after,.site-footer{height:30px}.site-footer{padding:0 10px;color:#fff;position:relative}',""]),t.exports=n},426:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return f})),o.d(e,"getters",(function(){return m})),o.d(e,"mutations",(function(){return h})),o.d(e,"actions",(function(){return x}));var n=o(9),r=(o(39),o(36),o(182),o(46),o(53),o(51),o(104),o(20),o(101),o(458)),l=o(76),c=o(427).operations,d=o(428).version,f=function(){return{languages:[{title:"English",code:"en"}],locale:"en",appVersion:d,appOperations:[],allOperations:c,availableOperations:[],appData:[{link:"/",code:"m1",name:"Designer",icon:"boxes-stacked",views:[{code:"OVERVIEW",name:"Overview",icon:"th-large",type:"pageA"},{code:"PRODUCT",name:"Product data",icon:"boxes",views:[{code:"PRODUCT:VARIANTS",name:"Variants",icon:"list",type:"pageB"},{code:"PRODUCT:VERSIONS",name:"Versions",icon:"tasks",type:"pageC"},{code:"PRODUCT:BALANCE",name:"Balance",icon:"balance-scale",type:"pageD"}]},{code:"DRAFTS",name:"Drafts",icon:"pencil-ruler",type:"pageE"}]}],tabs:["m1:OVERVIEW","m1:PRODUCT:VERSIONS"],activeModule:"m1",activeView:"m1:PRODUCT:VERSIONS",operationsModel:{}}},m={availableOperations:function(t){return t.availableOperations},operationsModel:function(t){return t.operationsModel}},h={SET_ACTIVE_MODULE:function(t,e){t.activeModule=e},ADD_TAB:function(t,e){t.tabs.push(e)},REMOVE_TAB:function(t,e){t.tabs=t.tabs.filter((function(t){return t!==e}))},REMOVE_ACTIVE:function(t,e){var o=t.tabs.indexOf(e);t.activeView=t.tabs.length>1?o>0?t.tabs[o-1]:t.tabs[0]:null},SET_ACTIVE_VIEW:function(t,e){t.activeView=e},SET_AVAILABLE_OPERATIONS:function(t,e){t.availableOperations=e},ADD_ACTIVE_OPERATION:function(t,e){var o=e.operation,n=e.after,c=t.appOperations.length,d=l.a.getObjectCopy(o);d.id=Object(r.a)(),t.appOperations.splice(n||c,0,d)},REMOVE_ACTIVE_OPERATION:function(t,e){t.appOperations=t.appOperations.filter((function(t){return t.id!==e}))},SET_OPERATIONS_MODEL:function(t,data){t.operationsModel=data}},x={addOperation:function(t,e){var o=t.commit;t.state;o("ADD_ACTIVE_OPERATION",{operation:e.operation,after:e.after})},removeOperation:function(t,e){var o=t.commit;t.state;o("REMOVE_ACTIVE_OPERATION",e)},activateModule:function(t,e){var o=t.commit;t.state;o("SET_ACTIVE_MODULE",e)},activateTab:function(t,e){var o=t.commit,n=t.state;o("SET_ACTIVE_VIEW",e),n.tabs.includes(e)||o("ADD_TAB",e)},closeTab:function(t,e){var o=t.commit;e===t.state.activeView&&o("REMOVE_ACTIVE",e),o("REMOVE_TAB",e)},getAvailableOperations:function(t,e){var o=t.commit,n=t.state,r=e.search,filter=r&&r.toLowerCase();o("SET_AVAILABLE_OPERATIONS",filter?n.allOperations.filter((function(t){return t.name&&t.name.toLowerCase().includes(filter)||t.version&&t.version.toLowerCase().includes(filter)||t.tags&&t.tags.find((function(t){return t.toLowerCase().includes(filter)})).length})):n.allOperations)},getApiDetails:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var r,path,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,t.state,path=e.path,r("SET_OPERATIONS_MODEL",!1),n.prev=3,n.next=6,o.$axios.$get("".concat(path,"get.json"));case 6:data=n.sent,r("SET_OPERATIONS_MODEL",data),console.log(data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}},427:function(t){t.exports=JSON.parse('{"operations":[{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea2","version":"1.0.0","name":"Get file(s) from (S)FTP server","description":"Retrieves one or more files specified by full path from FTP server","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":1,"category":"FILE","resultDescription":"","isContainerOp":false,"searchTags":["FTP","file","pull file from ftp","retrieve file from FTP"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea3","version":"1.0.0","name":"List files in (S)FTP directory","description":"Lists the contents of the remote working directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":3,"category":"FILE","resultDescription":"List of file details","isContainerOp":false,"searchTags":["ftp","list files in directory"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea4","version":"1.0.0","name":"Put FTP file","description":"Puts file into remote (S)FTP directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":2,"category":"FILE","resultDescription":"List of file details of transfered files","isContainerOp":false,"searchTags":["ftp","list files in directory"]},{"id":"4cc8bca6-07c3-4bd7-b035-9047a6bfeea5","version":"1.0.0","name":"delete remote FTP file","description":"Deletes a file from the remote working directory","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"7020fba8-f581-41e8-a5a3-022c7ef10a95","sequenceInGroup":4,"category":"FILE","resultDescription":"Information on deleted file","isContainerOp":false,"searchTags":["ftp","delete file in (S)ftp remote directory"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb38","version":"1.0.0","name":"Groovy Map","description":"Map data using grooy","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"aef2cf7e-14b6-4f99-9ca5-e85d17d1ab24","sequenceInGroup":1,"category":"MAPPING","resultDescription":"Data transformation of one data structue into another","isContainerOp":false,"searchTags":["Map data","data mapping","data transformation","groovy"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb39","version":"1.0.0","name":"Retrieve messages","description":"Retrieve messages from Kafka topic","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"5faf3d6c-f0e8-4540-b903-c656820ffc43","sequenceInGroup":1,"category":"KAFKA","resultDescription":"List of messages in data pipeline","isContainerOp":false,"searchTags":["messaging","read messages","kafka","read message"]},{"id":"be35e877-f176-4af3-b48f-a2fa72f3fb40","version":"1.0.0","name":"Send messages","description":"Send messages to Kafka topic","lastUpdated":"2018-12-10T13:49:51.141Z","builtIn":true,"groupId":"5faf3d6c-f0e8-4540-b903-c656820ffc43","sequenceInGroup":2,"category":"KAFKA","resultDescription":"One or many messsages are sent to Kafka topic","isContainerOp":false,"searchTags":["messaging","send messages","kafka","send message"]}]}')},428:function(t){t.exports=JSON.parse('{"name":"admin-area","version":"0.7.1","private":true,"scripts":{"dev":"nuxt","build-prod":"NODE_ENV=prod nuxt build","build":"nuxt build","start":"nuxt start","generate":"nuxt generate","lint:fix":"eslint --fix --ext \\".js,.vue\\" --ignore-path .gitignore .","lint:js":"eslint --ext \\".js,.vue\\" --ignore-path .gitignore .","lint":"yarn lint:js"},"dependencies":{"@fortawesome/free-brands-svg-icons":"^6.2.0","@fortawesome/free-regular-svg-icons":"^6.2.0","@fortawesome/free-solid-svg-icons":"^6.2.0","@nuxt/content":"^1.14.0","@nuxtjs/axios":"^5.13.6","@nuxtjs/dotenv":"^1.4.1","@nuxtjs/pwa":"^3.3.5","@nuxtjs/robots":"^2.5.0","@nuxtjs/sitemap":"^2.4.0","@nuxtjs/toast":"^3.3.1","body-parser":"^1.20.1","chart.js":"^2.9.4","core-js":"^3.15.1","express":"^4.18.2","nuxt":"^2.15.7","nuxt-fontawesome":"^0.4.0","uuid":"^9.0.0","vue-chartjs":"^3.5.1","vue-i18n":"^8.25.0","vue-underscore":"^0.1.4"},"devDependencies":{"@babel/eslint-parser":"^7.14.7","@nuxtjs/eslint-config":"^6.0.1","@nuxtjs/eslint-module":"^3.0.2","eslint":"^7.29.0","eslint-plugin-nuxt":"^2.0.0","eslint-plugin-vue":"^7.12.1"}}')},455:function(t){t.exports=JSON.parse('{"index":{"title":"Main page","description":"Main page"}}')},457:function(t,e,o){var map={"./af":210,"./af.js":210,"./ar":211,"./ar-dz":212,"./ar-dz.js":212,"./ar-kw":213,"./ar-kw.js":213,"./ar-ly":214,"./ar-ly.js":214,"./ar-ma":215,"./ar-ma.js":215,"./ar-sa":216,"./ar-sa.js":216,"./ar-tn":217,"./ar-tn.js":217,"./ar.js":211,"./az":218,"./az.js":218,"./be":219,"./be.js":219,"./bg":220,"./bg.js":220,"./bm":221,"./bm.js":221,"./bn":222,"./bn-bd":223,"./bn-bd.js":223,"./bn.js":222,"./bo":224,"./bo.js":224,"./br":225,"./br.js":225,"./bs":226,"./bs.js":226,"./ca":227,"./ca.js":227,"./cs":228,"./cs.js":228,"./cv":229,"./cv.js":229,"./cy":230,"./cy.js":230,"./da":231,"./da.js":231,"./de":232,"./de-at":233,"./de-at.js":233,"./de-ch":234,"./de-ch.js":234,"./de.js":232,"./dv":235,"./dv.js":235,"./el":236,"./el.js":236,"./en-au":237,"./en-au.js":237,"./en-ca":238,"./en-ca.js":238,"./en-gb":239,"./en-gb.js":239,"./en-ie":240,"./en-ie.js":240,"./en-il":241,"./en-il.js":241,"./en-in":242,"./en-in.js":242,"./en-nz":243,"./en-nz.js":243,"./en-sg":244,"./en-sg.js":244,"./eo":245,"./eo.js":245,"./es":246,"./es-do":247,"./es-do.js":247,"./es-mx":248,"./es-mx.js":248,"./es-us":249,"./es-us.js":249,"./es.js":246,"./et":250,"./et.js":250,"./eu":251,"./eu.js":251,"./fa":252,"./fa.js":252,"./fi":253,"./fi.js":253,"./fil":254,"./fil.js":254,"./fo":255,"./fo.js":255,"./fr":256,"./fr-ca":257,"./fr-ca.js":257,"./fr-ch":258,"./fr-ch.js":258,"./fr.js":256,"./fy":259,"./fy.js":259,"./ga":260,"./ga.js":260,"./gd":261,"./gd.js":261,"./gl":262,"./gl.js":262,"./gom-deva":263,"./gom-deva.js":263,"./gom-latn":264,"./gom-latn.js":264,"./gu":265,"./gu.js":265,"./he":266,"./he.js":266,"./hi":267,"./hi.js":267,"./hr":268,"./hr.js":268,"./hu":269,"./hu.js":269,"./hy-am":270,"./hy-am.js":270,"./id":271,"./id.js":271,"./is":272,"./is.js":272,"./it":273,"./it-ch":274,"./it-ch.js":274,"./it.js":273,"./ja":275,"./ja.js":275,"./jv":276,"./jv.js":276,"./ka":277,"./ka.js":277,"./kk":278,"./kk.js":278,"./km":279,"./km.js":279,"./kn":280,"./kn.js":280,"./ko":281,"./ko.js":281,"./ku":282,"./ku.js":282,"./ky":283,"./ky.js":283,"./lb":284,"./lb.js":284,"./lo":285,"./lo.js":285,"./lt":286,"./lt.js":286,"./lv":287,"./lv.js":287,"./me":288,"./me.js":288,"./mi":289,"./mi.js":289,"./mk":290,"./mk.js":290,"./ml":291,"./ml.js":291,"./mn":292,"./mn.js":292,"./mr":293,"./mr.js":293,"./ms":294,"./ms-my":295,"./ms-my.js":295,"./ms.js":294,"./mt":296,"./mt.js":296,"./my":297,"./my.js":297,"./nb":298,"./nb.js":298,"./ne":299,"./ne.js":299,"./nl":300,"./nl-be":301,"./nl-be.js":301,"./nl.js":300,"./nn":302,"./nn.js":302,"./oc-lnc":303,"./oc-lnc.js":303,"./pa-in":304,"./pa-in.js":304,"./pl":305,"./pl.js":305,"./pt":306,"./pt-br":307,"./pt-br.js":307,"./pt.js":306,"./ro":308,"./ro.js":308,"./ru":309,"./ru.js":309,"./sd":310,"./sd.js":310,"./se":311,"./se.js":311,"./si":312,"./si.js":312,"./sk":313,"./sk.js":313,"./sl":314,"./sl.js":314,"./sq":315,"./sq.js":315,"./sr":316,"./sr-cyrl":317,"./sr-cyrl.js":317,"./sr.js":316,"./ss":318,"./ss.js":318,"./sv":319,"./sv.js":319,"./sw":320,"./sw.js":320,"./ta":321,"./ta.js":321,"./te":322,"./te.js":322,"./tet":323,"./tet.js":323,"./tg":324,"./tg.js":324,"./th":325,"./th.js":325,"./tk":326,"./tk.js":326,"./tl-ph":327,"./tl-ph.js":327,"./tlh":328,"./tlh.js":328,"./tr":329,"./tr.js":329,"./tzl":330,"./tzl.js":330,"./tzm":331,"./tzm-latn":332,"./tzm-latn.js":332,"./tzm.js":331,"./ug-cn":333,"./ug-cn.js":333,"./uk":334,"./uk.js":334,"./ur":335,"./ur.js":335,"./uz":336,"./uz-latn":337,"./uz-latn.js":337,"./uz.js":336,"./vi":338,"./vi.js":338,"./x-pseudo":339,"./x-pseudo.js":339,"./yo":340,"./yo.js":340,"./zh-cn":341,"./zh-cn.js":341,"./zh-hk":342,"./zh-hk.js":342,"./zh-mo":343,"./zh-mo.js":343,"./zh-tw":344,"./zh-tw.js":344};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=457},76:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(16),r={categoryToIcon:function(t){return function(t){switch(t){case"FILE":return"folder-tree";case"MAPPING":return"sliders";case"KAFKA":return"atom";default:return"plus"}}(t)},getObjectCopy:function(t){return function(t){if(t&&"object"===Object(n.a)(t)){var e={};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&(e[p]=t[p]);return e}return t}(t)}}}},[[365,11,1,3,2,4,13,12,14,18,16,21,17,15,22,19,20]]]);