(function(t){function e(e){for(var n,a,l=e[0],o=e[1],u=e[2],v=0,f=[];v<l.length;v++)a=l[v],s[a]&&f.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,l=1;l<r.length;l++){var o=r[l];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"wrap"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.visResult,expression:"visResult"}],staticClass:"result"},[r("img",{staticClass:"resultImg",attrs:{src:"/img2/11.jpg",alt:"result"}}),r("h3",[t._v("Правильных ответов: "+t._s(t.trueAns)+" из 10")]),r("div",{staticClass:"listAnswers"},[r("ul",[r("li",{staticClass:"yellow"},[t._v("Ваши ответы:")]),t._l(t.allAnswers,function(e){return r("li",{key:e},[t._v(t._s(e))])})],2),r("ul",[r("li",{staticClass:"green"},[t._v("Правильные:")]),t._l(t.correctAns,function(e){return r("li",{key:e},[t._v(t._s(e))])})],2)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.visResult,expression:"!visResult"}],staticClass:"quiz"},[r("p",{staticClass:"counter"},[t._v(t._s(t.counter)+"/10")]),r("img",{attrs:{src:t.imgurl[this.flag],alt:"film"}}),r("h3",[t._v(t._s(t.questions[this.flag]))]),r("div",{staticClass:"variants",on:{click:function(e){return t.chooseBtn(e)}}},t._l(t.variants[this.varFlag],function(e){return r("button",{key:e,staticClass:"btn"},[t._v("\n           "+t._s(e)+"\n         ")])}),0),r("div",{staticClass:"arrowWrap"},[r("button",{staticClass:"arrow",style:{background:t.bg},attrs:{disabled:t.dis},on:{click:t.nextLevel}},[t._v("\n          Дальше\n        ")])])])])])},i=[],a=r("5d73"),l=r.n(a),o={data:function(){return{flag:0,varFlag:1,dis:!0,counter:1,visResult:!1,trueAns:0,bg:"#c8d6e5",allAnswers:[],correctAns:["Красную","Роберт Полсон","Голова","Aпельсин","Помни","Сет и Ричи","Желтым","Навоз","Роршаха","Борис Бритва"],questions:["Какую таблетку выбрал Нео?","Его имя...","Что в коробке?","Заводной...?","Фильм Нолана?","Это?","Какого цвета был ублюдок?","Что ненавидит парень в красном?","Не его заперли с ними, а их с ним...","Неубиваемый..."],variants:{1:["Cинюю","Виагру","Красную","От похмелья"],2:["Джек Воробей","Роберт Патисон","Роберт Полсон","Фродо Бэггинс"],3:["Голова","Другая коробка","Бомба","Торт"],4:["Банан","Человек","Aпельсин","Механизм"],5:["Не помню","Помни","Запомни","Вспомнить"],6:["Бивис и Баттхед","Том и Джерри","Винсент и Джулс","Сет и Ричи"],7:["Зеленым","Желтым","Черным","Белым"],8:["Сопляков","Навоз","Работать","Манную кашу"],9:["Роршаха","Шрека","Комедианта","Бэтмена"],10:["Иван Молоток","Борис Бритва","Коля Топор","Витя Серп"]},imgurl:["/img2/1.jpg","/img2/2.jpg","/img2/3.jpg","/img2/4.jpeg","/img2/5.jpg","img2/6.jpg","/img2/7.jpg","/img2/8.jpg","/img2/9.jpg","/img2/10.jpg"]}},methods:{chooseBtn:function(t){var e=document.querySelectorAll(".btn"),r=!0,n=!1,s=void 0;try{for(var i,a=l()(e);!(r=(i=a.next()).done);r=!0){var o=i.value;o.style.backgroundColor="#16a085",o.removeAttribute("data-check")}}catch(c){n=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(n)throw s}}var u=t.target;"BUTTON"==u.tagName?(u.style.backgroundColor="#ee5253",u.setAttribute("data-check","check"),this.dis=!1,this.bg="#8e44ad"):(u.removeAttribute("data-check"),this.dis=!0,this.bg="#c8d6e5")},nextLevel:function(){var t=document.querySelectorAll(".btn"),e=!0,r=!1,n=void 0;try{for(var s,i=l()(t);!(e=(s=i.next()).done);e=!0){var a=s.value;a.hasAttribute("data-check")&&this.allAnswers.push(a.innerHTML.trim())}}catch(u){r=!0,n=u}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}if(this.flag++,this.varFlag++,this.dis=!0,this.bg="#c8d6e5",this.counter++,11==this.counter){this.visResult=!0;for(var o=0;o<this.allAnswers.length;o++)this.allAnswers[o]==this.correctAns[o]&&this.trueAns++}}}},u=o,c=(r("034f"),r("2877")),v=Object(c["a"])(u,s,i,!1,null,null,null),f=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,r){}});
//# sourceMappingURL=app.3c0e5faf.js.map