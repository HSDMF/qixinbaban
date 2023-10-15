/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});;
/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(e),a=i(n);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function u(t){var e=this,n=!1;return o.default(this).one(d.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||d.triggerTransitionEnd(e)}),t),this}var d={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=o.default(t).css("transition-duration"),n=o.default(t).css("transition-delay"),i=parseFloat(e),a=parseFloat(n);return i||a?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){o.default(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=e[i],s=a&&d.isElement(a)?"element":null===(l=a)||"undefined"==typeof l?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof o.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=o.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};d.jQueryDetection(),o.default.fn.emulateTransitionEnd=u,o.default.event.special[d.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(o.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var f="alert",c=o.default.fn[f],h=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.default.removeData(this._element,"bs.alert"),this._element=null},e._getRootElement=function(t){var e=d.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=o.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=o.default.Event("close.bs.alert");return o.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(o.default(t).removeClass("show"),o.default(t).hasClass("fade")){var n=d.getTransitionDurationFromElement(t);o.default(t).one(d.TRANSITION_END,(function(n){return e._destroyElement(t,n)})).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){o.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this),i=n.data("bs.alert");i||(i=new t(this),n.data("bs.alert",i)),"close"===e&&i[e](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();o.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',h._handleDismiss(new h)),o.default.fn[f]=h._jQueryInterface,o.default.fn[f].Constructor=h,o.default.fn[f].noConflict=function(){return o.default.fn[f]=c,h._jQueryInterface};var g=o.default.fn.button,m=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=o.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var i=this._element.querySelector('input:not([type="hidden"])');if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains("active"))t=!1;else{var a=n.querySelector(".active");a&&o.default(a).removeClass("active")}t&&("checkbox"!==i.type&&"radio"!==i.type||(i.checked=!this._element.classList.contains("active")),this.shouldAvoidTriggerChange||o.default(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&o.default(this._element).toggleClass("active"))},e.dispose=function(){o.default.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(e,n){return this.each((function(){var i=o.default(this),a=i.data("bs.button");a||(a=new t(this),i.data("bs.button",a)),a.shouldAvoidTriggerChange=n,"toggle"===e&&a[e]()}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();o.default(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=t.target,n=e;if(o.default(e).hasClass("btn")||(e=o.default(e).closest(".btn")[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var i=e.querySelector('input:not([type="hidden"])');if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||m._jQueryInterface.call(o.default(e),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=o.default(t.target).closest(".btn")[0];o.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))})),o.default(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var a=0,s=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;a<s;a++){var l=t[a];"true"===l.getAttribute("aria-pressed")?l.classList.add("active"):l.classList.remove("active")}})),o.default.fn.button=m._jQueryInterface,o.default.fn.button.Constructor=m,o.default.fn.button.noConflict=function(){return o.default.fn.button=g,m._jQueryInterface};var p="carousel",_=".bs.carousel",v=o.default.fn[p],b={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},E={TOUCH:"touch",PEN:"pen"},w=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide("next")},e.nextWhenVisible=function(){var t=o.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide("prev")},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(d.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(".active.carousel-item");var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)o.default(this._element).one("slid.bs.carousel",(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var i=t>n?"next":"prev";this._slide(i,this._items[t])}},e.dispose=function(){o.default(this._element).off(_),o.default.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},b,t),d.typeCheckConfig(p,t,y),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&o.default(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&o.default(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&E[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&E[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(o.default(this._element).on("pointerdown.bs.carousel",(function(t){return e(t)})),o.default(this._element).on("pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(o.default(this._element).on("touchstart.bs.carousel",(function(t){return e(t)})),o.default(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),o.default(this._element).on("touchend.bs.carousel",(function(t){return n(t)})))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),a=this._items.length-1;if((i&&0===o||n&&o===a)&&!this._config.wrap)return e;var s=(o+("prev"===t?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(".active.carousel-item")),a=o.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:i,to:n});return o.default(this._element).trigger(a),a},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(e).removeClass("active");var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&o.default(n).addClass("active")}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(".active.carousel-item");if(t){var e=parseInt(t.getAttribute("data-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var n,i,a,s=this,l=this._element.querySelector(".active.carousel-item"),r=this._getItemIndex(l),u=e||l&&this._getItemByDirection(t,l),f=this._getItemIndex(u),c=Boolean(this._interval);if("next"===t?(n="carousel-item-left",i="carousel-item-next",a="left"):(n="carousel-item-right",i="carousel-item-prev",a="right"),u&&o.default(u).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(u,a).isDefaultPrevented()&&l&&u){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(u),this._activeElement=u;var h=o.default.Event("slid.bs.carousel",{relatedTarget:u,direction:a,from:r,to:f});if(o.default(this._element).hasClass("slide")){o.default(u).addClass(i),d.reflow(u),o.default(l).addClass(n),o.default(u).addClass(n);var g=d.getTransitionDurationFromElement(l);o.default(l).one(d.TRANSITION_END,(function(){o.default(u).removeClass(n+" "+i).addClass("active"),o.default(l).removeClass("active "+i+" "+n),s._isSliding=!1,setTimeout((function(){return o.default(s._element).trigger(h)}),0)})).emulateTransitionEnd(g)}else o.default(l).removeClass("active"),o.default(u).addClass("active"),this._isSliding=!1,o.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this).data("bs.carousel"),i=r({},b,o.default(this).data());"object"==typeof e&&(i=r({},i,e));var a="string"==typeof e?e:i.slide;if(n||(n=new t(this,i),o.default(this).data("bs.carousel",n)),"number"==typeof e)n.to(e);else if("string"==typeof a){if("undefined"==typeof n[a])throw new TypeError('No method named "'+a+'"');n[a]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}))},t._dataApiClickHandler=function(e){var n=d.getSelectorFromElement(this);if(n){var i=o.default(n)[0];if(i&&o.default(i).hasClass("carousel")){var a=r({},o.default(i).data(),o.default(this).data()),s=this.getAttribute("data-slide-to");s&&(a.interval=!1),t._jQueryInterface.call(o.default(i),a),s&&o.default(i).data("bs.carousel").to(s),e.preventDefault()}}},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return b}}]),t}();o.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",w._dataApiClickHandler),o.default(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var i=o.default(t[e]);w._jQueryInterface.call(i,i.data())}})),o.default.fn[p]=w._jQueryInterface,o.default.fn[p].Constructor=w,o.default.fn[p].noConflict=function(){return o.default.fn[p]=v,w._jQueryInterface};var T="collapse",C=o.default.fn[T],S={toggle:!0,parent:""},N={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var a=n[i],s=d.getSelectorFromElement(a),l=[].slice.call(document.querySelectorAll(s)).filter((function(e){return e===t}));null!==s&&l.length>0&&(this._selector=s,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){o.default(this._element).hasClass("show")?this.hide():this.show()},e.show=function(){var e,n,i=this;if(!this._isTransitioning&&!o.default(this._element).hasClass("show")&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof i._config.parent?t.getAttribute("data-parent")===i._config.parent:t.classList.contains("collapse")}))).length&&(e=null),!(e&&(n=o.default(e).not(this._selector).data("bs.collapse"))&&n._isTransitioning))){var a=o.default.Event("show.bs.collapse");if(o.default(this._element).trigger(a),!a.isDefaultPrevented()){e&&(t._jQueryInterface.call(o.default(e).not(this._selector),"hide"),n||o.default(e).data("bs.collapse",null));var s=this._getDimension();o.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[s]=0,this._triggerArray.length&&o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(s[0].toUpperCase()+s.slice(1)),r=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(){o.default(i._element).removeClass("collapsing").addClass("collapse show"),i._element.style[s]="",i.setTransitioning(!1),o.default(i._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(r),this._element.style[s]=this._element[l]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&o.default(this._element).hasClass("show")){var e=o.default.Event("hide.bs.collapse");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",d.reflow(this._element),o.default(this._element).addClass("collapsing").removeClass("collapse show");var i=this._triggerArray.length;if(i>0)for(var a=0;a<i;a++){var s=this._triggerArray[a],l=d.getSelectorFromElement(s);if(null!==l)o.default([].slice.call(document.querySelectorAll(l))).hasClass("show")||o.default(s).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var r=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(){t.setTransitioning(!1),o.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(r)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){o.default.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},S,t)).toggle=Boolean(t.toggle),d.typeCheckConfig(T,t,N),t},e._getDimension=function(){return o.default(this._element).hasClass("width")?"width":"height"},e._getParent=function(){var e,n=this;d.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',a=[].slice.call(e.querySelectorAll(i));return o.default(a).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])})),e},e._addAriaAndCollapsedClass=function(t,e){var n=o.default(t).hasClass("show");e.length&&o.default(e).toggleClass("collapsed",!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=d.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this),i=n.data("bs.collapse"),a=r({},S,n.data(),"object"==typeof e&&e?e:{});if(!i&&a.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(a.toggle=!1),i||(i=new t(this,a),n.data("bs.collapse",i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return S}}]),t}();o.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=o.default(this),n=d.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(n));o.default(i).each((function(){var t=o.default(this),n=t.data("bs.collapse")?"toggle":e.data();D._jQueryInterface.call(t,n)}))})),o.default.fn[T]=D._jQueryInterface,o.default.fn[T].Constructor=D,o.default.fn[T].noConflict=function(){return o.default.fn[T]=C,D._jQueryInterface};var k="dropdown",A=o.default.fn[k],I=new RegExp("38|40|27"),j={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},x=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")){var e=o.default(this._menu).hasClass("show");t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||o.default(this._element).hasClass("disabled")||o.default(this._menu).hasClass("show"))){var n={relatedTarget:this._element},i=o.default.Event("show.bs.dropdown",n),s=t._getParentFromElement(this._element);if(o.default(s).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof a.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var l=this._element;"parent"===this._config.reference?l=s:d.isElement(this._config.reference)&&(l=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&o.default(s).addClass("position-static"),this._popper=new a.default(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===o.default(s).closest(".navbar-nav").length&&o.default(document.body).children().on("mouseover",null,o.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),o.default(this._menu).toggleClass("show"),o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!o.default(this._element).hasClass("disabled")&&o.default(this._menu).hasClass("show")){var e={relatedTarget:this._element},n=o.default.Event("hide.bs.dropdown",e),i=t._getParentFromElement(this._element);o.default(i).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),o.default(this._menu).toggleClass("show"),o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown",e)))}},e.dispose=function(){o.default.removeData(this._element,"bs.dropdown"),o.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;o.default(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},e._getConfig=function(t){return t=r({},this.constructor.Default,o.default(this._element).data(),t),d.typeCheckConfig(k,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},e._getPlacement=function(){var t=o.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=o.default(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":o.default(this._menu).hasClass("dropdown-menu-right")&&(e="bottom-end"),e},e._detectNavbar=function(){return o.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),r({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this).data("bs.dropdown");if(n||(n=new t(this,"object"==typeof e?e:null),o.default(this).data("bs.dropdown",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),i=0,a=n.length;i<a;i++){var s=t._getParentFromElement(n[i]),l=o.default(n[i]).data("bs.dropdown"),r={relatedTarget:n[i]};if(e&&"click"===e.type&&(r.clickEvent=e),l){var u=l._menu;if(o.default(s).hasClass("show")&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&o.default.contains(s,e.target))){var d=o.default.Event("hide.bs.dropdown",r);o.default(s).trigger(d),d.isDefaultPrevented()||("ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),n[i].setAttribute("aria-expanded","false"),l._popper&&l._popper.destroy(),o.default(u).removeClass("show"),o.default(s).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown",r)))}}}},t._getParentFromElement=function(t){var e,n=d.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||o.default(e.target).closest(".dropdown-menu").length):!I.test(e.which))&&!this.disabled&&!o.default(this).hasClass("disabled")){var n=t._getParentFromElement(this),i=o.default(n).hasClass("show");if(i||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!i||27===e.which||32===e.which)return 27===e.which&&o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void o.default(this).trigger("click");var a=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return o.default(t).is(":visible")}));if(0!==a.length){var s=a.indexOf(e.target);38===e.which&&s>0&&s--,40===e.which&&s<a.length-1&&s++,s<0&&(s=0),a[s].focus()}}}},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return j}},{key:"DefaultType",get:function(){return O}}]),t}();o.default(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',x._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",x._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",x._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),x._jQueryInterface.call(o.default(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),o.default.fn[k]=x._jQueryInterface,o.default.fn[k].Constructor=x,o.default.fn[k].noConflict=function(){return o.default.fn[k]=A,x._jQueryInterface};var P=o.default.fn.modal,R={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},q=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){o.default(this._element).hasClass("fade")&&(this._isTransitioning=!0);var n=o.default.Event("show.bs.modal",{relatedTarget:t});o.default(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return e.hide(t)})),o.default(this._dialog).on("mousedown.dismiss.bs.modal",(function(){o.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){o.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=o.default.Event("hide.bs.modal");if(o.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=o.default(this._element).hasClass("fade");if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),o.default(document).off("focusin.bs.modal"),o.default(this._element).removeClass("show"),o.default(this._element).off("click.dismiss.bs.modal"),o.default(this._dialog).off("mousedown.dismiss.bs.modal"),i){var a=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(a)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return o.default(t).off(".bs.modal")})),o.default(document).off("focusin.bs.modal"),o.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},R,t),d.typeCheckConfig("modal",t,L),t},e._triggerBackdropTransition=function(){var t=this,e=o.default.Event("hidePrevented.bs.modal");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var i=d.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(d.TRANSITION_END),o.default(this._element).one(d.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),n||o.default(t._element).one(d.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,i)})).emulateTransitionEnd(i),this._element.focus()}},e._showElement=function(t){var e=this,n=o.default(this._element).hasClass("fade"),i=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),o.default(this._dialog).hasClass("modal-dialog-scrollable")&&i?i.scrollTop=0:this._element.scrollTop=0,n&&d.reflow(this._element),o.default(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var a=o.default.Event("shown.bs.modal",{relatedTarget:t}),s=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,o.default(e._element).trigger(a)};if(n){var l=d.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(d.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},e._enforceFocus=function(){var t=this;o.default(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(e){document!==e.target&&t._element!==e.target&&0===o.default(t._element).has(e.target).length&&t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?o.default(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||o.default(this._element).off("keydown.dismiss.bs.modal")},e._setResizeEvent=function(){var t=this;this._isShown?o.default(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):o.default(window).off("resize.bs.modal")},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){o.default(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),o.default(t._element).trigger("hidden.bs.modal")}))},e._removeBackdrop=function(){this._backdrop&&(o.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=o.default(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),o.default(this._backdrop).appendTo(document.body),o.default(this._element).on("click.dismiss.bs.modal",(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),n&&d.reflow(this._backdrop),o.default(this._backdrop).addClass("show"),!t)return;if(!n)return void t();var i=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){o.default(this._backdrop).removeClass("show");var a=function(){e._removeBackdrop(),t&&t()};if(o.default(this._element).hasClass("fade")){var s=d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END,a).emulateTransitionEnd(s)}else a()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),n=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each((function(e,n){var i=n.style.paddingRight,a=o.default(n).css("padding-right");o.default(n).data("padding-right",i).css("padding-right",parseFloat(a)+t._scrollbarWidth+"px")})),o.default(n).each((function(e,n){var i=n.style.marginRight,a=o.default(n).css("margin-right");o.default(n).data("margin-right",i).css("margin-right",parseFloat(a)-t._scrollbarWidth+"px")}));var i=document.body.style.paddingRight,a=o.default(document.body).css("padding-right");o.default(document.body).data("padding-right",i).css("padding-right",parseFloat(a)+this._scrollbarWidth+"px")}o.default(document.body).addClass("modal-open")},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));o.default(t).each((function(t,e){var n=o.default(e).data("padding-right");o.default(e).removeData("padding-right"),e.style.paddingRight=n||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each((function(t,e){var n=o.default(e).data("margin-right");"undefined"!=typeof n&&o.default(e).css("margin-right",n).removeData("margin-right")}));var n=o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each((function(){var i=o.default(this).data("bs.modal"),a=r({},R,o.default(this).data(),"object"==typeof e&&e?e:{});if(i||(i=new t(this,a),o.default(this).data("bs.modal",i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else a.show&&i.show(n)}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return R}}]),t}();o.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,n=this,i=d.getSelectorFromElement(this);i&&(e=document.querySelector(i));var a=o.default(e).data("bs.modal")?"toggle":r({},o.default(e).data(),o.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=o.default(e).one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){o.default(n).is(":visible")&&n.focus()}))}));q._jQueryInterface.call(o.default(e),a,this)})),o.default.fn.modal=q._jQueryInterface,o.default.fn.modal.Constructor=q,o.default.fn.modal.noConflict=function(){return o.default.fn.modal=P,q._jQueryInterface};var F=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Q={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},B=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,H=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function U(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),a=[].slice.call(i.body.querySelectorAll("*")),s=function(t,n){var i=a[t],s=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var l=[].slice.call(i.attributes),r=[].concat(e["*"]||[],e[s]||[]);l.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===F.indexOf(n)||Boolean(t.nodeValue.match(B)||t.nodeValue.match(H));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,a=i.length;o<a;o++)if(n.match(i[o]))return!0;return!1})(t,r)||i.removeAttribute(t.nodeName)}))},l=0,r=a.length;l<r;l++)s(l);return i.body.innerHTML}var M="tooltip",W=o.default.fn[M],V=new RegExp("(^|\\s)bs-tooltip\\S+","g"),z=["sanitize","whiteList","sanitizeFn"],K={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},X={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Y={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:Q,popperConfig:null},$={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},J=function(){function t(t,e){if("undefined"==typeof a.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=o.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(o.default(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),o.default.removeData(this.element,this.constructor.DATA_KEY),o.default(this.element).off(this.constructor.EVENT_KEY),o.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&o.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===o.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=o.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){o.default(this.element).trigger(e);var n=d.findShadowRoot(this.element),i=o.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var s=this.getTipElement(),l=d.getUID(this.constructor.NAME);s.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&o.default(s).addClass("fade");var r="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,u=this._getAttachment(r);this.addAttachmentClass(u);var f=this._getContainer();o.default(s).data(this.constructor.DATA_KEY,this),o.default.contains(this.element.ownerDocument.documentElement,this.tip)||o.default(s).appendTo(f),o.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new a.default(this.element,s,this._getPopperConfig(u)),o.default(s).addClass("show"),o.default(s).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&o.default(document.body).children().on("mouseover",null,o.default.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,o.default(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(o.default(this.tip).hasClass("fade")){var h=d.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(d.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(t){var e=this,n=this.getTipElement(),i=o.default.Event(this.constructor.Event.HIDE),a=function(){"show"!==e._hoverState&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),o.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(o.default(this.element).trigger(i),!i.isDefaultPrevented()){if(o.default(n).removeClass("show"),"ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,o.default(this.tip).hasClass("fade")){var s=d.getTransitionDurationFromElement(n);o.default(n).one(d.TRANSITION_END,a).emulateTransitionEnd(s)}else a();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){o.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),o.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=U(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?o.default(e).parent().is(t)||t.empty().append(e):t.text(o.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return r({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:d.isElement(this.config.container)?o.default(this.config.container):o.default(document).find(this.config.container)},e._getAttachment=function(t){return X[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)o.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n="hover"===e?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i="hover"===e?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;o.default(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(i,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},o.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||o.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),o.default(e.getTipElement()).hasClass("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){"show"===e._hoverState&&e.show()}),e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||o.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),o.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){"out"===e._hoverState&&e.hide()}),e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=o.default(this.element).data();return Object.keys(e).forEach((function(t){-1!==z.indexOf(t)&&delete e[t]})),"number"==typeof(t=r({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),d.typeCheckConfig(M,t,this.constructor.DefaultType),t.sanitize&&(t.template=U(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=o.default(this.getTipElement()),e=t.attr("class").match(V);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(o.default(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this),i=n.data("bs.tooltip"),a="object"==typeof e&&e;if((i||!/dispose|hide/.test(e))&&(i||(i=new t(this,a),n.data("bs.tooltip",i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return Y}},{key:"NAME",get:function(){return M}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return $}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return K}}]),t}();o.default.fn[M]=J._jQueryInterface,o.default.fn[M].Constructor=J,o.default.fn[M].noConflict=function(){return o.default.fn[M]=W,J._jQueryInterface};var G="popover",Z=o.default.fn[G],tt=new RegExp("(^|\\s)bs-popover\\S+","g"),et=r({},J.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),nt=r({},J.DefaultType,{content:"(string|element|function)"}),it={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},ot=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=i.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){o.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},a.setContent=function(){var t=o.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=o.default(this.getTipElement()),e=t.attr("class").match(tt);null!==e&&e.length>0&&t.removeClass(e.join(""))},i._jQueryInterface=function(t){return this.each((function(){var e=o.default(this).data("bs.popover"),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new i(this,n),o.default(this).data("bs.popover",e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},l(i,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return et}},{key:"NAME",get:function(){return G}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return it}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return nt}}]),i}(J);o.default.fn[G]=ot._jQueryInterface,o.default.fn[G].Constructor=ot,o.default.fn[G].noConflict=function(){return o.default.fn[G]=Z,ot._jQueryInterface};var at="scrollspy",st=o.default.fn[at],lt={offset:10,method:"auto",target:""},rt={offset:"number",method:"string",target:"(string|element)"},ut=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,o.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,i="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,a=d.getSelectorFromElement(t);if(a&&(e=document.querySelector(a)),e){var s=e.getBoundingClientRect();if(s.width||s.height)return[o.default(e)[n]().top+i,a]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){o.default.removeData(this._element,"bs.scrollspy"),o.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},lt,"object"==typeof t&&t?t:{})).target&&d.isElement(t.target)){var e=o.default(t.target).attr("id");e||(e=d.getUID(at),o.default(t.target).attr("id",e)),t.target="#"+e}return d.typeCheckConfig(at,t,rt),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=o.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass("active"),n.addClass("active")):(n.addClass("active"),n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),o.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this).data("bs.scrollspy");if(n||(n=new t(this,"object"==typeof e&&e),o.default(this).data("bs.scrollspy",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return lt}}]),t}();o.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=o.default(t[e]);ut._jQueryInterface.call(n,n.data())}})),o.default.fn[at]=ut._jQueryInterface,o.default.fn[at].Constructor=ut,o.default.fn[at].noConflict=function(){return o.default.fn[at]=st,ut._jQueryInterface};var dt=o.default.fn.tab,ft=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o.default(this._element).hasClass("active")||o.default(this._element).hasClass("disabled"))){var e,n,i=o.default(this._element).closest(".nav, .list-group")[0],a=d.getSelectorFromElement(this._element);if(i){var s="UL"===i.nodeName||"OL"===i.nodeName?"> li > .active":".active";n=(n=o.default.makeArray(o.default(i).find(s)))[n.length-1]}var l=o.default.Event("hide.bs.tab",{relatedTarget:this._element}),r=o.default.Event("show.bs.tab",{relatedTarget:n});if(n&&o.default(n).trigger(l),o.default(this._element).trigger(r),!r.isDefaultPrevented()&&!l.isDefaultPrevented()){a&&(e=document.querySelector(a)),this._activate(this._element,i);var u=function(){var e=o.default.Event("hidden.bs.tab",{relatedTarget:t._element}),i=o.default.Event("shown.bs.tab",{relatedTarget:n});o.default(n).trigger(e),o.default(t._element).trigger(i)};e?this._activate(e,e.parentNode,u):u()}}},e.dispose=function(){o.default.removeData(this._element,"bs.tab"),this._element=null},e._activate=function(t,e,n){var i=this,a=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?o.default(e).children(".active"):o.default(e).find("> li > .active"))[0],s=n&&a&&o.default(a).hasClass("fade"),l=function(){return i._transitionComplete(t,a,n)};if(a&&s){var r=d.getTransitionDurationFromElement(a);o.default(a).removeClass("show").one(d.TRANSITION_END,l).emulateTransitionEnd(r)}else l()},e._transitionComplete=function(t,e,n){if(e){o.default(e).removeClass("active");var i=o.default(e.parentNode).find("> .dropdown-menu .active")[0];i&&o.default(i).removeClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(o.default(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),d.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&o.default(t.parentNode).hasClass("dropdown-menu")){var a=o.default(t).closest(".dropdown")[0];if(a){var s=[].slice.call(a.querySelectorAll(".dropdown-toggle"));o.default(s).addClass("active")}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this),i=n.data("bs.tab");if(i||(i=new t(this),n.data("bs.tab",i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();o.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ft._jQueryInterface.call(o.default(this),"show")})),o.default.fn.tab=ft._jQueryInterface,o.default.fn.tab.Constructor=ft,o.default.fn.tab.noConflict=function(){return o.default.fn.tab=dt,ft._jQueryInterface};var ct=o.default.fn.toast,ht={animation:"boolean",autohide:"boolean",delay:"number"},gt={animation:!0,autohide:!0,delay:500},mt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=o.default.Event("show.bs.toast");if(o.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),o.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),d.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var i=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains("show")){var t=o.default.Event("hide.bs.toast");o.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),o.default(this._element).off("click.dismiss.bs.toast"),o.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null},e._getConfig=function(t){return t=r({},gt,o.default(this._element).data(),"object"==typeof t&&t?t:{}),d.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;o.default(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},e._close=function(){var t=this,e=function(){t._element.classList.add("hide"),o.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each((function(){var n=o.default(this),i=n.data("bs.toast");if(i||(i=new t(this,"object"==typeof e&&e),n.data("bs.toast",i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e](this)}}))},l(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"DefaultType",get:function(){return ht}},{key:"Default",get:function(){return gt}}]),t}();o.default.fn.toast=mt._jQueryInterface,o.default.fn.toast.Constructor=mt,o.default.fn.toast.noConflict=function(){return o.default.fn.toast=ct,mt._jQueryInterface},t.Alert=h,t.Button=m,t.Carousel=w,t.Collapse=D,t.Dropdown=x,t.Modal=q,t.Popover=ot,t.Scrollspy=ut,t.Tab=ft,t.Toast=mt,t.Tooltip=J,t.Util=d,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=/scripts/lib/bootstrap.min.js.map;;
/*!
 * fullPage 3.1.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(zt,jt){"use strict";var Pt="fullpage-wrapper",Dt="."+Pt,Vt="fp-responsive",Wt="fp-notransition",Yt="fp-destroyed",Ft="fp-enabled",Ut="fp-viewing",Xt="active",Kt="."+Xt,_t="fp-completely",$t="fp-section",qt="."+$t,Qt=qt+Kt,Gt="fp-tableCell",Jt="."+Gt,Zt="fp-auto-height",en="fp-normal-scroll",tn="fp-nav",nn="#"+tn,on="fp-tooltip",rn="fp-slide",ln="."+rn,an=ln+Kt,sn="fp-slides",cn="."+sn,un="fp-slidesContainer",fn="."+un,dn="fp-table",vn="fp-slidesNav",pn="."+vn,hn=pn+" a",e="fp-controlArrow",gn="."+e,mn="fp-prev",Sn=gn+".fp-prev",wn=gn+".fp-next";function bn(e,t){zt.console&&zt.console[e]&&zt.console[e]("fullPage: "+t)}function yn(e,t){return(t=1<arguments.length?t:jt)?t.querySelectorAll(e):null}function En(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=En(e[r],o[r]))}return e}function Ln(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function xn(){return"innerHeight"in zt?zt.innerHeight:jt.documentElement.offsetHeight}function An(){return zt.innerWidth}function Tn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!qn(o,t);)o=o[n];return o}function kn(e,t){return n(e,t,"previousElementSibling")}function On(e,t){return n(e,t,"nextElementSibling")}function Mn(e){return e.previousElementSibling}function Cn(e){return e.nextElementSibling}function Hn(e){return e[e.length-1]}function In(e,t){e=i(e)?e[0]:e;for(var n=null!=t?yn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Bn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Rn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Nn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function zn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function jn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||jt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function Pn(e,t){o(e,t,!0)}function Dn(e,t){for("string"==typeof t&&(t=Gn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Vn(e){for(var t=jt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Wn(e,t){return e&&1===e.nodeType?qn(e,t)?e:Wn(e.parentNode,t):null}function Yn(e,t){r(e,e.nextSibling,t)}function Fn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=Gn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Un(){var e=jt.documentElement;return(zt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Xn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Kn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function _n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function $n(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof zt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=jt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function qn(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Qn(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Gn(e){var t=jt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Jn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(qn(o,t)||null==t)&&r.push(o),o=o[n];return r}function Zn(e,t){return a(e,t,"nextElementSibling")}function eo(e,t){return a(e,t,"previousElementSibling")}return zt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||zt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),zt.fp_utils={$:yn,deepExtend:En,hasClass:Ln,getWindowHeight:xn,css:Tn,until:n,prevUntil:kn,nextUntil:On,prev:Mn,next:Cn,last:Hn,index:In,getList:l,hide:Bn,show:Rn,isArrayOrList:i,addClass:Nn,removeClass:zn,appendTo:jn,wrap:o,wrapAll:Pn,wrapInner:Dn,unwrap:Vn,closest:Wn,after:Yn,before:Fn,insertBefore:r,getScrollTop:Un,siblings:Xn,preventDefault:Kn,isFunction:_n,trigger:$n,matches:qn,toggle:Qn,createElementFromHTML:Gn,remove:Jn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Zn,prevAll:eo,showError:bn},function(e,E){var n=E&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey)||-1<jt.domain.indexOf("alvarotrigo.com"),h=yn("html, body"),u=yn("html")[0],L=yn("body")[0];if(!Ln(u,Ft)){var g={};E=En({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:zt.fp_scrolloverflow?zt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?yn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},E);var x,i,c,f,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),r="ontouchstart"in zt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,d="string"==typeof e?yn(e)[0]:e,A=xn(),s=An(),T=!1,t=!0,k=!0,v=[],p={m:{up:!0,down:!0,left:!0,right:!0}};p.k=En({},p.m);var m,l,S,w,b,O,M,y,C,H=zt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},I={touchmove:"ontouchmove"in zt?"touchmove":H.move,touchstart:"ontouchstart"in zt?"touchstart":H.down},B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',R=!1;try{var N=Object.defineProperty({},"passive",{get:function(){R=!0}});zt.addEventListener("testPassive",null,N),zt.removeEventListener("testPassive",null,N)}catch(e){}var z,j,P,D=En({},E),V=!1,W=!0,Y=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards","dropEffect","waterEffect"];Ct(),zt.fp_easings=En(zt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),d&&(g.version="3.1.1",g.setAutoScrolling=Z,g.setRecordHistory=ee,g.setScrollingSpeed=te,g.setFitToSection=ne,g.setLockAnchors=function(e){E.lockAnchors=e},g.setMouseWheelScrolling=oe,g.setAllowScrolling=re,g.setKeyboardScrolling=le,g.moveSectionUp=ae,g.moveSectionDown=se,g.silentMoveTo=ce,g.moveTo=ue,g.moveSlideRight=fe,g.moveSlideLeft=de,g.fitToSection=xe,g.reBuild=ve,g.setResponsive=he,g.getFullpageData=function(){return E},g.destroy=function(e){Z(!1,"internal"),re(!0),ie(!1),le(!1),Nn(d,Yt),[b,w,l,O,M,C,S,P].forEach(function(e){clearTimeout(e)}),zt.removeEventListener("scroll",Le),zt.removeEventListener("hashchange",qe),zt.removeEventListener("resize",at),jt.removeEventListener("keydown",Ge),jt.removeEventListener("keyup",Je),["click","touchstart"].forEach(function(e){jt.removeEventListener(e,ge)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){jt.removeEventListener(e,Se,!0)}),e&&(Tt(0),yn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",d).forEach(function(e){Ve(e,"src")}),yn("img[data-srcset]").forEach(function(e){Ve(e,"srcset")}),Jn(yn(nn+", "+pn+", "+gn)),Tn(yn(qt),{height:"","background-color":"",padding:""}),Tn(yn(ln),{width:""}),Tn(d,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Tn(h,{overflow:"",height:""}),zn(u,Ft),zn(L,Vt),L.className.split(/\s+/).forEach(function(e){0===e.indexOf(Ut)&&zn(L,e)}),yn(qt+", "+ln).forEach(function(e){E.scrollOverflowHandler&&E.scrollOverflow&&E.scrollOverflowHandler.remove(e),zn(e,dn+" "+Xt+" "+_t);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Ln(e,$t)&&!V&&e.removeAttribute("data-anchor")}),ft(d),[Jt,fn,cn].forEach(function(e){yn(e,d).forEach(function(e){Vn(e)})}),Tn(d,{"-webkit-transition":"none",transition:"none"}),zt.scrollTo(0,0),[$t,rn,un].forEach(function(e){zn(yn("."+e),e)}))},g.getActiveSection=function(){return new Rt(yn(Qt)[0])},g.getActiveSlide=function(){return je(yn(an,yn(Qt)[0])[0])},g.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<yn(E.sectionSelector,d).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<yn(E.sectionSelector,d).length;t++)e.push(0);return e}(),options:E,setAutoScrolling:Z},g.shared={afterRenderActions:Ee,isNormalScrollElement:!1},zt.fullpage_api=g,E.$&&Object.keys(g).forEach(function(e){E.$.fn.fullpage[e]=g[e]}),E.css3&&(E.css3=function(){var e,t=jt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",jt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=zt.getComputedStyle(t).getPropertyValue(n[o]));return jt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),E.scrollBar=E.scrollBar||E.hybrid,function(){if(!E.anchors.length){var e="[data-anchor]",t=yn(E.sectionSelector.split(",").join(e+",")+e,d);t.length&&t.length===yn(E.sectionSelector,d).length&&(V=!0,t.forEach(function(e){E.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!E.navigationTooltips.length){var n="[data-tooltip]",o=yn(E.sectionSelector.split(",").join(n+",")+n,d);o.length&&o.forEach(function(e){E.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Tn(d,{height:"100%",position:"relative"}),Nn(d,Pt),Nn(u,Ft),A=xn(),zn(d,Yt),Nn(yn(E.sectionSelector,d),$t),Nn(yn(E.slideSelector,d),rn);for(var e=yn(qt),t=0;t<e.length;t++){var n=t,o=e[t],r=yn(ln,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=yn(Qt)[0]||Nn(s,Xt),f=yn(Qt)[0],Tn(s,{height:A+"px"}),E.paddingTop&&Tn(s,{"padding-top":E.paddingTop}),E.paddingBottom&&Tn(s,{"padding-bottom":E.paddingBottom}),void 0!==E.sectionsColor[c]&&Tn(s,{"background-color":E.sectionsColor[c]}),void 0!==E.anchors[c]&&s.setAttribute("data-anchor",E.anchors[c]),l=o,a=n,void 0!==E.anchors[a]&&Ln(l,Xt)&&dt(E.anchors[a],a),E.menu&&E.css3&&null!=Wn(yn(E.menu)[0],Dt)&&yn(E.menu).forEach(function(e){L.appendChild(e)}),0<i?be(o,r,i):E.verticalCentered&&pt(o)}var l,a,s,c;E.fixedElements&&E.css3&&yn(E.fixedElements).forEach(function(e){L.appendChild(e)}),E.navigation&&function(){var e=jt.createElement("div");e.setAttribute("id",tn);var t=jt.createElement("ul");e.appendChild(t),jn(e,L);var n=yn(nn)[0];Nn(n,"fp-"+E.navigationPosition),E.showActiveTooltip&&Nn(n,"fp-show-active");for(var o="",r=0;r<yn(qt).length;r++){var i="";E.anchors.length&&(i=E.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ye(r,"Section")+"</span><span></span></a>";var l=E.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+on+" fp-"+E.navigationPosition+'">'+l+"</div>"),o+="</li>"}yn("ul",n)[0].innerHTML=o,Nn(yn("a",yn("li",yn(nn)[0])[In(yn(Qt)[0],qt)]),Xt)}(),yn('iframe[src*="youtube.com/embed/"]',d).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),E.scrollOverflow&&(m=E.scrollOverflowHandler.init(E))}(),re(!0),ie(!0),Z(E.autoScrolling,"internal"),ct(),Lt(),"complete"===jt.readyState&&$e(),zt.addEventListener("load",$e),E.scrollOverflow||Ee(),function(){for(var e=1;e<4;e++)C=setTimeout(we,350*e)}(),zt.addEventListener("scroll",Le),zt.addEventListener("hashchange",qe),zt.addEventListener("focus",nt),zt.addEventListener("blur",ot),zt.addEventListener("resize",at),jt.addEventListener("keydown",Ge),jt.addEventListener("keyup",Je),["click","touchstart"].forEach(function(e){jt.addEventListener(e,ge)}),E.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){me(e,!1)}),["mouseleave","touchend"].forEach(function(e){me(e,!0)})));var F=!1,U=0,X=0,K=0,_=0,$=0,q=(new Date).getTime(),Q=0,G=0,J=A;return g}function Z(e,t){e||Tt(0),Mt("autoScrolling",e,t);var n=yn(Qt)[0];if(E.autoScrolling&&!E.scrollBar)Tn(h,{overflow:"hidden",height:"100%"}),ee(D.recordHistory,"internal"),Tn(d,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Tt(n.offsetTop);else if(Tn(h,{overflow:"visible",height:"initial"}),ee(!!E.autoScrolling&&D.recordHistory,"internal"),Tn(d,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Pe(n.offsetTop);o.element.scrollTo(0,o.options)}}function ee(e,t){Mt("recordHistory",e,t)}function te(e,t){Mt("scrollingSpeed",e,t)}function ne(e,t){Mt("fitToSection",e,t)}function oe(e){e?(function(){var e,t="";zt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in jt.createElement("div")?"wheel":void 0!==jt.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!R&&{passive:!1};"DOMMouseScroll"==n?jt[e](t+"MozMousePixelScroll",He,o):jt[e](t+n,He,o)}(),d.addEventListener("mousedown",Ze),d.addEventListener("mouseup",et)):(jt.addEventListener?(jt.removeEventListener("mousewheel",He,!1),jt.removeEventListener("wheel",He,!1),jt.removeEventListener("MozMousePixelScroll",He,!1)):jt.detachEvent("onmousewheel",He),d.removeEventListener("mousedown",Ze),d.removeEventListener("mouseup",et))}function re(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ot(t,e,"m")}):Ot(t,"all","m")}function ie(e){e?(oe(!0),function(){if(o||r){E.autoScrolling&&(L.removeEventListener(I.touchmove,Te,{passive:!1}),L.addEventListener(I.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Me),e.removeEventListener(I.touchmove,ke,{passive:!1}),e.addEventListener(I.touchstart,Me),e.addEventListener(I.touchmove,ke,{passive:!1})}}()):(oe(!1),function(){if(o||r){E.autoScrolling&&(L.removeEventListener(I.touchmove,ke,{passive:!1}),L.removeEventListener(I.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Me),e.removeEventListener(I.touchmove,ke,{passive:!1})}}())}function le(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ot(t,e,"k")}):(Ot(t,"all","k"),E.keyboardScrolling=t)}function ae(){var e=kn(yn(Qt)[0],qt);e||!E.loopTop&&!E.continuousVertical||(e=Hn(yn(qt))),null!=e&&Re(e,null,!0)}function se(){var e=On(yn(Qt)[0],qt);e||!E.loopBottom&&!E.continuousVertical||(e=yn(qt)[0]),null!=e&&Re(e,null,!1)}function ce(e,t){te(0,"internal"),ue(e,t),te(D.scrollingSpeed,"internal")}function ue(e,t){var n=mt(e);void 0!==t?St(e,t):null!=n&&Re(n)}function fe(e){Ie("right",e)}function de(e){Ie("left",e)}function ve(e){if(!Ln(d,Yt)){T=!0,A=xn(),s=An();for(var t=yn(qt),n=0;n<t.length;++n){var o=t[n],r=yn(cn,o)[0],i=yn(ln,o);E.verticalCentered&&Tn(yn(Jt,o),{height:ht(o)+"px"}),Tn(o,{height:A+"px"}),1<i.length&&it(r,yn(an,r)[0])}E.scrollOverflow&&m.createScrollBarForAll();var l=In(yn(Qt)[0],qt);l&&ce(l+1),T=!1,_n(E.afterResize)&&e&&E.afterResize.call(d,zt.innerWidth,zt.innerHeight),_n(E.afterReBuild)&&!e&&E.afterReBuild.call(d)}}function pe(){return Ln(L,Vt)}function he(e){var t=pe();e?t||(Z(!1,"internal"),ne(!1,"internal"),Bn(yn(nn)),Nn(L,Vt),_n(E.afterResponsive)&&E.afterResponsive.call(d,e),E.scrollOverflow&&m.createScrollBarForAll()):t&&(Z(D.autoScrolling,"internal"),ne(D.autoScrolling,"internal"),Rn(yn(nn)),zn(L,Vt),_n(E.afterResponsive)&&E.afterResponsive.call(d,e))}function ge(e){var t=e.target;t&&Wn(t,nn+" a")?function(e){Kn(e);var t=In(Wn(this,nn+" li"));Re(yn(qt)[t])}.call(t,e):qn(t,".fp-tooltip")?function(){$n(Mn(this),"click")}.call(t):qn(t,gn)?function(){var e=Wn(this,qt);Ln(this,mn)?p.m.left&&de(e):p.m.right&&fe(e)}.call(t,e):qn(t,hn)||null!=Wn(t,hn)?function(e){Kn(e);var t=yn(cn,Wn(this,qt))[0],n=yn(ln,t)[In(Wn(this,"li"))];it(t,n)}.call(t,e):Wn(t,E.menu+" [data-menuanchor]")&&function(e){!yn(E.menu)[0]||!E.lockAnchors&&E.anchors.length||(Kn(e),ue(this.getAttribute("data-menuanchor")))}.call(t,e)}function me(e,t){jt["fp_"+e]=t,jt.addEventListener(e,Se,!0)}function Se(e){var t=e.type,o=!1,r=E.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==jt||!i)return ie(!0),void(r&&E.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(W=!1,setTimeout(function(){W=!0},800)),("mouseenter"!==t||W)&&(E.normalScrollElements.split(",").forEach(function(e){if(!o){var t=qn(i,e),n=Wn(i,e);(t||n)&&(g.shared.isNormalScrollElement||(ie(!1),r&&E.scrollOverflowHandler.setIscroll(i,!1)),g.shared.isNormalScrollElement=!0,o=!0)}}),!o&&g.shared.isNormalScrollElement&&(ie(!0),r&&E.scrollOverflowHandler.setIscroll(i,!0),g.shared.isNormalScrollElement=!1))}function we(){var e=xn(),t=An();A===e&&s===t||(A=e,s=t,ve(!0))}function be(e,t,n){var o=100*n,r=100/n,i=jt.createElement("div");i.className=sn,Pn(t,i);var l,a,s=jt.createElement("div");s.className=un,Pn(t,s),Tn(yn(fn,e),{width:o+"%"}),1<n&&(E.controlArrows&&(l=e,a=[Gn('<div class="fp-controlArrow fp-prev"></div>'),Gn('<div class="fp-controlArrow fp-next"></div>')],Yn(yn(cn,l)[0],a),"#fff"!==E.controlArrowColor&&(Tn(yn(wn,l),{"border-color":"transparent transparent transparent "+E.controlArrowColor}),Tn(yn(Sn,l),{"border-color":"transparent "+E.controlArrowColor+" transparent transparent"})),E.loopHorizontal||Bn(yn(Sn,l))),E.slidesNavigation&&function(e,t){jn(Gn('<div class="'+vn+'"><ul></ul></div>'),e);var n=yn(pn,e)[0];Nn(n,"fp-"+E.slidesNavPosition);for(var o=0;o<t;o++){var r=yn(ln,e)[o];jn(Gn('<li><a href="#"><span class="fp-sr-only">'+ye(o,"Slide",r)+"</span><span></span></a></li>"),yn("ul",n)[0])}Tn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Nn(yn("a",yn("li",n)[0]),Xt)}(e,n)),t.forEach(function(e){Tn(e,{width:r+"%"}),E.verticalCentered&&pt(e)});var c=yn(an,e)[0];null!=c&&(0!==In(yn(Qt),qt)||0===In(yn(Qt),qt)&&0!==In(c))?At(c,"internal"):Nn(t[0],Xt)}function ye(e,t,n){var o="Section"===t?E.anchors[e]:n.getAttribute("data-anchor");return E.navigationTooltips[e]||o||t+" "+(e+1)}function Ee(){var e,t,n=yn(Qt)[0];Nn(n,_t),Ye(n),We(),Ue(n),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e=Qe(),t=mt(e.section),e.section&&t&&(void 0===t||In(t)!==In(f))||!_n(E.afterLoad)||Ne("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:In(n,qt)}),_n(E.afterRender)&&Ne("afterRender")}function Le(){var e,t,n,o,r,i;if(!T&&(!E.autoScrolling||E.scrollBar)){var l=Un(),a=(i=U<(r=l)?"down":"up",Q=U=r,i),s=0,c=l+xn()/2,u=L.offsetHeight-xn()===l,f=yn(qt);if(u)s=f.length-1;else if(l)for(var d=0;d<f.length;++d)f[d].offsetTop<=c&&(s=d);else s=0;if(t=a,n=yn(Qt)[0].offsetTop,o=n+xn(),("up"!=t?n<=Un():o>=Un()+xn())&&(Ln(yn(Qt)[0],_t)||(Nn(yn(Qt)[0],_t),zn(Xn(yn(Qt)[0]),_t))),!Ln(e=f[s],Xt)){F=!0;var v,p,h=yn(Qt)[0],g=In(h,qt)+1,m=vt(e),S=e.getAttribute("data-anchor"),w=In(e,qt)+1,b=yn(an,e)[0],y={activeSection:h,sectionIndex:w-1,anchorLink:S,element:e,leavingSection:g,direction:m};b&&(p=b.getAttribute("data-anchor"),v=In(b)),k&&(Nn(e,Xt),zn(Xn(e),Xt),_n(E.onLeave)&&Ne("onLeave",y),_n(E.afterLoad)&&Ne("afterLoad",y),Ke(h),Ye(e),Ue(e),dt(S,w-1),E.anchors.length&&(x=S),bt(v,p,S)),clearTimeout(O),O=setTimeout(function(){F=!1},100)}E.fitToSection&&(clearTimeout(M),M=setTimeout(function(){E.fitToSection&&yn(Qt)[0].offsetHeight<=A&&xe()},E.fitToSectionDelay))}}function xe(){k&&(T=!0,Re(yn(Qt)[0]),T=!1)}function Ae(e){if(p.m[e]){var t="down"===e?se:ae;if(E.scrollOverflow){var n=E.scrollOverflowHandler.scrollable(yn(Qt)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!E.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Te(e){E.autoScrolling&&Oe(e)&&p.m.up&&Kn(e)}function ke(e){var t=Wn(e.target,qt)||yn(Qt)[0];if(Oe(e)){E.autoScrolling&&Kn(e);var n=xt(e);_=n.y,$=n.x,yn(cn,t).length&&Math.abs(K-$)>Math.abs(X-_)?!a&&Math.abs(K-$)>An()/100*E.touchSensitivity&&($<K?p.m.right&&fe(t):p.m.left&&de(t)):E.autoScrolling&&k&&Math.abs(X-_)>zt.innerHeight/100*E.touchSensitivity&&(_<X?Ae("down"):X<_&&Ae("up"))}}function Oe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Me(e){if(E.fitToSection&&(z=!1),Oe(e)){var t=xt(e);X=t.y,K=t.x}}function Ce(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function He(e){var t=(new Date).getTime(),n=Ln(yn(".fp-completely")[0],en);if(!p.m.down&&!p.m.up)return Kn(e),!1;if(E.autoScrolling&&!c&&!n){var o=(e=e||zt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<v.length&&v.shift(),v.push(Math.abs(o)),E.scrollBar&&Kn(e);var a=t-q;if(q=t,200<a&&(v=[]),k){var s=Ce(v,10);Ce(v,70)<=s&&l&&Ae(r<0?"down":"up")}return!1}E.fitToSection&&(z=!1)}function Ie(e,t){var n=null==t?yn(Qt)[0]:t,o=yn(cn,n)[0];if(!(null==o||a||yn(ln,o).length<2)){var r=yn(an,o)[0],i=null;if(null==(i="left"===e?kn(r,ln):On(r,ln))){if(!E.loopHorizontal)return;var l=Xn(r);i="left"===e?l[l.length-1]:l[0]}a=!g.test.isTesting,it(o,i,e)}}function Be(){for(var e=yn(an),t=0;t<e.length;t++)At(e[t],"internal")}function Re(e,t,n){if(null!=e){var o,r,i,l,a,s,c,u,f,d={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=Q<(l=i),s=l-A+r,c=E.bigSectionsDestination,A<r?(a||c)&&"bottom"!==c||(l=s):(a||T&&null==Cn(o))&&(l=s),Q=l),yMovement:vt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:In(e,qt),activeSlide:yn(an,e)[0],activeSection:yn(Qt)[0],leavingSection:In(yn(Qt),qt)+1,localIsResizing:T};if(!(d.activeSection==e&&!T||E.scrollBar&&Un()===d.dtop&&!Ln(e,Zt))){if(null!=d.activeSlide&&(u=d.activeSlide.getAttribute("data-anchor"),f=In(d.activeSlide)),!d.localIsResizing){var v=d.yMovement;if(void 0!==n&&(v=n?"up":"down"),d.direction=v,_n(E.onLeave)&&!1===Ne("onLeave",d))return}E.autoScrolling&&E.continuousVertical&&void 0!==d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&((p=d).isMovementUp?Fn(yn(Qt)[0],Zn(p.activeSection,qt)):Yn(yn(Qt)[0],eo(p.activeSection,qt).reverse()),Tt(yn(Qt)[0].offsetTop),Be(),p.wrapAroundElements=p.activeSection,p.dtop=p.element.offsetTop,p.yMovement=vt(p.element),d=p),d.localIsResizing||Ke(d.activeSection),E.scrollOverflow&&E.scrollOverflowHandler.beforeLeave(),Nn(e,Xt),zn(Xn(e),Xt),Ye(e),E.scrollOverflow&&E.scrollOverflowHandler.onLeave(),k=g.test.isTesting,bt(f,u,d.anchorLink,d.sectionIndex),function(e){var t=E.scrollingSpeed<700,n=t?700:E.scrollingSpeed;if(E.css3&&E.autoScrolling&&!E.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";gt(o,!0),E.scrollingSpeed?(clearTimeout(w),w=setTimeout(function(){De(e),k=!t},E.scrollingSpeed)):De(e)}else{var r=Pe(e.dtop);g.test.top=-e.dtop+"px",Tn(h,{"scroll-behavior":"unset"}),Ht(r.element,r.options,E.scrollingSpeed,function(){E.scrollBar?setTimeout(function(){De(e)},30):(De(e),k=!t)})}t&&(clearTimeout(P),P=setTimeout(function(){k=!0},n))}(d),x=d.anchorLink,dt(d.anchorLink,d.sectionIndex)}}var p}function Ne(e,t){var n,o,r,i,l=(o=e,r=t,(i=E.v2compatible?{afterRender:function(){return[d]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:ze(yn(Qt)[0]),slide:je(yn(an,yn(Qt)[0])[0])}},onLeave:function(){return{origin:ze(r.activeSection),destination:ze(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:ze(r.section),origin:je(r.prevSlide),destination:je(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(E.v2compatible){if(!1===E[e].apply(l[0],l.slice(1)))return!1}else if($n(d,e,l),!1===E[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function ze(e){return e?new Rt(e):null}function je(e){return e?new Nt(e):null}function Pe(e){var t={};return E.autoScrolling&&!E.scrollBar?(t.options=-e,t.element=yn(Dt)[0]):(t.options=e,t.element=zt),t}function De(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Fn(yn(qt)[0],t.wrapAroundElements):Yn(yn(qt)[yn(qt).length-1],t.wrapAroundElements),Tt(yn(Qt)[0].offsetTop),Be()),_n(E.afterLoad)&&!e.localIsResizing&&Ne("afterLoad",e),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e.localIsResizing||Ue(e.element),Nn(e.element,_t),zn(Xn(e.element),_t),We(),k=!0,_n(e.callback)&&e.callback()}function Ve(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function We(){var e=yn(".fp-auto-height")[0]||pe()&&yn(".fp-auto-height-responsive")[0];E.lazyLoading&&e&&yn(qt+":not("+Kt+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<A&&0<n||2<o&&o<A)&&Ye(e)})}function Ye(o){E.lazyLoading&&yn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",_e(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Ve(n,e),n.addEventListener("load",function(){Fe(o)}))}),qn(n,"source")){var e=Wn(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Fe(o)})}})}function Fe(e){E.scrollOverflow&&(clearTimeout(j),j=setTimeout(function(){Ln(L,Vt)||m.createScrollBar(e)},200))}function Ue(e){var t=_e(e);yn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),yn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Xe(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Xe(e)}})}function Xe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ke(e){var t=_e(e);yn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),yn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function _e(e){var t=yn(an,e);return t.length&&(e=t[0]),e}function $e(){var e=Qe(),t=e.section,n=e.slide;t&&(E.animateAnchor?St(t,n):ce(t,n))}function qe(){if(!F&&!E.lockAnchors){var e=Qe(),t=e.section,n=e.slide,o=void 0===x,r=void 0===x&&void 0===n&&!a;t&&t.length&&(t&&t!==x&&!o||r||!a&&i!=n)&&St(t,n)}}function Qe(){var e,t,n=zt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ge(e){clearTimeout(y);var t=jt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=jt.activeElement,u=tt(_e(yn(Qt)[0]));function f(e){return Kn(e),u[0]?u[0].focus():null}(t=e,n=tt(jt),o=n.indexOf(jt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=je(Wn(i,ln)),a=ze(Wn(i,qt)),l||a)&&(c?null==Wn(c,Qt+","+Qt+" "+an)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&Kn(e))}(e):qn(t,"textarea")||qn(t,"input")||qn(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!E.keyboardScrolling||!E.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&Kn(e),c=e.ctrlKey,y=setTimeout(function(){!function(e){var t=e.shiftKey,n=jt.activeElement,o=qn(n,"video")||qn(n,"audio");if(k||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:p.k.up&&ae();break;case 32:if(t&&p.k.up&&!o){ae();break}case 40:case 34:p.k.down&&(32===e.keyCode&&o||se());break;case 36:p.k.up&&ue(1);break;case 35:p.k.down&&ue(yn(qt).length);break;case 37:p.k.left&&de();break;case 39:p.k.right&&fe()}}(e)},150))}function Je(e){t&&(c=e.ctrlKey)}function Ze(e){2==e.which&&(G=e.pageY,d.addEventListener("mousemove",rt))}function et(e){2==e.which&&d.removeEventListener("mousemove",rt)}function tt(e){return[].slice.call(yn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){t=!0}function ot(){c=t=!1}function rt(e){E.autoScrolling&&(k&&(e.pageY<G&&p.m.up?ae():e.pageY>G&&p.m.down&&se()),G=e.pageY)}function it(e,t,n){var o,r,i=Wn(e,qt),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:In(t),section:i,sectionIndex:In(i,qt),anchorLink:i.getAttribute("data-anchor"),slidesNav:yn(pn,i)[0],slideAnchor:Et(t),prevSlide:yn(an,i)[0],prevSlideIndex:In(yn(an,i)[0]),localIsResizing:T};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":r<o?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(k=!1),E.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&_n(E.onSlideLeave)&&!1===Ne("onSlideLeave",l)?a=!1:(Nn(t,Xt),zn(Xn(t),Xt),l.localIsResizing||(Ke(l.prevSlide),Ye(t)),!E.loopHorizontal&&E.controlArrows&&(Qn(yn(Sn,i),0!==l.slideIndex),Qn(yn(wn,i),null!=Cn(t))),Ln(i,Xt)&&!l.localIsResizing&&bt(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(E.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";g.test.translate3dH[t.sectionIndex]=r,Tn(ut(yn(fn,e)),kt(r)),b=setTimeout(function(){n&&lt(t)},E.scrollingSpeed)}else g.test.left[t.sectionIndex]=Math.round(o.left),Ht(e,Math.round(o.left),E.scrollingSpeed,function(){n&&lt(t)})}(e,l,!0))}function lt(e){var t,n;t=e.slidesNav,n=e.slideIndex,E.slidesNavigation&&null!=t&&(zn(yn(Kt,t),Xt),Nn(yn("a",yn("li",t)[n]),Xt)),e.localIsResizing||(_n(E.afterSlideLoad)&&Ne("afterSlideLoad",e),k=!0,Ue(e.destiny)),a=!1}function at(){clearTimeout(l),l=setTimeout(function(){for(var e=0;e<4;e++)S=setTimeout(st,200*e)},200)}function st(){if(T=!0,ct(),o){var e=jt.activeElement;if(!qn(e,"textarea")&&!qn(e,"input")&&!qn(e,"select")){var t=xn();Math.abs(t-J)>20*Math.max(J,t)/100&&(ve(!0),J=t)}}else we();T=!1}function ct(){var e=E.responsive||E.responsiveWidth,t=E.responsiveHeight,n=e&&zt.innerWidth<e,o=t&&zt.innerHeight<t;e&&t?he(n||o):e?he(n):t&&he(o)}function ut(e){var t="all "+E.scrollingSpeed+"ms "+E.easingcss3;return zn(e,Wt),Tn(e,{"-webkit-transition":t,transition:t})}function ft(e){return Nn(e,Wt)}function dt(e,t){var n,o,r;n=e,yn(E.menu).forEach(function(e){E.menu&&null!=e&&(zn(yn(Kt,e),Xt),Nn(yn('[data-menuanchor="'+n+'"]',e),Xt))}),o=e,r=t,E.navigation&&null!=yn(nn)[0]&&(zn(yn(Kt,yn(nn)[0]),Xt),Nn(o?yn('a[href="#'+o+'"]',yn(nn)[0]):yn("a",yn("li",yn(nn)[0])[r]),Xt))}function vt(e){var t=In(yn(Qt)[0],qt),n=In(e,qt);return t==n?"none":n<t?"up":"down"}function pt(e){if(!Ln(e,dn)){var t=jt.createElement("div");t.className=Gt,t.style.height=ht(e)+"px",Nn(e,dn),Dn(e,t)}}function ht(e){var t=A;if(E.paddingTop||E.paddingBottom){var n=e;Ln(n,$t)||(n=Wn(e,qt));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=A-o}return t}function gt(e,t){t?ut(d):ft(d),Tn(d,kt(e)),g.test.translate3d=e,setTimeout(function(){zn(d,Wt)},10)}function mt(e){var t=yn(qt+'[data-anchor="'+e+'"]',d)[0];if(!t){var n=void 0!==e?e-1:0;t=yn(qt)[n]}return t}function St(e,t){var n=mt(e);if(null!=n){var o,r,i,l=(null==(i=yn(ln+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=yn(ln,r)[o]),i);Et(n)===x||Ln(n,Xt)?wt(l):Re(n,function(){wt(l)})}}function wt(e){null!=e&&it(Wn(e,cn),e)}function bt(e,t,n,o){var r="";E.anchors.length&&!E.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),yt(r+"/"+(i=t))):(null!=e&&(i=t),yt(n))),Lt()}function yt(e){if(E.recordHistory)location.hash=e;else if(o||r)zt.history.replaceState(void 0,void 0,"#"+e);else{var t=zt.location.href.split("#")[0];zt.location.replace(t+"#"+e)}}function Et(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=In(e);return null==t&&(t=n),t}function Lt(){var e=yn(Qt)[0],t=yn(an,e)[0],n=Et(e),o=Et(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Ut+"-[^\\s]+\\b","g");L.className=L.className.replace(i,""),Nn(L,Ut+"-"+r)}function xt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,r&&Oe(e)&&E.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function At(e,t){te(0,"internal"),void 0!==t&&(T=!0),it(Wn(e,cn),e),void 0!==t&&(T=!1),te(D.scrollingSpeed,"internal")}function Tt(e){var t=Math.round(e);if(E.css3&&E.autoScrolling&&!E.scrollBar)gt("translate3d(0px, -"+t+"px, 0px)",!1);else if(E.autoScrolling&&!E.scrollBar)Tn(d,{top:-t+"px"}),g.test.top=-t+"px";else{var n=Pe(t);It(n.element,n.options)}}function kt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ot(t,e,n){"all"!==e?p[n][e]=t:Object.keys(p[n]).forEach(function(e){p[n][e]=t})}function Mt(e,t,n){E[e]=t,"internal"!==n&&(D[e]=t)}function Ct(){var e=E.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(bn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),bn("error","https://github.com/alvarotrigo/fullPage.js#options")),Ln(u,Ft)?bn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(E.continuousVertical&&(E.loopTop||E.loopBottom)&&(E.continuousVertical=!1,bn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!E.scrollOverflow||!E.scrollBar&&E.autoScrolling||bn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!E.continuousVertical||!E.scrollBar&&E.autoScrolling||(E.continuousVertical=!1,bn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),E.scrollOverflow&&null==E.scrollOverflowHandler&&(E.scrollOverflow=!1,bn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Y.forEach(function(e){E[e]&&bn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),E.anchors.forEach(function(t){var e=[].slice.call(yn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(yn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){bn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&bn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function Ht(t,n,o,r){var e,i=(e=t).self!=zt&&Ln(e,sn)?e.scrollLeft:!E.autoScrolling||E.scrollBar?Un():e.offsetTop,l=n-i,a=0;z=!0;var s=function(){if(z){var e=n;a+=20,o&&(e=zt.fp_easings[E.easing](a,i,l,o)),It(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function It(e,t){!E.autoScrolling||E.scrollBar||e.self!=zt&&Ln(e,sn)?e.self!=zt&&Ln(e,sn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Bt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=In(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Rt(e){Bt.call(this,e,qt)}function Nt(e){Bt.call(this,e,ln)}Ct()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=/scripts/lib/fullpage.min.js.map;;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;
/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Headroom = factory());
}(this, function () { 'use strict';
  function isBrowser() {
    return typeof window !== "undefined";
  }
  /**
   * Used to detect browser support for adding an event listener with options
   * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   */
  function passiveEventsSupported() {
    var supported = false;
    try {
      var options = {
        // eslint-disable-next-line getter-return
        get passive() {
          supported = true;
        }
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      supported = false;
    }
    return supported;
  }
  function isSupported() {
    return !!(
      isBrowser() &&
      function() {}.bind &&
      "classList" in document.documentElement &&
      Object.assign &&
      Object.keys &&
      requestAnimationFrame
    );
  }
  function isDocument(obj) {
    return obj.nodeType === 9; // Node.DOCUMENT_NODE === 9
  }
  function isWindow(obj) {
    // `obj === window` or `obj instanceof Window` is not sufficient,
    // as the obj may be the window of an iframe.
    return obj && obj.document && isDocument(obj.document);
  }
  function windowScroller(win) {
    var doc = win.document;
    var body = doc.body;
    var html = doc.documentElement;
    return {
      /**
       * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
       * @return {Number} the scroll height of the document in pixels
       */
      scrollHeight: function() {
        return Math.max(
          body.scrollHeight,
          html.scrollHeight,
          body.offsetHeight,
          html.offsetHeight,
          body.clientHeight,
          html.clientHeight
        );
      },
      /**
       * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
       * @return {Number} the height of the viewport in pixels
       */
      height: function() {
        return win.innerHeight || html.clientHeight || body.clientHeight;
      },
      /**
       * Gets the Y scroll position
       * @return {Number} pixels the page has scrolled along the Y-axis
       */
      scrollY: function() {
        if (win.pageYOffset !== undefined) {
          return win.pageYOffset;
        }
        return (html || body.parentNode || body).scrollTop;
      }
    };
  }
  function elementScroller(element) {
    return {
      /**
       * @return {Number} the scroll height of the element in pixels
       */
      scrollHeight: function() {
        return Math.max(
          element.scrollHeight,
          element.offsetHeight,
          element.clientHeight
        );
      },
      /**
       * @return {Number} the height of the element in pixels
       */
      height: function() {
        return Math.max(element.offsetHeight, element.clientHeight);
      },
      /**
       * Gets the Y scroll position
       * @return {Number} pixels the element has scrolled along the Y-axis
       */
      scrollY: function() {
        return element.scrollTop;
      }
    };
  }
  function createScroller(element) {
    return isWindow(element) ? windowScroller(element) : elementScroller(element);
  }
  /**
   * @param element EventTarget
   */
  function trackScroll(element, options, callback) {
    var isPassiveSupported = passiveEventsSupported();
    var rafId;
    var scrolled = false;
    var scroller = createScroller(element);
    var lastScrollY = scroller.scrollY();
    var details = {};
    function update() {
      var scrollY = Math.round(scroller.scrollY());
      var height = scroller.height();
      var scrollHeight = scroller.scrollHeight();
      // reuse object for less memory churn
      details.scrollY = scrollY;
      details.lastScrollY = lastScrollY;
      details.direction = scrollY > lastScrollY ? "down" : "up";
      details.distance = Math.abs(scrollY - lastScrollY);
      details.isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;
      details.top = scrollY <= options.offset[details.direction];
      details.bottom = scrollY + height >= scrollHeight;
      details.toleranceExceeded =
        details.distance > options.tolerance[details.direction];
      callback(details);
      lastScrollY = scrollY;
      scrolled = false;
    }
    function handleScroll() {
      if (!scrolled) {
        scrolled = true;
        rafId = requestAnimationFrame(update);
      }
    }
    var eventOptions = isPassiveSupported
      ? { passive: true, capture: false }
      : false;
    element.addEventListener("scroll", handleScroll, eventOptions);
    update();
    return {
      destroy: function() {
        cancelAnimationFrame(rafId);
        element.removeEventListener("scroll", handleScroll, eventOptions);
      }
    };
  }
  function normalizeUpDown(t) {
    return t === Object(t) ? t : { down: t, up: t };
  }
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom(elem, options) {
    options = options || {};
    Object.assign(this, Headroom.options, options);
    this.classes = Object.assign({}, Headroom.options.classes, options.classes);
    this.elem = elem;
    this.tolerance = normalizeUpDown(this.tolerance);
    this.offset = normalizeUpDown(this.offset);
    this.initialised = false;
    this.frozen = false;
  }
  Headroom.prototype = {
    constructor: Headroom,
    /**
     * Start listening to scrolling
     * @public
     */
    init: function() {
      if (Headroom.cutsTheMustard && !this.initialised) {
        this.addClass("initial");
        this.initialised = true;
        // defer event registration to handle browser
        // potentially restoring previous scroll position
        setTimeout(
          function(self) {
            self.scrollTracker = trackScroll(
              self.scroller,
              { offset: self.offset, tolerance: self.tolerance },
              self.update.bind(self)
            );
          },
          100,
          this
        );
      }
      return this;
    },
    /**
     * Destroy the widget, clearing up after itself
     * @public
     */
    destroy: function() {
      this.initialised = false;
      Object.keys(this.classes).forEach(this.removeClass, this);
      this.scrollTracker.destroy();
    },
    /**
     * Unpin the element
     * @public
     */
    unpin: function() {
      if (this.hasClass("pinned") || !this.hasClass("unpinned")) {
        this.addClass("unpinned");
        this.removeClass("pinned");
        if (this.onUnpin) {
          this.onUnpin.call(this);
        }
      }
    },
    /**
     * Pin the element
     * @public
     */
    pin: function() {
      if (this.hasClass("unpinned")) {
        this.addClass("pinned");
        this.removeClass("unpinned");
        if (this.onPin) {
          this.onPin.call(this);
        }
      }
    },
    /**
     * Freezes the current state of the widget
     * @public
     */
    freeze: function() {
      this.frozen = true;
      this.addClass("frozen");
    },
    /**
     * Re-enables the default behaviour of the widget
     * @public
     */
    unfreeze: function() {
      this.frozen = false;
      this.removeClass("frozen");
    },
    top: function() {
      if (!this.hasClass("top")) {
        this.addClass("top");
        this.removeClass("notTop");
        if (this.onTop) {
          this.onTop.call(this);
        }
      }
    },
    notTop: function() {
      if (!this.hasClass("notTop")) {
        this.addClass("notTop");
        this.removeClass("top");
        if (this.onNotTop) {
          this.onNotTop.call(this);
        }
      }
    },
    bottom: function() {
      if (!this.hasClass("bottom")) {
        this.addClass("bottom");
        this.removeClass("notBottom");
        if (this.onBottom) {
          this.onBottom.call(this);
        }
      }
    },
    notBottom: function() {
      if (!this.hasClass("notBottom")) {
        this.addClass("notBottom");
        this.removeClass("bottom");
        if (this.onNotBottom) {
          this.onNotBottom.call(this);
        }
      }
    },
    shouldUnpin: function(details) {
      var scrollingDown = details.direction === "down";
      return scrollingDown && !details.top && details.toleranceExceeded;
    },
    shouldPin: function(details) {
      var scrollingUp = details.direction === "up";
      return (scrollingUp && details.toleranceExceeded) || details.top;
    },
    addClass: function(className) {
      this.elem.classList.add.apply(
        this.elem.classList,
        this.classes[className].split(" ")
      );
    },
    removeClass: function(className) {
      this.elem.classList.remove.apply(
        this.elem.classList,
        this.classes[className].split(" ")
      );
    },
    hasClass: function(className) {
      return this.classes[className].split(" ").every(function(cls) {
        return this.classList.contains(cls);
      }, this.elem);
    },
    update: function(details) {
      if (details.isOutOfBounds) {
        // Ignore bouncy scrolling in OSX
        return;
      }
      if (this.frozen === true) {
        return;
      }
      if (details.top) {
        this.top();
      } else {
        this.notTop();
      }
      if (details.bottom) {
        this.bottom();
      } else {
        this.notBottom();
      }
      if (this.shouldUnpin(details)) {
        this.unpin();
      } else if (this.shouldPin(details)) {
        this.pin();
      }
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: isBrowser() ? window : null,
    classes: {
      frozen: "headroom--frozen",
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  };
  Headroom.cutsTheMustard = isSupported();
  return Headroom;
}));;
!function(e){var a={init:function(t){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:1,hrefText:"#page-",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",cssStyle:"light-theme",selectOnClick:!0,onPageClick:function(e){},onInit:function(){}},t||{}),n=this;return s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage=s.currentPage-1,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle).data("pagination",s),a._draw.call(n)}),s.onInit(),this},selectPage:function(e){return a._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.currentPage>0&&a._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1),this},destroy:function(){return this.empty(),this},redraw:function(){return a._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),a._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),a._draw.call(this),this},_draw:function(){var e,t=this,s=t.data("pagination"),n=a._getInterval(s);if(a.destroy.call(this),s.prevText&&a._appendItem.call(this,s.currentPage-1,{text:s.prevText,classes:"prev"}),n.start>0&&s.edges>0){var i=Math.min(s.edges,n.start);for(e=0;e<i;e++)a._appendItem.call(this,e);s.edges<n.start&&s.ellipseText&&t.append('<span class="ellipse">'+s.ellipseText+"</span>")}for(e=n.start;e<n.end;e++)a._appendItem.call(this,e);if(n.end<s.pages&&s.edges>0)for(s.pages-s.edges>n.end&&s.ellipseText&&t.append('<span class="ellipse">'+s.ellipseText+"</span>"),e=Math.max(s.pages-s.edges,n.end);e<s.pages;e++)a._appendItem.call(this,e);s.nextText&&a._appendItem.call(this,s.currentPage+1,{text:s.nextText,classes:"next"})},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(t,s){var n,i,l=this,r=l.data("pagination");t=t<0?0:t<r.pages?t:r.pages-1,n=e.extend({text:t+1,classes:""},s||{}),t==r.currentPage||r.disabled?i=e('<span class="current">'+n.text+"</span>"):(i=e('<a href="'+r.hrefText+(t+1)+'" class="page-link">'+n.text+"</a>")).click(function(){a._selectPage.call(l,t)}),n.classes&&i.addClass(n.classes),l.append(i)},_selectPage:function(e){var t=this.data("pagination");t.currentPage=e,t.selectOnClick?(t.onPageClick(e+1),a._draw.call(this)):t.onPageClick(e+1)}};e.fn.pagination=function(t){return a[t]&&"_"!=t.charAt(0)?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.pagination"):a.init.apply(this,arguments)}}(jQuery);;
/**
 * Swiper 7.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2021
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
}(this, (function () { 'use strict';
    /**
     * SSR Window 4.0.1
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: October 27, 2021
     */
    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }
    function extend$1(target = {}, src = {}) {
      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }
    const ssrDocument = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: ''
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {}
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };
    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }
    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {};
      },
      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }
        return setTimeout(callback, 0);
      },
      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }
        clearTimeout(id);
      }
    };
    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }
    /**
     * Dom7 4.0.1
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: October 27, 2021
     */
    /* eslint-disable no-proto */
    function makeReactive(obj) {
      const proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto;
        },
        set(value) {
          proto.__proto__ = value;
        }
      });
    }
    class Dom7 extends Array {
      constructor(items) {
        super(...(items || []));
        makeReactive(this);
      }
    }
    function arrayFlat(arr = []) {
      const res = [];
      arr.forEach(el => {
        if (Array.isArray(el)) {
          res.push(...arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }
    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }
    function arrayUnique(arr) {
      const uniqueArray = [];
      for (let i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }
      return uniqueArray;
    }
    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }
      const a = [];
      const res = context.querySelectorAll(selector);
      for (let i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }
      return a;
    }
    function $(selector, context) {
      const window = getWindow();
      const document = getDocument();
      let arr = [];
      if (!context && selector instanceof Dom7) {
        return selector;
      }
      if (!selector) {
        return new Dom7(arr);
      }
      if (typeof selector === 'string') {
        const html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          const tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;
          for (let i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);
      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }
      return new Dom7(arrayUnique(arr));
    }
    $.fn = Dom7.prototype; // eslint-disable-next-line
    function addClass(...classes) {
      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.add(...classNames);
      });
      return this;
    }
    function removeClass(...classes) {
      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.remove(...classNames);
      });
      return this;
    }
    function toggleClass(...classes) {
      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        classNames.forEach(className => {
          el.classList.toggle(className);
        });
      });
    }
    function hasClass(...classes) {
      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      return arrayFilter(this, el => {
        return classNames.filter(className => el.classList.contains(className)).length > 0;
      }).length > 0;
    }
    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs
      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }
      return this;
    }
    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }
      return this;
    }
    function transform(transform) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }
      return this;
    }
    function transition$1(duration) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
      }
      return this;
    }
    function on(...args) {
      let [eventType, targetSelector, listener, capture] = args;
      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }
      if (!capture) capture = false;
      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          const parents = $(target).parents(); // eslint-disable-line
          for (let k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
          }
        }
      }
      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
        listener.apply(this, eventData);
      }
      const events = eventType.split(' ');
      let j;
      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];
        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
          }
        }
      }
      return this;
    }
    function off(...args) {
      let [eventType, targetSelector, listener, capture] = args;
      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }
      if (!capture) capture = false;
      const events = eventType.split(' ');
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;
          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }
          if (handlers && handlers.length) {
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];
              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }
      return this;
    }
    function trigger(...args) {
      const window = getWindow();
      const events = args[0].split(' ');
      const eventData = args[1];
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }
      return this;
    }
    function transitionEnd$1(callback) {
      const dom = this;
      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }
      if (callback) {
        dom.on('transitionend', fireCallBack);
      }
      return this;
    }
    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
      }
      return null;
    }
    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
      }
      return null;
    }
    function offset() {
      if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }
      return null;
    }
    function styles() {
      const window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }
    function css(props, value) {
      const window = getWindow();
      let i;
      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (const prop in props) {
              this[i].style[prop] = props[prop];
            }
          }
          return this;
        }
      }
      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }
        return this;
      }
      return this;
    }
    function each(callback) {
      if (!callback) return this;
      this.forEach((el, index) => {
        callback.apply(el, [el, index]);
      });
      return this;
    }
    function filter(callback) {
      const result = arrayFilter(this, callback);
      return $(result);
    }
    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }
      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }
      return this;
    }
    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }
      for (let i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }
      return this;
    }
    function is(selector) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      let compareWith;
      let i;
      if (!el || typeof selector === 'undefined') return false;
      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }
        return false;
      }
      if (selector === document) {
        return el === document;
      }
      if (selector === window) {
        return el === window;
      }
      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }
        return false;
      }
      return false;
    }
    function index() {
      let child = this[0];
      let i;
      if (child) {
        i = 0; // eslint-disable-next-line
        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }
        return i;
      }
      return undefined;
    }
    function eq(index) {
      if (typeof index === 'undefined') return this;
      const length = this.length;
      if (index > length - 1) {
        return $([]);
      }
      if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }
      return $([this[index]]);
    }
    function append(...els) {
      let newChild;
      const document = getDocument();
      for (let k = 0; k < els.length; k += 1) {
        newChild = els[k];
        for (let i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (let j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }
      return this;
    }
    function prepend(newChild) {
      const document = getDocument();
      let i;
      let j;
      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;
          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }
      return this;
    }
    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }
          return $([]);
        }
        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }
      return $([]);
    }
    function nextAll(selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return $([]);
      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
          if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
      }
      return $(nextEls);
    }
    function prev(selector) {
      if (this.length > 0) {
        const el = this[0];
        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }
          return $([]);
        }
        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }
      return $([]);
    }
    function prevAll(selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return $([]);
      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
          if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
      }
      return $(prevEls);
    }
    function parent(selector) {
      const parents = []; // eslint-disable-line
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }
      return $(parents);
    }
    function parents(selector) {
      const parents = []; // eslint-disable-line
      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode; // eslint-disable-line
        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) parents.push(parent);
          } else {
            parents.push(parent);
          }
          parent = parent.parentNode;
        }
      }
      return $(parents);
    }
    function closest(selector) {
      let closest = this; // eslint-disable-line
      if (typeof selector === 'undefined') {
        return $([]);
      }
      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }
      return closest;
    }
    function find(selector) {
      const foundElements = [];
      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);
        for (let j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }
      return $(foundElements);
    }
    function children(selector) {
      const children = []; // eslint-disable-line
      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;
        for (let j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }
      return $(children);
    }
    function remove() {
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }
      return this;
    }
    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition: transition$1,
      on,
      off,
      trigger,
      transitionEnd: transitionEnd$1,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach(methodName => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });
    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }
        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }
    function nextTick(callback, delay = 0) {
      return setTimeout(callback, delay);
    }
    function now() {
      return Date.now();
    }
    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;
      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }
      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }
      if (!style) {
        style = el.style;
      }
      return style;
    }
    function getTranslate(el, axis = 'x') {
      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);
      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }
      return curTransform || 0;
    }
    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }
    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }
      return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend(...args) {
      const to = Object(args[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];
      for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    }
    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll({
      swiper,
      targetPosition,
      side
    }) {
      const window = getWindow();
      const startPosition = -swiper.translate;
      let startTime = null;
      let time;
      const duration = swiper.params.speed;
      swiper.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';
      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };
      const animate = () => {
        time = new Date().getTime();
        if (startTime === null) {
          startTime = time;
        }
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };
      animate();
    }
    let support;
    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
          let supportsPassive = false;
          try {
            const opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get() {
                supportsPassive = true;
              }
            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }
          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }
    function getSupport() {
      if (!support) {
        support = calcSupport();
      }
      return support;
    }
    let deviceCached;
    function calcDevice({
      userAgent
    } = {}) {
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel'; // iPadOs 13 fix
      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android
      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }
      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object
      return device;
    }
    function getDevice(overrides = {}) {
      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }
      return deviceCached;
    }
    let browser;
    function calcBrowser() {
      const window = getWindow();
      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }
      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }
    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }
      return browser;
    }
    function Resize({
      swiper,
      on,
      emit
    }) {
      const window = getWindow();
      let observer = null;
      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
      };
      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver(entries => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(({
            contentBoxSize,
            contentRect,
            target
          }) => {
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
        observer.observe(swiper.el);
      };
      const removeObserver = () => {
        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el);
          observer = null;
        }
      };
      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
      };
      on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }
    function Observer({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const observers = [];
      const window = getWindow();
      const attach = (target, options = {}) => {
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }
          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };
      const init = () => {
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
          const containerParents = swiper.$el.parents();
          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        } // Observe container
        attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      };
      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };
      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }
    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },
      once(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        function onceHandler(...args) {
          self.off(events, onceHandler);
          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }
          handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },
      onAny(handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }
        return self;
      },
      offAny(handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }
        return self;
      },
      off(events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(event => {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },
      emit(...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(event => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(eventHandler => {
              eventHandler.apply(context, [event, ...data]);
            });
          }
          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(eventHandler => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };
    function updateSize() {
      const swiper = this;
      let width;
      let height;
      const $el = swiper.$el;
      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }
      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }
      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings
      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
      });
    }
    function updateSlides() {
      const swiper = this;
      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        } // prettier-ignore
        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }
      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }
      const params = swiper.params;
      const {
        $wrapperEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
      const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;
      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }
      let offsetAfter = params.slidesOffsetAfter;
      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }
      const previousSnapGridLength = swiper.snapGrid.length;
      const previousSlidesGridLength = swiper.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;
      if (typeof swiperSize === 'undefined') {
        return;
      }
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }
      swiper.virtualSize = -spaceBetween; // reset margins
      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      }); // reset cssMode offsets
      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
      }
      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
      if (gridEnabled) {
        swiper.grid.initSlides(slidesLength);
      } // Calc slides
      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
      }).length > 0;
      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) {
          swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        }
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel('width')] = ``;
          }
          const slideStyles = getComputedStyle(slide[0]);
          const currentTransform = slide[0].style.transform;
          const currentWebKitTransform = slide[0].style.webkitTransform;
          if (currentTransform) {
            slide[0].style.transform = 'none';
          }
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }
          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            const width = getDirectionPropertyValue(slideStyles, 'width');
            const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            const boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide[0];
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }
          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }
          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);
          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
          }
        }
        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }
      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }
      if (params.setWrapperSize) {
        $wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }
      if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      } // Remove last grid elements depending on width
      if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }
      if (snapGrid.length === 0) snapGrid = [0];
      if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex) => {
          if (!params.cssMode) return true;
          if (slideIndex === slides.length - 1) {
            return false;
          }
          return true;
        }).css({
          [key]: `${spaceBetween}px`
        });
      }
      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(snap => {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }
      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }
      Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });
      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
      }
      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }
      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }
      if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
      }
    }
    function updateAutoHeight(speed) {
      const swiper = this;
      const activeSlides = [];
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let newHeight = 0;
      let i;
      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }
      const getSlideByIndex = index => {
        if (isVirtual) {
          return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
        }
        return swiper.slides.eq(index)[0];
      }; // Find slides currently in view
      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(slide => {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      } // Find new height from highest slide in view
      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height
      if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
    }
    function updateSlidesOffset() {
      const swiper = this;
      const slides = swiper.slides;
      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }
    function updateSlidesProgress(translate = this && this.translate || 0) {
      const swiper = this;
      const params = swiper.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      let offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides
      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];
      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }
      swiper.visibleSlides = $(swiper.visibleSlides);
    }
    function updateProgress(translate) {
      const swiper = this;
      if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }
      const params = swiper.params;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd
      } = swiper;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;
      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }
      Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }
      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }
      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }
      swiper.emit('progress', progress);
    }
    function updateSlidesClasses() {
      const swiper = this;
      const {
        slides,
        params,
        $wrapperEl,
        activeIndex,
        realIndex
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
      let activeSlide;
      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes
      activeSlide.addClass(params.slideActiveClass);
      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide
      let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide
      let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }
      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        }
        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        }
      }
      swiper.emitSlidesClasses();
    }
    function updateActiveIndex(newActiveIndex) {
      const swiper = this;
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      const {
        slidesGrid,
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper;
      let activeIndex = newActiveIndex;
      let snapIndex;
      if (typeof activeIndex === 'undefined') {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }
      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }
        return;
      } // Get real index
      const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }
    function updateClickedSlide(e) {
      const swiper = this;
      const params = swiper.params;
      const slide = $(e.target).closest(`.${params.slideClass}`)[0];
      let slideFound = false;
      let slideIndex;
      if (slide) {
        for (let i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }
      if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }
      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }
    var update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };
    function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
      const swiper = this;
      const {
        params,
        rtlTranslate: rtl,
        translate,
        $wrapperEl
      } = swiper;
      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }
      if (params.cssMode) {
        return translate;
      }
      let currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }
    function setTranslate(translate, byController) {
      const swiper = this;
      const {
        rtlTranslate: rtl,
        params,
        $wrapperEl,
        wrapperEl,
        progress
      } = swiper;
      let x = 0;
      let y = 0;
      const z = 0;
      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }
      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
      }
      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }
      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }
      swiper.emit('setTranslate', swiper.translate, byController);
    }
    function minTranslate() {
      return -this.snapGrid[0];
    }
    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
    function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
      const swiper = this;
      const {
        params,
        wrapperEl
      } = swiper;
      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }
      const minTranslate = swiper.minTranslate();
      const maxTranslate = swiper.maxTranslate();
      let newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress
      swiper.updateProgress(newTranslate);
      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top'
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth'
          });
        }
        return true;
      }
      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
          swiper.animating = true;
          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;
              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }
      return true;
    }
    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };
    function setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }
      swiper.emit('setTransition', duration, byController);
    }
    function transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step
    }) {
      const {
        activeIndex,
        previousIndex
      } = swiper;
      let dir = direction;
      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }
      swiper.emit(`transition${step}`);
      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit(`slideResetTransition${step}`);
          return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') {
          swiper.emit(`slideNextTransition${step}`);
        } else {
          swiper.emit(`slidePrevTransition${step}`);
        }
      }
    }
    function transitionStart(runCallbacks = true, direction) {
      const swiper = this;
      const {
        params
      } = swiper;
      if (params.cssMode) return;
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
      });
    }
    function transitionEnd(runCallbacks = true, direction) {
      const swiper = this;
      const {
        params
      } = swiper;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
      });
    }
    var transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };
    function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
      }
      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */
        const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
      }
      const swiper = this;
      let slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper;
      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }
      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }
      const translate = -snapGrid[snapIndex]; // Update progress
      swiper.updateProgress(translate); // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      } // Directions locks
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }
      let direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index
      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
      }
      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          if (isVirtual) {
            swiper.wrapperEl.style.scrollSnapType = 'none';
            swiper._immediateVirtual = true;
          }
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper.wrapperEl.style.scrollSnapType = '';
              swiper._swiperImmediateVirtual = false;
            });
          }
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: t,
              side: isH ? 'left' : 'top'
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth'
          });
        }
        return true;
      }
      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (!swiper.animating) {
          swiper.animating = true;
          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }
      return true;
    }
    function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
      const swiper = this;
      let newIndex = index;
      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }
      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper = this;
      const {
        animating,
        enabled,
        params
      } = swiper;
      if (!enabled) return swiper;
      let perGroup = params.slidesPerGroup;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
      }
      const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper = this;
      const {
        params,
        animating,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return swiper;
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
      const translate = rtlTranslate ? swiper.translate : -swiper.translate;
      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }
      const normalizedTranslate = normalize(translate);
      const normalizedSnapGrid = snapGrid.map(val => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
      if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            // prevSnap = snap;
            prevSnapIndex = snapIndex;
          }
        });
        if (typeof prevSnapIndex !== 'undefined') {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }
      let prevIndex = 0;
      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
      const swiper = this;
      let index = swiper.activeIndex;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }
      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }
    function slideToClickedSlide() {
      const swiper = this;
      const {
        params,
        $wrapperEl
      } = swiper;
      const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper.clickedIndex;
      let realIndex;
      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            nextTick(() => {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    var slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };
    function loopCreate() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        $wrapperEl
      } = swiper; // Remove duplicated slides
      const $selector = $($wrapperEl.children()[0].parentNode);
      $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
      let slides = $selector.children(`.${params.slideClass}`);
      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
            $selector.append(blankNode);
          }
          slides = $selector.children(`.${params.slideClass}`);
        }
      }
      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;
      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }
      const prependSlides = [];
      const appendSlides = [];
      slides.each((el, index) => {
        const slide = $(el);
        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }
        slide.attr('data-swiper-slide-index', index);
      });
      for (let i = 0; i < appendSlides.length; i += 1) {
        $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
      for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
        $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }
    function loopFix() {
      const swiper = this;
      swiper.emit('beforeLoopFix');
      const {
        activeIndex,
        slides,
        loopedSlides,
        allowSlidePrev,
        allowSlideNext,
        snapGrid,
        rtlTranslate: rtl
      } = swiper;
      let newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      const snapTranslate = -snapGrid[activeIndex];
      const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }
    function loopDestroy() {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        slides
      } = swiper;
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
      slides.removeAttr('data-swiper-slide-index');
    }
    var loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };
    function setGrabCursor(moving) {
      const swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }
    function unsetGrabCursor() {
      const swiper = this;
      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }
      swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    }
    var grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };
    function closestElement(selector, base = this) {
      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
      }
      return __closestFrom(base);
    }
    function onTouchStart(event) {
      const swiper = this;
      const document = getDocument();
      const window = getWindow();
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        enabled
      } = swiper;
      if (!enabled) return;
      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }
      if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
      }
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      let $targetEl = $(e.target);
      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }
      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component
      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = $(event.path[0]);
      }
      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
      }
      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }
      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }
      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;
      if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;
        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }
      swiper.emit('touchStart', e);
    }
    function onTouchMove(event) {
      const document = getDocument();
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }
        return;
      }
      if (data.isTouchEvent && e.type !== 'touchmove') return;
      const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }
      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }
        return;
      }
      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }
      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }
      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }
      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
      if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }
      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }
      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }
      if (!data.startMoving) {
        return;
      }
      swiper.allowClick = false;
      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }
      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }
      if (!data.isMoved) {
        if (params.loop && !params.cssMode) {
          swiper.loopFix();
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
      }
      swiper.emit('sliderMove', e);
      data.isMoved = true;
      let diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;
      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }
      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks
      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold
      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }
      if (!params.followFinger || params.cssMode) return; // Update active index in free mode
      if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
      } // Update progress
      swiper.updateProgress(data.currentTranslate); // Update translate
      swiper.setTranslate(data.currentTranslate);
    }
    function onTouchEnd(event) {
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }
      data.allowTouchCallbacks = false;
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor
      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }
      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper.destroyed) swiper.allowClick = true;
      });
      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;
      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }
      if (params.cssMode) {
        return;
      }
      if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
          currentPos
        });
        return;
      } // Find current slide
      let stopIndex = 0;
      let groupSize = swiper.slidesSizesGrid[0];
      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size
      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }
          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }
    function onResize() {
      const swiper = this;
      const {
        params,
        el
      } = swiper;
      if (el && el.offsetWidth === 0) return; // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks
      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper; // Disable locks on resize
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }
    function onClick(e) {
      const swiper = this;
      if (!swiper.enabled) return;
      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }
    function onScroll() {
      const swiper = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;
      if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line
      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }
      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }
      swiper.emit('setTranslate', swiper.translate, false);
    }
    let dummyEventAttached = false;
    function dummyEventListener() {}
    const events = (swiper, method) => {
      const document = getDocument();
      const {
        params,
        touchEvents,
        el,
        wrapperEl,
        device,
        support
      } = swiper;
      const capture = !!params.nested;
      const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      const swiperMethod = method; // Touch Events
      if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
      } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      } // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
      }
      if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
      } // Resize handler
      if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper[swiperMethod]('observerUpdate', onResize, true);
      }
    };
    function attachEvents() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        support
      } = swiper;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }
      swiper.onClick = onClick.bind(swiper);
      if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
      events(swiper, 'on');
    }
    function detachEvents() {
      const swiper = this;
      events(swiper, 'off');
    }
    var events$1 = {
      attachEvents,
      detachEvents
    };
    const isGridEnabled = (swiper, params) => {
      return swiper.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
      const swiper = this;
      const {
        activeIndex,
        initialized,
        loopedSlides = 0,
        params,
        $el
      } = swiper;
      const breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
      const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = isGridEnabled(swiper, params);
      const isMultiRow = isGridEnabled(swiper, breakpointParams);
      const wasEnabled = params.enabled;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
          $el.addClass(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
      }
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
      extend(swiper.params, breakpointParams);
      const isEnabled = swiper.params.enabled;
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });
      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }
      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }
      swiper.emit('breakpoint', breakpointParams);
    }
    function getBreakpoint(breakpoints, base = 'window', containerEl) {
      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      let breakpoint = false;
      const window = getWindow();
      const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints).map(point => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }
        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];
        if (base === 'window') {
          if (window.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }
      return breakpoint || 'max';
    }
    var breakpoints = {
      setBreakpoint,
      getBreakpoint
    };
    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach(item => {
        if (typeof item === 'object') {
          Object.keys(item).forEach(classNames => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }
    function addClasses() {
      const swiper = this;
      const {
        classNames,
        params,
        rtl,
        $el,
        device,
        support
      } = swiper; // prettier-ignore
      const suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': !support.touch
      }, {
        'free-mode': swiper.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      $el.addClass([...classNames].join(' '));
      swiper.emitContainerClasses();
    }
    function removeClasses() {
      const swiper = this;
      const {
        $el,
        classNames
      } = swiper;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }
    var classes = {
      addClasses,
      removeClasses
    };
    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      const window = getWindow();
      let image;
      function onReady() {
        if (callback) callback();
      }
      const isPicture = $(imageEl).parent('picture')[0];
      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;
          if (sizes) {
            image.sizes = sizes;
          }
          if (srcset) {
            image.srcset = srcset;
          }
          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }
    function preloadImages() {
      const swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');
      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }
      for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }
    var images = {
      loadImage,
      preloadImages
    };
    function checkOverflow() {
      const swiper = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper;
      const {
        slidesOffsetBefore
      } = params;
      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }
      if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
      }
      if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
      }
      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
      }
      if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
      }
    }
    var checkOverflow$1 = {
      checkOverflow
    };
    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };
    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
          extend(allModulesParams, obj);
          return;
        }
        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          extend(allModulesParams, obj);
          return;
        }
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
        extend(allModulesParams, obj);
      };
    }
    /* eslint no-param-reassign: "off" */
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes,
      images
    };
    const extendedDefaults = {};
    class Swiper {
      constructor(...args) {
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          [el, params] = args;
        }
        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;
        if (params.el && $(params.el).length > 1) {
          const swipers = [];
          $(params.el).each(containerEl => {
            const newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...swiper.__modules__];
        if (params.modules && Array.isArray(params.modules)) {
          swiper.modules.push(...params.modules);
        }
        const allModulesParams = {};
        swiper.modules.forEach(mod => {
          mod({
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper)
          });
        }); // Extend defaults with modules params
        const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params
        swiper.params = extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({}, swiper.params);
        swiper.passedParams = extend({}, params); // add event listeners
        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(eventName => {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }
        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib
        swiper.$ = $; // Extend Swiper
        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            const desktop = ['pointerdown', 'pointermove', 'pointerup'];
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) {
          swiper.init();
        } // Return app instance
        return swiper;
      }
      enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
        swiper.emit('enable');
      }
      disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }
        swiper.emit('disable');
      }
      setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter(className => {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }
      getSlideClasses(slideEl) {
        const swiper = this;
        return slideEl.className.split(' ').filter(className => {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }
      emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each(slideEl => {
          const classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }
      slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize;
          let breakLoop;
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
      update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const {
          snapGrid,
          params
        } = swiper; // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
          const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate();
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit('update');
      }
      changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(slideEl => {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }
      mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = $(el || swiper.params.el);
        el = $el[0];
        if (!el) {
          return false;
        }
        el.swiper = swiper;
        const getWrapperSelector = () => {
          return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
            res.children = options => $el.children(options);
            return res;
          }
          return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          const document = getDocument();
          const wrapper = document.createElement('div');
          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
            $wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      }
      init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }
        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide
        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }
      destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const {
          params,
          $el,
          $wrapperEl,
          slides
        } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles
        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');
          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(eventName => {
          swiper.off(eventName);
        });
        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
      }
      static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }
      static get extendedDefaults() {
        return extendedDefaults;
      }
      static get defaults() {
        return defaults;
      }
      static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
      static use(module) {
        if (Array.isArray(module)) {
          module.forEach(m => Swiper.installModule(m));
          return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
      }
    }
    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer]);
    function Virtual({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      });
      let cssModeTimeout;
      swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
      };
      function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }
        const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      }
      function update(force) {
        const {
          slidesPerView,
          slidesPerGroup,
          centeredSlides
        } = swiper.params;
        const {
          addSlidesBefore,
          addSlidesAfter
        } = swiper.params.virtual;
        const {
          from: previousFrom,
          to: previousTo,
          slides,
          slidesGrid: previousSlidesGrid,
          offset: previousOffset
        } = swiper.virtual;
        if (!swiper.params.cssMode) {
          swiper.updateActiveIndex();
        }
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
          from,
          to,
          offset,
          slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();
          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }
        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, `${offset}px`);
          }
          swiper.updateProgress();
          return;
        }
        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset,
            from,
            to,
            slides: function getSlides() {
              const slidesToRender = [];
              for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }
              return slidesToRender;
            }()
          });
          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          }
          return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        } else {
          for (let i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
            }
          }
        }
        for (let i = 0; i < slides.length; i += 1) {
          if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i);
            } else {
              if (i > previousTo) appendIndexes.push(i);
              if (i < previousFrom) prependIndexes.push(i);
            }
          }
        }
        appendIndexes.forEach(index => {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b) => b - a).forEach(index => {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
      }
      function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }
        update(true);
      }
      function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }
          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }
        if (swiper.params.virtual.cache) {
          const cache = swiper.virtual.cache;
          const newCache = {};
          Object.keys(cache).forEach(cachedIndex => {
            const $cachedEl = cache[cachedIndex];
            const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
            }
            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
      }
      function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) {
          for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }
          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
      }
      function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }
        update(true);
        swiper.slideTo(0, 0);
      }
      on('beforeInit', () => {
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) {
          update();
        }
      });
      on('setTranslate', () => {
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
          clearTimeout(cssModeTimeout);
          cssModeTimeout = setTimeout(() => {
            update();
          }, 100);
        } else {
          update();
        }
      });
      on('init update resize', () => {
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) {
          setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
      });
      Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
      });
    }
    /* eslint-disable consistent-return */
    function Keyboard({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const document = getDocument();
      const window = getWindow();
      swiper.keyboard = {
        enabled: false
      };
      extendParams({
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      });
      function handle(event) {
        if (!swiper.enabled) return;
        const {
          rtlTranslate: rtl
        } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          let inView = false; // Check that swiper should be inside of visible area of window
          if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
            return undefined;
          }
          const $el = swiper.$el;
          const swiperWidth = $el[0].clientWidth;
          const swiperHeight = $el[0].clientHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
          for (let i = 0; i < swiperCoord.length; i += 1) {
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
              inView = true;
            }
          }
          if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
      }
      function enable() {
        if (swiper.keyboard.enabled) return;
        $(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
      }
      function disable() {
        if (!swiper.keyboard.enabled) return;
        $(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
      }
      on('init', () => {
        if (swiper.params.keyboard.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        if (swiper.keyboard.enabled) {
          disable();
        }
      });
      Object.assign(swiper.keyboard, {
        enable,
        disable
      });
    }
    /* eslint-disable consistent-return */
    function Mousewheel({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const window = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      });
      swiper.mousewheel = {
        enabled: false
      };
      let timeout;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];
      function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) {
          sY = e.detail;
        }
        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }
        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }
        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) {
          pY = e.deltaY;
        }
        if ('deltaX' in e) {
          pX = e.deltaX;
        }
        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }
        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }
        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }
      function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
      }
      function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
      }
      function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }
        if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
      }
      function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
        return false;
      }
      function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) {
          e.preventDefault();
        }
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
          // Register the new event in a variable which stores the relevant data
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events
          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.
          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.
          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = undefined;
            if (swiper.params.loop) {
              swiper.loopFix();
            }
            let position = swiper.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper.isBeginning;
            const wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode.sticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(timeout);
              timeout = undefined;
              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift(); // only store the last N events
              }
              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);
              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout = nextTick(() => {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }
              if (!timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                timeout = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event
            if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }
      function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
      }
      function enable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener('wheel', handle);
          return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
      }
      function disable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, handle);
          return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
      }
      on('init', () => {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          disable();
        }
        if (swiper.params.mousewheel.enabled) enable();
      });
      on('destroy', () => {
        if (swiper.params.cssMode) {
          enable();
        }
        if (swiper.mousewheel.enabled) disable();
      });
      Object.assign(swiper.mousewheel, {
        enable,
        disable
      });
    }
    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
      const document = getDocument();
      if (swiper.params.createElements) {
        Object.keys(checkProps).forEach(key => {
          if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
              element = document.createElement('div');
              element.className = checkProps[key];
              swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
          }
        });
      }
      return params;
    }
    function Navigation({
      swiper,
      extendParams,
      on,
      emit
    }) {
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      });
      swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      };
      function getEl(el) {
        let $el;
        if (el) {
          $el = $(el);
          if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
            $el = swiper.$el.find(el);
          }
        }
        return $el;
      }
      function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
          $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
          if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      }
      function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning);
        toggleEl($nextEl, swiper.isEnd);
      }
      function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      }
      function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      }
      function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', onNextClick);
        }
        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', onPrevClick);
        }
        Object.assign(swiper.navigation, {
          $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      }
      function destroy() {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
      on('init', () => {
        init();
        update();
      });
      on('toEdge fromEdge lock unlock', () => {
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        if ($nextEl) {
          $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }
        if ($prevEl) {
          $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }
      });
      on('click', (_s, e) => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
          if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
          let isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            emit('navigationShow');
          } else {
            emit('navigationHide');
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      });
      Object.assign(swiper.navigation, {
        update,
        init,
        destroy
      });
    }
    function classesToSelector(classes = '') {
      return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }
    function Pagination({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const pfx = 'swiper-pagination';
      extendParams({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: number => number,
          formatFractionTotal: number => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`
        }
      });
      swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;
      function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
      }
      function setSideBullets($bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
      }
      function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }
          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          const bullets = swiper.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;
          if (params.dynamicBullets) {
            bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              dynamicBulletIndex += current - swiper.previousIndex;
              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }
            firstIndex = current - dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
          bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));
          if ($el.length > 1) {
            bullets.each(bullet => {
              const $bullet = $(bullet);
              const bulletIndex = $bullet.index();
              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(`${params.bulletActiveClass}-main`);
                }
                if (bulletIndex === firstIndex) {
                  setSideBullets($bullet, 'prev');
                }
                if (bulletIndex === lastIndex) {
                  setSideBullets($bullet, 'next');
                }
              }
            });
          } else {
            const $bullet = bullets.eq(current);
            const bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);
            if (params.dynamicBullets) {
              const $firstDisplayedBullet = bullets.eq(firstIndex);
              const $lastDisplayedBullet = bullets.eq(lastIndex);
              for (let i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
              }
              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                    bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                  }
                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                } else {
                  setSideBullets($firstDisplayedBullet, 'prev');
                  setSideBullets($lastDisplayedBullet, 'next');
                }
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            }
          }
          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
          }
        }
        if (params.type === 'fraction') {
          $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          emit('paginationRender', $el[0]);
        } else {
          emit('paginationUpdate', $el[0]);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }
      function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';
        if (params.type === 'bullets') {
          let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
          if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }
          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }
          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
        }
        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
          }
          $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }
          $el.html(paginationHTML);
        }
        if (params.type !== 'custom') {
          emit('paginationRender', swiper.pagination.$el[0]);
        }
      }
      function init() {
        swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
          el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = $(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
          if ($el.length > 1) {
            $el = $el.filter(el => {
              if ($(el).parents('.swiper')[0] !== swiper.el) return false;
              return true;
            });
          }
        }
        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(params.modifierClass + swiper.params.direction);
        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }
        Object.assign(swiper.pagination, {
          $el,
          el: $el[0]
        });
        if (!swiper.enabled) {
          $el.addClass(params.lockClass);
        }
      }
      function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(params.modifierClass + swiper.params.direction);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) {
          $el.off('click', classesToSelector(params.bulletClass));
        }
      }
      on('init', () => {
        init();
        render();
        update();
      });
      on('activeIndexChange', () => {
        if (swiper.params.loop) {
          update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          update();
        }
      });
      on('snapIndexChange', () => {
        if (!swiper.params.loop) {
          update();
        }
      });
      on('slidesLengthChange', () => {
        if (swiper.params.loop) {
          render();
          update();
        }
      });
      on('snapGridLengthChange', () => {
        if (!swiper.params.loop) {
          render();
          update();
        }
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.pagination;
        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
        }
      });
      on('lock unlock', () => {
        update();
      });
      on('click', (_s, e) => {
        const targetEl = e.target;
        const {
          $el
        } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
          if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
          const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            emit('paginationShow');
          } else {
            emit('paginationHide');
          }
          $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      });
      Object.assign(swiper.pagination, {
        render,
        update,
        init,
        destroy
      });
    }
    function Scrollbar({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const document = getDocument();
      let isTouched = false;
      let timeout = null;
      let dragTimeout = null;
      let dragStartPos;
      let dragSize;
      let trackSize;
      let divider;
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      });
      swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
      };
      function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar,
          rtlTranslate: rtl,
          progress
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
          newPos = -newPos;
          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
          $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
          $dragEl[0].style.width = `${newSize}px`;
        } else {
          $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
          $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
          clearTimeout(timeout);
          $el[0].style.opacity = 1;
          timeout = setTimeout(() => {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      }
      function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      }
      function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }
        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = `${dragSize}px`;
        } else {
          $dragEl[0].style.height = `${dragSize}px`;
        }
        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }
        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        }
      }
      function getPointerPosition(e) {
        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      }
      function setDragPosition(e) {
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper;
        const {
          $el
        } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
          positionRatio = 1 - positionRatio;
        }
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) {
          $el.css('opacity', 1);
        }
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }
        emit('scrollbarDragStart', e);
      }
      function onDragMove(e) {
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
      }
      function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el
        } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }
        if (params.hide) {
          clearTimeout(dragTimeout);
          dragTimeout = nextTick(() => {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      }
      function events(method) {
        const {
          scrollbar,
          touchEventsTouch,
          touchEventsDesktop,
          params,
          support
        } = swiper;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support.touch) {
          target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
          document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
          document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
          target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
          target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
          target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
      }
      function enableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('on');
      }
      function disableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('off');
      }
      function init() {
        const {
          scrollbar,
          $el: $swiperEl
        } = swiper;
        swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
          el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = $(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
          $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
          $el.append($dragEl);
        }
        Object.assign(scrollbar, {
          $el,
          el: $el[0],
          $dragEl,
          dragEl: $dragEl[0]
        });
        if (params.draggable) {
          enableDraggable();
        }
        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      }
      function destroy() {
        disableDraggable();
      }
      on('init', () => {
        init();
        updateSize();
        setTranslate();
      });
      on('update resize observerUpdate lock unlock', () => {
        updateSize();
      });
      on('setTranslate', () => {
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        setTransition(duration);
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.scrollbar;
        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      });
      on('destroy', () => {
        destroy();
      });
      Object.assign(swiper.scrollbar, {
        updateSize,
        setTranslate,
        init,
        destroy
      });
    }
    function Parallax({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        parallax: {
          enabled: false
        }
      });
      const setTransform = (el, progress) => {
        const {
          rtl
        } = swiper;
        const $el = $(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }
        if (x.indexOf('%') >= 0) {
          x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
          x = `${x * progress * rtlFactor}px`;
        }
        if (y.indexOf('%') >= 0) {
          y = `${parseInt(y, 10) * progress}%`;
        } else {
          y = `${y * progress}px`;
        }
        if (typeof opacity !== 'undefined' && opacity !== null) {
          const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) {
          $el.transform(`translate3d(${x}, ${y}, 0px)`);
        } else {
          const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
      };
      const setTranslate = () => {
        const {
          $el,
          slides,
          progress,
          snapGrid
        } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
          setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex) => {
          let slideProgress = slideEl.progress;
          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }
          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
            setTransform(el, slideProgress);
          });
        });
      };
      const setTransition = (duration = swiper.params.speed) => {
        const {
          $el
        } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      };
      on('beforeInit', () => {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      });
      on('init', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTranslate', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTransition', (_swiper, duration) => {
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
      });
    }
    function Zoom({
      swiper,
      extendParams,
      on,
      emit
    }) {
      const window = getWindow();
      extendParams({
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      });
      swiper.zoom = {
        enabled: false
      };
      let currentScale = 1;
      let isScaling = false;
      let gesturesEnabled;
      let fakeGestureTouched;
      let fakeGestureMoved;
      const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      };
      const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      };
      const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      };
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get() {
          return scale;
        },
        set(value) {
          if (scale !== value) {
            const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
            const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
            emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        }
      });
      function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
      } // Events
      function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }
          fakeGestureTouched = true;
          gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }
        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }
        isScaling = true;
      }
      function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }
          fakeGestureMoved = true;
          gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') onGestureStart(e);
          return;
        }
        if (support.gestures) {
          zoom.scale = e.scale * currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        }
        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }
        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }
      function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
          if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
          }
          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }
          fakeGestureTouched = false;
          fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      }
      function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      }
      function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }
          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }
        if (e.cancelable) {
          e.preventDefault();
        }
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }
        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }
        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }
        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        } // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }
      function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }
      function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }
          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }
          zoom.scale = 1;
          currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      }
      function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
          if (e && e.target) {
            gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          }
          if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
              gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            } else {
              gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
          }
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left + window.scrollX;
          offsetY = gesture.$slideEl.offset().top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;
          if (translateX < translateMinX) {
            translateX = translateMinX;
          }
          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }
          if (translateY < translateMinY) {
            translateY = translateMinY;
          }
          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }
      function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
      } // Toggle Zoom
      function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoomOut();
        } else {
          // Zoom In
          zoomIn(e);
        }
      }
      function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        return {
          passiveListener,
          activeListenerWithCapture
        };
      }
      function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
      }
      function toggleGestures(method) {
        const {
          passiveListener
        } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
      }
      function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
      }
      function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
      } // Attach/Detach Events
      function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
          swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }
      function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
          swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }
      on('init', () => {
        if (swiper.params.zoom.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        disable();
      });
      on('touchStart', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
      });
      on('touchEnd', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
      });
      on('doubleTap', (_s, e) => {
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          zoomToggle(e);
        }
      });
      on('transitionEnd', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          onTransitionEnd();
        }
      });
      on('slideChange', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          onTransitionEnd();
        }
      });
      Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
      });
    }
    function Lazy({
      swiper,
      extendParams,
      on,
      emit
    }) {
      extendParams({
        lazy: {
          checkInView: false,
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      });
      swiper.lazy = {};
      let scrollHandlerAttached = false;
      let initialImageLoaded = false;
      function loadInSlide(index, loadInDuplicate = true) {
        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }
        if ($images.length === 0) return;
        $images.each(imageEl => {
          const $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          const background = $imageEl.attr('data-background');
          const src = $imageEl.attr('data-src');
          const srcset = $imageEl.attr('data-srcset');
          const sizes = $imageEl.attr('data-sizes');
          const $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
            if (background) {
              $imageEl.css('background-image', `url("${background}")`);
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }
              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }
              if ($pictureEl.length) {
                $pictureEl.children('source').each(sourceEl => {
                  const $source = $(sourceEl);
                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }
              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }
            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(`.${params.preloaderClass}`).remove();
            if (swiper.params.loop && loadInDuplicate) {
              const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                loadInSlide(originalSlide.index(), false);
              } else {
                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                loadInSlide(duplicatedSlide.index(), false);
              }
            }
            emit('lazyImageReady', $slideEl[0], $imageEl[0]);
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      }
      function load() {
        const {
          $wrapperEl,
          params: swiperParams,
          slides,
          activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }
        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
              return true;
            }
          } else if (slides[index]) return true;
          return false;
        }
        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }
          return $(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) {
          $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
            const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          loadInSlide(activeIndex);
        }
        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            const amount = params.loadPrevNextAmount;
            const spv = slidesPerView;
            const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
            for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            } // Prev Slides
            for (let i = minIndex; i < activeIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            }
          } else {
            const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
            if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
            const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
            if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
          }
        }
      }
      function checkInViewOnLoad() {
        const window = getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const {
          rtlTranslate: rtl
        } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
            inView = true;
          }
        }
        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (inView) {
          load();
          $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
          scrollHandlerAttached = true;
          $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
      }
      on('beforeInit', () => {
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      });
      on('init', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('scroll', () => {
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
          load();
        }
      });
      on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('transitionStart', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
            if (swiper.params.lazy.checkInView) {
              checkInViewOnLoad();
            } else {
              load();
            }
          }
        }
      });
      on('transitionEnd', () => {
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('slideChange', () => {
        const {
          lazy,
          cssMode,
          watchSlidesProgress,
          touchReleaseOnEdges,
          resistanceRatio
        } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
          load();
        }
      });
      Object.assign(swiper.lazy, {
        load,
        loadInSlide
      });
    }
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'
        }
      });
      swiper.controller = {
        control: undefined
      };
      function LinearSpline(x, y) {
        const binarySearch = function search() {
          let maxIndex;
          let minIndex;
          let guess;
          return (array, val) => {
            minIndex = -1;
            maxIndex = array.length;
            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;
              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }
            return maxIndex;
          };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
      } // xxx: for now i will just save one spline function to to
      function getInterpolateFunction(c) {
        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      }
      function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
          if (swiper.params.controller.by === 'slide') {
            getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out
            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }
          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }
          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }
          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      }
      function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
          c.setTransition(duration, swiper);
          if (duration !== 0) {
            c.transitionStart();
            if (c.params.autoHeight) {
              nextTick(() => {
                c.updateAutoHeight();
              });
            }
            c.$wrapperEl.transitionEnd(() => {
              if (!controlled) return;
              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }
              c.transitionEnd();
            });
          }
        }
        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
      function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      }
      on('beforeInit', () => {
        swiper.controller.control = swiper.params.controller.control;
      });
      on('update', () => {
        removeSpline();
      });
      on('resize', () => {
        removeSpline();
      });
      on('observerUpdate', () => {
        removeSpline();
      });
      on('setTranslate', (_s, translate, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      });
      on('setTransition', (_s, duration, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      });
      Object.assign(swiper.controller, {
        setTranslate,
        setTransition
      });
    }
    function A11y({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group'
        }
      });
      let liveRegion = null;
      function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      }
      function getRandomNumber(size = 16) {
        const randomChar = () => Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
      }
      function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
      }
      function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
      }
      function addElRole($el, role) {
        $el.attr('role', role);
      }
      function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
      }
      function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
      }
      function addElLabel($el, label) {
        $el.attr('aria-label', label);
      }
      function addElId($el, id) {
        $el.attr('id', id);
      }
      function addElLive($el, live) {
        $el.attr('aria-live', live);
      }
      function disableEl($el) {
        $el.attr('aria-disabled', true);
      }
      function enableEl($el) {
        $el.attr('aria-disabled', false);
      }
      function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = $(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
        if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      }
      function updateNavigation() {
        if (swiper.params.loop || !swiper.navigation) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            disableEl($prevEl);
            makeElNotFocusable($prevEl);
          } else {
            enableEl($prevEl);
            makeElFocusable($prevEl);
          }
        }
        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            disableEl($nextEl);
            makeElNotFocusable($nextEl);
          } else {
            enableEl($nextEl);
            makeElFocusable($nextEl);
          }
        }
      }
      function hasPagination() {
        return swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length;
      }
      function updatePagination() {
        const params = swiper.params.a11y;
        if (hasPagination()) {
          swiper.pagination.bullets.each(bulletEl => {
            const $bulletEl = $(bulletEl);
            makeElFocusable($bulletEl);
            if (!swiper.params.pagination.renderBullet) {
              addElRole($bulletEl, 'button');
              addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          });
        }
      }
      const initNavEl = ($el, wrapperId, message) => {
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
          addElRole($el, 'button');
          $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
      };
      function init() {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) {
          addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }
        if (params.containerMessage) {
          addElLabel($containerEl, params.containerMessage);
        } // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        if (params.itemRoleDescriptionMessage) {
          addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
        }
        addElRole($(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
        swiper.slides.each((slideEl, index) => {
          const $slideEl = $(slideEl);
          const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
        if ($nextEl && $nextEl.length) {
          initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        }
        if ($prevEl && $prevEl.length) {
          initNavEl($prevEl, wrapperId, params.prevSlideMessage);
        } // Pagination
        if (hasPagination()) {
          swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        }
      }
      function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
        if ($nextEl) {
          $nextEl.off('keydown', onEnterOrSpaceKey);
        }
        if ($prevEl) {
          $prevEl.off('keydown', onEnterOrSpaceKey);
        } // Pagination
        if (hasPagination()) {
          swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        }
      }
      on('beforeInit', () => {
        liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      });
      on('afterInit', () => {
        if (!swiper.params.a11y.enabled) return;
        init();
        updateNavigation();
      });
      on('toEdge', () => {
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
      });
      on('fromEdge', () => {
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
      });
      on('paginationUpdate', () => {
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
      });
      on('destroy', () => {
        if (!swiper.params.a11y.enabled) return;
        destroy();
      });
    }
    function History({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides'
        }
      });
      let initialized = false;
      let paths = {};
      const slugify = text => {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      };
      const getPathValues = urlOverride => {
        const window = getWindow();
        let location;
        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }
        const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
          key,
          value
        };
      };
      const setHistory = (key, index) => {
        const window = getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
          let root = swiper.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) {
          value = `${key}/${value}`;
        }
        const currentState = window.history.state;
        if (currentState && currentState.value === value) {
          return;
        }
        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value
          }, null, value);
        } else {
          window.history.pushState({
            value
          }, null, value);
        }
      };
      const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      };
      const setHistoryPopState = () => {
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, swiper.paths.value, false);
      };
      const init = () => {
        const window = getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
      };
      const destroy = () => {
        const window = getWindow();
        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', setHistoryPopState);
        }
      };
      on('init', () => {
        if (swiper.params.history.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.history.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
    }
    function HashNavigation({
      swiper,
      extendParams,
      emit,
      on
    }) {
      let initialized = false;
      const document = getDocument();
      const window = getWindow();
      extendParams({
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      });
      const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
          const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      };
      const setHash = () => {
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
          emit('hashSet');
        } else {
          const slide = swiper.slides.eq(swiper.activeIndex);
          const hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          emit('hashSet');
        }
      };
      const init = () => {
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
          const speed = 0;
          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHash = slide.attr('data-hash') || slide.attr('data-history');
            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }
        if (swiper.params.hashNavigation.watchState) {
          $(window).on('hashchange', onHashChange);
        }
      };
      const destroy = () => {
        if (swiper.params.hashNavigation.watchState) {
          $(window).off('hashchange', onHashChange);
        }
      };
      on('init', () => {
        if (swiper.params.hashNavigation.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.hashNavigation.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHash();
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHash();
        }
      });
    }
    /* eslint no-underscore-dangle: "off" */
    function Autoplay({
      swiper,
      extendParams,
      on,
      emit
    }) {
      let timeout;
      swiper.autoplay = {
        running: false,
        paused: false
      };
      extendParams({
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      });
      function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }
        clearTimeout(timeout);
        timeout = nextTick(() => {
          let autoplayResult;
          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.isBeginning) {
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              emit('autoplay');
            } else {
              stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.isEnd) {
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }
          if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
            run();
          }
        }, delay);
      }
      function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
      }
      function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
      }
      function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          run();
        } else {
          ['transitionend', 'webkitTransitionEnd'].forEach(event => {
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
          });
        }
      }
      function onVisibilityChange() {
        const document = getDocument();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
          pause();
        }
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
          run();
          swiper.autoplay.paused = false;
        }
      }
      function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) {
          stop();
        } else {
          run();
        }
      }
      function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          pause();
        }
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
      }
      function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) {
          return;
        }
        swiper.autoplay.paused = false;
        run();
      }
      function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
          swiper.$el.on('mouseenter', onMouseEnter);
          swiper.$el.on('mouseleave', onMouseLeave);
        }
      }
      function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
      }
      on('init', () => {
        if (swiper.params.autoplay.enabled) {
          start();
          const document = getDocument();
          document.addEventListener('visibilitychange', onVisibilityChange);
          attachMouseEvents();
        }
      });
      on('beforeTransitionStart', (_s, speed, internal) => {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            stop();
          }
        }
      });
      on('sliderFirstMove', () => {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            stop();
          } else {
            pause();
          }
        }
      });
      on('touchEnd', () => {
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          run();
        }
      });
      on('destroy', () => {
        detachMouseEvents();
        if (swiper.autoplay.running) {
          stop();
        }
        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      });
      Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
      });
    }
    function Thumb({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs'
        }
      });
      let initialized = false;
      let swiperCreated = false;
      swiper.thumbs = {
        swiper: null
      };
      function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }
        if (swiper.params.loop) {
          let currentIndex = swiper.activeIndex;
          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }
          const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
      }
      function init() {
        const {
          thumbs: thumbsParams
        } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Object.assign(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object.assign(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (isObject(thumbsParams.swiper)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
          swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
      }
      function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          let currentThumbsIndex = thumbsSwiper.activeIndex;
          let newThumbsIndex;
          let direction;
          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line
              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to
            const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
            const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }
            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }
          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }
          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }
        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
          }
        } else {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
          }
        }
      }
      on('beforeInit', () => {
        const {
          thumbs
        } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
      });
      on('slideChange update resize observerUpdate', () => {
        if (!swiper.thumbs.swiper) return;
        update();
      });
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
      });
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      });
      Object.assign(swiper.thumbs, {
        init,
        update
      });
    }
    function freeMode({
      swiper,
      extendParams,
      emit,
      once
    }) {
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02
        }
      });
      function onTouchMove() {
        const {
          touchEventsData: data,
          touches
        } = swiper; // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      }
      function onTouchEnd({
        currentPos
      }) {
        const {
          params,
          $wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data
        } = swiper; // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }
          return;
        }
        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop();
            const velocityEvent = data.velocities.pop();
            const distance = lastMoveEvent.position - velocityEvent.position;
            const time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;
            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.
            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }
          swiper.velocity *= params.freeMode.momentumVelocityRatio;
          data.velocities.length = 0;
          let momentumDuration = 1000 * params.freeMode.momentumRatio;
          const momentumDistance = swiper.velocity * momentumDuration;
          let newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          let doBounce = false;
          let afterBouncePosition;
          const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
          let needsLoopFix;
          if (newPosition < swiper.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }
              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }
              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeMode.sticky) {
            let nextSlide;
            for (let j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }
            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }
            newPosition = -newPosition;
          }
          if (needsLoopFix) {
            once('transitionEnd', () => {
              swiper.loopFix();
            });
          } // Fix duration
          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }
            if (params.freeMode.sticky) {
              // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
          }
          if (params.freeMode.momentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(() => {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          emit('_freeModeNoMomentumRelease');
        }
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
      }
      Object.assign(swiper, {
        freeMode: {
          onTouchMove,
          onTouchEnd
        }
      });
    }
    function Grid({
      swiper,
      extendParams
    }) {
      extendParams({
        grid: {
          rows: 1,
          fill: 'column'
        }
      });
      let slidesNumberEvenToRows;
      let slidesPerRow;
      let numFullColumns;
      const initSlides = slidesLength => {
        const {
          slidesPerView
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }
        if (slidesPerView !== 'auto' && fill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
      };
      const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
        const {
          slidesPerGroup,
          spaceBetween
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (slidesPerGroup * rows));
          const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
          slide.css({
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (fill === 'column') {
          column = Math.floor(i / rows);
          row = i - column * rows;
          if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
            row += 1;
            if (row >= rows) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
      };
      const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
        const {
          spaceBetween,
          centeredSlides,
          roundLengths
        } = swiper.params;
        const {
          rows
        } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
          snapGrid.splice(0, snapGrid.length);
          const newSlidesGrid = [];
          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }
          snapGrid.push(...newSlidesGrid);
        }
      };
      swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
      };
    }
    function appendSlide(slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params
      } = swiper;
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer) {
        swiper.update();
      }
    }
    function prependSlide(slides) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;
      if (params.loop) {
        swiper.loopDestroy();
      }
      let newActiveIndex = activeIndex + 1;
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer) {
        swiper.update();
      }
      swiper.slideTo(newActiveIndex, 0, false);
    }
    function addSlide(index, slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }
      const baseLength = swiper.slides.length;
      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }
      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }
      let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      const slidesBuffer = [];
      for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }
      for (let i = 0; i < slidesBuffer.length; i += 1) {
        $wrapperEl.append(slidesBuffer[i]);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
    function removeSlide(slidesIndexes) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }
      let newActiveIndex = activeIndexBuffer;
      let indexToRemove;
      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
    function removeAllSlides() {
      const swiper = this;
      const slidesIndexes = [];
      for (let i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }
      swiper.removeSlide(slidesIndexes);
    }
    function Manipulation({
      swiper
    }) {
      Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
      });
    }
    function effectInit(params) {
      const {
        effect,
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams,
        perspective
      } = params;
      on('beforeInit', () => {
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) {
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
      });
      on('setTranslate', () => {
        if (swiper.params.effect !== effect) return;
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
      });
    }
    function effectTarget(effectParams, $slideEl) {
      if (effectParams.transformEl) {
        return $slideEl.find(effectParams.transformEl).css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        });
      }
      return $slideEl;
    }
    function effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides
    }) {
      const {
        slides,
        activeIndex,
        $wrapperEl
      } = swiper;
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) {
          $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        } else {
          $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        }
        $transitionEndTarget.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
    function EffectFade({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        fadeEffect: {
          crossFade: false,
          transformEl: null
        }
      });
      const setTranslate = () => {
        const {
          slides
        } = swiper;
        const params = swiper.params.fadeEffect;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset = $slideEl[0].swiperSlideOffset;
          let tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.css({
            opacity: slideOpacity
          }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      };
      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };
      effectInit({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }
    function EffectCube({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      });
      const setTranslate = () => {
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
          browser
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({
              height: `${swiperWidth}px`
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }
          if (rtl) {
            tx = -tx;
          }
          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }
          const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }
          $slideEl.transform(transform);
          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
      };
      const setTransition = duration => {
        const {
          $el,
          slides
        } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      };
      effectInit({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        })
      });
    }
    function createShadow(params, $slideEl, side) {
      const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
      const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
      let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
      if (!$shadowEl.length) {
        $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
      }
      return $shadowEl;
    }
    function EffectFlip({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
          transformEl: null
        }
      });
      const setTranslate = () => {
        const {
          slides,
          rtlTranslate: rtl
        } = swiper;
        const params = swiper.params.flipEffect;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
            }
            if (shadowAfter.length === 0) {
              shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };
      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };
      effectInit({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }
    function EffectCoverflow({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
          transformEl: null
        }
      });
      const setTranslate = () => {
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);
          let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }
          let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      };
      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      };
      effectInit({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true
        })
      });
    }
    function EffectCreative({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: false,
          progressMultiplier: 1,
          perspective: true,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });
      const getTranslateValue = value => {
        if (typeof value === 'string') return value;
        return `${value}px`;
      };
      const setTranslate = () => {
        const {
          slides,
          $wrapperEl,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.creativeEffect;
        const {
          progressMultiplier: multiplier
        } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
          const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
          $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
          let originalProgress = progress;
          if (!isCenteredSlides) {
            originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
          }
          const offset = $slideEl[0].swiperSlideOffset;
          const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
          const r = [0, 0, 0];
          let custom = false;
          if (!swiper.isHorizontal()) {
            t[1] = t[0];
            t[0] = 0;
          }
          let data = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          if (progress < 0) {
            data = params.next;
            custom = true;
          } else if (progress > 0) {
            data = params.prev;
            custom = true;
          } // set translate
          t.forEach((value, index) => {
            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
          }); // set rotates
          r.forEach((value, index) => {
            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
          });
          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const translateString = t.join(', ');
          const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
          const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
          const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
          const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
          if (custom && data.shadow || !custom) {
            let $shadowEl = $slideEl.children('.swiper-slide-shadow');
            if ($shadowEl.length === 0 && data.shadow) {
              $shadowEl = createShadow(params, $slideEl);
            }
            if ($shadowEl.length) {
              const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
              $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
            }
          }
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform).css({
            opacity: opacityString
          });
          if (data.origin) {
            $targetEl.css('transform-origin', data.origin);
          }
        }
      };
      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };
      effectInit({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => swiper.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }
    function EffectCards({
      swiper,
      extendParams,
      on
    }) {
      extendParams({
        cardsEffect: {
          slideShadows: true,
          transformEl: null
        }
      });
      const setTranslate = () => {
        const {
          slides,
          activeIndex
        } = swiper;
        const params = swiper.params.cardsEffect;
        const {
          startTranslate,
          isTouched
        } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max(slideProgress, -4), 4);
          let offset = $slideEl[0].swiperSlideOffset;
          if (swiper.params.centeredSlides && !swiper.params.cssMode) {
            swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
          }
          if (swiper.params.centeredSlides && swiper.params.cssMode) {
            offset -= slides[0].swiperSlideOffset;
          }
          let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let tY = 0;
          const tZ = -100 * Math.abs(progress);
          let scale = 1;
          let rotate = -2 * progress;
          let tXAdd = 8 - Math.abs(progress) * 0.75;
          const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
          const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
          if (isSwipeToNext || isSwipeToPrev) {
            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
            rotate += -28 * progress * subProgress;
            scale += -0.5 * subProgress;
            tXAdd += 96 * subProgress;
            tY = `${-25 * subProgress * Math.abs(progress)}%`;
          }
          if (progress < 0) {
            // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
          } else if (progress > 0) {
            // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
          } else {
            tX = `${tX}px`;
          }
          if (!swiper.isHorizontal()) {
            const prevY = tY;
            tY = tX;
            tX = prevY;
          }
          const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
          const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;
          if (params.slideShadows) {
            // Set shadows
            let $shadowEl = $slideEl.find('.swiper-slide-shadow');
            if ($shadowEl.length === 0) {
              $shadowEl = createShadow(params, $slideEl);
            }
            if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
          }
          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };
      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };
      effectInit({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }
    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);
    return Swiper;
})));
//# sourceMappingURL=/scripts/lib/swiper-bundle.js.map;;
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);;
function LoadBannerImages(e) {
  var slideItem = $(".banner-wrap .swiper-wrapper .swiper-slide"),
  dragSlider = slideItem.attr("data-drag-slider"),
  effectSlider = slideItem.attr("data-effect-slider"),
  timingEachSlide = slideItem.attr("data-timing"),
  dataSwiper = '{"dragSlider":"' + dragSlider + '",' + '"effectSlider":"' + effectSlider + '",' + '"timingEachSlide":"' + timingEachSlide + '"}',
  dataAttr = JSON.parse(dataSwiper);
  //there are more one item we will add the swiper
  if (slideItem && slideItem.length > 1) {
    var swiper = new Swiper(".banner-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
      },
      allowTouchMove: "true" == dataAttr.dragSlider,
      autoplay: {
        delay: dataAttr.timingEachSlide,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: dataAttr.effectSlider,
      flipEffect: {
        slideShadows: true,
      },
      coverflowEffect: {
        rotate: 30,
        slideShadows: true,
      },
      cubeEffect: {
        slideShadows: true,
      },
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      },
    });
  }
}
function ResizeBanner(maxWidth) {
  $window = $(window);  
  if  ($window.width() <= maxWidth){
    var $width = $window.width();
    var numberScale = 2.57;
    var bannerSlide = $('.swiper-slide:not(.banner-fullpage-true)')
    if ($('.childpage-content').hasClass('investor-relations')) {
      numberScale = 2.02;
    }
    $heightBanner = $width/numberScale;
    bannerSlide.css("height", $heightBanner);
  }
  else{
    bannerSlide.css("height","");   
  }
}
function BannerHeight(maxWidth){
  ResizeBanner(maxWidth);  
  $window.resize(function() {
    $window = $(window);
    if($window.width() <= maxWidth) {
      ResizeBanner(maxWidth);
    }
    else{
      $(".swiper-slide").css("height","");   
    }
  });
}
$(document).ready(function () {
  var $w = $(window);
  var lastScrollTop = $w.scrollTop();
  var bannerTicket = $('.banner-ticket');
  if  ($w.width() <= 1600){
    LoadBannerImages();
    BannerHeight(1600);
  }
  $(window).one('scroll', function() {
    var st = $w.scrollTop();
    var startPos = 1;
    lastScrollTop = st;
    console.log(lastScrollTop);
    if(lastScrollTop > 1 && $("#business-highlights").length > 0) {
      $('html, body').animate({
        scrollTop: $("#business-highlights").offset().top - 100
      }, 500);
    }
  });
  if($w.width() > 1025) {
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      autoHeight: true, //enable auto height
      slidesPerView: 'auto',  
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0,
        releaseOnEdges: true,
      },
      speed: 500,
      on: {
        init: function() {
          $('.swiper-wrapper').removeClass('slide-active-1 slide-active-2 slide-active-3');
        },
        slideChangeTransitionEnd: function() {
          if($('.swiper-slide-active').hasClass('slide-1')) {
            $('.swiper-wrapper').removeClass('slide-1 slide-2 slide-3');
            $('.swiper-wrapper').addClass('slide-active-1');
          }
          if($('.swiper-slide-active').hasClass('slide-2')) {
            $('.swiper-wrapper').removeClass('slide-1 slide-2 slide-3');
            $('.swiper-wrapper').addClass('slide-active-2');
          }
        },
        reachEnd: function() {
          $('.swiper-wrapper').removeClass('slide-active-1 slide-active-2 slide-active-3');
          $('.swiper-wrapper').addClass('slide-active-3');
        },
        reachBeginning: function() {
            $('.swiper-wrapper').removeClass('slide-active-1 slide-active-2 slide-active-3');
        }
      }
    });
  }
});;
// $(document).ready(function() {
//     wow = new WOW()
//     wow.init();
// });
$(document).ready(function() {
    AOS.init({
        once: true,
    });
    // setTimeout(function() {
    //     $('.count').each(function () {
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 5000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $this.text(Math.celi(now));
    //             }
    //         });
    //     });
    // },2000);
    var isAlreadyRun = false;
    $(window).scroll( function() {
        // $('.count').each(function() {
        //     var $this = $(this),
        //     countTo = $this.attr('data-count').replace(/,/g, '');
        //     $({
        //         countNum: $this.text()
        //     }).animate({
        //         countNum: countTo
        //     }, {
        //         duration: 1000,
        //         easing: 'swing',
        //         step: function() {
        //             $this.text(numberWithCommas(Math.floor(this.countNum)));
        //         },
        //         complete: function() {
        //             $this.text(numberWithCommas(this.countNum));
        //         }
        //     });
        // });
        // isAlreadyRun = true;
        // function numberWithCommas(x) {
        //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        // }
        const counters = document.querySelectorAll('.count');
        const speed = 100;
        counters.forEach( counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-count');
                const realvalue = counter.getAttribute('data');
            const data = +counter.innerText;
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 250);
                }else{
                counter.innerText = realvalue;
                }
            }
            animate();
        });
        isAlreadyRun = true;
    });
    var btn = $('.back-to-top');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    $('.content-tab:first-child').addClass('d-block');
    $('.device_buttons:first-child').addClass('d-block');
    $(".device_buttons").each(function () {
        $(this).on("click", function () {
            var listItems = $(".device_buttons");
            for (let i = 0; i < listItems.length; i++) {
                if (this != listItems[i]) {
                    listItems[i].classList.remove("d-block");
                }
            }
            if (this.classList.contains("d-block")) {
                this.classList.remove("d-block");
            } else if (!this.classList.contains("d-block")) {
                this.classList.add("d-block");
            }
            console.log($(this).data())
            var count = $(this).data('buttonCount')
            console.log('count ' + count)
            // ES5
            $('.content-tab').each(function(index, item)  {
                if (item.getAttribute('data-content-count') != count) {
                    item.classList.remove('d-block')
                }
                // console.log('content count ' + item.getAttribute('data-content-count'))
                if (item.getAttribute('data-content-count') == count) {
                    if (!item.classList.contains('d-block')) {
                        console.log("add?")
                        item.classList.add('d-block')
                    } else if (item.classList.contains('d-block')) {
                        console.log("remove?")
                        item.classList.remove('d-block')
                    }
                }
            })
        });
    });
});;
$(document).ready(function() {
  $body = $('body');
  var $lang = $('html')[0].lang;
  var $offsetHeightBody = $body.height();
  function searchClick() {
    $('.search_box_btn img').on('click', function(){
      var $this = $(this).closest('.search-wrap');
      $this.toggleClass('search-on');
    });
  }
  function languageDropdown() {
    if($(window).width() <= 1025) {
      var $lang = $('.language');
      var $langList = $('.lang-list');
      $('.wrap-lang > a').on('click', function(e) {
        e.preventDefault();
        $lang.toggleClass('open-search');
        $langList.slideToggle();
      })
    }
  }
  function menuDropdown() {
    if($('.header').hasClass('menu-mobile-dropdown')) {
      var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      // Variables privadas
      var links = this.el.find('.open-sub');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
      Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
          $this = $(this),
          $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
          $el.find('.sub-menu').not($next).slideUp().parent().removeClass('open');
        };
      }	
      var accordion = new Accordion($('.menu-responsive'), false);
      if($(window).width() <= 1200) {
        $('.btn-menu-offcanvas').on('click', function() {
          $this = $(this);
          $this.toggleClass('active-menu');
          $('body').toggleClass('open-menu');
          $this.closest('.header').find('.menu-mobile > .menu-responsive').slideToggle();
        });
      }
    }
  }
  function menuOffcanvas() {
    if($('.header').hasClass('menu-mobile-off-canvas')) {
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.open-sub');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
      Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
          $this = $(this),
          $next = $this.next();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
          $el.find('.sub-menu').not($next).parent().removeClass('open');
        };
      }	
      var accordion = new Accordion($('.menu-responsive'), false);
      if($(window).width() <= 1200) {
        $('.btn-menu-offcanvas').on('click', function() {
          $this = $(this);
          $this.toggleClass('active-menu');
          $('body').toggleClass('open-menu');
          $this.closest('.site-header').find('.menu-responsive').toggleClass('active');
        });
        $('.back a').on('click', function(){
          $this = $(this);
          $this.closest('.hassub').removeClass('open');
        });
      } 
    }
  }
  function headerSticky() {
    var myElement = document.querySelector(".header");
    var headroom  = new Headroom(myElement);
    headroom.init();
  }
  searchClick();
  languageDropdown();
  menuDropdown();
  menuOffcanvas();
  if($offsetHeightBody > 100 && $(window).width() > 1200) {
    headerSticky();
  }
});;
/**
 * Modules in this bundle
 * @license
 *
 * modal-video:
 *   license: appleple
 *   author: appleple
 *   homepage: http://developer.a-blogcms.jp
 *   version: 2.4.6
 *
 * custom-event-polyfill:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   contributors: Frank Panetta, Mikhail Reenko <reenko@yandex.ru>, Joscha Feth <joscha@feth.com>
 *   homepage: https://github.com/krambuhl/custom-event-polyfill#readme
 *   version: 0.3.0
 *
 * es6-object-assign:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Rubén Norte <rubennorte@gmail.com>
 *   homepage: https://github.com/rubennorte/es6-object-assign
 *   version: 1.1.0
 *
 * This header is generated by licensify (https://github.com/twada/licensify)
 */
(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
// Polyfill for creating CustomEvents on IE9/10/11
// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}
},{}],2:[function(require,module,exports){
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
'use strict';
function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }
  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }
    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}
function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}
module.exports = {
  assign: assign,
  polyfill: polyfill
};
},{}],3:[function(require,module,exports){
'use strict';
var ModalVideo = require('../index');
var applyJQuery = function applyJQuery(jQuery) {
  jQuery.fn.modalVideo = function (settings) {
    if (typeof settings === 'strings') {} else {
      new ModalVideo(this, settings);
    }
    return this;
  };
};
if (typeof define === 'function' && define.amd) {
  define(['jquery'], applyJQuery);
} else {
  var jq = window.jQuery ? window.jQuery : window.$;
  if (typeof jq !== 'undefined') {
    applyJQuery(jq);
  }
}
module.exports = applyJQuery;
},{"../index":5}],4:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
require('custom-event-polyfill');
var _util = require('../lib/util');
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var assign = require('es6-object-assign').assign;
var defaults = {
  channel: 'youtube',
  facebook: {},
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    loop: 0,
    modestbranding: null,
    mute: 0,
    origin: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark',
    nocookie: false
  },
  ratio: '16:9',
  vimeo: {
    api: false,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    controls: true,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    muted: false,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  allowFullScreen: true,
  allowAutoplay: true,
  animationSpeed: 300,
  classNames: {
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoBody: 'modal-video-body',
    modalVideoInner: 'modal-video-inner',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
};
var ModalVideo = function () {
  function ModalVideo(ele, option) {
    var _this = this;
    _classCallCheck(this, ModalVideo);
    var opt = assign({}, defaults, option);
    var selectors = typeof ele === 'string' ? document.querySelectorAll(ele) : ele;
    var body = document.querySelector('body');
    var classNames = opt.classNames;
    var speed = opt.animationSpeed;
    [].forEach.call(selectors, function (selector) {
      selector.addEventListener('click', function (event) {
        if (selector.tagName === 'A') {
          event.preventDefault();
        }
        var videoId = selector.dataset.videoId;
        var channel = selector.dataset.channel || opt.channel;
        var id = (0, _util.getUniqId)();
        var videoUrl = selector.dataset.videoUrl || _this.getVideoUrl(opt, channel, videoId);
        var html = _this.getHtml(opt, videoUrl, id);
        (0, _util.append)(body, html);
        var modal = document.getElementById(id);
        var btn = modal.querySelector('.js-modal-video-dismiss-btn');
        var timeout = void 0; // used for resize
        var resizeModalVideoWhenHeightGreaterThanWindowHeight = function resizeModalVideoWhenHeightGreaterThanWindowHeight() {
          clearTimeout(timeout);
          // Resize modal-video-iframe-wrap when window size changed when the height of the video is greater than the height of the window.
          timeout = setTimeout(function () {
            var width = _this.getWidthFulfillAspectRatio(opt.ratio, window.innerHeight, window.innerWidth);
            var modalVideoInner = document.getElementById('modal-video-inner-' + id);
            if (modalVideoInner.style.maxWidth !== width) {
              modalVideoInner.style.maxWidth = width;
            }
          }, 10);
        };
        modal.focus();
        modal.addEventListener('click', function () {
          (0, _util.addClass)(modal, classNames.modalVideoClose);
          window.removeEventListener('resize', resizeModalVideoWhenHeightGreaterThanWindowHeight);
          setTimeout(function () {
            (0, _util.remove)(modal);
            selector.focus();
          }, speed);
        });
        modal.addEventListener('keydown', function (e) {
          if (e.which === 9) {
            e.preventDefault();
            if (document.activeElement === modal) {
              btn.focus();
            } else {
              modal.setAttribute('aria-label', '');
              modal.focus();
            }
          }
        });
        window.addEventListener('resize', resizeModalVideoWhenHeightGreaterThanWindowHeight);
        btn.addEventListener('click', function () {
          (0, _util.triggerEvent)(modal, 'click');
        });
      });
    });
  }
  _createClass(ModalVideo, [{
    key: 'getPadding',
    value: function getPadding(ratio) {
      var arr = ratio.split(':');
      var width = Number(arr[0]);
      var height = Number(arr[1]);
      var padding = height * 100 / width;
      return padding + '%';
    }
    /**
     * Calculate the width of the video fulfill aspect ratio.
     * When the height of the video is greater than the height of the window,
     * this function return the width that fulfill the aspect ratio for the height of the window.
     * In other cases, this function return '100%'(the height relative to the width is determined by css).
     *
     * @param string ratio
     * @param number maxHeight
     * @param number maxWidth
     * @returns string
     */
  }, {
    key: 'getWidthFulfillAspectRatio',
    value: function getWidthFulfillAspectRatio(ratio, maxHeight, maxWidth) {
      var arr = ratio.split(':');
      var width = Number(arr[0]);
      var height = Number(arr[1]);
      // Height that fulfill the aspect ratio for maxWidth.
      var videoHeight = maxWidth * (height / width);
      if (maxHeight < videoHeight) {
        // when the height of the video is greater than the height of the window.
        // calculate the width that fulfill the aspect ratio for the height of the window.
        // ex: 16:9 aspect ratio
        // 16:9 = width : height
        // → width = 16 / 9 * height
        return Math.floor(width / height * maxHeight) + 'px';
      }
      return '100%';
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString(obj) {
      var url = '';
      Object.keys(obj).forEach(function (key) {
        url += key + '=' + obj[key] + '&';
      });
      return url.substr(0, url.length - 1);
    }
  }, {
    key: 'getVideoUrl',
    value: function getVideoUrl(opt, channel, videoId) {
      if (channel === 'youtube') {
        return this.getYoutubeUrl(opt.youtube, videoId);
      } else if (channel === 'vimeo') {
        return this.getVimeoUrl(opt.vimeo, videoId);
      } else if (channel === 'facebook') {
        return this.getFacebookUrl(opt.facebook, videoId);
      } else if (channel === 'custom') {
        return opt.url;
      }
      return '';
    }
  }, {
    key: 'getVimeoUrl',
    value: function getVimeoUrl(vimeo, videoId) {
      var query = this.getQueryString(vimeo);
      return '//player.vimeo.com/video/' + videoId + '?' + query;
    }
  }, {
    key: 'getYoutubeUrl',
    value: function getYoutubeUrl(youtube, videoId) {
      var query = this.getQueryString(youtube);
      if (youtube.nocookie === true) {
        return '//www.youtube-nocookie.com/embed/' + videoId + '?' + query;
      }
      return '//www.youtube.com/embed/' + videoId + '?' + query;
    }
  }, {
    key: 'getFacebookUrl',
    value: function getFacebookUrl(facebook, videoId) {
      return '//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/' + videoId + '&' + this.getQueryString(facebook);
    }
  }, {
    key: 'getHtml',
    value: function getHtml(opt, videoUrl, id) {
      var padding = this.getPadding(opt.ratio);
      var classNames = opt.classNames;
      return '\n      <div class="' + classNames.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + opt.aria.openMessage + '" id="' + id + '">\n        <div class="' + classNames.modalVideoBody + '">\n          <div class="' + classNames.modalVideoInner + '" id="modal-video-inner-' + id + '">\n            <div class="' + classNames.modalVideoIframeWrap + '" style="padding-bottom:' + padding + '">\n              <button class="' + classNames.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + opt.aria.dismissBtnMessage + '"></button>\n              <iframe width=\'460\' height=\'230\' src="' + videoUrl + '" frameborder=\'0\' allowfullscreen=' + opt.allowFullScreen + ' tabindex="-1" allow="' + (opt.allowAutoplay ? 'autoplay;' : '') + ' accelerometer; encrypted-media; gyroscope; picture-in-picture" />\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
    }
  }]);
  return ModalVideo;
}();
exports.default = ModalVideo;
module.exports = exports['default'];
},{"../lib/util":6,"custom-event-polyfill":1,"es6-object-assign":2}],5:[function(require,module,exports){
'use strict';
module.exports = require('./core/');
},{"./core/":4}],6:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var append = exports.append = function append(element, string) {
  var div = document.createElement('div');
  div.innerHTML = string;
  while (div.children.length > 0) {
    element.appendChild(div.children[0]);
  }
};
var getUniqId = exports.getUniqId = function getUniqId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};
var remove = exports.remove = function remove(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var addClass = exports.addClass = function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
};
var triggerEvent = exports.triggerEvent = function triggerEvent(el, eventName, options) {
  var event = void 0;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, { cancelable: true });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, false, false, options);
  }
  el.dispatchEvent(event);
};
},{}]},{},[3]);;
$(document).ready(function () {
  $(".left-menu .multi-level a[role='button']").click(function () {
    $(this).parent().find(".sub-menu-wrapper").toggleClass("show collapse");
  });
  $(".left-menu .multi-level .icon").click(function () {
    $(this).toggleClass("rotate");
  });
});;
function configIframe() {
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        //var target = $(e.target);
        var href = $(e.target).attr("href");
        var targetIframe = $(href).find('iframe');
        if (targetIframe.attr('src') !== undefined && targetIframe.attr('src').length > 0) {
            return;
        }
        if ($(href).find('.loading-icon').length > 0) {
            $(href).find('.loading-icon').show();
        }
        if (targetIframe.attr("data-src") !== undefined && targetIframe.attr("data-src").length > 0) {
            targetIframe.attr('src', targetIframe.attr("data-src"));
        }
        $(href).find('iframe').on('load',function () {
            if ($('.loading-icon').length > 0) {
                $('.loading-icon').hide();
            }
        });
    });
    // Write the following loading in $(window).load we can hide loading-icon with iframe.load
    // this use for loading all tools
    $('iframe').each(function () {
        var iframe = $(this);
        if (iframe.attr("ea-src") !== undefined && iframe.attr("ea-src").length > 0) {
            this.src = iframe.attr("ea-src");
        }
        //this.src = this.src;
    });
    $('iframe.eurolandtool').on('load', function(){
        if ($('.loading-icon').length > 0) {
                $('.loading-icon').hide();
            }
    })
    $(".eurolandtool").each(function () {
        var iframe = $(this);
        EurolandToolIntegrationObject.set(iframe.attr("id"));
    });
}
$(document).ready(function () {
    configIframe();
});;
$(document).ready(function () {
  $(".sub-menu a").click(function () {
    var href = $(this).attr("href").split("#");
    //console.log(href[1])
    activaTab(href[1]);
  });
  //investor relation tab
  $(".tab-head .nav a").click(function () {
    var href = $(this).attr("href").split("#");
    //console.log(href[1])
    //activaTab(href[1]);
  });
  //active tab
  if ($(".tabcontent-container").length > 0) {
    naviTab();
    $(".nav li").each(function () {
      var link = $(this).children("a").first();
      var href = link.attr("href");
      link.click(function () {
        ChangeUrl(href.replace("#", ""), href);
      });
    });
  }
});
//local active
function activaTab(tab) {
  $('.tab-head .nav a[href="#' + tab + '"]').tab("show");
}
function ChangeUrl(page, url) {
  if (typeof history.pushState != "undefined") {
    var obj = { Page: page, Url: url };
    history.pushState(obj, obj.Page, obj.Url);
  } else {
    alert("Browser does not support HTML5.");
  }
}
function naviTab() {
  var hash = location.hash.substr(1);
  if (hash.length > 0) {
    $(".tab-head .nav li").removeClass("active");
    $(".tab-head .nav li a").removeClass("active");
    $(".tab-head .nav li a[href='#" + hash.toLowerCase() + "']")
      .parent()
      .addClass("active");
    $(".tab-head .nav li a[href='#" + hash.toLowerCase() + "']").addClass(
      "active"
    );
    $(".tab-content .tab-pane").removeClass("active show");
    var targetActive = $(".tab-content #" + hash.toLowerCase());
    targetActive.addClass("active show");
    targetActive = targetActive.find("iframe");
    if (
      targetActive.attr("data-src") !== undefined &&
      targetActive.attr("data-src").length > 0
    ) {
      targetActive.attr("src", targetActive.attr("data-src"));
    }
    if (
      targetActive.attr("ea-src") !== undefined &&
      targetActive.attr("ea-src").length > 0
    ) {
      targetActive.attr("src", targetActive.attr("ea-src"));
    }
    targetActive.on("load", function () {
      if ($(".loading-icon").length > 0) {
        $(".loading-icon").hide();
      }
    });
  }
};
$(document).ready(function () {
    $(".board-of-directors-container .head-info").click(function () {
        if ($(this).next(".desc").is(":visible")) {
            $(".board-of-directors-container .item").removeClass("active")
            $(this).parent(".item").removeClass("active")
            $(".desc").slideUp()
        }
        else {
            $(".board-of-directors-container .item").removeClass("active")
            $(this).parent(".item").addClass("active")
            $(".desc").slideUp()
            $(this).next(".desc").slideDown()
        }
    });
});;
// $(document).ready(function () {
//     var lang = $("html").attr("lang");
//     lang = lang.toLowerCase();
//     const containers = document.querySelectorAll('.esg-report-title');
//     var maxLength = 35;
//     if (lang === "en") {
//         maxLength = 70;
//     }
//     for (i = 0; i < containers.length; i++) {
//         var p = containers[i].querySelector('a');
//         if (p != null && p.textContent != null) {
//             var textLength = p.textContent.length;
//             p.textContent = p.textContent.substring(0, maxLength);
//             if (textLength > maxLength && lang === "en") {
//                 p.textContent = p.textContent.substring(0, p.textContent.lastIndexOf(' ')) + '...';
//             }
//             else if (textLength > maxLength && (lang === "cn" || lang === "hk")) {
//                 p.textContent = p.textContent + '...';
//             }
//         }
//     }
// }); ;
$(document).ready(function () {
    $(".faqs-container .head-info").click(function (e) {
        if ($(this).next(".desc").is(":visible")) {
            $(".faqs-container .item").removeClass("active")
            $(this).parent().removeClass("active")
            $(".desc").slideUp()
            e.stopImmediatePropagation();
        }
        else {
            $(".faqs-container .item").removeClass("active")
            $(this).parent(".item").addClass("active")
            $(".desc").slideUp()
            $(this).next(".desc").slideDown()
            e.stopImmediatePropagation();
        }
    });
    $('.box:first-child').addClass('d-block');
    $('.tab-header:first-child').addClass('active');
    $(".tab-header").each(function () {
        $(this).on("click", function () {
            var listItems = $(".tab-header");
            for (let i = 0; i < listItems.length; i++) {
                if (this != listItems[i]) {
                    listItems[i].classList.remove("active");
                }
            }
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            } else if (!this.classList.contains("active")) {
                this.classList.add("active");
            }
            console.log($(this).data())
            var count = $(this).data('buttonCount')
            console.log('count ' + count)
            // ES5
            $('.box').each(function(index, item)  {
                if (item.getAttribute('data-content-count') != count) {
                    item.classList.remove('d-block')
                }
                // console.log('content count ' + item.getAttribute('data-content-count'))
                if (item.getAttribute('data-content-count') == count) {
                    if (!item.classList.contains('d-block')) {
                        console.log("add?")
                        item.classList.add('d-block')
                    } else if (item.classList.contains('d-block')) {
                        console.log("remove?")
                        item.classList.remove('d-block')
                    }
                }
            })
        });
    });
});;
var hpNewsAPI = hPNewsUrl;
$.getJSON(hpNewsAPI, function (response) {
  // posts = response;
  const  posts = response;
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  var htmls = posts.map(function (post, index) {
    var day = post.date.slice(8, 10);
    var month = post.date.slice(5, 7);
    var year = post.date.slice(0, 4);
    var link = post.link.replaceAll("%26", "&");
    if (index < 4) {
      // return (
      //   '<div class="news-item"> <div class="title"> <a onclick="window.open(\'' + link + '\'', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');">' + post.title + '</a> </div> <div class="published-date">' + day + '/' + month + '/' + year + '</div> </div>'
      // );
      return `
        <div class="news-item">
            <div class="title">
                <a class="link text-font-size-24" onclick="window.open('${link}', '_blank', 'location=yes,height=600,width=600,scrollbars=yes,status=yes');">
                    ${post.title}
                </a>
            </div>
            <div class="published-date text-font-size-14">
                ${year}/${month}/${day}
            </div>
        </div>
      `;
    }
  });
  var html = htmls.join("");
  $("#hp-recent-news").html(html);
});;
function getDoc(frame) {
  var doc = null;
  // IE8 cascading access check
  try {
    if (frame.contentWindow) {
      doc = frame.contentWindow.document;
    }
  } catch (err) {}
  if (doc) {
    // successful getting content
    return doc;
  }
  try {
    // simply checking may throw in ie8 under ssl or mismatched protocol
    doc = frame.contentDocument ? frame.contentDocument : frame.document;
  } catch (err) {
    // last attempt
    doc = frame.document;
  }
  return doc;
}
//above contact page
$("#contact-page-form").submit(function (e) {
  //var $captcha = $(this).find('#contactcaptcha'),
  //response = grecaptcha.getResponse(0);
  //response = grecaptcha.getResponse();
  if (false) {
    $("#contact-page-form .message").removeClass("success");
    $("#contact-page-form .message").addClass("error");
    $("#contact-page-form #cresponse").text("reCAPTCHA is mandatory");
    $(".contacts-msg-error").text("reCAPTCHA is mandatory");
    event.preventDefault();
    // if (!$captcha.hasClass("error")) {
    //     $captcha.addClass("error");
    // }
  } else {
    var formObj = $(this);
    var formURL = formObj.attr("action");
    if (window.FormData !== undefined) {
      // for HTML5 browsers
      var formData = new FormData(this);
      $.ajax({
        url: "/en/contact-form/",
        type: "POST",
        data: formData,
        mimeType: "multipart/form-data",
        contentType: false,
        cache: false,
        processData: false,
        success: function (results, data, textStatus, jqXHR) {
          $("#contact-page-form .message").removeClass("error");
          $("#contact-page-form .message").addClass("success");
          $("#contact-page-form").find("#cresponse").html(results);
          //alert("submission received");
          $(".LoaderForms").css("display", "none");
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $(".LoaderForms").css("display", "none");
        },
      });
      e.preventDefault();
    } else {
      //for olden browsers
      //generate a random id
      var iframeId = "unique" + new Date().getTime();
      //create an empty iframe
      var iframe = $(
        '<iframe src="javascript:false;" name="' + iframeId + '" />'
      );
      //hide it
      iframe.hide();
      //set form target to iframe
      formObj.attr("target", iframeId);
      //Add iframe to body
      iframe.appendTo("body");
      iframe.load(function (e) {
        var doc = getDoc(iframe[0]);
        var docRoot = doc.body ? doc.body : doc.documentElement;
        var data = docRoot.innerHTML;
        //data is returned from server.
      });
    }
    $(".contacts-msg-error").text("");
    //$captcha.removeClass("error");
  }
});
$(".reset").on("click", function (e) {
  e.preventDefault();
  $(".field-reset").val("");
});
/*
///$("#contact-page-form").submit();// JavaScript Document
function onSubmit(token) {
  document.getElementById("contact-page-form").submit();
}
function validate(event) {
  event.preventDefault();
  //response = grecaptcha.getResponse();
  if (!document.getElementById('name').value) {
    alert("You must add text to the required field");
  } else {
    grecaptcha.execute();
    //response = grecaptcha.getResponse();
    //document.getElementById("contact-page-form").submit();
  }
}
function onload() {
  var element = document.getElementById('submit');
  element.onclick = validate;
}
*/;
$(document).ready(function () {
    // $(".year-content").slideUp("slow","linear");
    // $(".show").slideDown("slow", "linear");
  // Select year
    $(".year-item").click(function () {
        $(".year-item").removeClass("active");
        $(this).addClass("active");
        $(".year-content").removeClass("show");
        $("#result").addClass("hide");
        var yearSelect = $(this).text().trim();
        $("#" + yearSelect + "-content").addClass("show");
        $(".year-content").slideUp("slow", "linear");
        //$(".show").slideDown("slow", "linear");
    });
    $("#all-news").click(function () {
        $(".year-item").removeClass("active");
        $(this).addClass("active");
        $(".year-content").removeClass("show");
        $("#result").addClass("hide");
        $("#all-year-content").addClass("show");
        $(".year-content").slideUp("slow", "linear");
        $(".show").slideDown("slow", "linear");
    });
    $("#results").click(function () {
        $(".year-item").removeClass("active");
        $(this).addClass("active");
        $(this).removeClass("hide");
        $(".year-content").removeClass("show");
        $("#search-results").addClass("show");
        $(".year-content").slideUp("slow", "linear");
        $(".show").slideDown("slow", "linear");
    });
  /* Search result */
  $(".search .submit-btn").click(function (e) {
    e.preventDefault();
    let searchUrl = "";
    let searchString = $("#key-word").val();
    let yearTabUrl = "&yearTab=results";
    let searchActionUrl = "&searchAction=true";
    var dateFrom = new Date($.now());
    if (searchString === "") {
      searchUrl = "?keyword=";
    } else {
      searchUrl = "?keyword=" + searchString;
    }
    if (!window.location.origin) {
      // For IE
      window.location.origin =
        window.location.protocol +
        "//" +
        (window.location.port ? ":" + window.location.port : "") +
        searchUrl +
        yearTabUrl +
        searchActionUrl;
    } else {
      window.location =
        window.location.origin +
        window.location.pathname +
        searchUrl +
        yearTabUrl +
        searchActionUrl;
    }
  });
});;
var quarterlyResultsSwiper = new Swiper(".quarterly-results-swiper", {
    spaceBetween: 0,
    lidesPerView: 4,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        1061: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 3,
        },
        1660: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".quarterly-results-swiper-next",
        prevEl: ".quarterly-results-swiper-prev",
    },
});
// var myAudio = document.getElementById("myAudio");
// var isPlaying = false;
// function togglePlay() {
//     isPlaying ? myAudio.pause() : myAudio.play();
//     myAudio.onplaying = function() {
//         isPlaying = true;
//     };
//     myAudio.onpause = function() {
//         isPlaying = false;
//     };
// };;
