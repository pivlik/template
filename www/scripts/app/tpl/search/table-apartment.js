define(["handlebars"],function(a){return a.template({1:function(a,l,n,t){var e,i,s=l.helperMissing,o="function",d=this.escapeExpression;return'<tr>\n    <td><img src="'+d((i=null!=(i=l.plan||(null!=a?a.plan:a))?i:s,typeof i===o?i.call(a,{name:"plan",hash:{},data:t}):i))+'" alt="Планировка" class="b-building__plan" /></td>\n    <td><a href="'+d((i=null!=(i=l.link||(null!=a?a.link:a))?i:s,typeof i===o?i.call(a,{name:"link",hash:{},data:t}):i))+'">Квартира №'+d((i=null!=(i=l.flat||(null!=a?a.flat:a))?i:s,typeof i===o?i.call(a,{name:"flat",hash:{},data:t}):i))+"</a></td>\n    <td>"+d((i=null!=(i=l.room||(null!=a?a.room:a))?i:s,typeof i===o?i.call(a,{name:"room",hash:{},data:t}):i))+"</td>\n    <td>"+d((i=null!=(i=l.building||(null!=a?a.building:a))?i:s,typeof i===o?i.call(a,{name:"building",hash:{},data:t}):i))+"</td>\n    <td>"+d((i=null!=(i=l.floor||(null!=a?a.floor:a))?i:s,typeof i===o?i.call(a,{name:"floor",hash:{},data:t}):i))+"</td>\n    <td>"+d((i=null!=(i=l.totalArea||(null!=a?a.totalArea:a))?i:s,typeof i===o?i.call(a,{name:"totalArea",hash:{},data:t}):i))+" м<sup>2</sup></td>\n    <td>"+d((i=null!=(i=l.livingSpace||(null!=a?a.livingSpace:a))?i:s,typeof i===o?i.call(a,{name:"livingSpace",hash:{},data:t}):i))+" м<sup>2</sup></td>\n    <td>"+d((i=null!=(i=l.price||(null!=a?a.price:a))?i:s,typeof i===o?i.call(a,{name:"price",hash:{},data:t}):i))+' р.</td>\n    <td>\n        <a href="javascript:;" title="Добавить в избранное" class="b-favorite j-favorite'+(null!=(e=l.if.call(a,null!=a?a.inFavorite:a,{name:"if",hash:{},fn:this.program(2,t,0),inverse:this.noop,data:t}))?e:"")+'" data-flat-id="'+d((i=null!=(i=l.id||(null!=a?a.id:a))?i:s,typeof i===o?i.call(a,{name:"id",hash:{},data:t}):i))+'">\n            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="240" viewBox="0 0 51 48" class="b-favorite__svg">\n                <title>Добавить в избранное</title>\n                <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>\n            </svg>\n        </a>\n    </td>\n</tr>\n'},2:function(a,l,n,t){return" is-active"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,n,t){var e;return null!=(e=l.each.call(a,null!=a?a.flats:a,{name:"each",hash:{},fn:this.program(1,t,0),inverse:this.noop,data:t}))?e:""},useData:!0})});
//# sourceMappingURL=../../../sourcemaps/app/tpl/search/table-apartment.js.map