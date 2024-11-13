"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16420],{301322:(e,t,n)=>{n.d(t,{K:()=>a,Q:()=>o});var i=n(667294);let r=(0,i.createContext)(null),o=r.Provider;function a(){let e=(0,i.useContext)(r);return e?.featuredCommentId}},161881:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(545007),r=n(216167),o=n(415199),a=n(413110),l=n(930822),s=n(64819),d=n(232518),h=n(937310);let u={[a.o.aggregatedComment]:"AggregatedCommentReplyResource",[a.o.pin]:"AggregatedCommentResource",[a.o.didIt]:"DidItCommentsResource"};function c(){let e=(0,i.I0)(),{aggregatedCommentCreated:t,updateCommentCount:n}=(0,o.nf)();return async({force:i=!0,fromUnifiedComment:o,objectId:a,objectType:c,orbacSubjectId:m,pinId:_,replyToCommentId:p,tags:g,text:y})=>{let v=u[c],T={force:i,objectId:a,pinId:_,tags:g,text:y,replyToCommentId:p,...m?{orbacSubjectId:m}:{}},E=h.Z.AGGREGATED_COMMENTS;o&&(E="pin"===c?h.Z.UNIFIED_COMMENTS:h.Z.AGGREGATED_COMMENT_REPLIES);let f=await r.Z.create(v,T).callCreate({showError:!1}),I=f.resource_response.data;return t(a,I),e((0,s.vX)({feedType:E,feedId:a,itemIds:[I.id],itemType:I.type,prepend:!0})),"aggregatedComment"===c?n(a,1):"pin"!==c&&e((0,l.L8)(a,1)),_&&e((0,d.R)(_,1)),I.id||f}}},961907:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),r=n(883119),o=n(696534),a=n(140017),l=n(785893);let s=({hasManyComments:e,inCommentFeedPreview:t,isFirstTaggedUserAuthor:n,isInCommentModule:s,shouldShowFirstNameOnly:d,tags:h,taggedUsers:u,text:c})=>{let m=(0,a.ZP)(),_=(0,i.useRef)(null),p=(0,o.Yc)()?"#111111":"#FFFFFF",[g,y]=(0,i.useState)(!1),v=m.bt("... lihat", "...view", "comment.module.toggle.view", undefined, true),T=m.bt("... lihat semua", "...view all", "comment.module.toggle.viewAll", undefined, true),E=e?T:v,f=t||s;(0,i.useEffect)(()=>{_.current&&y(_.current.scrollHeight>_.current.offsetHeight)},[_,y,c]);let I=(e,t)=>(0,l.jsx)(r.xv,{inline:!0,overflow:"normal",children:(0,l.jsx)("span",{className:"text-container",children:e})},t),D=(e,t,i,o)=>{let a=d||0===i&&n?u[i].first_name||u[i].username[0]:t;return(0,l.jsx)(r.xv,{color:e,inline:!0,overflow:"normal",weight:"bold",children:f?a:(0,l.jsx)(r.rU,{display:"inlineBlock",href:`/${u[i].username}`,underline:"hover",children:a})},o)};return(0,l.jsx)("span",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"},children:(()=>{if(!h.length||!u||h.length!==u.length)return I(c,"1");let e=0,n=[];return h.forEach((t,i)=>{let r=c.substring(e,t.offset);e=t.offset+t.length;let o=c.substring(t.offset,e);n=n.concat(I(r,`${i}a`)).concat(D(t.color,o,i,`${i}b`))}),n=n.concat(I(c.substring(e),"2")),(0,l.jsx)(r.xu,{marginEnd:3,position:"relative",children:(0,l.jsxs)(r.xv,{ref:_,inline:!0,lineClamp:s?2:t?1:void 0,children:[n,s&&!g&&(0,l.jsxs)(r.xv,{inline:!0,weight:"bold",children:[" ",E]}),s&&g&&(0,l.jsx)(r.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:`linear-gradient(270deg, ${p} 50%, ${p}00 100%)`}},display:"inlineBlock",position:"absolute",right:!0,width:140,children:(0,l.jsxs)(r.xv,{align:"end",weight:"bold",children:[" ",E]})})]})})})()})}},903591:(e,t,n)=>{n.d(t,{A9:()=>h,F1:()=>g,Ff:()=>p,G_:()=>_,LH:()=>o,Rv:()=>l,TJ:()=>s,i$:()=>u,iB:()=>r,mz:()=>m,pW:()=>d,uC:()=>a,zs:()=>c});var i=n(427514);let r=48,o=56,a=500,l=Object.freeze({TOP:0,REPLY_TO_TRIED:1,REPLY_TO_AGGREGATED:2}),s="comment_featured_ids",d="did_it_featured_ids",h={NONE:"none",WARNING:"warning",BLOCK:"block"},u=(e,t)=>e?(0,i.Z)(t.nbt(["{{ count }} Komentar"], e, "closeup.commentThread.heading.commentCount", true),{count:e.toString()}):t.bt("Belum ada komentar", "No comments yet", "closeup.commentThread.heading.noComments", undefined, true),c=(e,t)=>[{offset:0,length:e.length,color:"darkGray"},...t.map(t=>({...t,offset:(t.offset||0)+e.length+1,color:"shopping"}))],m=e=>e.bt("Tambahkan untuk memulai percakapan", "Add one to start the conversation", "closeup.commentThread.emptyState.message", undefined, true),_=e=>e.bt("Posting", "Post", "commentComposer.button.post", undefined, true),p=e=>e.bt("memposting foto", "posted a photo", "comment.preview.text.photo", undefined, true),g=e=>e.bt("memposting stiker", "posted a sticker", "comment.preview.text.sticker", undefined, true)},135839:(e,t,n)=>{n.d(t,{A5:()=>o,ZP:()=>a,kH:()=>i});let i={LONG:"long",YEAR:"year",WEEKDAY_DATE:"weekday_date",WEEKDAY_DATE_TIME_TIMEZONE:"weekday_date_time_timezone",SHORT_WEEKDAY_DATE:"short_weekday_date",LONG_MONTH_YEAR:"long_month_year",NUMERIC:"numeric",MONTH_DAY:"month_day",SHORT_MONTH:"short_month",SHORT_MONTH_DAY:"short_month_day",DAY:"day",YEAR_SHORT_MONTH_DAY:"year_short_month_day",YEAR_SHORT_MONTH_DAY_HOUR:"year_short_month_day_hour",YEAR_SHORT_MONTH_DAY_TIME_TIMEZONE:"year_short_month_day_time_timezone",TIME:"time",TIME_TIMEZONE:"time_timezone",HOUR:"hour",TWO_DIGIT:"two_digit",TWO_DIGIT_YEAR:"two_digit_year"},r=function(e){switch(e){case i.YEAR:return{year:"numeric"};case i.LONG:return{year:"numeric",month:"long",day:"numeric"};case i.NUMERIC:return{year:"numeric",month:"numeric",day:"numeric"};case i.TWO_DIGIT:return{year:"numeric",month:"2-digit",day:"2-digit"};case i.TWO_DIGIT_YEAR:return{year:"2-digit",month:"2-digit",day:"2-digit"};case i.WEEKDAY_DATE:return{weekday:"long",month:"long",day:"numeric",year:"numeric"};case i.SHORT_WEEKDAY_DATE:return{weekday:"short",month:"numeric",day:"numeric"};case i.WEEKDAY_DATE_TIME_TIMEZONE:return{weekday:"short",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.MONTH_DAY:return{month:"long",day:"numeric"};case i.SHORT_MONTH:return{month:"short"};case i.SHORT_MONTH_DAY:return{month:"short",day:"numeric"};case i.DAY:return{day:"numeric"};case i.LONG_MONTH_YEAR:return{month:"long",year:"numeric"};case i.YEAR_SHORT_MONTH_DAY:return{year:"numeric",month:"short",day:"numeric"};case i.YEAR_SHORT_MONTH_DAY_HOUR:return{month:"short",year:"numeric",day:"numeric",hour:"numeric"};case i.YEAR_SHORT_MONTH_DAY_TIME_TIMEZONE:return{month:"short",year:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.TIME:return{hour:"numeric",minute:"2-digit"};case i.TIME_TIMEZONE:return{hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.HOUR:return{hour:"numeric"};default:throw Error('invalid dateFormatType "'+e+'"')}};function o(){return -1!==Intl.DateTimeFormat.toString().indexOf("[native code]")}function a(e,t,n,i=!0){let l=r(n);return i&&(l.timeZone="UTC"),o()||(l.calendar="gregory"),new Intl.DateTimeFormat(e,l).format(t)}},419075:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){let t=Math.round(e/1e3),n=Math.floor(t/60),i=t%60;return n+":"+(i<10?"0":"")+i}},43665:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){let t=!1;return{promise:new Promise((n,i)=>{e.then(e=>t?i({isCanceled:!0}):n(e),e=>t?i({isCanceled:!0}):i(e))}),cancel(){t=!0}}}},815981:(e,t,n)=>{n.d(t,{Z:()=>i});let i=e=>{if(!e)return null;let{rich_metadata:t}=e.pin;return t?{...e,richMetadata:t}:null}},715970:(e,t,n)=>{n.d(t,{Z:()=>i});let i=e=>e?.pin?.id?e:null},825765:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(667294),r=n(43665);function o(){let e=(0,i.useRef)([]),t=(0,i.useRef)({});return(0,i.useEffect)(()=>()=>{[...Object.keys(t.current).map(e=>t.current[e]),...e.current].forEach(e=>e())},[]),function(n,i){if(i){let e=t.current[i];e&&(e(),delete t.current[i])}let{cancel:o,promise:a}=(0,r.Z)(n);return i?t.current[i]=o:e.current=[...e.current,o],a}}},537513:(e,t,n)=>{n.d(t,{Z$:()=>a,by:()=>l,eL:()=>o});var i=n(419075),r=n(217058);let o=e=>{if("undefined"==typeof window)return"";let t=0,n=document.querySelector('[data-test-id="header"]');if(null!==n){let{height:e}=n.getBoundingClientRect();t+=e}switch(e){case"AuthHomefeed":let i=document.querySelector('[data-root-margin="more-ideas-tabs"]');if(null!==i){let{height:e}=i.getBoundingClientRect();t+=e}break;case"SearchItem":let r=document.querySelector('[data-root-margin="search-improvements-bar"]');if(null!==r){let{height:e}=r.getBoundingClientRect();t+=e}let o=document.querySelector('[data-test-id="search-tab-bar"],[data-root-margin="search-one-bar"]');if(null!==o){let{height:e}=o.getBoundingClientRect();t+=e}}return`${-1*t}px 0px 0px 0px`},a=({videosDuration:e,vHLSV4VideoDuration:t,storyPinDataTotalVideoDuration:n})=>(0,i.Z)(e||t||n||0),l=(e,t,n)=>{e?(0,r.My)(`${t}.mute_button.toggle_off`):(0,r.My)(`${t}.mute_button.toggle_on`),n({action:"click",item:"mute-button"})}},413110:(e,t,n)=>{n.d(t,{n:()=>r,o:()=>i});let i={aggregatedComment:"aggregatedComment",didIt:"didIt",pin:"pin"},r={aggregatedComment:"aggregatedcomment",didIt:"userdiditdata",pin:"pin"}},784300:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(667294),r=n(883119),o=n(572345),a=n(785893);let l=function({badgeSize:e,badgeSpacing:t,fullName:n,isVerifiedIdentity:l,isVerifiedMerchant:s,truncate:d=!1}){let h=n.split(" "),u=h.slice(0,h.length-1).join(" "),c=" ".concat(h[h.length-1]);return d?(0,a.jsxs)(r.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,a.jsx)(r.xv,{lineClamp:1,weight:"bold",children:n}),(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},flex:"none",paddingX:1,position:"relative",children:(0,a.jsx)(o.Z,{isVerifiedIdentity:l,isVerifiedMerchant:s,size:e})})]}):(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("span",{children:u}),(0,a.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[c," ",(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},display:"inlineBlock",flex:"none",position:"relative",children:(0,a.jsx)(o.Z,{isVerifiedIdentity:l,isVerifiedMerchant:s,size:e})})]})]})}},728169:(e,t,n)=>{n.d(t,{C:()=>i,_:()=>a});let i=e=>!!e&&/^\/pin\/[\w-]+\/?$/.test(e.pathname),r=({pathname:e})=>/^\/search\/pins\//.test(e),o=({pathname:e,search:t})=>{let n=/^\/search\/pins\/(\?.*)$/.exec(e),i=(t||n&&n[1]||"").substr(1).split("&").map(e=>e.split("=")).find(e=>"q"===e[0]);return i?decodeURIComponent(i[1]):""},a=e=>{let t=[...e].reverse().find(({location:e})=>e&&!i(e));return t&&t.location&&r(t.location)?o(t.location):""}},930822:(e,t,n)=>{n.d(t,{DD:()=>u,lg:()=>c,Th:()=>_,YH:()=>s,wH:()=>l,IU:()=>m,L8:()=>h});var i=n(216167),r=n(372085),o=n(64819),a=n(937310);function l({didItDataId:e,isLikedByMe:t,orbacSubjectId:n}){return i=>((0,r.Z)({url:`/v3/did_it/${e}/like/`,method:t?"DELETE":"POST",data:n?{orbac_subject_id:n}:{}}),i({type:"USER_DID_IT_DATA_LIKE_TOGGLED",payload:{id:e,liked_by_me:!t}}))}function s({didItDataId:e,isMarkedHelpfulByMe:t,orbacSubjectId:n}){return i=>((0,r.Z)({url:`/v3/helpful/2/${e}/`,method:t?"DELETE":"POST",data:n?{orbac_subject_id:n}:{}}),i({type:"USER_DID_IT_DATA_HELPFUL_TOGGLED",payload:{id:e,marked_helpful_by_me:!t}}))}function d(e){return{type:"USER_DID_IT_DATA_DELETE",payload:{id:e}}}function h(e,t){return{type:"USER_DID_IT_DATA_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}function u({aggregatedPinDataId:e,details:t,fromUnifiedComment:n,image_signatures:r,pin_id:l,username:s,updateParentDidItCount:d}){let u={aggregatedPinDataId:e,details:t,image_signatures:r,pin_id:l};return t=>i.Z.create("DidItActivityResource",u).callCreate().then(i=>{let r=i.resource_response.data;t({type:"PIN_DID_IT",payload:{id:l,value:!0}}),t({type:"USER_DID_IT_DATA_CREATE",payload:{user_did_it_data:r}}),t((0,o.vX)({feedId:e,feedType:n?a.Z.UNIFIED_COMMENTS:a.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),t((0,o.vX)({feedId:s,feedType:a.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),d&&t(h(e,1))},()=>{})}function c({aggregatedPinDataId:e,feedType:t,id:n,isOwnedByMe:r,pinId:l,username:s,updateParentDidItCount:u}){return c=>{i.Z.create("DidItActivityResource",{user_did_it_data_id:n,pinId:l}).callDelete().then(()=>{r&&c({type:"PIN_DID_IT",payload:{id:l,value:!1}}),c(d(n)),c((0,o.EX)({feedId:e??"",feedType:t||a.Z.TRIED_IT_FEED,itemIds:[n],itemType:"userdiditdata"})),c((0,o.EX)({feedId:s,feedType:a.Z.TRIED_IT_FEED,itemIds:[n],itemType:"userdiditdata"})),c((0,o.EX)({feedId:s,feedType:a.Z.UNIFIED_COMMENTS,itemIds:e?[e]:[],itemType:"userdiditdata"})),u&&c(h(n,-1))},()=>{})}}function m({id:e,details:t,image_signatures:n,pinId:r}){let o={details:t,image_signatures:n,user_did_it_data_id:e,pin_id:r};return e=>{i.Z.create("DidItActivityResource",o).callUpdate().then(t=>{e({type:"USER_DID_IT_DATA_UPDATE",payload:{user_did_it_data:t.resource_response.data}})},()=>{})}}function _(e,t,n,i,l){return s=>{(0,r.Z)({url:`/v3/did_it/${n}/flag/`,method:"PUT",data:{reason:i,detailed_reasons:t,explanation:void 0}}).then(()=>{s(d(n)),e&&s((0,o.EX)({feedId:e,feedType:a.Z.TRIED_IT_FEED,itemIds:[n],itemType:"userdiditdata"})),s((0,o.EX)({feedId:l,feedType:a.Z.TRIED_IT_FEED,itemIds:[n],itemType:"userdiditdata"}))},()=>{})}}},232518:(e,t,n)=>{n.d(t,{R:()=>i});function i(e,t){return{type:"PIN_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}},718561:(e,t,n)=>{n.d(t,{ZP:()=>S});var i=n(667294),r=n(240684),o=n(883119),a=n(214877),l=n(920434),s=n(541841),d=n(59545),h=n(340523),u=n(149722),c=n(537513),m=n(369708),_=n(181056),p=n(784992),g=n(118923),y=n(832853),v=n(785893);function T(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let E=(0,r.ZP)({resolved:{},chunkName:()=>"app-www-video-VideoWrapper",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(93041),n.e(84452),n.e(95813)]).then(n.bind(n,131348)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return n(this.resolve(e))},resolve:()=>131348}),f=(0,y.Z)(()=>Promise.all([n.e(93041),n.e(84452),n.e(95813)]).then(n.bind(n,131348)),void 0,"app-www-video-VideoWrapper"),I=e=>(0,g.b)()?(0,v.jsx)(f,{...e}):(0,v.jsx)(E,{...e}),D=[0,.25,.5,.75,.95,.97],w=[0,.5,.8,.99,1],A={rootMargin:"-64px 0px 0px 0px",threshold:[..._.iM]},b=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,STALLING:3});function C(){return new Date().getTime()}function R(e){return!!e.volume&&e.volume>0}class P extends i.Component{constructor(e){super(e),T(this,"videoWrapperRef",(0,i.createRef)()),T(this,"handleWindowResize",()=>{if(!this.fullscreen){let e=this.getDimensions(),{height:t,width:n}=this.currentInterval;e.height!==t||e.width!==n?this.startNewInterval(e):(this.currentInterval.windowHeight=e.windowHeight,this.currentInterval.windowWidth=e.windowWidth)}}),T(this,"handlePlayheadDown",({event:e})=>{let{onPlayheadDown:t}=this.props;this.setState({seeking:!0}),t&&t({event:e})}),T(this,"handlePlayheadUp",({event:e})=>{let{onPlayheadUp:t}=this.props;this.setState({seeking:!1}),t&&t({event:e})}),T(this,"handleLoop",()=>{this.videoTime=0}),T(this,"handlePlaying",e=>{this.logVideoStart(),this.props.onPlaying&&this.props.onPlaying(e)}),T(this,"handleTimeChange",e=>{let{seeking:t,ready:n}=this.state;if(!this.currentInterval.videoDuration)return;let i=1e3*e.time,r=function(e,t,n,i){if(e>t||n<=0)return null;for(let r of i){let i=r*n;if(e<=i&&t>i)return r}return null}(this.videoTime,i,this.currentInterval.videoDuration,D);if("number"==typeof r&&this.props.playing&&!t&&n){let e=C();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:Math.floor(4*r),quartilePercentValue:r})}this.videoTime=i,this.props.onTimeChange&&this.props.onTimeChange(e)}),T(this,"handleDurationChange",e=>{this.currentInterval.videoDuration=1e3*e.duration,this.props.onDurationChange&&this.props.onDurationChange(e)}),T(this,"handleReady",e=>{let{ready:t}=this.state;t||this.setState({ready:!0}),this.props.onReady&&this.props.onReady(e)}),T(this,"handleEnded",e=>{this.logFourthQuartileEvent(),this.props.loop&&(this.startNewInterval(),this.currentInterval.videoStartTime=0),this.props.onEnded&&this.props.onEnded(e)}),T(this,"handleVisibilityChange",e=>{if(0===e.length)return;let t=function(e,t){for(let n=0;n<t.length;n+=1){let i=t[n],r=t[n+1];if(null==r||i<=e&&e<r)return i}return null}(Number.parseFloat(e.slice(-1)[0].intersectionRatio.toFixed(2)),w);"number"==typeof t&&(this.visible=t>=.5),null==t||t===this.currentInterval.viewability||this.fullscreen||(0===t?this.startNewInterval({viewability:t,playbackState:b.PAUSED}):this.startNewInterval({viewability:t}))}),T(this,"handleFullscreenChange",({event:e,fullscreen:t})=>{if(t){let{height:e,width:t}=window.screen;this.startNewInterval({height:e,width:t,windowHeight:e,windowWidth:t})}else t||this.startNewInterval(this.getDimensions());this.fullscreen=t,this.props.onFullscreenChange&&this.props.onFullscreenChange({event:e,fullscreen:t})}),T(this,"handleClose",()=>{this.startNewInterval()}),T(this,"handleContextMenu",e=>{e.preventDefault()}),this.state={ready:!1,seeking:!1,started:!1};let t=C();this.handleWindowResize=(0,l.Z)(this.handleWindowResize,1e3),this.currentInterval={videoDuration:0,startTime:t,endTime:t,videoStartTime:0,videoEndTime:0,isAudible:R(e),playbackState:this.getPlaybackState(e,this.state),quartile:-1,quartilePercentValue:0,height:null,width:null,windowHeight:null,windowWidth:null,viewability:null},this.videoTime=0,this.fullscreen=!1,this.visible=null}componentDidMount(){this.currentInterval={...this.currentInterval,...this.getDimensions()},window.addEventListener("resize",this.handleWindowResize),window.addEventListener("beforeunload",this.handleClose)}componentDidUpdate(e,t){let n={};R(e)&&!R(this.props)?n.isAudible=!1:!R(e)&&R(this.props)&&(n.isAudible=!0);let i=this.getPlaybackState(this.props,this.state);this.getPlaybackState(e,t)!==i&&(n.playbackState=i),Object.keys(n).length>0&&this.startNewInterval(n)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("beforeunload",this.handleClose),this.startNewInterval()}getPlaybackState(e,t){return t.ready?e.playing&&!t.seeking?b.PLAYING:b.PAUSED:b.LOADING}getDimensions(){let e,t;if(this.videoWrapperRef.current){let n=this.videoWrapperRef.current;n.clientHeight&&n.clientWidth&&(e=n.clientHeight,t=n.clientWidth)}return{height:e,width:t,windowHeight:window.innerHeight,windowWidth:window.innerWidth}}logVideoEvent(e,t){let{closeupStoryPinViewability:n,contextLogData:i,logContextEvent:r,playing:o,surface:a}=this.props,{seeking:l}=this.state,{height:s,width:d,windowHeight:h,windowWidth:u,viewability:c,...m}=t;if(null!=s&&null!=d&&null!=h&&null!=u&&null!=c){let t={...m,gridAutoplay:6904===e&&o&&!l&&("AuthHomefeed"===a||"SearchItem"===a||"RelatedPinGrid"===a||"PdpRelatedPinGrid"===a),height:s,width:d,windowHeight:h,windowWidth:u,viewability:n||c};r({event_type:e,...(0,p.Z)({...i,view:this.fullscreen?108:i.view,eventData:{videoEvent:t}})})}}logFourthQuartileEvent(){let e=C();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:4,quartilePercentValue:1})}logVideoStart(){if(this.state.started)return;let{contextLogData:e,setVideoPlayed:t,shouldLogVideoStart:n}=this.props;if(n){let e=C();this.logVideoEvent(3621,{...this.currentInterval,startTime:e,endTime:e,videoEndTime:this.videoTime})}t(e.objectId),this.setState({started:!0})}startNewInterval(e){let t=C();this.logVideoEvent(6904,{...this.currentInterval,endTime:t,videoEndTime:this.videoTime}),this.currentInterval={...this.currentInterval,...e,startTime:t,videoStartTime:this.videoTime,endTime:-1,videoEndTime:-1}}render(){let{rootMargin:e,surface:t,intersectionObserverExpEnabled:n,aspectRatio:i,backgroundColor:r,captions:a,contextLogData:l,controls:h,fallback:u,hlsConfig:m,isAutoPlay:_,loop:p,objectFit:g,onLoadedChange:y,onControlsPause:T,onControlsPlay:E,onSeek:f,onVolumeChange:D,playbackRate:w,playing:b,playsInline:C,poster:R,preload:P,src:S,videoStartTime:O,volume:x,video:N}=this.props,{seeking:M}=this.state;return void 0!==e&&(A.rootMargin=t?(0,c.eL)(t):e),n?(0,v.jsx)(d.Z,{onVisibilityChange:this.handleVisibilityChange,options:A,children:e=>(0,v.jsx)(o.xu,{ref:t=>{e.current=t,this.videoWrapperRef.current=t},onContextMenu:this.handleContextMenu,children:(0,v.jsx)(I,{aspectRatio:i,backgroundColor:r,captions:a,contextLogData:l,controls:h,fallback:u,hlsConfig:m,isAutoPlay:_,loop:p,objectFit:g,onControlsPause:T,onControlsPlay:E,onDurationChange:this.handleDurationChange,onEnded:this.handleEnded,onFullscreenChange:this.handleFullscreenChange,onLoadedChange:y,onLoop:this.handleLoop,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:this.handlePlayheadDown,onPlayheadUp:this.handlePlayheadUp,onPlaying:this.handlePlaying,onReady:this.handleReady,onSeek:f,onTimeChange:this.handleTimeChange,onVolumeChange:D,playbackRate:w,playing:!M&&b,playsInline:C,poster:R,preload:P,src:S,video:N,videoStartTime:O,visible:this.visible,volume:x})})}):(0,v.jsx)(s.Z,{onVisibilityChange:this.handleVisibilityChange,options:A,children:(0,v.jsx)(o.xu,{ref:this.videoWrapperRef,onContextMenu:this.handleContextMenu,children:(0,v.jsx)(I,{aspectRatio:i,backgroundColor:r,captions:a,contextLogData:l,controls:h,fallback:u,hlsConfig:m,isAutoPlay:_,loop:p,objectFit:g,onControlsPause:T,onControlsPlay:E,onDurationChange:this.handleDurationChange,onEnded:this.handleEnded,onFullscreenChange:this.handleFullscreenChange,onLoadedChange:y,onLoop:this.handleLoop,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:this.handlePlayheadDown,onPlayheadUp:this.handlePlayheadUp,onPlaying:this.handlePlaying,onReady:this.handleReady,onSeek:f,onTimeChange:this.handleTimeChange,onVolumeChange:D,playbackRate:w,playing:!M&&b,playsInline:C,poster:R,preload:P,src:S,video:N,videoStartTime:O,visible:this.visible,volume:x})})})}}function S(e){let{logContextEvent:t}=(0,a.v)(),{checkExperiment:n}=(0,h.F)(),{setVideoPlayed:i}=(0,m.r)(),{isAuth:r}=(0,u.Z)(),o=n("web_video_start_log").anyEnabled,l=n(r?"web_intersection_observer_migration_auth":"web_intersection_observer_migration_unauth").anyEnabled;return(0,v.jsx)(P,{...e,intersectionObserverExpEnabled:l,logContextEvent:t,setVideoPlayed:i,shouldLogVideoStart:o})}T(P,"defaultProps",o.nk.defaultProps)},181056:(e,t,n)=>{n.d(t,{Ul:()=>o,VS:()=>i,hy:()=>a,iM:()=>r,j4:()=>l});let i=2,r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1],o={backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0))",pointerEvents:"none",bottom:0},a=128,l=e=>e&&document.querySelector(`video[poster="${e}"]`)||null},784992:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){let{eventData:{videoEvent:{gridAutoplay:t,videoDuration:n,startTime:i,endTime:r,videoStartTime:o,videoEndTime:a,isAudible:l,height:s,width:d,playbackState:h,quartile:u,quartilePercentValue:c,windowHeight:m,windowWidth:_,viewability:p}},component:g,objectId:y,view:v,viewParameter:T,...E}=e;return{component:g,object_id_str:y,view_type:v,view_parameter:T,aux_data:{...E},event_data:{videoEventData:{gridAutoplay:t,videoDuration:n,time:i,endTime:r,videoTime:o,endVideoTime:a,isAudible:l,height:s,width:d,playbackState:h,quartile:u,quartilePercentValue:c,windowHeight:m,windowWidth:_,viewability:p}}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16420.id_ID-2e9759fe06d7a935.mjs.map