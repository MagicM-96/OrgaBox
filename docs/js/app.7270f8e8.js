(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},a=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"52ca2cca"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}i[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("router-link",{attrs:{to:"/",replace:""}},[n("v-img",{attrs:{src:o("f987"),"max-width":"45",height:"45"}})],1),t._v("\n     \n    "),n("v-toolbar-title",{staticClass:"headline"},[n("router-link",{attrs:{to:"/",replace:""}},[n("span",[t._v("OrgaBox")])])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(){return t.$router.replace("/export")}}},[n("v-icon",[t._v("mdi-export")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(){return t.$router.replace("/search")}}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(){return t.$router.replace("/about")}}},[n("v-list-item-title",[t._v("About")])],1),n("v-list-item",{on:{click:function(){return t.$router.replace("/export")}}},[n("v-list-item-title",[t._v("Export")])],1),n("v-list-item",{on:{click:function(){return t.$router.replace("/import")}}},[n("v-list-item-title",[t._v("Import")])],1),n("v-list-item",{on:{click:function(){return t.$router.replace("/search")}}},[n("v-list-item-title",[t._v("Search")])],1)],1)],1)],1),n("v-content",[n("v-container",[n("router-view")],1)],1),n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"lighten-1 text-center",attrs:{tile:"",width:"100%"}},[n("v-card-text",[t._v("\n        Version "),n("router-link",{attrs:{to:"/about",replace:""}},[t._v(t._s(t.version.version))]),t._v(" ("+t._s(t.version.date)+") © 2019 — "),n("strong",[t._v("E.M.Baudert")])],1)],1)],1)],1)},a=[],r=o("2f62"),s=o("c64e");n["a"].use(r["a"]);var c=new r["a"].Store({state:{boxes:[],items:{},version:{version:"0.8.2",date:"2019-12-09 16:32"},changelog:{"0.1.1":"Begin with the app. First implementation of the key functionality. Got a persistens state.","0.1.2":'Added a correct title and an icon. Also added the "about" page and some changes in the box/items view.',"0.2.1":"The app now looks like something. Highlights: You now can add new boxes and items. Display your Boxes and items.","0.2.2":"It is now possible to press enter on create Box/Item. Also it is controlled now, whether you entered all required data.","0.2.3":"Now the app icon is visible in the top bar.","0.3.1":"It is now possible to edit and remove Items from inside a box.","0.3.2":"Now the update of the app should also work properly on iOS.","0.4.1":"You are now able to move items from one box to another.","0.5.1":"You now can rename and remove boxes.","0.5.2":"The validation of forms works now correct when you close the dialog and reopen it.","0.6.1":"It is now possible to search for items by title. The search and options icon were added to the title bar of the app.","0.6.2":"Items also can be searched by their description.","0.6.3":"The Search results have been prettyfied.","0.6.4":"Now a text is displayed when there are no search results.","0.6.5":'Bugfix: Cancel button didn\'t work properly on the "delete box" and "delete item" dialog.',"0.7.1":"QR Codes are now added to the app. You can create a QR Code for every box and save it with a screenshot.","0.7.2":"The dialogs on the home screen didn't work properly when they are closed by tapping beside them. As a result it now isn't possible anymore to close dialogs by tapping beside them but by tapping \"cancel\".","0.7.3":"Changed the icon for creating the QR code of a box in the heading. Bugfix: Changed closing animation of dialogs so you now don't see the dialog changing. The QR Code is now displayed in a pop-up so it can be screenshotted better.","0.8.1":"Added Export/Import. Added the export icon in the top bar. Added Import, Export and search as menu options. Export/Import as JSON is possible. It is possible to copy the export to the clipboard.","0.8.2":"Sometimes the icons weren't accessible offline. This should be fixed now!"}},mutations:{loadSave:function(t,e){t.items=e.items,t.boxes=e.boxes},addItem:function(t,e){var o={title:e.title,stock:e.ammount,description:e.description},n=s();t.items[n]=o,t.boxes[e.box].items.push(n)},modifyItem:function(t,e){t.items[e.id].title=e.title,t.items[e.id].stock=e.ammount,t.items[e.id].description=e.description},moveItem:function(t,e){t.boxes[e.fromBox].items.splice(t.boxes[e.fromBox].items.indexOf(e.item),1),t.boxes[e.toBox].items.push(e.item)},removeItem:function(t,e){t.boxes[e.box].items.splice(t.boxes[e.box].items.indexOf(e.item),1),delete t.items[e.item]},modifyBox:function(t,e){t.boxes[e.index].name=e.title},addBox:function(t,e){t.boxes.push({name:e,items:[]})},removeBox:function(t,e){t.boxes.splice(e,1)}},actions:{}}),l={name:"App",data:function(){return{version:c.state.version}}},d=l,u=(o("cc77"),o("2877")),m=o("6544"),v=o.n(m),f=o("7496"),p=o("40dc"),h=o("8336"),b=o("b0af"),x=o("99d9"),g=o("a523"),k=o("a75b"),y=o("553a"),w=o("132d"),A=o("adda"),V=o("8860"),T=o("da13"),_=o("5d23"),S=o("e449"),I=o("2fa4"),E=o("2a7f"),B=Object(u["a"])(d,i,a,!1,null,"143ae7f6",null),R=B.exports;v()(B,{VApp:f["a"],VAppBar:p["a"],VBtn:h["a"],VCard:b["a"],VCardText:x["b"],VContainer:g["a"],VContent:k["a"],VFooter:y["a"],VIcon:w["a"],VImg:A["a"],VList:V["a"],VListItem:T["a"],VListItemTitle:_["b"],VMenu:S["a"],VSpacer:I["a"],VToolbarTitle:E["a"]});var N=o("8c4f"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Home")},O=[],q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{"text-center":"",wrap:""}},[t.boxes.length>0?t._l(t.boxes,(function(e,n){return o("box",{key:e.name,attrs:{id:n,box:e},on:{edit:function(e){return t.edit(e)},delete:function(e){return t.remove(e)}}})})):o("h2",[t._v("You don't have any boxes! Get started and create one!")])],2),o("br"),o("v-btn",{attrs:{absolute:"",fab:""},on:{click:function(e){t.dialog=!0}}},[o("v-icon",[t._v("mdi-plus")])],1),o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[void 0,o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v(t._s("edit"===t.mode?"Edit":"delete"===t.mode?"Delete":"Add")+" Box")])]),o("v-card-text",["delete"===t.mode?o("v-container",[t._v('\n            Are you sure you want to remove the box "'+t._s(t.boxes[t.activeBox].name)+'" '),o("b",[t._v("and all items inside it")]),t._v("?\n          ")]):o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[o("v-text-field",{attrs:{rules:[function(t){return!!t||"Input is required"}],label:"Box name*",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add()}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1)],1),o("small",[t._v("*indicates required field")])],1)],1),o("v-card-actions",[o("div",{staticClass:"flex-grow-1"}),o("v-btn",{on:{click:function(e){return t.cancel()}}},[t._v("Cancel")]),"delete"===t.mode?o("v-btn",{on:{click:function(e){return t.confirmRemove()}}},[t._v("Delete")]):o("v-btn",{attrs:{disabled:!t.valid},on:{click:function(e){return t.add()}}},[t._v(t._s("edit"===t.mode?"Edit":"Add"))])],1)],1)],2)],1)],1)},F=[],H=(o("ac6a"),o("7f7f"),o("5118")),P={data:function(){return{dialog:!1,title:"",valid:!1,mode:"default",activeBox:void 0}},computed:{boxes:function(){return this.$store.state.boxes}},methods:{add:function(){this.valid&&("edit"===this.mode?this.$store.commit("modifyBox",{index:this.activeBox,title:this.title}):this.$store.commit("addBox",this.title),this.cancel())},cancel:function(){var t=this;this.dialog=!1,Object(H["setTimeout"])((function(){"delete"!==t.mode&&t.$refs.form.reset(),t.mode="default",t.activeBox=void 0}),200)},edit:function(t){this.mode="edit",this.title=this.boxes[t].name,this.activeBox=t,this.dialog=!0},remove:function(t){this.mode="delete",this.title=this.boxes[t].name,this.activeBox=t,this.dialog=!0},confirmRemove:function(){var t=this,e=[];this.boxes[this.activeBox].items.forEach((function(t){e.push(t)})),e.forEach((function(e){t.$store.commit("removeItem",{box:t.activeBox,item:e})})),this.$store.commit("removeBox",this.activeBox),this.cancel()}}},M=P,j=o("62ad"),D=o("169a"),L=o("4bd4"),X=o("a722"),Z=o("0fd9"),J=o("8654"),Y=Object(u["a"])(M,q,F,!1,null,null,null),G=Y.exports;v()(Y,{VBtn:h["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:j["a"],VContainer:g["a"],VDialog:D["a"],VForm:L["a"],VIcon:w["a"],VLayout:X["a"],VRow:Z["a"],VTextField:J["a"]});var z={components:{Home:G}},Q=z,W=Object(u["a"])(Q,C,O,!1,null,null,null),U=W.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return void 0!==t.box?o("v-container",[o("h1",[t._v('Box "'+t._s(t.box.name)+'" '),o("v-icon",{attrs:{"x-large":"",color:"rgba(0,0,0,1)",right:""},on:{click:function(e){return t.createQR()}}},[t._v("mdi-qrcode-plus")])],1),o("v-icon",{attrs:{"x-large":""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("mdi-arrow-left-circle-outline")]),o("br"),o("br"),o("item",{attrs:{items:t.box.items},on:{edit:function(e){return t.edit(e)},move:function(e){return t.move(e)},delete:function(e){return t.remove(e)}}}),o("br"),o("v-btn",{on:{click:function(e){t.dialog=!0}}},[t._v("Add new item")]),t._v(" "),o("v-btn",{on:{click:function(e){return t.createQR()}}},[t._v("Create QR Code")]),o("br"),o("br"),o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",["qrcode"!==t.mode?o("span",{staticClass:"headline"},[t._v(t._s(t.dialogTitle)+" Item")]):o("span",[t._v(t._s(t.box.name))])]),o("v-card-text",["delete"===t.mode?o("v-container",[o("h2",[t._v('Are you sure you want to delete "'+t._s(t.items[t.activeItem].title)+'"?')])]):"qrcode"===t.mode?o("v-container",[o("div",{attrs:{id:"container"}}),o("br"),o("h2",[t._v("Save this QR Code by taking a Screenshot")])]):"move"===t.mode?o("v-container",[o("v-select",{attrs:{items:t.moveBoxes,label:"Move to",solo:""},model:{value:t.toBox,callback:function(e){t.toBox=e},expression:"toBox"}})],1):o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[o("v-text-field",{attrs:{rules:t.notEmptyRule,label:"Item name*",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add()}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),o("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[o("v-text-field",{attrs:{rules:t.numberRules,label:"Ammount*",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add()}},model:{value:t.ammount,callback:function(e){t.ammount=e},expression:"ammount"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1),o("small",[t._v("*indicates required field")])],1)],1),o("v-card-actions",[o("div",{staticClass:"flex-grow-1"}),o("v-btn",{on:{click:function(e){return t.cancel()}}},[t._v("Cancel")]),"qrcode"===t.mode?o("span"):"delete"===t.mode?o("v-btn",{on:{click:function(e){return t.acceptRemove()}}},[t._v("Delete")]):"move"===t.mode?o("v-btn",{attrs:{disabled:void 0===t.toBox},on:{click:function(e){return t.performMove()}}},[t._v("Move")]):o("v-btn",{attrs:{disabled:!t.valid},on:{click:function(e){return t.add()}}},[t._v(t._s("default"===t.mode?"Add":"Save"))])],1)],1)],1)],1),o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n  ")])],1):o("v-container",[o("h1",[t._v("Box 404")]),o("v-icon",{attrs:{"x-large":""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("mdi-arrow-left-circle-outline")])],1)},$=[],tt=(o("c5f6"),o("3b2b"),o("d055")),et={data:function(){return{activeItem:"",dialog:!1,mode:"default",title:"",ammount:"",toBox:void 0,description:"",snackbar:!1,snackbarText:"",valid:!0,notEmptyRule:[function(t){return!!t||"Input is required"}],numberRules:[function(t){return!!t||"Input is required"},function(t){return new RegExp(/^[1-9][0-9]*$/gim).test(t)||"Input must be a number"}]}},computed:{box:function(){return this.$store.state.boxes[this.$route.params.id]},items:function(){return this.$store.state.items},dialogTitle:function(){switch(this.mode){case"edit":return"Edit";case"delete":return"Delete";case"move":return"Move";case"default":default:return"Add"}},moveBoxes:function(){var t=this,e=[];return this.$store.state.boxes.forEach((function(o,n){n!==Number(t.$route.params.id)&&e.push({text:o.name,value:n})})),e}},methods:{add:function(){this.valid?("default"===this.mode?this.$store.commit("addItem",{title:this.title,ammount:this.ammount,description:this.description,box:this.$route.params.id}):this.$store.commit("modifyItem",{title:this.title,ammount:this.ammount,description:this.description,id:this.activeItem}),this.cancel()):(this.snackbarText="Please add all required data!",this.snackbar=!0)},acceptRemove:function(){this.$store.commit("removeItem",{box:this.$route.params.id,item:this.activeItem}),this.cancel()},createQR:function(){var t=this;this.mode="qrcode",this.dialog=!0,Object(H["setTimeout"])((function(){tt.toCanvas(t.createBoxText(),{errorCorrectionLevel:"L"},(function(t,e){if(t)throw t;var o=document.getElementById("container");o.childElementCount>0&&o.removeChild(o.lastElementChild),o.appendChild(e)}))}),1)},createBoxText:function(){var t=this,e="Items:\n";return this.box.items.forEach((function(o){e+="".concat(t.items[o].title,": ").concat(t.items[o].stock," time(s)\n")})),e.length>2953&&(alert("The text is to large and is therefore shortened!"),e=e.substring(0,2953)),e},edit:function(t){this.activeItem=t,this.mode="edit",this.title=this.items[t].title,this.ammount=this.items[t].stock,this.description=this.items[t].description,this.dialog=!0},move:function(t){this.activeItem=t,this.mode="move",this.dialog=!0},performMove:function(){this.$store.commit("moveItem",{fromBox:this.$route.params.id,toBox:this.toBox,item:this.activeItem}),this.toBox=void 0,this.cancel()},remove:function(t){this.activeItem=t,this.mode="delete",this.dialog=!0},cancel:function(){var t=this;this.dialog=!1,Object(H["setTimeout"])((function(){"delete"!==t.mode&&"qrcode"!==t.mode&&t.$refs.form.reset(),t.mode="default",t.activeItem=""}),200)}}},ot=et,nt=o("b974"),it=o("2db4"),at=o("a844"),rt=Object(u["a"])(ot,K,$,!1,null,null,null),st=rt.exports;v()(rt,{VBtn:h["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:j["a"],VContainer:g["a"],VDialog:D["a"],VForm:L["a"],VIcon:w["a"],VRow:Z["a"],VSelect:nt["a"],VSnackbar:it["a"],VTextField:J["a"],VTextarea:at["a"]});var ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Search for items")]),o("v-text-field",{attrs:{label:"Search text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t.results.length>0?t._l(t.results,(function(t){return o("searchResult",{key:t.id,attrs:{item:t,box:t.box}})})):o("h2",[t._v("No results found!")])],2)},lt=[],dt=(o("386d"),{data:function(){return{text:"",items:this.$store.state.items,boxes:this.$store.state.boxes}},computed:{results:function(){var t=[];for(var e in this.items)(this.items[e].title.search(new RegExp(this.text,"i"))>-1||this.items[e].description.search(new RegExp(this.text,"i"))>-1)&&(t.unshift(this.items[e]),t[0].id=e,t[0].box=this.findBox(e));return t}},methods:{findBox:function(t){for(var e=0;e<this.boxes.length;e++)if(-1!==this.boxes[e].items.indexOf(t))return{title:this.boxes[e].name,id:e}}}}),ut=dt,mt=Object(u["a"])(ut,ct,lt,!1,null,null,null),vt=mt.exports;v()(mt,{VTextField:J["a"]});var ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Import your data")]),o("v-select",{attrs:{items:t.availableFormats,label:"Export Format"},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}}),o("v-textarea",{attrs:{label:"Import"},model:{value:t.importText,callback:function(e){t.importText=e},expression:"importText"}}),o("v-btn",{attrs:{disabled:!t.importText||void 0===t.format},on:{click:function(e){return t.importData()}}},[t._v("Import")])],1)},pt=[],ht=(o("a481"),{data:function(){return{format:void 0,availableFormats:[{text:"JSON",value:0}],importText:""}},methods:{importData:function(){if(void 0!==this.format&&this.importText){var t={},e=!1;switch(this.format){case 0:try{t=JSON.parse(this.importText)}catch(o){e=!0,console.error("Something went wrong on import!",o),alert("Failed to parse import!")}break;default:console.error("Unknown Export format!")}e||(this.$store.commit("loadSave",{items:t.items||{},boxes:t.boxes||[]}),this.$router.replace("/"))}}}}),bt=ht,xt=Object(u["a"])(bt,ft,pt,!1,null,null,null),gt=xt.exports;v()(xt,{VBtn:h["a"],VSelect:nt["a"],VTextarea:at["a"]});var kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Export your data")]),o("v-select",{attrs:{items:t.availableFormats,label:"Export Format"},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}}),o("v-btn",{attrs:{disabled:void 0===t.format},on:{click:function(e){return t.createExport()}}},[t._v("Create Export")]),t.exportText?[o("v-textarea",{attrs:{label:"Export"},model:{value:t.exportText,callback:function(e){t.exportText=e},expression:"exportText"}}),o("v-btn",{on:{click:function(e){return t.copyExport()}}},[t._v("Copy to Clipboard")])]:t._e(),o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n  ")])],2)},yt=[],wt={data:function(){return{format:void 0,availableFormats:[{text:"JSON",value:0}],exportText:"",snackbar:!1,snackbarText:""}},methods:{createExport:function(){if(void 0!==this.format){var t="";switch(this.format){case 0:t+='{"items":',t+=JSON.stringify(this.$store.state.items),t+=',"boxes":',t+=JSON.stringify(this.$store.state.boxes),t+="}";break;default:console.error("Unknown Export format!")}this.exportText=t}},copyExport:function(){var t=this;if(navigator.clipboard)try{navigator.clipboard.writeText(this.exportText).then((function(){t.snackbarText="Text copied to clipboard",t.snackbar=!0}))}catch(e){this.snackbarText="Error on copy to clipboard!",this.snackbar=!0}else this.snackbarText="Clipboard not supported!",this.snackbar=!0}}},At=wt,Vt=Object(u["a"])(At,kt,yt,!1,null,null,null),Tt=Vt.exports;v()(Vt,{VBtn:h["a"],VSelect:nt["a"],VSnackbar:it["a"],VTextarea:at["a"]}),n["a"].use(N["a"]);var _t=new N["a"]({routes:[{path:"/",name:"home",component:U},{path:"/box/:id",name:"box",component:st},{path:"/search",name:"search",component:vt},{path:"/import",name:"import",component:gt},{path:"/export",name:"export",component:Tt},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),St=o("9483");Object(St["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("5363");var It=o("f309");n["a"].use(It["a"]);var Et=new It["a"]({icons:{iconfont:"mdi"}}),Bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{"text-center":"",wrap:""}},[o("v-row",[o("v-btn",{on:{click:function(e){return t.$router.push("/box/"+t.id)}}},[t._v('Box "'+t._s(t.box.name)+'"')]),o("v-icon",{staticStyle:{margin:"0px 10px"},on:{click:function(e){return t.$emit("edit",t.id)}}},[t._v("mdi-pencil-outline")]),o("v-icon",{on:{click:function(e){return t.$emit("delete",t.id)}}},[t._v("mdi-trash-can-outline")])],1)],1)],1)},Rt=[],Nt={props:["box","id"],computed:{},methods:{}},Ct=Nt,Ot=Object(u["a"])(Ct,Bt,Rt,!1,null,null,null),qt=Ot.exports;v()(Ot,{VBtn:h["a"],VContainer:g["a"],VIcon:w["a"],VLayout:X["a"],VRow:Z["a"]});var Ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length>0?o("v-simple-table",[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Name")]),o("th",{staticClass:"text-left"},[t._v("Description")]),o("th",{staticClass:"text-left"},[t._v("Stock")]),o("th",{staticClass:"text-left",staticStyle:{width:"50px"}},[t._v("Actions")])])]),o("tbody",t._l(t.items,(function(e){return o("tr",{key:e},[o("td",[t._v(t._s(t.storeItems[e].title))]),o("td",[t._v(t._s(t.storeItems[e].description))]),o("td",[t._v(t._s(t.storeItems[e].stock))]),o("td",[o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:""}},n),[o("v-icon",[t._v("mdi-menu")])],1)]}}],null,!0)},[o("v-list",t._l(t.actions,(function(n,i){return o("v-list-item",{key:i,on:{click:function(t){return n.callback(e)}}},[o("v-list-item-title",[t._v(t._s(n.title))])],1)})),1)],1)],1)])})),0)]):o("h2",[t._v("This box has no items. Go ahead and add some!")])},Ht=[],Pt={props:["items"],data:function(){var t=this;return{actions:[{title:"Edit",callback:function(e){t.$emit("edit",e)}},{title:"Move",callback:function(e){t.$emit("move",e)}},{title:"Delete",callback:function(e){t.$emit("delete",e)}}]}},computed:{storeItems:function(){return this.$store.state.items}}},Mt=Pt,jt=o("1f4f"),Dt=Object(u["a"])(Mt,Ft,Ht,!1,null,null,null),Lt=Dt.exports;v()(Dt,{VBtn:h["a"],VIcon:w["a"],VList:V["a"],VListItem:T["a"],VListItemTitle:_["b"],VMenu:S["a"],VSimpleTable:jt["a"]});var Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{on:{click:function(){t.$router.push("/box/"+t.box.id)}}},[o("v-card-title",[t._v(t._s(t.box.title)+" – "+t._s(t.item.title))]),o("v-card-text",[o("b",[t._v("Title:")]),t._v(" "+t._s(t.item.title)),o("br"),o("b",[t._v("Description:")]),t._v(" "+t._s(t.item.description)),o("br"),o("b",[t._v("Ammount:")]),t._v(" "+t._s(t.item.stock)),o("br")])],1)},Zt=[],Jt={props:["item","box"]},Yt=Jt,Gt=Object(u["a"])(Yt,Xt,Zt,!1,null,null,null),zt=Gt.exports;v()(Gt,{VCard:b["a"],VCardText:x["b"],VCardTitle:x["c"]}),n["a"].config.productionTip=!1;var Qt=localStorage.getItem("items"),Wt=localStorage.getItem("boxes");Wt||Qt?c.commit("loadSave",{items:JSON.parse(Qt),boxes:JSON.parse(Wt)}):(localStorage.setItem("items",JSON.stringify(c.state.items)),localStorage.setItem("boxes",JSON.stringify(c.state.boxes))),c.subscribe((function(t,e){localStorage.setItem("items",JSON.stringify(e.items)),localStorage.setItem("boxes",JSON.stringify(e.boxes))})),n["a"].component("box",qt),n["a"].component("item",Lt),n["a"].component("searchResult",zt),new n["a"]({router:_t,store:c,vuetify:Et,render:function(t){return t(R)}}).$mount("#app")},9122:function(t,e,o){},cc77:function(t,e,o){"use strict";var n=o("9122"),i=o.n(n);i.a},f987:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.7270f8e8.js.map