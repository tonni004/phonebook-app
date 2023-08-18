"use strict";(self.webpackChunkphonebook_app=self.webpackChunkphonebook_app||[]).push([[994],{5316:function(e,t,n){n.d(t,{Z:function(){return I}});var r,o=n(9439),i=n(5987),a=n(1413),c=n(1694),s=n.n(c),l=n(3070),u=n(7357),f=n(8376),d=n(6300);function v(e){if((!r&&0!==r||e)&&u.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var g=n(7731),h=n(9007),p=n(3201),m=n(1683),y=n(3690),b=n(2791),w=n(1889),Z=n(5592),E=n(2709),x=n(6543),N=(0,x.Z)("modal-body"),L=n(9820),S=n(162),k=n(3329),W=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],B=b.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.contentClassName,c=e.centered,l=e.size,u=e.fullscreen,f=e.children,d=e.scrollable,v=(0,i.Z)(e,W);n=(0,S.vE)(n,"modal");var g="".concat(n,"-dialog"),h="string"===typeof u?"".concat(n,"-fullscreen-").concat(u):"".concat(n,"-fullscreen");return(0,k.jsx)("div",(0,a.Z)((0,a.Z)({},v),{},{ref:t,className:s()(g,r,l&&"".concat(n,"-").concat(l),c&&"".concat(g,"-centered"),d&&"".concat(g,"-scrollable"),u&&h),children:(0,k.jsx)("div",{className:s()("".concat(n,"-content"),o),children:f})}))}));B.displayName="ModalDialog";var C=B,z=(0,x.Z)("modal-footer"),O=n(2086),H=["bsPrefix","className","closeLabel","closeButton"],R=b.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.closeLabel,c=void 0===o?"Close":o,l=e.closeButton,u=void 0!==l&&l,f=(0,i.Z)(e,H);return n=(0,S.vE)(n,"modal-header"),(0,k.jsx)(O.Z,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:s()(r,n),closeLabel:c,closeButton:u}))}));R.displayName="ModalHeader";var P=R,T=(0,n(7472).Z)("h4"),A=(0,x.Z)("modal-title",{Component:T}),F=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function D(e){return(0,k.jsx)(E.Z,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}function j(e){return(0,k.jsx)(E.Z,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}var M=b.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.style,E=e.dialogClassName,x=e.contentClassName,N=e.children,W=e.dialogAs,B=void 0===W?C:W,z=e["aria-labelledby"],O=e["aria-describedby"],H=e["aria-label"],R=e.show,P=void 0!==R&&R,T=e.animation,A=void 0===T||T,M=e.backdrop,I=void 0===M||M,Y=e.keyboard,_=void 0===Y||Y,K=e.onEscapeKeyDown,X=e.onShow,U=e.onHide,q=e.container,G=e.autoFocus,V=void 0===G||G,J=e.enforceFocus,Q=void 0===J||J,$=e.restoreFocus,ee=void 0===$||$,te=e.restoreFocusOptions,ne=e.onEntered,re=e.onExit,oe=e.onExiting,ie=e.onEnter,ae=e.onEntering,ce=e.onExited,se=e.backdropClassName,le=e.manager,ue=(0,i.Z)(e,F),fe=(0,b.useState)({}),de=(0,o.Z)(fe,2),ve=de[0],ge=de[1],he=(0,b.useState)(!1),pe=(0,o.Z)(he,2),me=pe[0],ye=pe[1],be=(0,b.useRef)(!1),we=(0,b.useRef)(!1),Ze=(0,b.useRef)(null),Ee=(0,g.Z)(),xe=(0,o.Z)(Ee,2),Ne=xe[0],Le=xe[1],Se=(0,p.Z)(t,Le),ke=(0,h.Z)(U),We=(0,S.SC)();n=(0,S.vE)(n,"modal");var Be=(0,b.useMemo)((function(){return{onHide:ke}}),[ke]);function Ce(){return le||(0,Z.t)({isRTL:We})}function ze(e){if(u.Z){var t=Ce().getScrollbarWidth()>0,n=e.scrollHeight>(0,f.Z)(e).documentElement.clientHeight;ge({paddingRight:t&&!n?v():void 0,paddingLeft:!t&&n?v():void 0})}}var Oe=(0,h.Z)((function(){Ne&&ze(Ne.dialog)}));(0,m.Z)((function(){(0,d.Z)(window,"resize",Oe),null==Ze.current||Ze.current()}));var He=function(){be.current=!0},Re=function(e){be.current&&Ne&&e.target===Ne.dialog&&(we.current=!0),be.current=!1},Pe=function(){ye(!0),Ze.current=(0,y.Z)(Ne.dialog,(function(){ye(!1)}))},Te=function(e){"static"!==I?we.current||e.target!==e.currentTarget?we.current=!1:null==U||U():function(e){e.target===e.currentTarget&&Pe()}(e)},Ae=(0,b.useCallback)((function(e){return(0,k.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:s()("".concat(n,"-backdrop"),se,!A&&"show")}))}),[A,se,n]),Fe=(0,a.Z)((0,a.Z)({},c),ve);Fe.display="block";return(0,k.jsx)(L.Z.Provider,{value:Be,children:(0,k.jsx)(w.Z,{show:P,ref:Se,backdrop:I,container:q,keyboard:!0,autoFocus:V,enforceFocus:Q,restoreFocus:ee,restoreFocusOptions:te,onEscapeKeyDown:function(e){_?null==K||K(e):(e.preventDefault(),"static"===I&&Pe())},onShow:X,onHide:U,onEnter:function(e,t){e&&ze(e),null==ie||ie(e,t)},onEntering:function(e,t){null==ae||ae(e,t),(0,l.ZP)(window,"resize",Oe)},onEntered:ne,onExit:function(e){null==Ze.current||Ze.current(),null==re||re(e)},onExiting:oe,onExited:function(e){e&&(e.style.display=""),null==ce||ce(e),(0,d.Z)(window,"resize",Oe)},manager:Ce(),transition:A?D:void 0,backdropTransition:A?j:void 0,renderBackdrop:Ae,renderDialog:function(e){return(0,k.jsx)("div",(0,a.Z)((0,a.Z)({role:"dialog"},e),{},{style:Fe,className:s()(r,n,me&&"".concat(n,"-static"),!A&&"show"),onClick:I?Te:void 0,onMouseUp:Re,"aria-label":H,"aria-labelledby":z,"aria-describedby":O,children:(0,k.jsx)(B,(0,a.Z)((0,a.Z)({},ue),{},{onMouseDown:He,className:E,contentClassName:x,children:N}))}))}})})}));M.displayName="Modal";var I=Object.assign(M,{Body:N,Header:P,Title:A,Footer:z,Dialog:C,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},7153:function(e,t,n){n.d(t,{v:function(){return U}});var r=n(1413),o=n(5987),i=n(937),a=n(9829),c=n(2791),s=n(5956),l=n(7762),u=n(3272),f=n(9172);var d,v=new WeakMap;function g(e){var t,n=e.target,r=e.contentRect,o=e.borderBoxSize;null===(t=v.get(n))||void 0===t||t.forEach((function(e){e({target:n,contentSize:r,get size(){return function(e,t){if(t){var n=t[0];return{width:n.inlineSize,height:n.blockSize}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(n,o)}})}))}function h(e){e.forEach(g)}function p(e,t){d||"undefined"!==typeof ResizeObserver&&(d=new ResizeObserver(h));var n=function(e,t,n){var r;if("string"===typeof e){var o=document;t&&((0,s.k)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((function(e){var n=v.get(e);n||(n=new Set,v.set(e,n)),n.add(t),null===d||void 0===d||d.observe(e)})),function(){n.forEach((function(e){var n=v.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===d||void 0===d||d.unobserve(e)}))}}var m,y=new Set;function b(e){return y.add(e),m||(m=function(){var e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};y.forEach((function(e){return e(t)}))},window.addEventListener("resize",m)),function(){y.delete(e),!y.size&&m&&(m=void 0)}}var w=n(7258),Z=n(550),E=50,x=function(){return{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}},N={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function L(e,t,n,r){var o=n[t],i=N[t],a=i.length,c=i.position,s=o.current,l=n.time;o.current=e["scroll"+c],o.scrollLength=e["scroll"+a]-e["client"+a],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,w.Y)(0,o.scrollLength,o.current);var u=r-l;o.velocity=u>E?0:(0,Z.R)(o.current-s,u)}var S=n(3433);var k={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(void 0!==W[e]&&(e=W[e]),"string"===typeof e){var o=parseFloat(e);e.endsWith("px")?r=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?r=o/100*document.documentElement.clientWidth:e.endsWith("vh")?r=o/100*document.documentElement.clientHeight:e=o}return"number"===typeof e&&(r=t*e),n+r}var C=[0,0];function z(e,t,n,r){var o=Array.isArray(e)?e:C;return"number"===typeof e?o=[e,e]:"string"===typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,W[e]?e:"0"]),B(o[0],n,r)-B(o[1],t)}var O=n(5544),H=n(8337),R={x:0,y:0};function P(e,t,n){var r=n.offset,o=void 0===r?k.All:r,i=n.target,a=void 0===i?e:i,c=n.axis,s=void 0===c?"y":c,l="y"===s?"height":"width",u=a!==e?function(e,t){for(var n={x:0,y:0},r=e;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){var o=r.getBBox(),i=o.top,a=o.left;for(n.x+=a,n.y+=i;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(a,e):R,f=a===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:a.clientWidth,height:a.clientHeight},d={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;for(var v=!t[s].interpolate,g=o.length,h=0;h<g;h++){var p=z(o[h],d[l],f[l],u[s]);v||p===t[s].interpolatorOffsets[h]||(v=!0),t[s].offset[h]=p}v&&(t[s].interpolate=(0,O.s)(t[s].offset,(0,H.Y)(o)),t[s].interpolatorOffsets=(0,S.Z)(t[s].offset)),t[s].progress=t[s].interpolate(t[s].current)}function T(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e)for(var r=t;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent;n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n)},update:function(t){!function(e,t,n){L(e,"x",t,n),L(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&P(e,n,r)},notify:function(){return t(n)}}}var A=["container"],F=new WeakMap,D=new WeakMap,j=new WeakMap,M=function(e){return e===document.documentElement?window:e};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.container,r=void 0===n?document.documentElement:n,i=(0,o.Z)(t,A),a=j.get(r);a||(a=new Set,j.set(r,a));var c,s,d=x(),v=T(r,e,d,i);if(a.add(v),!F.has(r)){var g=function(){var e,t=(0,l.Z)(a);try{for(t.s();!(e=t.n()).done;){e.value.measure()}}catch(n){t.e(n)}finally{t.f()}},h=function(){var e,t=(0,l.Z)(a);try{for(t.s();!(e=t.n()).done;){e.value.update(f.w.timestamp)}}catch(n){t.e(n)}finally{t.f()}},m=function(){var e,t=(0,l.Z)(a);try{for(t.s();!(e=t.n()).done;){e.value.notify()}}catch(n){t.e(n)}finally{t.f()}},y=function(){u.Wi.read(g,!1,!0),u.Wi.update(h,!1,!0),u.Wi.update(m,!1,!0)};F.set(r,y);var w=M(r);window.addEventListener("resize",y,{passive:!0}),r!==document.documentElement&&D.set(r,(s=y,"function"===typeof(c=r)?b(c):p(c,s))),w.addEventListener("scroll",y,{passive:!0})}var Z=F.get(r);return u.Wi.read(Z,!1,!0),function(){var e;(0,u.Pn)(Z);var t=j.get(r);if(t&&(t.delete(v),!t.size)){var n=F.get(r);F.delete(r),n&&(M(r).removeEventListener("scroll",n),null===(e=D.get(r))||void 0===e||e(),window.removeEventListener("resize",n))}}}var Y=n(2199),_=["container","target","layoutEffect"];function K(e,t){(0,s.K)(Boolean(!t||t.current),"You have defined a ".concat(e," options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."))}var X=function(){return{scrollX:(0,i.B)(0),scrollY:(0,i.B)(0),scrollXProgress:(0,i.B)(0),scrollYProgress:(0,i.B)(0)}};function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container,n=e.target,i=e.layoutEffect,s=void 0===i||i,l=(0,o.Z)(e,_),u=(0,a.h)(X);return(s?Y.L:c.useEffect)((function(){return K("target",n),K("container",t),I((function(e){var t=e.x,n=e.y;u.scrollX.set(t.current),u.scrollXProgress.set(t.progress),u.scrollY.set(n.current),u.scrollYProgress.set(n.progress)}),(0,r.Z)((0,r.Z)({},l),{},{container:(null===t||void 0===t?void 0:t.current)||void 0,target:(null===n||void 0===n?void 0:n.current)||void 0}))}),[]),u}},8156:function(e,t,n){n.d(t,{q:function(){return g}});var r=n(1413),o=n(2791),i=n(1453),a=n(9439),c=n(937),s=n(9090),l=n(9829);var u=n(2199),f=n(5448),d=n(9172),v=n(4792);function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,o.useContext)(s._).isStatic,g=(0,o.useRef)(null),h=function(e){var t=(0,l.h)((function(){return(0,c.B)(e)}));if((0,o.useContext)(s._).isStatic){var n=(0,o.useState)(e),r=(0,a.Z)(n,2)[1];(0,o.useEffect)((function(){return t.on("change",r)}),[])}return t}((0,i.i)(e)?e.get():e),p=function(){g.current&&g.current.stop()};return(0,o.useInsertionEffect)((function(){return h.attach((function(e,o){if(n)return o(e);if(p(),g.current=(0,f.y)((0,r.Z)((0,r.Z)({keyframes:[h.get(),e],velocity:h.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01},t),{},{onUpdate:o})),!d.w.isProcessing){var i=performance.now()-d.w.timestamp;i<30&&(g.current.time=(0,v.X)(i))}return h.get()}),p)}),[JSON.stringify(t)]),(0,u.L)((function(){if((0,i.i)(e))return e.on("change",(function(e){return h.set(parseFloat(e))}))}),[h]),h}}}]);
//# sourceMappingURL=994.ed886883.chunk.js.map