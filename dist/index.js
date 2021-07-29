import{computed as e,ref as t,watch as a,nextTick as l,defineComponent as i,openBlock as n,createBlock as o,Transition as d,withCtx as s,createCommentVNode as c,renderSlot as r,resolveComponent as u,Teleport as v,createVNode as p,withDirectives as m,vShow as y}from"vue";const g=(e,t="px")=>null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`,f=e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=parseInt(window.getComputedStyle(e).getPropertyValue("z-index"));return t||f(e.parentNode)},x=({activeElSelector:t,stackMinZIndex:a=0,isActive:l,content:i})=>({activeZIndex:e((()=>{if(!i.value)return 0;const e=l.value?((e=[])=>{const l=[a],i=document.querySelectorAll(t);for(let t=0;t<i.length;t++)e.includes(i[t])||l.push(f(i[t]));return Math.max(...l)})([i.value])+2:f(i.value);return null===e?0:e}))});var h=i({name:"GDialogOverlay",props:{active:{type:Boolean,required:!0},deactivating:{type:Boolean,required:!0},activeZIndex:{type:Number,required:!0}},emits:["click"],setup:(t,{emit:a})=>({styles:e((()=>({zIndex:t.activeZIndex-1}))),classes:e((()=>["q-dialog-overlay",{"q-dialog-overlay--active":t.active&&!t.deactivating}])),onClick:()=>{a("click")}})});h.render=function(e,t,a,l,i,r){return n(),o(d,{name:"fade"},{default:s((()=>[e.active?(n(),o("div",{key:0,class:e.classes,style:e.styles,onClick:t[1]||(t[1]=(...t)=>e.onClick&&e.onClick(...t))},null,6)):c("",!0)])),_:1})};var k=i({name:"GDialogContent",props:{maxWidth:{type:[String,Number],default:"none"},width:{type:[String,Number],default:"auto"},scrollable:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1}},setup(t){const{widthStyles:a}=(t=>({widthStyles:e((()=>({maxWidth:"none"===t.maxWidth?void 0:g(t.maxWidth),width:"auto"===t.width?void 0:g(t.width)})))}))(t);return{styles:a,classes:e((()=>["q-dialog-content",{"q-dialog-content--scrollable":t.scrollable,"q-dialog-content--depressed":t.depressed}]))}}});k.render=function(e,t,a,l,i,d){return n(),o("div",{class:e.classes,style:e.styles},[r(e.$slots,"default")],6)};var b=i({name:"GDialog",components:{GDialogOverlay:h,GDialogContent:k},props:{modelValue:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},lockScrollPadding:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},maxWidth:{type:[String,Number],default:"none"},width:{type:[String,Number],default:"auto"},scrollable:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:n}){const{activatedOnce:o,active:d,deactivating:s}=(e=>{const i=t(e.value),n=t(e.value),o=t(!1);return a((()=>e.value),(e=>{if(!e)return o.value=!0,void l((()=>{n.value=e,o.value=!1}));i.value?n.value=e:(i.value=!0,l((()=>{n.value=e})))})),{activatedOnce:i,active:n,deactivating:o}})(e((()=>i.modelValue))),c=t(null),{activeZIndex:r}=x({activeElSelector:".q-dialog-frame--active",stackMinZIndex:200,isActive:d,content:c}),u=e((()=>["q-dialog-frame",{"q-dialog-frame--active":d.value}])),v=e((()=>({zIndex:r.value})));return{onClickOutside:()=>{i.persistent||n("update:modelValue",!1)},activatedOnce:o,activeZIndex:r,isActive:d,deactivating:s,classes:u,styles:v,frame:c}}});b.render=function(e,t,a,l,i,g){const f=u("GDialogOverlay"),x=u("GDialogContent");return e.activatedOnce?(n(),o(v,{key:0,to:"body"},[p(f,{active:e.isActive,deactivating:e.deactivating,"active-z-index":e.activeZIndex,onClick:e.onClickOutside},null,8,["active","deactivating","active-z-index","onClick"]),p(d,{name:"dialog-transition"},{default:s((()=>[m(p("div",{ref:"frame",class:e.classes,style:e.styles},[p(x,{width:e.width,"max-width":e.maxWidth,scrollable:e.scrollable,depressed:e.depressed},{default:s((()=>[r(e.$slots,"default")])),_:3},8,["width","max-width","scrollable","depressed"])],6),[[y,e.isActive]])])),_:1})])):c("",!0)};const w=b;var S={GDialog:b};export default S;export{w as GDialog};
