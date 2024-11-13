"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[83222],{13882:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},983946:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},619013:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(13882);function n(e){(0,o.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}},442279:(e,t)=>{function i(e,t){return e===t}t.P1=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];var r=0,l=o.pop(),a=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e}))throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t.map(function(e){return typeof e}).join(", ")+"]");return t}(o),s=e.apply(void 0,[function(){return r++,l.apply(void 0,arguments)}].concat(i)),d=function(e,t){for(var i=arguments.length,o=Array(i>2?i-2:0),n=2;n<i;n++)o[n-2]=arguments[n];var r=a.map(function(i){return i.apply(void 0,[e,t].concat(o))});return s.apply(void 0,function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}(r))};return d.resultFunc=l,d.recomputations=function(){return r},d.resetRecomputations=function(){return r=0},d}}(function(e){var t=arguments.length<=1||void 0===arguments[1]?i:arguments[1],o=null,n=null;return function(){for(var i=arguments.length,r=Array(i),l=0;l<i;l++)r[l]=arguments[l];return null!==o&&o.length===r.length&&r.every(function(e,i){return t(e,o[i])})||(n=e.apply(void 0,r)),o=r,n}})},334589:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){return e?"/pin-creation-tool/":"/idea-pin-builder/"}},406718:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(340523),n=i(554786),r=i(149722),l=i(785059),a=i(199677);function s(e){let t=(0,n.HG)(),{checkExperiment:i}=(0,o.F)(),s=(0,l.Z)(),d=(0,r.Z)(),c=(0,a.lJ)(d,s),u=!t||i("web_sce_organic_pinbuilder_dep").anyEnabled,_=!t||i("web_sce_monetized_pinbuilder_dep").anyEnabled,h=i("uid_sce_lightswitch_advertisers").anyEnabled;return!c&&((e&&(i("sce_lightswitch_organic"),i("sce_lightswitch_monetized")),t)?!!(u||_||h):u||_)}},549629:(e,t,i)=>{i.d(t,{Q:()=>s,Z:()=>d});var o=i(667294),n=i(587703),r=i(525364),l=i(996523),a=i(5859);function s(e,t){let{setViewContextData:i}=(0,r.sV)(),{requestIdentifier:s}=(0,a.B)(),d=(0,n.Z)(),{viewData:c}=(0,r.SU)();(0,o.useEffect)(()=>{e&&(i({viewType:e.view_type??1,viewParameter:e.view_parameter,viewData:e.view_data?(0,l.Z)(c,e.view_data):c,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),d({...e,event_type:13,request_identifier:s}))},[t])}function d(e){let{children:t,log:i}=e;return s(i),t||null}},510989:(e,t,i)=>{i.d(t,{Z:()=>o});let o=i(103322).Z},220488:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(667294),n=i(883119),r=i(510989),l=i(401429),a=i(862249),s=i(983983),d=i(785893);let c=s.fe,u=new n.Ry(c-1);function _(e){let{button:t,onClick:i}=e;return t.url?(0,d.jsx)(n.ZP,{color:"white",fullWidth:!0,href:t.url,onClick:i,rel:(0,a.Z)({url:t.url})?"nofollow":"none",text:t.text}):(0,d.jsx)(n.zx,{color:"white",fullWidth:!0,onClick:i,text:t.text})}let h=e=>{let t;let{anchors:i,experience:r,dismiss:l,complete:a,scrollToDismiss:s,onAnchorTouch:c,idealDirection:h}=e,p=!0,{message:b,anchor:m,complete_button:f}=(r||{}).display_data,g=i[m],P=()=>{t&&clearTimeout(t),l()},x=()=>{t||p||(t=setTimeout(()=>P(),1500)),p=!1};return(0,o.useEffect)(()=>(g&&(s&&(window.addEventListener("scroll",x),window.addEventListener("touchmove",x)),c&&g&&g.addEventListener("click","complete"===c?a:P)),()=>{s&&(window.removeEventListener("scroll",x),window.removeEventListener("touchmove",x),t&&clearTimeout(t)),c&&g&&g.removeEventListener("click","complete"===c?a:P)}),[g]),(0,d.jsx)(n.Li,{anchor:g,idealDirection:h,onDismiss:P,zIndex:u,children:(0,d.jsx)(n.xu,{padding:4,tabIndex:0,children:(0,d.jsxs)(n.kC,{direction:"column",gap:3,children:[(0,d.jsx)(n.xv,{color:"light",children:b}),f&&(0,d.jsx)(_,{button:f,onClick:a})]})})})},p=e=>{let{placementId:t,anchors:i}=e,[n,a]=(0,o.useState)(!0),s=()=>a(!1);return(0,d.jsx)(r.Z,{name:"ExperiencePopoverEducational",children:n&&(0,d.jsx)(l.Z,{placementId:t,predicate:e=>{if(e?.type!==29)return!1;let{anchor:t}=(e||{}).display_data;return!!t&&!!i[t]},children:({complete:t,dismiss:i,experience:o})=>(0,d.jsx)(h,{...e,complete:()=>{s(),t()},dismiss:()=>{s(),i()},experience:o})})})}},200201:(e,t,i)=>{i.d(t,{_:()=>s,a:()=>d});var o=i(667294),n=i(545007),r=i(105737),l=i(25919),a=i(5859);let s=({extraContext:e,id:t,shouldUsePlacedExperience:i=!0})=>{let s=(0,o.useRef)(),d=(0,n.I0)(),{isBot:c}=(0,a.B)(),u=(0,n.v9)(e=>e.experiences[t]);return(0,o.useEffect)(()=>{d((0,l.kd)(t))},[d,u,t]),(0,o.useEffect)(()=>{i||(0,r.ZP)(s.current,e)||(d((0,l.pz)([t],c,e)),s.current=e)},[d,e,c,t,i]),u},d=e=>(s(e),(0,n.v9)(t=>t.experiencesMulti[e.id]))},681508:(e,t,i)=>{i.d(t,{Rq:()=>r,Vf:()=>l,jd:()=>a,oy:()=>s,yR:()=>u});var o=i(658583),n=i(622541);let r=e=>"ios"===e&&(window.devicePixelRatio||1)*window.screen.height==2436,l=28,a=e=>window.innerHeight>=748&&r(e),s=()=>"undefined"!=typeof window&&!!window.navigator&&(/iPad/.test(navigator.platform)||"MacIntel"===navigator.platform&&"ontouchend"in document&&Math.min(window.screen.width,window.screen.height)>=700),d=()=>{o.t8(n.oj,String(!0),(0,o.kZ)(n.oj))},c=()=>!!o.U2(n.oj),u=()=>{let e=s();e!==c()&&(e?d():o.zN(n.oj.name),"undefined"!=typeof window&&window.location.reload())}},201417:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},179425:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var o=i(883119),n=i(213377),r=i(681508),l=i(403862),a=i(5859),s=i(785893);let d=({children:e,dataLayoutShiftBoundaryId:t,hasFixedHeader:i=!1,hasGutter:d=!0,height:c,showKeychainError:u=!1,useViewport:_=!1})=>{let h=(0,a.B)(),p=(0,r.jd)(h.userAgent.platform)?r.Vf:0;return(0,s.jsx)(o.xu,{"data-layout-shift-boundary-id":t||"PageContainer",height:_?`calc(100vh - ${p}px)`:c,paddingX:d?n.D6:void 0,paddingY:i||u?void 0:3,children:(0,s.jsx)(l.C,{value:!!d,children:e})})}},403862:(e,t,i)=>{i.d(t,{C:()=>r,V:()=>l});var o=i(667294);let n=(0,o.createContext)(!1),r=n.Provider,l=()=>(0,o.useContext)(n)},483085:(e,t,i)=>{i.d(t,{Z:()=>function e(t,i=!1){return n=>{if(!(0,o.Z)(n))return i&&Array.isArray(n)?n.map(e(t,i)):n;let r={};return Object.keys(n).forEach(l=>{let a=t(n[l],l);(0,o.Z)(n[l])||i&&Array.isArray(n[l])?r[a]=e(t,i)(n[l]):r[a]=n[l]}),r}}});var o=i(201417)},256683:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(483085);function n(e,t=!1){let i=(t,i)=>e(i);return e=>(0,o.Z)(i,t)(e)}},996523:(e,t,i)=>{i.d(t,{Z:()=>function e(t,i,o=()=>void 0){let n=o(t,i);return void 0!==n?n:void 0===i?t:Array.isArray(t)&&Array.isArray(i)?i.reduce((t,n,r)=>(t[r]=e(t[r],i[r],o),t),[...t]):t&&"object"==typeof t&&i&&"object"==typeof i?Object.keys(i).reduce((t,n)=>(t[n]=e(t[n],i[n],o),t),{...t}):i}})},826267:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(839967),n=i(637253);function r(e){let{enabledRouteRefresh:t,headers:i,name:r,noCache:l,options:a,schema:s}=e??{name:o.fY,options:null},d=!e,{fetchResource:c,ref:u}=(0,n.Z)({enabledRouteRefresh:t,headers:i,name:r,noCache:l,options:a,schema:s},d,!1);return d||c(),u}},14583:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(340523),r=i(908734),l=i(785893);function a({children:e,fallback:t}){return(0,l.jsx)(o.Suspense,{fallback:t||null,children:e})}function s({children:e,fallback:t}){let{checkExperiment:i}=(0,n.F)();return i("web_throw_error_on_client_only_suspense").anyEnabled?(0,l.jsx)(o.Suspense,{fallback:t,children:(0,l.jsx)(r.Z,{children:e})}):(0,l.jsx)(a,{fallback:t,children:e})}},564855:(e,t,i)=>{i.d(t,{ZP:()=>n,mP:()=>o});let o="…";function n(e,t=80,i=o,r=!1){let l;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||r)l=e.substring(0,t);else{let i=e.lastIndexOf(" ",t);l=e.substring(0,i)}return(l=l.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+i}},149722:(e,t,i)=>{i.d(t,{$:()=>o,Z:()=>r});let{Provider:o,useHook:n}=(0,i(342513).Z)("viewer"),r=n},104567:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(883119),r=i(652151),l=i(785893);let a={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"};function s({children:e,forwardRef:t,position:i="static",shouldShowShadow:s=!1,top:d,style:c={}}){let{currentScrollPosition:u,isScrolled:_,setSubheaderShadow:h}=(0,r.W)();(0,o.useEffect)(()=>(s&&h("contentHeader"),()=>{s&&h(null)}),[s]);let p=!1;"pending"!==d&&(p=null!=d?u>=d:_);let b=(0,l.jsx)(n.xu,{ref:t,dangerouslySetInlineStyle:{__style:{position:i,...c,...p&&s&&{...a,zIndex:499}}},children:e});return"sticky"===i?(0,l.jsx)(n.Le,{top:0,children:b}):b}},831641:(e,t,i)=>{i.d(t,{Z:()=>j});var o=i(667294),n=i(545007),r=i(616550),l=i(883119),a=i(587703),s=i(220488),d=i(930837),c=i(140017),u=i(340523),_=i(554786),h=i(747602),p=i(785893);function b({isOpen:e,onDismiss:t}){let i=(0,c.ZP)();return(0,p.jsx)(d.ZP,{accessibilityModalLabel:i.bt("Modal Pesan Kesalahan Penerbitan Pin yang Dinonaktifkan", "Disabled Pin Publishing Error Message Modal", "disabledPinCreationModal.modal.accessibilityLabel", undefined, true),isOpen:e,mobileAccessibilityCloseIconLabel:i.bt("Modal Tutup pesan penerbitan yang dinonaktifkan", "Close disabled publishing message modal", "disabledPinCreationModal.modal.closeIconLabel", undefined, true),onDismiss:t,type:"DisabledPublishingModal",children:(0,p.jsxs)(l.xu,{alignItems:"center",direction:"column",display:"flex",paddingX:6,paddingY:4,children:[(0,p.jsx)(l.X6,{children:i.bt("Ups ...", "Oops...", "disabledPinCreationModal.modal.heading", undefined, true)}),(0,p.jsx)(l.xu,{paddingY:3,children:(0,p.jsx)(l.xv,{children:i.bt("Server kami mengalami masalah ringan saat ini. Coba segarkan dan terbitkan lagi nanti.", "Our server is experiencing a mild case of the hiccups at the moment. Please try refreshing and publishing again later.", "disabledPinCreationModal.modal.text", undefined, true)})}),(0,p.jsx)(l.xu,{paddingY:3,children:(0,p.jsx)(l.zx,{color:"red",onClick:()=>t(),size:"lg",text:i.bt("Tutup", "Dismiss", "disabledPinCreationModal.button.dismiss", undefined, true)})})]})})}function m(e){let t=(0,c.ZP)(),{viewType:i,boardId:o,handleTouch:n}=e,r=t.bt("Papan", "Board", "createMenuLinkButton.Create.Board.Label", undefined, true),a=t.bt("Bagian", "Section", "createMenuLinkButton.Create.Section.Label", undefined, true);return 5===i&&o?(0,p.jsx)(l.Tg,{href:`/board/${o}/create_section/`,onTap:n,rounding:2,children:(0,p.jsx)(l.xu,{"data-test-id":"addSectionButton",paddingY:2,children:(0,p.jsx)(l.X6,{size:"400",children:a})})}):(0,p.jsx)(l.Tg,{href:"/board/create/",onTap:n,children:(0,p.jsx)(l.xu,{"data-test-id":"createMenuCreateBoardButton",paddingY:2,children:(0,p.jsx)(l.X6,{size:"400",children:r})})})}var f=i(851420);function g({disabledPinCreation:e,handleDisablePublish:t,handleTouch:i}){let o=(0,c.ZP)(),n=(0,r.k6)(),a=e=>({base64Image:e,method:f.I}),s=o.bt("Foto", "Photo", "createPinButton.Photo.Upload.Label", undefined, true);return(0,p.jsx)(l.iP,{onTap:()=>{if(e){t();return}i()},tapStyle:"none",children:(0,p.jsxs)(l.xu,{paddingY:2,position:"relative",children:[(0,p.jsx)(l.X6,{size:"400",children:s}),e?null:(0,p.jsx)("input",{accept:"image/*",id:"upload-pin",onChange:e=>{let t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=()=>{let e=t.result;n.push({pathname:`/pin/create/${f.I}/`,state:a(String(e))})}},style:{opacity:0,position:"absolute",top:"0px",height:"100%",width:"100%"},type:"file"})]})})}var P=i(739382),x=i(358589),y=i(640772);function v(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let w=e=>{let t=window&&window.innerWidth||0,i=e.bt("Masukkan tautan untuk membuat pin, https://...", "Enter a link to create a Pin, https://...", "placeholder in text field where a user inputs a URL to create a Pin", undefined, true),o=e.bt("Masukkan tautan, https://...", "Enter a link, https://...", "placeholder in text field where a user inputs a URL to create a Pin - short version, 30 char limit", undefined, true);return t<380?o:i};class A extends o.PureComponent{constructor(...e){super(...e),v(this,"state",{createPinFromLinkUrl:"",showCreateModal:!1,showInlineTextEditCreatePin:!1,showPublishingDisabledError:!1,urlValidationError:null}),v(this,"createPinFromLinkInput",(0,o.createRef)()),v(this,"createMenuPlusIconButtonRef",(0,o.createRef)()),v(this,"closeCreateModal",()=>{this.setState({showCreateModal:!1,showInlineTextEditCreatePin:!1}),this.props.updatePinBuilderInput({isInputOpen:!1,submittedLink:""})}),v(this,"clearValidationError",()=>{this.setState({urlValidationError:null})}),v(this,"openCreateModal",()=>{this.handleTouch(),this.props.requireAuthForLimitedLogin({fn:()=>this.setState({showCreateModal:!0}),modalHeader:(0,P.is)(this.props.i18n)})()}),v(this,"handleCreatePinFromLinkTouch",()=>{this.setState({showInlineTextEditCreatePin:!0}),this.props.updatePinBuilderInput({isInputOpen:!0})}),v(this,"handleDisablePublish",()=>{this.setState({showCreateModal:!1,showPublishingDisabledError:!0})}),v(this,"handleLinkFieldChange",({value:e})=>{this.setState({createPinFromLinkUrl:e})}),v(this,"handlePinFromLinkFormSubmit",(e,t)=>{let{createPinFromLinkUrl:i}=this.state,{experimentsClient:o}=this.props;e.preventDefault();let{errors:n}=(0,h.Jx)({message:this.props.i18n.bt("Ups! Silakan masukkan URL yang valid.", "Oops! Please enter a valid URL.", "URL validation error message on Pin builder form", undefined, true),experimentsClient:o})(i),[r]=n;r?this.setState({urlValidationError:r}):this.handleUrlValidationSuccess(t)}),v(this,"handleTouch",()=>{let{logContextEvent:e,viewType:t,elementType:i}=this.props;e({view_type:t,view_parameter:3106,element:i,event_type:102})}),v(this,"handleUrlValidationSuccess",e=>{this.setState({showInlineTextEditCreatePin:!1});let{createPinFromLinkUrl:t}=this.state;this.props.updatePinBuilderInput({submittedLink:t}),e.push({pathname:"/pin-builder/",state:{createPinFromLinkUrl:t}}),this.closeCreateModal()}),v(this,"renderCreatePinFromLinkOption",()=>{let{disabledPinCreation:e,history:t}=this.props,{createPinFromLinkUrl:i,showInlineTextEditCreatePin:o}=this.state,n=this.props.i18n.bt("Situs web", "Website", "editPin.CreatePinFromUrl.Label", undefined, true);return(0,p.jsx)(l.kC,{alignItems:"center",height:46,justifyContent:"start",children:o?(0,p.jsx)("form",{onSubmit:e=>this.handlePinFromLinkFormSubmit(e,t),style:{width:"100%"},children:(0,p.jsxs)(l.xu,{display:"flex",justifyContent:"between",position:"relative",children:[(0,p.jsxs)(l.xu,{ref:this.createPinFromLinkInput,width:"100%",children:[this.renderErrorFlyout(),(0,p.jsx)(l.nv,{id:"create-pin-from-link",onChange:this.handleLinkFieldChange,onFocus:()=>this.setState({urlValidationError:null}),placeholder:w(this.props.i18n),size:"lg",value:i})]}),(0,p.jsx)(l.hU,{accessibilityLabel:this.props.i18n.bt("Buat pin dari tautan yang dimasukkan", "Create Pin from entered link", "navigation button to confirm user will create a Pin from a link they entered", undefined, true),icon:"arrow-forward",iconColor:"darkGray",onClick:({event:e})=>this.handlePinFromLinkFormSubmit(e,t),size:"lg"})]})}):(0,p.jsx)(l.iP,{onTap:()=>{if(e){this.handleDisablePublish();return}this.handleCreatePinFromLinkTouch()},tapStyle:"none",children:(0,p.jsx)(l.xu,{"data-test-id":"websiteButton",position:"relative",children:(0,p.jsx)(l.X6,{size:"400",children:n})})})})}),v(this,"renderErrorFlyout",()=>{let{urlValidationError:e}=this.state;return e&&(0,p.jsx)(l.J2,{anchor:this.createPinFromLinkInput.current,idealDirection:"up",onDismiss:this.clearValidationError,size:"sm",children:(0,p.jsx)(l.xu,{padding:3,width:"100%",children:(0,p.jsxs)(l.kC,{gap:2,children:[(0,p.jsx)(l.qb,{type:"problem"}),(0,p.jsx)(l.xv,{align:"center",weight:"bold",children:e})]})})})})}componentDidMount(){let{isInputOpen:e,submittedLink:t}=this.props;(e||t)&&this.setState({showCreateModal:!!e,showInlineTextEditCreatePin:!!e,createPinFromLinkUrl:t||""})}render(){let{bgColor:e,boardId:t,buttonPadding:i,disabledPinCreation:n,i18n:r,isDesktop:a,iconButtonColor:c="gray",iconButtonSize:u="xl",viewType:_}=this.props,{showCreateModal:h,showPublishingDisabledError:f}=this.state,P=this.props.i18n.bt("Tambahkan pin atau papan", "Add a Pin or board", "heading in profile create modal", undefined, true);164===_?P=this.props.i18n.bt("Tambahkan ke bagian papan", "Add to section", "heading in section create modal", undefined, true):5===_&&(P=this.props.i18n.bt("Tambahkan pin atau bagian", "Add a Pin or section", "heading in profile create modal", undefined, true)||r.bt("Tambahkan ke papan", "Add to board", "heading in board create modal", undefined, true));let x=4===_?this.props.i18n.bt("Tambahkan ke profil", "Add to profile", "editPin.AddToProfile.Modal.Header", undefined, true):P,y=(5===_||164===_)&&this.createMenuPlusIconButtonRef.current;return(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(l.kC,{alignItems:"center",justifyContent:"start",children:(0,p.jsx)(l.xu,{"data-test-id":"createMenuCreateButton",children:(0,p.jsx)(l.hU,{ref:this.createMenuPlusIconButtonRef,accessibilityLabel:this.props.i18n.bt("Buat pin atau papan", "Create a Pin or board", "icon that opens model prompting user to create a new pin or board", undefined, true),bgColor:e,icon:"add",iconColor:c,onClick:this.openCreateModal,padding:"auto"!==i?i:1,size:u})})}),h&&(0,p.jsx)(d.ZP,{accessibilityModalLabel:"",heading:x,isOpen:this.state.showCreateModal,mobileAccessibilityCloseIconLabel:this.props.i18n.bt("tutup modal pembuatan papan dan pin", "close board and pin create modal", "close modal that prompts user to create a new pin or board", undefined, true),onDismiss:this.closeCreateModal,type:"create_menu",children:(0,p.jsx)(l.xu,{padding:3,children:(0,p.jsxs)(l.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[(0,p.jsxs)(o.Fragment,{children:[(0,p.jsxs)(l.xu,{paddingX:2,children:[(0,p.jsx)(l.xv,{children:this.props.i18n.bt("Buat", "Create", "editPin.Create.Section.Text", undefined, true)}),(0,p.jsx)(o.Fragment,{children:this.renderCreatePinFromLinkOption()}),(0,p.jsx)(g,{disabledPinCreation:n,handleDisablePublish:this.handleDisablePublish,handleTouch:this.handleTouch})]}),164!==_&&(0,p.jsxs)(l.xu,{marginTop:6,paddingX:2,children:[(0,p.jsx)(l.xv,{children:this.props.i18n.bt("Tambah", "Add", "editPin.Section.Add.Text", undefined, true)}),(0,p.jsx)(m,{boardId:t,handleTouch:()=>{this.handleTouch(),this.closeCreateModal()},viewType:_})]})]}),(0,p.jsx)(l.xu,{display:"flex",justifyContent:"center",marginBottom:2,marginTop:7,children:(0,p.jsx)(l.zx,{onClick:()=>this.closeCreateModal(),size:"lg",text:this.props.i18n.bt("Tutup", "Close", "editPin.Modal.Close.Button", undefined, true)})})]})})}),f&&(0,p.jsx)(b,{isOpen:!0,onDismiss:()=>{this.setState({showPublishingDisabledError:!1})}}),y&&(0,p.jsx)(s.Z,{anchors:{[a?3006:4006]:this.createMenuPlusIconButtonRef.current},idealDirection:"up",onAnchorTouch:"complete",placementId:a?18:1000251,scrollToDismiss:!0})]})}}function j(e){let t=(0,c.ZP)(),i=(0,_.HG)(),o=(0,u.F)(),{checkExperiment:l}=o,s=["disable_all","disable_web_pins"].includes(l("disable_pin_creation").group),d=(0,n.I0)(),h=(0,r.k6)(),{pinBuilder:b}=(0,n.v9)(e=>e.session),m=(0,a.Z)(),f=b&&b.isInputOpen,g=b&&b.submittedLink,P=(0,x.Z)();return(0,p.jsx)(A,{...e,disabledPinCreation:s,experimentsClient:o,history:h,i18n:t,isDesktop:i,isInputOpen:f,logContextEvent:m,requireAuthForLimitedLogin:P,submittedLink:g,updatePinBuilderInput:e=>d((0,y.p)(e))})}},407996:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(883119),n=i(140017),r=i(785893);let l=({isInModal:e})=>{let t=(0,n.ZP)();return(0,r.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new o.Ry(1),children:(0,r.jsx)(o.$j,{accessibilityLabel:t.bt("Memuat", "Loading", "Full page loading state", undefined, true),show:!0})})}},652151:(e,t,i)=>{i.d(t,{H:()=>d,W:()=>s});var o=i(667294),n=i(342513),r=i(71328),l=i(785893);let{Provider:a,useHook:s}=(0,n.Z)("HeaderShadow");function d({children:e}){let[t,i]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),[d,c]=(0,o.useState)(0),[u,_]=(0,o.useState)(null),h=(0,r.Z)(()=>{t&&(s(window.scrollY>0),c(window.scrollY))},50);return(0,o.useEffect)(()=>(i(!0),()=>{i(!1)}),[]),(0,o.useEffect)(()=>(window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}),[t]),(0,l.jsx)(a,{value:{currentScrollPosition:d,isScrolled:n,setSubheaderShadow:_,subheaderShadow:u},children:e})}},490166:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),n=i(785893);function r({children:e,onMouseEnter:t,onMouseLeave:i,onTouch:r,rounding:l,fullWidth:a=!1,pressState:s="none",accessibilityLabel:d,role:c,dataTestId:u}){let _=(Array.isArray(s)?s:[s]).includes("compress");return(0,n.jsx)(o.iP,{accessibilityLabel:d,dataTestId:u,fullWidth:a,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:i&&(({event:e})=>i(e)),onTap:r&&(({event:e})=>r(e)),role:c,rounding:l,tapStyle:_?"compress":"none",children:e})}},766311:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(587703),r=i(217058);let l=e=>Object.keys(e).reduce((t,i)=>(void 0===e[i]&&delete t[i],t),{...e}),a=({viewType:e,viewParameter:t,viewData:i,auxData:o,objectIdStr:n,component:a,clientTrackingParams:s,element:d},c)=>{let u=l({event_type:13,view_type:e,view_parameter:t,view_data:i,aux_data:o,object_id_str:n,component:a,clientTrackingParams:s,element:d});-1===Object.keys(u).indexOf("view_type")&&(0,r.My)("mweb.logging.null_view_type"),c(u)};function s(e){let{auxData:t,clientTrackingParams:i,children:r,component:l,element:s,objectIdStr:d,viewData:c,viewParameter:u,viewType:_}=e,h=(0,n.Z)(),p=JSON.stringify(t),b=JSON.stringify(c);return(0,o.useEffect)(()=>{a(e,h)},[h,p,i,l,s,d,b,u,_]),o.Children.only(r)}},400564:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),n=i(785893);function r(e){let{accessibilityLabel:t,bgColor:i,icon:r,iconColor:l,onClick:a,selected:s,size:d,tooltip:c}=e;return(0,n.jsx)(o.hU,{accessibilityLabel:t,bgColor:i??"transparent",icon:r,iconColor:l??"darkGray",onClick:a,selected:s,size:d??"lg",tooltip:c?{text:c}:void 0})}},452364:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(667294),n=i(883119),r=i(400564),l=i(785893);function a({bgColor:e,children:t,label:i,icon:a,iconColor:s,id:d,size:c,tooltip:u}){let _=(0,o.useRef)(null),[h,p]=(0,o.useState)(!1),b=()=>p(!1);return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(n.xu,{ref:_,"data-test-id":d,children:(0,l.jsx)(r.Z,{accessibilityLabel:i,bgColor:e,icon:a,iconColor:s,onClick:()=>p(!h),selected:h,size:c,tooltip:u})}),h&&(0,l.jsx)(n.Lt,{anchor:_.current,disableMobileUI:!0,id:"actionBarMenuButton",idealDirection:"down",onDismiss:b,zIndex:new n.Ry(1e3),children:t({handleClose:b})})]})}},851420:(e,t,i)=>{i.d(t,{I:()=>o,y:()=>n});let o="uploaded",n="pinbuilder"},344278:(e,t,i)=>{i.d(t,{CC:()=>s,H$:()=>c,Mt:()=>l,dp:()=>d,p9:()=>u});var o=i(191313),n=i(573810),r=i(407053);let l=(e,t,i,n,l,a,s=r.k7)=>{let d=(0,o.qn)(s)?JSON.parse((0,o.qn)(s)):[];if(!d[0]||d[0].path!==e){let r=[{path:e,ts:Date.now(),pin_id:i||0,first_pin_image_signature:t||"",first_pin_id:i||"",image_info:n||"",pin_description:l||"",is_shared:!!a,pin_invite_code:a}];(0,o.Nh)(s,JSON.stringify(r.concat(d)))}},a=()=>{let e;let t=(0,n.qn)(r.KH);if(!t)return[];try{e=JSON.parse(t)}catch(t){e=[]}return e},s=({path:e,image:t,dominant_color:i,pin_description:o,pin_id:l})=>{let s=a();s[0]&&s[0].path===e||(0,n.Nh)(r.KH,JSON.stringify([{path:e,image:t,pin_description:o||"",dominant_color:i||"",pin_id:l||""}].concat(s)))};function d(e,t,i,o,n,a){l(e,t,i,o,n,a,r.zR)}let c=(e,t,i,o,n)=>{l(e,t,i,o,n??"","",r.dy)};function u(e,t,i,o,n){l(e,t,i,o,n,"",r.QR)}},739382:(e,t,i)=>{i.d(t,{Bb:()=>b,Bx:()=>a,F4:()=>l,Qj:()=>s,_6:()=>p,gv:()=>r,hg:()=>d,is:()=>_,jP:()=>h,lt:()=>n,oM:()=>c,wI:()=>u});var o=i(624797);let n=e=>e.bt("Masuk untuk melanjutkan", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),r=({firstName:e,i18n:t})=>e?(t.bt("{{ name }} mengundang Anda untuk bergabung ke papannya", "{{ name }} invited you to join their board", "limitedLogin.modalHeader.groupBoardCollab", undefined, true)).replace("{{ name }}",e):t.bt("Teman-teman mengundang Anda untuk bergabung ke papannya", "Your friends invited you to join their board", "limitedLogin.modalHeader.groupBoardCollab", undefined, true),l=e=>{let t=(0,o.mB)(e.search).board_url;if(t){let e=(0,o.Jx)(t),i=(0,o.XP)({accept_invite:!0,seamless:!0});return e.includes("?")?`${e}&${i}`:`${e}?${i}`}return e.pathname},a=e=>e.bt("Masuk untuk menyimpan Pin ini", "Log in to save this Pin", "limitedLogin.modalHeader.repin", undefined, true),s=e=>{let t=e.pathname;if(t.startsWith("/pin/")){let e=t.split("/");if(e.length>2)return`/${e[1]}/${e[2]}/repin/`}return t},d=e=>e.bt("Masuk untuk mengirim pin ini", "Log in to send this Pin", "limitedLogin.modalHeader.send", undefined, true),c=e=>e.bt("Masuk untuk mengedit Pin ini", "Log in to edit this Pin", "limitedLogin.modalHeader.editPin", undefined, true),u=e=>{let t=e.pathname;if(t.startsWith("/pin/")){let e=t.split("/");if(e.length>2)return`/${e[1]}/${e[2]}/edit/`}return t},_=e=>e.bt("Masuk untuk membuat Pin atau papan", "Log in to create a Pin or board", "limitedLogin.modalHeader.create", undefined, true),h=e=>e.bt("Masuk untuk menyembunyikan Pin ini", "Log in to hide this Pin", "limitedLogin.modalHeader.hidePin", undefined, true),p=e=>e.bt("Masuk untuk membagikan profil", "Log in to share the profile", "limitedLogin.modalHeader.shareProfile", undefined, true),b=e=>e.bt("Masuk untuk membuat papan", "Log in to create a board", "limitedLogin.modalHeader.createBoard", undefined, true)},101056:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(5859),n=i(541891);function r(){let{countryFromIp:e}=(0,o.B)();return{isEUBasedIp:!!e&&!!n.a0?.dsa?.COUNTRY_CODES?.includes(e),isIndiaIp:!!e&&!!n.a0?.india?.COUNTRY_CODES?.includes(e)}}},588380:(e,t,i)=>{i.d(t,{Fj:()=>s,JI:()=>d,aG:()=>a});var o=i(667294),n=i(785893);let r=(0,o.createContext)(),l=(0,o.createContext)();function a({children:e}){let[t,i]=(0,o.useState)(!1);return(0,n.jsx)(r.Provider,{value:t,children:(0,n.jsx)(l.Provider,{value:i,children:e})})}function s(){let e=(0,o.useContext)(r);if(void 0===e)throw Error("useCountState must be used within a ShowBoardlessPinsContextProvider");return e}function d(){let e=(0,o.useContext)(l);if(void 0===e)throw Error("useCountUpdater must be used within a ShowBoardlessPinsContextProvider");return e}},875936:(e,t,i)=>{i.d(t,{PJ:()=>a,Zu:()=>l,c6:()=>r,mM:()=>n});var o=i(883119);let n=new o.Ry(1),r=new o.H3([n]),l=new o.H3([r]),a=new o.H3([l])},640772:(e,t,i)=>{i.d(t,{F:()=>o,p:()=>n});let o=e=>({type:"PIN_BUILDER_LOADED_IMAGES",payload:e}),n=e=>({type:"UPDATE_PIN_BUILDER_INPUT",payload:e})},302335:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(442279),n=i(987814);let r=(0,o.P1)(n.Z,e=>e.invites,(e,t)=>Object.keys(t).reduce((i,o)=>{let n=o.split(":"),r=n[0],l=n[1],a=e.id===l,s=t[o]&&["new","contact_request_not_approved"].includes(t[o].status);return a&&s&&(i[r]=o),i},{}))},125768:(e,t,i)=>{i.d(t,{Z:()=>f});var o=i(545007),n=i(616550),r=i(883119),l=i(224796),a=i(587703),s=i(525364),d=i(696534),c=i(140017),u=i(741983),_=i(731714),h=i(217058),p=i(623409),b=i(554786),m=i(785893);function f({alignIconLeft:e,bgColor:t,color:i,disableRedirect:f=!1,fallbackUrl:g,icon:P="arrow-back",onTouch:x,padding:y,placement:v,shouldUseFallbackUrl:w,size:A="lg",viewParameter:j,viewType:z,isVisualSearch:C}){let L=(0,c.ZP)(),S=(0,n.k6)(),k=(0,n.TH)(),I=(0,b.HG)(),B=(0,o.v9)(e=>e.session.isAuthenticated),Z=(0,a.Z)(),E=(0,p.Z)(),T=(0,d.vs)(),{viewType:M,viewParameter:D}=(0,s.SU)(),[F,O]=z?[z,j]:[M,D],R=()=>k.search&&k.search.includes("?nativeShouldDismiss=true"),U=()=>{let e=_.Z.getItem(l.pm);k.key||"/ideas"!==g?(0,h.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,h.My)("pinner_conversion.back_button.no_history"),(0,h.My)(`web_back_button_click.${String(v)}.is_auth_${String(B)}`),E({action:"click",item:"back-button"}),F&&Z({view_type:F,view_parameter:O,element:34,event_type:102}),x&&x(),f||((!k.key||k.state&&"redirect"===k.state.referrer||w)&&g?S.push(g):k.pathname.includes("/password/reset/")&&R()?S.push("/login/?dismissWebview=true"):S.goBack())},H=T?d.t4:"white",N=(0,u.am)(k)||C||"white"===i;return(0,m.jsx)(r.xu,{"data-test-id":"back-button",children:e?(0,m.jsx)(r.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===P?-1:-2,width:48,children:(0,m.jsx)(r.hU,{accessibilityLabel:L.bt("Kembali", "Back", "navigation button", undefined, true),bgColor:t,icon:P,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:U,padding:"auto"!==y?y:2,size:A})}):(0,m.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:I||N?"":H}},rounding:"circle",children:(0,m.jsx)(r.hU,{accessibilityLabel:L.bt("Kembali", "Back", "navigation button", undefined, true),bgColor:t||I?t:"transparent",icon:P,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:U,padding:"auto"!==y?y:2,size:A})})})}},94816:(e,t,i)=>{i.d(t,{Z:()=>_,o:()=>u});var o=i(667294),n=i(883119),r=i(587703),l=i(515278),a=i(213377),s=i(140017),d=i(149722),c=i(785893);let u="AddPinRep";function _({ctaText:e,handleClick:t,height:i,iconSize:u,textSize:_,component:h}){let p=(0,r.Z)(),b=(0,s.ZP)(),m=(0,d.Z)(),f=(0,l.Z)();return(0,o.useEffect)(()=>{p({event_type:120,component:h??0,element:10643})},[p,h]),(0,c.jsx)(n.xu,{children:(0,c.jsx)(n.Tg,{href:"/pin-builder/",onTap:()=>{if(f){f();return}m.isPartner&&p({event_type:101,component:0,element:10643}),t&&t()},children:(0,c.jsxs)(n.st,{children:[(0,c.jsx)(n.xu,{alignItems:"center",color:"secondary",display:"flex",fit:!0,height:i||a.yF,justifyContent:"center",rounding:2,width:i||void 0,children:(0,c.jsx)(n.xu,{color:"default",height:u||40,rounding:"circle",width:u||40,children:(0,c.jsx)(n.JO,{accessibilityLabel:"",color:"error",icon:"add-circle",inline:!0,size:u||40})})}),(0,c.jsx)(n.xu,{padding:2,children:(0,c.jsx)(n.xv,{color:"subtle",size:_||"300",weight:"bold",children:e||b.bt("Buat pin", "Create Pin", "label to open create pin modal", undefined, true)})})]})})})}},10568:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(667294),n=i(883119),r=i(214877),l=i(140017),a=i(915986),s=i(785893);function d({anchor:e,hideAddSectionTooltip:t}){let i=(0,l.ZP)();return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:a.bW,children:(0,s.jsx)(n.Li,{anchor:e,idealDirection:"down",message:i.bt("Ketuk + untuk menambahkan bagian kapan saja", "Tap + to add a section any time", "boardActionsButton.addIconButton.addSectionFlyout", undefined, true),onDismiss:t})})})}var c=i(406718),u=i(875936);function _({anchor:e,idealDirection:t,onAddOrEditDate:i,onAddSection:r,onClose:a,onCreateBoard:d,onCreatePin:_,onCreateStoryPin:h,surface:p,isWithinFixedContainer:b}){let m=(0,l.ZP)(),f=(0,c.Z)(!0),g=(0,o.useMemo)(()=>({pin:m.bt("Pin", "Pin", "BoardActionsButton.LegoFlyout.Pin", undefined, true),rename:m.bt("Pin Ide", "Idea Pin", "BoardActionsButton.LegoFlyout.IdeaPin", undefined, true),board:m.bt("Papan", "Board", "profileHeader.actionBar.board", undefined, true),section:m.bt("Bagian Papan", "Section", "BoardActionsButton.LegoFlyout.Section", undefined, true),date:m.bt("Tanggal", "Date", "BoardActionsButton.LegoFlyout.Date", undefined, true),todos:m.bt("Tugas", "To-dos", "BoardActionsButton.LegoFlyout.Note", undefined, true),new:m.bt("Baru", "New", "BoardActionsButton.LegoFlyout.New", undefined, true)}),[m]);return(0,s.jsxs)(n.Lt,{anchor:e,id:"board_actions",idealDirection:t||"down",isWithinFixedContainer:b,onDismiss:a,zIndex:u.PJ,children:[(0,s.jsx)(n.Lt.Section,{label:m.bt("Buat", "Create", "BoardActionsButton.LegoFlyout.Create", undefined, true),children:[!f&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create Pin",onSelect:()=>{_(),a()},option:{label:g.pin,value:g.pin}},"actions-create-0"),h&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create Story Pin",onSelect:()=>{h(),a()},option:{label:f?g.pin:g.rename,value:f?g.pin:g.rename}},"actions-create-1"),"profileBoards"===p&&d&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create board",onSelect:()=>{d(),a()},option:{label:g.board,value:g.board}},"actions-create-2")].filter(Boolean)}),"board"===p&&(0,s.jsx)(n.Lt.Section,{label:m.bt("Tambah", "Add", "BoardActionsButton.LegoFlyout.Add", undefined, true),children:[r&&(0,s.jsx)(n.Lt.Item,{dataTestId:"addSection",onSelect:()=>{r(),a()},option:{label:g.section,value:g.section}},"actions-add-1"),!!i&&(0,s.jsx)(n.Lt.Item,{onSelect:()=>{i(),a()},option:{label:g.date,value:g.date}},"actions-add-2")].filter(Boolean)})]})}var h=i(619370),p=i(588380);function b({anchor:e}){let t=(0,p.JI)();return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:a.bW,children:(0,s.jsx)(h.default,{anchor:e,experienceIds:[503447],flyoutSize:"md",idealDirection:"down",onClickComplete:()=>{t(!0)},placementId:19,positionRelativeToAnchor:!1,showCaret:!0,textAlign:"center",textWeight:"normal"})})})}function m({anchor:e}){return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:a.bW,children:(0,s.jsx)(h.default,{anchor:e,experienceIds:[502096],idealDirection:"down",placementId:18,positionRelativeToAnchor:!1,showCaret:!0})})})}var f=i(971504);function g({children:e,idealDirection:t,onAddOrEditDate:i,onAddSection:a,onCreateBoard:c,onCreatePin:u,onCreateStoryPin:h,onOpen:p=()=>{},surface:g,isWithinFixedContainer:P}){let x;let y=(0,l.ZP)(),{showCreateSectionTooltip:v,setShowCreateSectionTooltip:w}=(0,f.L)()??{},{logContextEvent:A}=(0,r.v)(),j=()=>w(!1),z=(0,o.useRef)(),[C,L]=(0,o.useState)(!1),S=()=>{p(),v&&j(),L(!0),A({component:13056,element:1208,event_type:101,view_parameter:3106,view_type:4})},k=()=>L(!1),I=()=>{C?k():S()},B={board:y.bt("Tindakan Papan", "Board Actions", "button that allows user view actions on a board such as add section, create pin, create pincode, and create widget", undefined, true),profileBoards:y.bt("Tindakan Profil", "Profile Actions", "profileHeader.actionBar.createButton", undefined, true),profilePins:y.bt("Tindakan Profil", "Profile Actions", "profileHeader.actionBar.createButton", undefined, true),section:y.bt("Buat pin", "Create Pin", "Button to begin pin creation flow", undefined, true)},Z=e&&e({active:C,openFlyout:I})||(0,s.jsx)(n.hU,{accessibilityLabel:B[g],icon:"add",iconColor:"gray",onClick:"section"===g?u:I,size:"lg"});return!C&&"board"===g&&(v?x="addSectionTooltip":i&&(x="planningActionsExperience")),C||"profileBoards"!==g||(x="createBoardTooltip"),(0,s.jsxs)(n.xu,{"data-test-id":"boardActionsButton",children:[(0,s.jsx)(n.xu,{ref:z,children:Z}),C&&(0,s.jsx)(_,{anchor:z.current,idealDirection:t,isWithinFixedContainer:!!P,onAddOrEditDate:i,onAddSection:a,onClose:k,onCreateBoard:c,onCreatePin:u,onCreateStoryPin:h,surface:g}),"addSectionTooltip"===x&&(0,s.jsx)(d,{anchor:z.current,hideAddSectionTooltip:j}),"planningActionsExperience"===x&&(0,s.jsx)(m,{anchor:z.current}),"createBoardTooltip"===x&&(0,s.jsx)(b,{anchor:z.current})]})}},971504:(e,t,i)=>{i.d(t,{L:()=>a,M:()=>s});var o=i(667294),n=i(342513),r=i(785893);let{Provider:l,useMaybeHook:a}=(0,n.Z)("CreateSectionTooltip");function s({children:e}){let[t,i]=(0,o.useState)(!1),n=(0,o.useMemo)(()=>({showCreateSectionTooltip:t,setShowCreateSectionTooltip:i}),[t]);return(0,r.jsx)(l,{value:n,children:e})}},54966:(e,t,i)=>{i.d(t,{Z:()=>o});function o({boardDensity:e,component:t,viewType:i,viewParameter:o},n){let r=function({boardDensity:e,viewType:t}){switch(t){case 164:return"regular"===e?10618:10619;case 5:case 4:return"regular"===e?10607:10608;default:return 10607}}({boardDensity:e,viewType:i}),l=o??4===i?3106:3069;n({event_type:101,component:t,element:r,...i?{view_type:i,view_parameter:l}:Object.freeze({})})}},881157:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(216167);function n({density:e,surface:t}){o.Z.create("UserMetadataResource","board"===t?{profile_pin_rep_view_type:e}:{board_pin_rep_view_type:e}).callUpdate()}},915986:(e,t,i)=>{i.d(t,{A3:()=>d,C1:()=>u,Cw:()=>p,Ev:()=>r,IK:()=>n,Jk:()=>s,Kx:()=>h,Oj:()=>l,PM:()=>b,VD:()=>_,bW:()=>a,kz:()=>c,p8:()=>m});var o=i(883119);let n=1,r=1,l=2,a=new o.Ry(5e3),s=15,d=15,c=18,u=24,_=31,h=30,p=40,b=50,m=60},118923:(e,t,i)=>{i.d(t,{b:()=>l});var o=i(340523),n=i(5859),r=i(528252);function l(){let{checkExperiment:e}=(0,o.F)(),{isAuthenticated:t}=(0,n.B)();return function({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:i}){return i||!!e&&e(t?"web_auth_lazy_component":"web_unauth_lazy_component").anyEnabled}({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:(0,r.z5)()})}},832853:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(14583);let{Provider:r,useMaybeHook:l}=(0,i(342513).Z)("LazyComponent");var a=i(785893);function s(e,t,i){let r,s,d;let c=t?.ssr??!0?o.Suspense:n.Z,u=i=>{l(),t?.dynamicRequestKey,s||(s=(0,o.lazy)(()=>e(i)));let n=(0,o.useRef)(r??s).current;return(0,a.jsx)(c,{fallback:i.fallback||t?.fallback,children:(0,a.jsx)(n,{...i})})};function _(t){return d||(d=(async()=>r=(await e(t)).default)()),d}return u.preload=e=>{_(e)},u.load=e=>_(e),u}},528252:(e,t,i)=>{i.d(t,{DB:()=>d,SS:()=>a,WP:()=>r,z5:()=>s});var o=i(667294),n=i(706196);let r=(0,o.createContext)({anyEnabled:!1,group:""}),l={anyEnabled:!1,group:""};function a({experimentsClient:e,isAuthenticated:t,handlerId:i}){let{site:o}=(0,n.ac)(i??"");return"www"!==o?l:e?.checkExperiment(t?"web_early_hydration_auth":"web_early_hydration_unauth")??l}function s(){return(0,o.useContext)(r).anyEnabled}function d(){return(0,o.useContext)(r)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/83222.id_ID-bf9a3e7289696f62.mjs.map