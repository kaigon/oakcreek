!function(a,b){"function"==typeof define&&define.amd?define(["jQuery"],b):b("object"==typeof exports?require("jQuery"):a.jQuery)}(this,function(){var a=function(){var a={},b=4,c=new RegExp("{{([^}]+)}}","g"),d=function(a){for(var b,d=[];b=c.exec(a);)d.push(b);return d};return a.parse=function(a){var c={inpts:{},chars:{}},e=d(a),f=a.length,g=0,h=0,i=0,j=function(a){for(var d=a.length,e=0;d>e;e++)c.inpts[h]=a.charAt(e),h++;g++,i+=a.length+b-1};for(i;f>i;i++)g<e.length&&i===e[g].index?j(e[g][1]):c.chars[i-g*b]=a.charAt(i);return c.mLength=i-g*b,c},a}(),b=function(){{var a={};"undefined"!=typeof navigator?navigator.userAgent:null}return a.extend=function(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])a[c]=arguments[b][c];return a},a.addChars=function(a,b,c){return a.substr(0,c)+b+a.substr(c,a.length)},a.removeChars=function(a,b,c){return a.substr(0,b)+a.substr(c,a.length)},a.isBetween=function(a,b){return b.sort(function(a,b){return a-b}),a>b[0]&&a<b[1]},a.addListener=function(a,b,c){return"undefined"!=typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},a.preventDefault=function(a){return a.preventDefault?a.preventDefault():a.returnValue=!1},a.getClip=function(a){return a.clipboardData?a.clipboardData.getData("Text"):window.clipboardData?window.clipboardData.getData("Text"):void 0},a.getMatchingKey=function(a,b,c){for(var d in c){var e=c[d];if(a===e.which&&b===e.keyCode)return d}},a.isDelKeyDown=function(b,c){var d={backspace:{which:8,keyCode:8},"delete":{which:46,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isDelKeyPress=function(b,c){var d={backspace:{which:8,keyCode:8,shiftKey:!1},"delete":{which:0,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isSpecialKeyPress=function(b,c){var d={tab:{which:0,keyCode:9},enter:{which:13,keyCode:13},end:{which:0,keyCode:35},home:{which:0,keyCode:36},leftarrow:{which:0,keyCode:37},uparrow:{which:0,keyCode:38},rightarrow:{which:0,keyCode:39},downarrow:{which:0,keyCode:40},F5:{which:116,keyCode:116}};return a.getMatchingKey(b,c,d)},a.isModifier=function(a){return a.ctrlKey||a.altKey||a.metaKey},a.forEach=function(a,b,c){if(a.hasOwnProperty("length"))for(var d=0,e=a.length;e>d&&b.call(c,a[d],d,a)!==!1;d++);else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===!1)break},a}(),c=function(a,b){function c(c){var e=[],f=[];b.forEach(c,function(c){b.forEach(c,function(b,c){var g=a.parse(b),h=d(c);return e.push(h),f.push(g),!1})});var g=function(a){var c;return b.forEach(e,function(b,d){return b.test(a)?(c=d,!1):void 0}),void 0===c?null:f[c]};return{getPattern:g,patterns:f,matchers:e}}var d=function(a){return"*"===a?/.*/:new RegExp(a)};return c}(a,b),d=function(){var a={};return a.get=function(a){if("number"==typeof a.selectionStart)return{begin:a.selectionStart,end:a.selectionEnd};var b=document.selection.createRange();if(b&&b.parentElement()===a){var c=a.createTextRange(),d=a.createTextRange(),e=a.value.length;return c.moveToBookmark(b.getBookmark()),d.collapse(!1),c.compareEndPoints("StartToEnd",d)>-1?{begin:e,end:e}:{begin:-c.moveStart("character",-e),end:-c.moveEnd("character",-e)}}return{begin:0,end:0}},a.set=function(a,b){if("object"!=typeof b&&(b={begin:b,end:b}),a.setSelectionRange)a.focus(),a.setSelectionRange(b.begin,b.end);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b.end),c.moveStart("character",b.begin),c.select()}},a}(),e=function(a,b,c){function d(b,d){var f=this;if(f.el=b,!f.el)throw new TypeError("Must provide an existing element");if(f.opts=c.extend({},e,d),"undefined"!=typeof f.opts.pattern&&(f.opts.patterns=f._specFromSinglePattern(f.opts.pattern),delete f.opts.pattern),"undefined"==typeof f.opts.patterns)throw new TypeError("Must provide a pattern or array of patterns");f.patternMatcher=a(f.opts.patterns),f._updatePattern(),f.hldrs={},f.focus=0,c.addListener(f.el,"keydown",function(a){f._keyDown(a)}),c.addListener(f.el,"keypress",function(a){f._keyPress(a)}),c.addListener(f.el,"paste",function(a){f._paste(a)}),f.opts.persistent&&(f._processKey("",!1),f.el.blur(),c.addListener(f.el,"focus",function(a){f._focus(a)}),c.addListener(f.el,"click",function(a){f._focus(a)}),c.addListener(f.el,"touchstart",function(a){f._focus(a)}))}var e={persistent:!1,repeat:!1,placeholder:" "},f={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/};return d.addInptType=function(a,b){f[a]=b},d.prototype.resetPattern=function(c){this.opts.patterns=c?this._specFromSinglePattern(c):this.opts.patterns,this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this._removeChars(),this.patternMatcher=a(this.opts.patterns);var d=this.patternMatcher.getPattern(this.val);this.mLength=d.mLength,this.chars=d.chars,this.inpts=d.inpts,this._processKey("",!1,!0)},d.prototype._updatePattern=function(){var a=this.patternMatcher.getPattern(this.val);a&&(this.mLength=a.mLength,this.chars=a.chars,this.inpts=a.inpts)},d.prototype._keyDown=function(a){var b=a.which||a.keyCode;return b&&c.isDelKeyDown(a.which,a.keyCode)?(this._processKey(null,b),c.preventDefault(a)):void 0},d.prototype._keyPress=function(a){var b,d;return b=a.which||a.keyCode,d=c.isSpecialKeyPress(a.which,a.keyCode),c.isDelKeyPress(a.which,a.keyCode)||d||c.isModifier(a)?void 0:(this._processKey(String.fromCharCode(b),!1),c.preventDefault(a))},d.prototype._paste=function(a){return this._processKey(c.getClip(a),!1),c.preventDefault(a)},d.prototype._focus=function(){var a=this;setTimeout(function(){var c=b.get(a.el),d=c.end>a.focus,e=0===c.end;(d||e)&&b.set(a.el,a.focus)},0)},d.prototype._processKey=function(a,d,e){if(this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this.sel.begin!==this.sel.end)this.delta=-1*Math.abs(this.sel.begin-this.sel.end),this.val=c.removeChars(this.val,this.sel.begin,this.sel.end);else if(d&&46===d)this._delete();else if(d&&this.sel.begin-1>=0)this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta-=1;else if(d)return!0;d||(this.val=c.addChars(this.val,a,this.sel.begin),this.delta+=a.length),this._formatValue(e)},d.prototype._delete=function(){for(;this.chars[this.sel.begin];)this._nextPos();this.sel.begin<this.val.length&&(this._nextPos(),this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta=-1)},d.prototype._nextPos=function(){this.sel.end++,this.sel.begin++},d.prototype._formatValue=function(a){this.newPos=this.sel.end+this.delta,this._removeChars(),this._updatePattern(),this._validateInpts(),this._addChars(),this.el.value=this.val.substr(0,this.mLength),("undefined"==typeof a||a===!1)&&b.set(this.el,this.newPos)},d.prototype._removeChars=function(){this.sel.end>this.focus&&(this.delta+=this.sel.end-this.focus);for(var a=0,b=0;b<=this.mLength;b++){var d,e=this.chars[b],f=this.hldrs[b],g=b+a;g=b>=this.sel.begin?g+this.delta:g,d=this.val.charAt(g),(e&&e===d||f&&f===d)&&(this.val=c.removeChars(this.val,g,g+1),a--)}this.hldrs={},this.focus=this.val.length},d.prototype._validateInpts=function(){for(var a=0;a<this.val.length;a++){var b=this.inpts[a],d=!f[b],e=!d&&!f[b].test(this.val.charAt(a)),g=this.inpts[a];(d||e)&&g&&(this.val=c.removeChars(this.val,a,a+1),this.focusStart--,this.newPos--,this.delta--,a--)}},d.prototype._addChars=function(){if(this.opts.persistent){for(var a=0;a<=this.mLength;a++)this.val.charAt(a)||(this.val=c.addChars(this.val,this.opts.placeholder,a),this.hldrs[a]=this.opts.placeholder),this._addChar(a);for(;this.chars[this.focus];)this.focus++}else for(var b=0;b<=this.val.length;b++){if(this.delta<=0&&b===this.focus)return!0;this._addChar(b)}},d.prototype._addChar=function(a){var b=this.chars[a];return b?(c.isBetween(a,[this.sel.begin-1,this.newPos+1])&&(this.newPos++,this.delta++),a<=this.focus&&this.focus++,this.hldrs[a]&&(delete this.hldrs[a],this.hldrs[a+1]=this.opts.placeholder),void(this.val=c.addChars(this.val,b,a))):!0},d.prototype._specFromSinglePattern=function(a){return[{"*":a}]},d}(c,d,b),f="formatter";$.fn[f]=function(a){return"object"==typeof a&&this.each(function(){$.data(this,"plugin_"+f)||$.data(this,"plugin_"+f,new e(this,a))}),this.resetPattern=function(a){return this.each(function(){var b=$.data(this,"plugin_"+f);b&&b.resetPattern(a)}),this},this},$.fn[f].addInptType=function(a,b){e.addInptType(a,b)}});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9(h){\'1X 1W\';5 j={r:\'r\',Q:\'1V\',t:\'t\',8:\'1T\',q:\'1P\',C:\'C\'};5 k={1O:1N,1M:1K,1J:18,1I:1c,1H:18,1G:1c};9 Y(a,b){5 c,G,i,O;m(W V===\'R\'&&W L===\'9\'){c=\'1A://\'+(1z.1x.I(/^1w/i)?\'/\':\'\')+L(\'1u\').1s(\'.\');m(b&&b.J(0)!==\'/\'&&!b.I(/^\\w+:\\/\\//)){b=c+L(\'8\').1r+b}G=L(\'1q\').Y(b||c)}F{c=V.1p.19;G=V.1o(\'a\');G.19=b||c}O=(b||c).I(/\\/\\/(.*?)(?::(.*?))?@/)||[];y(i K j){a[i]=G[j[i]]||\'\'}a.r=a.r.p(/:$/,\'\');a.q=a.q.p(/^\\?/,\'\');a.C=v(a.C.p(/^#/,\'\'));a.M=v(O[1]||\'\');a.N=v(O[2]||\'\');a.t=(k[a.r]===a.t||a.t===0)?\'\':a.t;m(!a.r&&!/^([a-z]+:)?\\/\\/\\/?/.1D(b)){5 d=1a o(c.I(/(.*\\/)/)[0]);5 e=d.8.P(\'/\');5 f=a.8.P(\'/\');5 g=[\'r\',\'M\',\'N\',\'Q\',\'t\'];5 s=g.H;e.1f();y(i=0;i<s;i++){a[g[i]]=d[g[i]]}1g(f[0]==\'..\'){e.1f();f.1k()}a.8=(b.J(0)!=\'/\'?e.17(\'/\'):\'\')+\'/\'+f.17(\'/\')}F{a.8=a.8.p(/^\\/?/,\'/\')}a.1i((a.8.J(0)==\'/\'?a.8.1j(1):a.8).P(\'/\'));a.q=1a 15(a.q)}9 x(s){l 1l(s).p(/\'/g,\'%1m\')}9 v(s){s=s.p(/\\+/g,\' \');s=s.p(/%([1n][0-A-f])%([T][0-A-f])%([T][0-A-f])/13,9(a,b,c,d){5 e=B(b,16)-1t;5 f=B(c,16)-10;m(e===0&&f<1v){l a}5 g=B(d,16)-10;5 n=(e<<12)+(f<<6)+g;m(n>1y){l a}l U.X(n)});s=s.p(/%([1B][0-A-f])%([T][0-A-f])/13,9(a,b,c){5 d=B(b,16)-1C;m(d<2){l a}5 e=B(c,16)-10;l U.X((d<<6)+e)});l s.p(/%([0-7][0-A-f])/13,9(a,b){l U.X(B(b,16))})}9 15(a){5 b=/([^=&]+)(=([^&]*))?/g;5 c;1g((c=b.1E(a))){5 d=1F(c[1].p(/\\+/g,\' \'));5 e=c[3]?v(c[3]):\'\';m(!(4[d]===R||4[d]===1b)){m(!(4[d]D 1h)){4[d]=[4[d]]}4[d].1L(e)}F{4[d]=e}}}15.u.Z=9(){5 s=\'\';5 e=x;5 i,E;y(i K 4){m(4[i]D 11||4[i]===1b){1Q}m(4[i]D 1h){5 a=4[i].H;m(a){y(E=0;E<a;E++){s+=s?\'&\':\'\';s+=e(i)+\'=\'+e(4[i][E])}}F{s+=(s?\'&\':\'\')+e(i)+\'=\'}}F{s+=s?\'&\':\'\';s+=e(i)+\'=\'+e(4[i])}}l s};9 o(a){Y(4,a)}o.u.1R=9(){y(5 a K 4.q){m(!(4.q[a]D 11)){1S 4.q[a]}}l 4};o.u.1e=9(){5 a=0;5 b;y(b K 4){m(!(4[b]D 11)){a++}}l a};o.u.1U=9(){l 4.1e()===0};o.u.1i=9(a){5 b=\'\';5 i=0;5 s;m(a&&a.H&&a+\'\'!==a){m(4.1d()){b=\'/\'}y(s=a.H;i<s;i++){a[i]=!i&&a[i].I(/^\\w:$/)?a[i]:x(a[i])}4.8=b+a.17(\'/\')}a=(4.8.J(0)===\'/\'?4.8.1j(1):4.8).P(\'/\');y(i=0,s=a.H;i<s;i++){a[i]=v(a[i])}l a};o.u.x=x;o.u.v=v;o.u.1d=9(){l 4.r||4.8.J(0)===\'/\'};o.u.Z=9(){l((4.r&&(4.r+\'://\'))+(4.M&&(x(4.M)+(4.N&&(\':\'+x(4.N)))+\'@\'))+(4.Q&&4.Q)+(4.t&&(\':\'+4.t))+(4.8&&4.8)+(4.q.Z()&&(\'?\'+4.q))+(4.C&&(\'#\'+x(4.C))))};h[h.14?\'14\':\'o\']=o}(W S!==\'R\'&&S.14?S:1Y));',62,123,'||||this|var|||path|function||||||||||||return|if||Url|replace|query|protocol||port|prototype|decode||encode|for||9a|parseInt|hash|instanceof|ii|else|link|length|match|charAt|in|require|user|pass|auth|split|host|undefined|module|89ab|String|document|typeof|fromCharCode|parse|toString|0x80|Function||gi|exports|QueryString||join|80|href|new|null|443|isAbsolute|queryLength|pop|while|Array|paths|slice|shift|encodeURIComponent|27|ef|createElement|location|url|sep|realpathSync|0xE0|fs|32|win|platform|0xFFFF|process|file|cd|0xC0|test|exec|decodeURIComponent|wss|ws|https|http|70|push|gopher|21|ftp|search|continue|clearQuery|delete|pathname|isEmptyQuery|hostname|strict|use|window'.split('|'),0,{}));
/*
 * jquery.dragbetter 0.1.3
 *
 * Author: Andrey Mikhaylov aka lolmaus
 * Email: lolmaus@gmail.com
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Based on jquery.draghover.js by William Meleyal (william.meleyal@gmail.com): https://gist.github.com/meleyal/3794126.
 *
 * Inspired by jquery.event.dragout by Dan Cork ([Firstname].[Lastname]@kickinteractive.net): https://github.com/dancork/jquery.event.dragout .
 *
 * Thanks to Ian Bytchek for support.
 *
 */

;(function($){

  "use strict";

  $.event.special.dragbetterenter = {

    setup: function() {

      var
        self = this,
        $self = $(self);

      self.dragbetterCollection = [];

      $self.on('dragenter.dragbetterenter', function (event) {

        if (self.dragbetterCollection.length === 0) {
          $self.triggerHandler('dragbetterenter');
        }

        self.dragbetterCollection.push(event.target);
      });

      $self.on('drop.dragbetterenter dragend.dragbetterenter', function () {
        self.dragbetterCollection = [];
        $self.triggerHandler('dragbetterleave');
      });
    },

    teardown: function() {
      $(this).off('.dragbetterenter');
    }

  };

  $.event.special.dragbetterleave = {

    setup: function() {

      if (!this.dragbetterCollection)
        throw "Triggered dragbetterleave without dragbetterenter. Do you listen to dragbetterenter?";

      var
        self = this,
        $self = $(self);


      $self.on('dragleave.dragbetterleave', function (event) {

        // Timeout is needed to ensure that the leave event on the previous element
        // fires AFTER the enter event on the next element.
        setTimeout(function() {

          var currentElementIndex = self.dragbetterCollection.indexOf(event.target);
          if (currentElementIndex > -1)
            self.dragbetterCollection.splice(currentElementIndex, 1);

          if (self.dragbetterCollection.length === 0) {
            $self.triggerHandler('dragbetterleave');
          }
        }, 1);
      });
    },

    teardown: function() {
      $(this).off('.dragbetterleave');
    }

  };

})(window.jQuery);