define(["handlebars"],function(a){return a.template({1:function(a,t,l,n){var i;return'        <img src="'+this.escapeExpression((i=null!=(i=t.image||(null!=a?a.image:a))?i:t.helperMissing,"function"==typeof i?i.call(a,{name:"image",hash:{},data:n}):i))+'" alt="">\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,t,l,n){var i,e,s=t.helperMissing,o="function";return'<div class="b-map-tooltip">\n    <a href="javascript:;" class="b-map-tooltip__close">x</a>\n'+(null!=(i=t.if.call(a,null!=a?a.image:a,{name:"if",hash:{},fn:this.program(1,n,0),inverse:this.noop,data:n}))?i:"")+'    <div class="b-map-tooltip__title">\n        '+(null!=(e=null!=(e=t.title||(null!=a?a.title:a))?e:s,i=typeof e===o?e.call(a,{name:"title",hash:{},data:n}):e)?i:"")+'\n    </div>\n    <div class="b-map-tooltip__txt">\n        '+(null!=(e=null!=(e=t.text||(null!=a?a.text:a))?e:s,i=typeof e===o?e.call(a,{name:"text",hash:{},data:n}):e)?i:"")+'\n    </div>\n    <div class="b-map-tooltip__arrow"></div>\n</div>\n'},useData:!0})});
//# sourceMappingURL=../../../sourcemaps/app/tpl/map/tooltip.js.map
