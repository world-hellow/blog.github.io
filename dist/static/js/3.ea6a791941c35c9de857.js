webpackJsonp([3],{Cdan:function(e,n){},fTP3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={name:"animateNumber",data:function(){return{number:0,tweenedNumber:0}},computed:{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}},watch:{number:function(e){TweenLite.to(this.$data,.8,{tweenedNumber:e})}}},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{attrs:{id:"animated-number-demo"}},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.number,expression:"number",modifiers:{number:!0}}],attrs:{type:"number",step:"20"},domProps:{value:e.number},on:{input:function(n){n.target.composing||(e.number=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}}),e._v(" "),t("p",[e._v(e._s(e.animatedNumber))])]),e._v(" "),t("h1",[e._v("基础组件")]),e._v(" "),t("BaseAnimateNumber",{attrs:{value:e.number}})],1)},staticRenderFns:[]};var a=t("VU/8")(r,u,!1,function(e){t("Cdan")},"data-v-48d63ba8",null);n.default=a.exports}});
//# sourceMappingURL=3.ea6a791941c35c9de857.js.map