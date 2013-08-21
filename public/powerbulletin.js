;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports=function(n,r,t){function e(t,i){if(!r[t]){if(!n[t]){var o=typeof require=="function"&&require;if(!i&&o)return o(t,!0);if(u)return u(t,!0);throw new Error("Cannot find module '"+t+"'")}var a=r[t]={exports:{}};n[t][0].call(a.exports,function(r){var u=n[t][1][r];return e(u?u:r)},a,a.exports)}return r[t].exports}var u=typeof require=="function"&&require;for(var i=0;i<t.length;i++)e(t[i]);return e}({"prelude-ls":[function(n,r,t){r.exports=n("bcmc1g")},{}],bcmc1g:[function(n,r,t){var e,u,i,o,a,c,f,l,s,p={}.toString;e=n("./Func.js");u=n("./List.js");i=n("./Obj.js");o=n("./Str.js");a=n("./Num.js");c=function(n){return n};f=h(function(n,r){return p.call(r).slice(8,-1)===n});l=h(function(n,r){var t,e=[];for(t=0;t<n;++t){e.push(r)}return e});o.empty=u.empty;o.slice=u.slice;o.take=u.take;o.drop=u.drop;o.splitAt=u.splitAt;o.takeWhile=u.takeWhile;o.dropWhile=u.dropWhile;o.span=u.span;o.breakStr=u.breakList;s={Func:e,List:u,Obj:i,Str:o,Num:a,id:c,isType:f,replicate:l};s.each=u.each;s.map=u.map;s.filter=u.filter;s.compact=u.compact;s.reject=u.reject;s.partition=u.partition;s.find=u.find;s.head=u.head;s.first=u.first;s.tail=u.tail;s.last=u.last;s.initial=u.initial;s.empty=u.empty;s.reverse=u.reverse;s.difference=u.difference;s.intersection=u.intersection;s.union=u.union;s.countBy=u.countBy;s.groupBy=u.groupBy;s.fold=u.fold;s.foldl=u.foldl;s.fold1=u.fold1;s.foldl1=u.foldl1;s.foldr=u.foldr;s.foldr1=u.foldr1;s.unfoldr=u.unfoldr;s.andList=u.andList;s.orList=u.orList;s.any=u.any;s.all=u.all;s.unique=u.unique;s.sort=u.sort;s.sortWith=u.sortWith;s.sortBy=u.sortBy;s.sum=u.sum;s.product=u.product;s.mean=u.mean;s.average=u.average;s.concat=u.concat;s.concatMap=u.concatMap;s.flatten=u.flatten;s.maximum=u.maximum;s.minimum=u.minimum;s.scan=u.scan;s.scanl=u.scanl;s.scan1=u.scan1;s.scanl1=u.scanl1;s.scanr=u.scanr;s.scanr1=u.scanr1;s.slice=u.slice;s.take=u.take;s.drop=u.drop;s.splitAt=u.splitAt;s.takeWhile=u.takeWhile;s.dropWhile=u.dropWhile;s.span=u.span;s.breakList=u.breakList;s.zip=u.zip;s.zipWith=u.zipWith;s.zipAll=u.zipAll;s.zipAllWith=u.zipAllWith;s.apply=e.apply;s.curry=e.curry;s.flip=e.flip;s.fix=e.fix;s.split=o.split;s.join=o.join;s.lines=o.lines;s.unlines=o.unlines;s.words=o.words;s.unwords=o.unwords;s.chars=o.chars;s.unchars=o.unchars;s.values=i.values;s.keys=i.keys;s.pairsToObj=i.pairsToObj;s.objToPairs=i.objToPairs;s.listsToObj=i.listsToObj;s.objToLists=i.objToLists;s.max=a.max;s.min=a.min;s.negate=a.negate;s.abs=a.abs;s.signum=a.signum;s.quot=a.quot;s.rem=a.rem;s.div=a.div;s.mod=a.mod;s.recip=a.recip;s.pi=a.pi;s.tau=a.tau;s.exp=a.exp;s.sqrt=a.sqrt;s.ln=a.ln;s.pow=a.pow;s.sin=a.sin;s.tan=a.tan;s.cos=a.cos;s.acos=a.acos;s.asin=a.asin;s.atan=a.atan;s.atan2=a.atan2;s.truncate=a.truncate;s.round=a.round;s.ceiling=a.ceiling;s.floor=a.floor;s.isItNaN=a.isItNaN;s.even=a.even;s.odd=a.odd;s.gcd=a.gcd;s.lcm=a.lcm;s.VERSION="1.0.0";r.exports=s;function h(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}},{"./Func.js":1,"./Obj.js":2,"./Num.js":3,"./List.js":4,"./Str.js":5}],1:[function(n,r,t){var e,u,i,o;e=function(n){return a(n)};u=a(function(n,r,t){return n(t,r)});i=function(n){return function(r,t){return function(){return n(r(r)).apply(null,arguments)}}(function(r,t){return function(){return n(r(r)).apply(null,arguments)}})};o=a(function(n,r){return n.apply(null,r)});r.exports={curry:e,flip:u,fix:i,apply:o};function a(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}},{}],2:[function(n,r,t){var e,u,i,o,a,c,f,l,s,p,h,g,v,m;e=function(n){var r,t,e=[];for(r in n){t=n[r];e.push(t)}return e};u=function(n){var r,t=[];for(r in n){t.push(r)}return t};i=function(n){var r,t,e,u={};for(r=0,t=n.length;r<t;++r){e=n[r];u[e[0]]=e[1]}return u};o=function(n){var r,t,e=[];for(r in n){t=n[r];e.push([r,t])}return e};a=d(function(n,r){var t,e,u,i,o={};for(t=0,e=n.length;t<e;++t){u=t;i=n[t];o[i]=r[u]}return o});c=function(n){var r,t,e,u;r=[];t=[];for(e in n){u=n[e];r.push(e);t.push(u)}return[r,t]};f=function(n){var r;for(r in n){return false}return true};l=d(function(n,r){var t,e;for(t in r){e=r[t];n(e)}return r});s=d(function(n,r){var t,e,u={};for(t in r){e=r[t];u[t]=n(e)}return u});p=d(function(n){var r,t,e={};for(r in n){t=n[r];if(t){e[r]=t}}return e});h=d(function(n,r){var t,e,u={};for(t in r){e=r[t];if(n(e)){u[t]=e}}return u});g=d(function(n,r){var t,e,u={};for(t in r){e=r[t];if(!n(e)){u[t]=e}}return u});v=d(function(n,r){var t,e,u,i;t={};e={};for(u in r){i=r[u];(n(i)?t:e)[u]=i}return[t,e]});m=d(function(n,r){var t,e;for(t in r){e=r[t];if(n(e)){return e}}});r.exports={values:e,keys:u,pairsToObj:i,objToPairs:o,listsToObj:a,objToLists:c,empty:f,each:l,map:s,filter:h,compact:p,reject:g,partition:v,find:m};function d(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}},{}],3:[function(n,r,t){var e,u,i,o,a,c,f,l,s,p,h,g,v,m,d,y,j,b,x,M,k,W,L,q,w,T,z,A,N,O,B,S;e=I(function(n,r){return n>r?n:r});u=I(function(n,r){return n<r?n:r});i=function(n){return-n};o=Math.abs;a=function(n){if(n<0){return-1}else if(n>0){return 1}else{return 0}};c=I(function(n,r){return~~(n/r)});f=I(function(n,r){return n%r});l=I(function(n,r){return Math.floor(n/r)});s=I(function(n,r){var t;return(n%(t=r)+t)%t});p=function(n){return 1/n};h=Math.PI;g=h*2;v=Math.exp;m=Math.sqrt;d=Math.log;y=I(function(n,r){return Math.pow(n,r)});j=Math.sin;b=Math.tan;x=Math.cos;M=Math.asin;k=Math.acos;W=Math.atan;L=I(function(n,r){return Math.atan2(n,r)});q=function(n){return~~n};w=Math.round;T=Math.ceil;z=Math.floor;A=function(n){return n!==n};N=function(n){return n%2===0};O=function(n){return n%2!==0};B=I(function(n,r){var t;n=Math.abs(n);r=Math.abs(r);while(r!==0){t=n%r;n=r;r=t}return n});S=I(function(n,r){return Math.abs(Math.floor(n/B(n,r)*r))});r.exports={max:e,min:u,negate:i,abs:o,signum:a,quot:c,rem:f,div:l,mod:s,recip:p,pi:h,tau:g,exp:v,sqrt:m,ln:d,pow:y,sin:j,tan:b,cos:x,acos:k,asin:M,atan:W,atan2:L,truncate:q,round:w,ceiling:T,floor:z,isItNaN:A,even:N,odd:O,gcd:B,lcm:S};function I(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}},{}],4:[function(n,r,t){var e,u,i,o,a,c,f,l,s,p,h,g,v,m,d,y,j,b,x,M,k,W,L,q,w,T,z,A,N,O,B,S,I,P,F,E,C,R,V,D,G,H,J,K,Q,U,X,Y,Z,$,_,nr,rr,tr,er,ur,ir,or,ar,cr,fr,lr=[].slice;e=sr(function(n,r){var t,e,u;for(t=0,e=r.length;t<e;++t){u=r[t];n(u)}return r});u=sr(function(n,r){var t,e,u,i=[];for(t=0,e=r.length;t<e;++t){u=r[t];i.push(n(u))}return i});i=sr(function(n){var r,t,e,u=[];for(r=0,t=n.length;r<t;++r){e=n[r];if(e){u.push(e)}}return u});o=sr(function(n,r){var t,e,u,i=[];for(t=0,e=r.length;t<e;++t){u=r[t];if(n(u)){i.push(u)}}return i});a=sr(function(n,r){var t,e,u,i=[];for(t=0,e=r.length;t<e;++t){u=r[t];if(!n(u)){i.push(u)}}return i});c=sr(function(n,r){var t,e,u,i,o;t=[];e=[];for(u=0,i=r.length;u<i;++u){o=r[u];(n(o)?t:e).push(o)}return[t,e]});f=sr(function(n,r){var t,e,u;for(t=0,e=r.length;t<e;++t){u=r[t];if(n(u)){return u}}});l=s=function(n){if(!n.length){return}return n[0]};p=function(n){if(!n.length){return}return n.slice(1)};h=function(n){if(!n.length){return}return n[n.length-1]};g=function(n){var r;r=n.length;if(!r){return}return n.slice(0,r-1)};v=function(n){return!n.length};m=function(n){return n.concat().reverse()};d=function(n){var r,t,e,u;r=[];for(t=0,e=n.length;t<e;++t){u=n[t];if(!pr(u,r)){r.push(u)}}return r};y=j=sr(function(n,r,t){var e,u,i;for(e=0,u=t.length;e<u;++e){i=t[e];r=n(r,i)}return r});b=x=sr(function(n,r){return y(n,r[0],r.slice(1))});M=sr(function(n,r,t){return y(n,r,t.concat().reverse())});k=sr(function(n,r){var t;t=r.concat().reverse();return y(n,t[0],t.slice(1))});W=sr(function(n,r){var t,e,u;t=[];e=r;while((u=n(e))!=null){t.push(u[0]);e=u[1]}return t});L=function(n){return[].concat.apply([],n)};q=sr(function(n,r){var t;return[].concat.apply([],function(){var e,u,i,o=[];for(e=0,i=(u=r).length;e<i;++e){t=u[e];o.push(n(t))}return o}())});w=sr(function(n){var r;return[].concat.apply([],function(){var t,e,u,i=[];for(t=0,u=(e=n).length;t<u;++t){r=e[t];if(r.length!=null){i.push(w(r))}else{i.push(r)}}return i}())});T=function(n){var r,t,e,u,i,o,a,c;r=lr.call(arguments,1);t=[];n:for(e=0,u=n.length;e<u;++e){i=n[e];for(o=0,a=r.length;o<a;++o){c=r[o];if(pr(i,c)){continue n}}t.push(i)}return t};z=function(n){var r,t,e,u,i,o,a,c;r=lr.call(arguments,1);t=[];n:for(e=0,u=n.length;e<u;++e){i=n[e];for(o=0,a=r.length;o<a;++o){c=r[o];if(!pr(i,c)){continue n}}t.push(i)}return t};A=function(){var n,r,t,e,u,i,o,a;n=lr.call(arguments);r=[];for(t=0,e=n.length;t<e;++t){u=n[t];for(i=0,o=u.length;i<o;++i){a=u[i];if(!pr(a,r)){r.push(a)}}}return r};N=sr(function(n,r){var t,e,u,i,o;t={};for(e=0,u=r.length;e<u;++e){i=r[e];o=n(i);if(o in t){t[o]+=1}else{t[o]=1}}return t});O=sr(function(n,r){var t,e,u,i,o;t={};for(e=0,u=r.length;e<u;++e){i=r[e];o=n(i);if(o in t){t[o].push(i)}else{t[o]=[i]}}return t});B=function(n){var r,t,e;for(r=0,t=n.length;r<t;++r){e=n[r];if(!e){return false}}return true};S=function(n){var r,t,e;for(r=0,t=n.length;r<t;++r){e=n[r];if(e){return true}}return false};I=sr(function(n,r){var t,e,u;for(t=0,e=r.length;t<e;++t){u=r[t];if(n(u)){return true}}return false});P=sr(function(n,r){var t,e,u;for(t=0,e=r.length;t<e;++t){u=r[t];if(!n(u)){return false}}return true});F=function(n){return n.concat().sort(function(n,r){if(n>r){return 1}else if(n<r){return-1}else{return 0}})};E=sr(function(n,r){if(!r.length){return[]}return r.concat().sort(n)});C=sr(function(n,r){if(!r.length){return[]}return r.concat().sort(function(r,t){if(n(r)>n(t)){return 1}else if(n(r)<n(t)){return-1}else{return 0}})});R=function(n){var r,t,e,u;r=0;for(t=0,e=n.length;t<e;++t){u=n[t];r+=u}return r};V=function(n){var r,t,e,u;r=1;for(t=0,e=n.length;t<e;++t){u=n[t];r*=u}return r};D=G=function(n){var r,t,e,u;r=0;t=n.length;for(e=0;e<t;++e){u=e;r+=n[u]}return r/t};H=function(n){var r,t,e,u,i;r=n[0];for(t=0,u=(e=n.slice(1)).length;t<u;++t){i=e[t];if(i>r){r=i}}return r};J=function(n){var r,t,e,u,i;r=n[0];for(t=0,u=(e=n.slice(1)).length;t<u;++t){i=e[t];if(i<r){r=i}}return r};K=Q=sr(function(n,r,t){var e,u;e=r;return[r].concat(function(){var r,i,o,a=[];for(r=0,o=(i=t).length;r<o;++r){u=i[r];a.push(e=n(e,u))}return a}())});U=X=sr(function(n,r){if(!r.length){return}return K(n,r[0],r.slice(1))});Y=sr(function(n,r,t){t=t.concat().reverse();return K(n,r,t).reverse()});Z=sr(function(n,r){if(!r.length){return}r=r.concat().reverse();return K(n,r[0],r.slice(1)).reverse()});$=sr(function(n,r,t){return t.slice(n,r)});_=sr(function(n,r){if(n<=0){return r.slice(0,0)}else if(!r.length){return r}else{return r.slice(0,n)}});nr=sr(function(n,r){if(n<=0||!r.length){return r}else{return r.slice(n)}});rr=sr(function(n,r){return[_(n,r),nr(n,r)]});tr=sr(function(n,r){var t,e,u;t=r.length;if(!t){return r}for(e=0;e<t;++e){u=e;if(!n(r[u])){break}}return r.slice(0,u)});er=sr(function(n,r){var t,e,u;t=r.length;if(!t){return r}for(e=0;e<t;++e){u=e;if(!n(r[u])){break}}return r.slice(u)});ur=sr(function(n,r){return[tr(n,r),er(n,r)]});ir=sr(function(n,r){return ur(hr([gr,n]),r)});or=sr(function(n,r){var t,e,u,i,o,a;t=[];e=r.length;for(u=0,i=n.length;u<i;++u){o=u;a=n[u];if(o===e){break}t.push([a,r[o]])}return t});ar=sr(function(n,r,t){var e,u,i,o,a,c;e=[];u=t.length;for(i=0,o=r.length;i<o;++i){a=i;c=r[i];if(a===u){break}e.push(n(c,t[a]))}return e});cr=function(){var n,r,t,e,u,i,o,a,c,f=[];n=lr.call(arguments);r=9e9;for(t=0,e=n.length;t<e;++t){u=n[t];r<=(i=u.length)||(r=i)}for(t=0;t<r;++t){o=t;a=[];for(c=0,e=n.length;c<e;++c){u=n[c];a.push(u[o])}f.push(a)}return f};fr=function(n){var r,t,e,u,i,o,a,c=[];r=lr.call(arguments,1);t=9e9;for(e=0,u=r.length;e<u;++e){i=r[e];t<=(o=i.length)||(t=o)}for(e=0;e<t;++e){a=e;c.push(n.apply(null,f()))}return c;function f(){var n,t,e,u=[];for(n=0,e=(t=r).length;n<e;++n){i=t[n];u.push(i[a])}return u}};r.exports={each:e,map:u,filter:o,compact:i,reject:a,partition:c,find:f,head:l,first:s,tail:p,last:h,initial:g,empty:v,reverse:m,difference:T,intersection:z,union:A,countBy:N,groupBy:O,fold:y,fold1:b,foldl:j,foldl1:x,foldr:M,foldr1:k,unfoldr:W,andList:B,orList:S,any:I,all:P,unique:d,sort:F,sortWith:E,sortBy:C,sum:R,product:V,mean:D,average:G,concat:L,concatMap:q,flatten:w,maximum:H,minimum:J,scan:K,scan1:U,scanl:Q,scanl1:X,scanr:Y,scanr1:Z,slice:$,take:_,drop:nr,splitAt:rr,takeWhile:tr,dropWhile:er,span:ur,breakList:ir,zip:or,zipWith:ar,zipAll:cr,zipAllWith:fr};function sr(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}function pr(n,r){var t=-1,e=r.length>>>0;while(++t<e)if(n===r[t]&&t in r)return true;return false}function hr(n){return function(){var r,t=arguments;for(r=n.length;r>0;--r){t=[n[r-1].apply(this,t)]}return t[0]}}function gr(n){return!n}},{}],5:[function(n,r,t){var e,u,i,o,a,c,f,l,s,p;e=h(function(n,r){return r.split(n)});u=h(function(n,r){return r.join(n)});i=function(n){if(!n.length){return[]}return n.split("\n")};o=function(n){return n.join("\n")};a=function(n){if(!n.length){return[]}return n.split(/[ ]+/)};c=function(n){return n.join(" ")};f=function(n){return n.split("")};l=function(n){return n.join("")};s=function(n){return n.split("").reverse().join("")};p=h(function(n,r){var t,e,u;e=[];for(u=0;u<n;++u){e.push(r)}t=e;return t.join("")});r.exports={split:e,join:u,lines:i,unlines:o,words:a,unwords:c,chars:f,unchars:l,reverse:s,repeat:p};function h(n,r){var t,e=function(u){return n.length>1?function(){var i=u?u.concat():[];t=r?t||this:this;return i.push.apply(i,arguments)<n.length&&arguments.length?e.call(t,i):n.apply(t,i)}:n};return e()}},{}]},{},[]);

},{}],2:[function(require,module,exports){
var $R, mutant, ch, $w, $d, isIe, isMoz, isOpera, isTouchable, threshold, lastReqId, hasScrolled, timeUpdater, showTimeoutId, hideTimeoutId;
window.helpers = require('./shared-helpers.ls');
window.mutants = require('./pb-mutants.ls');
$R = require('reactivejs');
window.rUser = $R.state();
mutant = require('../lib/mutant/mutant.ls');
ch = require('./client-helpers.ls');
window.Auth = require('../component/Auth.ls');
window.cors = {
  ajaxParams: {
    xhrFields: {
      withCredentials: true
    },
    success: function(){},
    error: function(){}
  },
  get: function(url, data, cb){
    var params;
    params = {};
    import$(params, this.ajaxParams);
    params.type = 'GET';
    params.url = url;
    params.data = data;
    if (cb) {
      params.success = cb;
    }
    return $.ajax(params);
  },
  post: function(url, data, cb){
    var params;
    params = {};
    import$(params, this.ajaxParams);
    params.type = 'POST';
    params.url = url;
    params.data = data;
    if (cb) {
      params.success = cb;
    }
    return $.ajax(params);
  }
};
window.hints = {
  last: {
    pathname: null,
    mutator: null
  },
  current: {
    pathname: window.location.pathname,
    mutator: window.mutator
  }
};
$w = $(window);
$d = $(document);
isIe = false || in$('msTransform', document.documentElement.style);
isMoz = false || in$('MozBoxSizing', document.documentElement.style);
isOpera = !!(window.opera && window.opera.version);
isTouchable = function(){
  var e;
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e$) {
    e = e$;
    return false;
  }
}();
threshold = 15;
$d.on('click', 'a.mutant', ch.mutate);
window.lastStatechangeWasUser = true;
lastReqId = 0;
History.Adapter.bind(window, 'statechange', function(e){
  var statechangeWasUser, url, params, ref$, rc, surfParams, reqId, jqxhr;
  statechangeWasUser = window.lastStatechangeWasUser;
  window.lastStatechangeWasUser = true;
  url = History.getPageUrl().replace(/\/$/, '');
  params = History.getState().data;
  import$(window.hints.last, window.hints.current);
  ref$ = window.hints.current;
  ref$.pathname = window.location.pathname;
  ref$.mutator = null;
  if (window.hints.last.mutator === 'forum' && !window.location.pathname.match(/^\/(auth|admin|resources)/)) {
    rc = window.tasks.recommendation(window.location.pathname, window.hints.last.pathname);
  }
  if (!(params != null && params.noSurf)) {
    spin(true);
    surfParams = {
      _surf: mutator,
      _surfData: params != null ? params.surfData : void 8
    };
    if (rc != null && ((ref$ = rc.keep) != null && ref$.length)) {
      surfParams._surfTasks = rc.keep.sort().map(function(it){
        return tasks.cc(it);
      }).join(',');
    }
    reqId = ++lastReqId;
    jqxhr = $.get(url, surfParams, function(r){
      var ref$, onUnload;
      if (!r.mutant) {
        return;
      }
      if ((ref$ = r.locals) != null && ref$.title) {
        $d.attr('title', r.locals.title);
      }
      onUnload = mutants[window.mutator].onUnload || function(w, nextMutant, cb){
        return cb(null);
      };
      return onUnload(window, r.mutant, function(){
        var locals;
        if (reqId === lastReqId) {
          locals = import$({
            statechangeWasUser: statechangeWasUser
          }, r.locals);
          return mutant.run(mutants[r.mutant], {
            locals: locals,
            user: window.user
          }, function(){
            onloadResizable();
            window.hints.current.mutator = window.mutator;
            return spin(false);
          });
        }
      });
    });
    return jqxhr.fail(function(xhr, status, error){
      showTooltip($('#warning'), "Page Not Found", 8000);
      History.back();
      return window.spin(false);
    });
  }
});
window.onloadPersonalize = function(){
  var ref$;
  if (window.user) {
    $('.onclick-profile').each(function(){
      return this.href = "/user/" + window.user.name;
    });
    $('.onclick-login').hide();
    $('.onclick-logout').show();
    $('.onclick-profile').show();
    if (((typeof user != 'undefined' && user !== null) && ((ref$ = user.rights) != null && ref$['super'])) || ((typeof user != 'undefined' && user !== null) && ((ref$ = user.rights) != null && ref$.admin))) {
      return $('.admin-only').show();
    } else {
      return $('.admin-only').hide();
    }
  } else {
    $('.onclick-login').show();
    $('.onclick-logout').hide();
    $('.onclick-profile').hide();
    return $('.admin-only').hide();
  }
};
window.onloadResizable = function(){
  var leftOffset, $l, $r;
  leftOffset = 50;
  $l = $('#left_content');
  $r = $('#main_content .resizable');
  if ($r.length) {
    $l.resizable({
      minWidth: 200,
      maxWidth: 450,
      resize: function(e, ui){
        $l.toggleClass('wide', $l.width() > 300);
        $r.css('padding-left', ui.size.width + leftOffset);
        $l.find('.scrollable').getNiceScroll().resize();
        return window.saveUi();
      }
    });
    $l.find('.scrollable').niceScroll({
      bouncescroll: true,
      cursorcolor: '#bbb',
      cursorwidth: 6,
      hidecursordelay: 1000,
      mousescrollstep: 6,
      railoffset: true,
      railpadding: {
        bottom: 150
      }
    });
    return $r.css('padding-left', $l.width() + leftOffset);
  } else {
    try {
      return $l.resizable('destroy');
    } catch (e$) {}
  }
};
window.scrollToTop = function(cb){
  var $e;
  cb == null && (cb = function(){});
  if ($(window).scrollTop() === 0) {
    return;
  }
  $e = $('html,body');
  $e.animate({
    scrollTop: 0
  }, 250, function(){
    return $e.animate({
      scrollTop: threshold / 2
    }, 70, function(){
      return $e.animate({
        scrollTop: 0
      }, 55, function(){});
    });
  });
  return cb();
};
window.awesomeScrollTo = function(e, duration, cb){
  var ms, offset, dstScroll, curScroll;
  cb == null && (cb = function(){});
  e = $(e);
  ms = duration || 250;
  offset = 10;
  if (!e.length) {
    return;
  }
  if (isIe || isOpera) {
    e[0].scrollIntoView();
    cb();
  } else {
    dstScroll = Math.round(e.position().top) - offset;
    curScroll = window.scrollY;
    if (Math.abs(dstScroll - curScroll) > threshold * 2) {
      $('html,body').animate({
        scrollTop: dstScroll
      }, ms, function(){
        return $('html,body').animate({
          scrollTop: dstScroll + threshold / 2
        }, 70, function(){
          return $('html,body').animate({
            scrollTop: dstScroll
          }, 50, function(){
            return cb();
          });
        });
      });
    } else {
      cb();
    }
  }
  return e;
};
hasScrolled = function(){
  var st;
  st = $w.scrollTop();
  return $('body').toggleClass('scrolled', st > threshold);
};
setTimeout(function(){
  $w.on('scroll', function(){
    return hasScrolled();
  });
  return hasScrolled();
}, 600);
$('header.header').on('click', function(ev){
  var b;
  if ($(ev.target).hasClass('header')) {
    b = $('body');
    if ($w.scrollTop() > threshold) {
      b.toggleClass('scrolled');
      return setTimeout(function(){
        return $('#query').focus();
      }, 1);
    }
  }
});
$d.on('click', '.onclick-scroll-to', function(){
  awesomeScrollTo($(this).data('scroll-to'));
  return false;
});
$d.on('mousedown', '.onclick-scroll-top', function(){
  $(this).attr('title', 'Scroll to Top!');
  window.scrollToTop();
  return false;
});
window.shakeDialog = function($form, time){
  var $fancybox;
  $fancybox = $form.parents('.fancybox-wrap:first').removeClass('shake');
  return setTimeout(function(){
    return $fancybox.addClass('shake');
  }, 100);
};
Auth.afterLogin = function(){
  return $.getJSON('/auth/user', function(user){
    var ref$;
    window.user = user;
    onloadPersonalize();
    if (user && ((typeof mutants != 'undefined' && mutants !== null) && ((ref$ = mutants[window.mutator]) != null && ref$.onPersonalize))) {
      setProfile(user.photo);
      return typeof mutants != 'undefined' && mutants !== null ? (ref$ = mutants[window.mutator]) != null ? ref$.onPersonalize(window, user, function(){
        var ref$;
        if (typeof socket != 'undefined' && socket !== null) {
          socket.disconnect();
        }
        return typeof socket != 'undefined' && socket !== null ? (ref$ = socket.socket) != null ? ref$.connect() : void 8 : void 8;
      }) : void 8 : void 8;
    }
  });
};
window.logout = function(){
  window.location = '/auth/logout';
  return false;
};
$d.on('click', '.onclick-logout', function(){
  window.logout();
  return false;
});
$d.on('click', '.require-login', Auth.requireLogin(function(){
  return this.click;
}));
$d.on('click', '.onclick-login', function(){
  Auth.showLoginDialog();
  return false;
});
timeUpdater = function(){
  var now;
  now = new Date;
  return $('[data-time]').each(function(){
    var $el, d, elapsed, hr, lh;
    $el = $(this);
    d = new Date($el.data('time'));
    elapsed = (now - d) / 1000;
    hr = window.helpers.elapsedToHumanReadable(elapsed);
    lh = $el.data('last-human');
    $el.data('last-human', hr);
    if ($el.hasClass('time-title')) {
      return $el.attr('title', hr.replace(/<.*?\/?>/g, ''));
    } else {
      return $el.html(hr);
    }
  });
};
setInterval(timeUpdater, 30000);
window.spin = function(loading){
  var timeUntilShow, timeUntilHide, $b, show, hide;
  loading == null && (loading = true);
  timeUntilShow = 500;
  timeUntilHide = 6500;
  clearTimeout(showTimeoutId);
  clearTimeout(hideTimeoutId);
  $b || ($b = $('body'));
  show = function(){
    $b.addClass('waiting');
    return hideTimeoutId = setTimeout(hide, timeUntilHide);
  };
  hide = function(){
    return $b.removeClass('waiting');
  };
  if (loading) {
    return showTimeoutId = setTimeout(show, timeUntilShow);
  } else {
    return hide();
  }
};
onloadResizable();
$.getJSON('/auth/user', function(user){
  var m;
  window.user = user;
  setTimeout(function(){
    return window.rUser(window.user);
  }, 50);
  if (window.location.hash.match(/^\#recover=/)) {
    Auth.showResetPasswordDialog();
  }
  if (m = window.location.hash.match(/^\#invalid=(.+)/)) {
    Auth.showInfoDialog("Welcome back " + m[1] + "!");
  }
  switch (window.location.hash) {
  case '#invalid':
    Auth.showInfoDialog('Invalid invite code!');
    break;
  case '#validate':
    Auth.afterLogin();
    break;
  case '#once':
    Auth.loginWithToken();
  }
  onloadPersonalize();
  if (window.initialMutant) {
    return mutant.run(mutants[window.initialMutant], {
      initial: true,
      user: window.user
    }, function(){});
  }
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function in$(x, arr){
  var i = -1, l = arr.length >>> 0;
  while (++i < l) if (x === arr[i] && i in arr) return true;
  return false;
}
},{"./pb-mutants.ls":3,"./shared-helpers.ls":4,"./client-helpers.ls":5,"../lib/mutant/mutant.ls":6,"../component/Auth.ls":7,"reactivejs":8}],9:[function(require,module,exports){
(function(global){var Buy, Paginator, $w, $d, leftOffset, sep, appendReplyUi, censor, submit, ckSubmit, postSubmit, submitSelectors, cleanupOutput, subscribe, this$ = this;
window.__ = require('lodash');
window.Chat = require('../component/Chat.ls');
window.Auth = require('../component/Auth.ls');
window.Pager = require('./pager.ls');
window.furl = require('./forum-urls.ls');
window.tasks = require('./tasks.ls');
window.ioc = require('./io-client.ls');
window.PhotoCropper = require('../component/PhotoCropper.ls');
import$(global, require('prelude-ls/prelude-browser-min')('prelude-ls'));
import$(global, require('./shared-helpers.ls'));
import$(global, require('./client-helpers.ls'));
Buy = require('../component/Buy.ls');
Paginator = require('../component/Paginator.ls');
$w = $(window);
$d = $(document);
leftOffset = 50;
sep = '-';
window.saveUi = function(){
  var minWidth, w, s, ref$, _, prev, vals;
  minWidth = 200;
  w = $('#left_content').width();
  s = $.cookie('s');
  if (s) {
    ref$ = s.split(sep), _ = ref$[0], _ = ref$[1], prev = ref$[2];
  }
  w = w > minWidth
    ? w
    : prev || minWidth;
  vals = [$('body').hasClass('collapsed') ? 1 : 0, w];
  return $.cookie('s', vals.join(sep), {
    path: '/',
    secure: true
  });
};
window.loadUi = function(){
  var s, $l, ref$, collapsed, w;
  s = $.cookie('s');
  $l = $('#left_content');
  if (s) {
    ref$ = s.split(sep), collapsed = ref$[0], w = ref$[1];
    if (collapsed === '1' && !$('html').hasClass('admin')) {
      $('body').addClass('collapsed');
      $l.find('.scrollable').getNiceScroll().resize();
    }
    w = parseInt(w);
    $l.transition({
      width: w
    }, 500, 'easeOutExpo', function(){
      return setWide();
    });
    setTimeout(function(){
      return $('#main_content .resizable').transition({
        paddingLeft: w + leftOffset
      }, 450, 'snap');
    }, 300);
  }
  return setTimeout(function(){
    setWide();
    return alignBreadcrumb();
  }, 500);
};
$w.resize(__.debounce(function(){
  $.waypoints('refresh');
  respondResize();
  return alignBreadcrumb();
}, 800));
appendReplyUi = function(ev){
  var $p;
  $p = $(ev.target).parents('.post:first');
  if (!$p.find('.reply .post-edit:visible').length) {
    return renderAndAppend(window, $p.find('.reply:first'), 'post-edit', {
      post: {
        method: 'post',
        forum_id: $p.data('forum-id') || window.activeForumId,
        parent_id: $p.data('post-id'),
        is_comment: true
      }
    }, function(){
      return $p.find('textarea[name="body"]').focus();
    });
  } else {
    return $p.find('.reply .cancel').click();
  }
};
censor = function(ev){
  var $p, postId;
  $p = $(ev.target).parents('.post:first');
  postId = $p.data('post-id');
  return $.post("/resources/posts/" + postId + "/censor", function(r){
    if (r != null && r.success) {
      return $p.addClass('censored');
    }
  });
};
loadUi();
setTimeout(function(){
  return $('footer').addClass('active');
}, 2500);
$('#query').focus().select();
window.$ui = $({});
window.rSearchopts = $R.state(window.searchopts);
window.rSocket = $R.state();
(function(){
  var blacklist;
  blacklist = {
    9: 1,
    17: 1,
    18: 1,
    27: 1,
    32: 1,
    37: 1,
    38: 1,
    39: 1,
    40: 1,
    224: 1
  };
  return $d.on('keyup', '#query', __.debounce(function(it){
    var q, submitType, newopts, ref$;
    q = $(this).val();
    if (!blacklist[it.which]) {
      if (it.which === 13) {
        submitType = 'hard';
      } else {
        submitType = 'soft';
      }
      newopts = (ref$ = import$({}, window.searchopts), ref$.q = q, ref$.submitType = submitType, ref$);
      delete newopts.page;
      return rSearchopts(newopts);
    }
  }, 500));
})();
$d.on('change', '#search_filters [name=forum_id]', function(){
  var submitType, forum_id, newopts, ref$;
  submitType = 'soft';
  forum_id = $(this).val();
  newopts = (ref$ = import$({}, window.searchopts), ref$.forum_id = forum_id, ref$.submitType = submitType, ref$);
  delete newopts.page;
  rSearchopts(newopts);
  return false;
});
$d.on('change', '#search_filters [name=within]', function(it){
  var submitType, within, newopts, ref$;
  console.log(it);
  submitType = 'soft';
  within = $(this).val();
  newopts = (ref$ = import$({}, window.searchopts), ref$.within = within, ref$.submitType = submitType, ref$);
  delete newopts.page;
  rSearchopts(newopts);
  return false;
});
$R(function(sopts){
  var parser, uri, shouldSearch, shouldReplace, k, v, qs;
  parser = document.createElement('a');
  parser.href = History.getState().url;
  uri = parser.pathname;
  shouldSearch = sopts.submitType === 'hard' || uri === '/search';
  shouldReplace = sopts.submitType === 'soft';
  delete sopts.submitType;
  (function(){
    var ref$, results$ = [];
    for (k in ref$ = sopts) {
      v = ref$[k];
      if (!v) {
        results$.push(k);
      }
    }
    return results$;
  }()).map(function(it){
    var ref$;
    return ref$ = sopts[it], delete sopts[it], ref$;
  });
  if (shouldSearch) {
    qs = $.param(sopts);
    uri = "/search" + (qs ? '?' : '') + qs;
    window.lastStatechangeWasUser = false;
    if (shouldReplace) {
      return History.replaceState({}, '', uri);
    } else {
      return History.pushState({}, '', uri);
    }
  }
}).bindTo(rSearchopts);
$ui.on('thread-create', function(e, thread){
  console.info('thread-create', thread);
  return renderAndPrepend(window, $('#left_container .threads'), 'thread', {
    thread: thread
  }, function(){
    return $('#left_container .threads div.fadein li').unwrap();
  });
});
$ui.on('nav-top-posts', function(e, threads){
  return console.info('stub', threads);
});
$d.on('click', '.create .no-surf', Auth.requireLogin(function(ev){
  var e;
  $('#main_content .forum').html('');
  e = $(ev.target);
  return editPost(e.data('edit'), {
    forum_id: window.activeForumId
  });
}));
$d.on('click', '.edit.no-surf', Auth.requireLogin(function(ev){
  return editPost($(ev.target).data('edit'));
}));
$d.on('click', '.onclick-submit .cancel', function(ev){
  var f, meta;
  f = $(ev.target).closest('.post-edit');
  f.hide(350, 'easeOutExpo');
  meta = furl.parse(window.location.pathname);
  switch (meta.type) {
  case 'new-thread':
    History.back();
    break;
  default:
    removeEditingUrl(meta);
  }
  return false;
});
submit = Auth.requireLogin(function(ev){
  return submitForm(ev, function(data){
    var f, p, t, ref$, meta;
    f = $(ev.target).closest('.post-edit');
    p = f.closest('.editing');
    t = $(f.find('.tooltip'));
    if (!data.success) {
      showTooltip(t, data != null ? (ref$ = data.errors) != null ? ref$.join('<br>') : void 8 : void 8);
    } else {
      p.find('.title').html((ref$ = data[0]) != null ? ref$.title : void 8);
      p.find('.body').html((ref$ = data[0]) != null ? ref$.body : void 8);
      f.removeClass('fadein').hide(200);
      meta = furl.parse(window.location.pathname);
      window.lastStatechangeWasUser = false;
      switch (meta.type) {
      case 'new-thread':
        History.replaceState({}, '', data.uri);
        break;
      case 'edit':
        removeEditingUrl(meta);
      }
    }
    return false;
  });
});
ckSubmit = Auth.requireLogin(function(ev){
  ckSubmitForm({
    element: {
      $: {
        id: 'editor'
      }
    }
  }, function(data){
    return postSuccess(ev, data);
  });
  return false;
});
postSubmit = Auth.requireLogin(function(ev){
  submitForm(ev, function(data){
    return postSuccess(ev, data);
  });
  return false;
});
submitSelectors = ["html.profile .onclick-submit button[type='submit']", "html.forum .onclick-submit button[type='submit']", "html.search .onclick-submit button[type='submit']"];
$d.on('click', submitSelectors.join(', '), postSubmit);
$d.on('keydown', '.onshiftenter-submit', function(it){
  if (it.which === 13 && it.shiftKey) {
    return postSubmit(it);
  }
});
$d.on('click', '.onclick-append-reply-ui', Auth.requireLogin(appendReplyUi));
$d.on('click', '.onclick-censor-post', Auth.requireLogin(censor));
$d.on('click', 'html header .menu a.title', mutate);
$d.on('click', 'header .onclick-close', function(e){
  $('#query').val('').focus();
  return History.back();
});
$d.on('click', '#handle', function(){
  var $l;
  $l = $('#left_content');
  $('body').toggleClass('collapsed');
  $('#main_content .resizable').css('padding-left', $l.width() + leftOffset);
  return saveUi();
});
if ((typeof mocha != 'undefined' && mocha !== null) && window.location.search.match(/test=1/)) {
  cleanupOutput = function(){
    var mochaCssEl;
    $('body > *:not(#mocha)').remove();
    mochaCssEl = $("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + window.cacheUrl + "/local/mocha.css\">");
    return $('head').append(mochaCssEl);
  };
  mocha.setup('bdd');
  $.getScript(window.cacheUrl + "/tests/test1.js", function(){
    var run;
    run = function(){
      return mocha.run(cleanupOutput);
    };
    return setTimeout(run, 2000);
  });
}
$d.on('click', '.onclick-chat', Auth.requireLogin(function(ev){
  var profileName, f, $p, t;
  profileName = $('div.profile:first').data('user-name');
  f = user;
  $p = $('div.profile:first');
  t = {
    id: $p.data('user-id'),
    name: $p.data('user-name'),
    photo: $p.find('img').attr('src')
  };
  return Chat.start([f, t]);
}));
$d.on('click', 'html.admin .onclick-submit button[type="submit"]', function(ev){
  return submitForm(ev, function(data){
    var f, t, inputs, k, v, i$, len$, e;
    f = $(this);
    t = $(f.find('.tooltip'));
    inputs = {
      saved: f.find('input, textarea')
    };
    if (!f.hasClass('no-focus')) {
      f.find('input:first').focus().select();
    }
    if (data != null && data.success) {
      showTooltip(t, t.data('msg') || 'Saved!');
      for (k in inputs) {
        v = inputs[k];
        for (i$ = 0, len$ = v.length; i$ < len$; ++i$) {
          e = v[i$];
          e = $(e);
          e.addClass(k);
          if (e.hasClass('clear')) {
            e.val('');
          }
        }
      }
      return setTimeout(function(){
        var k, ref$, v, lresult$, i$, len$, e, results$ = [];
        for (k in ref$ = inputs) {
          v = ref$[k];
          lresult$ = [];
          for (i$ = 0, len$ = v.length; i$ < len$; ++i$) {
            e = v[i$];
            lresult$.push($(e).removeClass(k));
          }
          results$.push(lresult$);
        }
        return results$;
      }, 3000);
    } else {
      return showTooltip(t, data != null ? data.msg : void 8);
    }
  });
});
$d.on('change', 'html.admin .domain', function(){
  var id, domain, i$, ref$, len$, k, results$ = [];
  id = parseInt($('.domain option:selected').val());
  domain = find(function(it){
    return it.id === id;
  }, site.domains);
  for (i$ = 0, len$ = (ref$ = ['facebookClientId', 'facebookClientSecret', 'twitterConsumerKey', 'twitterConsumerSecret', 'googleConsumerKey', 'googleConsumerSecret']).length; i$ < len$; ++i$) {
    k = ref$[i$];
    results$.push($("[name='" + k + "']").val(domain.config[k]));
  }
  return results$;
});
subscribe = function(what){
  if (!in$(what, site.subscriptions)) {
    doBuy(what);
    return false;
  }
};
$d.on('click', 'html.admin #private', function(){
  return subscribe('private');
});
$d.on('click', 'html.admin #analytics', function(){
  return subscribe('analytics');
});
window.component = {};
$d.on('click', '.onclick-buy', function(ev){
  return doBuy($(ev.target).data('product'));
});
window.doBuy = function(productId){
  if (!productId) {
    throw new Error("window.do-buy must specify a product-id");
  }
  return lazyLoadFancybox(function(){
    return $.get('/resources/products/' + productId, function(product){
      var locals, ref$, b;
      locals = {
        product: product,
        cardNeeded: !((ref$ = window.site) != null && ref$.has_stripe)
      };
      b = (ref$ = window.component) != null ? ref$.buy : void 8;
      if (b) {
        b.detach();
      }
      b = window.component.buy = new Buy({
        locals: locals
      });
      return $.fancybox(b.$, fancyboxParams);
    });
  });
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function in$(x, arr){
  var i = -1, l = arr.length >>> 0;
  while (++i < l) if (x === arr[i] && i in arr) return true;
  return false;
}
})(window)
},{"./pager.ls":10,"../component/Chat.ls":11,"../component/Auth.ls":7,"./tasks.ls":12,"./io-client.ls":13,"./forum-urls.ls":14,"./shared-helpers.ls":4,"../component/PhotoCropper.ls":15,"../component/Paginator.ls":16,"./client-helpers.ls":5,"../component/Buy.ls":17,"prelude-ls/prelude-browser-min":1,"lodash":18}],8:[function(require,module,exports){
(function() {
  var defaultContext = this;
  var __id = 0;

  function $R(fnc, context) {
      var rf = function() {
        var dirtyNodes = topo(rf);
        var v = dirtyNodes[0].run.apply(rf, arguments);
        dirtyNodes.slice(1).forEach(function (n) { n.run() } );
        return v;
      };
      rf.id = __id++;
      rf.context = context || defaultContext;
      rf.fnc = fnc;
      rf.dependents = [];
      rf.dependencies = [];
      rf.memo = $R.empty;
      return $R.extend(rf, reactiveExtensions, $R.pluginExtensions);
  }
  $R._ = {};
  $R.empty = {};
  $R.state = function (initial) {
    var rFnc = $R(function () {
      if (arguments.length) {
        this.val = arguments[0];
      }
      return this.val;
    })
    rFnc.context = rFnc;
    rFnc.val = initial;
    return rFnc;
  }
  $R.extend = function(o) {
    var extensions = Array.prototype.slice.call(arguments, 1);
    extensions.forEach(function (extension) {
      if (extension) {
        for (var prop in extension) { o[prop] = extension[prop] }
      }
    });
    return o;
  };
  $R.pluginExtensions = {}

  var reactiveExtensions = {
    _isReactive: true,
    toString: function () { return this.fnc.toString() },
    get: function() { return this.memo === $R.empty ? this.run() : this.memo },
    run: function() {
      var unboundArgs = Array.prototype.slice.call(arguments);
      return this.memo = this.fnc.apply(this.context, this.argumentList(unboundArgs));
    },
    bindTo: function() {
      var newDependencies = Array.prototype.slice.call(arguments).map(wrap);
      var oldDependencies = this.dependencies;

      oldDependencies.forEach(function (d) {
        if (d !== $R._) { d.removeDependent(this) }
      }, this);

      newDependencies.forEach(function (d) {
        if (d !== $R._) { d.addDependent(this) }
      }, this);

      this.dependencies = newDependencies;
      return this;
    },
    removeDependent: function(rFnc) {
      this.dependents = this.dependents.filter(function (d) { return d !== rFnc });
    },
    addDependent: function(rFnc) {
      if (!this.dependents.some(function (d) { return d === rFnc })) {
        this.dependents.push(rFnc);
      }
    },
    argumentList: function(unboundArgs) {
      return this.dependencies.map(function(dependency) {
        if (dependency === $R._) {
          return unboundArgs.shift();
        } else if (dependency._isReactive) {
          return dependency.get();
        } else {
          return undefined;
        }
      }).concat(unboundArgs);
    }
  }

  if (typeof module !== 'undefined') {
    module.exports = $R;
  } else {
    defaultContext.$R = $R;
  }

  //Private
  function topo(rootFnc) {
    var explored = {};
    function search(rFnc) {
      if (explored[rFnc.id]) { return [] }
      explored[rFnc.id] = true;
      return rFnc.dependents.reduce(function (acc, dep) { return acc.concat(search(dep))},[]).concat(rFnc);
    }

    return search(rootFnc).reverse();
  }

  function wrap(v) {
    return v && (v._isReactive || v == $R._) ? v : $R(function () {return v});
  }
})();

},{}],5:[function(require,module,exports){
var postSuccess, ckSubmitForm, submitForm, setInlineEditor, focus, render, togglePost, editPost, loadCssCache, loadCss, lazyLoad, lazyLoadDeserialize, lazyLoadNestedSortable, lazyLoadHtml5Uploader, lazyLoadJcrop, lazyLoadEditor, lazyLoadFancybox, lazyLoadSocketio, fancyboxParams, respondResize, setWide, alignBreadcrumb, removeEditingUrl, mutate, timers, showTooltip, switchAndFocus, setOnlineUser, setProfile, out$ = typeof exports != 'undefined' && exports || this, this$ = this;
out$.postSuccess = postSuccess = function(ev, data){
  var f, p, t, ref$, meta;
  f = $(ev.target).closest('.post-edit');
  p = f.closest('.editing');
  t = $(f.find('.tooltip'));
  if (!data.success) {
    showTooltip(t, data != null ? (ref$ = data.errors) != null ? ref$.join('<br>') : void 8 : void 8);
  } else {
    p.find('.title').html((ref$ = data[0]) != null ? ref$.title : void 8);
    p.find('.body').html((ref$ = data[0]) != null ? ref$.body : void 8);
    f.removeClass('fadein').hide(300);
    meta = furl.parse(window.location.pathname);
    window.lastStatechangeWasUser = false;
    switch (meta.type) {
    case 'new-thread':
      History.replaceState({}, '', data.uri);
      break;
    case 'edit':
      removeEditingUrl(meta);
    }
  }
  return false;
};
out$.ckSubmitForm = ckSubmitForm = function(e){
  var editor, ref$, ev, $p;
  editor = e != null ? (ref$ = e.element) != null ? ref$.$ : void 8 : void 8;
  ev = {
    target: editor
  };
  if (!(editor != null && editor.id)) {
    $p = $(editor).closest('.post');
    return $.ajax({
      url: '/resources/posts/' + $p.data('post-id'),
      type: 'put',
      data: {
        id: $p.data('post-id'),
        forum_id: $p.data('forum-id'),
        parent_id: $p.data('thread-id'),
        body: e.getData()
      },
      success: function(data){
        e.fire('blur');
        return $p.find('[contentEditable=true]').blur();
      }
    });
  } else {
    return submitForm(ev, function(data){
      postSuccess(ev, data);
      $('footer').removeClass('expanded');
      return $('#post_new .fadein').remove();
    });
  }
};
out$.submitForm = submitForm = function(ev, fn){
  var $f, $s, body, e, ref$, input;
  $f = $(ev.target).closest('form');
  $s = $($f.find('[type=submit]:first'));
  if ($s) {
    $s.attr('disabled', 'disabled');
  }
  body = $f.find('textarea.body');
  e = typeof CKEDITOR != 'undefined' && CKEDITOR !== null ? (ref$ = CKEDITOR.instances) != null ? ref$[body.attr('id')] : void 8 : void 8;
  if (e) {
    input = e.getData();
    if (input != null && input.length) {
      body.val(input);
      e.setData('');
    }
  }
  $.ajax({
    url: $f.attr('action'),
    type: $f.attr('method'),
    data: $f.serialize(),
    dataType: 'json',
    success: function(data){
      $s.removeAttr('disabled');
      if ($('footer').hasClass('expanded')) {
        $('.onclick-footer-toggle:first').click();
      }
      if (fn) {
        return fn.call($f, data);
      }
    },
    error: function(data){
      $s.removeAttr('disabled');
      return showTooltip($($f.find('.tooltip')), data != null ? data.msg : void 8) || 'Try again!';
    }
  });
  return false;
};
out$.setInlineEditor = setInlineEditor = function(userId){
  $(".post[data-user-id=" + userId + "] .post-content").attr('contentEditable', true);
  return lazyLoadEditor(function(){
    var i$, ref$, len$, e;
    for (i$ = 0, len$ = (ref$ = CKEDITOR.instances).length; i$ < len$; ++i$) {
      e = ref$[i$];
      e.destroy(true);
    }
    try {
      return CKEDITOR.inlineAll();
    } catch (e$) {}
  });
};
focus = function($e){
  return setTimeout(function(){
    return $e.find('input[type="text"]').focus();
  }, 10);
};
render = function(sel, locals, cb){
  var $e;
  cb == null && (cb = function(){});
  $e = $(sel);
  return renderAndAppend(window, sel, 'post-edit', {
    user: user,
    post: locals
  }, function($e){
    cb();
    return focus($e);
  });
};
out$.togglePost = togglePost = function(ev){
  var data, e;
  if (!$(ev != null ? ev.target : void 8).hasClass('onclick-footer-toggle')) {
    return;
  }
  if (!user) {
    Auth.showLoginDialog();
    return;
  }
  data = {
    action: '/resources/posts',
    method: 'post'
  };
  e = $('footer');
  if (e.hasClass('expanded')) {
    e.removeClass('expanded');
    return $('#post_new .fadein').remove();
  } else {
    e.addClass('expanded');
    return render('#post_new', data, function(){
      return lazyLoadEditor(function(){
        if (!CKEDITOR.instances.post_new) {
          CKEDITOR.replace($('#post_new textarea')[0]);
        }
        e.find('form.post-new input[name="forum_id"]').val(window.activeForumId);
        return e.find('form.post-new input[name="parent_id"]').val(window.activeThreadId);
      });
    });
  }
};
out$.editPost = editPost = function(id, data){
  var sel, e;
  data == null && (data = {});
  if (id === true) {
    scrollToTop();
    data.action = '/resources/posts';
    data.method = 'post';
    return render('.forum', data, function(){
      return lazyLoadEditor(function(){
        return CKEDITOR.replace($('#editor')[0]);
      });
    });
  } else {
    sel = "#post_" + id;
    e = $(sel);
    if (!e.find("#post_edit_" + id + ":visible").length) {
      return $.get("/resources/posts/" + id, function(p){
        render(sel, p);
        return e.addClass('editing');
      });
    } else {
      return focus(e);
    }
  }
};
loadCssCache = {};
loadCss = function(href){
  if (loadCssCache[href]) {
    return;
  }
  $('head').append($('<link rel="stylesheet" type="text/css">').attr('href', href));
  return loadCssCache[href] = true;
};
out$.lazyLoad = lazyLoad = function(test, script, css, cb){
  var b;
  b = $('body');
  b.addClass('waiting');
  if (!test()) {
    if (css) {
      loadCss(css);
    }
    return headjs(script, function(){
      b.removeClass('waiting');
      return cb();
    });
  } else {
    b.removeClass('waiting');
    return cb();
  }
};
out$.lazyLoadDeserialize = lazyLoadDeserialize = function(cb){
  return lazyLoad(function(){
    var ref$;
    return (ref$ = window.$().deserialize) != null ? ref$.length : void 8;
  }, cacheUrl + "/local/jquery.deserialize.min.js", null, cb);
};
out$.lazyLoadNestedSortable = lazyLoadNestedSortable = function(cb){
  return lazyLoad(function(){
    var ref$;
    return (ref$ = window.$().nestedSortable) != null ? ref$.length : void 8;
  }, cacheUrl + "/local/jquery.mjs.nestedSortable.js", null, cb);
};
out$.lazyLoadHtml5Uploader = lazyLoadHtml5Uploader = function(cb){
  return lazyLoad(function(){
    var ref$;
    return (ref$ = window.$().html5Uploader) != null ? ref$.length : void 8;
  }, cacheUrl + "/local/jquery.html5uploader.js", cacheUrl + "/local/editor/skins/moono/editor.css", cb);
};
out$.lazyLoadJcrop = lazyLoadJcrop = function(cb){
  return lazyLoad(function(){
    var ref$;
    return (ref$ = window.$().Jcrop) != null ? ref$.length : void 8;
  }, cacheUrl + "/jcrop/js/jquery.Jcrop.min.js", cacheUrl + "/jcrop/css/jquery.Jcrop.min.css", cb);
};
out$.lazyLoadEditor = lazyLoadEditor = function(cb){
  return lazyLoad(function(){
    return typeof CKEDITOR != 'undefined' && CKEDITOR !== null ? CKEDITOR.version : void 8;
  }, cacheUrl + "/local/editor/ckeditor.js", null, cb);
};
out$.lazyLoadFancybox = lazyLoadFancybox = function(cb){
  return lazyLoad(function(){
    var ref$;
    return (ref$ = window.$().fancybox) != null ? ref$.length : void 8;
  }, cacheUrl + "/fancybox/jquery.fancybox.pack.js", cacheUrl + "/fancybox/jquery.fancybox.css", cb);
};
out$.lazyLoadSocketio = lazyLoadSocketio = function(cb){
  return lazyLoad(function(){
    return window.io;
  }, "/socket.io/socket.io.js", null, cb);
};
out$.fancyboxParams = fancyboxParams = {
  closeEffect: 'elastic',
  closeSpeed: 200,
  closeEasing: 'easeOutExpo',
  openEffect: 'fade',
  openSpeed: 450
};
out$.respondResize = respondResize = function(){
  var w;
  w = $(window);
  if (window.mutator !== 'admin') {
    if (w.width() <= 800) {
      return $('body').addClass('collapsed');
    }
  }
};
out$.setWide = setWide = function(){
  var l;
  l = $('#left_content');
  return l.toggleClass('wide', l.width() > 300);
};
out$.alignBreadcrumb = alignBreadcrumb = function(){
  var b, m, l, pos;
  b = $('#breadcrumb');
  m = $('#main_content');
  l = $('#left_content');
  pos = (m.width() - b.width()) / 2;
  return b.transition({
    left: pos < l.width() ? l.width() : pos
  }, 300, 'easeOutExpo');
};
out$.removeEditingUrl = removeEditingUrl = function(meta){
  return History.replaceState({
    noSurf: true
  }, '', meta.threadUri);
};
out$.mutate = mutate = function(){
  var $e, href, params;
  $e = $(this);
  if ($e.hasClass('require-login') && !user) {
    return;
  }
  href = $e.attr('href');
  if (!href) {
    return false;
  }
  if (href != null && href.match(/#/)) {
    return true;
  }
  params = {};
  if ($e.hasClass('no-surf')) {
    params.noSurf = true;
  }
  params.surfData = $e.data('surf') || window.surfData || void 8;
  window.lastStatechangeWasUser = false;
  History.pushState(params, '', href);
  return false;
};
timers = {};
out$.showTooltip = showTooltip = function($tooltip, msg, duration){
  var timer;
  duration == null && (duration = 4000);
  if (!(msg != null && msg.length)) {
    return;
  }
  timer = timers[msg];
  if (timer) {
    clearTimeout(timer);
  }
  $tooltip.html(msg).addClass('hover');
  return timers[msg] = setTimeout(function(){
    timers[msg] = void 8;
    return $tooltip.removeClass('hover');
  }, duration);
};
out$.switchAndFocus = switchAndFocus = function(remove, add, focusOn){
  var $e;
  $e = $('.fancybox-wrap');
  $e.removeClass(remove + " shake slide").addClass(add);
  return setTimeout(function(){
    $e.addClass('slide');
    return setTimeout(function(){
      return $(focusOn).focus();
    }, 250);
  }, 50);
};
out$.setOnlineUser = setOnlineUser = function(id){
  var x$;
  x$ = $("[data-user-id=" + id + "] .profile.photo");
  x$.addClass('online');
  x$.attr('title', 'Online!');
  return x$;
};
out$.setProfile = setProfile = function(src){
  var x$, y$;
  x$ = $('.photo');
  x$.attr('href', "/user/" + user.name);
  x$.addClass('online');
  y$ = $('#profile');
  y$.on('load', function(){
    return $('.profile').show();
  });
  y$.attr('src', window.cacheUrl + src);
  return y$;
};
},{}],10:[function(require,module,exports){
/*

## An Experiment in Pagination

- It wants to fill all (or most) of the displayed height of the area its controlling.
- It should be relatively narrow.
- Clicking on it will change what page you're on.
  - The page number is calculated proportionally to the height of the pager relative to the number of pages.
- Hovering over it could provide info on what page you'll go to if you click there.
  - However, many touch devices are unable to hover.  What to do?
    http://ux.stackexchange.com/questions/970/what-are-some-alternatives-to-hover-on-touch-based-devices


- It has to work on the server side, too.

### HTML Structure

  #pager
    .first
    .current
    .last

*/
var indicatorHeight, indicatorTop, pageFromClickHeight, Pager;
indicatorHeight = function(pages, height){
  return Math.floor(height / pages);
};
indicatorTop = function(page, iHeight){
  return (page - 1) * iHeight;
};
pageFromClickHeight = function(clickHeight, iHeight){
  var f;
  f = Math.ceil(clickHeight / iHeight);
  if (f === 0) {
    return 1;
  } else {
    return f;
  }
};
module.exports = Pager = (function(){
  Pager.displayName = 'Pager';
  var prototype = Pager.prototype, constructor = Pager;
  function Pager(id, options){
    var this$ = this;
    this.id = id;
    this.onResizeReInit = bind$(this, 'onResizeReInit', prototype);
    this.onClickSetPage = bind$(this, 'onClickSetPage', prototype);
    this.setNextAndPreviousLinks = bind$(this, 'setNextAndPreviousLinks', prototype);
    this.previousPage = bind$(this, 'previousPage', prototype);
    this.nextPage = bind$(this, 'nextPage', prototype);
    this.setPage = bind$(this, 'setPage', prototype);
    this.urlForPage = bind$(this, 'urlForPage', prototype);
    this.last = options.last;
    this.current = parseInt(options.current) || 1;
    this.forumId = options.forumId;
    this.$el = $(this.id);
    this.init();
    this.$el.click(this.onClickSetPage);
    this.$el.find('.current').draggable({
      axis: 'y',
      containment: 'parent',
      grid: [0, this.indicatorHeight],
      drag: function(ev, ui){
        var page;
        return page = pageFromClickHeight(ui.position.top + Math.floor(this$.indicatorHeight / 2), this$.indicatorHeight);
      },
      stop: function(ev, ui){
        var page;
        page = pageFromClickHeight(ui.position.top + Math.floor(this$.indicatorHeight / 2), this$.indicatorHeight);
        return this$.setPage(page);
      }
    });
    this.$el.find('a.previous').click(function(ev){
      this$.previousPage();
      ev.preventDefault();
      return false;
    });
    this.$el.find('a.next').click(function(ev){
      this$.nextPage();
      ev.preventDefault();
      return false;
    });
    $(window).resize(this.onResizeReInit);
  }
  prototype.init = function(){
    $('body').toggleClass('paginator', this.last > 1);
    this.height = this.$el.height();
    this.indicatorHeight = indicatorHeight(this.last, this.height);
    try {
      return this.$el.find('.current').draggable('option', 'grid', [0, this.indicatorHeight]);
    } catch (e$) {}
  };
  prototype.urlForPage = function(n){
    var href, base;
    href = window.location.pathname;
    base = href.replace(/\/page\/.*$/, '');
    if (n === 1) {
      return base;
    } else {
      return base + "/page/" + n;
    }
  };
  prototype.setPage = function(n, useHistory){
    var t;
    useHistory == null && (useHistory = true);
    this.current = n > this.last ? this.last : n;
    this.$el.find('.current').css({
      top: indicatorTop(this.current, this.indicatorHeight),
      height: this.indicatorHeight
    });
    if (useHistory) {
      History.pushState({
        surfData: window.surfData
      }, '', this.urlForPage(this.current));
    }
    this.setNextAndPreviousLinks();
    t = this.$el.find('.tooltip');
    return showTooltip(t, "Page " + this.current);
  };
  prototype.nextPage = function(){
    if (this.current < this.last) {
      return this.setPage(parseInt(this.current) + 1);
    } else {
      return false;
    }
  };
  prototype.previousPage = function(){
    if (this.current > 1) {
      return this.setPage(this.current - 1);
    } else {
      return false;
    }
  };
  prototype.setNextAndPreviousLinks = function(){
    this.$el.find('a.previous').attr('href', this.urlForPage(this.current - 1 || 1));
    this.$el.find('a.next').attr('href', this.urlForPage(Math.min(this.last, parseInt(this.current) + 1)));
    switch (this.current) {
    case 1:
      this.$el.find('a.page.previous').hide();
      return this.$el.find('a.page.next').show();
    case this.last:
      this.$el.find('a.page.previous').show();
      return this.$el.find('a.page.next').hide();
    default:
      return this.$el.find('a.page').show();
    }
  };
  prototype.onClickSetPage = function(ev){
    var y, dy, page;
    window.ev = ev;
    y = function(ev, $el){
      var dy;
      dy = ev.pageY - parseInt($el.css('padding-top')) - $el.offset().top;
      if (dy < 0) {
        return 0;
      } else if (dy > $el.height()) {
        return $el.height();
      } else {
        return dy;
      }
    };
    dy = y(ev, this.$el);
    page = pageFromClickHeight(dy, this.indicatorHeight);
    return this.setPage(page);
  };
  prototype.onResizeReInit = function(ev){
    this.init();
    return this.setPage(this.current, false);
  };
  return Pager;
}());
Pager.indicatorHeight = indicatorHeight;
Pager.indicatorTop = indicatorTop;
Pager.pageFromClickHeight = pageFromClickHeight;
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
},{}],18:[function(require,module,exports){
(function(global){/*!
 * Lo-Dash 1.0.0-rc.3 <http://lodash.com>
 * (c) 2012 John-David Dalton <http://allyoucanleet.com/>
 * Based on Underscore.js 1.4.3 <http://underscorejs.org>
 * (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */
;(function(window, undefined) {

  /** Detect free variable `exports` */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `global` and use it as `window` */
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    window = freeGlobal;
  }

  /** Used for array and object method references */
  var arrayRef = [],
      // avoid a Closure Compiler bug by creatively creating an object
      objectRef = new function(){};

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used internally to indicate various things */
  var indicatorObject = objectRef;

  /** Used by `cachedContains` as the default size when optimizations are enabled for large arrays */
  var largeArraySize = 30;

  /** Used to restore the original `_` reference in `noConflict` */
  var oldDash = window._;

  /** Used to detect template delimiter values that require a with-statement */
  var reComplexDelimiter = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/;

  /** Used to match HTML entities */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#x27);/g;

  /** Used to match empty string literals in compiled template source */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;

  /** Used to insert the data object variable into compiled template source */
  var reInsertVariable = /(?:__e|__t = )\(\s*(?![\d\s"']|this\.)/g;

  /** Used to detect if a method is native */
  var reNative = RegExp('^' +
    (objectRef.valueOf + '')
      .replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&')
      .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
  );

  /**
   * Used to match ES6 template delimiters
   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.8.6
   */
  var reEsTemplate = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g;

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to match HTML characters */
  var reUnescapedHtml = /[&<>"']/g;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** Used to fix the JScript [[DontEnum]] bug */
  var shadowed = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
    'toLocaleString', 'toString', 'valueOf'
  ];

  /** Used to make template sourceURLs easier to identify */
  var templateCounter = 0;

  /** Native method shortcuts */
  var ceil = Math.ceil,
      concat = arrayRef.concat,
      floor = Math.floor,
      getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
      hasOwnProperty = objectRef.hasOwnProperty,
      push = arrayRef.push,
      propertyIsEnumerable = objectRef.propertyIsEnumerable,
      toString = objectRef.toString;

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind,
      nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
      nativeIsFinite = window.isFinite,
      nativeIsNaN = window.isNaN,
      nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
      nativeMax = Math.max,
      nativeMin = Math.min,
      nativeRandom = Math.random;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Detect various environments */
  var isIeOpera = !!window.attachEvent,
      isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

  /* Detect if `Function#bind` exists and is inferred to be fast (all but V8) */
  var isBindFast = nativeBind && !isV8;

  /* Detect if `Object.keys` exists and is inferred to be fast (IE, Opera, V8) */
  var isKeysFast = nativeKeys && (isIeOpera || isV8);

  /**
   * Detect the JScript [[DontEnum]] bug:
   *
   * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
   * made non-enumerable as well.
   */
  var hasDontEnumBug;

  /** Detect if own properties are iterated after inherited properties (IE < 9) */
  var iteratesOwnLast;

  /**
   * Detect if `Array#shift` and `Array#splice` augment array-like objects
   * incorrectly:
   *
   * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
   * and `splice()` functions that fail to remove the last element, `value[0]`,
   * of array-like objects even though the `length` property is set to `0`.
   * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
   * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
   */
  var hasObjectSpliceBug = (hasObjectSpliceBug = { '0': 1, 'length': 1 },
    arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0]);

  /** Detect if an `arguments` object's indexes are non-enumerable (IE < 9) */
  var nonEnumArgs = true;

  (function() {
    var props = [];
    function ctor() { this.x = 1; }
    ctor.prototype = { 'valueOf': 1, 'y': 1 };
    for (var prop in new ctor) { props.push(prop); }
    for (prop in arguments) { nonEnumArgs = !prop; }

    hasDontEnumBug = !/valueOf/.test(props);
    iteratesOwnLast = props[0] != 'x';
  }(1));

  /** Detect if `arguments` objects are `Object` objects (all but Opera < 10.5) */
  var argsAreObjects = arguments.constructor == Object;

  /** Detect if `arguments` objects [[Class]] is unresolvable (Firefox < 4, IE < 9) */
  var noArgsClass = !isArguments(arguments);

  /**
   * Detect lack of support for accessing string characters by index:
   *
   * IE < 8 can't access characters by index and IE 8 can only access
   * characters by index on string literals.
   */
  var noCharByIndex = ('x'[0] + Object('x')[0]) != 'xx';

  /**
   * Detect if a node's [[Class]] is unresolvable (IE < 9)
   * and that the JS engine won't error when attempting to coerce an object to
   * a string without a `toString` property value of `typeof` "function".
   */
  try {
    var noNodeClass = ({ 'toString': 0 } + '', toString.call(document) == objectClass);
  } catch(e) { }

  /**
   * Detect if sourceURL syntax is usable without erroring:
   *
   * The JS engine embedded in Adobe products will throw a syntax error when
   * it encounters a single line comment beginning with the `@` symbol.
   *
   * The JS engine in Narwhal will generate the function `function anonymous(){//}`
   * and throw a syntax error.
   *
   * Avoid comments beginning `@` symbols in IE because they are part of its
   * non-standard conditional compilation support.
   * http://msdn.microsoft.com/en-us/library/121hztk3(v=vs.94).aspx
   */
  try {
    var useSourceURL = (Function('//@')(), !isIeOpera);
  } catch(e) { }

  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

  /** Used to lookup a built-in constructor by [[Class]] */
  var ctorByClass = {};
  ctorByClass[arrayClass] = Array;
  ctorByClass[boolClass] = Boolean;
  ctorByClass[dateClass] = Date;
  ctorByClass[objectClass] = Object;
  ctorByClass[numberClass] = Number;
  ctorByClass[regexpClass] = RegExp;
  ctorByClass[stringClass] = String;

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object, that wraps the given `value`, to enable
   * method chaining.
   *
   * The chainable wrapper functions are:
   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`, `compose`,
   * `concat`, `countBy`, `debounce`, `defaults`, `defer`, `delay`, `difference`,
   * `filter`, `flatten`, `forEach`, `forIn`, `forOwn`, `functions`, `groupBy`,
   * `initial`, `intersection`, `invert`, `invoke`, `keys`, `map`, `max`, `memoize`,
   * `merge`, `min`, `object`, `omit`, `once`, `pairs`, `partial`, `pick`, `pluck`,
   * `push`, `range`, `reject`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
   * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `union`, `uniq`,
   * `unshift`, `values`, `where`, `without`, `wrap`, and `zip`
   *
   * The non-chainable wrapper functions are:
   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `has`, `identity`,
   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`,
   * `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`, `isObject`,
   * `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`, `lastIndexOf`,
   * `mixin`, `noConflict`, `pop`, `random`, `reduce`, `reduceRight`, `result`,
   * `shift`, `size`, `some`, `sortedIndex`, `template`, `unescape`, and `uniqueId`
   *
   * The wrapper functions `first` and `last` return wrapped values when `n` is
   * passed, otherwise they return unwrapped values.
   *
   * @name _
   * @constructor
   * @category Chaining
   * @param {Mixed} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns a `lodash` instance.
   */
  function lodash(value) {
    // exit early if already wrapped, even if wrapped by a different `lodash` constructor
    if (value && typeof value == 'object' && value.__wrapped__) {
      return value;
    }
    // allow invoking `lodash` without the `new` operator
    if (!(this instanceof lodash)) {
      return new lodash(value);
    }
    this.__wrapped__ = value;
  }

  /**
   * By default, the template delimiters used by Lo-Dash are similar to those in
   * embedded Ruby (ERB). Change the following template settings to use alternative
   * delimiters.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  lodash.templateSettings = {

    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'escape': /<%-([\s\S]+?)%>/g,

    /**
     * Used to detect code to be evaluated.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'evaluate': /<%([\s\S]+?)%>/g,

    /**
     * Used to detect `data` property values to inject.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'interpolate': reInterpolate,

    /**
     * Used to reference the data object in the template text.
     *
     * @static
     * @memberOf _.templateSettings
     * @type String
     */
    'variable': ''
  };

  /*--------------------------------------------------------------------------*/

  /**
   * The template used to create iterator functions.
   *
   * @private
   * @param {Obect} data The data object used to populate the text.
   * @returns {String} Returns the interpolated text.
   */
  var iteratorTemplate = template(
    // conditional strict mode
    "<% if (obj.useStrict) { %>'use strict';\n<% } %>" +

    // the `iteratee` may be reassigned by the `top` snippet
    'var index, iteratee = <%= firstArg %>, ' +
    // assign the `result` variable an initial value
    'result = <%= firstArg %>;\n' +
    // exit early if the first argument is falsey
    'if (!<%= firstArg %>) return result;\n' +
    // add code before the iteration branches
    '<%= top %>;\n' +

    // array-like iteration:
    '<% if (arrayLoop) { %>' +
    'var length = iteratee.length; index = -1;\n' +
    "if (typeof length == 'number') {" +

    // add support for accessing string characters by index if needed
    '  <% if (noCharByIndex) { %>\n' +
    '  if (isString(iteratee)) {\n' +
    "    iteratee = iteratee.split('')\n" +
    '  }' +
    '  <% } %>\n' +

    // iterate over the array-like value
    '  while (++index < length) {\n' +
    '    <%= arrayLoop %>\n' +
    '  }\n' +
    '}\n' +
    'else {' +

    // object iteration:
    // add support for iterating over `arguments` objects if needed
    '  <%  } else if (nonEnumArgs) { %>\n' +
    '  var length = iteratee.length; index = -1;\n' +
    '  if (length && isArguments(iteratee)) {\n' +
    '    while (++index < length) {\n' +
    "      index += '';\n" +
    '      <%= objectLoop %>\n' +
    '    }\n' +
    '  } else {' +
    '  <% } %>' +

    // Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
    // (if the prototype or a property on the prototype has been set)
    // incorrectly sets a function's `prototype` property [[Enumerable]]
    // value to `true`. Because of this Lo-Dash standardizes on skipping
    // the the `prototype` property of functions regardless of its
    // [[Enumerable]] value.
    '  <% if (!hasDontEnumBug) { %>\n' +
    "  var skipProto = typeof iteratee == 'function' && \n" +
    "    propertyIsEnumerable.call(iteratee, 'prototype');\n" +
    '  <% } %>' +

    // iterate own properties using `Object.keys` if it's fast
    '  <% if (isKeysFast && useHas) { %>\n' +
    '  var ownIndex = -1,\n' +
    '      ownProps = objectTypes[typeof iteratee] ? nativeKeys(iteratee) : [],\n' +
    '      length = ownProps.length;\n\n' +
    '  while (++ownIndex < length) {\n' +
    '    index = ownProps[ownIndex];\n' +
    "    <% if (!hasDontEnumBug) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>" +
    '    <%= objectLoop %>\n' +
    '    <% if (!hasDontEnumBug) { %>}\n<% } %>' +
    '  }' +

    // else using a for-in loop
    '  <% } else { %>\n' +
    '  for (index in iteratee) {<%' +
    '    if (!hasDontEnumBug || useHas) { %>\n    if (<%' +
    "      if (!hasDontEnumBug) { %>!(skipProto && index == 'prototype')<% }" +
    '      if (!hasDontEnumBug && useHas) { %> && <% }' +
    '      if (useHas) { %>hasOwnProperty.call(iteratee, index)<% }' +
    '    %>) {' +
    '    <% } %>\n' +
    '    <%= objectLoop %>;' +
    '    <% if (!hasDontEnumBug || useHas) { %>\n    }<% } %>\n' +
    '  }' +
    '  <% } %>' +

    // Because IE < 9 can't set the `[[Enumerable]]` attribute of an
    // existing property and the `constructor` property of a prototype
    // defaults to non-enumerable, Lo-Dash skips the `constructor`
    // property when it infers it's iterating over a `prototype` object.
    '  <% if (hasDontEnumBug) { %>\n\n' +
    '  var ctor = iteratee.constructor;\n' +
    '    <% for (var k = 0; k < 7; k++) { %>\n' +
    "  index = '<%= shadowed[k] %>';\n" +
    '  if (<%' +
    "      if (shadowed[k] == 'constructor') {" +
    '        %>!(ctor && ctor.prototype === iteratee) && <%' +
    '      } %>hasOwnProperty.call(iteratee, index)) {\n' +
    '    <%= objectLoop %>\n' +
    '  }' +
    '    <% } %>' +
    '  <% } %>' +
    '  <% if (arrayLoop || nonEnumArgs) { %>\n}<% } %>\n' +

    // add code to the bottom of the iteration function
    '<%= bottom %>;\n' +
    // finally, return the `result`
    'return result'
  );

  /** Reusable iterator options for `assign` and `defaults` */
  var assignIteratorOptions = {
    'args': 'object, source, guard',
    'top':
      "for (var argsIndex = 1, argsLength = typeof guard == 'number' ? 2 : arguments.length; argsIndex < argsLength; argsIndex++) {\n" +
      '  if ((iteratee = arguments[argsIndex])) {',
    'objectLoop': 'result[index] = iteratee[index]',
    'bottom': '  }\n}'
  };

  /**
   * Reusable iterator options shared by `each`, `forIn`, and `forOwn`.
   */
  var eachIteratorOptions = {
    'args': 'collection, callback, thisArg',
    'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
    'arrayLoop': 'if (callback(iteratee[index], index, collection) === false) return result',
    'objectLoop': 'if (callback(iteratee[index], index, collection) === false) return result'
  };

  /** Reusable iterator options for `forIn` and `forOwn` */
  var forOwnIteratorOptions = {
    'arrayLoop': null
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a function optimized to search large arrays for a given `value`,
   * starting at `fromIndex`, using strict equality for comparisons, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Number} [fromIndex=0] The index to search from.
   * @param {Number} [largeSize=30] The length at which an array is considered large.
   * @returns {Boolean} Returns `true` if `value` is found, else `false`.
   */
  function cachedContains(array, fromIndex, largeSize) {
    fromIndex || (fromIndex = 0);

    var length = array.length,
        isLarge = (length - fromIndex) >= (largeSize || largeArraySize);

    if (isLarge) {
      var cache = {},
          index = fromIndex - 1;

      while (++index < length) {
        // manually coerce `value` to a string because `hasOwnProperty`, in some
        // older versions of Firefox, coerces objects incorrectly
        var key = array[index] + '';
        (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index]);
      }
    }
    return function(value) {
      if (isLarge) {
        var key = value + '';
        return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1;
      }
      return indexOf(array, value, fromIndex) > -1;
    }
  }

  /**
   * Used by `_.max` and `_.min` as the default `callback` when a given
   * `collection` is a string value.
   *
   * @private
   * @param {String} value The character to inspect.
   * @returns {Number} Returns the code unit of given character.
   */
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }

  /**
   * Used by `sortBy` to compare transformed `collection` values, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {Number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ai = a.index,
        bi = b.index;

    a = a.criteria;
    b = b.criteria;

    // ensure a stable sort in V8 and other engines
    // http://code.google.com/p/v8/issues/detail?id=90
    if (a !== b) {
      if (a > b || typeof a == 'undefined') {
        return 1;
      }
      if (a < b || typeof b == 'undefined') {
        return -1;
      }
    }
    return ai < bi ? -1 : 1;
  }

  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any `partailArgs` to the arguments passed
   * to the bound function.
   *
   * @private
   * @param {Function|String} func The function to bind or the method name.
   * @param {Mixed} [thisArg] The `this` binding of `func`.
   * @param {Array} partialArgs An array of arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   */
  function createBound(func, thisArg, partialArgs) {
    var isFunc = isFunction(func),
        isPartial = !partialArgs,
        key = thisArg;

    // juggle arguments
    if (isPartial) {
      partialArgs = thisArg;
    }
    if (!isFunc) {
      thisArg = func;
    }

    function bound() {
      // `Function#bind` spec
      // http://es5.github.com/#x15.3.4.5
      var args = arguments,
          thisBinding = isPartial ? this : thisArg;

      if (!isFunc) {
        func = thisArg[key];
      }
      if (partialArgs.length) {
        args = args.length
          ? partialArgs.concat(slice(args))
          : partialArgs;
      }
      if (this instanceof bound) {
        // ensure `new bound` is an instance of `bound` and `func`
        noop.prototype = func.prototype;
        thisBinding = new noop;
        noop.prototype = null;

        // mimic the constructor's `return` behavior
        // http://es5.github.com/#x13.2.2
        var result = func.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisBinding, args);
    }
    return bound;
  }

  /**
   * Produces an iteration callback bound to an optional `thisArg`. If `func` is
   * a property name, the callback will return the property value for a given element.
   *
   * @private
   * @param {Function|String} [func=identity|property] The function called per
   * iteration or property name to query.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @param {Object} [accumulating] Used to indicate that the callback should
   *  accept an `accumulator` argument.
   * @returns {Function} Returns a callback function.
   */
  function createCallback(func, thisArg, accumulating) {
    if (!func) {
      return identity;
    }
    if (typeof func != 'function') {
      return function(object) {
        return object[func];
      };
    }
    if (typeof thisArg != 'undefined') {
      if (accumulating) {
        return function(accumulator, value, index, object) {
          return func.call(thisArg, accumulator, value, index, object);
        };
      }
      return function(value, index, object) {
        return func.call(thisArg, value, index, object);
      };
    }
    return func;
  }

  /**
   * Creates compiled iteration functions.
   *
   * @private
   * @param {Object} [options1, options2, ...] The compile options object(s).
   *  useHas - A boolean to specify using `hasOwnProperty` checks in the object loop.
   *  args - A string of comma separated arguments the iteration function will accept.
   *  top - A string of code to execute before the iteration branches.
   *  arrayLoop - A string of code to execute in the array loop.
   *  objectLoop - A string of code to execute in the object loop.
   *  bottom - A string of code to execute after the iteration branches.
   *
   * @returns {Function} Returns the compiled function.
   */
  function createIterator() {
    var data = {
      'arrayLoop': '',
      'bottom': '',
      'hasDontEnumBug': hasDontEnumBug,
      'isKeysFast': isKeysFast,
      'objectLoop': '',
      'nonEnumArgs': nonEnumArgs,
      'noCharByIndex': noCharByIndex,
      'shadowed': shadowed,
      'top': '',
      'useHas': true
    };

    // merge options into a template data object
    for (var object, index = 0; object = arguments[index]; index++) {
      for (var key in object) {
        data[key] = object[key];
      }
    }
    var args = data.args;
    data.firstArg = /^[^,]+/.exec(args)[0];

    // create the function factory
    var factory = Function(
        'createCallback, hasOwnProperty, isArguments, isString, objectTypes, ' +
        'nativeKeys, propertyIsEnumerable',
      'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}'
    );
    // return the compiled function
    return factory(
      createCallback, hasOwnProperty, isArguments, isString, objectTypes,
      nativeKeys, propertyIsEnumerable
    );
  }

  /**
   * A function compiled to iterate `arguments` objects, arrays, objects, and
   * strings consistenly across environments, executing the `callback` for each
   * element in the `collection`. The `callback` is bound to `thisArg` and invoked
   * with three arguments; (value, index|key, collection). Callbacks may exit
   * iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|String} Returns `collection`.
   */
  var each = createIterator(eachIteratorOptions);

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {String} match The matched character to escape.
   * @returns {String} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Used by `escape` to convert characters to HTML entities.
   *
   * @private
   * @param {String} match The matched character to escape.
   * @returns {String} Returns the escaped character.
   */
  function escapeHtmlChar(match) {
    return htmlEscapes[match];
  }

  /**
   * Checks if `value` is a DOM node in IE < 9.
   *
   * @private
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a DOM node, else `false`.
   */
  function isNode(value) {
    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
    // methods that are `typeof` "string" and still can coerce nodes to strings
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  }

  /**
   * A no-operation function.
   *
   * @private
   */
  function noop() {
    // no operation performed
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used, instead of `Array#slice`, to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|String} collection The collection to slice.
   * @param {Number} start The start index.
   * @param {Number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /**
   * Used by `unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {String} match The matched character to unescape.
   * @returns {String} Returns the unescaped character.
   */
  function unescapeHtmlChar(match) {
    return htmlUnescapes[match];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Assigns own enumerable properties of source object(s) to the `destination`
   * object. Subsequent sources will overwrite propery assignments of previous
   * sources.
   *
   * @static
   * @memberOf _
   * @alias extend
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [source1, source2, ...] The source objects.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * _.assign({ 'name': 'moe' }, { 'age': 40 });
   * // => { 'name': 'moe', 'age': 40 }
   */
  var assign = createIterator(assignIteratorOptions);

  /**
   * Checks if `value` is an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
   * @example
   *
   * (function() { return _.isArguments(arguments); })(1, 2, 3);
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return toString.call(value) == argsClass;
  }
  // fallback for browsers that can't detect `arguments` objects by [[Class]]
  if (noArgsClass) {
    isArguments = function(value) {
      return value ? hasOwnProperty.call(value, 'callee') : false;
    };
  }

  /**
   * Iterates over `object`'s own and inherited enumerable properties, executing
   * the `callback` for each property. The `callback` is bound to `thisArg` and
   * invoked with three arguments; (value, key, object). Callbacks may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function Dog(name) {
   *   this.name = name;
   * }
   *
   * Dog.prototype.bark = function() {
   *   alert('Woof, woof!');
   * };
   *
   * _.forIn(new Dog('Dagny'), function(value, key) {
   *   alert(key);
   * });
   * // => alerts 'name' and 'bark' (order is not guaranteed)
   */
  var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
    'useHas': false
  });

  /**
   * Iterates over an object's own enumerable properties, executing the `callback`
   * for each property. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, key, object). Callbacks may exit iteration early by explicitly
   * returning `false`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
   *   alert(key);
   * });
   * // => alerts '0', '1', and 'length' (order is not guaranteed)
   */
  var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);

  /**
   * A fallback implementation of `isPlainObject` that checks if a given `value`
   * is an object created by the `Object` constructor, assuming objects created
   * by the `Object` constructor have no inherited enumerable properties and that
   * there are no `Object.prototype` extensions.
   *
   * @private
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if `value` is a plain object, else `false`.
   */
  function shimIsPlainObject(value) {
    // avoid non-objects and false positives for `arguments` objects
    var result = false;
    if (!(value && typeof value == 'object') || isArguments(value)) {
      return result;
    }
    // check that the constructor is `Object` (i.e. `Object instanceof Object`)
    var ctor = value.constructor;
    if ((!isFunction(ctor) && (!noNodeClass || !isNode(value))) || ctor instanceof ctor) {
      // IE < 9 iterates inherited properties before own properties. If the first
      // iterated property is an object's own property then there are no inherited
      // enumerable properties.
      if (iteratesOwnLast) {
        forIn(value, function(value, key, object) {
          result = !hasOwnProperty.call(object, key);
          return false;
        });
        return result === false;
      }
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      forIn(value, function(value, key) {
        result = key;
      });
      return result === false || hasOwnProperty.call(value, result);
    }
    return result;
  }

  /**
   * A fallback implementation of `Object.keys` that produces an array of the
   * given object's own enumerable property names.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names.
   */
  function shimKeys(object) {
    var result = [];
    forOwn(object, function(value, key) {
      result.push(key);
    });
    return result;
  }

  /**
   * Used to convert characters to HTML entities:
   *
   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
   * don't require escaping in HTML and have no special meaning unless they're part
   * of a tag or an unquoted attribute value.
   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
   */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
  };

  /** Used to convert HTML entities to characters */
  var htmlUnescapes = invert(htmlEscapes);

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a clone of `value`. If `deep` is `true`, nested objects will also
   * be cloned, otherwise they will be assigned by reference.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to clone.
   * @param {Boolean} deep A flag to indicate a deep clone.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `deep`.
   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
   * @param- {Array} [stackB=[]] Internally used to associate clones with their
   *  source counterparts.
   * @returns {Mixed} Returns the cloned `value`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * var shallow = _.clone(stooges);
   * shallow[0] === stooges[0];
   * // => true
   *
   * var deep = _.clone(stooges, true);
   * deep[0] === stooges[0];
   * // => false
   */
  function clone(value, deep, guard, stackA, stackB) {
    if (value == null) {
      return value;
    }
    if (guard) {
      deep = false;
    }
    // inspect [[Class]]
    var isObj = isObject(value);
    if (isObj) {
      var className = toString.call(value);
      if (!cloneableClasses[className] || (noNodeClass && isNode(value))) {
        return value;
      }
      var isArr = isArray(value);
    }
    // shallow clone
    if (!isObj || !deep) {
      return isObj
        ? (isArr ? slice(value) : assign({}, value))
        : value;
    }
    var ctor = ctorByClass[className];
    switch (className) {
      case boolClass:
      case dateClass:
        return new ctor(+value);

      case numberClass:
      case stringClass:
        return new ctor(value);

      case regexpClass:
        return ctor(value.source, reFlags.exec(value));
    }
    // check for circular references and return corresponding clone
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == value) {
        return stackB[length];
      }
    }
    // init cloned object
    var result = isArr ? ctor(value.length) : {};

    // add the source value to the stack of traversed objects
    // and associate it with its clone
    stackA.push(value);
    stackB.push(result);

    // recursively populate clone (susceptible to call stack limits)
    (isArr ? forEach : forOwn)(value, function(objValue, key) {
      result[key] = clone(objValue, deep, null, stackA, stackB);
    });

    // add array properties assigned by `RegExp#exec`
    if (isArr) {
      if (hasOwnProperty.call(value, 'index')) {
        result.index = value.index;
      }
      if (hasOwnProperty.call(value, 'input')) {
        result.input = value.input;
      }
    }
    return result;
  }

  /**
   * Creates a deep clone of `value`. Functions and DOM nodes are **not** cloned.
   * The enumerable properties of `arguments` objects and objects created by
   * constructors other than `Object` are cloned to plain `Object` objects.
   *
   * Note: This function is loosely based on the structured clone algorithm.
   * See http://www.w3.org/TR/html5/common-dom-interfaces.html#internal-structured-cloning-algorithm.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to deep clone.
   * @returns {Mixed} Returns the deep cloned `value`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * var deep = _.cloneDeep(stooges);
   * deep[0] === stooges[0];
   * // => false
   */
  function cloneDeep(value) {
    return clone(value, true);
  }

  /**
   * Assigns own enumerable properties of source object(s) to the `destination`
   * object for all `destination` properties that resolve to `null`/`undefined`.
   * Once a property is set, additional defaults of the same property will be
   * ignored.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [default1, default2, ...] The default objects.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * var iceCream = { 'flavor': 'chocolate' };
   * _.defaults(iceCream, { 'flavor': 'vanilla', 'sprinkles': 'rainbow' });
   * // => { 'flavor': 'chocolate', 'sprinkles': 'rainbow' }
   */
  var defaults = createIterator(assignIteratorOptions, {
    'objectLoop': 'if (result[index] == null) ' + assignIteratorOptions.objectLoop
  });

  /**
   * Creates a sorted array of all enumerable properties, own and inherited,
   * of `object` that have function values.
   *
   * @static
   * @memberOf _
   * @alias methods
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names that have function values.
   * @example
   *
   * _.functions(_);
   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
   */
  function functions(object) {
    var result = [];
    forIn(object, function(value, key) {
      if (isFunction(value)) {
        result.push(key);
      }
    });
    return result.sort();
  }

  /**
   * Checks if the specified object `property` exists and is a direct property,
   * instead of an inherited property.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to check.
   * @param {String} property The property to check for.
   * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
   * @example
   *
   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
   * // => true
   */
  function has(object, property) {
    return object ? hasOwnProperty.call(object, property) : false;
  }

  /**
   * Creates an object composed of the inverted keys and values of the given `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the created inverted object.
   * @example
   *
   *  _.invert({ 'first': 'Moe', 'second': 'Larry', 'third': 'Curly' });
   * // => { 'Moe': 'first', 'Larry': 'second', 'Curly': 'third' } (order is not guaranteed)
   */
  function invert(object) {
    var result = {};
    forOwn(object, function(value, key) {
      result[value] = key;
    });
    return result;
  }

  /**
   * Checks if `value` is an array.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an array, else `false`.
   * @example
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   *
   * _.isArray([1, 2, 3]);
   * // => true
   */
  var isArray = nativeIsArray || function(value) {
    // `instanceof` may cause a memory leak in IE 7 if `value` is a host object
    // http://ajaxian.com/archives/working-aroung-the-instanceof-memory-leak
    return (argsAreObjects && value instanceof Array) || toString.call(value) == arrayClass;
  };

  /**
   * Checks if `value` is a boolean (`true` or `false`) value.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a boolean value, else `false`.
   * @example
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false || toString.call(value) == boolClass;
  }

  /**
   * Checks if `value` is a date.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a date, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   */
  function isDate(value) {
    return value instanceof Date || toString.call(value) == dateClass;
  }

  /**
   * Checks if `value` is a DOM element.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   */
  function isElement(value) {
    return value ? value.nodeType === 1 : false;
  }

  /**
   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
   * length of `0` and objects with no own enumerable properties are considered
   * "empty".
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Array|Object|String} value The value to inspect.
   * @returns {Boolean} Returns `true` if the `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({});
   * // => true
   *
   * _.isEmpty('');
   * // => true
   */
  function isEmpty(value) {
    var result = true;
    if (!value) {
      return result;
    }
    var className = toString.call(value),
        length = value.length;

    if ((className == arrayClass || className == stringClass ||
        className == argsClass || (noArgsClass && isArguments(value))) ||
        (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
      return !length;
    }
    forOwn(value, function() {
      return (result = false);
    });
    return result;
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent to each other.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} a The value to compare.
   * @param {Mixed} b The other value to compare.
   * @param- {Object} [stackA=[]] Internally used track traversed `a` objects.
   * @param- {Object} [stackB=[]] Internally used track traversed `b` objects.
   * @returns {Boolean} Returns `true` if the values are equvalent, else `false`.
   * @example
   *
   * var moe = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };
   * var clone = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };
   *
   * moe == clone;
   * // => false
   *
   * _.isEqual(moe, clone);
   * // => true
   */
  function isEqual(a, b, stackA, stackB) {
    // exit early for identical values
    if (a === b) {
      // treat `+0` vs. `-0` as not equal
      return a !== 0 || (1 / a == 1 / b);
    }
    // a strict comparison is necessary because `null == undefined`
    if (a == null || b == null) {
      return a === b;
    }
    // compare [[Class]] names
    var className = toString.call(a),
        otherName = toString.call(b);

    if (className == argsClass) {
      className = objectClass;
    }
    if (otherName == argsClass) {
      otherName = objectClass;
    }
    if (className != otherName) {
      return false;
    }
    switch (className) {
      case boolClass:
      case dateClass:
        // coerce dates and booleans to numbers, dates to milliseconds and booleans
        // to `1` or `0`, treating invalid dates coerced to `NaN` as not equal
        return +a == +b;

      case numberClass:
        // treat `NaN` vs. `NaN` as equal
        return a != +a
          ? b != +b
          // but treat `+0` vs. `-0` as not equal
          : (a == 0 ? (1 / a == 1 / b) : a == +b);

      case regexpClass:
      case stringClass:
        // coerce regexes to strings (http://es5.github.com/#x15.10.6.4)
        // treat string primitives and their corresponding object instances as equal
        return a == b + '';
    }
    var isArr = className == arrayClass;
    if (!isArr) {
      // unwrap any `lodash` wrapped values
      if (a.__wrapped__ || b.__wrapped__) {
        return isEqual(a.__wrapped__ || a, b.__wrapped__ || b);
      }
      // exit for functions and DOM nodes
      if (className != objectClass || (noNodeClass && (isNode(a) || isNode(b)))) {
        return false;
      }
      // in older versions of Opera, `arguments` objects have `Array` constructors
      var ctorA = !argsAreObjects && isArguments(a) ? Object : a.constructor,
          ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor;

      // non `Object` object instances with different constructors are not equal
      if (ctorA != ctorB && !(
            isFunction(ctorA) && ctorA instanceof ctorA &&
            isFunction(ctorB) && ctorB instanceof ctorB
          )) {
        return false;
      }
    }
    // assume cyclic structures are equal
    // the algorithm for detecting cyclic structures is adapted from ES 5.1
    // section 15.12.3, abstract operation `JO` (http://es5.github.com/#x15.12.3)
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == a) {
        return stackB[length] == b;
      }
    }
    var index = -1,
        result = true,
        size = 0;

    // add `a` and `b` to the stack of traversed objects
    stackA.push(a);
    stackB.push(b);

    // recursively compare objects and arrays (susceptible to call stack limits)
    if (isArr) {
      // compare lengths to determine if a deep comparison is necessary
      size = a.length;
      result = size == b.length;

      if (result) {
        // deep compare the contents, ignoring non-numeric properties
        while (size--) {
          if (!(result = isEqual(a[size], b[size], stackA, stackB))) {
            break;
          }
        }
      }
      return result;
    }
    // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
    // which, in this case, is more costly
    forIn(a, function(value, key, a) {
      if (hasOwnProperty.call(a, key)) {
        // count the number of properties.
        size++;
        // deep compare each property value.
        return (result = hasOwnProperty.call(b, key) && isEqual(value, b[key], stackA, stackB));
      }
    });

    if (result) {
      // ensure both objects have the same number of properties
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          // `size` will be `-1` if `b` has more properties than `a`
          return (result = --size > -1);
        }
      });
    }
    return result;
  }

  /**
   * Checks if `value` is, or can be coerced to, a finite number.
   *
   * Note: This is not the same as native `isFinite`, which will return true for
   * booleans and empty strings. See http://es5.github.com/#x15.1.2.5.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(-101);
   * // => true
   *
   * _.isFinite('10');
   * // => true
   *
   * _.isFinite(true);
   * // => false
   *
   * _.isFinite('');
   * // => false
   *
   * _.isFinite(Infinity);
   * // => false
   */
  function isFinite(value) {
    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
  }

  /**
   * Checks if `value` is a function.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   */
  function isFunction(value) {
    return typeof value == 'function';
  }
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return value instanceof Function || toString.call(value) == funcClass;
    };
  }

  /**
   * Checks if `value` is the language type of Object.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
  function isObject(value) {
    // check if the value is the ECMAScript language type of Object
    // http://es5.github.com/#x8
    // and avoid a V8 bug
    // http://code.google.com/p/v8/issues/detail?id=2291
    return value ? objectTypes[typeof value] : false;
  }

  /**
   * Checks if `value` is `NaN`.
   *
   * Note: This is not the same as native `isNaN`, which will return `true` for
   * `undefined` and other values. See http://es5.github.com/#x15.1.2.4.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN(value) {
    // `NaN` as a primitive is the only value that is not equal to itself
    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
    return isNumber(value) && value != +value
  }

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(undefined);
   * // => false
   */
  function isNull(value) {
    return value === null;
  }

  /**
   * Checks if `value` is a number.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(8.4 * 5);
   * // => true
   */
  function isNumber(value) {
    return typeof value == 'number' || toString.call(value) == numberClass;
  }

  /**
   * Checks if a given `value` is an object created by the `Object` constructor.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Stooge(name, age) {
   *   this.name = name;
   *   this.age = age;
   * }
   *
   * _.isPlainObject(new Stooge('moe', 40));
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'name': 'moe', 'age': 40 });
   * // => true
   */
  var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
    if (!(value && typeof value == 'object')) {
      return false;
    }
    var valueOf = value.valueOf,
        objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

    return objProto
      ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value))
      : shimIsPlainObject(value);
  };

  /**
   * Checks if `value` is a regular expression.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a regular expression, else `false`.
   * @example
   *
   * _.isRegExp(/moe/);
   * // => true
   */
  function isRegExp(value) {
    return value instanceof RegExp || toString.call(value) == regexpClass;
  }

  /**
   * Checks if `value` is a string.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a string, else `false`.
   * @example
   *
   * _.isString('moe');
   * // => true
   */
  function isString(value) {
    return typeof value == 'string' || toString.call(value) == stringClass;
  }

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   */
  function isUndefined(value) {
    return typeof value == 'undefined';
  }

  /**
   * Creates an array composed of the own enumerable property names of `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names.
   * @example
   *
   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
   * // => ['one', 'two', 'three'] (order is not guaranteed)
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    // avoid iterating over the `prototype` property
    return typeof object == 'function' && propertyIsEnumerable.call(object, 'prototype')
      ? shimKeys(object)
      : (isObject(object) ? nativeKeys(object) : []);
  };

  /**
   * Merges enumerable properties of the source object(s) into the `destination`
   * object. Subsequent sources will overwrite propery assignments of previous
   * sources.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [source1, source2, ...] The source objects.
   * @param- {Object} [indicator] Internally used to indicate that the `stack`
   *  argument is an array of traversed objects instead of another source object.
   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
   * @param- {Array} [stackB=[]] Internally used to associate values with their
   *  source counterparts.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe' },
   *   { 'name': 'larry' }
   * ];
   *
   * var ages = [
   *   { 'age': 40 },
   *   { 'age': 50 }
   * ];
   *
   * _.merge(stooges, ages);
   * // => [{ 'name': 'moe', 'age': 40 }, { 'name': 'larry', 'age': 50 }]
   */
  function merge(object, source, indicator) {
    var args = arguments,
        index = 0,
        length = 2,
        stackA = args[3],
        stackB = args[4];

    if (indicator !== indicatorObject) {
      stackA = [];
      stackB = [];

      // work with `_.reduce` by only using its callback `accumulator` and `value` arguments
      if (typeof indicator != 'number') {
        length = args.length;
      }
    }
    while (++index < length) {
      forOwn(args[index], function(source, key) {
        var found, isArr, value;
        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          // avoid merging previously merged cyclic sources
          var stackLength = stackA.length;
          while (stackLength--) {
            found = stackA[stackLength] == source;
            if (found) {
              break;
            }
          }
          if (found) {
            object[key] = stackB[stackLength];
          }
          else {
            // add `source` and associated `value` to the stack of traversed objects
            stackA.push(source);
            stackB.push(value = (value = object[key], isArr)
              ? (isArray(value) ? value : [])
              : (isPlainObject(value) ? value : {})
            );
            // recursively merge objects and arrays (susceptible to call stack limits)
            object[key] = merge(value, source, indicatorObject, stackA, stackB);
          }
        } else if (source != null) {
          object[key] = source;
        }
      });
    }
    return object;
  }

  /**
   * Creates a shallow clone of `object` excluding the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If `callback` is passed, it will be executed for each property
   * in the `object`, omitting the properties `callback` returns truthy for. The
   * `callback` is bound to `thisArg` and invoked with three arguments; (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|String} callback|[prop1, prop2, ...] The properties to omit
   *  or the function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object without the omitted properties.
   * @example
   *
   * _.omit({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'userid');
   * // => { 'name': 'moe', 'age': 40 }
   *
   * _.omit({ 'name': 'moe', '_hint': 'knucklehead', '_seed': '96c4eb' }, function(value, key) {
   *   return key.charAt(0) == '_';
   * });
   * // => { 'name': 'moe' }
   */
  function omit(object, callback, thisArg) {
    var isFunc = typeof callback == 'function',
        result = {};

    if (isFunc) {
      callback = createCallback(callback, thisArg);
    } else {
      var props = concat.apply(arrayRef, arguments);
    }
    forIn(object, function(value, key, object) {
      if (isFunc
            ? !callback(value, key, object)
            : indexOf(props, key, 1) < 0
          ) {
        result[key] = value;
      }
    });
    return result;
  }

  /**
   * Creates a two dimensional array of the given object's key-value pairs,
   * i.e. `[[key1, value1], [key2, value2]]`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns new array of key-value pairs.
   * @example
   *
   * _.pairs({ 'moe': 30, 'larry': 40, 'curly': 50 });
   * // => [['moe', 30], ['larry', 40], ['curly', 50]] (order is not guaranteed)
   */
  function pairs(object) {
    var result = [];
    forOwn(object, function(value, key) {
      result.push([key, value]);
    });
    return result;
  }

  /**
   * Creates a shallow clone of `object` composed of the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If `callback` is passed, it will be executed for each property
   * in the `object`, picking the properties `callback` returns truthy for. The
   * `callback` is bound to `thisArg` and invoked with three arguments; (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|String} callback|[prop1, prop2, ...] The properties to pick
   *  or the function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object composed of the picked properties.
   * @example
   *
   * _.pick({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'name', 'age');
   * // => { 'name': 'moe', 'age': 40 }
   *
   * _.pick({ 'name': 'moe', '_hint': 'knucklehead', '_seed': '96c4eb' }, function(value, key) {
   *   return key.charAt(0) != '_';
   * });
   * // => { 'name': 'moe' }
   */
  function pick(object, callback, thisArg) {
    var result = {};
    if (typeof callback != 'function') {
      var index = 0,
          props = concat.apply(arrayRef, arguments),
          length = props.length;

      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
    } else {
      callback = createCallback(callback, thisArg);
      forIn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result[key] = value;
        }
      });
    }
    return result;
  }

  /**
   * Creates an array composed of the own enumerable property values of `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property values.
   * @example
   *
   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
   * // => [1, 2, 3]
   */
  function values(object) {
    var result = [];
    forOwn(object, function(value) {
      result.push(value);
    });
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Checks if a given `target` element is present in a `collection` using strict
   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
   * as the offset from the end of the collection.
   *
   * @static
   * @memberOf _
   * @alias include
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Mixed} target The value to check for.
   * @param {Number} [fromIndex=0] The index to search from.
   * @returns {Boolean} Returns `true` if the `target` element is found, else `false`.
   * @example
   *
   * _.contains([1, 2, 3], 1);
   * // => true
   *
   * _.contains([1, 2, 3], 1, 2);
   * // => false
   *
   * _.contains({ 'name': 'moe', 'age': 40 }, 'moe');
   * // => true
   *
   * _.contains('curly', 'ur');
   * // => true
   */
  function contains(collection, target, fromIndex) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = false;

    fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
    if (typeof length == 'number') {
      result = (isString(collection)
        ? collection.indexOf(target, fromIndex)
        : indexOf(collection, target, fromIndex)
      ) > -1;
    } else {
      each(collection, function(value) {
        if (++index >= fromIndex) {
          return !(result = value === target);
        }
      });
    }
    return result;
  }

  /**
   * Creates an object composed of keys returned from running each element of
   * `collection` through a `callback`. The corresponding value of each key is
   * the number of times the key was returned by `callback`. The `callback` is
   * bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to count by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to count by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy(['one', 'two', 'three'], 'length');
   * // => { '3': 2, '5': 1 }
   */
  function countBy(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, key, collection) {
      key = callback(value, key, collection);
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });
    return result;
  }

  /**
   * Checks if the `callback` returns a truthy value for **all** elements of a
   * `collection`. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias all
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Boolean} Returns `true` if all elements pass the callback check,
   *  else `false`.
   * @example
   *
   * _.every([true, 1, null, 'yes'], Boolean);
   * // => false
   */
  function every(collection, callback, thisArg) {
    var result = true;
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if (!(result = !!callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        return (result = !!callback(value, index, collection));
      });
    }
    return result;
  }

  /**
   * Examines each element in a `collection`, returning an array of all elements
   * the `callback` returns truthy for. The `callback` is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias select
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that passed the callback check.
   * @example
   *
   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [2, 4, 6]
   */
  function filter(collection, callback, thisArg) {
    var result = [];
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        var value = collection[index];
        if (callback(value, index, collection)) {
          result.push(value);
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result.push(value);
        }
      });
    }
    return result;
  }

  /**
   * Examines each element in a `collection`, returning the first one the `callback`
   * returns truthy for. The function returns as soon as it finds an acceptable
   * element, and does not iterate over the entire `collection`. The `callback` is
   * bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias detect
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the element that passed the callback check,
   *  else `undefined`.
   * @example
   *
   * var even = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => 2
   */
  function find(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, index, collection) {
      if (callback(value, index, collection)) {
        result = value;
        return false;
      }
    });
    return result;
  }

  /**
   * Iterates over a `collection`, executing the `callback` for each element in
   * the `collection`. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection). Callbacks may exit iteration early
   * by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|String} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEach(alert).join(',');
   * // => alerts each number and returns '1,2,3'
   *
   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, alert);
   * // => alerts each number value (order is not guaranteed)
   */
  function forEach(collection, callback, thisArg) {
    if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if (callback(collection[index], index, collection) === false) {
          break;
        }
      }
    } else {
      each(collection, callback, thisArg);
    }
    return collection;
  }

  /**
   * Creates an object composed of keys returned from running each element of
   * `collection` through a `callback`. The corresponding value of each key is an
   * array of elements passed to `callback` that returned the key. The `callback`
   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to group by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to group by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * _.groupBy(['one', 'two', 'three'], 'length');
   * // => { '3': ['one', 'two'], '5': ['three'] }
   */
  function groupBy(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, key, collection) {
      key = callback(value, key, collection);
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });
    return result;
  }

  /**
   * Invokes the method named by `methodName` on each element in the `collection`,
   * returning an array of the results of each invoked method. Additional arguments
   * will be passed to each invoked method. If `methodName` is a function it will
   * be invoked for, and `this` bound to, each element in the `collection`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} methodName The name of the method to invoke or
   *  the function invoked per iteration.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the method with.
   * @returns {Array} Returns a new array of the results of each invoked method.
   * @example
   *
   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
   * // => [[1, 5, 7], [1, 2, 3]]
   *
   * _.invoke([123, 456], String.prototype.split, '');
   * // => [['1', '2', '3'], ['4', '5', '6']]
   */
  function invoke(collection, methodName) {
    var args = slice(arguments, 2),
        isFunc = typeof methodName == 'function',
        result = [];

    forEach(collection, function(value) {
      result.push((isFunc ? methodName : value[methodName]).apply(value, args));
    });
    return result;
  }

  /**
   * Creates an array of values by running each element in the `collection`
   * through a `callback`. The `callback` is bound to `thisArg` and invoked with
   * three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias collect
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * _.map([1, 2, 3], function(num) { return num * 3; });
   * // => [3, 6, 9]
   *
   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
   * // => [3, 6, 9] (order is not guaranteed)
   */
  function map(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    callback = createCallback(callback, thisArg);
    if (isArray(collection)) {
      while (++index < length) {
        result[index] = callback(collection[index], index, collection);
      }
    } else {
      each(collection, function(value, key, collection) {
        result[++index] = callback(value, key, collection);
      });
    }
    return result;
  }

  /**
   * Retrieves the maximum value of an `array`. If `callback` is passed,
   * it will be executed for each value in the `array` to generate the
   * criterion by which the value is ranked. The `callback` is bound to
   * `thisArg` and invoked with three arguments; (value, index, collection).
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the maximum value.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.max(stooges, function(stooge) { return stooge.age; });
   * // => { 'name': 'curly', 'age': 60 };
   */
  function max(collection, callback, thisArg) {
    var computed = -Infinity,
        index = -1,
        length = collection ? collection.length : 0,
        result = computed;

    if (callback || !isArray(collection)) {
      callback = !callback && isString(collection)
        ? charAtCallback
        : createCallback(callback, thisArg);

      each(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current > computed) {
          computed = current;
          result = value;
        }
      });
    } else {
      while (++index < length) {
        if (collection[index] > result) {
          result = collection[index];
        }
      }
    }
    return result;
  }

  /**
   * Retrieves the minimum value of an `array`. If `callback` is passed,
   * it will be executed for each value in the `array` to generate the
   * criterion by which the value is ranked. The `callback` is bound to `thisArg`
   * and invoked with three arguments; (value, index, collection).
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the minimum value.
   * @example
   *
   * _.min([10, 5, 100, 2, 1000]);
   * // => 2
   */
  function min(collection, callback, thisArg) {
    var computed = Infinity,
        index = -1,
        length = collection ? collection.length : 0,
        result = computed;

    if (callback || !isArray(collection)) {
      callback = !callback && isString(collection)
        ? charAtCallback
        : createCallback(callback, thisArg);

      each(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current < computed) {
          computed = current;
          result = value;
        }
      });
    } else {
      while (++index < length) {
        if (collection[index] < result) {
          result = collection[index];
        }
      }
    }
    return result;
  }

  /**
   * Retrieves the value of a specified property from all elements in
   * the `collection`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {String} property The property to pluck.
   * @returns {Array} Returns a new array of property values.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.pluck(stooges, 'name');
   * // => ['moe', 'larry', 'curly']
   */
  function pluck(collection, property) {
    return map(collection, property + '');
  }

  /**
   * Boils down a `collection` to a single value. The initial state of the
   * reduction is `accumulator` and each successive step of it should be returned
   * by the `callback`. The `callback` is bound to `thisArg` and invoked with 4
   * arguments; for arrays they are (accumulator, value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias foldl, inject
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [accumulator] Initial value of the accumulator.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the accumulated value.
   * @example
   *
   * var sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num; });
   * // => 6
   */
  function reduce(collection, callback, accumulator, thisArg) {
    var noaccum = arguments.length < 3;
    callback = createCallback(callback, thisArg, indicatorObject);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      if (noaccum) {
        accumulator = collection[++index];
      }
      while (++index < length) {
        accumulator = callback(accumulator, collection[index], index, collection);
      }
    } else {
      each(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection)
      });
    }
    return accumulator;
  }

  /**
   * The right-associative version of `_.reduce`.
   *
   * @static
   * @memberOf _
   * @alias foldr
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [accumulator] Initial value of the accumulator.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the accumulated value.
   * @example
   *
   * var list = [[0, 1], [2, 3], [4, 5]];
   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, callback, accumulator, thisArg) {
    var iteratee = collection,
        length = collection ? collection.length : 0,
        noaccum = arguments.length < 3;

    if (typeof length != 'number') {
      var props = keys(collection);
      length = props.length;
    } else if (noCharByIndex && isString(collection)) {
      iteratee = collection.split('');
    }
    callback = createCallback(callback, thisArg, indicatorObject);
    forEach(collection, function(value, index, collection) {
      index = props ? props[--length] : --length;
      accumulator = noaccum
        ? (noaccum = false, iteratee[index])
        : callback(accumulator, iteratee[index], index, collection);
    });
    return accumulator;
  }

  /**
   * The opposite of `_.filter`, this method returns the values of a
   * `collection` that `callback` does **not** return truthy for.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that did **not** pass the
   *  callback check.
   * @example
   *
   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [1, 3, 5]
   */
  function reject(collection, callback, thisArg) {
    callback = createCallback(callback, thisArg);
    return filter(collection, function(value, index, collection) {
      return !callback(value, index, collection);
    });
  }

  /**
   * Creates an array of shuffled `array` values, using a version of the
   * Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to shuffle.
   * @returns {Array} Returns a new shuffled collection.
   * @example
   *
   * _.shuffle([1, 2, 3, 4, 5, 6]);
   * // => [4, 1, 6, 3, 5, 2]
   */
  function shuffle(collection) {
    var index = -1,
        result = Array(collection ? collection.length : 0);

    forEach(collection, function(value) {
      var rand = floor(nativeRandom() * (++index + 1));
      result[index] = result[rand];
      result[rand] = value;
    });
    return result;
  }

  /**
   * Gets the size of the `collection` by returning `collection.length` for arrays
   * and array-like objects or the number of own enumerable properties for objects.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to inspect.
   * @returns {Number} Returns `collection.length` or number of own enumerable properties.
   * @example
   *
   * _.size([1, 2]);
   * // => 2
   *
   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
   * // => 3
   *
   * _.size('curly');
   * // => 5
   */
  function size(collection) {
    var length = collection ? collection.length : 0;
    return typeof length == 'number' ? length : keys(collection).length;
  }

  /**
   * Checks if the `callback` returns a truthy value for **any** element of a
   * `collection`. The function returns as soon as it finds passing value, and
   * does not iterate over the entire `collection`. The `callback` is bound to
   * `thisArg` and invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias any
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Boolean} Returns `true` if any element passes the callback check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   */
  function some(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if ((result = callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        return !(result = callback(value, index, collection));
      });
    }
    return !!result;
  }

  /**
   * Creates an array, stable sorted in ascending order by the results of
   * running each element of `collection` through a `callback`. The `callback`
   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to sort by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to sort by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of sorted elements.
   * @example
   *
   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
   * // => [3, 1, 2]
   *
   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
   * // => [3, 1, 2]
   *
   * _.sortBy(['larry', 'brendan', 'moe'], 'length');
   * // => ['moe', 'larry', 'brendan']
   */
  function sortBy(collection, callback, thisArg) {
    var result = [];
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, index, collection) {
      result.push({
        'criteria': callback(value, index, collection),
        'index': index,
        'value': value
      });
    });

    var length = result.length;
    result.sort(compareAscending);
    while (length--) {
      result[length] = result[length].value;
    }
    return result;
  }

  /**
   * Converts the `collection` to an array.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to convert.
   * @returns {Array} Returns the new converted array.
   * @example
   *
   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
   * // => [2, 3, 4]
   */
  function toArray(collection) {
    var length = collection ? collection.length : 0;
    if (typeof length == 'number') {
      return noCharByIndex && isString(collection)
        ? collection.split('')
        : slice(collection);
    }
    return values(collection);
  }

  /**
   * Examines each element in a `collection`, returning an array of all elements
   * that contain the given `properties`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Object} properties The object of property values to filter by.
   * @returns {Array} Returns a new array of elements that contain the given `properties`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.where(stooges, { 'age': 40 });
   * // => [{ 'name': 'moe', 'age': 40 }]
   */
  function where(collection, properties) {
    var props = keys(properties);
    return filter(collection, function(object) {
      var length = props.length;
      while (length--) {
        var result = object[props[length]] === properties[props[length]];
        if (!result) {
          break;
        }
      }
      return !!result;
    });
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates an array with all falsey values of `array` removed. The values
   * `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to compact.
   * @returns {Array} Returns a new filtered array.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array of `array` elements not present in the other arrays
   * using strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {Array} [array1, array2, ...] Arrays to check.
   * @returns {Array} Returns a new array of `array` elements not present in the
   *  other arrays.
   * @example
   *
   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
   * // => [1, 3, 4]
   */
  function difference(array) {
    var index = -1,
        length = array ? array.length : 0,
        flattened = concat.apply(arrayRef, arguments),
        contains = cachedContains(flattened, length),
        result = [];

    while (++index < length) {
      var value = array[index];
      if (!contains(value)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the first element of the `array`. Pass `n` to return the first `n`
   * elements of the `array`.
   *
   * @static
   * @memberOf _
   * @alias head, take
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n] The number of elements to return.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Mixed} Returns the first element, or an array of the first `n`
   *  elements, of `array`.
   * @example
   *
   * _.first([5, 4, 3, 2, 1]);
   * // => 5
   */
  function first(array, n, guard) {
    if (array) {
      var length = array.length;
      return (n == null || guard)
        ? array[0]
        : slice(array, 0, nativeMin(nativeMax(0, n), length));
    }
  }

  /**
   * Flattens a nested array (the nesting can be to any depth). If `shallow` is
   * truthy, `array` will only be flattened a single level.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to compact.
   * @param {Boolean} shallow A flag to indicate only flattening a single level.
   * @returns {Array} Returns a new flattened array.
   * @example
   *
   * _.flatten([1, [2], [3, [[4]]]]);
   * // => [1, 2, 3, 4];
   *
   * _.flatten([1, [2], [3, [[4]]]], true);
   * // => [1, 2, 3, [[4]]];
   */
  function flatten(array, shallow) {
    var index = -1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      // recursively flatten arrays (susceptible to call stack limits)
      if (isArray(value)) {
        push.apply(result, shallow ? value : flatten(value));
      } else {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the first occurrence of `value` is found using
   * strict equality for comparisons, i.e. `===`. If the `array` is already
   * sorted, passing `true` for `fromIndex` will run a faster binary search.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Boolean|Number} [fromIndex=0] The index to search from or `true` to
   *  perform a binary search on a sorted `array`.
   * @returns {Number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 1
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 4
   *
   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
   * // => 2
   */
  function indexOf(array, value, fromIndex) {
    var index = -1,
        length = array ? array.length : 0;

    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
    } else if (fromIndex) {
      index = sortedIndex(array, value);
      return array[index] === value ? index : -1;
    }
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Gets all but the last element of `array`. Pass `n` to exclude the last `n`
   * elements from the result.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n=1] The number of elements to exclude.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Array} Returns all but the last element, or `n` elements, of `array`.
   * @example
   *
   * _.initial([3, 2, 1]);
   * // => [3, 2]
   */
  function initial(array, n, guard) {
    if (!array) {
      return [];
    }
    var length = array.length;
    n = n == null || guard ? 1 : n || 0;
    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
  }

  /**
   * Computes the intersection of all the passed-in arrays using strict equality
   * for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of unique elements that are present
   *  in **all** of the arrays.
   * @example
   *
   * _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
   * // => [1, 2]
   */
  function intersection(array) {
    var args = arguments,
        argsLength = args.length,
        cache = { '0': {} },
        index = -1,
        length = array ? array.length : 0,
        isLarge = length >= 100,
        result = [],
        seen = result;

    outer:
    while (++index < length) {
      var value = array[index];
      if (isLarge) {
        var key = value + '';
        var inited = hasOwnProperty.call(cache[0], key)
          ? !(seen = cache[0][key])
          : (seen = cache[0][key] = []);
      }
      if (inited || indexOf(seen, value) < 0) {
        if (isLarge) {
          seen.push(value);
        }
        var argsIndex = argsLength;
        while (--argsIndex) {
          if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
            continue outer;
          }
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the last element of the `array`. Pass `n` to return the last `n`
   * elements of the `array`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n] The number of elements to return.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Mixed} Returns the last element, or an array of the last `n`
   *  elements, of `array`.
   * @example
   *
   * _.last([3, 2, 1]);
   * // => 1
   */
  function last(array, n, guard) {
    if (array) {
      var length = array.length;
      return (n == null || guard) ? array[length - 1] : slice(array, nativeMax(0, length - n));
    }
  }

  /**
   * Gets the index at which the last occurrence of `value` is found using strict
   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
   * as the offset from the end of the collection.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Number} [fromIndex=array.length-1] The index to search from.
   * @returns {Number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 4
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    var index = array ? array.length : 0;
    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
    }
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Creates an object composed from arrays of `keys` and `values`. Pass either
   * a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`, or
   * two arrays, one of `keys` and one of corresponding `values`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} keys The array of keys.
   * @param {Array} [values=[]] The array of values.
   * @returns {Object} Returns an object composed of the given keys and
   *  corresponding values.
   * @example
   *
   * _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
   * // => { 'moe': 30, 'larry': 40, 'curly': 50 }
   */
  function object(keys, values) {
    var index = -1,
        length = keys ? keys.length : 0,
        result = {};

    while (++index < length) {
      var key = keys[index];
      if (values) {
        result[key] = values[index];
      } else {
        result[key[0]] = key[1];
      }
    }
    return result;
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to but not including `stop`. This method is a port of Python's
   * `range()` function. See http://docs.python.org/library/functions.html#range.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Number} [start=0] The start of the range.
   * @param {Number} end The end of the range.
   * @param {Number} [step=1] The value to increment or descrement by.
   * @returns {Array} Returns a new range array.
   * @example
   *
   * _.range(10);
   * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   *
   * _.range(1, 11);
   * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   *
   * _.range(0, 30, 5);
   * // => [0, 5, 10, 15, 20, 25]
   *
   * _.range(0, -10, -1);
   * // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
   *
   * _.range(0);
   * // => []
   */
  function range(start, end, step) {
    start = +start || 0;
    step = +step || 1;

    if (end == null) {
      end = start;
      start = 0;
    }
    // use `Array(length)` so V8 will avoid the slower "dictionary" mode
    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
    var index = -1,
        length = nativeMax(0, ceil((end - start) / step)),
        result = Array(length);

    while (++index < length) {
      result[index] = start;
      start += step;
    }
    return result;
  }

  /**
   * The opposite of `_.initial`, this method gets all but the first value of
   * `array`. Pass `n` to exclude the first `n` values from the result.
   *
   * @static
   * @memberOf _
   * @alias drop, tail
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n=1] The number of elements to exclude.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Array} Returns all but the first element, or `n` elements, of `array`.
   * @example
   *
   * _.rest([3, 2, 1]);
   * // => [2, 1]
   */
  function rest(array, n, guard) {
    return slice(array, (n == null || guard) ? 1 : nativeMax(0, n));
  }

  /**
   * Uses a binary search to determine the smallest index at which the `value`
   * should be inserted into `array` in order to maintain the sort order of the
   * sorted `array`. If `callback` is passed, it will be executed for `value` and
   * each element in `array` to compute their sort ranking. The `callback` is
   * bound to `thisArg` and invoked with one argument; (value). The `callback`
   * argument may also be the name of a property to order by.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to iterate over.
   * @param {Mixed} value The value to evaluate.
   * @param {Function|String} [callback=identity|property] The function called
   *  per iteration or property name to order by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Number} Returns the index at which the value should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([20, 30, 50], 40);
   * // => 2
   *
   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
   * // => 2
   *
   * var dict = {
   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
   * };
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return dict.wordToNumber[word];
   * });
   * // => 2
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return this.wordToNumber[word];
   * }, dict);
   * // => 2
   */
  function sortedIndex(array, value, callback, thisArg) {
    var low = 0,
        high = array ? array.length : low;

    // explicitly reference `identity` for better inlining in Firefox
    callback = callback ? createCallback(callback, thisArg) : identity;
    value = callback(value);

    while (low < high) {
      var mid = (low + high) >>> 1;
      callback(array[mid]) < value
        ? low = mid + 1
        : high = mid;
    }
    return low;
  }

  /**
   * Computes the union of the passed-in arrays using strict equality for
   * comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of unique values, in order, that are
   *  present in one or more of the arrays.
   * @example
   *
   * _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
   * // => [1, 2, 3, 101, 10]
   */
  function union() {
    return uniq(concat.apply(arrayRef, arguments));
  }

  /**
   * Creates a duplicate-value-free version of the `array` using strict equality
   * for comparisons, i.e. `===`. If the `array` is already sorted, passing `true`
   * for `isSorted` will run a faster algorithm. If `callback` is passed, each
   * element of `array` is passed through a callback` before uniqueness is computed.
   * The `callback` is bound to `thisArg` and invoked with three arguments; (value, index, array).
   *
   * @static
   * @memberOf _
   * @alias unique
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {Boolean} [isSorted=false] A flag to indicate that the `array` is already sorted.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a duplicate-value-free array.
   * @example
   *
   * _.uniq([1, 2, 1, 3, 1]);
   * // => [1, 2, 3]
   *
   * _.uniq([1, 1, 2, 2, 3], true);
   * // => [1, 2, 3]
   *
   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return Math.floor(num); });
   * // => [1, 2, 3]
   *
   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return this.floor(num); }, Math);
   * // => [1, 2, 3]
   */
  function uniq(array, isSorted, callback, thisArg) {
    var index = -1,
        length = array ? array.length : 0,
        result = [],
        seen = result;

    // juggle arguments
    if (typeof isSorted == 'function') {
      thisArg = callback;
      callback = isSorted;
      isSorted = false;
    }
    // init value cache for large arrays
    var isLarge = !isSorted && length >= 75;
    if (isLarge) {
      var cache = {};
    }
    if (callback) {
      seen = [];
      callback = createCallback(callback, thisArg);
    }
    while (++index < length) {
      var value = array[index],
          computed = callback ? callback(value, index, array) : value;

      if (isLarge) {
        var key = computed + '';
        var inited = hasOwnProperty.call(cache, key)
          ? !(seen = cache[key])
          : (seen = cache[key] = []);
      }
      if (isSorted
            ? !index || seen[seen.length - 1] !== computed
            : inited || indexOf(seen, computed) < 0
          ) {
        if (callback || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array with all occurrences of the passed values removed using
   * strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to filter.
   * @param {Mixed} [value1, value2, ...] Values to remove.
   * @returns {Array} Returns a new filtered array.
   * @example
   *
   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
   * // => [2, 3, 4]
   */
  function without(array) {
    var index = -1,
        length = array ? array.length : 0,
        contains = cachedContains(arguments, 1, 20),
        result = [];

    while (++index < length) {
      var value = array[index];
      if (!contains(value)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Groups the elements of each array at their corresponding indexes. Useful for
   * separate data sources that are coordinated through matching array indexes.
   * For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix
   * in a similar fashion.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of grouped elements.
   * @example
   *
   * _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
   * // => [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]
   */
  function zip(array) {
    var index = -1,
        length = array ? max(pluck(arguments, 'length')) : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = pluck(arguments, index);
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a function that is restricted to executing `func` only after it is
   * called `n` times. The `func` is executed with the `this` binding of the
   * created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Number} n The number of times the function must be called before
   * it is executed.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var renderNotes = _.after(notes.length, render);
   * _.forEach(notes, function(note) {
   *   note.asyncSave({ 'success': renderNotes });
   * });
   * // `renderNotes` is run once, after all notes have saved
   */
  function after(n, func) {
    if (n < 1) {
      return func();
    }
    return function() {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any additional `bind` arguments to those
   * passed to the bound function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to bind.
   * @param {Mixed} [thisArg] The `this` binding of `func`.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var func = function(greeting) {
   *   return greeting + ' ' + this.name;
   * };
   *
   * func = _.bind(func, { 'name': 'moe' }, 'hi');
   * func();
   * // => 'hi moe'
   */
  function bind(func, thisArg) {
    // use `Function#bind` if it exists and is fast
    // (in V8 `Function#bind` is slower except when partially applied)
    return isBindFast || (nativeBind && arguments.length > 2)
      ? nativeBind.call.apply(nativeBind, arguments)
      : createBound(func, thisArg, slice(arguments, 2));
  }

  /**
   * Binds methods on `object` to `object`, overwriting the existing method.
   * If no method names are provided, all the function properties of `object`
   * will be bound.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {String} [methodName1, methodName2, ...] Method names on the object to bind.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var buttonView = {
   *  'label': 'lodash',
   *  'onClick': function() { alert('clicked: ' + this.label); }
   * };
   *
   * _.bindAll(buttonView);
   * jQuery('#lodash_button').on('click', buttonView.onClick);
   * // => When the button is clicked, `this.label` will have the correct value
   */
  function bindAll(object) {
    var funcs = arguments,
        index = funcs.length > 1 ? 0 : (funcs = functions(object), -1),
        length = funcs.length;

    while (++index < length) {
      var key = funcs[index];
      object[key] = bind(object[key], object);
    }
    return object;
  }

  /**
   * Creates a function that, when called, invokes the method at `object[key]`
   * and prepends any additional `bindKey` arguments to those passed to the bound
   * function. This method differs from `_.bind` by allowing bound functions to
   * reference methods that will be redefined or don't yet exist.
   * See http://michaux.ca/articles/lazy-function-definition-pattern.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Object} object The object the method belongs to.
   * @param {String} key The key of the method.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var object = {
   *   'name': 'moe',
   *   'greet': function(greeting) {
   *     return greeting + ' ' + this.name;
   *   }
   * };
   *
   * var func = _.bindKey(object, 'greet', 'hi');
   * func();
   * // => 'hi moe'
   *
   * object.greet = function(greeting) {
   *   return greeting + ', ' + this.name + '!';
   * };
   *
   * func();
   * // => 'hi, moe!'
   */
  function bindKey(object, key) {
    return createBound(object, key, slice(arguments, 2));
  }

  /**
   * Creates a function that is the composition of the passed functions,
   * where each function consumes the return value of the function that follows.
   * In math terms, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
   * Each function is executed with the `this` binding of the composed function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} [func1, func2, ...] Functions to compose.
   * @returns {Function} Returns the new composed function.
   * @example
   *
   * var greet = function(name) { return 'hi: ' + name; };
   * var exclaim = function(statement) { return statement + '!'; };
   * var welcome = _.compose(exclaim, greet);
   * welcome('moe');
   * // => 'hi: moe!'
   */
  function compose() {
    var funcs = arguments;
    return function() {
      var args = arguments,
          length = funcs.length;

      while (length--) {
        args = [funcs[length].apply(this, args)];
      }
      return args[0];
    };
  }

  /**
   * Creates a function that will delay the execution of `func` until after
   * `wait` milliseconds have elapsed since the last time it was invoked. Pass
   * `true` for `immediate` to cause debounce to invoke `func` on the leading,
   * instead of the trailing, edge of the `wait` timeout. Subsequent calls to
   * the debounced function will return the result of the last `func` call.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to debounce.
   * @param {Number} wait The number of milliseconds to delay.
   * @param {Boolean} immediate A flag to indicate execution is on the leading
   *  edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * var lazyLayout = _.debounce(calculateLayout, 300);
   * jQuery(window).on('resize', lazyLayout);
   */
  function debounce(func, wait, immediate) {
    var args,
        result,
        thisArg,
        timeoutId;

    function delayed() {
      timeoutId = null;
      if (!immediate) {
        result = func.apply(thisArg, args);
      }
    }
    return function() {
      var isImmediate = immediate && !timeoutId;
      args = arguments;
      thisArg = this;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(delayed, wait);

      if (isImmediate) {
        result = func.apply(thisArg, args);
      }
      return result;
    };
  }

  /**
   * Executes the `func` function after `wait` milliseconds. Additional arguments
   * will be passed to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to delay.
   * @param {Number} wait The number of milliseconds to delay execution.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
   * @returns {Number} Returns the `setTimeout` timeout id.
   * @example
   *
   * var log = _.bind(console.log, console);
   * _.delay(log, 1000, 'logged later');
   * // => 'logged later' (Appears after one second.)
   */
  function delay(func, wait) {
    var args = slice(arguments, 2);
    return setTimeout(function() { func.apply(undefined, args); }, wait);
  }

  /**
   * Defers executing the `func` function until the current call stack has cleared.
   * Additional arguments will be passed to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to defer.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
   * @returns {Number} Returns the `setTimeout` timeout id.
   * @example
   *
   * _.defer(function() { alert('deferred'); });
   * // returns from the function before `alert` is called
   */
  function defer(func) {
    var args = slice(arguments, 1);
    return setTimeout(function() { func.apply(undefined, args); }, 1);
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * passed, it will be used to determine the cache key for storing the result
   * based on the arguments passed to the memoized function. By default, the first
   * argument passed to the memoized function is used as the cache key. The `func`
   * is executed with the `this` binding of the memoized function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] A function used to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var fibonacci = _.memoize(function(n) {
   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   * });
   */
  function memoize(func, resolver) {
    var cache = {};
    return function() {
      var key = resolver ? resolver.apply(this, arguments) : arguments[0];
      return hasOwnProperty.call(cache, key)
        ? cache[key]
        : (cache[key] = func.apply(this, arguments));
    };
  }

  /**
   * Creates a function that is restricted to execute `func` once. Repeat calls to
   * the function will return the value of the first call. The `func` is executed
   * with the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // Application is only created once.
   */
  function once(func) {
    var result,
        ran = false;

    return function() {
      if (ran) {
        return result;
      }
      ran = true;
      result = func.apply(this, arguments);

      // clear the `func` variable so the function may be garbage collected
      func = null;
      return result;
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with any additional
   * `partial` arguments prepended to those passed to the new function. This
   * method is similar to `bind`, except it does **not** alter the `this` binding.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to partially apply arguments to.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * var greet = function(greeting, name) { return greeting + ': ' + name; };
   * var hi = _.partial(greet, 'hi');
   * hi('moe');
   * // => 'hi: moe'
   */
  function partial(func) {
    return createBound(func, slice(arguments, 1));
  }

  /**
   * Creates a function that, when executed, will only call the `func`
   * function at most once per every `wait` milliseconds. If the throttled
   * function is invoked more than once during the `wait` timeout, `func` will
   * also be called on the trailing edge of the timeout. Subsequent calls to the
   * throttled function will return the result of the last `func` call.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to throttle.
   * @param {Number} wait The number of milliseconds to throttle executions to.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * var throttled = _.throttle(updatePosition, 100);
   * jQuery(window).on('scroll', throttled);
   */
  function throttle(func, wait) {
    var args,
        result,
        thisArg,
        timeoutId,
        lastCalled = 0;

    function trailingCall() {
      lastCalled = new Date;
      timeoutId = null;
      result = func.apply(thisArg, args);
    }
    return function() {
      var now = new Date,
          remaining = wait - (now - lastCalled);

      args = arguments;
      thisArg = this;

      if (remaining <= 0) {
        clearTimeout(timeoutId);
        timeoutId = null;
        lastCalled = now;
        result = func.apply(thisArg, args);
      }
      else if (!timeoutId) {
        timeoutId = setTimeout(trailingCall, remaining);
      }
      return result;
    };
  }

  /**
   * Creates a function that passes `value` to the `wrapper` function as its
   * first argument. Additional arguments passed to the function are appended
   * to those passed to the `wrapper` function. The `wrapper` is executed with
   * the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Mixed} value The value to wrap.
   * @param {Function} wrapper The wrapper function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var hello = function(name) { return 'hello ' + name; };
   * hello = _.wrap(hello, function(func) {
   *   return 'before, ' + func('moe') + ', after';
   * });
   * hello();
   * // => 'before, hello moe, after'
   */
  function wrap(value, wrapper) {
    return function() {
      var args = [value];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
   * corresponding HTML entities.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} string The string to escape.
   * @returns {String} Returns the escaped string.
   * @example
   *
   * _.escape('Moe, Larry & Curly');
   * // => 'Moe, Larry &amp; Curly'
   */
  function escape(string) {
    return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
  }

  /**
   * This function returns the first argument passed to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Mixed} value Any value.
   * @returns {Mixed} Returns `value`.
   * @example
   *
   * var moe = { 'name': 'moe' };
   * moe === _.identity(moe);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * Adds functions properties of `object` to the `lodash` function and chainable
   * wrapper.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} object The object of function properties to add to `lodash`.
   * @example
   *
   * _.mixin({
   *   'capitalize': function(string) {
   *     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   *   }
   * });
   *
   * _.capitalize('larry');
   * // => 'Larry'
   *
   * _('curly').capitalize();
   * // => 'Curly'
   */
  function mixin(object) {
    forEach(functions(object), function(methodName) {
      var func = lodash[methodName] = object[methodName];

      lodash.prototype[methodName] = function() {
        var args = [this.__wrapped__];
        push.apply(args, arguments);

        var result = func.apply(lodash, args);
        return new lodash(result);
      };
    });
  }

  /**
   * Reverts the '_' variable to its previous value and returns a reference to
   * the `lodash` function.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @returns {Function} Returns the `lodash` function.
   * @example
   *
   * var lodash = _.noConflict();
   */
  function noConflict() {
    window._ = oldDash;
    return this;
  }

  /**
   * Produces a random number between `min` and `max` (inclusive). If only one
   * argument is passed, a number between `0` and the given number will be returned.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Number} [min=0] The minimum possible value.
   * @param {Number} [max=1] The maximum possible value.
   * @returns {Number} Returns a random number.
   * @example
   *
   * _.random(0, 5);
   * // => a number between 1 and 5
   *
   * _.random(5);
   * // => also a number between 1 and 5
   */
  function random(min, max) {
    if (min == null && max == null) {
      max = 1;
    }
    min = +min || 0;
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + floor(nativeRandom() * ((+max || 0) - min + 1));
  }

  /**
   * Resolves the value of `property` on `object`. If `property` is a function
   * it will be invoked and its result returned, else the property value is
   * returned. If `object` is falsey, then `null` is returned.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} object The object to inspect.
   * @param {String} property The property to get the value of.
   * @returns {Mixed} Returns the resolved value.
   * @example
   *
   * var object = {
   *   'cheese': 'crumpets',
   *   'stuff': function() {
   *     return 'nonsense';
   *   }
   * };
   *
   * _.result(object, 'cheese');
   * // => 'crumpets'
   *
   * _.result(object, 'stuff');
   * // => 'nonsense'
   */
  function result(object, property) {
    // based on Backbone's private `getValue` function
    // https://github.com/documentcloud/backbone/blob/0.9.2/backbone.js#L1419-1424
    var value = object ? object[property] : null;
    return isFunction(value) ? object[property]() : value;
  }

  /**
   * A micro-templating method that handles arbitrary delimiters, preserves
   * whitespace, and correctly escapes quotes within interpolated code.
   *
   * Note: In the development build `_.template` utilizes sourceURLs for easier
   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
   *
   * Note: Lo-Dash may be used in Chrome extensions by either creating a `lodash csp`
   * build and avoiding `_.template` use, or loading Lo-Dash in a sandboxed page.
   * See http://developer.chrome.com/trunk/extensions/sandboxingEval.html
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} text The template text.
   * @param {Obect} data The data object used to populate the text.
   * @param {Object} options The options object.
   *  escape - The "escape" delimiter regexp.
   *  evaluate - The "evaluate" delimiter regexp.
   *  interpolate - The "interpolate" delimiter regexp.
   *  sourceURL - The sourceURL of the template's compiled source.
   *  variable - The data object variable name.
   *
   * @returns {Function|String} Returns a compiled function when no `data` object
   *  is given, else it returns the interpolated text.
   * @example
   *
   * // using a compiled template
   * var compiled = _.template('hello <%= name %>');
   * compiled({ 'name': 'moe' });
   * // => 'hello moe'
   *
   * var list = '<% _.forEach(people, function(name) { %><li><%= name %></li><% }); %>';
   * _.template(list, { 'people': ['moe', 'larry', 'curly'] });
   * // => '<li>moe</li><li>larry</li><li>curly</li>'
   *
   * // using the "escape" delimiter to escape HTML in data property values
   * _.template('<b><%- value %></b>', { 'value': '<script>' });
   * // => '<b>&lt;script&gt;</b>'
   *
   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
   * _.template('hello ${ name }', { 'name': 'curly' });
   * // => 'hello curly'
   *
   * // using the internal `print` function in "evaluate" delimiters
   * _.template('<% print("hello " + epithet); %>!', { 'epithet': 'stooge' });
   * // => 'hello stooge!'
   *
   * // using custom template delimiters
   * _.templateSettings = {
   *   'interpolate': /{{([\s\S]+?)}}/g
   * };
   *
   * _.template('hello {{ name }}!', { 'name': 'mustache' });
   * // => 'hello mustache!'
   *
   * // using the `sourceURL` option to specify a custom sourceURL for the template
   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
   * compiled(data);
   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
   *
   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
   * var compiled = _.template('hello <%= data.name %>!', null, { 'variable': 'data' });
   * compiled.source;
   * // => function(data) {
   *   var __t, __p = '', __e = _.escape;
   *   __p += 'hello ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
   *   return __p;
   * }
   *
   * // using the `source` property to inline compiled templates for meaningful
   * // line numbers in error messages and a stack trace
   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
   *   var JST = {\
   *     "main": ' + _.template(mainText).source + '\
   *   };\
   * ');
   */
  function template(text, data, options) {
    // based on John Resig's `tmpl` implementation
    // http://ejohn.org/blog/javascript-micro-templating/
    // and Laura Doktorova's doT.js
    // https://github.com/olado/doT
    text || (text = '');
    options || (options = {});

    var isEvaluating,
        result,
        settings = lodash.templateSettings,
        index = 0,
        interpolate = options.interpolate || settings.interpolate || reNoMatch,
        source = "__p += '",
        variable = options.variable || settings.variable,
        hasVariable = variable;

    // compile regexp to match each delimiter
    var reDelimiters = RegExp(
      (options.escape || settings.escape || reNoMatch).source + '|' +
      interpolate.source + '|' +
      (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
      (options.evaluate || settings.evaluate || reNoMatch).source + '|$'
    , 'g');

    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
      interpolateValue || (interpolateValue = esTemplateValue);

      // escape characters that cannot be included in string literals
      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

      // replace delimiters with snippets
      if (escapeValue) {
        source += "' +\n__e(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      isEvaluating || (isEvaluating = evaluateValue || reComplexDelimiter.test(escapeValue || interpolateValue));
      index = offset + match.length;

      // the JS engine embedded in Adobe products requires returning the `match`
      // string in order to produce the correct `offset` value
      return match;
    });

    source += "';\n";

    // if `variable` is not specified and the template contains "evaluate"
    // delimiters, wrap a with-statement around the generated code to add the
    // data object to the top of the scope chain
    if (!hasVariable) {
      variable = 'obj';
      if (isEvaluating) {
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      else {
        // avoid a with-statement by prepending data object references to property names
        var reDoubleVariable = RegExp('(\\(\\s*)' + variable + '\\.' + variable + '\\b', 'g');
        source = source
          .replace(reInsertVariable, '$&' + variable + '.')
          .replace(reDoubleVariable, '$1__d');
      }
    }

    // cleanup code by stripping empty strings
    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
      .replace(reEmptyStringMiddle, '$1')
      .replace(reEmptyStringTrailing, '$1;');

    // frame code as the function body
    source = 'function(' + variable + ') {\n' +
      (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
      "var __t, __p = '', __e = _.escape" +
      (isEvaluating
        ? ', __j = Array.prototype.join;\n' +
          "function print() { __p += __j.call(arguments, '') }\n"
        : (hasVariable ? '' : ', __d = ' + variable + '.' + variable + ' || ' + variable) + ';\n'
      ) +
      source +
      'return __p\n}';

    // use a sourceURL for easier debugging
    // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
    var sourceURL = useSourceURL
      ? '\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']')
      : '';

    try {
      result = Function('_', 'return ' + source + sourceURL)(lodash);
    } catch(e) {
      e.source = source;
      throw e;
    }

    if (data) {
      return result(data);
    }
    // provide the compiled function's source via its `toString` method, in
    // supported environments, or the `source` property as a convenience for
    // inlining compiled templates during the build process
    result.source = source;
    return result;
  }

  /**
   * Executes the `callback` function `n` times, returning an array of the results
   * of each `callback` execution. The `callback` is bound to `thisArg` and invoked
   * with one argument; (index).
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Number} n The number of times to execute the callback.
   * @param {Function} callback The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
   * // => [3, 6, 4]
   *
   * _.times(3, function(n) { mage.castSpell(n); });
   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
   *
   * _.times(3, function(n) { this.cast(n); }, mage);
   * // => also calls `mage.castSpell(n)` three times
   */
  function times(n, callback, thisArg) {
    n = +n || 0;
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = callback.call(thisArg, index);
    }
    return result;
  }

  /**
   * The opposite of `_.escape`, this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#x27;` in `string` to their
   * corresponding characters.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} string The string to unescape.
   * @returns {String} Returns the unescaped string.
   * @example
   *
   * _.unescape('Moe, Larry &amp; Curly');
   * // => 'Moe, Larry & Curly'
   */
  function unescape(string) {
    return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
  }

  /**
   * Generates a unique ID. If `prefix` is passed, the ID will be appended to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} [prefix] The value to prefix the ID with.
   * @returns {String} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    return (prefix == null ? '' : prefix + '') + (++idCounter);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Invokes `interceptor` with the `value` as the first argument, and then
   * returns `value`. The purpose of this method is to "tap into" a method chain,
   * in order to perform operations on intermediate results within the chain.
   *
   * @static
   * @memberOf _
   * @category Chaining
   * @param {Mixed} value The value to pass to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {Mixed} Returns `value`.
   * @example
   *
   * _.chain([1, 2, 3, 200])
   *  .filter(function(num) { return num % 2 == 0; })
   *  .tap(alert)
   *  .map(function(num) { return num * num; })
   *  .value();
   * // => // [2, 200] (alerted)
   * // => [4, 40000]
   */
  function tap(value, interceptor) {
    interceptor(value);
    return value;
  }

  /**
   * Produces the `toString` result of the wrapped value.
   *
   * @name toString
   * @memberOf _
   * @category Chaining
   * @returns {String} Returns the string result.
   * @example
   *
   * _([1, 2, 3]).toString();
   * // => '1,2,3'
   */
  function wrapperToString() {
    return this.__wrapped__ + '';
  }

  /**
   * Extracts the wrapped value.
   *
   * @name valueOf
   * @memberOf _
   * @alias value
   * @category Chaining
   * @returns {Mixed} Returns the wrapped value.
   * @example
   *
   * _([1, 2, 3]).valueOf();
   * // => [1, 2, 3]
   */
  function wrapperValueOf() {
    return this.__wrapped__;
  }

  /*--------------------------------------------------------------------------*/

  // add functions that return wrapped values when chaining
  lodash.after = after;
  lodash.assign = assign;
  lodash.bind = bind;
  lodash.bindAll = bindAll;
  lodash.bindKey = bindKey;
  lodash.compact = compact;
  lodash.compose = compose;
  lodash.countBy = countBy;
  lodash.debounce = debounce;
  lodash.defaults = defaults;
  lodash.defer = defer;
  lodash.delay = delay;
  lodash.difference = difference;
  lodash.filter = filter;
  lodash.flatten = flatten;
  lodash.forEach = forEach;
  lodash.forIn = forIn;
  lodash.forOwn = forOwn;
  lodash.functions = functions;
  lodash.groupBy = groupBy;
  lodash.initial = initial;
  lodash.intersection = intersection;
  lodash.invert = invert;
  lodash.invoke = invoke;
  lodash.keys = keys;
  lodash.map = map;
  lodash.max = max;
  lodash.memoize = memoize;
  lodash.merge = merge;
  lodash.min = min;
  lodash.object = object;
  lodash.omit = omit;
  lodash.once = once;
  lodash.pairs = pairs;
  lodash.partial = partial;
  lodash.pick = pick;
  lodash.pluck = pluck;
  lodash.range = range;
  lodash.reject = reject;
  lodash.rest = rest;
  lodash.shuffle = shuffle;
  lodash.sortBy = sortBy;
  lodash.tap = tap;
  lodash.throttle = throttle;
  lodash.times = times;
  lodash.toArray = toArray;
  lodash.union = union;
  lodash.uniq = uniq;
  lodash.values = values;
  lodash.where = where;
  lodash.without = without;
  lodash.wrap = wrap;
  lodash.zip = zip;

  // add aliases
  lodash.collect = map;
  lodash.drop = rest;
  lodash.each = forEach;
  lodash.extend = assign;
  lodash.methods = functions;
  lodash.select = filter;
  lodash.tail = rest;
  lodash.unique = uniq;

  // add functions to `lodash.prototype`
  mixin(lodash);

  /*--------------------------------------------------------------------------*/

  // add functions that return unwrapped values when chaining
  lodash.clone = clone;
  lodash.cloneDeep = cloneDeep;
  lodash.contains = contains;
  lodash.escape = escape;
  lodash.every = every;
  lodash.find = find;
  lodash.has = has;
  lodash.identity = identity;
  lodash.indexOf = indexOf;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isBoolean = isBoolean;
  lodash.isDate = isDate;
  lodash.isElement = isElement;
  lodash.isEmpty = isEmpty;
  lodash.isEqual = isEqual;
  lodash.isFinite = isFinite;
  lodash.isFunction = isFunction;
  lodash.isNaN = isNaN;
  lodash.isNull = isNull;
  lodash.isNumber = isNumber;
  lodash.isObject = isObject;
  lodash.isPlainObject = isPlainObject;
  lodash.isRegExp = isRegExp;
  lodash.isString = isString;
  lodash.isUndefined = isUndefined;
  lodash.lastIndexOf = lastIndexOf;
  lodash.mixin = mixin;
  lodash.noConflict = noConflict;
  lodash.random = random;
  lodash.reduce = reduce;
  lodash.reduceRight = reduceRight;
  lodash.result = result;
  lodash.size = size;
  lodash.some = some;
  lodash.sortedIndex = sortedIndex;
  lodash.template = template;
  lodash.unescape = unescape;
  lodash.uniqueId = uniqueId;

  // add aliases
  lodash.all = every;
  lodash.any = some;
  lodash.detect = find;
  lodash.foldl = reduce;
  lodash.foldr = reduceRight;
  lodash.include = contains;
  lodash.inject = reduce;

  forOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      lodash.prototype[methodName] = function() {
        var args = [this.__wrapped__];
        push.apply(args, arguments);
        return func.apply(lodash, args);
      };
    }
  });

  /*--------------------------------------------------------------------------*/

  // add functions capable of returning wrapped and unwrapped values when chaining
  lodash.first = first;
  lodash.last = last;

  // add aliases
  lodash.take = first;
  lodash.head = first;

  forOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      lodash.prototype[methodName]= function(n, guard) {
        var result = func(this.__wrapped__, n, guard);
        return (n == null || guard) ? result : new lodash(result);
      };
    }
  });

  /*--------------------------------------------------------------------------*/

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type String
   */
  lodash.VERSION = '1.0.0-rc.3';

  // add "Chaining" functions to the wrapper
  lodash.prototype.toString = wrapperToString;
  lodash.prototype.value = wrapperValueOf;
  lodash.prototype.valueOf = wrapperValueOf;

  // add `Array` functions that return unwrapped values
  each(['join', 'pop', 'shift'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      return func.apply(this.__wrapped__, arguments);
    };
  });

  // add `Array` functions that return the wrapped value
  each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      func.apply(this.__wrapped__, arguments);
      return this;
    };
  });

  // add `Array` functions that return new wrapped values
  each(['concat', 'slice', 'splice'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      var result = func.apply(this.__wrapped__, arguments);
      return new lodash(result);
    };
  });

  // avoid array-like object bugs with `Array#shift` and `Array#splice`
  // in Firefox < 10 and IE < 9
  if (hasObjectSpliceBug) {
    each(['pop', 'shift', 'splice'], function(methodName) {
      var func = arrayRef[methodName],
          isSplice = methodName == 'splice';

      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            result = func.apply(value, arguments);

        if (value.length === 0) {
          delete value[0];
        }
        return isSplice ? new lodash(result) : result;
      };
    });
  }

  // add pseudo private property to be used and removed during the build process
  lodash._each = each;
  lodash._iteratorTemplate = iteratorTemplate;

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash was injected by a third-party script and not intended to be
    // loaded as a module. The global assignment can be reverted in the Lo-Dash
    // module via its `noConflict()` method.
    window._ = lodash;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return lodash;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports) {
    // in Node.js or RingoJS v0.8.0+
    if (typeof module == 'object' && module && module.exports == freeExports) {
      (module.exports = lodash)._ = lodash;
    }
    // in Narwhal or RingoJS v0.7.0-
    else {
      freeExports._ = lodash;
    }
  }
  else {
    // in a browser or Rhino
    window._ = lodash;
  }
}(this));

})(window)
},{}],19:[function(require,module,exports){

},{}],20:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],3:[function(require,module,exports){
(function(process,global){var AdminUpgrade, AdminMenu, Paginator, PhotoCropper, layoutStatic, layoutOnPersonalize, pagerInit, homepage, forum, sameProfile, profile, admin, joinSearch, resetPaginator, endSearch, mkSearchPnumToHref, mkPostPnumToHref, search, page, privateSite, slice$ = [].slice, out$ = typeof exports != 'undefined' && exports || this;
global.furl = require('./forum-urls.ls');
import$(global, require('./shared-helpers.ls'));
AdminUpgrade = require('../component/AdminUpgrade.ls');
AdminMenu = require('../component/AdminMenu.ls');
Paginator = require('../component/Paginator.ls');
PhotoCropper = require('../component/PhotoCropper.ls');
function bench(subjectName, subjectBody){
  var bef, aft;
  if (process.env.NODE_ENV === 'production') {
    subjectBody();
  } else {
    bef = new Date;
    subjectBody();
    aft = new Date;
    partialize$.apply(this, [setTimeout, [void 8, 1], [0]])(function(){
      var dur;
      dur = aft - bef;
      return console.log("benchmarked '" + subjectName + "': took " + dur + "ms");
    });
  }
}
function renderComponent(win, target, name, klass, firstKlassArg){
  var wc, c, locals;
  wc = win.component || (win.component = {});
  if (c = wc[name]) {
    if (locals = firstKlassArg != null ? firstKlassArg.locals : void 8) {
      c.locals(locals);
    }
    c.reload();
  } else {
    c = wc[name] = new klass(firstKlassArg);
  }
  win.$(target).html('').append(c.$);
}
function paginatorComponent(w, locals, pnumToHref){
  var wc;
  wc = w.component || (w.component = {});
  if (wc.paginator) {
    wc.paginator.locals(locals);
    wc.paginator.pnumToHref(pnumToHref);
    wc.paginator.reload();
  } else {
    wc.paginator = new Paginator({
      locals: locals,
      pnumToHref: pnumToHref
    }, w.$('#pb_paginator'));
  }
}
function parseUrl(url){
  var a, p;
  if (typeof document != 'undefined' && document !== null) {
    a = document.createElement('a');
    a.href = url;
    return {
      search: a.search,
      pathname: a.pathname
    };
  } else {
    p = require('url').parse(url);
    return {
      search: p.search,
      pathname: p.pathname
    };
  }
}
function defaultPnumToHrefFun(uri){
  return function(pg){
    var parsed;
    parsed = parseUrl(uri);
    if (pg > 1) {
      return parsed.pathname + ("?page=" + pg);
    } else {
      return parsed.pathname;
    }
  };
}
layoutStatic = function(w, nextMutant, activeForumId){
  var forumClass, fid, p;
  activeForumId == null && (activeForumId = -1);
  forumClass = w.activeForumId ? " forum-" + w.activeForumId : '';
  w.$('html').attr('class', nextMutant + "" + forumClass);
  w.marshal('mutator', nextMutant);
  fid = activeForumId || w.activeForumId;
  w.$('header .menu').find('.active').removeClass('active');
  w.$("menu .row .forum-" + fid).addClass('active');
  p = w.$("menu .submenu .forum-" + fid);
  if (p.length) {
    p.parent().addClass('active');
    return w.$(last(p.parents('li'))).find('.title').addClass('active');
  }
};
layoutOnPersonalize = function(w, u){
  if (u) {
    setOnlineUser(u.id);
    setProfile(u.photo);
    switch (window.location.hash) {
    case '#choose':
      if (isEmail(typeof user != 'undefined' && user !== null ? user.name : void 8)) {
        Auth.showLoginDialog();
        return switchAndFocus('on-login', 'on-choose', '#auth input[name=username]');
      }
    }
  }
};
pagerInit = function(w){
  var pagerOpts;
  pagerOpts = {
    current: parseInt(w.page),
    last: parseInt(w.pagesCount),
    forumId: parseInt(w.activeForumId)
  };
  if (w.pager) {
    import$(w.pager, pagerOpts);
    w.pager.init();
  } else {
    w.pager = new w.Pager('#paginator', pagerOpts);
  }
  if (w.page) {
    return w.pager.setPage(w.page, false);
  }
};
out$.homepage = homepage = {
  'static': function(window, next){
    window.renderMutant('main_content', 'homepage');
    layoutStatic.call(this, window, 'homepage');
    return next();
  },
  onPersonalize: function(w, u, next){
    layoutOnPersonalize(w, u);
    return next();
  },
  onLoad: function(window, next){
    var active, ref$;
    try {
      window.$('.forum .container').masonry({
        itemSelector: '.post',
        isAnimated: true,
        animationOptions: {
          duration: 200
        },
        isFitWidth: true,
        isResizable: true
      });
    } catch (e$) {}
    active = ((ref$ = window.location.search.match(/order=(\w+)/)) != null ? ref$[1] : void 8) || 'recent';
    window.jade.render($('.extra:first')[0], 'order-control', {
      active: active
    });
    setTimeout(function(){
      var reorder;
      $('.forum').waypoint({
        offset: '25%',
        handler: function(direction){
          var e, eid, id, cur;
          e = $(this);
          eid = e.attr('id');
          id = direction === 'down'
            ? eid
            : $("#" + eid).prevAll('.forum:first').attr('id');
          if (!id) {
            return;
          }
          $('header .menu').find('.active').removeClass('active');
          cur = $('header .menu').find("." + id.replace(/_/, '-')).addClass('active');
          $('.forum .stuck').removeClass('stuck');
          return flipBackground(window, cur, direction);
        }
      });
      reorder = __.debounce(function(it){
        return History.pushState({}, '', it);
      }, 100);
      window.currentOrder = false;
      return $('#order li').waypoint({
        context: 'ul',
        offset: 30,
        handler: function(direction){
          var e, order, path;
          e = $(this);
          if (direction === 'up') {
            e = e.prev();
          }
          if (!e.length) {
            e = $(this);
          }
          $('#order li.active').removeClass('active');
          e.addClass('active');
          order = e.data('value');
          path = "/?order=" + order;
          if (window.currentOrder) {
            return reorder(path);
          } else {
            return window.currentOrder = order;
          }
        }
      });
    }, 100);
    return next();
  },
  onUnload: function(window, nextMutant, next){
    try {
      window.$('.forum .container').masonry('destroy');
      window.$('.forum .header').waypoint('destroy');
      window.$('.forum').waypoint('destroy');
      window.$('#order li').waypoint('destroy');
      window.$('.bg').remove();
      window.$($('.extra:first')).html('');
    } catch (e$) {}
    return next();
  }
};
function renderThreadPaginatorComponent(win, qty, step){
  var onPage, locals;
  onPage = function(page){
    return $.get("/resources/threads/" + window.activeForumId, {
      page: page
    }, function(topThreads, status){
      var container;
      container = win.$('#left_container .scrollable');
      return container.html(win.jade.templates.__threads({
        topThreads: topThreads
      }));
    });
  };
  locals = {
    qty: qty,
    step: step,
    activePage: 1
  };
  renderComponent(win, '#thread-paginator', 'threadPaginator', Paginator, {
    locals: locals,
    onPage: onPage
  });
}
out$.forum = forum = {
  'static': function(window, next){
    var prevMutant, this$ = this;
    prevMutant = window.mutator;
    window.renderMutant('main_content', isEditing(this.furl.path) === true
      ? 'post-new'
      : isForumHomepage(this.furl.path) ? 'homepage' : 'posts');
    if (this.topThreads) {
      window.renderMutant('left_container', 'nav');
      renderThreadPaginatorComponent(window, this.tQty, this.tStep);
      window.marshal('tQty', this.tQty);
      window.marshal('tStep', this.tStep);
    }
    window.marshal('activeForumId', this.activeForumId);
    window.marshal('activeThreadId', this.activeThreadId);
    window.marshal('page', this.page);
    window.marshal('pagesCount', this.pagesCount);
    window.marshal('prevPages', this.prevPages);
    (function(){
      var wc, locals, pnumToHref;
      if (!this$.post) {
        return;
      }
      wc = window.component || (window.component = {});
      locals = {
        step: this$.limit,
        qty: this$.qty,
        activePage: this$.page
      };
      pnumToHref = mkPostPnumToHref(this$.post.uri);
      return paginatorComponent(window, locals, pnumToHref);
    })();
    layoutStatic.call(this, window, 'forum', this.activeForumId);
    return next();
  },
  onLoad: function(window, next){
    var cur, $, $l, id, postId;
    cur = window.$("header .menu .forum-" + window.activeForumId);
    flipBackground(window, cur);
    $ = window.$;
    alignBreadcrumb();
    $l = $('#left_container');
    $l.find('.active').removeClass('active');
    $l.find(".thread[data-id='" + window.activeThreadId + "']").addClass('active');
    id = isEditing(window.location.pathname);
    if (id) {
      editPost(id, {
        forum_id: window.activeForumId
      });
    }
    $('body').on('click', togglePost);
    postId = $('#main_content .post:first').data('post-id');
    if (postId) {
      $.post("/resources/posts/" + postId + "/impression");
    }
    pagerInit(window);
    if (user) {
      setTimeout(function(){
        return $('.onclick-append-reply-ui:first').click();
      }, 300);
    }
    window.surfData = window.activeForumId;
    return next();
  },
  onInitial: function(window, next){
    setTimeout(function(){
      var threads, offset, cur, dst, ref$;
      threads = $('#left_container .threads');
      offset = -125;
      cur = threads.scrollTop();
      dst = Math.round((ref$ = $('#left_container .threads > .active').position()) != null ? ref$.top : void 8);
      if (dst) {
        return threads.animate({
          scrollTop: cur + dst + offset
        }, 500, 'easeOutExpo');
      }
    }, 500);
    renderThreadPaginatorComponent(window, window.tQty, window.tStep);
    return next();
  },
  onMutate: function(window, next){
    var ref$;
    scrollToTop();
    setWide();
    if ((ref$ = window.socket) != null) {
      ref$.emit('online-now');
    }
    return next();
  },
  onPersonalize: function(w, u, next){
    var ref$;
    if (u) {
      layoutOnPersonalize(w, u);
      $(".post[data-user-id=" + u.id + "] .censor").css('display', 'inline');
      if ((ref$ = u.rights) != null && ref$['super']) {
        $('.censor').css('display', 'inline');
      }
      setInlineEditor(u.id);
    }
    return next();
  },
  onUnload: function(win, nextMutant, next){
    $('body').off('click');
    try {
      win.$('#left_container').resizable('destroy');
    } catch (e$) {}
    if (nextMutant !== 'forum') {
      resetPaginator(win);
    }
    return next();
  }
};
sameProfile = function(hints){
  var ref$, l, c, p1, p2;
  ref$ = [hints.last, hints.current], l = ref$[0], c = ref$[1];
  if (l.mutator === null) {
    return false;
  }
  ref$ = [l.pathname.split('/'), c.pathname.split('/')], p1 = ref$[0], p2 = ref$[1];
  if (p1[1] === 'user' && p2[1] === 'user') {
    if (p1[2] === p2[2]) {
      return p1[2];
    }
  }
  return false;
};
out$.profile = profile = {
  'static': function(window, next){
    var this$ = this;
    if (window.hints) {
      if (!sameProfile(window.hints)) {
        window.renderMutant('left_container', 'profile');
      }
    } else {
      window.renderMutant('left_container', 'profile');
    }
    window.renderMutant('main_content', 'posts-by-user');
    window.marshal('step', this.step);
    window.marshal('qty', this.qty);
    window.marshal('page', this.page);
    window.marshal('pagesCount', this.pagesCount);
    (function(){
      var locals, pnumToHref;
      locals = {
        step: this$.limit,
        qty: this$.qty,
        activePage: this$.page
      };
      pnumToHref = mkPostPnumToHref("/user/" + this$.profile.name);
      window.marshal('uri', this$.uri);
      return paginatorComponent(window, locals, pnumToHref);
    })();
    layoutStatic.call(this, window, 'profile');
    return next();
  },
  onLoad: function(window, next){
    pagerInit(window);
    return next();
  },
  onMutate: function(window, next){
    scrollToTop();
    return next();
  },
  onPersonalize: function(w, u, next){
    return lazyLoadHtml5Uploader(function(){
      var photocropperStart, photocropperEnable, photocropperDisable, profileUserId;
      photocropperStart = function(ev){
        return PhotoCropper.start();
      };
      photocropperEnable = function(){
        var options;
        window.$('#left_content').addClass('editable');
        window.$('body').on('click', '#left_content.editable .avatar', photocropperStart);
        options = {
          name: 'avatar',
          postUrl: "/resources/users/" + window.user.id + "/avatar",
          onSuccess: function(r){
            return PhotoCropper.start({
              mode: 'crop'
            });
          }
        };
        return window.$('#left_content .avatar').html5Uploader(options);
      };
      photocropperDisable = function(){
        window.$('#left_content').removeClass('editable');
        return window.$('body').off('click', '#left_content.editable .avatar', photocropperStart);
      };
      if (u) {
        layoutOnPersonalize(w, u);
        profileUserId = window.$('#left_content .profile').data('userId');
        if (profileUserId === u.id) {
          photocropperEnable();
        } else {
          photocropperDisable();
        }
      } else {
        photocropperDisable();
      }
      return next();
    });
  },
  onUnload: function(window, nextMutant, next){
    if (nextMutant !== 'forum') {
      resetPaginator(window);
    }
    return next();
  },
  onInitial: function(window, next){
    var this$ = this;
    (function(){
      var locals, name, pnumToHref;
      locals = {
        step: window.step,
        qty: window.qty,
        activePage: window.page
      };
      name = window.location.pathname.split('/')[2];
      pnumToHref = mkPostPnumToHref("/user/" + name);
      return paginatorComponent(window, locals, pnumToHref);
    })();
    return next();
  }
};
function renderAdminComponents(action, site, win){
  switch (action) {
  case 'domains':
    try {
      win.renderMutant('main_content', 'admin-domains');
    } catch (e$) {}
    break;
  case 'invites':
    try {
      win.renderMutant('main_content', 'admin-invites');
    } catch (e$) {}
    break;
  case 'menu':
    renderComponent(win, '#main_content', 'admin-menu', AdminMenu, {
      locals: {
        site: site
      }
    });
    break;
  case 'upgrade':
    renderComponent(win, '#main_content', 'admin-upgrade', AdminUpgrade, {
      locals: {
        subscriptions: site.subscriptions
      }
    });
    break;
  default:
    try {
      win.renderMutant('main_content', 'admin-general');
    } catch (e$) {}
  }
}
out$.admin = admin = {
  'static': function(window, next){
    window.renderMutant('left_container', 'admin-nav');
    window.$('#left_container menu li').removeClass('active');
    window.$("#left_container menu ." + (this.action || 'general')).addClass('active');
    renderAdminComponents(this.action, this.site, window);
    window.marshal('action', this.action);
    window.marshal('site', this.site);
    layoutStatic.call(this, window, 'admin');
    return next();
  },
  onPersonalize: function(w, u, next){
    layoutOnPersonalize(w, u);
    return next();
  },
  onUnload: function(window, nextMutant, next){
    if (window.adminExpanded) {
      $('body').addClass('collapsed');
    }
    return next();
  },
  onLoad: function(window, next){
    var $b, this$ = this;
    $b = $('body');
    if (window.adminExpanded = $b.hasClass('collapsed')) {
      $b.removeClass('collapsed');
    }
    $('form input:first').focus().select();
    $('.domain').trigger('change');
    window.pagesCount = 0;
    pagerInit(window);
    return lazyLoadNestedSortable(function(){
      return lazyLoadDeserialize(function(){
        return next();
      });
    });
  },
  onInitial: function(win, next){
    renderAdminComponents(win.action, win.site, win);
    return next();
  },
  onMutate: function(window, next){
    scrollToTop();
    return next();
  }
};
joinSearch = function(sock){
  return sock.emit('search', window.searchopts);
};
resetPaginator = function(w){
  var ref$, x$;
  $('#pb_paginator').hide();
  if ((ref$ = w.component) != null && ref$.paginator) {
    x$ = w.component.paginator;
    x$.local('qty', 0);
    x$.reload();
    return x$;
  }
};
endSearch = function(w){
  resetPaginator(w);
  return socket.emit('search-end');
};
mkSearchPnumToHref = function(searchopts){
  return function(pnum){
    var query, rval, ref$, k, v;
    query = pnum === void 8 || parseInt(pnum) === 1
      ? (rval = import$({}, searchopts), delete rval.page, rval)
      : (ref$ = import$({}, searchopts), ref$.page = pnum, ref$);
    if (Object.keys(query).length) {
      return '/search?' + (function(){
        var ref$, results$ = [];
        for (k in ref$ = query) {
          v = ref$[k];
          results$.push(k + "=" + v);
        }
        return results$;
      }()).join('&');
    } else {
      return '/search';
    }
  };
};
mkPostPnumToHref = function(postUri){
  return function(pnum){
    if (pnum > 1) {
      return postUri + "/page/" + pnum;
    } else {
      return postUri;
    }
  };
};
out$.search = search = {
  'static': {
    prepare: function(window, next){
      var params, after, ref$, ref1$, $q, qEl, q;
      params = this;
      after = window.afterPrepare = [];
      window.marshal('page', this.page);
      window.marshal('pagesCount', this.pagesCount);
      window.marshal('searchopts', this.searchopts);
      window.marshal('newHits', 0);
      if (((ref$ = window.hints) != null ? (ref1$ = ref$.last) != null ? ref1$.mutator : void 8 : void 8) !== 'search') {
        (function(){
          var filtersHtml, $t;
          window.replaceHtml(window.$('#left_container'), '<div id="search_filters"></div><div id="search_facets"></div>');
          filtersHtml = window.render('search-filters');
          $t = window.$('#search_filters');
          return after.push(function(){
            return bench('search-filters', function(){
              return window.replaceHtml($t, filtersHtml);
            });
          });
        })();
      }
      (function(){
        var html, $t;
        html = window.render('search-facets');
        $t = window.$('#search_facets');
        return after.push(function(){
          return bench('search-facets', function(){
            return window.replaceHtml($t, html);
          });
        });
      })();
      (function(){
        var html, $t;
        html = window.render('search');
        $t = window.$('#main_content');
        return after.push(function(){
          return bench('search-content', function(){
            return window.replaceHtml($t, html);
          });
        });
      })();
      $q = window.$('#query');
      qEl = $q[0];
      q = this.searchopts.q;
      if (typeof History != 'undefined' && History !== null) {
        if (this.statechangeWasUser) {
          after.push(function(){
            return bench('query-string-update', function(){
              return qEl.value = q;
            });
          });
        }
      } else {
        after.push(function(){
          return bench('query-string-update', function(){
            return $q.val(q);
          });
        });
      }
      if (typeof History != 'undefined' && History !== null) {
        if (document.activeElement === qEl) {
          $q.blur();
          after.push(function(){
            return bench('re-focus', function(){
              return partialize$.apply(this, [setTimeout, [void 8, 1], [0]])(function(){
                return $q.focus();
              });
            });
          });
        }
      }
      return next();
    },
    draw: function(window, next){
      var after, i$, len$, f, this$ = this;
      after = window.afterPrepare;
      for (i$ = 0, len$ = after.length; i$ < len$; ++i$) {
        f = after[i$];
        f();
      }
      bench('filter-state', function(){
        window.$('#search_filters [name=forum_id]').val(this$.searchopts.forum_id);
        return window.$('#search_filters [name=within]').val(this$.searchopts.within);
      });
      (function(){
        var wc, locals, pnumToHref;
        wc = window.component || (window.component = {});
        locals = {
          step: 10,
          qty: this$.elres.total,
          activePage: this$.page
        };
        pnumToHref = mkSearchPnumToHref(this$.searchopts);
        return paginatorComponent(window, locals, pnumToHref);
      })();
      bench('layout-static', function(){
        return layoutStatic.call(this$, window, 'search');
      });
      return next();
    }
  },
  onInitial: function(w, next){
    $R(joinSearch).bindTo(w.rSocket);
    return next();
  },
  onMutate: function(w, next){
    joinSearch(w.socket);
    return next();
  },
  onLoad: function(w, next){
    window.$newHits = w.$('<div/>');
    alignBreadcrumb();
    pagerInit(w);
    return next();
  },
  onUnload: function(w, nextMutant, next){
    endSearch(w);
    delete w.searchopts;
    return next();
  }
};
out$.page = page = {
  'static': function(window, next){
    window.replaceHtml(window.$('#left_container'), '');
    window.replaceHtml(window.$('#main_content'), this.page.config.main_content);
    layoutStatic.call(this, window, 'page');
    return next();
  },
  onLoad: function(window, next){
    pagerInit(window);
    return next();
  },
  onMutate: function(window, next){
    scrollToTop();
    return next();
  }
};
out$.privateSite = privateSite = {
  'static': function(window, next){
    window.$('header').remove();
    window.$('footer').remove();
    window.$('#left_content').remove();
    window.$('#main_content').remove();
    return next();
  },
  onLoad: function(window, next){
    var ref$;
    ref$ = window.fancyboxParams;
    ref$.closeBtn = false;
    ref$.closeClick = false;
    ref$.modal = true;
    Auth.showLoginDialog();
    return next();
  }
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function partialize$(f, args, where){
  var context = this;
  return function(){
    var params = slice$.call(arguments), i,
        len = params.length, wlen = where.length,
        ta = args ? args.concat() : [], tw = where ? where.concat() : [];
    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
    return len < wlen && len ?
      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
  };
}
})(require("__browserify_process"),window)
},{"url":19,"./shared-helpers.ls":4,"../component/AdminUpgrade.ls":21,"./forum-urls.ls":14,"../component/Paginator.ls":16,"../component/AdminMenu.ls":22,"../component/PhotoCropper.ls":15,"__browserify_process":20}],12:[function(require,module,exports){
var furl, forMutant, requiredTasks, difference, expandKeys, expandString, cc, recommendation, out$ = typeof exports != 'undefined' && exports || this, slice$ = [].slice;
furl = require('./forum-urls.ls');
out$.forMutant = forMutant = {
  forum: {
    "menu": 1,
    "forum :forum-id": 1,
    "forums :forum-id": 1,
    "top-threads :forum-id": 1
  },
  thread: {
    "menu": 1,
    "sub-posts-tree :post-id :limit :offset": 1,
    "sub-posts-count :post-id": 1,
    "top-threads :forum-id": 1,
    "forum :forum-id": 1
  }
};
out$.requiredTasks = requiredTasks = function(arg$, arg1$){
  var src, srcVars, dst, dstVars;
  src = arg$[0], srcVars = arg$[1];
  dst = arg1$[0], dstVars = arg1$[1];
  return map(function(it){
    return it.replace(/ .*$/, '');
  })(
  keys(difference(expandKeys(src, srcVars), expandKeys(dst, dstVars))));
};
out$.difference = difference = function(a, b){
  var k, v, results$ = {};
  for (k in a) {
    v = a[k];
if (!b.hasOwnProperty(k)) {
      results$[k] = v;
    }
  }
  return results$;
};
out$.expandKeys = expandKeys = function(a, vars){
  var k, v, results$ = {};
  for (k in a) {
    v = a[k];
    results$[expandString(k, vars)] = v;
  }
  return results$;
};
out$.expandString = expandString = function(s, vars){
  return s.replace(/(:[\w-]+)/g, function(m, p){
    return vars[cc(p)];
  });
};
out$.cc = cc = function(s){
  var ref$, first, rest;
  ref$ = s.split('-'), first = ref$[0], rest = slice$.call(ref$, 1);
  return first.replace(/^:/, '') + join('')(
  map(function(it){
    return it.charAt(0).toUpperCase() + it.slice(1);
  })(
  rest));
};
out$.recommendation = recommendation = function(path, lastPath){
  var meta, lastMeta, simplify, mutant, lastMutant, defaultRecommendation, metaVars, lastMetaVars, src, dst, keep;
  meta = furl.parse(path);
  lastMeta = furl.parse(lastPath);
  simplify = function(t){
    if (t.match(/^thread/)) {
      return 'thread';
    } else {
      return t;
    }
  };
  mutant = simplify(meta.type);
  lastMutant = simplify(lastMeta.type);
  defaultRecommendation = {
    remove: ['menu']
  };
  switch (mutant) {
  case 'forum':
    metaVars = {
      forumId: 1
    };
    lastMetaVars = {
      forumId: meta.forumUri === lastMeta.forumUri ? 1 : 2
    };
    if (lastMutant === 'thread') {
      lastMetaVars.postId = 1;
      lastMetaVars.limit = 10;
      lastMetaVars.offset = 0;
    }
    src = forMutant[mutant];
    dst = forMutant[lastMutant];
    keep = requiredTasks([src, metaVars], [dst, lastMetaVars]);
    return {
      keep: keep
    };
  case 'thread':
    metaVars = {
      forumId: 1,
      postId: 1,
      limit: 10,
      offset: ((meta.page || 1) - 1) * 10
    };
    lastMetaVars = {
      forumId: meta.forumUri === lastMeta.forumUri ? 1 : 2
    };
    if (lastMutant === 'thread') {
      lastMetaVars.postId = meta.threadUri === lastMeta.threadUri ? 1 : 2;
      lastMetaVars.limit = 10;
      lastMetaVars.offset = ((lastMeta.page || 1) - 1) * 10;
    }
    src = forMutant[mutant];
    dst = forMutant[lastMutant];
    keep = requiredTasks([src, metaVars], [dst, lastMetaVars]);
    return {
      keep: keep
    };
  default:
    return defaultRecommendation;
  }
};
},{"./forum-urls.ls":14}],14:[function(require,module,exports){
var fsm, typeOfPart, machine, parse, forumUri, out$ = typeof exports != 'undefined' && exports || this, slice$ = [].slice;
fsm = require('./fsm.ls');
/*
states =
  * \initial
  * \forum
  * \new-thread
  * \-thread-marker
  * \thread
  * \thread-page
  * \-page-marker
  * \thread-permalink
  * \-permalink-page-marker
  * \thread-permalink-page
  * \-edit-marker
  * \edit
  * \error

inputs =
  * \string
  * \number
  * \new
  * \edit
  * \t
  * \page
*/
out$.typeOfPart = typeOfPart = function(i){
  switch (i) {
  case 'page':
    return 'page';
  case 't':
    return 't';
  case 'edit':
    return 'edit';
  case 'new':
    return 'new';
  default:
    if (i.match(/[\.]/)) {
      return 'fbdn';
    }
    if (i.match(/^\d+$/)) {
      return 'number';
    } else {
      return 'string';
    }
  }
};
out$.machine = machine = {
  initial: {
    string: 'forum',
    number: 'forum',
    'new': 'forum',
    edit: 'forum',
    t: 'forum',
    page: 'forum',
    fbdn: 'error'
  },
  forum: {
    string: 'forum',
    number: 'forum',
    'new': 'new-thread',
    edit: 'forum',
    t: '-thread-marker',
    page: 'forum',
    fbdn: 'error'
  },
  'new-thread': {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  '-thread-marker': {
    string: 'thread',
    number: 'thread',
    'new': 'thread',
    edit: 'thread',
    t: 'thread',
    page: 'thread',
    fbdn: 'error'
  },
  thread: {
    string: 'thread-permalink',
    number: 'thread-permalink',
    'new': 'error',
    edit: '-edit-marker',
    t: 'error',
    page: '-page-marker',
    fbdn: 'error'
  },
  'thread-permalink': {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: '-edit-marker',
    t: 'error',
    page: '-permalink-page-marker',
    fbdn: 'error'
  },
  '-edit-marker': {
    string: 'error',
    number: 'edit',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  edit: {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  '-permalink-page-marker': {
    string: 'error',
    number: 'thread-permalink-page',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  'thread-permalink-page': {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  '-page-marker': {
    string: 'error',
    number: 'thread-page',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  'thread-page': {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  },
  error: {
    string: 'error',
    number: 'error',
    'new': 'error',
    edit: 'error',
    t: 'error',
    page: 'error',
    fbdn: 'error'
  }
};
out$.parse = parse = function(path){
  var parts, inputs, type, meta, uriParts, page, n, edit, id;
  parts = reject(function(it){
    return it === '';
  })(
  path.split('/'));
  inputs = map(typeOfPart, parts);
  type = fsm.newState(machine, 'initial', inputs);
  meta = (function(){
    var ref$, ref1$;
    switch (type) {
    case 'initial':
      return {
        incomplete: true
      };
    case 'forum':
      return {
        forumUri: "/" + parts.join('/')
      };
    case 'new-thread':
      return {
        forumUri: "/" + slice$.call(parts, 0, parts.length - 1).join('/')
      };
    case 'thread':
      return {
        forumUri: forumUri(path),
        threadUri: "/" + parts.join('/')
      };
    case 'thread-page':
      ref$ = splitAt(parts.length - 2, parts), uriParts = ref$[0], ref1$ = ref$[1], page = ref1$[0], n = ref1$[1];
      return {
        forumUri: forumUri(path),
        threadUri: "/" + uriParts.join('/'),
        page: parseInt(n)
      };
    case 'thread-permalink':
      return {
        forumUri: forumUri(path),
        threadUri: "/" + parts.join('/'),
        slug: parts[parts.length - 1]
      };
    case 'thread-permalink-page':
      ref$ = splitAt(parts.length - 2, parts), uriParts = ref$[0], ref1$ = ref$[1], page = ref1$[0], n = ref1$[1];
      return {
        forumUri: forumUri(path),
        threadUri: "/" + uriParts.join('/'),
        page: parseInt(n)
      };
    case 'edit':
      ref$ = splitAt(parts.length - 2, parts), uriParts = ref$[0], ref1$ = ref$[1], edit = ref1$[0], id = ref1$[1];
      return {
        forumUri: forumUri(path),
        threadUri: "/" + uriParts.join('/'),
        id: parseInt(id)
      };
    default:
      return {
        incomplete: true
      };
    }
  }());
  return import$({
    type: type,
    parts: parts,
    path: "/" + parts.join('/')
  }, meta);
};
out$.forumUri = forumUri = function(path){
  var parts, inputs, t, forumStates;
  parts = reject(function(it){
    return it === '';
  })(
  path.split('/'));
  inputs = map(typeOfPart, parts);
  t = function(state, input){
    return fsm.newState(machine, state, [input]);
  };
  forumStates = takeWhile(function(it){
    return it === 'initial' || it === 'forum';
  })(
  scan(t, 'initial', inputs));
  return '/' + join('/')(
  take(forumStates.length - 1)(
  parts));
};
/*
Try these in the REPL.

furl.parse '/otherground-forum'
furl.parse '/otherground-forum/supportground'
furl.parse '/otherground-forum/new'                                                 # we can identify the new thread marker
furl.parse '/otherground-forum/supportground/t/new'                                 # threads can be called "new"
furl.parse '/otherground-forum/supportground/t/edit'                                # threads can be called "edit"
furl.parse '/otherground-forum/supportground/t/edit/edit'                           # ...but we can still identify the edit marker
furl.parse '/otherground-forum/supportground/t/edit/edit/1234'                      # and know this is an edit url
furl.parse '/otherground-forum/supportground/t/new-thing'                  
furl.parse '/otherground-forum/supportground/t/new-thing/page/5'                    # pretty page urls are not a problem
furl.parse '/otherground-forum/supportground/t/this-is-a-test/edit/2108'
*/
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"./fsm.ls":23}],13:[function(require,module,exports){
var ch;
ch = require('./client-helpers.ls');
ch.lazyLoadSocketio(function(){
  window.socket = io.connect();
  socket.on('connect', function(){
    return setTimeout(function(){
      return window.rSocket(socket);
    }, 50);
  });
  socket.on('disconnect', function(){});
  socket.on('enter-site', function(message, cb){
    return setOnlineUser(message != null ? message.id : void 8);
  });
  socket.on('leave-site', function(message, cb){
    return $("[data-user-id=" + message.id + "] .profile.photo").removeClass('online');
  });
  socket.on('thread-impression', function(thread, cb){
    if (thread.forum_id === window.activeForumId) {
      return $("#left_container ul.threads li[data-id=" + thread.id + "] span.views").html(thread.views + "<i>views</i>");
    }
  });
  socket.on('thread-create', function(thread, cb){
    if (window.activeForumId === (thread != null ? thread.forum_id : void 8)) {
      return $ui.trigger('thread-create', thread);
    }
  });
  socket.on('post-create', function(post, cb){
    var pc, sel, animateIn;
    window.activeThreadId || (window.activeThreadId = -1);
    if (post.thread_id === window.activeThreadId || (post.user_id === user.id && mutator === 'profile')) {
      if ($("post_" + post.id).length) {
        return;
      }
      pc = $("#left_container ul.threads li[data-id=" + post.thread_id + "] span.post-count");
      pc.html((parseInt(pc.text()) + 1) + " <i>posts</i>");
      sel = "#post_" + post.parent_id + " + .children";
      animateIn = function(e){
        return $(e).addClass('post-animate-in');
      };
      return renderAndAppend(window, $(sel), 'post', {
        post: post
      }, function(newPost){
        if (post.user_id === (typeof user != 'undefined' && user !== null ? user.id : void 8)) {
          mutants.forum.onPersonalize(window, user, function(){});
          setTimeout(function(){
            return animateIn(newPost);
          }, 250);
          if (mutator === 'forum') {
            return awesomeScrollTo(newPost, 300);
          }
        } else {
          return animateIn(newPost);
        }
      });
    }
  });
  socket.on('new-hit', function(hit){
    var hs, suffix, realtimeHtml, x$;
    hs = hit._source;
    window.newHits++;
    window.$newHits.prepend(jade.templates.post({
      post: hs
    }));
    window.showNewHits = function(){
      return window.awesomeScrollTo('#main_content', null, function(){
        $('#new_posts').html('').append(window.$newHits).effect('flash');
        return false;
      });
    };
    window.hideNewHits = function(){
      $('#new_posts').html('');
      return false;
    };
    suffix = window.newHits === 1 ? '' : 's';
    realtimeHtml = "<a href=\"#\" onclick=\"showNewHits()\">\n  " + window.newHits + " new result" + suffix + "\n</a>";
    x$ = $('#new_hit_count');
    x$.find('.count').html(window.newHits);
    x$.show().effect('highlight');
    $('#new_hits').html(realtimeHtml);
    return $('#breadcrumb').slideDown(300);
  });
  socket.on('debug', function(message, cb){
    return typeof console != 'undefined' && console !== null ? console.log('debug', message) : void 8;
  });
  return Chat.clientSocketInit(socket);
});
},{"./client-helpers.ls":5}],6:[function(require,module,exports){
var cheerio, useJsdom, domWindow, isSurfable, slice$ = [].slice;
if (typeof window != 'undefined' && window !== null) {
  true;
} else {
  cheerio = require('cheerio');
  useJsdom = false;
  domWindow = function(html, cb){
    var scripts, jsdom_opts, jsdom_done, this$ = this;
    scripts = ['../../public/local/jquery-1.9.1.min.js', '../../node_modules/reactivejs/src/reactive.js'];
    jsdom_opts = {
      html: html,
      scripts: scripts
    };
    jsdom_done = function(err, window){
      if (err) {
        return cb(err);
      }
      window.$ = window.jQuery;
      return cb(null, window);
    };
    return jsdom.env(jsdom_opts, jsdom_done);
  };
}
this.run = function(template, opts, cb){
  /*
  run returns void because it mutates the window object
  
  on the server side we need to know the base html before we can mutate it
  
  on the client side the callback returns nothing because the dom has been mutated already
  on the server side the callback will return html
  
  templates are objects with up to four methods:
  static, onLoad, onInitial, onMutate
  
  static is client or serverside and this phase is purely for html dom tree creation/manipulation
  
  onLoad happens when a mutant template is run, regardless of whether it is the initial pageload, or a mutation
  
  onInitial only happens on an initial pageload (not on mutation)
  
  onMutate only happens on a mutation (not on an initial pageload)
  */
  var initial_run, params, html, user, ref$, prepare, rawDraw, raf, draw, onLoad, onInitial, onMutate, onPersonalize, renderMutant, render, varStatements, marshal, runStatic, $;
  cb == null && (cb = function(){});
  initial_run = opts.initial;
  params = opts.locals || {};
  html = opts.html;
  user = opts.user;
  if (((ref$ = template['static']) != null && ref$.prepare) && ((ref$ = template['static']) != null && ref$.draw)) {
    prepare = ((ref$ = template['static']) != null ? ref$.prepare : void 8) || function(w, cb){
      return cb();
    };
    rawDraw = ((ref$ = template['static']) != null ? ref$.draw : void 8) || function(w, cb){
      return cb();
    };
  } else {
    prepare = function(w, cb){
      return cb();
    };
    rawDraw = template['static'] || function(w, cb){
      return cb();
    };
  }
  if (raf = typeof window != 'undefined' && window !== null ? window.requestAnimationFrame : void 8) {
    draw = function(w, cb){
      var params;
      params = this;
      return raf(function(){
        var beg;
        beg = new Date;
        return rawDraw.call(params, w, function(){
          var end;
          end = new Date;
          cb();
          return partialize$.apply(this, [setTimeout, [void 8, 1], [0]])(function(){
            var dur, info;
            dur = end - beg;
            if (true) {
              info = "request-animation-frame took " + dur + "ms in mutant static draw phase";
              return console.warn(info);
            }
          });
        });
      });
    };
  } else {
    draw = rawDraw;
  }
  onLoad = template.onLoad || function(w, cb){
    return cb();
  };
  onInitial = template.onInitial || function(w, cb){
    return cb();
  };
  onMutate = template.onMutate || function(w, cb){
    return cb();
  };
  onPersonalize = template.onPersonalize || function(w, u, cb){
    return cb();
  };
  require('../../build/client-jade.js');
  function replaceHtml($el, html){
    var el, newEl;
    if (typeof window != 'undefined' && window !== null) {
      el = $el[0];
      newEl = el.cloneNode(false);
      newEl.innerHTML = html;
      el.parentNode.replaceChild(newEl, el);
    } else {
      $el.html(html);
    }
  }
  renderMutant = function(id, tmpl){
    return replaceHtml($("#" + id), jade.templates[tmpl](params));
  };
  render = function(t){
    return jade.templates[t](params);
  };
  if (typeof window != 'undefined' && window !== null) {
    window.render = render;
    window.replaceHtml = replaceHtml;
    if (initial_run) {
      return onLoad.call(params, window, function(err){
        if (err) {
          return cb(err);
        }
        return onInitial.call(params, window, function(err){
          if (err) {
            return cb(err);
          }
          if (user) {
            return onPersonalize.call(params, window, user, cb);
          } else {
            return cb();
          }
        });
      });
    } else {
      window.renderMutant = function(target, tmpl){
        return jade.render(window.document.getElementById(target), tmpl, params);
      };
      window.marshal = function(key, val){
        return window[key] = val;
      };
      return prepare.call(params, window, function(err){
        var hasDraw, ref$;
        if (err) {
          return cb(err);
        }
        hasDraw = !!((ref$ = template['static']) != null && ref$.draw);
        return (hasDraw ? draw : rawDraw).call(params, window, function(err){
          if (err) {
            return cb(err);
          }
          return onLoad.call(params, window, function(err){
            if (err) {
              return cb(err);
            }
            return onMutate.call(params, window, function(err){
              if (err) {
                return cb(err);
              }
              if (user) {
                return onPersonalize.call(params, window, user, cb);
              } else {
                return cb();
              }
            });
          });
        });
      });
    }
  } else if (html) {
    varStatements = [];
    marshal = function(key, val){
      if (val !== void 8) {
        return varStatements.push("window['" + key + "']=" + JSON.stringify(val));
      }
    };
    runStatic = function(window){
      window.render = render;
      window.replaceHtml = replaceHtml;
      return prepare.call(params, window, function(err){
        if (err) {
          return cb(err);
        }
        return draw.call(params, window, function(err){
          var s;
          if (err) {
            return cb(err);
          }
          if (useJsdom) {
            window.$('script.jsdom').remove();
            s = window.document.createElement('script');
            window.$(s).attr('type', 'text/javascript');
            window.$(s).text(varStatements.join(';'));
            window.document.body.appendChild(s);
          } else {
            $('body').append("<script type=\"text/javascript\">" + varStatements.join(';') + "</script>");
          }
          return cb(null, useJsdom
            ? "<!doctype html>" + window.document.outerHTML
            : $.html());
        });
      });
    };
    if (useJsdom) {
      return domWindow(html, function(err, jsdomWindow){
        if (err) {
          return cb(err);
        }
        jsdomWindow.marshal = marshal;
        jsdomWindow.renderMutant = function(target, tmpl){
          return jade.render(jsdomWindow.document.getElementById(target), tmpl, params);
        };
        return runStatic(jsdomWindow);
      });
    } else {
      $ = cheerio.load(html);
      return runStatic({
        marshal: marshal,
        renderMutant: renderMutant,
        $: $
      });
    }
  } else {
    throw new Error("need html for serverside");
  }
};
isSurfable = function(r){
  return r.callbacks.some(function(m){
    return m.surfable;
  });
};
this.surfableRoutes = function(app){
  var i$, ref$, len$, r, results$ = [];
  for (i$ = 0, len$ = (ref$ = app.routes.get).length; i$ < len$; ++i$) {
    r = ref$[i$];
    if (isSurfable(r)) {
      results$.push(r.regexp.toString());
    }
  }
  return results$;
};
function partialize$(f, args, where){
  var context = this;
  return function(){
    var params = slice$.call(arguments), i,
        len = params.length, wlen = where.length,
        ta = args ? args.concat() : [], tw = where ? where.concat() : [];
    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
    return len < wlen && len ?
      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
  };
}
},{"cheerio":19,"../../build/client-jade.js":24}],15:[function(require,module,exports){
var Component, sh, templates, PhotoCropper;
Component = require('yacomponent');
sh = require('../app/shared-helpers.ls');
templates = require('../build/component-jade.js').templates;
module.exports = PhotoCropper = (function(superclass){
  var prototype = extend$((import$(PhotoCropper, superclass).displayName = 'PhotoCropper', PhotoCropper), superclass).prototype, constructor = PhotoCropper;
  PhotoCropper.pc = null;
  PhotoCropper.start = function(arg$, cb){
    var ref$, title, ref1$, mode, photo, aspectRatio, endpointUrl;
    ref$ = arg$ != null
      ? arg$
      : {}, title = (ref1$ = ref$.title) != null ? ref1$ : "Profile Photo", mode = (ref1$ = ref$.mode) != null ? ref1$ : 'upload', photo = (ref1$ = ref$.photo) != null ? ref1$ : null, aspectRatio = (ref1$ = ref$.aspectRatio) != null
      ? ref1$
      : 1 / 1, endpointUrl = (ref1$ = ref$.endpointUrl) != null ? ref1$ : null;
    cb == null && (cb = function(){});
    if (!photo) {
      photo = user.photo;
    }
    if (!endpointUrl) {
      endpointUrl = "/resources/users/" + user.id + "/avatar";
    }
    return lazyLoadFancybox(function(){
      PhotoCropper.pc = new PhotoCropper({
        aspectRatio: aspectRatio,
        endpointUrl: endpointUrl,
        locals: {
          title: title,
          photo: photo,
          endpointUrl: endpointUrl
        }
      });
      if (mode === 'crop') {
        PhotoCropper.pc.cropMode();
      }
      return $.fancybox.open(PhotoCropper.pc.$, {
        afterLoad: cb
      });
    });
  };
  function PhotoCropper(arg$){
    var title, aspectRatio;
    title = arg$.title, aspectRatio = arg$.aspectRatio, this.endpointUrl = arg$.endpointUrl;
    this.crop = bind$(this, 'crop', prototype);
    this.aspectRatio = parseFloat(aspectRatio);
    PhotoCropper.superclass.apply(this, arguments);
  }
  prototype.template = templates.PhotoCropper;
  prototype.jcrop = null;
  prototype.init = function(){
    if (this.aspectRatio) {
      return 1;
    } else {
      return 1;
    }
  };
  prototype.onAttach = function(){
    var this$ = this;
    this.$.find('.upload input[type=file]').html5Uploader({
      name: 'avatar',
      postUrl: this.endpointUrl,
      onSuccess: function(xhr, file, rJson){
        var r;
        r = JSON.parse(rJson);
        this$.$.find('img').attr('src', cacheUrl + "" + r.url);
        return this$.cropMode();
      }
    });
    return this.$.find('.crop .button').click(this.crop);
  };
  prototype.upload = function(){
    var data, jqxhr, this$ = this;
    data = this.$.find('form').serialize();
    jqxhr = constructor.$.post(this.endpointUrl, data);
    jqxhr.done(function(r){
      return this$.cropMode(r);
    });
    return jqxhr.fail(function(r){
      return console.warn('upload failed', r);
    });
  };
  prototype.uploadMode = function(){
    this.$.find('.crop').hide();
    return this.$.find('.upload').show();
  };
  prototype.cropMode = function(){
    var this$ = this;
    this.$.find('.upload').hide();
    this.$.find('.crop').show();
    return lazyLoadJcrop(function(){
      var options, fb, saveJcrop;
      if (this$.jcrop) {
        this$.jcrop.destroy();
      }
      options = {
        aspectRatio: this$.aspectRatio
      };
      import$(options, this$.boxDimensions());
      fb = constructor.$.fancybox;
      saveJcrop = function(j){
        return this$.jcrop = j;
      };
      return this$.$.find('.crop img').Jcrop(options, function(){
        saveJcrop(this);
        return fb.update();
      });
    });
  };
  prototype.boxDimensions = function(){
    var fancyboxSideMargin, resize;
    fancyboxSideMargin = 35;
    resize = 0.95;
    return {
      boxWidth: parseInt(constructor.$(window).width() - fancyboxSideMargin * 2),
      boxHeight: parseInt(constructor.$(window).height() * resize)
    };
  };
  prototype.crop = function(ev){
    var data, jqxhr, this$ = this;
    data = this.jcrop.tellSelect();
    if (data.height === 0 || data.width === 0) {
      return;
    }
    jqxhr = constructor.$.ajax({
      type: 'PUT',
      data: data,
      url: this.endpointUrl
    });
    jqxhr.done(function(r){
      return constructor.$.fancybox.close();
    });
    return jqxhr.fail(function(r){
      return console.warn('upload failed', r);
    });
  };
  return PhotoCropper;
}(Component));
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"../app/shared-helpers.ls":4,"yacomponent":26}],7:[function(require,module,exports){
var Component, ch, templates, Auth;
Component = require('yacomponent');
ch = require('../app/client-helpers.ls');
templates = require('../build/component-jade.js').templates;
module.exports = Auth = (function(superclass){
  var prototype = extend$((import$(Auth, superclass).displayName = 'Auth', Auth), superclass).prototype, constructor = Auth;
  prototype.componentName = 'Auth';
  prototype.template = templates.Auth;
  Auth.showLoginDialog = function(cb){
    var this$ = this;
    cb == null && (cb = function(){});
    return ch.lazyLoadFancybox(function(){
      return ch.lazyLoad(function(){
        return window.$.fn.complexify;
      }, window.cacheUrl + "/local/jquery.complexify.min.js", null, function(){
        if (!window._auth) {
          window._auth = new Auth({
            locals: {
              siteName: window.siteName,
              inviteOnly: window.inviteOnly
            }
          }, $('#auth'));
          if (Auth.afterLogin) {
            window._auth.afterLogin = Auth.afterLogin;
          }
        }
        if (!$('.fancybox-overlay:visible').length) {
          $.fancybox.open('#auth', window.fancyboxParams);
        }
        setTimeout(function(){
          return $('#auth input[name=username]').focus();
        }, 100);
        window.COMPLEXIFY_BANLIST = ['god', 'money', 'password', 'love'];
        $('#auth [name="password"]').complexify({}, function(pass, percent){
          var e;
          e = $(this).parent();
          e.find('.strength-meter').toggleClass('strong', pass);
          return e.find('.strength').css({
            height: parseInt(percent) + '%'
          });
        });
        return cb(window._auth.$);
      });
    });
  };
  Auth.showInfoDialog = function(msg, msg2, remove, cb){
    msg2 == null && (msg2 = '');
    remove == null && (remove = '');
    cb == null && (cb = function(){});
    return Auth.showLoginDialog(function(){
      var fb;
      fb = $('.fancybox-wrap:first');
      fb.find('#msg').html(msg);
      fb.find('.dialog .msg2').html(msg2);
      ch.switchAndFocus(remove, 'on-dialog', '');
      return cb(window._auth.$);
    });
  };
  Auth.showRegisterDialog = function(remove, cb){
    remove == null && (remove = '');
    cb == null && (cb = function(){});
    return Auth.showLoginDialog(function(){
      ch.switchAndFocus(remove, 'on-register', '.register input:first');
      return cb(window._auth.$);
    });
  };
  Auth.showResetPasswordDialog = function(){
    return Auth.showLoginDialog(function($auth){
      var $form, hash;
      $form = $auth.find('.reset form');
      ch.switchAndFocus('', 'on-reset', '#auth .reset input:first');
      hash = location.hash.split('=')[1];
      $form.find('input[type=hidden]').val(hash);
      console.log(hash, $form, $auth);
      return $.post('/auth/forgot-user', {
        forgot: hash
      }, function(r){
        if (r.success) {
          $form.find('h2:first').html('Choose a New Password');
          return $form.find('input').prop('disabled', false);
        } else {
          return $form.find('h2:first').html("Couldn't find you. :(");
        }
      });
    });
  };
  Auth.loginWithToken = function(){
    return cors.get(authDomain + "/auth/once", {
      site_id: window.siteId
    }, function(r){
      if (r) {
        return $.post('/auth/once', {
          token: r.token
        }, function(rr){
          if (rr.success) {
            Auth.afterLogin();
            return window.location.hash = '';
          }
        });
      }
    });
  };
  Auth.requireLogin = function(fn){
    return function(){
      if (window.user) {
        return fn.apply(window, arguments);
      } else {
        Auth.showLoginDialog();
        return false;
      }
    };
  };
  Auth.requireRegistration = function(fn){
    return function(){
      if (window.user) {
        return fn.apply(window, arguments);
      } else {
        Auth.showRegisterDialog();
        return false;
      }
    };
  };
  function Auth(){
    this.choose = bind$(this, 'choose', prototype);
    this.togglePassword = bind$(this, 'togglePassword', prototype);
    this.resend = bind$(this, 'resend', prototype);
    this.resetPassword = bind$(this, 'resetPassword', prototype);
    this.forgotPassword = bind$(this, 'forgotPassword', prototype);
    this.register = bind$(this, 'register', prototype);
    this.afterLogin = bind$(this, 'afterLogin', prototype);
    this.login = bind$(this, 'login', prototype);
    this.onDetach = bind$(this, 'onDetach', prototype);
    this.onAttach = bind$(this, 'onAttach', prototype);
    Auth.superclass.apply(this, arguments);
  }
  prototype.onAttach = function(){
    this.$.find('.social a').click(this.openOauthWindow);
    this.$.on('submit', '.login form', this.login);
    this.$.on('submit', '.register form', this.register);
    this.$.on('submit', '.forgot form', this.forgotPassword);
    this.$.on('submit', '.reset form', this.resetPassword);
    this.$.on('click', '.toggle-password', this.togglePassword);
    this.$.on('submit', '.choose form', this.choose);
    this.$.on('click', '.dialog a.resend', this.resend);
    this.$.on('click', '.onclick-close-fancybox', function(){
      return $.fancybox.close();
    });
    this.$.on('click', '.onclick-show-login', function(){
      return ch.switchAndFocus('on-forgot on-register on-reset', 'on-login', '#auth input[name=username]');
    });
    this.$.on('click', '.onclick-show-forgot', function(){
      return ch.switchAndFocus('on-error', 'on-forgot', '#auth input[name=email]');
    });
    this.$.on('click', '.onclick-show-choose', function(){
      return ch.switchAndFocus('on-login', 'on-choose', '#auth input[name=username]');
    });
    this.$.on('click', '.onclick-show-register', function(){
      return ch.switchAndFocus('on-login', 'on-register', '#auth input[name=username]');
    });
    this.$.on('keyup', '.fancybox-inner input', function(it){
      if (it.which === 27) {
        $.fancybox.close();
        return false;
      }
    });
  };
  prototype.onDetach = function(){};
  prototype.openOauthWindow = function(ev){
    var url;
    url = $(this).attr('href');
    window.open(url, 'popup', "width=980,height=650,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no");
    return false;
  };
  prototype.login = function(ev){
    var $form, u, p, s, params, this$ = this;
    $form = $(ev.target);
    u = $form.find('input[name=username]');
    p = $form.find('input[name=password]');
    s = $form.find('input[type=submit]');
    params = {
      username: u.val(),
      password: p.val()
    };
    s.attr('disabled', 'disabled');
    $.post($form.attr('action'), params, function(r){
      var resend, $fancybox;
      if (r.success) {
        $.fancybox.close();
        if (this$.afterLogin) {
          this$.afterLogin();
        }
        if (initialMutant === 'privateSite') {
          window.location.reload();
        }
      } else {
        if (r.type === 'unverified-user') {
          resend = "To resend your verification email, <a class=\"resend\" data-email=\"" + r.email + "\">click here</a>.";
          constructor.showInfoDialog('Please verify your account first.', resend, 'on-login');
        } else {
          $fancybox = $form.parents('.fancybox-wrap:first');
          $fancybox.addClass('on-error');
          $fancybox.removeClass('shake');
          ch.showTooltip($form.find('.tooltip'), 'Try again!');
          setTimeout(function(){
            $fancybox.addClass('shake');
            return u.focus();
          }, 10);
        }
      }
      return s.removeAttr('disabled');
    });
    return false;
  };
  prototype.afterLogin = function(){};
  prototype.register = function(ev){
    var $form, s, this$ = this;
    $form = $(ev.target);
    $form.find('input').removeClass('validation-error');
    s = $form.find('input[type=submit]');
    s.attr('disabled', 'disabled');
    $.post($form.attr('action'), $form.serialize(), function(r){
      var msgs, ref$;
      if (r.success) {
        $form.find("input:text,input:password").removeClass('validation-error').val('');
        ch.switchAndFocus('on-register', 'on-dialog', '');
        Auth.afterLogin();
        Auth.showInfoDialog("Welcome to " + siteName);
      } else {
        msgs = [];
        if ((ref$ = r.errors) != null) {
          ref$.forEach(function(e){
            var $e;
            $e = $form.find("input[name=" + e.param + "]");
            $e.addClass('validation-error').focus();
            return msgs.push(e.msg);
          });
        }
        ch.showTooltip($form.find('.tooltip'), unique(msgs).join('<br>'));
        shakeDialog($form, 100);
      }
      return s.removeAttr('disabled');
    });
    return false;
  };
  prototype.forgotPassword = function(ev){
    var $form, s, this$ = this;
    $form = $(ev.target);
    s = $form.find('input[type=submit]');
    s.attr('disabled', 'disabled');
    $.post($form.attr('action'), $form.serialize(), function(r){
      var msg, ref$, ref1$;
      if (r.success) {
        Auth.showInfoDialog('Check your inbox for reset link!', '', 'on-forgot');
      } else {
        $form.find('input:first').focus();
        msg = ((ref$ = r.errors) != null ? (ref1$ = ref$[0]) != null ? ref1$.name : void 8 : void 8) || ((ref$ = r.errors) != null ? (ref1$ = ref$[0]) != null ? ref1$.msg : void 8 : void 8) || 'Unable to find you';
        ch.showTooltip($form.find('.tooltip'), msg);
        shakeDialog($form, 100);
      }
      return s.removeAttr('disabled');
    });
    return false;
  };
  prototype.resetPassword = function(ev){
    var $form, password, s, this$ = this;
    $form = $(ev.target);
    password = $form.find('input[name=password]').val();
    if (password.match(/^\s*$/)) {
      ch.showTooltip($form.find('.tooltip'), "Password may not be blank");
      return false;
    }
    s = $form.find('input[type=submit]');
    s.attr('disabled', 'disabled');
    $.post($form.attr('action'), $form.serialize(), function(r){
      if (r.success) {
        $form.find('input').prop('disabled', true);
        ch.showTooltip($form.find('.tooltip'), "Password changed!");
        location.hash = '';
        $form.find('input[name=password]').val('');
        setTimeout(function(){
          ch.switchAndFocus('on-reset', 'on-login', '#auth .login input:first');
          return ch.showTooltip($('#auth .login form .tooltip'), "Now log in!");
        }, 1500);
      } else {
        ch.showTooltip($form.find('.tooltip'), "Choose a better password");
      }
      return s.removeAttr('disabled');
    });
    return false;
  };
  prototype.resend = function(ev){
    var email;
    email = $('.dialog a.resend').data('email');
    return $.post('/auth/resend', {
      email: email
    }, function(r){
      if (r.success) {
        return constructor.showInfoDialog('Verification email sent again.', 'Please check your email.  It might be in your spam.');
      } else {
        return constructor.showInfoDialog('There was a problem sending the email', 'Please try again.');
      }
    });
  };
  prototype.togglePassword = function(ev){
    var e, p;
    e = $(ev.target);
    p = e.prev('[name=password]');
    if (p.attr('type') === 'password') {
      e.html('Hide');
      p.attr('type', 'text');
    } else {
      e.html('Show');
      p.attr('type', 'password');
    }
    setTimeout(function(){
      return p.focus();
    }, 10);
    return false;
  };
  prototype.choose = function(ev){
    var $form, s, this$ = this;
    $form = $(ev.target);
    s = $form.find('input[type=submit]');
    s.attr('disabled', 'disabled');
    $.post($form.attr('action'), $form.serialize(), function(r){
      if (r.success) {
        $.fancybox.close();
        this$.afterLogin();
        window.location.hash = '';
      } else {
        $form.find('input:first').focus();
        ch.showTooltip($form.find('.tooltip'), r.msg);
        shakeDialog($form, 100);
      }
      return s.removeAttr('disabled');
    });
    return false;
  };
  return Auth;
}(Component));
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../app/client-helpers.ls":5,"../build/component-jade.js":25,"yacomponent":26}],4:[function(require,module,exports){
var __, secondsToHumanReadable, dateFields;
__ = require('lodash');
this.addCommas = function(s){
  return Str.reverse(
  join(',')(
  filter(function(it){
    return it.length;
  })(
  split(/(\d{3})/)(
  Str.reverse(
  s.toString())))));
};
this.titleCase = function(s){
  return s != null ? s.replace(/[\w]\S*/g, function(word){
    if (word === word.toUpperCase()) {
      if (word.indexOf('.') > -1 || word.indexOf('-') > -1 || word.length < 6) {
        return word;
      }
    }
    if (word.length > 3) {
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    return word;
  }) : void 8;
};
this.ellipse = function(s, len, suffix){
  suffix == null && (suffix = '...');
  if ((s != null ? s.length : void 8) > len) {
    s = s.substr(0, len);
    if (s.lastIndexOf(' ') > 0) {
      s = s.substr(0, s.lastIndexOf(' ')) + suffix;
    }
  }
  return s;
};
this.dayName = function(i){
  switch (i) {
  case 0:
    return 'sun';
  case 1:
    return 'mon';
  case 2:
    return 'tue';
  case 3:
    return 'wed';
  case 4:
    return 'thu';
  case 5:
    return 'fri';
  case 6:
    return 'sat';
  }
};
this.prettyDayName = function(i){
  switch (i) {
  case 0:
    return 'Sunday';
  case 1:
    return 'Monday';
  case 2:
    return 'Tuesday';
  case 3:
    return 'Wednesday';
  case 4:
    return 'Thursday';
  case 5:
    return 'Friday';
  case 6:
    return 'Saturday';
  }
};
secondsToHumanReadable = function(secs){
  var hours, minutes, seconds, timestring;
  hours = Math.floor(secs / (60 * 60));
  secs -= hours * (60 * 60);
  minutes = Math.floor(secs / 60);
  secs -= minutes * 60;
  seconds = secs;
  timestring = '';
  if (hours > 1) {
    timestring += hours + ' hours';
  } else if (hours === 1) {
    timestring += '1 hour';
  }
  if (minutes) {
    if (hours) {
      timestring += ', ';
    }
    if (minutes > 1) {
      timestring += minutes + ' minutes';
    } else if (minutes === 1) {
      timestring += '1 minute';
    }
  } else if (!hours) {
    if (secs === 1) {
      timestring = secs + " second";
    } else {
      timestring = secs + " seconds";
    }
  }
  return timestring;
};
this.elapsedToHumanReadable = function(secsAgo){
  var suffix, human, d, weeks, months, years;
  suffix = 'ago';
  human = secsAgo < 30
    ? 'Just now!'
    : secsAgo < 60
      ? "A moment " + suffix
      : secsAgo < 120
        ? "A minute " + suffix
        : secsAgo < 86400
          ? secondsToHumanReadable(secsAgo) + ' ' + suffix
          : secsAgo < 172800
            ? 'Yesterday'
            : secsAgo < 604800
              ? (d = new Date(), d.setTime(d.getTime() - secsAgo * 1000), this.prettyDayName(d.getDay()))
              : secsAgo < 2628000
                ? (weeks = Math.floor(secsAgo / 604800), weeks === 1
                  ? "A week " + suffix
                  : weeks + " weeks " + suffix)
                : secsAgo < 31446925
                  ? (months = Math.floor(secsAgo / 2628000), months === 1
                    ? "A month " + suffix
                    : months + " months " + suffix)
                  : (years = Math.floor(secsAgo / 31446925), years === 1
                    ? "A year " + suffix
                    : years + " years " + suffix);
  return human.replace(/(\d+)/g, '<b>$1</b>');
};
this.djb2Hash = function(str){
  var hash, i$, len$, i, char;
  hash = 5381;
  for (i$ = 0, len$ = str.length; i$ < len$; ++i$) {
    i = str[i$];
    char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) + char;
  }
  return hash;
};
dateFields = ['created', 'updated'];
this.addDates = function(o){
  var now, i$, ref$, len$, df, sub, k, i, v;
  now = Date.now();
  if (!o) {
    return o;
  }
  switch (typeof o) {
  case 'object':
    for (i$ = 0, len$ = (ref$ = dateFields).length; i$ < len$; ++i$) {
      df = ref$[i$];
      if (o[df]) {
        o[df] = new Date(o[df]);
        o[df + "_human"] = this.elapsedToHumanReadable((now - o[df]) / 1000);
        o[df + "_iso"] = o[df].toISOString();
      }
    }
    sub = __.keys(o).filter(function(k){
      return typeof o[k] === 'array' || typeof o[k] === 'object';
    });
    for (i$ = 0, len$ = sub.length; i$ < len$; ++i$) {
      k = sub[i$];
      o[k] = this.addDates(o[k]);
    }
    return o;
  case 'array':
    for (i$ = 0, len$ = o.length; i$ < len$; ++i$) {
      i = i$;
      v = o[i$];
      if (typeof v === 'object') {
        o[i] = this.addDates(o[i]);
      }
    }
    return o;
  default:
    return o;
  }
};
this.renderAnd = curry$(function(fn, w, target, tmpl, params, cb){
  var $t, $b;
  $t = w.$(target);
  $b = w.$('<div>');
  $b.hide();
  $t[fn]($b);
  w.jade.render($b[0], tmpl, params);
  $b.show().addClass('fadein');
  return setTimeout(function(){
    return cb($b);
  }, 100);
});
this.renderAndAppend = this.renderAnd('append');
this.renderAndPrepend = this.renderAnd('prepend');
this.isEmail = function(name){
  return name.indexOf('@') !== -1;
};
this.isForumHomepage = function(path){
  return furl.parse(path).type === 'forum';
};
this.isEditing = function(path){
  var meta;
  meta = furl.parse(path);
  switch (meta.type) {
  case 'new-thread':
    return true;
  case 'edit':
    return meta.id;
  default:
    return false;
  }
};
this.flipBackground = function(w, cur, direction){
  var last, next;
  direction == null && (direction = 'down');
  if (w.bgAnim) {
    clearTimeout(w.bgAnim);
  }
  last = w.$('.bg.active');
  next = w.$('#forum_bg_' + cur.data('id'));
  next.css('display', 'block');
  if (!last.length) {
    return next.addClass('active');
  } else {
    return w.bgAnim = setTimeout(function(){
      last.css('top', direction === 'down' ? -300 : 300);
      last.removeClass('active');
      next.addClass('active');
      return w.bgAnim = 0;
    }, 100);
  }
};
this.rUnbind = function(rf){
  var i$, ref$, len$, d;
  for (i$ = 0, len$ = (ref$ = rf.dependencies).length; i$ < len$; ++i$) {
    d = ref$[i$];
    d.removeDependent();
  }
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
},{"lodash":18}],17:[function(require,module,exports){
var Component, templates, Buy;
Component = require('yacomponent');
templates = require('../build/component-jade.js').templates;
module.exports = Buy = (function(superclass){
  var prototype = extend$((import$(Buy, superclass).displayName = 'Buy', Buy), superclass).prototype, constructor = Buy;
  prototype.template = templates.Buy;
  prototype.init = function(){
    if (this.local('cardNeeded') === void 8) {
      return this.local('cardNeeded', true);
    }
  };
  prototype.onAttach = function(){
    var this$ = this;
    setTimeout(function(){
      return constructor.$('.Buy-card-number').focus();
    }, 100);
    this.$.on('click', '.Buy-change-card', function(){
      var $fb;
      this$.local('cardNeeded', true);
      this$.detach().render().attach();
      $fb = constructor.$('.fancybox-wrap:first');
      $fb.removeClass('slide');
      setTimeout(function(){
        return $fb.addClass('slide');
      }, 10);
      return false;
    });
    return this.$.on('click', '.Buy-checkout', function(ev){
      var data, product, reEnable;
      $(ev.target).attr('disabled', 'disabled');
      data = {
        number: this$.$.find('.Buy-card-number').val(),
        expmo: this$.$.find('.Buy-card-month').val(),
        expyear: this$.$.find('.Buy-card-year').val(),
        code: this$.$.find('.Buy-card-code').val()
      };
      product = this$.local('product').id;
      reEnable = function(){
        return $(ev.target).attr('disabled', null);
      };
      showTooltip(this$.$.find('.tooltip'), 'Securing a connection');
      constructor.$.post("/ajax/checkout/" + product, data, function(r){
        var ref$, cardNumber, i$, len$, e, $fb;
        if (r.success) {
          site.subscriptions.push(product);
          site.has_stripe = true;
          $("#" + product).focus();
          showTooltip(this$.$.find('.tooltip'), ['Sincere thanks!', "Awesome.  Go ahead!", 'You got it!', 'Thank you!'][parseInt(Math.random() * 5)]);
          return setTimeout(function(){
            reEnable();
            $("." + product + "-available").hide();
            $("." + product + "-purchased").show(500);
            return $.fancybox.close();
          }, 2000);
        } else {
          showTooltip(this$.$.find('.tooltip'), (ref$ = r.errors) != null && ref$.length ? r.errors.join("\n") : 'Invalid payment!');
          cardNumber = this$.$.find('.Buy-card-number');
          for (i$ = 0, len$ = (ref$ = [cardNumber, constructor.$('.Buy-card-code')]).length; i$ < len$; ++i$) {
            e = ref$[i$];
            e.addClass('has-error');
          }
          $fb = constructor.$('.fancybox-wrap:first');
          $fb.addClass('on-error');
          $fb.removeClass('shake');
          setTimeout(function(){
            $fb.addClass('shake');
            return cardNumber.focus();
          }, 10);
          return reEnable();
        }
      });
      return false;
    });
  };
  prototype.onDetach = function(){
    return this.$.off();
  };
  function Buy(){
    Buy.superclass.apply(this, arguments);
  }
  return Buy;
}(Component));
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"yacomponent":26}],16:[function(require,module,exports){
var Component, templates, Paginator;
Component = require('yacomponent');
templates = require('../build/component-jade.js').templates;
function calcPages(activePage, step, qty, pageDistance, pageQty, pnumToHref){
  var beg, end, pages, res$, i$, ref$, len$, num, firstNum, lastNum;
  activePage = parseInt(activePage);
  step = parseInt(step);
  qty = parseInt(qty);
  pageDistance = parseInt(pageDistance);
  pageQty = parseInt(pageQty);
  activePage = parseInt(activePage);
  beg = Math.max(activePage - pageDistance, 1);
  end = Math.min(activePage + pageDistance, pageQty);
  if (activePage <= pageDistance) {
    end = Math.min(end + (pageDistance - activePage) + 1, pageQty);
  } else if (activePage >= pageQty - pageDistance) {
    beg = Math.max(beg - (pageDistance - (pageQty - activePage)), 1);
  }
  res$ = [];
  for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
    num = ref$[i$];
    res$.push({
      num: num,
      title: num,
      href: pnumToHref(num),
      active: activePage === num
    });
  }
  pages = res$;
  firstNum = 1;
  if (pages.length && pages[0].title !== firstNum) {
    pages.unshift({
      num: firstNum,
      title: 'First',
      href: pnumToHref(firstNum)
    });
  }
  lastNum = pages.length - 1;
  if (pages.length && pages[lastNum].title !== pageQty) {
    pages.push({
      num: pageQty,
      title: 'Last',
      href: pnumToHref(pageQty)
    });
  }
  return pages;
  function fn$(){
    var i$, to$, results$ = [];
    for (i$ = beg, to$ = end; i$ <= to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }
}
module.exports = Paginator = (function(superclass){
  var defaultLocals, prototype = extend$((import$(Paginator, superclass).displayName = 'Paginator', Paginator), superclass).prototype, constructor = Paginator;
  defaultLocals = {
    activePage: 1,
    step: 8,
    qty: 0,
    pageDistance: 4
  };
  function Paginator(arg$){
    var ref$, pnumToHref;
    ref$ = arg$ != null
      ? arg$
      : {}, pnumToHref = ref$.pnumToHref, this.onPage = ref$.onPage;
    if (!pnumToHref) {
      if (this.onPage) {
        pnumToHref = function(){
          return '#';
        };
      } else {
        pnumToHref = function(it){
          return "?page=" + it;
        };
      }
    }
    this.pnumToHref = constructor.$R.state(pnumToHref);
    Paginator.superclass.apply(this, arguments);
  }
  prototype.init = function(){
    var k, ref$, v, this$ = this;
    for (k in ref$ = defaultLocals) {
      v = ref$[k];
      if (this.local(k) === void 8) {
        this.local(k, v);
      }
    }
    this.state.pageQty = constructor.$R(function(qty, step){
      return Math.ceil(qty / step);
    }).bindTo(this.state.qty, this.state.step);
    return function(){
      var bindings, ref$;
      bindings = [this$.state.activePage, this$.state.step, this$.state.qty, this$.state.pageDistance, this$.state.pageQty, this$.pnumToHref];
      return this$.state.pages = (ref$ = constructor.$R(calcPages)).bindTo.apply(ref$, bindings);
    }();
  };
  prototype.template = templates.Paginator;
  prototype.onAttach = function(){
    var c, handler;
    this.$.show();
    if (this.onPage) {
      c = this;
      handler = function(){
        var pg;
        pg = parseInt(constructor.$(this).data('page'));
        c.local('activePage', pg);
        c.reload();
        c.onPage(pg, c);
        return false;
      };
      return this.$.on('click', 'a', handler);
    }
  };
  prototype.onDetach = function(){
    return this.$.off();
  };
  return Paginator;
}(Component));
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"yacomponent":26}],11:[function(require,module,exports){
var Component, templates, addMessage, Chat, slice$ = [].slice;
Component = require('yacomponent');
templates = require('../build/component-jade.js').templates;
addMessage = curry$(function(fn, m){
  var $msg, $messages;
  $msg = this.messageNode(m);
  $messages = this.$.find('.messages')[fn]($msg);
  $msg.show();
  $messages[0].scrollTop = $messages[0].scrollHeight;
  return this.$.find('textarea').val('');
});
module.exports = Chat = (function(superclass){
  var prototype = extend$((import$(Chat, superclass).displayName = 'Chat', Chat), superclass).prototype, constructor = Chat;
  Chat.duration = 300;
  Chat.easing = 'easeOutExpo';
  Chat.chats = {};
  prototype.conversation = null;
  prototype.template = templates.Chat;
  prototype.rememberChat = function(){
    var chats, id, ref$;
    chats = JSON.parse($.cookie('chats') || '[]');
    id = (ref$ = this.conversation) != null ? ref$.id : void 8;
    if (chats.indexOf(id) === -1 && id) {
      chats.push(id);
      return $.cookie('chats', JSON.stringify(chats), {
        path: '/'
      });
    } else {
      return console.warn(chats.indexOf(id), id);
    }
  };
  prototype.forgetChat = function(){
    var chats, id, ref$, i;
    chats = JSON.parse($.cookie('chats') || '[]');
    id = (ref$ = this.conversation) != null ? ref$.id : void 8;
    i = chats.indexOf(id);
    if (i !== -1 && id) {
      chats.splice(i, 1);
      return $.cookie('chats', JSON.stringify(chats), {
        path: '/'
      });
    } else {
      return console.warn(chats.indexOf(id), id);
    }
  };
  prototype.onAttach = function(){
    this.$.draggable({
      snap: 'footer',
      snapMode: 'outer',
      cursor: 'move',
      start: function(ev){
        return $(ev.target).find('.minimize').addClass('no-click');
      }
    }).css({
      left: 50,
      bottom: 335
    });
    this.$.on('click', '.minimize', this.minimize);
    this.$.on('click', '.close', this.close);
    this.$.on('keydown', 'textarea', this.sendMessage);
    return this.$.find('.messages').scroll(this.maybeLoadMore);
  };
  prototype.onDetach = function(){};
  prototype.key = function(){
    var ref$, me, others;
    ref$ = [this.state.me.val, this.state.others.val], me = ref$[0], others = ref$[1];
    return me.name + "/" + others.map(function(it){
      return it.name;
    }).join('/');
  };
  prototype.users = function(){
    return fold(function(m, u){
      m[u.id] = u;
      return m;
    }, {})(
    flatten([this.state.me.val, this.state.others.val]));
  };
  prototype.messageFromEnv = function(){
    var u, ref$, ref1$, m;
    u = (ref$ = this.state) != null ? (ref1$ = ref$.others) != null ? (ref$ = ref1$.val) != null ? ref$[0] : void 8 : void 8 : void 8;
    return m = {
      conversation_id: (ref$ = this.conversation) != null ? ref$.id : void 8,
      from: window.user,
      to: {
        id: u.id,
        name: u.name
      },
      body: this.$.find('textarea').val()
    };
  };
  prototype.messageNode = function(m){
    var $msg, myName, ref$, ref1$;
    console.warn('m', m);
    $msg = this.$.find('.container > .msg').clone();
    $msg.attr('data-message-id', m.id);
    if (m.created_human) {
      $msg.find('.body').attr('title', m.created_human.replace(/<.*?\/?>/g, '')).attr('data-time', m.created_iso).addClass('time-title').html(m.body);
    } else {
      console.warn("missing m.created_human", m);
      $msg.find('.body').html(m.body);
    }
    $msg.find('a.from-name').attr('href', "/user/" + m.from.name).html(m.from.name);
    myName = (ref$ = this.state.me) != null ? (ref1$ = ref$.val) != null ? ref1$.name : void 8 : void 8;
    if (m.from.name !== myName) {
      $msg.addClass('other');
    }
    return $msg;
  };
  prototype.sendMessage = function(ev){
    var m, this$ = this;
    if (ev.keyCode === 13) {
      m = this.messageFromEnv();
      console.log('m', m);
      if (m.body.match(/^\s*$/)) {
        return false;
      }
      return socket.emit('chat-message', m, function(err, r){
        if (err) {
          console.error(err);
          return;
        }
        if (this$.conversation === null) {
          this$.conversation = r.conversation;
        }
        console.log('r', r);
        m.id = r.message.id;
        m.body = r.message.body;
        console.log('r', r.message);
        return this$.appendMessage(m);
      });
    }
  };
  prototype.appendMessage = addMessage('append');
  prototype.prependMessage = addMessage('prepend');
  prototype.maybeLoadMore = function(ev){
    var pos;
    if (this.loadedAll) {
      return false;
    }
    pos = $(ev.target).scrollTop();
    if (pos === 0) {
      return this.loadMoreMessages();
    }
  };
  prototype.loadMoreMessages = function(last){
    var $firstMsg, this$ = this;
    $firstMsg = this.$.find('.messages .msg:first');
    last || (last = $firstMsg.data('message-id'));
    return $.get("/resources/conversations/" + this.conversation.id, {
      last: last
    }, function(r){
      var id, ref$, users;
      if (r.success) {
        id = (ref$ = r.messages[0]) != null ? ref$.id : void 8;
        if (!id || id >= last) {
          this$.loadedAll = true;
          return;
        }
        users = this$.users();
        each(function(it){
          return this$.prependMessage(it);
        })(
        map(function(it){
          it.from = users[it.user_id];
          return it;
        })(
        r.messages));
        return this$.$.find('.messages').scrollTop(0 + 50);
      }
    });
  };
  prototype.minimize = function(ev){
    var e;
    e = $(ev.target);
    if (e.hasClass('no-click')) {
      return e.removeClass('no-click');
    } else {
      this.$.toggleClass('minimized');
      return this.$.find('textarea').focus();
    }
  };
  prototype.close = function(){
    var key, this$ = this;
    key = this.key();
    Chat.stop(this.key());
    return socket.emit('chat-leave', this.conversation, function(err, r){});
  };
  function Chat(){
    this.close = bind$(this, 'close', prototype);
    this.minimize = bind$(this, 'minimize', prototype);
    this.loadMoreMessages = bind$(this, 'loadMoreMessages', prototype);
    this.maybeLoadMore = bind$(this, 'maybeLoadMore', prototype);
    this.sendMessage = bind$(this, 'sendMessage', prototype);
    this.messageNode = bind$(this, 'messageNode', prototype);
    this.messageFromEnv = bind$(this, 'messageFromEnv', prototype);
    this.users = bind$(this, 'users', prototype);
    this.key = bind$(this, 'key', prototype);
    this.onDetach = bind$(this, 'onDetach', prototype);
    this.onAttach = bind$(this, 'onAttach', prototype);
    Chat.superclass.apply(this, arguments);
  }
  return Chat;
}(Component));
Chat.start = function(users, messages, x, y){
  var me, others, key, c, $div;
  me = users[0], others = slice$.call(users, 1);
  messages == null && (messages = []);
  x == null && (x = null);
  y == null && (y = null);
  key = join('/')(
  map(function(it){
    return it.name;
  }, users));
  if (c = this.chats[key]) {
    return c;
  }
  $div = $('<div/>').hide();
  c = this.chats[key] = new Chat({
    locals: {
      me: me,
      others: others
    }
  }, $div);
  if (x || y) {
    setTimeout(function(){
      return $div.show(this.duration, this.easing).css({
        top: '',
        left: ''
      }).transition({
        bottom: y,
        right: x
      });
    }, 2000);
  } else {
    c.$.show();
  }
  $('#chat_drawer').after(c.$);
  return $.post('/resources/conversations', {
    site_id: window.siteId,
    users: users
  }, function(r){
    var i$, len$, m;
    console.log('r', r);
    if (r.messages.length > 0 && messages.length === 0) {
      messages = r.messages;
    }
    for (i$ = 0, len$ = messages.length; i$ < len$; ++i$) {
      m = messages[i$];
      c.prependMessage(m);
    }
    c.$.find('textarea').focus();
    c.conversation = r;
    c.rememberChat();
    return c;
  });
};
Chat.stop = function(key){
  var c, this$ = this;
  c = this.chats[key];
  if (!c) {
    return;
  }
  return c.$.fadeOut(this.duration, function(){
    var ref$, ref1$;
    c.$.empty().remove();
    this$.reorganize();
    c.forgetChat();
    return ref1$ = (ref$ = this$.chats)[key], delete ref$[key], ref1$;
  });
};
Chat.reorganize = function(){
  var $cs, width, n;
  $cs = $('#chat_drawer .Chat');
  width = $cs.first().width();
  n = $cs.length;
  return $cs.each(function(i, e){
    var right;
    right = (n - i - 1) * (width + 8) + 8;
    return $(e).transition({
      right: right
    }, this.duration, this.easing);
  });
};
Chat.remember = function(){
  var ids, x, y, i$, len$, id, results$ = [];
  ids = JSON.parse($.cookie('chats') || '[]');
  x = 0 + 8;
  y = $('footer').height() - 14;
  for (i$ = 0, len$ = ids.length; i$ < len$; ++i$) {
    id = ids[i$];
    console.log('chat-join-and-open', id);
    results$.push(fn$());
  }
  return results$;
  function fn$(){
    return $.get("/resources/conversations/" + id, function(c){
      var meFirst, people, chat;
      console.log('c', c);
      if (c) {
        meFirst = function(a, b){
          var ref$;
          switch (false) {
          case a.name !== ((ref$ = window.user) != null ? ref$.name : void 8):
            return -1;
          default:
            return 1;
          }
        };
        people = sortWith(meFirst, c.participants);
        console.log('x-y', x, y);
        chat = Chat.start(people, c.messages, x, y);
        return x = x + 220 + 8;
      } else {
        return console.warn('no-chat', id);
      }
    });
  }
};
Chat.clientSocketInit = function(socket){
  var this$ = this;
  socket.on('chat-open', function(conversation, cb){
    console.warn("received request to open chat " + conversation.id, conversation);
    return socket.emit('chat-join', conversation, function(err, c2){
      var meFirst, people, names, key, c;
      console.log('after-chat-join', err, c2);
      meFirst = function(a, b){
        var ref$;
        switch (false) {
        case a.name !== ((ref$ = window.user) != null ? ref$.name : void 8):
          return -1;
        default:
          return 1;
        }
      };
      people = sortWith(meFirst, conversation.participants);
      names = map(function(it){
        return it.name;
      }, people);
      key = names.join('/');
      console.log('kkk', key, Chat.chats[key]);
      if (Chat.chats[key]) {
        return;
      }
      c = Chat.start(people, conversation.messages);
      console.warn('after-chat-start');
      c.conversation = conversation;
      c.room = c2.room;
      return console.warn('end-of-chat-open', c === Chat.chats[key], c);
    });
  });
  socket.on('chat-message', function(msg, cb){
    var c;
    console.log('incoming-chat', msg);
    if (msg.from.id === (typeof user != 'undefined' && user !== null ? user.id : void 8)) {
      return;
    }
    c = Obj.find(function(it){
      var ref$;
      return ((ref$ = it.conversation) != null ? ref$.id : void 8) === msg.conversation_id;
    }, Chat.chats);
    if (c) {
      return c.appendMessage(msg);
    } else {
      return console.warn('chat-message', 'c not found', msg);
    }
  });
  return Chat.remember();
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"yacomponent":26}],23:[function(require,module,exports){
/*
export example =
  A:
    a: "B"
    b: "C"
  B:
    a: "A"
    b: "C"
  C:
    a: "C"
    b: "C"
*/
var newState, out$ = typeof exports != 'undefined' && exports || this;
out$.newState = newState = function(machine, state, inputs){
  var transition;
  transition = function(s, i){
    return machine[s][i];
  };
  return fold(transition, state, inputs);
};
},{}],25:[function(require,module,exports){

module.exports = jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

jade.templates = {};
jade.render = function(node, template, data) {
  var tmp = jade.templates[template](data);
  node.innerHTML = tmp;
};

jade.templates["AdminMenu"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<li class="default"><div><input type="text" placeholder="Title" class="row"/></div></li><form');
buf.push(attrs({ 'action':("/resources/sites/" + (site.id) + ""), 'method':("put"), "class": ('menus') + ' ' + ('onclick-submit') }, {"action":true,"method":true}));
buf.push('><input type="hidden" name="action" value="menu"/><div class="col1"><button class="onclick-add">Add</button><ol class="sortable"></ol></div><div class="col2"><fieldset><label class="type">Type</label><ul class="options"><li><label for="forum" class="header">Forum</label><input id="forum" type="radio" name="dialog" checked="checked" class="option"/><div class="dialog"><label for="forum_slug">Slug</label><input id="forum_slug" type="text" name="forumSlug"/><div class="note">URL suffix for this page</div><div class="break"></div><label for="locked">Admin Only</label><div class="box"><input id="locked" type="checkbox" value="checked" name="locked"/><label for="locked" class="switch-control"><div class="switch"></div></label><span class="label checked">Locked</span><div class="note">Lock entire forum (read-only except admin)</div></div><div class="break">   </div><label for="comments">Comments</label><div class="box"><input id="comments" type="checkbox" value="checked" name="comments"/><label for="comments" class="switch-control"><div class="switch"></div></label><span class="label checked">Yes</span><div class="note">Commentable forums are threaded like Reddit</div></div><div class="break">   </div><button type="submit" value="Save">Save</button><div class="tooltip"></div></div></li><li><label for="page" class="header">Page</label><input id="page" type="radio" name="dialog" class="option"/><div class="dialog"><label for="page_slug">Slug</label><input id="page_slug" type="text" name="pageSlug"/><div class="note">URL suffix for this page</div><div class="break"></div><label>Main Menu</label><div class="box"><input id="hide_menu" type="checkbox" value="checked" name="hideMenu"/><label for="hide_menu" class="switch-control"><div class="switch"></div></label><span class="label checked">On</span><div class="note">Shows &amp; hides the main menu for this page</div></div><div class="break"></div><label for="body">Body</label><textarea id="body" name="body"></textarea><div class="note">Paste the contents of the page above</div><div class="break">   </div><button type="submit" value="Save">Save</button><div class="tooltip"></div></div></li><li><label for="link" class="header">External Link</label><input id="link" type="radio" name="dialog" class="option"/><div class="dialog"><label for="url">Url</label><input id="url" type="text" name="url" placeholder="http://"/><div class="break"></div><label for="separate_tab">Separate Tab</label><div class="box"><input id="separate_tab" type="checkbox" value="checked" name="separateTab"/><label for="separate_tab" class="switch-control"><div class="switch"></div></label><span class="label checked">Yes</span><div class="note">Open link in separate window</div></div><div class="break">   </div><button type="submit" value="Save">Save</button><div class="tooltip"></div></div></li></ul></fieldset></div></form>');
}
return buf.join("");
}
jade.templates["AdminUpgrade"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var product_mixin = function(p, msg){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
if ( subscriptions.indexOf(p)==-1)
{
buf.push('<div');
buf.push(attrs({ "class": ("" + (p) + "-available") }, {"class":true}));
buf.push('><button');
buf.push(attrs({ 'type':('button'), 'data-product':(p), 'value':('Get It'), "class": ('onclick-buy') }, {"type":true,"data-product":true,"value":true}));
buf.push('>Get It</button></div><div');
buf.push(attrs({ "class": ("" + (p) + "-purchased hidden") }, {"class":true}));
buf.push('><p class="green">');
var __val__ = msg
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<span>&#x2713;</span></p></div>');
}
else
{
buf.push('<div');
buf.push(attrs({ "class": ("" + (p) + "-available hidden") }, {"class":true}));
buf.push('><button');
buf.push(attrs({ 'type':('button'), 'data-product':(p), 'value':('Get It'), "class": ('onclick-buy') }, {"type":true,"data-product":true,"value":true}));
buf.push('>Get It</button></div><div');
buf.push(attrs({ "class": ("" + (p) + "-purchased") }, {"class":true}));
buf.push('><p class="green">');
var __val__ = msg
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<span>&#x2713;</span></p></div>');
}
};
buf.push('<fieldset><h2>Custom Domain</h2><p>Add your own personal flair!  Get serious and aim any domain at your PowerBulletin site.</p>');
product_mixin('custom_domain', 'Custom Domain Purchased');
buf.push('<div class="notes"><a href="/admin/domains" class="mutant">Click here to bring your domains online!</a></div></fieldset><fieldset><h2>Go Private</h2><p>Privacy?  We got you covered.  This feature hides your content from Search Engines and the public.</p>');
product_mixin('private', 'Private Site Purchased');
buf.push('<div class="notes"><a href="/admin" class="mutant">Click here to toggle privacy settings!</a></div></fieldset><fieldset><h2>Analytics</h2><p>Your enterprising PowerBulletin community is bustling!  Know who, where and how with your favorite analytics tracker.</p>');
product_mixin('analytics', 'Analytics Purchased');
buf.push('<div class="notes"><a href="/admin" class="mutant">Get started with analytics here!</a></div></fieldset><fieldset><h2>Super Computing Instance</h2><p>Your site really took off and you\'d like more horsepower--speed is everything!  With your turbo-charged instance comes additional security, monitoring and peace of mind.</p>');
product_mixin('compute_instance', 'Super Computing Instance Purchased');
buf.push('<div class="notes"><p>A PowerBulletin team member will contact you after purchase!</p></div></fieldset><fieldset><h2>Engineering &amp; Creative</h2><p>Need extra personalization for your PowerBulletin community?  Our engineering ninjas entertain inventive ideas!</p>');
product_mixin('engineering', 'Engineering Purchased');
buf.push('<div class="notes"><p>A PowerBulletin team member will contact you after purchase!</p></div></fieldset>');
}
return buf.join("");
}
jade.templates["Auth"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div style="display:none;" class="reset"><form method="post" action="/auth/reset-password"><label for="password"><h2>Authenticating...</h2></label><fieldset><div class="tooltip"></div><input id="password" name="password" type="text" placeholder="Password" disabled="disabled" autocomplete="off"/><div class="toggle-password">Hide</div><div title="Stronger passwords are green" class="strength-meter"><div class="strength"></div></div><input type="hidden" name="forgot"/><button type="submit" value="Save" disabled="disabled">Save</button><a class="msg onclick-show-login"><h3>Back</h3></a></fieldset></form></div><div style="display:none;" class="choose"><form method="post" action="/auth/choose-username"><label for="username"><h2>Choose a User Name<i>!</i></h2></label><fieldset><div class="tooltip"></div><input id="username" name="username" type="text" placeholder="Username"/><button type="submit" value="Save">Save</button><a class="msg onclick-show-login"><h3>Back</h3></a></fieldset></form></div><div style="display:none;" class="forgot"><form method="post" action="/auth/forgot"><label for="email"><h2>Tell Us Your Email Address<i>!</i></h2></label><fieldset><div class="tooltip"></div><input id="email" name="email" type="text" placeholder="Email" maxlength="254"/><button type="submit" value="Send Reset">Send Reset</button><a class="msg onclick-show-login"><h3>Back</h3></a></fieldset></form></div><div style="display:none;" class="dialog"><h2 id="msg">Check your inbox for activation<i>!</i></h2><div class="msg2"></div><a class="msg onclick-close-fancybox"><h3>Close</h3></a></div><div style="display:none;" class="register"><form method="post" action="/auth/register"><label for="username"><h2>Welcome<i>!</i></h2></label><fieldset><div class="tooltip"></div><input id="username" name="username" type="text" placeholder="Username"/><input name="password" type="text" placeholder="Password" autocomplete="off"/><div class="toggle-password">Hide</div><div title="Stronger passwords are green" class="strength-meter"><div class="strength"></div></div><input name="email" type="text" placeholder="Email" maxlength="254" class="register-email"/><button type="submit" value="Register">Register</button><a class="msg onclick-show-login"><h3>I already have an account</h3></a></fieldset></form></div><div class="login"><form method="post" action="/auth/login"><label for="username"><h2>');
var __val__ = siteName
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h2></label><fieldset><a class="fmsg msg onclick-show-forgot"><h3>Forgot?</h3></a><div class="tooltip"></div><input id="username" name="username" type="text" placeholder="Username"/><input name="password" type="password" placeholder="Password" autocomplete="off"/><button type="submit" value="Login">Login</button>');
if (!( inviteOnly))
{
buf.push('<a class="msg onclick-show-register"><h3>Register<i>!</i></h3></a>');
}
buf.push('<a class="small msg onclick-show-forgot"><h3>Help<i>?</i></h3></a></fieldset></form>');
if (!( inviteOnly))
{
buf.push('<div class="social has-auth"><h3>Or Log In With</h3><a href="/auth/facebook" title="Facebook!" class="has-facebook"> <img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/facebook_32.png") }, {"src":true}));
buf.push('/></a><a href="/auth/google" title="Google+" class="has-google"> <img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/google_32.png") }, {"src":true}));
buf.push('/></a><a href="/auth/twitter" title="Twitter!" class="has-twitter"> <img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/twitter_32.png") }, {"src":true}));
buf.push('/></a></div>');
}
buf.push('</div>');
}
return buf.join("");
}
jade.templates["Buy"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var price = ((product.price / 100.0).toFixed(0));
buf.push('<h1>' + escape((interp = product.description) == null ? '' : interp) + '</h1><div class="right ccinfo"><form autocomplete="off"><div class="tooltip"></div>');
if ( cardNeeded)
{
buf.push('<div class="clear"></div><label for="card_number">Card Number</label><input id="card_number" type="text" placeholder="XXXX - XXXX - XXXX - XXXX" maxlength="19" class="Buy-card-number"/><div class="clear"></div><label for="card_month">Expiration</label><select id="card_month" class="Buy-card-month"><option disabled="disabled" selected="selected">- Month -</option><option value="1">Jan - 1</option><option value="2">Feb - 2</option><option value="3">Mar - 3</option><option value="4">Apr - 4</option><option value="5">May - 5</option><option value="6">Jun - 6</option><option value="7">Jul - 7</option><option value="8">Aug - 8</option><option value="9">Sept - 9</option><option value="10">Oct - 10</option><option value="11">Nov - 11</option><option value="12">Dec - 12</option></select><small>/</small><select id="card_year" class="Buy-card-year"><option disabled="disabled" selected="selected">- Year -</option>');
var d = (new Date().getFullYear());
 for (var i=0; i<=16; i++)
{
buf.push('<option>');
var __val__ = d + i
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
}
buf.push('</select><div class="clear"></div><label for="card_code">Security Code</label><input id="card_code" type="password" placeholder="CCV" maxlength="5" class="Buy-card-code"/><span class="code">?<div class="cvvinfo"><img');
buf.push(attrs({ 'src':(cacheUrl + '/images/cvv2_example.gif') }, {"src":true}));
buf.push('/><img');
buf.push(attrs({ 'src':(cacheUrl + '/images/cvv2_example_amex.gif') }, {"src":true}));
buf.push('/></div></span>');
}
else
{
buf.push('<h3>Your payment information is Ready-to-Go<i>!</i></h3><a href="#" class="Buy-change-card">Enter different credit card details</a><div class="clear"></div><em>Saves for all subscriptions</em>');
}
buf.push('<div class="clear"><button type="submit" value="CHECKOUT" class="Buy-checkout">CHECKOUT</button></div></form></div><div class="right features">');
if ( price && (price !== '0'))
{
buf.push('<h2>Only <b><small>$</small>');
var __val__ = price
buf.push(null == __val__ ? "" : __val__);
buf.push('</b><small>/mo</small></h2>');
}
else
{
buf.push('<h2><b>Free<i>!</i></b></h2>');
}
buf.push('<menu>');
// iterate product.config.features
;(function(){
  if ('number' == typeof product.config.features.length) {
    for (var $index = 0, $$l = product.config.features.length; $index < $$l; $index++) {
      var f = product.config.features[$index];

buf.push('<li>');
var __val__ = f
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
    }
  } else {
    for (var $index in product.config.features) {
      var f = product.config.features[$index];

buf.push('<li>');
var __val__ = f
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
   }
  }
}).call(this);

buf.push('</menu></div><div class="cards"><div class="jcb"></div><div class="dinersclub"></div><div class="discover"></div><div class="amex"></div><div class="mastercard"></div><div class="visa"></div></div>');
}
return buf.join("");
}
jade.templates["Chat"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="header"><div class="profile"><div');
buf.push(attrs({ 'title':(others[0].name), "class": ('minimize') }, {"title":true}));
buf.push('>');
if ( others[0].photo.match(/^https?\:/) || others[0].photo.match(/\/\//))
{
buf.push('<img');
buf.push(attrs({ 'src':(others[0].photo) }, {"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (others[0].photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></div><h2>' + escape((interp = others[0].name) == null ? '' : interp) + '</h2><div title="Close" class="close onclick-close">X</div></div><div class="container"><div class="messages"><div style="display:none;" class="load-more">load more...</div></div><div style="display:none;" class="msg"><div class="from"><a class="from-name mutant"></a></div><div class="body"></div></div></div><div class="footer"><form><textarea name="body"></textarea></form></div>');
}
return buf.join("");
}
jade.templates["Paginator"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
if ( pages.length >= 2)
{
// iterate pages
;(function(){
  if ('number' == typeof pages.length) {
    for (var $index = 0, $$l = pages.length; $index < $$l; $index++) {
      var p = pages[$index];

if ( p.active)
{
buf.push('<strong class="Paginator-page">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</strong>');
}
else
{
buf.push('<a');
buf.push(attrs({ 'href':(p.href), 'data-page':(p.num), "class": ('mutant') + ' ' + ('Paginator-page') }, {"href":true,"data-page":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a>');
}
    }
  } else {
    for (var $index in pages) {
      var p = pages[$index];

if ( p.active)
{
buf.push('<strong class="Paginator-page">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</strong>');
}
else
{
buf.push('<a');
buf.push(attrs({ 'href':(p.href), 'data-page':(p.num), "class": ('mutant') + ' ' + ('Paginator-page') }, {"href":true,"data-page":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a>');
}
   }
  }
}).call(this);

}
}
return buf.join("");
}
jade.templates["PhotoCropper"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="upload"><h1>');
var __val__ = title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><div><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (photo) + "") }, {"src":true}));
buf.push('/></div><div><form');
buf.push(attrs({ 'method':("POST"), 'action':("" + (endpointUrl) + ""), 'enctype':("multipart/form-data") }, {"method":true,"action":true,"enctype":true}));
buf.push('><div class="button"> <span>Upload Image</span><input type="file" name="avatar"/></div></form></div></div><div style="display:none;" class="crop"><h1>');
var __val__ = title + " (crop)"
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><div><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (photo) + "") }, {"src":true}));
buf.push('/></div><div class="button"><span>Crop Image</span></div></div>');
}
return buf.join("");
}
jade.templates["Sales"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="logo"><h1>Power<b>Bulletin</b></h1><em>The Official Real-Time Community Builder</em></div><h2 id="imagine" class="stick">Imagine real-time communities at the click of a button.</h2><div id="register_top"></div><h2 id="features" class="stick">Why you\'ll love PowerBulletin ...</h2><section class="translucent stick"><article><h4>Breakthrough Navigation</h4><p>From SEO technology that speedily transmits page delta instead of reloading browsers,\nto a split-thread &amp; post interface, the PowerBulletin experience is always secure, fast &amp; fluid.</p></article></section><section class="bg first"></section><section class="stick"><article><h4>Unmatched Responsive Design</h4><p>A modern, responsive interface that scales from to your phone,\ntablet and PC to wide-screen projectors--your PowerBulletin community always stuns.</p></article></section><section class="bg second"></section><section class="stick"><article><h4>Real-Time Flow</h4><p>Ultrafast PowerBulletin is built on a real-time engine that powers\neverything from user chat &amp; posts to administration, such as creating products.</p></article></section><section class="bg third"></section><section class="stick"><article><h4>Products &amp; e-Commerce Capabilities</h4><p>Sell your business products &amp; services around PowerBulletin communities.\nOffering e-commerce is so easy to use, it\'s easy to love.</p></article></section><section class="bg fourth"></section><section class="stick"><article><h4>Live Support</h4><p>Knowledge is PowerBulletin!  With<a href="mailto:support@powerbulletin.com">direct access to our team</a>of friendly developers &amp; designers\nthere\'s almost no limit to what you can build.</p></article></section><section class="last"><article><div id="register_bottom"></div></article></section><section id="faq" class="faq"><article><h3>FAQ</h3><menu><li><h4>Can I change the look of PowerBulletin?</h4><p>Absolutely!  We provide a solid default theme to get started quickly.\nAnything is possible with your stylish eye:<a href="http://www.w3schools.com/cssref/" target="_blank">CSS</a>&amp;<a href="http://learnboost.github.io/stylus/" target="_blank">Stylus</a>are supported.</p></li></menu><menu><li><h4>Contact</h4><p>We\'re here for YOU:<a href="mailto:support@powerbulletin.com">support@powerbulletin.com</a></p></li></menu></article></section><footer><div class="onclick-scroll-top">Top</div></footer>');
}
return buf.join("");
}
jade.templates["SalesApp"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<header><ul><li><a data-scroll-to="#features" class="onclick-scroll-to">Features</a></li><li><a data-scroll-to="#faq" class="onclick-scroll-to">FAQ</a></li><li class="auth"><a class="onclick-login">Login</a><a style="display:none;" class="onclick-logout">Logout</a></li></ul></header><div id="wrapper" class="SalesApp-content"></div><div id="auth"></div>');
}
return buf.join("");
}
jade.templates["SalesLoader"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<!DOCTYPE html><html><head><title>PowerBulletin</title>');
// iterate stylesheets
;(function(){
  if ('number' == typeof stylesheets.length) {
    for (var $index = 0, $$l = stylesheets.length; $index < $$l; $index++) {
      var stylesheet = stylesheets[$index];

buf.push('<link');
buf.push(attrs({ terse: true, 'rel':('stylesheet'), 'type':('text/css'), 'href':(stylesheet) }, {"rel":true,"type":true,"href":true}));
buf.push('>');
    }
  } else {
    for (var $index in stylesheets) {
      var stylesheet = stylesheets[$index];

buf.push('<link');
buf.push(attrs({ terse: true, 'rel':('stylesheet'), 'type':('text/css'), 'href':(stylesheet) }, {"rel":true,"type":true,"href":true}));
buf.push('>');
   }
  }
}).call(this);

buf.push('<script');
buf.push(attrs({ terse: true, 'type':('text/javascript'), 'src':("" + (cacheUrl) + "/local/head-0.99.load.min.js") }, {"type":true,"src":true}));
buf.push('></script><script type="text/javascript">\n window.headjs = head.js\n window.env = \'' + ((interp = env) == null ? '' : interp) + '\'\n window.cacheUrl = \'' + ((interp = cacheUrl) == null ? '' : interp) + '\';\n window.siteName = \'PowerBulletin\';\n window.authDomain = \'' + ((interp = authDomain) == null ? '' : interp) + '\';\n head.js.apply(head, ' + ((interp = JSON.stringify(scripts)) == null ? '' : interp) + ');\n</script></head><body></body></html>');
}
return buf.join("");
}
jade.templates["SiteRegister"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h3>Start by creating a name now<i>!</i></h3><div class="tooltip SiteRegister-errors"></div><form class="site-register"><fieldset><input');
buf.push(attrs({ 'type':('text'), 'name':('subdomain'), 'value':(typeof subdomain != 'undefined' ? subdomain : ''), 'autocomplete':("off"), "class": ('SiteRegister-subdomain') }, {"type":true,"name":true,"value":true,"autocomplete":true}));
buf.push('/><span class="hostname">');
var __val__ = hostname
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><span class="SiteRegister-available"><div class="success">&#x2713;</div><div class="error">&#x2718;</div></span><div class="SiteRegister-create"></div></fieldset></form>');
}
return buf.join("");
}
},{"fs":27}],24:[function(require,module,exports){

module.exports = jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

jade.templates = {};
jade.render = function(node, template, data) {
  var tmp = jade.templates[template](data);
  node.innerHTML = tmp;
};

jade.templates["layout"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
 var invite = (inviteOnly) ? "window.inviteOnly='true';" : ''
buf.push('<!DOCTYPE html><!--\n░█▀█░█▀█░█░█░█▀▀░█▀▄░█▀▄░█░█░█░░░█░░░█▀▀░▀█▀░▀█▀░█▀█\n░█▀▀░█░█░█▄█░█▀▀░█▀▄░█▀▄░█░█░█░░░█░░░█▀▀░░█░░░█░░█░█\n░▀░░░▀▀▀░▀░▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀, jsb.mae.kh ~--><html><head>');
if ( typeof(title) !== 'undefined')
{
buf.push('<title>');
var __val__ = title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</title>');
}
if ( typeof(meta_description) !== 'undefined')
{
buf.push('<meta');
buf.push(attrs({ 'name':('description'), 'content':(meta_description) }, {"name":true,"content":true}));
buf.push('/>');
}
if ( typeof(meta_keywords) !== 'undefined')
{
buf.push('<meta');
buf.push(attrs({ 'name':('keywords'), 'content':(meta_keywords.join(', ')) }, {"name":true,"content":true}));
buf.push('/>');
}
if ( typeof(meta_zipcode) !== 'undefined')
{
buf.push('<meta');
buf.push(attrs({ 'name':('zipcode'), 'content':(meta_zipcode) }, {"name":true,"content":true}));
buf.push('/>');
}
buf.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9,chrome=1"/><meta name="robots" content="index, follow"/><meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="black"/><meta name="viewport" content="user-scalable=0, initial-scale=1, maximum-scale=1, width=device-width"/><link');
buf.push(attrs({ 'href':("" + (cacheUrl) + "/images/favicon.ico"), 'rel':('shortcut icon'), 'type':('image/x-icon') }, {"href":true,"rel":true,"type":true}));
buf.push('/><link');
buf.push(attrs({ 'href':("" + (cache2Url) + "/images/apple-touch-icon.png"), 'rel':('apple-touch-icon') }, {"href":true,"rel":true}));
buf.push('/><link');
buf.push(attrs({ 'href':("" + (cache3Url) + "/images/apple-touch-icon-72x72.png"), 'sizes':("72x72"), 'rel':('apple-touch-icon') }, {"href":true,"sizes":true,"rel":true}));
buf.push('/><link');
buf.push(attrs({ 'href':("" + (cache4Url) + "/images/apple-touch-icon-114x114.png"), 'sizes':("114x114"), 'rel':('apple-touch-icon') }, {"href":true,"sizes":true,"rel":true}));
buf.push('/><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400" rel="stylesheet" type="text/css"/>');
if ( cssUrls)
{
// iterate cssUrls
;(function(){
  if ('number' == typeof cssUrls.length) {
    for (var $index = 0, $$l = cssUrls.length; $index < $$l; $index++) {
      var obj = cssUrls[$index];

buf.push('<link');
buf.push(attrs({ 'rel':('stylesheet'), 'type':('text/css'), 'href':(obj.url) }, {"rel":true,"type":true,"href":true}));
buf.push('/>');
    }
  } else {
    for (var $index in cssUrls) {
      var obj = cssUrls[$index];

buf.push('<link');
buf.push(attrs({ 'rel':('stylesheet'), 'type':('text/css'), 'href':(obj.url) }, {"rel":true,"type":true,"href":true}));
buf.push('/>');
   }
  }
}).call(this);

}
buf.push('<link');
buf.push(attrs({ 'href':("" + (cache5Url) + "/sites/" + (currentDomain) + ".css"), 'rel':('stylesheet'), 'type':('text/css') }, {"href":true,"rel":true,"type":true}));
buf.push('/>');
if ( style)
{
buf.push('<link');
buf.push(attrs({ 'href':("/sites/" + (siteId) + ".css"), 'rel':('stylesheet'), 'type':('text/css') }, {"href":true,"rel":true,"type":true}));
buf.push('/>');
}
if ( cvars.env != 'production')
{
buf.push('<script');
buf.push(attrs({ 'type':('text/javascript'), 'src':("" + (cache5Url) + "/local/head-0.99.load.min.js") }, {"type":true,"src":true}));
buf.push('></script>');
}
else
{
buf.push('<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/headjs/0.99/head.load.min.js"></script>');
}
if ( jsUrls)
{
buf.push('<script type="text/javascript">window.siteName="' + ((interp = siteName) == null ? '' : interp) + '";window.siteId=' + ((interp = siteId) == null ? '' : interp) + ';' + ((interp = invite) == null ? '' : interp) + 'window.initialMutant=' + ((interp = JSON.stringify(initialMutant)) == null ? '' : interp) + ';window.cacheUrl=' + ((interp = JSON.stringify(cvars.cacheUrl)) == null ? '' : interp) + ';window.authDomain="' + ((interp = cvars.authDomain) == null ? '' : interp) + '";window.headjs=head.js;head.js.apply(head,' + ((interp = JSON.stringify(cvars.baseJsUrls.concat(jsUrls))) == null ? '' : interp) + ');</script>');
}
buf.push('</head><body><header class="header toggler"><h1 class="logo"><a href="/" class="mutant">Power<strong>Bulletin</strong></a></h1><div class="container"><div class="search"><input id="query" type="text" placeholder="Search" autocomplete="off" class="query"/><div title="Close!" class="onclick-close toggler">x</div></div><div id="warning" class="tooltip"></div><div class="menu-container"><menu id="menu" class="menu">');
// iterate menu
;(function(){
  if ('number' == typeof menu.length) {
    for (var i = 0, $$l = menu.length; i < $$l; i++) {
      var f = menu[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'data-surf':(f.id), 'data-scroll-to':("#forum_" + (f.id) + ""), 'href':("/" + (f.slug) + ""), "class": ('title') + ' ' + ("forum-" + (f.id) + "") }, {"class":true,"data-surf":true,"data-scroll-to":true,"href":true}));
buf.push('>');
var __val__ = f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a>');
if ( f.forums.length)
{
buf.push('<div class="submenu"><menu>');
// iterate f.forums
;(function(){
  if ('number' == typeof f.forums.length) {
    for (var i = 0, $$l = f.forums.length; i < $$l; i++) {
      var sf = f.forums[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'href':(sf.uri), "class": ('mutant') + ' ' + ("forum-" + (sf.id) + "") }, {"class":true,"href":true}));
buf.push('>');
var __val__ = sf.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></li>');
    }
  } else {
    for (var i in f.forums) {
      var sf = f.forums[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'href':(sf.uri), "class": ('mutant') + ' ' + ("forum-" + (sf.id) + "") }, {"class":true,"href":true}));
buf.push('>');
var __val__ = sf.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></li>');
   }
  }
}).call(this);

buf.push('</menu></div>');
}
buf.push('</li>');
    }
  } else {
    for (var i in menu) {
      var f = menu[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'data-surf':(f.id), 'data-scroll-to':("#forum_" + (f.id) + ""), 'href':("/" + (f.slug) + ""), "class": ('title') + ' ' + ("forum-" + (f.id) + "") }, {"class":true,"data-surf":true,"data-scroll-to":true,"href":true}));
buf.push('>');
var __val__ = f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a>');
if ( f.forums.length)
{
buf.push('<div class="submenu"><menu>');
// iterate f.forums
;(function(){
  if ('number' == typeof f.forums.length) {
    for (var i = 0, $$l = f.forums.length; i < $$l; i++) {
      var sf = f.forums[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'href':(sf.uri), "class": ('mutant') + ' ' + ("forum-" + (sf.id) + "") }, {"class":true,"href":true}));
buf.push('>');
var __val__ = sf.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></li>');
    }
  } else {
    for (var i in f.forums) {
      var sf = f.forums[i];

buf.push('<li class="row"><a');
buf.push(attrs({ 'href':(sf.uri), "class": ('mutant') + ' ' + ("forum-" + (sf.id) + "") }, {"class":true,"href":true}));
buf.push('>');
var __val__ = sf.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></li>');
   }
  }
}).call(this);

buf.push('</menu></div>');
}
buf.push('</li>');
   }
  }
}).call(this);

buf.push('</menu></div><menu class="tools"><a class="profile photo mutant"><img id="profile"/></a><li class="onclick-login"><a href="/auth/login">Login</a></li><li class="admin-only"><a href="/admin" class="mutant">Admin</a></li><li><a href="/users" class="mutant onclick-profile">Profile</a></li><li class="onclick-logout"><a href="/auth/logout">Logout</a></li></menu></div></header><section id="left_content" class="left-content"><div id="handle" title="Toggle" class="handle"></div><div id="left_container"></div><div id="paginator" title="Go to this Page">');
if ( typeof page == 'number')
{
if ( page != 1)
{
if ( page != 2)
{
buf.push('<a');
buf.push(attrs({ 'title':('Previous Page'), 'href':("" + (furl.threadUri) + "/page/" + (page - 1) + ""), "class": ('page') + ' ' + ('previous') }, {"title":true,"href":true}));
buf.push('> </a>');
}
else
{
buf.push('<a');
buf.push(attrs({ 'title':('Previous Page'), 'href':("" + (furl.threadUri) + ""), "class": ('page') + ' ' + ('previous') }, {"title":true,"href":true}));
buf.push('> </a>');
}
}
else
{
buf.push('<a');
buf.push(attrs({ 'title':('Previous Page'), 'href':("" + (furl.threadUri) + ""), 'style':("display:none;"), "class": ('page') + ' ' + ('previous') }, {"title":true,"href":true,"style":true}));
buf.push('> </a>');
}
buf.push('<div title="Drag to Page through" class="current"><div class="tooltip right"></div></div>');
if ( page != pagesCount)
{
buf.push('<a');
buf.push(attrs({ 'title':('Next Page'), 'href':("" + (furl.threadUri) + "/page/" + (page + 1) + ""), "class": ('page') + ' ' + ('next') }, {"title":true,"href":true}));
buf.push('> </a>');
}
else
{
buf.push('<a');
buf.push(attrs({ 'title':('Next Page'), 'href':("" + (furl.threadUri) + "/page/" + (pagesCount) + ""), 'style':("display:none;"), "class": ('page') + ' ' + ('next') }, {"title":true,"href":true,"style":true}));
buf.push('> </a>');
}
}
else
{
buf.push('<a title="Previous Page" href="/" style="display:none;" class="page previous"> </a><div title="Drag to Page through" class="current"><div class="tooltip right"></div></div><a title="Next Page" href="/" style="display:none;" class="page next"> </a>');
}
buf.push('</div></section><section id="main_content" class="main-content container"></section><section class="extra"></section><section id="auth" style="display:none;"></section>');
if ( cvars.env != 'production')
{
buf.push('<div id="mocha"></div>');
}
buf.push('<footer class="onclick-footer-toggle"><div class="post-reply onclick-footer-toggle"></div><div class="onclick-scroll-top">Top</div><div id="pb_paginator"></div><h6 class="onclick-footer-toggle"><small>&copy; ' + escape((interp = siteName) == null ? '' : interp) + ' &nbsp;</small><b>');
var __val__ = new Date().getFullYear()
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</b></h6><div class="post-container"><form action="/resources/posts" method="post" class="post post-new"><div id="post_new"></div><div class="tooltip"></div></form></div></footer><div id="chat_drawer"></div><link');
buf.push(attrs({ 'href':("" + (cache5Url) + "/local/jquery-ui.min.css"), 'rel':('stylesheet'), 'type':('text/css') }, {"href":true,"rel":true,"type":true}));
buf.push('/>');
var __val__ = analytics
buf.push(null == __val__ ? "" : __val__);
buf.push('</body></html>');
}
return buf.join("");
}
jade.templates["homepage"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var media_post_mixin = function(f, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<img');
buf.push(attrs({ 'src':(f.media_url) }, {"src":true}));
buf.push('/>');
};
var html_post_mixin = function(f, t, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<p class="body">');
var __val__ = f.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
};
var posts_mixin = function(f, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
// iterate f.posts
;(function(){
  if ('number' == typeof f.posts.length) {
    for (var i = 0, $$l = f.posts.length; i < $$l; i++) {
      var p = f.posts[i];

buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), "class": ('post') + ' ' + ("col" + (Math.ceil(Math.random()*2)) + "") }, {"class":true,"id":true}));
buf.push('><a');
buf.push(attrs({ 'href':(p.uri), "class": ('mutant') }, {"href":true}));
buf.push('><h5 class="title">');
var __val__ = p.title
buf.push(null == __val__ ? "" : __val__);
buf.push('<span class="date">' + escape((interp = p.date) == null ? '' : interp) + '</span></h5></a>');
if ( p.media_url)
{
media_post_mixin(p, i);
}
else
{
html_post_mixin(p, i);
}
_post_profile_mixin(p, i);
buf.push('</div>');
    }
  } else {
    for (var i in f.posts) {
      var p = f.posts[i];

buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), "class": ('post') + ' ' + ("col" + (Math.ceil(Math.random()*2)) + "") }, {"class":true,"id":true}));
buf.push('><a');
buf.push(attrs({ 'href':(p.uri), "class": ('mutant') }, {"href":true}));
buf.push('><h5 class="title">');
var __val__ = p.title
buf.push(null == __val__ ? "" : __val__);
buf.push('<span class="date">' + escape((interp = p.date) == null ? '' : interp) + '</span></h5></a>');
if ( p.media_url)
{
media_post_mixin(p, i);
}
else
{
html_post_mixin(p, i);
}
_post_profile_mixin(p, i);
buf.push('</div>');
   }
  }
}).call(this);

};
if ( forums)
{
buf.push('<div');
buf.push(attrs({ "class": ('homepage') + ' ' + (activeForumId!='homepage'?'resizable forum':'') }, {"class":true}));
buf.push('>');
// iterate forums
;(function(){
  if ('number' == typeof forums.length) {
    for (var i = 0, $$l = forums.length; i < $$l; i++) {
      var f = forums[i];

buf.push('<div');
buf.push(attrs({ 'id':("forum_" + (f.id) + ""), "class": ('forum') + ' ' + (f.classes || '') }, {"class":true,"id":true}));
buf.push('><h2 class="title"><a');
buf.push(attrs({ 'href':(f.uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h2><a');
buf.push(attrs({ 'name':("forum_" + (f.id) + "") }, {"name":true}));
buf.push('></a><div class="container">');
posts_mixin(f, i);
buf.push('</div></div>');
    }
  } else {
    for (var i in forums) {
      var f = forums[i];

buf.push('<div');
buf.push(attrs({ 'id':("forum_" + (f.id) + ""), "class": ('forum') + ' ' + (f.classes || '') }, {"class":true,"id":true}));
buf.push('><h2 class="title"><a');
buf.push(attrs({ 'href':(f.uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h2><a');
buf.push(attrs({ 'name':("forum_" + (f.id) + "") }, {"name":true}));
buf.push('></a><div class="container">');
posts_mixin(f, i);
buf.push('</div></div>');
   }
  }
}).call(this);

buf.push('</div>');
}
else
{
buf.push('<p>Create a forum first<i>!</i></p>');
}
}
return buf.join("");
}
jade.templates["order-control"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="orderer"><div class="indicator"><!-- TODO -- , [\'nearest\', \'Nearby\']]-->');
var orders = ([['popular', 'Popular'], ['recent', 'Most Recent'], ['active', 'Most Active']]);
buf.push('</div><ul id="order">');
// iterate orders
;(function(){
  if ('number' == typeof orders.length) {
    for (var $index = 0, $$l = orders.length; $index < $$l; $index++) {
      var o = orders[$index];

if ( o[0] == active)
{
buf.push('<li');
buf.push(attrs({ 'data-value':(o[0]), "class": ('active') }, {"data-value":true}));
buf.push('>');
var __val__ = o[1]
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
}
else
{
buf.push('<li');
buf.push(attrs({ 'data-value':(o[0]) }, {"data-value":true}));
buf.push('>');
var __val__ = o[1]
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
}
    }
  } else {
    for (var $index in orders) {
      var o = orders[$index];

if ( o[0] == active)
{
buf.push('<li');
buf.push(attrs({ 'data-value':(o[0]), "class": ('active') }, {"data-value":true}));
buf.push('>');
var __val__ = o[1]
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
}
else
{
buf.push('<li');
buf.push(attrs({ 'data-value':(o[0]) }, {"data-value":true}));
buf.push('>');
var __val__ = o[1]
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</li>');
}
   }
  }
}).call(this);

buf.push('</ul><div class="onclick-scroll-top"></div></div>');
}
return buf.join("");
}
jade.templates["thread"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
_thread_mixin(thread);
}
return buf.join("");
}
jade.templates["nav"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
var subforum_mixin = function(f, sf, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<li class="subforum"><a');
buf.push(attrs({ 'href':(sf.uri), "class": ('mutant') + ' ' + ('title') + ' ' + ('stylish') }, {"href":true}));
buf.push('>');
var __val__ = sf.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></li>');
};
var forum_mixin = function(f, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<h3 class="title">Forums</h3>');
if ( f.forums)
{
buf.push('<ul');
buf.push(attrs({ "class": ('forum') + ' ' + ("" + (f.classes || '') + " forum-" + (activeForumId) + "") }, {"class":true}));
buf.push('>');
// iterate f.forums
;(function(){
  if ('number' == typeof f.forums.length) {
    for (var ii = 0, $$l = f.forums.length; ii < $$l; ii++) {
      var sf = f.forums[ii];

subforum_mixin(f, sf, ii);
    }
  } else {
    for (var ii in f.forums) {
      var sf = f.forums[ii];

subforum_mixin(f, sf, ii);
   }
  }
}).call(this);

buf.push('</ul>');
}
};
buf.push('<div class="create"><a');
buf.push(attrs({ 'data-edit':('true'), 'href':("" + (forum.uri) + "/new"), "class": ('mutant') + ' ' + ('no-surf') + ' ' + ('require-login') + ' ' + ('button') }, {"data-edit":true,"href":true}));
buf.push('>Create Thread</a></div><div id="thread-paginator"></div><div class="scrollable">');
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
buf.push('<ul class="threads">');
// iterate topThreads
;(function(){
  if ('number' == typeof topThreads.length) {
    for (var ii = 0, $$l = topThreads.length; ii < $$l; ii++) {
      var t = topThreads[ii];

_thread_mixin(t);
    }
  } else {
    for (var ii in topThreads) {
      var t = topThreads[ii];

_thread_mixin(t);
   }
  }
}).call(this);

buf.push('</ul></div>');
}
return buf.join("");
}
jade.templates["posts"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var _post_mixin = function(p, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), 'data-user-id':(p.user_id), 'data-post-id':(p.id), 'data-thread-id':(p.thread_id), 'data-forum-id':(p.forum_id), "class": ('post') + ' ' + (p.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true,"data-thread-id":true,"data-forum-id":true}));
buf.push('>');
if ( p.thread_uri)
{
buf.push('<h4 class="title"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h4>');
}
else
{
buf.push('<h4 class="title">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4>');
}
_post_profile_mixin(p);
buf.push('<div class="container"><span class="username">');
var __val__ = p.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><div');
buf.push(attrs({ 'data-time':(p.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = p.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="post-content">');
if ( p.html)
{
buf.push('<p class="body">');
var __val__ = p.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('</div></div>');
_post_actions_mixin(p);
buf.push('<div class="reply"></div></div><div class="children">');
if ( p.posts && p.posts.length)
{
// iterate p.posts
;(function(){
  if ('number' == typeof p.posts.length) {
    for (var ii = 0, $$l = p.posts.length; ii < $$l; ii++) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
    }
  } else {
    for (var ii in p.posts) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
   }
  }
}).call(this);

}
else if ( p.morePosts)
{
buf.push('<a href="#" class="load-more">More Posts</a>');
}
buf.push('</div>');
};
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _breadcrumb_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = ('');
var parts = (p.uri.split('/'));
var parts = (parts.splice(1, parts.length-2));
// iterate parts
;(function(){
  if ('number' == typeof parts.length) {
    for (var $index = 0, $$l = parts.length; $index < $$l; $index++) {
      var part = parts[$index];

if ( part != 't')
{
buf.push('<a');
buf.push(attrs({ 'href':("/" + (path) + "" + (part) + ""), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = part.replace('-', ' ')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a><span>/</span>');
}
 path = path + part + '/'
    }
  } else {
    for (var $index in parts) {
      var part = parts[$index];

if ( part != 't')
{
buf.push('<a');
buf.push(attrs({ 'href':("/" + (path) + "" + (part) + ""), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = part.replace('-', ' ')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a><span>/</span>');
}
 path = path + part + '/'
   }
  }
}).call(this);

buf.push('<em>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em>');
};
if ( typeof(post) !== 'undefined')
{
 if (!post.user_photo) post.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<div class="forum resizable">');
if ( page == 1)
{
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (post.id) + ""), 'data-user-id':(post.user_id), 'data-post-id':(post.id), "class": ('post') + ' ' + ('head') + ' ' + (post.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true}));
buf.push('><h3 class="title">');
var __val__ = post.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h3><a');
buf.push(attrs({ 'href':("/user/" + (post.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (post.user_photo) + "") }, {"src":true}));
buf.push('/></div><span>');
var __val__ = post.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span></a><div');
buf.push(attrs({ 'data-time':(post.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = post.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="edit-container"></div>');
if ( post.html)
{
buf.push('<div class="body">');
var __val__ = post.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</div>');
}
buf.push('<div class="reply"></div><div class="actions"><a class="stylish onclick-footer-toggle">Reply</a><a');
buf.push(attrs({ 'data-edit':(post.id), 'href':("" + (post.uri.replace(/\/\d+$/, '')) + "/edit/" + (post.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(post.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div></div>');
}
buf.push('<div class="children">');
if ( post.posts.length)
{
buf.push('<div');
buf.push(attrs({ 'data-page':(page) }, {"data-page":true}));
buf.push('>');
// iterate post.posts
;(function(){
  if ('number' == typeof post.posts.length) {
    for (var $index = 0, $$l = post.posts.length; $index < $$l; $index++) {
      var sp = post.posts[$index];

if ( sp.parent_id !== null)
{
_post_mixin(sp, 0);
}
    }
  } else {
    for (var $index in post.posts) {
      var sp = post.posts[$index];

if ( sp.parent_id !== null)
{
_post_mixin(sp, 0);
}
   }
  }
}).call(this);

buf.push('</div>');
}
else if ( post.morePosts)
{
buf.push('<a href="#">Load more posts ...</a>');
}
buf.push('</div><p class="onclick-footer-toggle">Post Reply</p></div>');
}
else
{
buf.push('<div class="forum resizable"></div>');
}
if ( typeof(post) !== 'undefined')
{
buf.push('<div id="breadcrumb" class="breadcrumb">');
_breadcrumb_mixin(post);
buf.push('</div>');
}
}
return buf.join("");
}
jade.templates["post-edit"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_edit_mixin = function(u, p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var html_id = (p.id ? "_#{p.id}" : '');
buf.push('<div');
buf.push(attrs({ 'id':(p.is_comment ? html_id : 'post_edit'), "class": ('post-edit') + ' ' + ('onclick-submit') + ' ' + (p.is_comment ? 'comment' : '') }, {"class":true,"id":true}));
buf.push('><form');
buf.push(attrs({ 'action':("/resources/posts"), 'method':("" + (p.method || 'put') + "") }, {"action":true,"method":true}));
buf.push('><div class="tooltip"></div><div');
buf.push(attrs({ 'data-user-id':(u.id), "class": ('summary') }, {"data-user-id":true}));
buf.push('><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (u.photo || 'images/profile.jpg') + ""), "class": ('profile') + ' ' + ('photo') }, {"src":true}));
buf.push('/></div>');
if ( !p.is_comment)
{
buf.push('<input');
buf.push(attrs({ 'name':('title'), 'type':('text'), 'placeholder':('Title'), 'value':(p.title), "class": ('title') }, {"name":true,"type":true,"placeholder":true,"value":true}));
buf.push('/>');
}
buf.push('<textarea');
buf.push(attrs({ 'id':("editor" + (p.is_comment ? html_id : '') + ""), 'name':('body'), 'placeholder':('Comment ...'), "class": ('body') + ' ' + ('onshiftenter-submit') }, {"id":true,"name":true,"placeholder":true}));
buf.push('>');
var __val__ = p.body
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</textarea><input');
buf.push(attrs({ 'type':('hidden'), 'name':('id'), 'value':(p.id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('forum_id'), 'value':(p.forum_id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('parent_id'), 'value':(p.parent_id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('csrf'), 'value':(p.csrf) }, {"type":true,"name":true,"value":true}));
buf.push('/><button type="submit" name="submit" value="Save">Save</button><div class="close cancel">X</div></form><div class="preview"></div></div>');
};
if ( typeof(post) !== 'undefined')
{
_post_edit_mixin(user, post);
}
}
return buf.join("");
}
jade.templates["post-new"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="forum resizable"></div>');
}
return buf.join("");
}
jade.templates["profile"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="container"><h2>');
var __val__ = profile.name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h2><div');
buf.push(attrs({ 'data-user-id':("" + (profile.id) + ""), 'data-user-name':("" + (profile.name) + ""), "class": ('profile') }, {"data-user-id":true,"data-user-name":true}));
buf.push('><form');
buf.push(attrs({ 'action':("/resources/users/" + (profile.id) + "/avatar"), 'enctype':("multipart/form-data"), 'method':("post") }, {"action":true,"enctype":true,"method":true}));
buf.push('><div class="avatar">');
if ( profile.photo)
{
if ( profile.photo.match(/^https?:/))
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (profile.photo) + "") }, {"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (profile.photo) + "") }, {"src":true}));
buf.push('/>');
}
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/profile.jpg") }, {"src":true}));
buf.push('/>');
}
buf.push('</div><input type="file" name="avatar" style="display:none;"/></form></div><ul><li class="since"><span>Joined </span>');
var __val__ = profile.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</li><li class="count"><b>');
var __val__ = profile.human_post_count 
buf.push(null == __val__ ? "" : __val__);
buf.push('</b><span> ' + escape((interp = profile.post_count == 1 ? "post" : "posts") == null ? '' : interp) + '</span></li><li class="chat"><button title="Chat" class="onclick-chat">Private Message</button></li></ul></div>');
}
return buf.join("");
}
jade.templates["posts-by-user"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var _post_mixin = function(p, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), 'data-user-id':(p.user_id), 'data-post-id':(p.id), 'data-thread-id':(p.thread_id), 'data-forum-id':(p.forum_id), "class": ('post') + ' ' + (p.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true,"data-thread-id":true,"data-forum-id":true}));
buf.push('>');
if ( p.thread_uri)
{
buf.push('<h4 class="title"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h4>');
}
else
{
buf.push('<h4 class="title">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4>');
}
_post_profile_mixin(p);
buf.push('<div class="container"><span class="username">');
var __val__ = p.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><div');
buf.push(attrs({ 'data-time':(p.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = p.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="post-content">');
if ( p.html)
{
buf.push('<p class="body">');
var __val__ = p.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('</div></div>');
_post_actions_mixin(p);
buf.push('<div class="reply"></div></div><div class="children">');
if ( p.posts && p.posts.length)
{
// iterate p.posts
;(function(){
  if ('number' == typeof p.posts.length) {
    for (var ii = 0, $$l = p.posts.length; ii < $$l; ii++) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
    }
  } else {
    for (var ii in p.posts) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
   }
  }
}).call(this);

}
else if ( p.morePosts)
{
buf.push('<a href="#" class="load-more">More Posts</a>');
}
buf.push('</div>');
};
buf.push('<div class="resizable forum">');
if ( postsByUser.length)
{
var last_thread_id = (-1);
// iterate postsByUser
;(function(){
  if ('number' == typeof postsByUser.length) {
    for (var i = 0, $$l = postsByUser.length; i < $$l; i++) {
      var p = postsByUser[i];

if ( last_thread_id != p.thread_id)
{
buf.push('<h3 class="heading"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') + ' ' + ('title') + ' ' + ('stylish') }, {"href":true}));
buf.push('> <b>' + escape((interp = p.thread_title) == null ? '' : interp) + ' </b></a><a');
buf.push(attrs({ 'href':("/user/" + (p.thread_username) + ""), "class": ('mutant') + ' ' + ('by') }, {"href":true}));
buf.push('>by <b>' + escape((interp = p.thread_username) == null ? '' : interp) + ' </b></a><a');
buf.push(attrs({ 'href':(p.forum_uri), "class": ('mutant') + ' ' + ('forum-link') }, {"href":true}));
buf.push('>in <b>' + escape((interp = p.forum_title) == null ? '' : interp) + '</b></a></h3>');
}
_post_mixin(p, i);
var last_thread_id = (p.thread_id);
    }
  } else {
    for (var i in postsByUser) {
      var p = postsByUser[i];

if ( last_thread_id != p.thread_id)
{
buf.push('<h3 class="heading"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') + ' ' + ('title') + ' ' + ('stylish') }, {"href":true}));
buf.push('> <b>' + escape((interp = p.thread_title) == null ? '' : interp) + ' </b></a><a');
buf.push(attrs({ 'href':("/user/" + (p.thread_username) + ""), "class": ('mutant') + ' ' + ('by') }, {"href":true}));
buf.push('>by <b>' + escape((interp = p.thread_username) == null ? '' : interp) + ' </b></a><a');
buf.push(attrs({ 'href':(p.forum_uri), "class": ('mutant') + ' ' + ('forum-link') }, {"href":true}));
buf.push('>in <b>' + escape((interp = p.forum_title) == null ? '' : interp) + '</b></a></h3>');
}
_post_mixin(p, i);
var last_thread_id = (p.thread_id);
   }
  }
}).call(this);

}
else
{
buf.push('<h3>Check back for my first post<i>!</i></h3>');
}
buf.push('</div>');
}
return buf.join("");
}
jade.templates["post"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var _post_mixin = function(p, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), 'data-user-id':(p.user_id), 'data-post-id':(p.id), 'data-thread-id':(p.thread_id), 'data-forum-id':(p.forum_id), "class": ('post') + ' ' + (p.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true,"data-thread-id":true,"data-forum-id":true}));
buf.push('>');
if ( p.thread_uri)
{
buf.push('<h4 class="title"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h4>');
}
else
{
buf.push('<h4 class="title">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4>');
}
_post_profile_mixin(p);
buf.push('<div class="container"><span class="username">');
var __val__ = p.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><div');
buf.push(attrs({ 'data-time':(p.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = p.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="post-content">');
if ( p.html)
{
buf.push('<p class="body">');
var __val__ = p.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('</div></div>');
_post_actions_mixin(p);
buf.push('<div class="reply"></div></div><div class="children">');
if ( p.posts && p.posts.length)
{
// iterate p.posts
;(function(){
  if ('number' == typeof p.posts.length) {
    for (var ii = 0, $$l = p.posts.length; ii < $$l; ii++) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
    }
  } else {
    for (var ii in p.posts) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
   }
  }
}).call(this);

}
else if ( p.morePosts)
{
buf.push('<a href="#" class="load-more">More Posts</a>');
}
buf.push('</div>');
};
_post_mixin(post, 0);
}
return buf.join("");
}
jade.templates["admin-domains"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="domains"><form');
buf.push(attrs({ 'action':("/resources/sites/" + (siteId) + ""), 'method':("put"), "class": ('onclick-submit') }, {"action":true,"method":true}));
buf.push('><div class="domain"><label for="domain">Select a Domain</label><select id="domain" name="domain">');
// iterate site.domains
;(function(){
  if ('number' == typeof site.domains.length) {
    for (var $index = 0, $$l = site.domains.length; $index < $$l; $index++) {
      var d = site.domains[$index];

buf.push('<option');
buf.push(attrs({ 'value':(d.id) }, {"value":true}));
buf.push('>');
var __val__ = d.name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
    }
  } else {
    for (var $index in site.domains) {
      var d = site.domains[$index];

buf.push('<option');
buf.push(attrs({ 'value':(d.id) }, {"value":true}));
buf.push('>');
var __val__ = d.name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select></div><br/><fieldset><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/facebook_32.png") }, {"src":true}));
buf.push('/><legend>Facebook</legend><label for="facebook_client_id">ID</label><input');
buf.push(attrs({ 'id':("facebook_client_id"), 'type':('text'), 'name':('facebookClientId'), 'placeholder':('Facebook API ID ...'), 'value':(site.config.facebookClientId), "class": ('first') }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/><label for="facebook_client_secret">Secret</label><input');
buf.push(attrs({ 'id':("facebook_client_secret"), 'type':('text'), 'name':('facebookClientSecret'), 'placeholder':('Facebook secret ...'), 'value':(site.config.facebookClientId) }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/></fieldset><fieldset><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/twitter_32.png") }, {"src":true}));
buf.push('/><legend>Twitter</legend><label for="twitter_key">Key</label><input');
buf.push(attrs({ 'id':("twitter_key"), 'type':('text'), 'name':('twitterConsumerKey'), 'placeholder':('Twitter API key ...'), 'value':(site.config.twitterConsumerKey), "class": ('first') }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/><label for="twitter_secret">Secret</label><input');
buf.push(attrs({ 'id':("twitter_secret"), 'type':('text'), 'name':('twitterConsumerSecret'), 'placeholder':('Twitter API secret ...'), 'value':(site.config.twitterConsumerSecret) }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/></fieldset><fieldset><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/images/google_32.png") }, {"src":true}));
buf.push('/><legend>Google+</legend><label for="google_key">Key</label><input');
buf.push(attrs({ 'id':("google_key"), 'type':('text'), 'name':('googleConsumerKey'), 'placeholder':('Google+ API key ...'), 'value':(site.config.googleConsumerKey), "class": ('first') }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/><label for="google_secret">Secret</label><input');
buf.push(attrs({ 'id':("google_secret"), 'type':('text'), 'name':('googleConsumerSecret'), 'placeholder':('Google+ API secret ...'), 'value':(site.config.googleConsumerSecret) }, {"id":true,"type":true,"name":true,"placeholder":true,"value":true}));
buf.push('/></fieldset><button type="submit" value="Save">Save</button><div class="tooltip"></div><input type="hidden" name="action" value="domains"/></form></div>');
}
return buf.join("");
}
jade.templates["admin-general"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var analytics = (unescape(site.config.analytics));
buf.push('<form');
buf.push(attrs({ 'action':("/resources/sites/" + (siteId) + ""), 'method':("put"), "class": ('onclick-submit') + ' ' + ('no-focus') }, {"action":true,"method":true}));
buf.push('><fieldset><label for="name">Title</label><input');
buf.push(attrs({ 'id':('name'), 'name':('name'), 'type':('text'), 'value':(site.name), "class": ('name') }, {"id":true,"class":true,"name":true,"type":true,"value":true}));
buf.push('/><div class="break"></div><label for="posts_per_page">Posts per Page</label><input');
buf.push(attrs({ 'id':('posts_per_page'), 'name':('postsPerPage'), 'type':('text'), 'value':(site.config.postsPerPage), 'maxlength':(4), "class": ('posts-per-page') }, {"id":true,"class":true,"name":true,"type":true,"value":true,"maxlength":true}));
buf.push('/><div class="break"></div><label>Privacy</label><div class="box"><input');
buf.push(attrs({ 'id':('private'), 'type':('checkbox'), 'value':('checked'), 'name':('private'), 'checked':(site.config.private) }, {"type":true,"value":true,"name":true,"checked":true}));
buf.push('/><label for="private" class="switch-control"><div class="switch"></div></label><span class="label checked">On</span><div class="note">Hide content from search engines &amp; the public</div></div><div class="break"></div><label>Invite Only</label><div class="box"><input');
buf.push(attrs({ 'id':('invite_only'), 'type':('checkbox'), 'value':('checked'), 'name':('inviteOnly'), 'checked':(site.config.inviteOnly) }, {"type":true,"value":true,"name":true,"checked":true}));
buf.push('/><label for="invite_only" class="switch-control"><div class="switch"></div></label><span class="label checked">On</span><div class="note">Disallow the public from registering - <a href="/admin/invites" class="mutant">Invites</a></div></div><div class="break double"></div><label for="keywords">Keywords</label><textarea id="keywords" name="metaKeywords">');
var __val__ = site.config.metaKeywords
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</textarea><div class="note">Separate meta keywords with commas</div><div class="break"></div><label for="style">Style</label><textarea id="style" name="style">');
var __val__ = site.config.style
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</textarea><div class="note">Paste<a href="http://www.w3schools.com/cssref/" target="_blank">CSS</a>or <a href="http://learnboost.github.io/stylus/" target="_blank">Stylus</a>code in above</div><div class="break"></div><label for="analytics">Analytics</label><textarea id="analytics" name="analytics">');
var __val__ = analytics
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</textarea><div class="note">Paste Javascript code above, excluding &lt;script&gt; tags</div></fieldset><div class="tooltip"></div><button type="submit" value="Save">Save</button><input type="hidden" name="action" value="general"/></form>');
}
return buf.join("");
}
jade.templates["admin-invites"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form action="/resources/users" method="post" class="onclick-submit"><fieldset><label for="emails">Emails</label><input id="emails" name="emails" type="text" class="emails clear"/><div class="note">Separated by commas</div><div class="break"></div><label for="message">Message</label><textarea id="message" name="message"></textarea></fieldset><button type="submit" value="Send">Send</button><div data-msg="Invites sent!" class="tooltip"></div><input type="hidden" name="action" value="invites"/></form>');
}
return buf.join("");
}
jade.templates["admin-nav"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="container"><menu><li class="general"><a href="/admin" class="mutant">General</a></li><li class="menu"><a href="/admin/menu" class="mutant">Menu</a></li><li class="invites"><a href="/admin/invites" class="mutant">Invites</a></li><li class="domains"><a href="/admin/domains" class="mutant">Domains</a></li><li class="feature upgrade"><a href="/admin/upgrade" class="mutant">PRO</a></li></menu></div>');
}
return buf.join("");
}
jade.templates["search"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var _post_mixin = function(p, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), 'data-user-id':(p.user_id), 'data-post-id':(p.id), 'data-thread-id':(p.thread_id), 'data-forum-id':(p.forum_id), "class": ('post') + ' ' + (p.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true,"data-thread-id":true,"data-forum-id":true}));
buf.push('>');
if ( p.thread_uri)
{
buf.push('<h4 class="title"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h4>');
}
else
{
buf.push('<h4 class="title">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4>');
}
_post_profile_mixin(p);
buf.push('<div class="container"><span class="username">');
var __val__ = p.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><div');
buf.push(attrs({ 'data-time':(p.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = p.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="post-content">');
if ( p.html)
{
buf.push('<p class="body">');
var __val__ = p.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('</div></div>');
_post_actions_mixin(p);
buf.push('<div class="reply"></div></div><div class="children">');
if ( p.posts && p.posts.length)
{
// iterate p.posts
;(function(){
  if ('number' == typeof p.posts.length) {
    for (var ii = 0, $$l = p.posts.length; ii < $$l; ii++) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
    }
  } else {
    for (var ii in p.posts) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
   }
  }
}).call(this);

}
else if ( p.morePosts)
{
buf.push('<a href="#" class="load-more">More Posts</a>');
}
buf.push('</div>');
};
buf.push('<div id="breadcrumb" class="breadcrumb"><div id="new_hits"></div></div>');
var suffix = (elres.total == 1 ? '' : 's');
buf.push('<div class="search resizable"><em id="hit_count"><b>' + escape((interp = elres.total) == null ? '' : interp) + ' hit' + escape((interp = suffix) == null ? '' : interp) + '</b></em><span id="new_hit_count"><a href="#" onclick="showNewHits()">- <span class="count">0 </span>new!</a></span><div id="new_posts"></div>');
if ( elres.hits.length)
{
// iterate elres.hits
;(function(){
  if ('number' == typeof elres.hits.length) {
    for (var $index = 0, $$l = elres.hits.length; $index < $$l; $index++) {
      var hit = elres.hits[$index];

buf.push('<!-- always use thread title-->');
 hit._source.title = hit._source.thread_title
if ( env != 'production')
{
buf.push('<!-- show score in dev mode-->');
 hit._source.title = hit._source.title + ' (score: ' + hit._score + ' )'
}
if ( hit._source.id == hit._source.thread_id)
{
buf.push('<div class="thread-hit">');
_post_mixin(hit._source, 0);
buf.push('</div>');
}
else
{
buf.push('<div class="comment-hit">');
_post_mixin(hit._source, 0);
buf.push('</div>');
}
    }
  } else {
    for (var $index in elres.hits) {
      var hit = elres.hits[$index];

buf.push('<!-- always use thread title-->');
 hit._source.title = hit._source.thread_title
if ( env != 'production')
{
buf.push('<!-- show score in dev mode-->');
 hit._source.title = hit._source.title + ' (score: ' + hit._score + ' )'
}
if ( hit._source.id == hit._source.thread_id)
{
buf.push('<div class="thread-hit">');
_post_mixin(hit._source, 0);
buf.push('</div>');
}
else
{
buf.push('<div class="comment-hit">');
_post_mixin(hit._source, 0);
buf.push('</div>');
}
   }
  }
}).call(this);

}
else
{
buf.push('<h4>Try a more general search<i>!</i></h4>');
}
buf.push('</div>');
}
return buf.join("");
}
jade.templates["search-filters"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var forumOptions_mixin = function(forums, prefix){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
// iterate forums
;(function(){
  if ('number' == typeof forums.length) {
    for (var $index = 0, $$l = forums.length; $index < $$l; $index++) {
      var f = forums[$index];

buf.push('<option');
buf.push(attrs({ 'value':(f.id) }, {"value":true}));
buf.push('>');
var __val__ = prefix + f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
forumOptions_mixin(f.forums, '-');
    }
  } else {
    for (var $index in forums) {
      var f = forums[$index];

buf.push('<option');
buf.push(attrs({ 'value':(f.id) }, {"value":true}));
buf.push('>');
var __val__ = prefix + f.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
forumOptions_mixin(f.forums, '-');
   }
  }
}).call(this);

};
buf.push('<div id="search_filters"><div><label><h4>Filter by Forum</h4><select name="forum_id"><option value="">- All -</option>');
forumOptions_mixin(menu, '');
buf.push('</select></label></div><div><label><h4>Within a Timeframe</h4><select name="within"><option value="">- Any Time -</option><option value="day">Within Last Day</option><option value="week">Within Last Week</option><option value="month">Within Last Month</option></select></label></div></div>');
}
return buf.join("");
}
jade.templates["search-facets"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="search_facets"><div style="height:30px"></div>');
if ( facets.forum.length > 1)
{
buf.push('<div class="facet"><div class="facet-title">Hits by Forum</div>');
// iterate facets.forum
;(function(){
  if ('number' == typeof facets.forum.length) {
    for (var $index = 0, $$l = facets.forum.length; $index < $$l; $index++) {
      var forum = facets.forum[$index];

buf.push('<a');
buf.push(attrs({ 'href':(forum.uri), "class": ('mutant') + ' ' + ('facet-hit') }, {"href":true}));
buf.push('><em>');
var __val__ = forum.hitCount
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em><span>');
var __val__ = forum.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span></a>');
    }
  } else {
    for (var $index in facets.forum) {
      var forum = facets.forum[$index];

buf.push('<a');
buf.push(attrs({ 'href':(forum.uri), "class": ('mutant') + ' ' + ('facet-hit') }, {"href":true}));
buf.push('><em>');
var __val__ = forum.hitCount
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em><span>');
var __val__ = forum.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span></a>');
   }
  }
}).call(this);

buf.push('</div>');
}
buf.push('</div>');
}
return buf.join("");
}
jade.templates["__threads"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
buf.push('<ul class="threads">');
// iterate topThreads
;(function(){
  if ('number' == typeof topThreads.length) {
    for (var ii = 0, $$l = topThreads.length; ii < $$l; ii++) {
      var t = topThreads[ii];

_thread_mixin(t);
    }
  } else {
    for (var ii in topThreads) {
      var t = topThreads[ii];

_thread_mixin(t);
   }
  }
}).call(this);

buf.push('</ul>');
}
return buf.join("");
}
jade.templates["_breadcrumb"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _breadcrumb_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var path = ('');
var parts = (p.uri.split('/'));
var parts = (parts.splice(1, parts.length-2));
// iterate parts
;(function(){
  if ('number' == typeof parts.length) {
    for (var $index = 0, $$l = parts.length; $index < $$l; $index++) {
      var part = parts[$index];

if ( part != 't')
{
buf.push('<a');
buf.push(attrs({ 'href':("/" + (path) + "" + (part) + ""), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = part.replace('-', ' ')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a><span>/</span>');
}
 path = path + part + '/'
    }
  } else {
    for (var $index in parts) {
      var part = parts[$index];

if ( part != 't')
{
buf.push('<a');
buf.push(attrs({ 'href':("/" + (path) + "" + (part) + ""), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = part.replace('-', ' ')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a><span>/</span>');
}
 path = path + part + '/'
   }
  }
}).call(this);

buf.push('<em>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em>');
};
}
return buf.join("");
}
jade.templates["_post-actions"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
}
return buf.join("");
}
jade.templates["_post-edit"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_edit_mixin = function(u, p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
var html_id = (p.id ? "_#{p.id}" : '');
buf.push('<div');
buf.push(attrs({ 'id':(p.is_comment ? html_id : 'post_edit'), "class": ('post-edit') + ' ' + ('onclick-submit') + ' ' + (p.is_comment ? 'comment' : '') }, {"class":true,"id":true}));
buf.push('><form');
buf.push(attrs({ 'action':("/resources/posts"), 'method':("" + (p.method || 'put') + "") }, {"action":true,"method":true}));
buf.push('><div class="tooltip"></div><div');
buf.push(attrs({ 'data-user-id':(u.id), "class": ('summary') }, {"data-user-id":true}));
buf.push('><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (u.photo || 'images/profile.jpg') + ""), "class": ('profile') + ' ' + ('photo') }, {"src":true}));
buf.push('/></div>');
if ( !p.is_comment)
{
buf.push('<input');
buf.push(attrs({ 'name':('title'), 'type':('text'), 'placeholder':('Title'), 'value':(p.title), "class": ('title') }, {"name":true,"type":true,"placeholder":true,"value":true}));
buf.push('/>');
}
buf.push('<textarea');
buf.push(attrs({ 'id':("editor" + (p.is_comment ? html_id : '') + ""), 'name':('body'), 'placeholder':('Comment ...'), "class": ('body') + ' ' + ('onshiftenter-submit') }, {"id":true,"name":true,"placeholder":true}));
buf.push('>');
var __val__ = p.body
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</textarea><input');
buf.push(attrs({ 'type':('hidden'), 'name':('id'), 'value':(p.id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('forum_id'), 'value':(p.forum_id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('parent_id'), 'value':(p.parent_id) }, {"type":true,"name":true,"value":true}));
buf.push('/><input');
buf.push(attrs({ 'type':('hidden'), 'name':('csrf'), 'value':(p.csrf) }, {"type":true,"name":true,"value":true}));
buf.push('/><button type="submit" name="submit" value="Save">Save</button><div class="close cancel">X</div></form><div class="preview"></div></div>');
};
}
return buf.join("");
}
jade.templates["_post-profile"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
}
return buf.join("");
}
jade.templates["_post"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _post_actions_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div class="actions"><a class="stylish onclick-append-reply-ui">Comment</a><a');
buf.push(attrs({ 'data-edit':(p.id), 'href':("" + (p.uri.replace(/\/\d+$/, '')) + "/edit/" + (p.id) + ""), "class": ('stylish') + ' ' + ('edit') + ' ' + ('mutant') + ' ' + ('no-surf') }, {"data-edit":true,"href":true}));
buf.push('>Edit</a><a');
buf.push(attrs({ 'href':(p.uri), "class": ('stylish') + ' ' + ('permalink') + ' ' + ('mutant') }, {"href":true}));
buf.push('>Permalink</a><a class="stylish censor onclick-censor-post">Censor</a></div>');
};
var _post_profile_mixin = function(p){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!p.user_photo) p.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<a');
buf.push(attrs({ 'href':("/user/" + (p.user_name) + ""), "class": ('user') + ' ' + ('mutant') }, {"href":true}));
buf.push('><div class="profile photo">');
if ( p.user_photo && p.user_photo.match(/^http/))
{
buf.push('<img');
buf.push(attrs({ 'title':(p.user_name), 'src':("" + (p.user_photo) + "") }, {"title":true,"src":true}));
buf.push('/>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "/" + (p.user_photo) + "") }, {"src":true}));
buf.push('/>');
}
buf.push('</div></a>');
};
var _post_mixin = function(p, i){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<div');
buf.push(attrs({ 'id':("post_" + (p.id) + ""), 'data-user-id':(p.user_id), 'data-post-id':(p.id), 'data-thread-id':(p.thread_id), 'data-forum-id':(p.forum_id), "class": ('post') + ' ' + (p.reason ? 'censored' : '') }, {"class":true,"id":true,"data-user-id":true,"data-post-id":true,"data-thread-id":true,"data-forum-id":true}));
buf.push('>');
if ( p.thread_uri)
{
buf.push('<h4 class="title"><a');
buf.push(attrs({ 'href':(p.thread_uri), "class": ('mutant') }, {"href":true}));
buf.push('>');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</a></h4>');
}
else
{
buf.push('<h4 class="title">');
var __val__ = p.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4>');
}
_post_profile_mixin(p);
buf.push('<div class="container"><span class="username">');
var __val__ = p.user_name
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</span><div');
buf.push(attrs({ 'data-time':(p.created_iso), "class": ('date') }, {"data-time":true}));
buf.push('>');
var __val__ = p.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</div><div class="post-content">');
if ( p.html)
{
buf.push('<p class="body">');
var __val__ = p.html
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('</div></div>');
_post_actions_mixin(p);
buf.push('<div class="reply"></div></div><div class="children">');
if ( p.posts && p.posts.length)
{
// iterate p.posts
;(function(){
  if ('number' == typeof p.posts.length) {
    for (var ii = 0, $$l = p.posts.length; ii < $$l; ii++) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
    }
  } else {
    for (var ii in p.posts) {
      var pp = p.posts[ii];

_post_mixin(pp, ii);
   }
  }
}).call(this);

}
else if ( p.morePosts)
{
buf.push('<a href="#" class="load-more">More Posts</a>');
}
buf.push('</div>');
};
}
return buf.join("");
}
jade.templates["_thread"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
}
return buf.join("");
}
jade.templates["__threads"] = function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var _thread_mixin = function(t){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 if (!t.user_photo) t.user_photo = cacheUrl + 'images/profile.jpg'
buf.push('<li');
buf.push(attrs({ 'data-id':(t.id), 'data-user-id':(t.user_id), "class": ('thread') }, {"data-id":true,"data-user-id":true}));
buf.push('><a');
buf.push(attrs({ 'data-surf':(t.forum_id), 'href':(t.uri), "class": ('mutant') }, {"data-surf":true,"href":true}));
buf.push('><h4 class="title">');
var __val__ = t.title
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h4><div class="break"></div><div class="profile photo"><img');
buf.push(attrs({ 'src':("" + (cacheUrl) + "" + (t.user_photo) + "") }, {"src":true}));
buf.push('/></div><div class="container"><span class="username">by<em>');
var __val__ = t.user_name // XXX weird things happened when I tried to turn this into an anchor
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</em></span><span');
buf.push(attrs({ 'data-time':(t.created_iso), "class": ('created') }, {"data-time":true}));
buf.push('>');
var __val__ = t.created_human
buf.push(null == __val__ ? "" : __val__);
buf.push('</span><div class="clear"></div><span class="post-count">');
var __val__ = t.post_count
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>posts</i></span><span class="views">');
var __val__ = t.views
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('<i>views</i></span></div></a></li>');
};
buf.push('<ul class="threads">');
// iterate topThreads
;(function(){
  if ('number' == typeof topThreads.length) {
    for (var ii = 0, $$l = topThreads.length; ii < $$l; ii++) {
      var t = topThreads[ii];

_thread_mixin(t);
    }
  } else {
    for (var ii in topThreads) {
      var t = topThreads[ii];

_thread_mixin(t);
   }
  }
}).call(this);

buf.push('</ul>');
}
return buf.join("");
}
},{"fs":27}],27:[function(require,module,exports){
// nothing to see here... no file methods for the browser

},{}],26:[function(require,module,exports){
if (typeof define !== 'function') { var define = require('amdefine')(module, require); }
define(function(require){ return require('./src/Component'); });

},{"./src/Component":28,"amdefine":29}],29:[function(require,module,exports){
(function(process,__filename){/** vim: et:ts=4:sw=4:sts=4
 * @license amdefine 0.0.5 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/amdefine for details
 */

/*jslint node: true */
/*global module, process */
'use strict';

var path = require('path');

/**
 * Creates a define for node.
 * @param {Object} module the "module" object that is defined by Node for the
 * current module.
 * @param {Function} [require]. Node's require function for the current module.
 * It only needs to be passed in Node versions before 0.5, when module.require
 * did not exist.
 * @returns {Function} a define function that is usable for the current node
 * module.
 */
function amdefine(module, require) {
    var defineCache = {},
        loaderCache = {},
        alreadyCalled = false,
        makeRequire, stringRequire;

    /**
     * Trims the . and .. from an array of path segments.
     * It will keep a leading path segment if a .. will become
     * the first path segment, to help with module name lookups,
     * which act like paths, but can be remapped. But the end result,
     * all paths that use this function should look normalized.
     * NOTE: this method MODIFIES the input array.
     * @param {Array} ary the array of path segments.
     */
    function trimDots(ary) {
        var i, part;
        for (i = 0; ary[i]; i+= 1) {
            part = ary[i];
            if (part === '.') {
                ary.splice(i, 1);
                i -= 1;
            } else if (part === '..') {
                if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                    //End of the line. Keep at least one non-dot
                    //path segment at the front so it can be mapped
                    //correctly to disk. Otherwise, there is likely
                    //no path mapping for a path starting with '..'.
                    //This can still fail, but catches the most reasonable
                    //uses of ..
                    break;
                } else if (i > 0) {
                    ary.splice(i - 1, 2);
                    i -= 2;
                }
            }
        }
    }

    function normalize(name, baseName) {
        var baseParts;

        //Adjust any relative paths.
        if (name && name.charAt(0) === '.') {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                baseParts = baseName.split('/');
                baseParts = baseParts.slice(0, baseParts.length - 1);
                baseParts = baseParts.concat(name.split('/'));
                trimDots(baseParts);
                name = baseParts.join('/');
            }
        }

        return name;
    }

    /**
     * Create the normalize() function passed to a loader plugin's
     * normalize method.
     */
    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(id) {
        function load(value) {
            loaderCache[id] = value;
        }

        load.fromText = function (id, text) {
            //This one is difficult because the text can/probably uses
            //define, and any relative paths and requires should be relative
            //to that id was it would be found on disk. But this would require
            //bootstrapping a module/require fairly deeply from node core.
            //Not sure how best to go about that yet.
            throw new Error('amdefine does not implement load.fromText');
        };

        return load;
    }

    makeRequire = function (systemRequire, exports, module, relId) {
        function amdRequire(deps, callback) {
            if (typeof deps === 'string') {
                //Synchronous, single module require('')
                return stringRequire(systemRequire, exports, module, deps, relId);
            } else {
                //Array of dependencies with a callback.

                //Convert the dependencies to modules.
                deps = deps.map(function (depName) {
                    return stringRequire(systemRequire, exports, module, depName, relId);
                });

                //Wait for next tick to call back the require call.
                process.nextTick(function () {
                    callback.apply(null, deps);
                });
            }
        }

        amdRequire.toUrl = function (filePath) {
            if (filePath.indexOf('.') === 0) {
                return normalize(filePath, path.dirname(module.filename));
            } else {
                return filePath;
            }
        };

        return amdRequire;
    };

    //Favor explicit value, passed in if the module wants to support Node 0.4.
    require = require || function req() {
        return module.require.apply(module, arguments);
    };

    function runFactory(id, deps, factory) {
        var r, e, m, result;

        if (id) {
            e = loaderCache[id] = {};
            m = {
                id: id,
                uri: __filename,
                exports: e
            };
            r = makeRequire(require, e, m, id);
        } else {
            //Only support one define call per file
            if (alreadyCalled) {
                throw new Error('amdefine with no module ID cannot be called more than once per file.');
            }
            alreadyCalled = true;

            //Use the real variables from node
            //Use module.exports for exports, since
            //the exports in here is amdefine exports.
            e = module.exports;
            m = module;
            r = makeRequire(require, e, m, module.id);
        }

        //If there are dependencies, they are strings, so need
        //to convert them to dependency values.
        if (deps) {
            deps = deps.map(function (depName) {
                return r(depName);
            });
        }

        //Call the factory with the right dependencies.
        if (typeof factory === 'function') {
            result = factory.apply(module.exports, deps);
        } else {
            result = factory;
        }

        if (result !== undefined) {
            m.exports = result;
            if (id) {
                loaderCache[id] = m.exports;
            }
        }
    }

    stringRequire = function (systemRequire, exports, module, id, relId) {
        //Split the ID by a ! so that
        var index = id.indexOf('!'),
            originalId = id,
            prefix, plugin;

        if (index === -1) {
            id = normalize(id, relId);

            //Straight module lookup. If it is one of the special dependencies,
            //deal with it, otherwise, delegate to node.
            if (id === 'require') {
                return makeRequire(systemRequire, exports, module, relId);
            } else if (id === 'exports') {
                return exports;
            } else if (id === 'module') {
                return module;
            } else if (loaderCache.hasOwnProperty(id)) {
                return loaderCache[id];
            } else if (defineCache[id]) {
                runFactory.apply(null, defineCache[id]);
                return loaderCache[id];
            } else {
                if(systemRequire) {
                    return systemRequire(originalId);
                } else {
                    throw new Error('No module with ID: ' + id);
                }
            }
        } else {
            //There is a plugin in play.
            prefix = id.substring(0, index);
            id = id.substring(index + 1, id.length);

            plugin = stringRequire(systemRequire, exports, module, prefix, relId);

            if (plugin.normalize) {
                id = plugin.normalize(id, makeNormalize(relId));
            } else {
                //Normalize the ID normally.
                id = normalize(id, relId);
            }

            if (loaderCache[id]) {
                return loaderCache[id];
            } else {
                plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});

                return loaderCache[id];
            }
        }
    };

    //Create a define function specific to the module asking for amdefine.
    function define(id, deps, factory) {
        if (Array.isArray(id)) {
            factory = deps;
            deps = id;
            id = undefined;
        } else if (typeof id !== 'string') {
            factory = id;
            id = deps = undefined;
        }

        if (deps && !Array.isArray(deps)) {
            factory = deps;
            deps = undefined;
        }

        if (!deps) {
            deps = ['require', 'exports', 'module'];
        }

        //Set up properties for this module. If an ID, then use
        //internal cache. If no ID, then use the external variables
        //for this node module.
        if (id) {
            //Put the module in deep freeze until there is a
            //require call for it.
            defineCache[id] = [id, deps, factory];
        } else {
            runFactory(id, deps, factory);
        }
    }

    //define.require, which has access to all the values in the
    //cache. Useful for AMD modules that all have IDs in the file,
    //but need to finally export a value to node based on one of those
    //IDs.
    define.require = function (id) {
        if (loaderCache[id]) {
            return loaderCache[id];
        }

        if (defineCache[id]) {
            runFactory.apply(null, defineCache[id]);
            return loaderCache[id];
        }
    };

    define.amd = {};

    return define;
}

module.exports = amdefine;

})(require("__browserify_process"),"/../node_modules/yacomponent/node_modules/amdefine/amdefine.js")
},{"path":30,"__browserify_process":20}],22:[function(require,module,exports){
var Component, ch, templates, AdminMenu;
Component = require('yacomponent');
ch = require('../app/client-helpers.ls');
templates = require('../build/component-jade.js').templates;
module.exports = AdminMenu = (function(superclass){
  var prefix, opts, prototype = extend$((import$(AdminMenu, superclass).displayName = 'AdminMenu', AdminMenu), superclass).prototype, constructor = AdminMenu;
  prefix = 'list_';
  opts = {
    handle: 'div',
    items: 'li',
    maxLevels: 2,
    tolerance: 'pointer',
    toleranceElement: '> div',
    placeholder: 'placeholder'
  };
  prototype.template = templates.AdminMenu;
  prototype.current = null;
  prototype.show = function(){
    var this$ = this;
    return setTimeout(function(){
      return this$.$.find('.col2').show(300);
    }, 300);
  };
  prototype.clone = function(item){
    var e, x$, ref$;
    console.log('clone:', item);
    e = this.$.find('.default').clone().removeClass('default').attr('id', item.id);
    x$ = e.find('input');
    x$.data('menu', (ref$ = item.data) != null ? ref$.menu : void 8);
    x$.data('title', (ref$ = item.data) != null ? ref$.title : void 8);
    x$.val((ref$ = item.data) != null ? ref$.title : void 8);
    return e;
  };
  prototype.currentStore = function(){
    var e, form, x$;
    if (!(e = this.current)) {
      return;
    }
    console.log('here');
    form = this.$.find('form');
    if (form) {
      form.find('input[name="menu"]' != null
        ? 'input[name="menu"]'
        : remove());
      x$ = e;
      x$.data('form', form.serialize());
      x$.data('title', this.current.val());
      console.log('store-menu:', e.data('menu'));
      console.log('store-title:', e.data('title'));
    }
  };
  prototype.currentRestore = function(){
    var e, form, reset, ref$, title;
    if (!(e = this.current)) {
      return;
    }
    if (form = this.$.find('form')) {
      reset = function(){
        return form.get(0).reset();
      };
      ref$ = this.current.data, form = ref$.form, title = ref$.title;
      e.val(title);
      if (menu) {
        form.deserialize(form);
        this.current.val(title);
        console.log('restored:', form);
      } else {
        reset();
      }
    }
  };
  prototype.onAttach = function(){
    var site, s, i$, ref$, len$, item, this$ = this;
    site = this.state.site();
    if (site.config.menu) {
      s = this.$.find('.sortable');
      for (i$ = 0, len$ = (ref$ = JSON.parse(site.config.menu)).length; i$ < len$; ++i$) {
        item = ref$[i$];
        console.log('parsed:', item);
        if (item.id) {
          item.id = prefix + "" + item.id;
          s.append(this.clone(item));
        }
      }
      s.nestedSortable(opts);
      setTimeout(function(){
        return s.find('input:first').focus();
      }, 200);
      this.show();
    }
    this.$.on('click', '.onclick-add', function(ev){
      var s, max, id, e, x$;
      this$.show();
      s = this$.$.find('.sortable');
      max = parseInt(maximum(map(function(it){
        return it.id.replace(prefix, '');
      })(
      s.find('li'))));
      id = !max
        ? 1
        : max + 1;
      e = this$.clone({
        id: prefix + "" + id
      });
      console.log('created:', e);
      x$ = this$.$.find('.sortable');
      x$.append(e);
      x$.nestedSortable(opts);
      x$.find('input').focus();
      this$.currentRestore;
      return false;
    });
    this.$.on('click', 'button[type="submit"]', function(ev){
      var menu, form;
      this$.currentStore();
      menu = this$.$.find('.sortable').data('mjsNestedSortable').toHierarchy();
      if (!menu.length) {
        menu = [menu];
      }
      console.log('saving-nested-sortable:', menu);
      form = this$.$.find('form');
      form.append(constructor.$('<input>').attr('type', 'hidden').attr('name', 'menu').val(JSON.stringify(menu)));
      return submitForm(ev, function(data){
        var f, t, ref$;
        f = $(this);
        t = $(form.find('.tooltip'));
        return showTooltip(t, !data.success ? data != null ? (ref$ = data.errors) != null ? ref$.join('<br>') : void 8 : void 8 : 'Saved!');
      });
    });
    this.$.on('blur', '.row', function(ev){
      return this$.currentStore();
    });
    this.$.on('change', 'form', function(ev){
      return this$.currentStore();
    });
    this.$.on('click', '.row', function(ev){
      this$.current = $(ev.target);
      return this$.currentRestore;
    });
    this.$.find('.sortable').nestedSortable(opts);
  };
  prototype.onDetach = function(){
    return this.$.off();
  };
  function AdminMenu(){
    this.onAttach = bind$(this, 'onAttach', prototype);
    this.currentRestore = bind$(this, 'currentRestore', prototype);
    this.currentStore = bind$(this, 'currentStore', prototype);
    this.clone = bind$(this, 'clone', prototype);
    this.show = bind$(this, 'show', prototype);
    AdminMenu.superclass.apply(this, arguments);
  }
  return AdminMenu;
}(Component));
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"../app/client-helpers.ls":5,"yacomponent":26}],21:[function(require,module,exports){
var Component, templates, AdminUpgrade;
Component = require('yacomponent');
templates = require('../build/component-jade.js').templates;
module.exports = AdminUpgrade = (function(superclass){
  var prototype = extend$((import$(AdminUpgrade, superclass).displayName = 'AdminUpgrade', AdminUpgrade), superclass).prototype, constructor = AdminUpgrade;
  prototype.template = templates.AdminUpgrade;
  function AdminUpgrade(){
    AdminUpgrade.superclass.apply(this, arguments);
  }
  return AdminUpgrade;
}(Component));
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"../build/component-jade.js":25,"yacomponent":26}],30:[function(require,module,exports){
(function(process){function filter (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (fn(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length; i >= 0; i--) {
    var last = parts[i];
    if (last == '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Regex to split a filename into [*, dir, basename, ext]
// posix version
var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
var resolvedPath = '',
    resolvedAbsolute = false;

for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
  var path = (i >= 0)
      ? arguments[i]
      : process.cwd();

  // Skip empty and invalid entries
  if (typeof path !== 'string' || !path) {
    continue;
  }

  resolvedPath = path + '/' + resolvedPath;
  resolvedAbsolute = path.charAt(0) === '/';
}

// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)

// Normalize the path
resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
var isAbsolute = path.charAt(0) === '/',
    trailingSlash = path.slice(-1) === '/';

// Normalize the path
path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }
  
  return (isAbsolute ? '/' : '') + path;
};


// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    return p && typeof p === 'string';
  }).join('/'));
};


exports.dirname = function(path) {
  var dir = splitPathRe.exec(path)[1] || '';
  var isWindows = false;
  if (!dir) {
    // No dirname
    return '.';
  } else if (dir.length === 1 ||
      (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
    // It is just a slash or a drive letter with a slash
    return dir;
  } else {
    // It is a full dirname, strip trailing slash
    return dir.substring(0, dir.length - 1);
  }
};


exports.basename = function(path, ext) {
  var f = splitPathRe.exec(path)[2] || '';
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPathRe.exec(path)[3] || '';
};

exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

})(require("__browserify_process"))
},{"__browserify_process":20}],28:[function(require,module,exports){
(function(){
  var define;
  define = (typeof window != 'undefined' && window !== null ? window.define : void 8) || require('amdefine')(module, require);
  define(function(require){
    var reactivejs, dollarish, Component;
    reactivejs = require('reactivejs');
    dollarish = typeof window != 'undefined' && window !== null
      ? window.$
      : require('cheerio');
    return Component = (function(){
      Component.displayName = 'Component';
      var prototype = Component.prototype, constructor = Component;
      Component.$ = dollarish;
      Component.$R = reactivejs;
      function Component(arg$, selector, parent){
        var ref$, locals, ref1$, autoRender, autoAttach, res$, k, v;
        ref$ = arg$ != null
          ? arg$
          : {}, locals = (ref1$ = ref$.locals) != null
          ? ref1$
          : {}, autoRender = (ref1$ = ref$.autoRender) != null ? ref1$ : true, autoAttach = (ref1$ = ref$.autoAttach) != null ? ref1$ : true;
        this.selector = selector;
        this.parent = parent;
        res$ = {};
        for (k in locals) {
          v = locals[k];
          res$[k] = v != null && v._isReactive
            ? v
            : constructor.$R.state(v === void 8 ? null : v);
        }
        this.state = res$;
        if (this.selector) {
          if (this.parent) {
            this.$ = this.parent.$.find(this.selector);
          } else {
            this.$ = constructor.$(this.selector);
          }
        } else {
          this.$top = constructor.$('<div><div/></div>');
          this.$ = this.$top.find('div');
        }
        if (this.init) {
          this.init();
        }
        if (!this.parent) {
          if (autoRender) {
            this.render();
          }
          if (autoAttach) {
            this.attach();
          }
        }
      }
      prototype.isClient = typeof window != 'undefined' && window !== null;
      prototype.template = function(){
        return '';
      };
      prototype.attach = function(){
        var i$, ref$, child;
        if (!this.isClient) {
          return this;
        }
        if (this.isAttached) {
          return this;
        }
        if (this.children) {
          for (i$ in ref$ = this.children) {
            child = ref$[i$];
            child.attach();
          }
        }
        if (this.onAttach) {
          this.onAttach();
        }
        this.isAttached = true;
        return this;
      };
      prototype.detach = function(){
        var i$, ref$, child;
        if (!this.isClient) {
          return this;
        }
        if (!this.isAttached) {
          return this;
        }
        if (this.children) {
          for (i$ in ref$ = this.children) {
            child = ref$[i$];
            child.detach();
          }
        }
        if (this.onDetach) {
          this.onDetach();
        }
        this.isAttached = false;
        return this;
      };
      prototype.render = function(){
        var locals, templateOut, $dom, i$, ref$, child;
        this.$.addClass(this.constructor.name);
        locals = this.locals();
        templateOut = this.template(locals);
        if (this.mutate || this.children) {
          $dom = constructor.$('<div class="render-wrapper">' + templateOut + '</div>');
          if (this.mutate) {
            this.mutate($dom);
          }
          this.$.html($dom.html());
          if (this.children) {
            for (i$ in ref$ = this.children) {
              child = ref$[i$];
              child.$ = this.$.find(child.selector);
              child.render();
            }
          }
        } else {
          this.$.html(templateOut);
        }
        return this;
      };
      prototype.reload = function(){
        return this.detach().render().attach();
      };
      prototype.locals = function(newLocals){
        var k, v, ref$, s, results$ = {};
        if (newLocals) {
          for (k in newLocals) {
            v = newLocals[k];
            this.local(k, v);
          }
        }
        for (k in ref$ = this.state) {
          s = ref$[k];
          results$[k] = s();
        }
        return results$;
      };
      prototype.local = function(k, v){
        var existingR;
        existingR = this.state[k];
        if (v === void 8) {
          if (existingR) {
            return existingR();
          }
        } else {
          if (existingR) {
            if (existingR.val === void 8) {
              throw new Error("'" + k + "' is not reactive state, you can only set reactive state");
            } else {
              return existingR(v === void 8 ? null : v);
            }
          } else {
            this.state[k] = constructor.$R.state(v === void 8 ? null : v);
            return v;
          }
        }
      };
      prototype.html = function(wrapped){
        wrapped == null && (wrapped = true);
        return ((wrapped && this.$top) || this.$).html();
      };
      return Component;
    }());
  });
}).call(this);

},{"cheerio":19,"amdefine":29,"reactivejs":8}]},{},[2,9])
;