(()=>{(function(){"use strict";var D=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"dates"},[e("k-button-group",[e("k-button",{attrs:{icon:"calendar"}},[t._v(" "+t._s(t.label)+" ")])],1)],1)},A=[],je="";function i(t,r,e,s,a,n,o,_){var l=typeof t=="function"?t.options:t;r&&(l.render=r,l.staticRenderFns=e,l._compiled=!0),s&&(l.functional=!0),n&&(l._scopeId="data-v-"+n);var c;if(o?(c=function(u){u=u||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!u&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(u=__VUE_SSR_CONTEXT__),a&&a.call(this,u),u&&u._registeredComponents&&u._registeredComponents.add(o)},l._ssrRegister=c):a&&(c=_?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var we=l.render;l.render=function(Se,F){return c.call(F),we(Se,F)}}else{var R=l.beforeCreate;l.beforeCreate=R?[].concat(R,c):[c]}return{exports:t,options:l}}const T={props:{dates:Object,timespan:Object},computed:{label(){const t=this.dates.from,r=this.dates.to;return this.timespan.unit==="day"?`${t.format("D")} ${this.month(t)} ${t.format("YYYY")}`:this.timespan.unit==="month"?`${this.month(t)} ${t.format("YYYY")}`:this.timespan.unit==="year"?`${t.format("YYYY")}`:t.isSame(r,"month")?`
        ${t.format("D")} - ${r.format("D")}
        ${this.month(r)} ${r.format("YYYY")}
        `:t.isSame(r,"year")?`
        ${t.format("D")} ${this.month(t)} -
        ${r.format("D")} ${this.month(r)} ${r.format("YYYY")}
        `:`
      ${t.format("D")} ${this.month(t)} ${t.format("YYYY")} -
      ${r.format("D")} ${this.month(r)} ${r.format("YYYY")}`},value(){return Object.values(this.dates).map(t=>t.format("YYYY-MM-DD HH:mm:ss"))}},methods:{month(t){return t=t.format("MMMM"),t=this.$helper.string.lcfirst(t),this.$t("months."+t)}}},d={};var E=i(T,D,A,!1,P,null,null,null);function P(t){for(let r in d)this[r]=d[r]}var N=function(){return E.exports}(),L=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-button-group",{staticClass:"prevnext"},[e("k-button",{attrs:{icon:"angle-left",disabled:!t.hasPrev||t.isAll},on:{click:function(s){return t.onNavigate("subtract")}}}),t._l(["all","year","month","day"],function(s){return e("k-button",{key:s,attrs:{current:t.isCurrent(s),disabled:t.isDisabled(s)},on:{click:function(a){return t.set(s)}}},[t._v(" "+t._s(t.$t("retour.stats.mode."+s))+" ")])}),e("k-button",{attrs:{icon:"angle-right",disabled:!t.hasNext||t.isAll},on:{click:function(s){return t.onNavigate("add")}}})],2)},H=[],Me="";const U={props:{dates:Object,timespan:Object},computed:{first(){return this.$library.dayjs(this.timespan.first)},last(){return this.$library.dayjs(this.timespan.last)},hasPrev(){return this.dates.from.isAfter(this.first)},hasNext(){return this.dates.to.isBefore(this.last)||this.dates.to.isBefore(this.$library.dayjs())},isAll(){return this.dates.from.isSame(this.first,"day")&&this.dates.to.isSame(this.last,"day")}},methods:{isCurrent(t){return t==="all"?this.isAll:t===this.timespan.unit},isDisabled(t){return t==="all"&&(!this.timespan.first||!this.timespan.last)},set(t){if(t==="all")return this.$emit("navigate",{from:this.first,to:this.last});let r=Object.assign({},this.dates);t===this.timespan.unit&&(r={from:this.$library.dayjs(),to:this.$library.dayjs()}),this.$emit("navigate",{from:r.from.startOf(t),to:r.from.endOf(t)})},onNavigate(t){let r=this.timespan.unit,e=1;r==="week"&&(e=7,r="day"),this.$emit("navigate",{from:this.dates.from[t](e,r).startOf(r),to:this.dates.to[t](e,r).endOf(r)})}}},v={};var B=i(U,L,H,!1,q,null,null,null);function q(t){for(let r in v)this[r]=v[r]}var V=function(){return B.exports}(),Z=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-view",{staticClass:"retour-navigation"},[e("header",{staticClass:"k-header"},[e("k-bar",{staticClass:"k-header-buttons",scopedSlots:t._u([{key:"left",fn:function(){return[e("dates",{attrs:{dates:t.dates,timespan:t.timespan},on:{navigate:t.navigate}})]},proxy:!0},{key:"right",fn:function(){return[e("prev-next",{attrs:{dates:t.dates,timespan:t.timespan},on:{navigate:t.navigate}})]},proxy:!0}])}),e("k-tabs",{attrs:{tab:t.tab,tabs:t.tabs}})],1)])},z=[],Oe="";const W={components:{Dates:N,PrevNext:V},props:{tab:String,tabs:Array,timespan:Object},computed:{dates(){return{from:this.$library.dayjs(this.timespan.from),to:this.$library.dayjs(this.timespan.to)}}},methods:{navigate(t){this.$reload({query:{from:t.from.format("YYYY-MM-DD"),to:t.to.format("YYYY-MM-DD")}})}}},p={};var X=i(W,Z,z,!1,I,null,null,null);function I(t){for(let r in p)this[r]=p[r]}var K=function(){return X.exports}(),G=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("figure",{staticClass:"chart-pie"},[e("div",{staticClass:"graph",style:"--gradient: "+t.gradient}),e("figcaption",[t._l(t.data,function(s){return[e("k-icon",{key:s.label+"-icon",style:"--color:"+s.color,attrs:{type:"circle"}}),e("div",{key:s.label+"-no"},[t._v(" "+t._s(new Intl.NumberFormat().format(s.data))+" ")]),e("div",{key:s.label+"-label"},[t._v(" "+t._s(s.label)+" ")])]})],2)])},J=[],Re="";const Q={props:{data:Array},computed:{gradient(){let t="",r=0;const e=this.total/180;for(let s=0;s<this.data.length;s++)t+=`${this.data[s].color} ${r}deg,`,r+=this.data[s].data/e,t+=`${this.data[s].color} ${r}deg,`;return t+="transparent 180deg",t},total(){return this.data.reduce((t,r)=>t+=r.data,0)}}},h={};var tt=i(Q,G,J,!1,et,null,null,null);function et(t){for(let r in h)this[r]=h[r]}var rt=function(){return tt.exports}(),st=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",{staticClass:"chart-areas"},[e("thead",[e("tr",t._l(t.axisY,function(s){return e("th",{key:s},[t._v(" "+t._s(s)+" ")])}),0)]),e("tbody",t._l(t.data,function(s,a){return e("tr",{key:a,on:{dblclick:function(n){return t.onZoom(s)}}},t._l(s.areas,function(n,o){return e("td",{key:t.segmentInde+"_"+o,style:"--color: "+t.color(a,n)+"; "+t.clip(a,o)})}),0)}),0),e("tfoot",{attrs:{"data-less":t.data.length>30}},t._l(t.data,function(s){return e("tr",{key:s.label,attrs:{"data-current":t.isCurrent(s)},on:{dblclick:function(a){return t.onZoom(s)}}},[e("td",[t._v(t._s(t.label(s)))])])}),0)])},at=[],Fe="";const nt={props:{data:Array,timespan:Object},computed:{axisY(){const t=this.max/5;return[1,2,3,4,5].map(r=>{let e=r*t;return e>=1e3&&(e=Math.floor(e/100)/10+"k"),e})},format(){var t;return(t={day:"HH",week:"ddd",mnoth:"D",year:"MMM",months:"MMM YY"}[this.timespan.unit])!=null?t:"D MMM"},subunit(){var t;return(t={day:"hour",year:"month"}[this.timespan.unit])!=null?t:"day"},max(){let t=Math.max(...this.data.map(r=>r.areas.reduce((e,s)=>e+=s.data,0)));if(t>0){const r=t.toString().length,e=Math.pow(10,r)/4;return Math.ceil(t*1.1/e)*e}return 5}},methods:{bounds(t,r){const e=t.areas.slice(0,r).reduce((s,a)=>s+=a.data,0);return{path:e+t.areas[r].data,mask:e}},clip(t,r){let e=this.bounds(this.data[t],r),s={path:0,mask:0};return this.data[t+1]&&(s=this.bounds(this.data[t+1],r)),`--p0: ${e.path/this.max}; --p1: ${s.path/this.max}; --m0: ${e.mask/this.max}; --m1: ${s.mask/this.max};`},color(t,r){const e=this.data[t+1];if(e){const s=this.$library.dayjs(e.label),a=this.$library.dayjs();if(s.isAfter(a,this.subunit))return"transparent"}return r.color},isCurrent(t){const r=this.$library.dayjs();return this.$library.dayjs(t.label).isSame(r,this.subunit)},label(t){return this.$library.dayjs(t.label).format(this.format)},onZoom(t){const r=this.$library.dayjs(t.label);this.$reload({query:{from:r.startOf(this.subunit).format("YYYY-MM-DD"),to:r.endOf(this.subunit).format("YYYY-MM-DD")}})}}},f={};var it=i(nt,st,at,!1,ot,null,null,null);function ot(t){for(let r in f)this[r]=f[r]}var lt=function(){return it.exports}(),ut=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-view",{staticClass:"retour-stats"},[e("pie",{attrs:{data:t.pie}}),e("timeline",{attrs:{data:t.areas,timespan:t.timespan}})],1)},ct=[],De="";const _t={components:{Pie:rt,Timeline:lt},props:{data:Array,timespan:Object},computed:{areas(){return this.data.map(t=>({label:t.date,areas:[{data:t.redirected,color:"var(--color-focus)"},{data:t.resolved,color:"var(--color-border)"},{data:t.failed,color:"var(--color-negative)"}]}))},pie(){return[{data:this.data.reduce((t,r)=>t+=r.redirected,0),color:"var(--color-focus)",label:this.$t("retour.stats.redirected")},{data:this.data.reduce((t,r)=>t+=r.resolved,0),color:"var(--color-border)",label:this.$t("retour.stats.resolved")},{data:this.data.reduce((t,r)=>t+=r.failed,0),color:"var(--color-negative)",label:this.$t("retour.stats.failed")}]}}},m={};var dt=i(_t,ut,ct,!1,vt,null,null,null);function vt(t){for(let r in m)this[r]=m[r]}var pt=function(){return dt.exports}(),ht=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"list"},[e("header",[e("div"),t._t("button")],2),t.rows.length?e("k-table",{attrs:{columns:t.columns,index:t.limit*(t.page-1)+1,options:t.options,rows:t.paginatedRows},on:{cell:function(s){return t.$emit("cell",s)},header:function(s){return t.$emit("header",s)},input:function(s){return t.$emit("input",s)},option:t.onOption}}):e("k-empty",{attrs:{layout:"cards"}},[t._v(" "+t._s(t.empty)+" ")]),e("footer",[e("div",{staticClass:"limit"},[e("select",{domProps:{value:t.storedLimit},on:{input:function(s){return t.onLimit(s.target.value)}}},[t._l([10,25,50],function(s){return e("option",{key:s,domProps:{value:s}},[t._v(" "+t._s(s)+" ")])}),e("option",{attrs:{value:"all"}},[t._v(" "+t._s(t.$t("retour.table.perPage.all"))+" ")])],2),t._v("\xA0"+t._s(t.$t("retour.table.perPage.after"))+" ")]),e("k-pagination",{attrs:{details:!0,limit:t.limit,page:t.page,total:t.rows.length},on:{paginate:t.onPaginate}}),e("div")],1)],1)},ft=[],Ae="";const mt={props:{name:String,columns:Object,options:Array,rows:{type:Array,default(){return[]}},empty:String},data(){return{page:1,storedLimit:sessionStorage.getItem("retour$"+this.name+"$limit")||10}},computed:{paginatedRows(){return!this.limit||this.limit==="all"?this.rows:this.rows.slice(this.limit*(this.page-1),this.limit*this.page)},limit(){return this.storedLimit==="all"?this.rows.length:parseInt(this.storedLimit)}},methods:{onLimit(t){this.page=1,this.storedLimit=t,sessionStorage.setItem("retour$"+this.name+"$limit",t)},onOption(t,r,e){this.$emit("option",t,r,e)},onPaginate(t){this.page=t.page}}},$={};var $t=i(mt,ht,ft,!1,bt,null,null,null);function bt(t){for(let r in $)this[r]=$[r]}var b=function(){return $t.exports}(),yt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-view",[e("list",{attrs:{name:"redirects",columns:t.columns,empty:t.$t("retour.redirects.empty"),options:t.options,rows:t.data},on:{cell:function(s){return t.onOption("edit",s.row,s.rowIndex,s.columnIndex)},option:t.onOption},scopedSlots:t._u([{key:"button",fn:function(){return[e("k-button",{attrs:{icon:"add"},on:{click:function(s){return t.onOption("create")}}},[t._v(" "+t._s(t.$t("add"))+" ")])]},proxy:!0}])})],1)},kt=[];const gt={components:{List:b},props:{data:Object,hasLog:Boolean},computed:{columns(){let t={from:{label:this.$t("retour.redirects.from"),type:"link",width:"7/20"},to:{label:this.$t("retour.redirects.to"),type:"link",width:"7/20"},status:{label:this.$t("retour.redirects.status"),type:"status",width:"1/10"},priority:{label:this.$t("retour.redirects.priority.abbr"),type:"priority",width:"1/20"}};return this.hasLog&&(t.hits={label:this.$t("retour.hits"),width:"1/10",type:"count"}),t},options(){return[{text:this.$t("edit"),icon:"edit",click:"edit"},{text:this.$t("remove"),icon:"trash",click:"delete"}]}},methods:{onOption(t,r={},e=null,s=null){if(t==="create")return this.$dialog("retour/redirects/create");const a=encodeURIComponent(r.from);return this.$dialog(`retour/redirects/${a}/${t}`,{query:{column:s}})}}},y={};var xt=i(gt,yt,kt,!1,Ct,null,null,null);function Ct(t){for(let r in y)this[r]=y[r]}var Yt=function(){return xt.exports}(),wt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-view",[e("list",{attrs:{name:"failures",columns:t.columns,empty:t.$t("retour.failures.empty"),options:t.options,rows:t.data},on:{option:t.onOption},scopedSlots:t._u([{key:"button",fn:function(){return[e("k-button",{attrs:{icon:"trash"},on:{click:function(s){return t.$dialog("retour/failures/flush")}}},[t._v(" "+t._s(t.$t("retour.failures.clear"))+" ")])]},proxy:!0}])})],1)},St=[];const jt={components:{List:b},props:{data:Object},computed:{columns(){return{path:{label:this.$t("retour.failures.path"),type:"link",width:"1/2"},referrer:{label:this.$t("retour.failures.referrer"),type:"link",width:"1/2"},hits:{label:this.$t("retour.hits"),type:"count",width:"1/12",align:"right"}}},options(){return[{text:this.$t("retour.failures.resolve"),icon:"add",click:"resolve"},{text:this.$t("remove"),icon:"trash",click:"delete"}]}},methods:{onOption(t,r){const e=encodeURIComponent(r.path);return this.$dialog(`retour/failures/${e}/${t}`)}}},k={};var Mt=i(jt,wt,St,!1,Ot,null,null,null);function Ot(t){for(let r in k)this[r]=k[r]}var Rt=function(){return Mt.exports}(),Ft=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-view",{staticClass:"retour-plugin-tab"},[e("header",[e("h3",[e("k-icon",{attrs:{type:"road-sign"}}),t._v(" Retour for Kirby")],1)]),e("ul",{staticClass:"k-system-info-box",staticStyle:{"--columns":"4"}},[e("li",[e("dl",[e("dt",[t._v(" "+t._s(t.$t("retour.system.redirects"))+" ")]),e("dd",[t._v(t._s(t.data.redirects))])])]),e("li",[e("dl",[e("dt",[t._v(" "+t._s(t.$t("retour.system.failures"))+" ")]),e("dd",[t._v(t._s(t.data.failures))])])]),e("li",[e("dl",[e("dt",[t._v(" "+t._s(t.$t("retour.system.deleteAfter"))+" ")]),e("dd",[t._v(" "+t._s(t.$t("retour.system.deleteAfter.months",{count:t.data.deleteAfter}))+" ")])])]),e("li",[e("dl",[e("dt",[t._v(" "+t._s(t.$t("retour.system.support"))+" ")]),e("dd",[e("k-button",{attrs:{link:"https://paypal.me/distantnative",target:"_blank",theme:"positive"}},[t._v(" \u{1F49B} "+t._s(t.$t("retour.system.support.donate"))+" ")])],1)])])]),e("footer",{staticClass:"mt-2"},[e("k-text",{attrs:{theme:"help"},domProps:{innerHTML:t._s(t.$t("retour.system.docs",{docs:"https://github.com/distantnative/retour-for-kirby"}))}})],1)])},Dt=[],Te="";const At={props:{data:Object}},g={};var Tt=i(At,Ft,Dt,!1,Et,null,null,null);function Et(t){for(let r in g)this[r]=g[r]}var Pt=function(){return Tt.exports}(),Nt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-inside",{staticClass:"retour"},[t.stats?[e("stats",{attrs:{data:t.stats,timespan:t.timespan}}),e("navigation",{attrs:{tab:t.tab,tabs:t.tabs,timespan:t.timespan}})]:t._e(),e(""+t.tab+"-tab",{tag:"component",attrs:{data:t.data,"has-log":!!t.stats}})],2)},Lt=[];const Ht={components:{Stats:pt,Navigation:K,FailuresTab:Rt,RedirectsTab:Yt,SystemTab:Pt},props:{data:[Object,Array],stats:[Boolean,Array],tab:String,tabs:Array,timespan:Array}},x={};var Ut=i(Ht,Nt,Lt,!1,Bt,null,null,null);function Bt(t){for(let r in x)this[r]=x[r]}var qt=function(){return Ut.exports}(),Vt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",t._g({staticClass:"k-table",attrs:{"data-sortable":t.sortable}},t.$listeners),[e("thead",[e("tr",[e("th",{staticClass:"k-table-index-column"},[t._v(" # ")]),t._l(t.columns,function(s,a){return e("th",{key:a+"-header",staticClass:"k-table-column",style:"width:"+t.width(s.width),on:{click:function(n){return t.onHeader({label:s.label||a,column:s,columnIndex:a})}}},[t._t("header",function(){return[e("p",{staticClass:"k-table-header-label"},[t._v(" "+t._s(s.label||a)+" ")])]},null,{column:s,columnIndex:a,label:s.label||a})],2)}),t.options?e("th",{staticClass:"k-table-options-column"},[t._t("button")],2):t._e()],2)]),e("k-draggable",{attrs:{list:t.values,options:t.dragOptions,handle:!0,element:"tbody"},on:{end:t.onSort}},t._l(t.values,function(s,a){return e("tr",{key:a},[e("td",{staticClass:"k-table-index-column"},[t.sortable?e("k-sort-handle",{staticClass:"k-table-sort-handle"}):t._e(),e("span",{staticClass:"k-table-index"},[t._v(t._s(t.indexOf(a)))])],1),t._l(t.columns,function(n,o){return e("td",{key:a+"-"+o,staticClass:"k-table-column",style:"width:"+t.width(n.width),attrs:{"data-align":n.align,title:n.label},on:{click:function(_){return t.onCell({value:s[o],row:s,rowIndex:a,column:n,columnIndex:o})}}},[t._t("cell",function(){return[t.isComponent("k-table-"+(n.type||"text")+"-cell")?e("k-table-"+(n.type||"text")+"-cell",{tag:"component",attrs:{column:n,row:s,value:s[o]},on:{input:function(_){return t.onCellUpdate({value:_,row:s,rowIndex:a,column:n,columnIndex:o})}}}):e("p",{staticClass:"k-table-cell-value"},[t._v(" "+t._s(n.before)+" "+t._s(s[o]||"")+" "+t._s(n.after)+" ")])]},null,{column:n,columnIndex:o,row:s,rowIndex:a,value:s[o]})],2)}),t.options?e("td",{staticClass:"k-table-options-column"},[e("k-options-dropdown",{attrs:{options:t.options},on:{option:function(n){return t.onOption(n,s,a)}}})],1):t._e()],2)}),0)],1)},Zt=[],Ee="";const zt={props:{columns:Object,index:{type:Number,default:1},rows:Array,options:[Array,Function],sortable:Boolean},data(){return{values:this.rows}},computed:{dragOptions(){return{disabled:!this.sortable,fallbackClass:"k-table-row-fallback",ghostClass:"k-table-row-ghost"}}},watch:{rows(){this.values=this.rows}},methods:{isComponent(t){return this.$options.components[t]!==void 0},indexOf(t){return this.index+t},onCell(t){this.$emit("cell",t)},onCellUpdate({columnIndex:t,rowIndex:r,value:e}){this.values[r][t]=e,this.$emit("input",this.values)},onHeader(t){this.$emit("header",t)},onOption(t,r,e){this.$emit("option",t,r,e)},onSort(){this.$emit("input",this.values),this.$emit("sort",this.values)},width(t){if(!t)return"auto";const r=t.toString().split("/");if(r.length!==2)return"auto";const e=Number(r[0]),s=Number(r[1]);return parseFloat(100/s*e,2).toFixed(2)+"%"}}},C={};var Wt=i(zt,Vt,Zt,!1,Xt,null,null,null);function Xt(t){for(let r in C)this[r]=C[r]}var It=function(){return Wt.exports}(),Kt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"k-table-count-cell",attrs:{title:t.title}},[t.row.hits>0?[t._v(" "+t._s(t.row.hits)+" "),e("k-icon",{attrs:{title:t.title,type:"clock"}})]:e("p",[t._v("\u2013")])],2)},Gt=[],Pe="";const Jt={props:{row:Object},computed:{title(){return this.$t("retour.hits.last")+": "+this.row.last}}},Y={};var Qt=i(Jt,Kt,Gt,!1,te,null,null,null);function te(t){for(let r in Y)this[r]=Y[r]}var ee=function(){return Qt.exports}(),re=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"k-table-link-cell",attrs:{title:t.column.label+": "+t.value}},[t.value&&t.value!="-"?e("k-button",{attrs:{link:t.link,icon:"url",target:"_blank"},nativeOn:{click:function(s){s.stopPropagation()}}}):t._e(),t._v(" "+t._s(t.value)+" ")],1)},se=[],Ne="";const ae={props:{value:String,column:Object},computed:{isExternal(){return this.value&&this.value.startsWith("http")},link(){return this.isExternal?this.value:window.panel.$urls.site+"/"+this.value}}},w={};var ne=i(ae,re,se,!1,ie,null,null,null);function ie(t){for(let r in w)this[r]=w[r]}var oe=function(){return ne.exports}(),le=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"k-table-priority-cell"},[t.value?e("k-icon",{attrs:{type:"bolt",title:t.column.label}}):e("p",[t._v("\u2013")])],1)},ue=[],Le="";const ce={props:{value:String,column:Object}},S={};var _e=i(ce,le,ue,!1,de,null,null,null);function de(t){for(let r in S)this[r]=S[r]}var ve=function(){return _e.exports}(),j={computed:{color(){return this.value?parseInt(this.value)>=400?"var(--color-negative-light)":parseInt(this.value)>=300?"var(--color-positive-light)":"var(--color-focus-light)":"var(--color-border)"}}},pe=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"k-table-status-cell",attrs:{title:t.column.label+": "+(t.value||"-")}},[e("k-icon",{style:"color: "+t.color,attrs:{type:"circle"}}),t.value?e("code",[t._v(t._s(t.value))]):e("span",[t._v("\xA0\u2013")])],1)},he=[],He="";const fe={mixins:[j],props:{value:String,row:Object,column:Object}},M={};var me=i(fe,pe,he,!1,$e,null,null,null);function $e(t){for(let r in M)this[r]=M[r]}var be=function(){return me.exports}(),ye=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("k-field",t._b({staticClass:"k-select-field",attrs:{input:t._uid}},"k-field",t.$props,!1),[e("k-input",t._g(t._b({ref:"input",attrs:{id:t._uid,type:"select",theme:"field"},on:{input:t.onInput},scopedSlots:t._u([{key:"before",fn:function(){return[e("k-icon",{attrs:{type:"circle",color:t.color}})]},proxy:!0}])},"k-input",t.$props,!1),t.$listeners))],1)},ke=[];const ge={extends:"k-select-field",mixins:[j],methods:{onInput(t){this.value=t}}},O={};var xe=i(ge,ye,ke,!1,Ce,null,null,null);function Ce(t){for(let r in O)this[r]=O[r]}var Ye=function(){return xe.exports}();panel.plugin("distantnative/retour",{components:{"k-table":It,"k-table-count-cell":ee,"k-table-link-cell":oe,"k-table-priority-cell":ve,"k-table-status-cell":be,"k-retour-view":qt},fields:{"rt-status":Ye}})})();})();
