"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82952],{729903:(e,t,n)=>{n.d(t,{Z:()=>B});var i=n(667294),s=n(616550),o=n(883119),r=n(342513),l=n(510989),a=n(608516),c=n(785893);let d=(0,i.lazy)(()=>n.e(79337).then(n.bind(n,879337))),{Provider:u}=(0,r.Z)("LinkedBusinessAccountConfirmationModal");function h({children:e,onDismiss:t}){let[n,s]=(0,i.useState)(!1),o=(0,i.useMemo)(()=>({showLinkedBusinessAccountConfirmationModal:()=>{s(!0)}}),[]);return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)(u,{value:o,children:e}),n&&(0,c.jsx)(l.Z,{name:"SafeSuspense_LinkedBusinessAccountConfirmationModalContextProvider_LinkedBusinessAccountConfirmationModal",children:(0,c.jsx)(a.Z,{children:(0,c.jsx)(d,{onDismiss:()=>{s(!1),t()}})})})]})}var m=n(619370),p=n(372135),_=n(210578),x=n(140017),f=n(205841),g=n(454514),b=n(739670),y=n(486587),j=n(624797),v=n(741983),w=n(737811),A=n(340523),P=n(757640),C=n(858128),T=n(13848),S=n(149722),k=n(311694),E=n(514810),I=n(983983),Z=n(89511),z=n(728277),O=n(985238);function B({currentSite:e,isSterlingOnSteroids:t,isAdsNavMenuEnabled:n,isPersistentArrUpsellEnabled:r,advertiser:l,idealTooltipDirection:a,icon:d,iconSize:u,defaultIconColor:B,selectedIconColor:L,tooltipZIndex:R,onClick:D,onPanelChange:N,showMoreOptions:U=!0}){let H=(0,x.ZP)(),{showAccountMenuFlyout:M,updateHeaderState:W}=(0,E.Z)(),F=e=>{W({type:e?"showAccountMenuFlyout":"hideAccountMenuFlyout"})},[Y,$]=(0,i.useState)(!1),[G,q]=(0,i.useState)(!0),K=(0,s.k6)(),X=(0,S.Z)(),V=(0,z.Z)(),J=(0,Z.Z)({user:V.data,viewer:X}),Q=J&&G,ee=(0,P.Z)({name:"UserResource",options:{field_set_key:"linked_partner",user_id:X.isAuth?X.id:""}}),et=(0,i.useRef)(null),{checkExperiment:en}=(0,A.F)(),ei=(0,_.YG)(e)&&!t||(0,_.Dm)(e)||(0,_.Y3)(e),es=(0,_.Y3)(e)||n,eo=(0,s.TH)(),er=(0,T.F9)();(0,i.useEffect)(()=>{!function({showOneToast:e,i18n:t,location:n,history:i,username:s,fullName:o,avatarUrl:r}){if(!(n&&n.search))return;let l=(0,y.Z)(t,n,s||""),{message:a}=(0,j.mB)(n.search),d=a===b.pN||a===b.aU;l&&(e(({hideToast:e})=>(0,c.jsx)(g.ZP,{duration:b.Jl,onHide:e,text:l,thumbnail:d?{avatar:(0,c.jsx)(f.qE,{name:o||"",size:"md",src:r||""})}:void 0})),i.replace(n.hash?`${n.pathname}${n.hash}`:n.pathname))}({showOneToast:er.showOneToast,i18n:H,location:eo,history:K,username:X.username||"",fullName:X.fullName||"",avatarUrl:X.imageMediumUrl||""})},[]),(0,i.useEffect)(()=>(X.isAuth&&X.partner&&(0,w.Mt)(X,ee.data),()=>{X.isAuth&&X.partner&&(0,w.CV)("flyout.dismiss")}),[]);let el=()=>{F(!1)};(0,i.useEffect)(()=>{(ee.data?.businesses??[]).length>0&&$(!0)},[ee]),(0,i.useEffect)(()=>{N?.(M)},[M]);let{pathname:ea}=eo,ec=!(ea.startsWith("/settings")||ea.startsWith("/edit"))&&(X.username&&ea.startsWith(`/${X.username}`)||ea.startsWith("/news_hub")),ed=J||ea.startsWith("/homefeed")||ea.startsWith("/business/hub")||"/"===ea;return(0,c.jsx)(k.T,{children:(0,c.jsx)(O.j,{children:(0,c.jsxs)(h,{onDismiss:el,children:[(0,c.jsxs)(o.xu,{ref:et,"data-test-id":"header-accounts-options-button",position:"relative",children:[(0,c.jsx)(o.hU,{accessibilityLabel:H.bt("Akun dan opsi lainnya", "Accounts and more options", "header.accountsOptionsMenu.accountsOptionsMenuButton", undefined, true),icon:d||"arrow-down",iconColor:M?L||"darkGray":B||"gray",onClick:()=>{D?.(),F(!M),$(!1),q(!1)},size:u||"xs",tooltip:{accessibilityLabel:"",text:H.bt("Akun dan opsi lainnya", "Accounts and more options", "navbar.actionsOptionsButton.tooltip", undefined, true),zIndex:R||new o.H3([I.NW]),idealDirection:a}}),r&&(en("dweb_google_connect_persistent_banner_v2").anyEnabled||en("dweb_password_set_persistent_banner_v2").anyEnabled)&&(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{right:"8px"}},position:"absolute",top:!0,children:(0,c.jsx)(C.Z,{height:14,isAbsolute:!0,text:"1",width:14})})]}),M&&(0,c.jsx)(o.xu,{"data-test-id":"HeaderAccountsOptionsFlyout",children:(0,c.jsx)(p.Z,{advertiser:l,anchor:et.current,isPersistentArrUpsellEnabled:r,isWwwSite:(0,_.YG)(e),onDismiss:el,showAccountSwitcher:ei,showAdsSupportOption:es,showMoreOptions:U})}),Y&&(0,c.jsx)(o.xu,{"data-test-id":"LinkedBusinessAccountFlyout",children:(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[502787],placementId:1000109,showCaret:!0})}),(0,v.LO)(eo)&&(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[503137],idealDirection:"left",placementId:1000303}),X.isAuth&&!X.partner?(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[503893,503602],onClickComplete:()=>K.push("/settings"),placementId:1000109,showCaret:!0}):null,Q&&(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[505848],hasFullWidthButton:!1,onClickComplete:()=>{q(!1),K.push("/settings/permissions")},placementId:1000109,showCaret:!0,textWeight:"normal"}),ec&&(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[505283],flyoutSize:"md",hasFullWidthButton:!1,onClickComplete:()=>{K.push("/settings/privacy/")},placementId:1000109,showCaret:!0,textAlign:"center",textWeight:"bold"}),ed&&(0,c.jsx)(m.default,{anchor:et.current,experienceIds:[505949],hasFullWidthButton:!1,onClickComplete:()=>{K.push("/settings/claim")},placementId:1000109,showCaret:!0,textWeight:"normal"})]})})})}},215886:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(340523),s=n(554786);let o=e=>{let{checkExperiment:t}=(0,i.F)(),n=(0,s.ZP)();if("phone"===n||"tablet"===n){let n=t("mweb_metrics_dau_ping").group;return n===e||n.startsWith("employee")}let o=t("web_metrics_dau_ping").group;return o===e||o.startsWith("employee")}},568803:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return"object"==typeof e&&null!==e&&"url"in e&&"media"in e}},433058:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294),s=n(214877),o=n(525364);let r=e=>{let t=(0,i.useRef)(!1),{logContextEvent:n}=(0,s.v)(),{viewType:r,viewParameter:l}=(0,o.SU)();(0,i.useEffect)(()=>{Object.entries(e).length>0&&!t.current&&r&&(n({event_type:13,view_type:r,view_parameter:l,...e}),t.current=!0)})}},220488:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(667294),s=n(883119),o=n(510989),r=n(401429),l=n(862249),a=n(983983),c=n(785893);let d=a.fe,u=new s.Ry(d-1);function h(e){let{button:t,onClick:n}=e;return t.url?(0,c.jsx)(s.ZP,{color:"white",fullWidth:!0,href:t.url,onClick:n,rel:(0,l.Z)({url:t.url})?"nofollow":"none",text:t.text}):(0,c.jsx)(s.zx,{color:"white",fullWidth:!0,onClick:n,text:t.text})}let m=e=>{let t;let{anchors:n,experience:o,dismiss:r,complete:l,scrollToDismiss:a,onAnchorTouch:d,idealDirection:m}=e,p=!0,{message:_,anchor:x,complete_button:f}=(o||{}).display_data,g=n[x],b=()=>{t&&clearTimeout(t),r()},y=()=>{t||p||(t=setTimeout(()=>b(),1500)),p=!1};return(0,i.useEffect)(()=>(g&&(a&&(window.addEventListener("scroll",y),window.addEventListener("touchmove",y)),d&&g&&g.addEventListener("click","complete"===d?l:b)),()=>{a&&(window.removeEventListener("scroll",y),window.removeEventListener("touchmove",y),t&&clearTimeout(t)),d&&g&&g.removeEventListener("click","complete"===d?l:b)}),[g]),(0,c.jsx)(s.Li,{anchor:g,idealDirection:m,onDismiss:b,zIndex:u,children:(0,c.jsx)(s.xu,{padding:4,tabIndex:0,children:(0,c.jsxs)(s.kC,{direction:"column",gap:3,children:[(0,c.jsx)(s.xv,{color:"light",children:_}),f&&(0,c.jsx)(h,{button:f,onClick:l})]})})})},p=e=>{let{placementId:t,anchors:n}=e,[s,l]=(0,i.useState)(!0),a=()=>l(!1);return(0,c.jsx)(o.Z,{name:"ExperiencePopoverEducational",children:s&&(0,c.jsx)(r.Z,{placementId:t,predicate:e=>{if(e?.type!==29)return!1;let{anchor:t}=(e||{}).display_data;return!!t&&!!n[t]},children:({complete:t,dismiss:n,experience:i})=>(0,c.jsx)(m,{...e,complete:()=>{a(),t()},dismiss:()=>{a(),n()},experience:i})})})}},619370:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var i=n(667294),s=n(883119),o=n(401429),r=n(785893);function l(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a extends i.PureComponent{constructor(...e){super(...e),l(this,"onScroll",()=>{let{dismiss:e}=this.props;this.dismissed||this.timer||(this.timer=setTimeout(()=>{e(),this.dismissed=!0,this.timer=void 0},3e3))}),l(this,"dismissed",!1)}componentDidMount(){window.addEventListener("scroll",this.onScroll)}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){let{anchor:e,text:t,thumbnails:n,idealDirection:i,forceDirection:o}=this.props,l=n.slice(-3);return(0,r.jsx)(s.J2,{anchor:e,color:"white",forceDirection:o,idealDirection:i,onDismiss:this.onScroll,shouldFocus:!1,size:"md",children:(0,r.jsxs)(s.xu,{alignContent:"center",display:"flex",justifyContent:"between",padding:3,width:"100%",children:[(0,r.jsx)(s.xu,{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",marginStart:-3,paddingX:3,children:(0,r.jsx)(s.xv,{color:"default",weight:"bold",children:t})}),(0,r.jsx)(s.xu,{display:"flex",marginEnd:-2,paddingX:2,children:l.map(e=>(0,r.jsx)(s.xu,{height:60,paddingX:1,width:50,children:(0,r.jsx)(s.zd,{height:60,rounding:2,children:(0,r.jsx)(s.Ee,{alt:"More Ideas Thumbnail",color:"rgb(86, 152, 239)",fit:"cover",naturalHeight:60,naturalWidth:60,src:e})})},e))})]})})}}var c=n(76561);function d(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u extends i.Component{constructor(...e){super(...e),d(this,"dismissRef",(0,i.createRef)()),d(this,"state",{paused:!1}),d(this,"dismissCb",()=>{this.dismissRef.current?.()}),d(this,"handlePulsarClick",(e,t)=>{e?this.setState({paused:!0}):t()})}componentWillUnmount(){let{anchor:e}=this.props;this.timer&&clearTimeout(this.timer),e?.removeEventListener("click",this.dismissCb)}setDefaultPulsarTooltip(e){e.has_pulsar=null==e.has_pulsar||e.has_pulsar,e.has_tooltip=null==e.has_tooltip||e.has_tooltip}getText(e,t,n){return(t&&e.text.replace("{boardName}",t),n)?n(e):e.text}render(){let{anchor:e,customWrapper:t,experienceIds:n,boardTextOverride:l,fontSize:d,forceDirection:u,hasFullWidthButton:h=!0,idealDirection:m,useMasonryFlyout:p,noClickToDismiss:_,onClickComplete:x,onClickDismiss:f,placementId:g,shouldTimeoutDismiss:b,textAlign:y,textOverflow:j,textOverrideFn:v,textWeight:w,customizedComplete:A,pulsarZIndex:P,advertiserId:C,dismissButtonLocation:T,dismissButtonMarginTop:S,zIndex:k}=this.props,E=t||(({children:e})=>p?(0,r.jsx)(s.mh,{children:e}):e);return(0,r.jsx)(o.Z,{eligibleIds:n,eligibleTypes:[8],placementId:g,targeting:C?{advertiserId:parseInt(C,10)}:null,children:({complete:t,dismiss:n,experience:o})=>{let{display_data:{scroll_to_dismiss:p,scroll_to_dismiss_delay_in_seconds:g=0,...C}}=o,I=p&&e,Z=()=>{z(),this.timer||(this.timer=setTimeout(n,1e3*g))},z=()=>{I&&(window.removeEventListener("scroll",Z),window.removeEventListener("touchmove",Z))},O=()=>{z(),t()};if(I&&(window.addEventListener("scroll",Z),window.addEventListener("touchmove",Z)),this.setDefaultPulsarTooltip(C),!C.has_pulsar&&!C.has_tooltip)return O(),null;b&&C.disappearTime&&C.disappearTime>0&&(this.timer=setTimeout(()=>(Z(),null),C.disappearTime));let B=501041===o.experience_id||505086===o.experience_id;return C.has_tooltip&&!C.has_pulsar&&(this.dismissRef.current=Z,e?.addEventListener("click",this.dismissCb)),(0,r.jsxs)(i.Fragment,{children:[C.has_pulsar&&(0,r.jsx)(c.Z,{anchor:e,leftOverride:B?342:void 0,onTouch:()=>this.handlePulsarClick(C.has_tooltip,O),paused:this.state.paused,topOverride:B?-5:void 0,zIndex:P&&P.index()}),C.has_tooltip&&(!C.has_pulsar||this.state.paused)&&(C.thumbnail_urls?(0,r.jsx)(a,{anchor:e,dismiss:Z,forceDirection:u,idealDirection:m||"down",text:C.text,thumbnails:C.thumbnail_urls}):(0,r.jsx)(E,{children:(0,r.jsx)(s.Li,{anchor:e,forceDirection:u,idealDirection:m||"down",onDismiss:_?()=>{}:Z,shouldFocus:!1,size:"sm",zIndex:k,children:(0,r.jsxs)(s.xu,{column:12,padding:3,children:[(0,r.jsxs)(s.xv,{align:"right"===y?"end":y,color:"light",overflow:j,size:d,weight:w||"bold",children:[this.getText(C,l,v),C.secondary_cta_link&&(0,r.jsx)(s.xu,{display:"inlineBlock",marginStart:1,children:(0,r.jsx)(s.xv,{color:"light",size:d,weight:"bold",children:(0,r.jsx)(s.rU,{display:"inlineBlock",href:C.secondary_cta_link.url,target:"blank",underline:"hover",children:C.secondary_cta_link.text})})})]}),C.sub_text&&(0,r.jsx)(s.xu,{paddingY:2,children:(0,r.jsx)(s.xv,{color:"light",size:d,children:C.sub_text})}),(C.dismiss_button_text||C.complete_button_text)&&(0,r.jsxs)(s.xu,{alignItems:"center",display:"flex",justifyContent:T||"start",marginTop:S||2,children:[C.dismiss_button_text&&(0,r.jsx)(s.xu,{column:6,marginEnd:1,children:(0,r.jsx)(s.zx,{color:"white",fullWidth:h,onClick:()=>{f&&f(),Z()},size:"md",text:C.dismiss_button_text})}),C.complete_button_text&&(0,r.jsx)(s.xu,{column:C.dismiss_button_text?6:12,children:A?(0,r.jsx)(s.iP,{fullHeight:!0,onTap:()=>{O(),x&&x()},rounding:2,children:(0,r.jsx)(s.xu,{color:"default",dangerouslySetInlineStyle:{__style:{padding:"10px"}},display:"flex",justifyContent:"center",padding:2,rounding:2,children:(0,r.jsx)(s.xv,{color:"light",weight:"bold",children:C.complete_button_text})})}):(0,r.jsxs)(s.kC,{justifyContent:"center",children:[C.complete_button_cta_url&&(0,r.jsx)(s.ZP,{color:"white",fullWidth:h,href:C.complete_button_cta_url,onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),O(),x&&x()},size:"md",target:C.complete_button_cta_url?"blank":null,text:C.complete_button_text}),!C.complete_button_cta_url&&(0,r.jsx)(s.zx,{color:"white",fullWidth:h,onClick:()=>{O(),x&&x()},size:"md",text:C.complete_button_text})]})})]})]})})}))]})}})}}d(u,"defaultProps",{fontSize:"300",positionRelativeToAnchor:!0})},739670:(e,t,n)=>{n.d(t,{Di:()=>r,Jl:()=>i,R:()=>s,aU:()=>l,j2:()=>o,pN:()=>a});let i=1e4,s="permanent_account_closure",o="account_deletion_email_sent",r="account_deactivated",l="unlink_successful",a="account_switch_to_settings"},486587:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(169346),s=n(624797);function o(e,t,n=""){if(!(t&&t.search))return"";let{message:r}=(0,s.mB)(t.search),l=(0,s.mB)(t.search).username||n,a="true"===(0,s.mB)(t.search).multiple_accounts;return(0,i.Z)({i18n:e,message:r,multipleAccounts:a,username:l})}},169346:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(883119),s=n(339001),o=n(739670),r=n(785893);function l(e,t,n){return(0,r.jsx)(i.xv,{align:n||"center",children:(0,s.nk)(e,{username:(0,r.jsx)(i.xv,{inline:!0,weight:"bold",children:t})})})}function a({i18n:e,message:t,multipleAccounts:n,username:i=""}){switch(t){case o.R:return e.bt("Akun Anda telah dihapus. Sayang sekali Anda harus pergi", "Your account has been deleted. We're sad to see you go", "unauthLoginPage.accountDeletedToast.message", undefined, true);case o.j2:if(n)return l(e.bt("Email telah dikirim dengan langkah terakhir untuk menghapus akun Anda, {{username}}, dan akun yang ditautkannya", "An email has been sent with final steps to delete your account, {{username}} and its linked accounts", "accountDeletedEmailToast.message.multipleAccounts", undefined, true),i);return l(e.bt("Email berisi langkah terakhir untuk menghapus akun Anda telah dikirim, {{username}}", "An email has been sent with final steps to delete your account, {{username}}", "accountDeletedEmailToast.message.singleAccount", undefined, true),i);case o.Di:return l(n?e.bt("Akun {{username}} dan akun tertautnya yang terkait telah dinonaktifkan", "The account, {{username}}, and its associated linked accounts have been deactivated", "unauthLoginPage.deactivatedToast.message.multipleAccounts", undefined, true):e.bt("Akun {{username}} telah dinonaktifkan", "The account, {{username}}, has been deactivated", "unauthLoginPage.deactivatedToast.message.singleAccount", undefined, true),i);case o.aU:return l(e.bt("Berhasil! Anda telah memutuskan tautan akun bisnis ini. Saat ini Anda menggunakan {{username}}.", "Success! You've unlinked this business account. You are currently in {{username}}.", "authHomeFeedPage.unlinkAccountToast.message", undefined, true),i,"start");case o.pN:return l(e.bt("Anda telah beralih ke dan saat ini berada di akun {{username}}", "You've switched into and are currently in the account {{username}}", "accountSettings.switchAccountToAccountChanges", undefined, true),i,"start");default:return""}}},201700:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(88682),s=n(598228);function o({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:o,advertiserId:r}){let l=e||t||n?`${s.C0}`:"",a=`${l}${o}`;return r?(0,i.Z)(a,{advertiserId:r}):a}},98769:(e,t,n)=>{n.r(t),n.d(t,{Header:()=>V,default:()=>J});var i=n(667294),s=n(616550),o=n(883119),r=n(334589),l=n(406718),a=n(3808),c=n(620527),d=n(215886),u=n(324358),h=n(568803),m=n(920434),p=n(729903),_=n(140017),x=n(741983),f=n(729817),g=n(340523),b=n(5859),y=n(37156),j=n(623409),v=n(624797),w=n(794109),A=n(906906),P=n(214877),C=n(97630),T=n(785893);let S=({isSelected:e,onClick:t})=>{let n=(0,_.ZP)(),{logContextEvent:a}=(0,P.v)(),c=(0,l.Z)(!0),d=(0,i.useRef)(null),[u,h]=(0,i.useState)(!1),m=(0,s.k6)(),p=e=>{a({event_type:101,component:13988,element:e}),h(!1)};return(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(o.xu,{ref:d,"data-test-id":"create-tab",children:(0,T.jsx)(C.Z,{contextData:{event:101,component:8,element:12969},iconEnd:c?void 0:"arrow-down",isSelected:e,onClick:e=>{t?.(),c?(a({event_type:101,component:13988,element:10949}),e.preventDefault(),m.push({pathname:(0,r.Z)(c),state:{entry_type:"navbar_plus_button"}})):h(e=>!e)},role:c?"link":"button",text:n.bt("Buat", "Create", "header.section.createTab", undefined, true)})}),u&&(0,T.jsxs)(o.Lt,{anchor:d.current,id:"header-create-dropdown",idealDirection:"down",onDismiss:()=>{h(!1)},zIndex:new o.Ry(1e3),children:[(0,T.jsx)(o.Lt.Link,{dataTestId:"create-idea-pin",href:"/idea-pin-builder/",onClick:()=>p(10949),option:{value:"ideaPin",label:n.bt("Buat Pin Ide", "Create Idea Pin", "header.headerCreateMenu.ideaPinBtn", undefined, true)}}),(0,T.jsx)(o.Lt.Link,{dataTestId:"create-static-pin",href:"/pin-builder/",onClick:()=>p(10643),option:{value:"pin",label:n.bt("Buat Pin", "Create Pin", "header.headerCreateMenu.pinBtn", undefined, true)}})]})]})};var k=n(796796),E=n(391322),I=n(677801),Z=n(32810),z=n(477458),O=n(983983),B=n(953565);function L({tabs:e}){let t=(0,_.ZP)(),[n,s]=(0,i.useState)(!1),{hovered:r,onMouseEnter:l,onMouseLeave:a}=(0,z.Z)(),c=(0,i.useRef)(),d=e.find(e=>e.isSelected);d||(d=e.find(e=>"home"===e.key));let u=()=>s(!1);return(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(o.xu,{ref:c,color:n?"dark":r?"secondary":void 0,"data-test-id":"HeaderCollapsedTabs",display:"inlineBlock",flex:"none",height:48,marginStart:2,minWidth:60,onMouseEnter:l,onMouseLeave:a,rounding:6,children:(0,T.jsx)(o.iP,{fullHeight:!0,onTap:()=>{s(!n),d?.incrementKey&&(0,B.nP)(d.incrementKey)},rounding:6,children:(0,T.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"14px 14px",whiteSpace:"nowrap"}},display:"flex",flex:"none",justifyContent:"center",children:[(0,T.jsx)(o.xv,{align:"center",color:n?"inverse":"default",overflow:"normal",weight:"bold",children:d?.text}),(0,T.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"1px"}},marginStart:2,children:(0,T.jsx)(o.JO,{accessibilityLabel:t.bt("Buka menu tab", "Open tab menu", "header.tabMenu.downArrow", undefined, true),color:n?"inverse":"default",icon:"arrow-down",size:12})})]})})}),n&&(0,T.jsx)(o.xu,{"data-test-id":"HeaderCollapsedTabsMenu",children:(0,T.jsx)(o.Lt,{anchor:c.current,disableMobileUI:!0,id:"HeaderCollapsedTabsMenu",onDismiss:u,zIndex:new o.H3([new o.Ry(O.fe)]),children:e.map(({isSelected:e,key:n,text:i,url:s})=>(0,T.jsx)(o.Lt.Link,{href:s,onClick:u,option:{value:n,label:i},children:(0,T.jsxs)(o.kC,{alignItems:"center",width:"100%",children:[(0,T.jsx)(o.kC.Item,{flex:"grow",children:(0,T.jsx)(o.xv,{weight:"bold",children:i})}),(0,T.jsx)(o.JO,{accessibilityLabel:t.bt("Opsi yang dipilih", "Selected option", "flyoutMenu.selectedOptionCheckmark", undefined, true),color:"default",icon:e?"check":void 0,inline:!0})]})},n))})})]})}var R=n(4058),D=n(276235),N=n(757640);function U({children:e,isSelected:t}){let{isLoaded:n,data:i}=(0,N.Z)({name:"ApiResource",options:{url:"/v3/feeds/homefeed/badge/"},noCache:!0});return e(!!(n&&i)&&!t)}function H({anchor:e}){let t=(0,_.ZP)();return(0,T.jsx)(o.Li,{anchor:e,idealDirection:"down",message:t.bt("Sajian beranda Anda akan menampilkan ide-ide untuk minat baru Anda", "Your home feed will show ideas for your new interests", "Flyout message on Pinterest logo on Header", undefined, true),onDismiss:()=>{}})}var M=n(249222),W=n(509474),F=n(433058),Y=n(454051);function $({isSelected:e,onClick:t}){let n=(0,_.ZP)();(0,F.Z)({component:8,element:11674});let i=n.bt("Jelajahi", "Explore", "header.section.exploreTab", undefined, true);return(0,T.jsx)(C.Z,{contextData:{event:101,component:8,element:11674},dataTestId:"today-tab",isSelected:e,onClick:t,showNotifBadge:!0,text:i,url:(0,Y.tG)()})}var G=n(961550),q=n(19549),K=n(909846);function X(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class V extends i.Component{constructor(e){super(e),X(this,"mounted",!1),X(this,"iconRoutes",(0,k.Z)({username:this.props.viewer.username,isIdeaPinRenamingEnabled:this.props.isIdeaPinRenamingEnabled})),X(this,"logoButtonRef",(0,i.createRef)()),X(this,"profileRef",(0,i.createRef)()),X(this,"incrementOptions",()=>(0,G.iz)(this.props.verticalNavExperimentGroup)),X(this,"getCollapsedTabList",()=>[{key:"home",text:this.props.i18n.bt("Beranda", "Home", "header.homeButton.section", undefined, true),url:"/",incrementKey:O.sp.HOME_BUTTON_COLLAPSED_TAB},...this.props.isTodayTabEligible?[{key:"explore",text:this.props.i18n.bt("Jelajahi", "Explore", "header.section.exploreTab", undefined, true),url:(0,Y.tG)(),incrementKey:O.sp.TODAY_TAB_COLLAPSED_TAB}]:[],{key:"create",text:this.props.i18n.bt("Buat", "Create", "header.section.createTab", undefined, true),url:(0,r.Z)(this.props.isIdeaPinRenamingEnabled),incrementKey:O.sp.CREATE_TAB_COLLAPSED_TAB}]),X(this,"handleResize",(0,m.Z)(()=>{if(this.mounted){let e=document.getElementById("searchBoxContainer")?.offsetWidth||0;this.setState({searchIconOnly:e<=300}),window.innerWidth<850&&this.props.requestContext?this.setState({shrinkSearchbox:!0}):this.state.shrinkSearchbox&&this.setState({searchIconOnly:!1,shrinkSearchbox:!1})}},100)),X(this,"fetchUserAccounts",()=>{let{userAccountsRetrieved:e,viewer:t}=this.props;t.isAuth&&(0,f.dD)(t).then(t=>{e(t)})}),this.state={searchIconOnly:!1,selected:(0,E.Z)({pathname:e.location.pathname,iconRoutes:this.iconRoutes}),showLeftTabs:!0,shrinkSearchbox:!1}}componentDidMount(){let{headerButtonContext:e,isMetricDAUExperimentEnabled:t}=this.props;this.mounted=!0,this.fetchUserAccounts(),this.handleResize(),window.addEventListener("resize",this.handleResize),(0,i.startTransition)(()=>{e.setLogoButtonRef(this.logoButtonRef.current)}),t&&(0,u.Z)()}componentDidUpdate(e){let{location:t}=this.props;if(e.location.pathname!==t.pathname){let e=(0,E.Z)({pathname:t.pathname,iconRoutes:this.iconRoutes});this.setState({selected:e})}}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),this.mounted=!1}renderSearchBox(){let{history:e}=this.props,{searchIconOnly:t,shrinkSearchbox:n}=this.state;return e?.push?(0,T.jsx)(A.Z,{handleIconOnlyChange:e=>this.setState({showLeftTabs:t&&e}),iconOnly:t,widthType:n?"shrink":void 0}):null}renderButtons(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n,isVerticalNavEnabled:s,startPrefetchTimer:r,cancelPrefetchTimer:l,onNavigateToHomefeed:a,onMouseDownHomefeedPrefetch:c,onNavigateToHomefeedMousedownPrefetch:d}=this.props,{selected:u,showLeftTabs:h,shrinkSearchbox:m}=this.state;return s?(0,T.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[this.renderSearchBox(),(0,T.jsx)(o.kC.Item,{children:(0,T.jsx)(M.Z,{children:(0,T.jsx)(I.Z,{idealTooltipDirection:"down",isSelected:"profile"===u,onClick:()=>(0,B.nP)(G.Un.AVATAR,this.incrementOptions()),tooltipZIndex:G.BO})})}),(0,T.jsx)(o.kC.Item,{children:(0,T.jsx)(p.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onPanelChange:e=>{e&&(0,B.nP)(G.Un.ACCOUNT_SWITCHER)},showMoreOptions:!1})})]}):(0,T.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,T.jsxs)(o.xu,{children:[(0,T.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,T.jsx)(D.Z,{cancelPrefetchTimer:l,onClick:()=>{(0,B.nP)(O.sp.PINTEREST_LOGO,this.incrementOptions()),a(),d?.()},onMouseDown:c,startPrefetchTimer:r},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,T.jsx)(H,{anchor:this.logoButtonRef.current})]}),!m&&h&&(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(U,{isSelected:"home"===u,children:e=>(0,T.jsx)(C.Z,{dataTestId:"home-tab",isSelected:"home"===u,onClick:()=>(0,B.nP)(O.sp.HOME_TAB,this.incrementOptions()),showNotifBadge:e,text:this.props.i18n.bt("Beranda", "Home", "header.homeButton.section", undefined, true),url:"/"})}),this.props.isTodayTabEligible&&(0,T.jsx)($,{isSelected:"today"===u,onClick:()=>(0,B.nP)(O.sp.TODAY_TAB,this.incrementOptions())}),(0,T.jsx)(S,{isSelected:"create"===u,onClick:()=>(0,B.nP)(O.sp.CREATE_TAB,this.incrementOptions())})]}),m&&h&&(0,T.jsx)(L,{tabs:this.getCollapsedTabList().map(e=>({isSelected:u===e.key,...e}))}),this.renderSearchBox(),(0,T.jsxs)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:[(0,T.jsx)(W.F,{value:{currentSite:e},children:(0,T.jsx)(q.Z,{onConversationsClick:()=>(0,B.nP)(O.sp.CONVERSATIONS,this.incrementOptions()),onNewsClick:()=>(0,B.nP)(O.sp.NEWS,this.incrementOptions())})}),(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(o.xu,{ref:this.profileRef,children:(0,T.jsx)(M.Z,{children:(0,T.jsx)(I.Z,{isSelected:"profile"===u,onClick:()=>(0,B.nP)(O.sp.AVATAR,this.incrementOptions())})})}),(0,T.jsx)(p.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,B.nP)(O.sp.ACCOUNT_OPTIONS,this.incrementOptions())})]})]})]})}renderHomeButtonAndAccountSwitcher(){let{currentSite:e,headerButtonContext:t,isPersistentArrUpsellEnabled:n}=this.props,{selected:s}=this.state;return(0,T.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,T.jsxs)(o.xu,{children:[(0,T.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,T.jsx)(D.Z,{onClick:()=>(0,B.nP)(O.sp.EXTERNAL_BUTTON_QUERY_PINTEREST_LOGO,this.incrementOptions())},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,T.jsx)(H,{anchor:this.logoButtonRef.current})]}),(0,T.jsx)(o.xu,{flex:"grow"}),(0,T.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(o.xu,{ref:this.profileRef,children:(0,T.jsx)(M.Z,{children:(0,T.jsx)(I.Z,{isSelected:"profile"===s,onClick:()=>(0,B.nP)(O.sp.EXTERNAL_BUTTON_QUERY_AVATAR,this.incrementOptions())})})}),(0,T.jsx)(p.Z,{currentSite:e,isPersistentArrUpsellEnabled:n,onClick:()=>(0,B.nP)(O.sp.EXTERNAL_BUTTON_QUERY_ACCOUNT_OPTIONS,this.incrementOptions())})]})})]})}renderBusinessSsoPageHeader(){let{i18n:e}=this.props;return(0,T.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,T.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,T.jsx)(D.Z,{onClick:()=>(0,B.nP)(O.sp.SSO_PAGE_PINTEREST_LOGO,this.incrementOptions())},"HomeButton")}),(0,T.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},children:(0,T.jsx)(o.X6,{accessibilityLevel:2,color:"default",overflow:"normal",size:"400",children:e.bt("Bisnis", "Business", "authHeader.logoText.business", undefined, true)})})]})}renderUnsubscribePageHeader(){let{history:e,i18n:t,trackInteraction:n}=this.props;return(0,T.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,T.jsx)(o.xu,{children:(0,T.jsx)(D.Z,{onClick:()=>(0,B.nP)(O.sp.UNSUBSCRIBE_PAGE_PINTEREST_LOGO,this.incrementOptions())},"HomeButton")}),(0,T.jsx)(o.xu,{flex:"grow"}),(0,T.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,T.jsx)(o.iP,{onTap:()=>{e.push("/"),n({action:"click",item:"back-to-pinterest",within:"unsubscribe-page"})},rounding:2,tapStyle:"compress",children:(0,T.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,T.jsx)(o.xv,{inline:!0,size:"300",weight:"bold",children:t.bt("Kembali ke Pinterest", "Back to Pinterest", "header.backToPinterest.section", undefined, true)}),(0,T.jsx)(I.Z,{isSelected:!1,noNavigation:!0,onClick:()=>(0,B.nP)(O.sp.UNSUBSCRIBE_PAGE_AVATAR,this.incrementOptions())})]})})})]})}renderHeaderContent(){let{location:e,viewer:t}=this.props;if((0,x.RU)(e)){let t=(0,v.mB)(e.search);if((0,h.Z)(t))return this.renderHomeButtonAndAccountSwitcher()}else if((0,x.OK)(e)&&t.isLimitedLogin)return this.renderUnsubscribePageHeader();else if((0,x.nU)(e))return this.renderBusinessSsoPageHeader();return this.renderButtons()}render(){let{headerShadowContext:{isScrolled:e,subheaderShadow:t},nags:n}=this.props;return(0,T.jsxs)(o.xu,{color:"default",column:12,"data-test-id":"header-background",children:[n,(0,T.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{...null===t&&e?O.Rz:{}}},children:(0,T.jsx)(o.kC,{direction:"column",height:O.cI,justifyContent:"start",width:"100%",children:(0,T.jsx)(o.xu,{alignItems:"center",column:12,display:"flex",flex:"grow",paddingX:4,paddingY:1,children:this.renderHeaderContent()})})})]})}}function J(e){let t=(0,_.ZP)(),n=(0,b.B)(),{checkExperiment:i}=(0,g.F)(),{userAccountsRetrieved:o}=(0,w.N)(),r=(0,j.Z)(),{isFbAuthOnlyUser:u}=(0,K.t)(),{startPrefetchTimer:h,cancelPrefetchTimer:m,onNavigateToHomefeed:p}=(0,c.$)(),{onMouseDown:x,onNavigateToHomefeed:f}=(0,c.C)(),{enabled:v,group:A}=(0,a.Z)();i("social_growth_holdout_2023_h2"),i("social_experience_holdout_2024_h1"),i("social_experience_holdout_2024_h2");let P=(0,l.Z)(!0),C=(0,y.Z)(),S=(0,d.Z)("header");return(0,T.jsx)(V,{...e,cancelPrefetchTimer:m,headerButtonContext:(0,Z.p)(),headerShadowContext:(0,R.WQ)(),history:(0,s.k6)(),i18n:t,isIdeaPinRenamingEnabled:P,isMetricDAUExperimentEnabled:S,isPersistentArrUpsellEnabled:u,isTodayTabEligible:C,isVerticalNavEnabled:v,location:(0,s.TH)(),onMouseDownHomefeedPrefetch:x,onNavigateToHomefeed:p,onNavigateToHomefeedMousedownPrefetch:f,requestContext:n,showPersonalBoutique:e.viewer.show_personal_boutique??!1,startPrefetchTimer:h,trackInteraction:r,userAccountsRetrieved:o,verticalNavExperimentGroup:A})}},677801:(e,t,n)=>{n.d(t,{Z:()=>j});var i=n(667294),s=n(883119),o=n(3808),r=n(220488),l=n(205841),a=n(140017),c=n(495442),d=n(340370),u=n(5859),h=n(201700),m=n(477458),p=n(149722),_=n(514810),x=n(983983),f=n(961550),g=n(785893);let b="circle";function y({children:e,show:t,text:n,idealDirection:i,zIndex:o}){return t?(0,g.jsx)(s.u,{accessibilityLabel:"",idealDirection:i,text:n,zIndex:o||new s.H3([new s.Ry(x.fe)]),children:e}):e}function j({isAdsSite:e=!1,isAnalyticsSite:t=!1,isTrendsSite:n=!1,isSelected:x,noNavigation:j=!1,idealTooltipDirection:v,tooltipZIndex:w,onClick:A}){let P=(0,p.Z)(),C=(0,u.B)(),T=(0,a.ZP)(),{active:S,hovered:k,onBlur:E,onFocus:I,onMouseDown:Z,onMouseUp:z,onMouseEnter:O,onMouseLeave:B}=(0,m.Z)(),{fullName:L,username:R,imageMediumUrl:D}=P.isAuth?P:{fullName:"",username:"",imageMediumUrl:""},{isInBiznuxFullscreen:N}=(0,_.Z)(),U=(0,i.useRef)(null),H=(0,h.Z)({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:`/${R}/`,requestContext:C}),M=(0,d.Z)({href:H,onHistoryChange:c.Z}),{enabled:W}=(0,o.Z)();return N||j?(0,g.jsx)(s.xu,{"data-test-id":"header-profile",height:48,rounding:"circle",width:48,children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,g.jsx)(l.qE,{name:L,size:"xs",src:D})})})}):(0,g.jsxs)(s.xu,{"data-test-id":"header-profile",children:[(0,g.jsx)(r.Z,{anchors:{3014:U.current},idealDirection:v,onAnchorTouch:"complete",placementId:1000109,scrollToDismiss:!0}),(0,g.jsx)(y,{idealDirection:v,show:![e,t,n].some(Boolean),text:T.bt("Profil Anda", "Your profile", "navbar.avatarButton.tooltip", undefined, true),zIndex:w,children:(0,g.jsx)(s.Tg,{href:H,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{A?.(),t(),M({event:e})},rounding:W?f.uW:b,children:(0,g.jsx)(s.xu,{ref:U,color:k&&!W?"secondary":void 0,dangerouslySetInlineStyle:W?{__style:{backgroundColor:k?f.bT:void 0}}:void 0,height:48,onBlur:E,onFocus:I,onMouseDown:Z,onMouseEnter:O,onMouseLeave:B,onMouseUp:z,rounding:W?f.uW:b,width:48,children:(0,g.jsx)(s.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,g.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...S||x?{border:"2px solid #111111"}:{}}},display:"flex",height:W?38:30,justifyContent:"center",rounding:"circle",width:W?38:30,children:(0,g.jsx)(l.qE,{name:L,size:W?"sm":"xs",src:D})})})})})})]})}},249222:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(667294),s=n(883119),o=n(406893),r=n(514810),l=n(19447),a=n(785893);function c(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let d="SavePin",u={__style:{left:"50%",marginLeft:-125}},h={__style:{animationName:`${d}_AnimateIn, ${d}_CircleAnimateOut`,animationDuration:"0.3s, 0.25s",animationDelay:"0.5s, 1.3s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",backgroundColor:"rgba(255, 255, 255, 0.6)"}},m={__style:{animationName:`${d}_AnimateIn, ${d}_AnimateOut`,animationDuration:"0.3s, 0.35s",animationDelay:"0.5s, 1.55s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",border:"4px solid white"}},p={__style:{animationName:`${d}_NavButtonAnimation`,animationDuration:"0.8s",animationDelay:"1.65s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out"}},_=()=>`
@keyframes ${d}_AnimateIn {
  from {
    transform: scale(0.0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
}
@keyframes ${d}_CircleAnimateOut {
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes ${d}_AnimateOut {
  from {
    transform: translateY(0) scale(1.0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px) scale(0.0);
    opacity: 0;
  }
}
@keyframes ${d}_NavButtonAnimation {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
}
`;class x extends i.Component{constructor(...e){super(...e),c(this,"state",{imageLoaded:!1}),c(this,"handleAnimationCompletion",()=>{let{animationEnded:e}=this.props;this.setState({imageLoaded:!1},()=>{e()})}),c(this,"handleImageLoad",()=>{this.setState({imageLoaded:!0})}),c(this,"loadImage",()=>{let e=new Image;e.onload=this.handleImageLoad,e.src=this.imageSrc()}),c(this,"imageSrc",()=>{let{images:e={}}=this.props.lastRepin||{};return e["236x"]?.url??""}),c(this,"shouldRenderAnimation",()=>{let{lastRepin:e,startAnimation:t}=this.props,{imageLoaded:n}=this.state;return!!(e&&n&&t)})}componentDidUpdate(e,t){let{lastRepin:n={}}=e,{imageLoaded:i}=t,{lastRepin:s,startAnimation:o}=this.props,{imageLoaded:r}=this.state;s&&s.id!==n?.id&&this.loadImage(),o&&r&&r!==i&&(this.dismissTimeout=setTimeout(this.handleAnimationCompletion,2500))}componentWillUnmount(){this.dismissTimeout&&clearTimeout(this.dismissTimeout)}render(){let{children:e}=this.props;return this.shouldRenderAnimation()?(0,a.jsxs)(s.kC,{alignItems:"stretch",flex:"grow",justifyContent:"center",children:[(0,a.jsx)(o.Z,{unsafeCSS:_()}),(0,a.jsxs)(s.xu,{position:"relative",children:[(0,a.jsxs)(s.xu,{dangerouslySetInlineStyle:u,height:250,position:"absolute",top:!0,width:250,children:[(0,a.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:h,display:"flex",height:"100%",justifyContent:"center",opacity:0,rounding:"circle",width:"100%"}),(0,a.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:m,height:100,left:!0,margin:"auto",opacity:0,position:"absolute",right:!0,rounding:3,top:!0,width:100,children:(0,a.jsx)(s.zd,{height:"100%",rounding:2,wash:!0,width:"100%",children:(0,a.jsx)(s.Ee,{alt:"pin-image",fit:"cover",naturalHeight:1,naturalWidth:1,src:this.imageSrc()})})})]}),(0,a.jsx)(s.xu,{dangerouslySetInlineStyle:p,children:e})]})]}):e}}function f(e){let{repinPinId:t,repinStartAnimation:n,updateHeaderState:i}=(0,r.Z)(),s=(0,l.S6)(),o=t?s(t):null;return(0,a.jsx)(x,{...e,animationEnded:()=>i({type:"hideRepinAnimation"}),lastRepin:o,startAnimation:n})}},19549:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294),s=n(149722),o=n(474373),r=n(901551),l=n(785893);function a({onNewsClick:e,onConversationsClick:t}){let{should_show_messaging:n}=(0,s.Z)();return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(o.Z,{onClick:e}),n&&(0,l.jsx)(r.Z,{onClick:t})]})}},89511:(e,t,n)=>{n.d(t,{Z:()=>s,x:()=>o});var i=n(563366);function s({user:e,viewer:t}){return!!(t.isAuth&&e?.username===t.username)}function o({user:e,viewer:t,location:n}){let{id:s}=e||{},{id:o,isAuth:r}=t,{pathname:l=""}=n||{};return!!(r&&o===s&&l.includes(`/${i.q}/`))}},563366:(e,t,n)=>{n.d(t,{L:()=>s,q:()=>i});let i="_profile",s=506467},728277:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(616550),s=n(757640);function o(){let{username:e}=(0,i.UO)();return(0,s.Z)(null==e?null:{name:"UserResource",options:{username:e,field_set_key:"profile"}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/AuthDesktopHeader.id_ID-af91239c475da8ac.mjs.map