/*! For license information please see Checkbox-Checkbox-stories.2f9954e1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[149],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_AY7I2SME.aD}});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/Checkbox/Checkbox.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Checkbox_stories}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),CheckSvg=__webpack_require__("./src/components/Icons/CheckSvg.js"),Icon=__webpack_require__("./src/components/Icon/Icon.js"),Checkbox_module_checkboxContainer="Checkbox_checkboxContainer__7M1ma",Checkbox_module_checkmark="Checkbox_checkmark__gVt5U",Checkbox_module_checkbox="Checkbox_checkbox__b6b0y",Checkbox_module_disabled="Checkbox_disabled__WpdNl",utils_theme=__webpack_require__("./src/utils/theme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Checkbox=function Checkbox(_ref){var label=_ref.label,value=_ref.value,onChange=_ref.onChange,style=_ref.style,type=_ref.type,disabled=_ref.disabled,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":disabled?theme.disabledColor:theme["".concat(type,"Color")]};return(0,jsx_runtime.jsxs)("label",{className:"".concat(Checkbox_module_checkboxContainer," ").concat(disabled?Checkbox_module_disabled:""),style:style,children:[(0,jsx_runtime.jsx)("input",{className:"".concat(Checkbox_module_checkbox),type:"checkbox",checked:value,onChange:onChange,disabled:null!=disabled&&disabled}),(0,jsx_runtime.jsx)("span",{className:"".concat(Checkbox_module_checkmark," ").concat(disabled?Checkbox_module_disabled:""," "),style:styleVariables,children:value?(0,jsx_runtime.jsx)(Icon.Z,{type:disabled?"disabled":type,children:(0,jsx_runtime.jsx)(CheckSvg.default,{})}):null}),label]})};Checkbox.defaultProps={type:"primary"},Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{type:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'error'",computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},style:{description:"",type:{name:"object"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,Checkbox_Checkbox=Checkbox,Checkbox_stories={title:"Checkbox",component:Checkbox_Checkbox,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Docs=function Story(args){return(0,jsx_runtime.jsx)(utils_theme.Z,{children:(0,jsx_runtime.jsx)(Checkbox_Checkbox,(0,objectSpread2.Z)({},args))})}.bind({}),Primary=function Primary(){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),checked=_useState2[0],setChecked=_useState2[1];return(0,jsx_runtime.jsx)(utils_theme.Z,{children:(0,jsx_runtime.jsx)(Checkbox_Checkbox,{type:"secondary",label:"Checkbox",value:checked,onChange:function onChange(e){setChecked(e.target.checked),(0,dist.aD)("onChange")(e)}})})};Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  return <ThemeProvider>\n      <Checkbox {...args}></Checkbox>\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})}),Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [checked, setChecked] = useState(false);\n  const onChange = e => {\n    setChecked(e.target.checked);\n    action(\'onChange\')(e);\n  };\n  return <ThemeProvider>\n      <Checkbox type="secondary" label="Checkbox" value={checked} onChange={onChange}></Checkbox>\n    </ThemeProvider>;\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Docs","Primary"];Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"}},"./src/components/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Icon_Icon}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),Icon_module={icon:"Icon_icon__zcHyd",primary:"Icon_primary__p6Qbk",secondary:"Icon_secondary__2K93I",error:"Icon_error__Gh8lN",disabled:"Icon_disabled__LXMVP"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon=(0,react.forwardRef)((function(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?"1rem":_ref$size,type=_ref.type,children=_ref.children,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor,"--errorColor":theme.errorColor,"--disabledColor":theme.disabledColor};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{ref:ref,width:size,height:size,style:(0,objectSpread2.Z)({},styleVariables),className:"".concat(Icon_module.icon," ").concat(Icon_module[type]),preserveAspectRatio:"none",version:"1.1"}):null}))})}));Icon.displayName="Icon",Icon.defaultProps={type:"primary"},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'disabled'",computed:!1},{value:"'error'",computed:!1}]},required:!1},children:{description:"",type:{name:"object"},required:!1}}};var Icon_Icon=(0,react.memo)(Icon)},"./src/components/Icons/CheckSvg.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CheckSvg=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,svgRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({width:"1rem",height:"1rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",ref:svgRef},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M6.599 12.5a.76.76 0 00.526-.212l1.053-1.03 5.605-5.485A.727.727 0 0014 5.258a.727.727 0 00-.217-.516l-1.053-1.03a.76.76 0 00-1.053 0L6.6 8.69 4.323 6.455a.76.76 0 00-1.053 0l-1.053 1.03A.727.727 0 002 8c0 .19.077.379.217.515l2.802 2.743 1.053 1.03a.76.76 0 00.527.212z",fill:"#FFF",fillRule:"nonzero"})}))}));CheckSvg.__docgenInfo={description:"",methods:[],displayName:"CheckSvg"},__webpack_exports__.default=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CheckSvg)},"./src/utils/defaultTheme.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={primaryColor:"#6bb8e6",secondaryColor:"#282c34",shadowColor:"#1c1d1d",errorColor:"red",disabledColor:"#393737"}},"./src/utils/theme.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return useTheme}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/defaultTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useTheme=function useTheme(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext)},ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,selectedTheme=_ref.theme||_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__.Z;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ThemeContext.Provider,{value:selectedTheme,children:children})};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{description:"",type:{name:"object"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},__webpack_exports__.Z=ThemeProvider},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);