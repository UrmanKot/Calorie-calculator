!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=s(u),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(o[f].references++,o[f].updater(g)):o.push({identifier:u,updater:h(g,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function g(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function d(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,m=0;function h(e,t){var n,i,r;if(t.singleton){var a=m++;n=p||(p=l(t)),i=g.bind(null,n,a,!1),r=g.bind(null,n,a,!0)}else n=l(t),i=d.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var a=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=a}}}},function(e,t,n){var i=n(0),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var i=n(0),r=n(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var o=a>=0?arguments[a]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),o="/"===r(e,-1);return(e=n(i(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&o&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),a=i(n.split("/")),o=Math.min(r.length,a.length),s=o,c=0;c<o;c++)if(r[c]!==a[c]){s=c;break}var l=[];for(c=s;c<r.length;c++)l.push("..");return(l=l.concat(a.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!r){i=a;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,a=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===i&&(r=!1,i=o+1),46===s?-1===t?t=o:1!==a&&(a=1):-1!==t&&(a=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===a||1===a&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(6))},function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var c,l=[],u=!1,f=-1;function g(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=s(g);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(1),n(3),n(5);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var o=function(e){var t=[{eating:"Завтрак",title:"Овсяная каша с грушевым конфитюром",calories:181,weight:280,image:"assets/img/superFit-1.png"},{eating:"Обед",title:"Котлета из индейки в сметанном соусе и гречка",calories:312,weight:250,image:"assets/img/superFit-2.png"},{eating:"Полдник",title:"Cырники с курагой и клубнично-ананасовым смузи",calories:224,weight:180,image:"assets/img/superFit-3.png"},{eating:"Ужин",title:"Говядина в японском соусе и кабачки на гриле",calories:205,weight:190,image:"assets/img/superFit-4.png"}],n=[{eating:"Завтрак",title:"Воздушное суфле с маком и ягодным соусом",calories:228,weight:190,image:"assets/img/fit-1.png"},{eating:"Второй завтрак",title:"Овсяные блинчики со сливочным кремом и клубничным конфитюром",calories:281,weight:150,image:"assets/img/fit-2.png"},{eating:"Обед",title:"Говядина по-корейски с рисом",calories:312,weight:240,image:"assets/img/fit-3.png"},{eating:"Полдник",title:"Гратен с шампиньонами",calories:131,weight:120,image:"assets/img/fit-4.png"},{eating:"Ужин",title:"Куриное филе в морковном соусе и кабачки на гриле",calories:221,weight:200,image:"assets/img/fit-5.png"}],r=[{eating:"Завтрак",title:"Тыквенные блинчики и сливочный мусс с манго",calories:392,weight:160,image:"assets/img/daily-1.png"},{eating:"Обед",title:"Бефстроганов и булгур с овощами",calories:250,weight:190,image:"assets/img/daily-2.png"},{eating:"Полдник",title:"Салат с куриной грудкой, запеченным картофелем и соусом по-деревенски",calories:279,weight:182,image:"assets/img/daily-3.png"},{eating:"Ужин",title:"Вок с курицей и свининой",calories:372,weight:255,image:"assets/img/daily-4.png"}],o=[{eating:"Завтрак",title:"Сэндвич с запеченной индейкой",calories:449,weight:196,image:"assets/img/power-1.png"},{eating:"Второй завтрак",title:"Фирменный бургер с говядиной и горчичным соусом",calories:658,weight:240,image:"assets/img/power-2.png"},{eating:"Обед",title:"Паста с говядиной в томатном соусе с маслинами",calories:405,weight:350,image:"assets/img/power-3.png"},{eating:"Полдник",title:"Яблочные кексы с изюмом и грецким орехом",calories:330,weight:130,image:"assets/img/power-4.png"},{eating:"Ужин",title:"Куриная котлета с беконом и гречка с овощами",calories:567,weight:320,image:"assets/img/power-5.png"}],s=[{name:"superFit",title:"Super Fit",slogan:"Похудей активно",calories:1e3,price:6630,newPrice:5630,days:6},{name:"superFit",title:"Super Fit",slogan:"Похудей активно",calories:1e3,price:13260,newPrice:11260,days:12},{name:"superFit",title:"Super Fit",slogan:"Похудей активно",calories:1e3,price:26520,newPrice:22520,days:30}],c=[{name:"Fit",title:"Fit",slogan:"Похудей комфортно",calories:1200,price:5610,newPrice:4610,days:6},{name:"Fit",title:"Fit",slogan:"Похудей комфортно",calories:1200,price:11220,newPrice:9220,days:12},{name:"Fit",title:"Fit",slogan:"Похудей комфортно",calories:1200,price:22440,newPrice:18440,days:30}],l=[{name:"Daily",title:"Daily",slogan:"Не готовь весь день",calories:1400,price:6610,newPrice:5610,days:6},{name:"Daily",title:"Daily",slogan:"Не готовь весь день",calories:1400,price:13220,newPrice:10220,days:12},{name:"Daily",title:"Daily",slogan:"Не готовь весь день",calories:1400,price:24440,newPrice:20440,days:30}],u=[{name:"Power",title:"Power",slogan:"Подкачайся",calories:2500,price:5510,newPrice:4510,days:6},{name:"Power",title:"Power",slogan:"Подкачайся",calories:2500,price:11120,newPrice:9120,days:12},{name:"Power",title:"Power",slogan:"Подкачайся",calories:2500,price:22240,newPrice:18240,days:30}],f=function(){function e(t,n,r,a,o){i(this,e),this.eating=t,this.title=n,this.calories=r,this.weight=a,this.image=o}return a(e,[{key:"render",value:function(){var e=document.createElement("li");e.classList.add("menu__item","card","fadeIn","animated"),e.innerHTML='\n                <div class="card__image-wrap">\n                    <img class="card__image" src="'.concat(this.image,'">\n                </div>\n                <b class="card__eating">').concat(this.eating,'</b>\n                <h3 class="card__caption">').concat(this.title,'</h3>\n                <div class="card__summary">\n                    <p>').concat(this.calories," Ккал, ").concat(this.weight," г.</p>\n                </div>\n                "),document.querySelector(".menu__list").append(e)}}]),e}(),g=function(){function e(t,n,r,a,o,s,c){i(this,e),this.name=t,this.title=n,this.slogan=r,this.calories=a,this.price=o,this.newPrice=s,this.days=c}return a(e,[{key:"render",value:function(){var e=document.createElement("li"),t=document.createElement("li");e.classList.add("order__item"),t.classList.add("order__nav-item"),e.innerHTML='\n                <p class="order__slogan">'.concat(this.slogan,'</p>\n                <h3 class="order__name">').concat(this.title,"~<span>").concat(this.calories,'</span> ккал</h3>\n                <p class="order__price">').concat(this.price,' ₽</p>\n                <p class="order__new-price">').concat(this.newPrice,' ₽</p>\n                <p class="order__benefit">Ваша выгода - <span>').concat(this.price-this.newPrice," ₽</span></p>\n            "),t.innerHTML='\n                <p class="order__text">'.concat(this.days,' дней питания</p>\n                <p class="order__discount">скидка ').concat(this.price-this.newPrice," ₽</p>\n            "),document.querySelector(".order__list").append(e),document.querySelector(".order__nav-list").append(t)}}]),e}();function d(e,t){e.map((function(e){var t=e.eating,n=e.title,i=e.calories,r=e.weight,a=e.image;new f(t,n,i,r,a).render()})),t.map((function(e){var t=e.name,n=e.title,i=e.slogan,r=e.calories,a=e.price,o=e.newPrice,s=e.days;new g(t,n,i,r,a,o,s).render()}))}e<2e3?d(o,u):e>=2e3&&e<2500?d(r,l):e>=2500&&e<3e3?d(n,c):d(t,s)};var s=function(e,t,n){var i=document.querySelectorAll(e),r=document.querySelectorAll(t);function a(){r.forEach((function(e){e.style.display="none"})),i.forEach((function(e){e.classList.remove(n)}))}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].style.display="flex",i[e].classList.add(n)}a(),o(),i.forEach((function(e,t){e.addEventListener("click",(function(e){a(),o(t)}))}))};var c=function(){var e,t,n,i,r,a=document.querySelector(".calculating__result span");function c(e,t){document.querySelectorAll(e).forEach((function(e){e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function l(){e&&t&&n&&i&&r&&!(i>100)?(a.textContent="female"===e?Math.round((447.6+9.2*n+3.1*t-4.3*i)*r):Math.round((88.36+13.4*n+4.8*t-5.7*i)*r),document.querySelector(".menu__list").innerHTML="",document.querySelector(".order__list").innerHTML="",document.querySelector(".order__nav-list").innerHTML="",document.querySelector(".order").style.display="block",o(parseInt(a.textContent,10)),s(".order__nav-item",".order__item","order__nav-item--active")):a.textContent="___"}function u(t,n){var i=document.querySelectorAll(t);i.forEach((function(t){t.addEventListener("click",(function(t){var a=t.target;a.getAttribute("data-ratio")?(r=+a.getAttribute("data-ratio"),localStorage.setItem("ratio",r)):(e=a.getAttribute("id"),localStorage.setItem("sex",e)),i.forEach((function(e){e.classList.remove(n)})),a.classList.add(n),l()}))}))}function f(e){var r=document.querySelector(e);r.addEventListener("input",(function(){switch(r.value.match(/\D/g)||"#age"==e&&r.value>100?r.style.border="1px solid red":r.style.border="none",r.getAttribute("id")){case"height":t=+r.value;break;case"weight":n=+r.value;break;case"age":i=+r.value}l()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),c("#gender div","calculating__field--active"),c(".calculating__choose--big div","calculating__field--active"),l(),u("#gender div","calculating__field--active"),u(".calculating__choose--big div","calculating__field--active"),f("#height"),f("#weight"),f("#age")};window.addEventListener("DOMContentLoaded",(function(){c()}))}]);