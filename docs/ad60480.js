(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{496:function(e,t,r){"use strict";r.r(t);r(30),r(29),r(52),r(53);var n=r(17),o=r(11),l=(r(44),r(24),r(23),r(41),r(45)),c=r(38);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"FormBuilder",props:{fields:{type:Array,default:null},model:{type:Object,default:null},entry:{type:String,default:null}},data:function(){return{currentTab:"",formData:{},cmOptions:{mode:"text/x-groovy",tabSize:4,styleActiveLine:!0,autofocus:!0,lineNumbers:!0,line:!0,matchBrackets:!0}}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.formData={},t.next=3,c.a.getObjectCopy(e.model);case 3:e.formData=t.sent,e.fields.forEach((function(t){e.initDefault(t)}));case 5:case"end":return t.stop()}}),t)})))()},watch:{model:"$fetch"},methods:m(m({},Object(l.b)({updateStore:"updateStore"})),{},{initDefault:function(e){e&&this.formData&&!this.formData[e.name]&&(this.formData[e.name]=this.formData&&this.formData[e.name]?this.formData[e.name]:e.defaultValue)},fieldsMapped:function(){return c.a.groupBy(this.fields,"group")},fieldsByGroup:function(e){var t=this.fieldsMapped();return e?t[e]:t[Object.keys(t)[0]]},getTabClasses:function(e){if(!this.currentTab){var t=this.fieldsMapped();this.currentTab=Object.keys(t)[0]}return this.currentTab===e?"btn-default":"btn-primary"}})},v=r(6),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.fields&&e.fields.length?r("div",{staticClass:"form-builder"},[Object.keys(e.fieldsMapped()).length>1?r("div",{staticClass:"m-b-10"},e._l(e.fieldsMapped(),(function(t,n){return r("button",{key:n,staticClass:"btn m-r-3",class:e.getTabClasses(n),attrs:{type:"button"},on:{click:function(t){e.currentTab=n}}},[e._v("\n      "+e._s(n)+"\n    ")])})),0):e._e(),e._v(" "),e._l(e.fieldsByGroup(e.currentTab),(function(t){return r("div",{key:t.name,staticClass:"m-b-10"},["STRING"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData[t.name],expression:"formData[property.name]"}],staticClass:"form-control",attrs:{placeholder:t.description+(t.isOptional?"":" *"),required:!t.isOptional,type:"text"},domProps:{value:e.formData[t.name]},on:{change:function(t){return e.updateStore({entryId:e.entry,value:e.formData})},input:function(r){r.target.composing||e.$set(e.formData,t.name,r.target.value)}}}):e._e(),e._v(" "),"NUMBER"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData[t.name],expression:"formData[property.name]"}],staticClass:"form-control",attrs:{placeholder:t.description+(t.isOptional?"":" *"),required:!t.isOptional,type:"number"},domProps:{value:e.formData[t.name]},on:{change:function(t){return e.updateStore({entryId:e.entry,value:e.formData})},input:function(r){r.target.composing||e.$set(e.formData,t.name,r.target.value)}}}):e._e(),e._v(" "),"SCRIPT"===t.type?r("client-only",[r("codemirror",{attrs:{options:e.cmOptions,placeholder:t.description+(t.isOptional?"":" *"),required:!t.isOptional},on:{input:function(t){return e.updateStore({entryId:e.entry,value:e.formData})}},model:{value:e.formData[t.name],callback:function(r){e.$set(e.formData,t.name,r)},expression:"formData[property.name]"}})],1):e._e(),e._v(" "),"BOOLEAN"===t.type?r("label",{staticClass:"form-control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData[t.name],expression:"formData[property.name]"}],staticClass:"ios-toggle",attrs:{required:!t.isOptional,type:"checkbox"},domProps:{checked:Array.isArray(e.formData[t.name])?e._i(e.formData[t.name],null)>-1:e.formData[t.name]},on:{change:[function(r){var n=e.formData[t.name],o=r.target,l=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&e.$set(e.formData,t.name,n.concat([null])):c>-1&&e.$set(e.formData,t.name,n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.formData,t.name,l)},function(t){return e.updateStore({entryId:e.entry,value:e.formData})}]}}),e._v(" "),r("span"),e._v(" "),r("span",{staticClass:"m-lr-2"},[e._v(e._s(t.description+(t.isOptional?"":" *")))])]):e._e(),e._v(" "),"ENUM"===t.type?r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData[t.name],expression:"formData[property.name]"}],staticClass:"form-control form-control-native",on:{change:[function(r){var n=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,t.name,r.target.multiple?n:n[0])},function(t){return e.updateStore({entryId:e.entry,value:e.formData})}]}},e._l(t.enums,(function(n){return r("option",{key:n,attrs:{label:n},domProps:{value:n,selected:e.formData&&e.formData[t.name]&&e.formData[t.name]===n}},[e._v("\n        "+e._s(n)+"\n      ")])})),0):e._e()],1)}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},521:function(e,t,r){"use strict";r.r(t);r(41),r(30),r(29),r(52),r(24),r(53);var n=r(17),o=r(11),l=(r(44),r(45));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{FormBuilder:r(496).default},layout:"flows",scrollToTop:!0,asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("getApiDetails",{path:"api/flows/model/"});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{formData:{},storePropName:"addFlow"}},head:function(){return{title:"Add trigger"}},computed:f({},Object(l.c)({operationsModel:"operationsModel"})),watchQuery:["id"],methods:f(f({},Object(l.b)({addFlow:"addFlow"})),{},{getFields:function(){return this.operationsModel&&this.operationsModel.properties||[]},getFormData:function(){return this.flow&&this.flow.properties||{}},featureIsNotAvailable:function(){this.$toast.error("This feature is not yet available")}})},d=r(6),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"clearfix relative"},[r("h2",{staticClass:"view-title"},[r("fa",{attrs:{icon:["fas","plus"]}}),e._v(" Create flow\n    ")],1),e._v(" "),e.getFields().length?r("form",{staticClass:"m-b-20",on:{submit:function(t){return t.preventDefault(),e.addFlow({entryId:e.storePropName})}}},[e._m(0),e._v(" "),r("FormBuilder",{attrs:{model:e.getFormData(),fields:e.getFields(),entry:e.storePropName}}),e._v(" "),e._m(1)],1):e._e()])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"m-b-20"},[r("b",[e._v("Define flow properties")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n          Create\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{FormBuilder:r(496).default})}}]);