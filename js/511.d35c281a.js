(self["webpackChunkht"]=self["webpackChunkht"]||[]).push([[511],{6511:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>b});var a=s(3673);function n(t,e,s,n,i,h){const l=(0,a.up)("level-map"),o=(0,a.up)("user-panel");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l),(0,a.Wm)(o)])}function i(t,e,s,n,i,h){const l=(0,a.up)("v-image"),o=(0,a.up)("v-layer"),c=(0,a.up)("v-stage");return(0,a.wg)(),(0,a.j4)(c,{ref:"map",class:"ht-map",config:{width:t.widthCanvas,height:t.heightCanvas,draggable:!0,dragBoundFunc:t=>h.setPosition(t)},onWheel:h.wheel,onTouchmove:h.touchmove,onTouchend:h.touchend},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,{config:{width:t.widthLevel,height:t.heightLevel,image:t.bgLevel}},null,8,["config"])])),_:1})])),_:1},8,["config","onWheel","onTouchmove","onTouchend"])}var h=s(515),l=s.n(h),o=s(7874);const c={name:"LevelMap",mounted(){this.widthCanvas=window.innerWidth,this.heightCanvas=window.innerHeight;const t=new window.Image;t.src=`/statics/levels/bg-level-${this.profile.curLevel}.png`,t.onload=()=>{this.bgLevel=t}},data:()=>({scaleBy:1.1,widthCanvas:1600,heightCanvas:900,widthLevel:3536,heightLevel:2704,bgLevel:null,scaleMap:1,lastCenter:null,lastDist:0}),computed:l()({},(0,o.Se)("profile",["profile"])),methods:{setPosition({x:t,y:e}){return{x:Math.min(Math.max(t,this.widthCanvas-this.scaleMap*this.widthLevel),0),y:Math.min(Math.max(e,this.heightCanvas-this.scaleMap*this.heightLevel),0)}},wheel(t){if(!t.evt)return;t.evt.preventDefault();const e=this.$refs.map.getNode(),s=e.scaleX(),a=e.getPointerPosition(),n={x:(a.x-e.x())/s,y:(a.y-e.y())/s},i=this.widthCanvas>this.heightCanvas?this.widthCanvas/this.widthLevel:this.heightCanvas/this.heightLevel,h=t.evt.deltaY<0?Math.min(s*this.scaleBy,2):Math.max(s/this.scaleBy,i);e.scale({x:h,y:h}),this.scaleMap=h,console.log("this.scaleMap",this.scaleMap);const l=this.setPosition({x:a.x-n.x*h,y:a.y-n.y*h});e.position(l),e.batchDraw()},getCenter(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}},getDistance(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)},touchmove(t){if(!t.evt)return;t.evt.preventDefault();const e=t.evt.touches[0],s=t.evt.touches[1],a=this.$refs.map.getNode();if(e&&s){a.draggable()&&a.draggable(!1);const t={x:e.clientX,y:e.clientY},n={x:s.clientX,y:s.clientY};if(!this.lastCenter)return void(this.lastCenter=this.getCenter(t,n));const i=this.getCenter(t,n),h=this.getDistance(t,n);this.lastDist||(this.lastDist=h);const l={x:(i.x-a.x())/a.scaleX(),y:(i.y-a.y())/a.scaleX()},o=Math.min(Math.max(a.scaleX()*(h/this.lastDist),.4),2);a.scale({x:o,y:o});const c=i.x-this.lastCenter.x,r=i.y-this.lastCenter.y,u={x:i.x-l.x*o+c,y:i.y-l.y*o+r};a.position(u),a.batchDraw(),this.lastDist=h,this.lastCenter=i}},touchend(){const t=this.$refs.map.getNode();t.draggable(!0),this.lastDist=0,this.lastCenter=null}}};c.render=i,c.__scopeId="data-v-8440c3b0";const r=c;var u=s(4310),v=s.n(u);(0,a.dD)("data-v-1497ee06");const d={class:"ht-user-panel"},g=(0,a._)("img",{src:v()},null,-1);function p(t,e,s,n,i,h){const l=(0,a.up)("q-avatar"),o=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(o,{round:"",class:"ht-user-panel__btn"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{class:"ht-user-panel__avatar"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1})])}(0,a.Cn)();const m={name:"UserPanel"};var w=s(4607),x=s(5096),y=s(7518),f=s.n(y);m.render=p,m.__scopeId="data-v-1497ee06";const C=m;f()(m,"components",{QBtn:w.Z,QAvatar:x.Z});const M={components:{UserPanel:C,LevelMap:r}};M.render=n;const b=M},4310:(t,e,s)=>{t.exports=s.p+"img/user.8cab937a.png"}}]);