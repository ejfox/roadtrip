!function(t){function o(e){if(i[e])return i[e].exports;var n=i[e]={exports:{},id:e,loaded:!1};return t[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var i={};return o.m=t,o.c=i,o.p="",o(0)}([function(t,o,i){"use strict";function e(t,o,i){var e;return function(){var n=this,a=arguments,s=function(){e=null,i||t.apply(n,a)},r=i&&!e;clearTimeout(e),e=setTimeout(s,o),r&&t.apply(n,a)}}var n=i(2),a=i(3);$(document).ready(function(){function t(){var t=$(window).scrollTop();Math.abs(l-t)<=c||(t>l&&t>d?s.removeClass("is-down").addClass("is-up"):t+$(window).height()<$(document).height()&&s.removeClass("is-up").addClass("is-down"),l=t)}var o=$('[data-sset="story"]'),i=$('[data-sset="progress"]'),s=$('[data-sset="site-header"]'),r=-56;$("audio, video").bind("play",function(){var t=this;$("audio, video").each(function(){this!==t&&this.pause()})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top+r},800),!1}})}),$('[data-sset="top"]').click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},800)});var h,l=0,c=5,d=s.outerHeight();$(window).scroll(function(){h=!0}),setInterval(function(){h&&(t(),h=!1)},250);var m,u,p=function(){return o.height()-$(window).height()},g=p(),_=function(){return m=$(window).scrollTop(),u=m/g*100,u+="%"},f=function(){i.css({width:_()})},v=e(function(){g=p(),f()},13);f(),i.css({opacity:1}),$(document).on("scroll",v),$(window).on("resize",v),$('[data-sset="story-body"]').waypoint(function(){$(s).toggleClass("is-top"),$('[data-sset="site-title"]').toggleClass("is-hidden")},{offset:"27px"}),$("[data-animated]").waypoint(function(){$(this.element).toggleClass($(this.element).data("animated")),this.destroy()},{offset:"bottom-in-view"}),a.init(),n.init()})},,function(t,o){"use strict";t.exports={init:function(){function t(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=$(document),this._$window=$(window),this._$body=$(document.body),this._boundClick=$.proxy(this._clickHandler,this)}function o(t){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=t,this._$body=$(document.body)}t.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',$.proxy(this._zoom,this))},t.prototype._zoom=function(t){var i=t.target;if(i&&"IMG"==i.tagName&&!this._$body.hasClass("zoom-overlay-open"))return t.metaKey||t.ctrlKey?window.open(t.target.getAttribute("data-original")||t.target.src,"_blank"):void(i.width>=$(window).width()-o.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new o(i),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",$.proxy(this._scrollHandler,this)),this._$document.on("keyup.zoom",$.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",$.proxy(this._touchStart,this)),document.addEventListener?document.addEventListener("click",this._boundClick,!0):document.attachEvent("onclick",this._boundClick,!0),"bubbles"in t?t.bubbles&&t.stopPropagation():t.cancelBubble=!0))},t.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),document.removeEventListener("click",this._boundClick,!0),this._activeZoom=null)},t.prototype._scrollHandler=function(t){null===this._initialScrollPosition&&(this._initialScrollPosition=$(window).scrollTop());var o=this._initialScrollPosition-$(window).scrollTop();Math.abs(o)>=40&&this._activeZoomClose()},t.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},t.prototype._clickHandler=function(t){t.preventDefault?t.preventDefault():event.returnValue=!1,"bubbles"in t?t.bubbles&&t.stopPropagation():t.cancelBubble=!0,this._activeZoomClose()},t.prototype._touchStart=function(t){this._initialTouchPosition=t.touches[0].pageY,$(t.target).on("touchmove.zoom",$.proxy(this._touchMove,this))},t.prototype._touchMove=function(t){Math.abs(t.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),$(t.target).off("touchmove.zoom"))},o.OFFSET=80,o._MAX_WIDTH=2560,o._MAX_HEIGHT=4096,o.prototype.zoomImage=function(){var t=document.createElement("img");t.onload=$.proxy(function(){this._fullHeight=Number(t.height),this._fullWidth=Number(t.width),this._zoomOriginal()},this),t.src=this._targetImage.src},o.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),$(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},o.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,i=this._fullHeight,e=($(window).scrollTop(),t/this._targetImage.width),n=$(window).height()-o.OFFSET,a=$(window).width()-o.OFFSET,s=t/i,r=a/n;a>t&&n>i?this._imgScaleFactor=e:r>s?this._imgScaleFactor=n/i*e:this._imgScaleFactor=a/t*e},o.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var t=$(this._targetImage).offset(),o=$(window).scrollTop(),i=o+$(window).height()/2,e=$(window).width()/2,n=t.top+this._targetImage.height/2,a=t.left+this._targetImage.width/2;this._translateY=i-n,this._translateX=e-a;var s="scale("+this._imgScaleFactor+")",r="translate("+this._translateX+"px, "+this._translateY+"px)";$.support.transition&&(r+=" translateZ(0)"),$(this._targetImage).css({"-webkit-transform":s,"-ms-transform":s,transform:s}),$(this._targetImageWrap).css({"-webkit-transform":r,"-ms-transform":r,transform:r}),this._$body.addClass("zoom-overlay-open")},o.prototype.close=function(){return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),$(this._targetImage).css({"-webkit-transform":"","-ms-transform":"",transform:""}),$(this._targetImageWrap).css({"-webkit-transform":"","-ms-transform":"",transform:""}),$.support.transition?void $(this._targetImage).one($.support.transition.end,$.proxy(this.dispose,this)).emulateTransitionEnd(300):this.dispose()},o.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&($(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},$(function(){(new t).listen()})}}},function(t,o){"use strict";t.exports={init:function(){function t(){var t=document.createElement("bootstrap"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in o)if(void 0!==t.style[i])return{end:o[i]};return!1}$.fn.emulateTransitionEnd=function(t){var o=!1,i=this;$(this).one("bsTransitionEnd",function(){o=!0});var e=function(){o||$(i).trigger($.support.transition.end)};return setTimeout(e,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}}}]);