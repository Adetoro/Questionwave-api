(this.webpackJsonpquestionwave=this.webpackJsonpquestionwave||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(16),o=s.n(c),a=s(9),l=(s(30),s(5)),r=s(3),d=s.p+"static/media/logo.580bd986.svg",u=(s(31),s(0));var j=Object(r.f)((function(e){var t=e.history;return Object(u.jsxs)("div",{className:" sm:w-12/12 mx-auto  top-0 bg-white",children:[Object(u.jsx)("div",{className:" md:w-10/12 mx-auto px-10\r pt-5  ",children:Object(u.jsx)("div",{className:"cursor-pointer",onClick:function(){return t.push("/")},children:Object(u.jsx)("img",{alt:"logo",src:d,className:"image-rendering"})})}),Object(u.jsx)("div",{className:"custom-shape-divider-top-1617219337",children:Object(u.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(u.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",class:"shape-fill"})})})]})})),m=s.p+"static/media/twitter.78867d3a.svg";s(41);var b=function(){return Object(u.jsx)("div",{className:" footer mx-auto  bg-white ",children:Object(u.jsx)("div",{className:"md:w-10/12 mx-auto px-10\r py-8 bg-white",children:Object(u.jsxs)("div",{className:"flex text-sm",children:[Object(u.jsx)("p",{className:"pr-8",children:"Feature Request"}),Object(u.jsx)("p",{className:"pr-8",children:"Support"}),Object(u.jsx)("p",{className:"pr-8",children:"Legal"}),Object(u.jsx)("img",{alt:"twitter",src:m,className:"image-rendering"})]})})})},x=s.p+"static/media/things_mockup.4ff26a01.png",h=s.p+"static/media/error.1a12868c.svg",f=(s(42),Object(r.f)((function(e){var t=Object(r.e)(),s=e.setLinkId,i=e.setTitle,c=e.LinkId;return Object(n.useEffect)((function(){fetch("/home",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e&&(s(e),i(""),console.log("from home data "+e))})).catch((function(e){return console.log("err")}))}),[c]),Object(u.jsxs)("div",{className:"sm:w-12/12 mx-auto homeBackground",children:[Object(u.jsx)("div",{className:" md:w-10/12  mx-auto px-10 ",children:Object(u.jsxs)("div",{className:"flex w-full pt-20 p-2 home_container md:space-x-2 max-w-full ",children:[Object(u.jsxs)("div",{className:"lg:w-6/12    space-y-11  text-left leading-10",children:[Object(u.jsxs)("div",{className:"lg:w-9/12 ",children:[Object(u.jsx)("p",{className:"text-4xl font-black ",children:"The best way to take questions from your audience"}),Object(u.jsx)("p",{className:"mt-9 text-lg font-medium",children:"Make your Q&A sessions faster. Share a question link with your audience."})]}),Object(u.jsxs)("div",{className:"space-y-5 lg:w-9/12 ",children:[Object(u.jsx)("p",{className:"text-3xl font-extrabold mt-32",children:"Get your question link"}),Object(u.jsx)("p",{className:"text-sm font-normal",children:"No registration required, it\u2019s 100% free and super-fast."})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:" lg:w-9/12  text-base font-bold ",children:"What\u2019s the title of your event?"}),Object(u.jsx)("div",{className:"mt-5 lg:w-9/12 ",children:Object(u.jsxs)("div",{id:"showError",className:"space-y-4 ",children:[Object(u.jsx)("input",{type:"text",name:"title",id:"event-title",required:!0,placeholder:"E.g. Instagram live with Charles Dairo",onChange:function(t){e.onChange(t.target.value)},className:"rounded-md text-black-500 pl-3\r focus:outline-none focus:ring focus:-mid_blue shadow w-full h-12"}),Object(u.jsx)("button",{type:"submit",className:"blue_button text-lg font-bold \r focus:outline-none focus:ring focus:-mid_blue ",onClick:function(s){if(e.Title.length<8){var n=document.getElementById("errorMessage");n.style.visibility="visible",setTimeout((function(){n.style.visibility="hidden"}),1e3)}else{new Promise((function(t,s){t(e.onSubmit())})).then((function(s){fetch("/home",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.Title,linkId:s})}).then((function(e){return e.json()})).then((function(n){n&&(e.setLinkId(s),t.push("/link/".concat(s)))}))}))}},children:"Get your question link"}),Object(u.jsxs)("div",{id:"errorMessage",className:"error flex items-center text-base",children:[Object(u.jsx)("div",{className:"w-5 h-5 mr-5",children:Object(u.jsx)("img",{alt:"error",src:h})}),Object(u.jsx)("div",{children:"Title must be minimum of 8 characters"})]})]})})]})]}),Object(u.jsx)("div",{id:"hide_this",className:"lg:w-5/12 p-2 rotate_this justify-self-end ",children:Object(u.jsx)("div",{className:"hp_image_container ",children:Object(u.jsx)("img",{alt:"demo",src:x})})})]})}),Object(u.jsx)(b,{})]})}))),v=(s(43),s(20)),p=s.p+"static/media/success_icon.7c96047c.svg",O=s.p+"static/media/link_icon.c3998073.svg",g=Object(r.f)((function(e){var t=e.setTitle,s=e.setValue,i=e.setLinkId,c=Object(r.e)();Object(n.useEffect)((function(){console.log("props linkid "+e.LinkId),0!==e.LinkId&&fetch("/link/".concat(e.LinkId)).then((function(e){return e.json()})).then((function(n){var c=n.title;t(c),s(c),i(e.LinkId)}))}),[]);function o(e){navigator.clipboard.writeText(a);var t=document.getElementById("showSuccessMessage");t.style.visibility="visible",setTimeout((function(){t.style.visibility="hidden"}),1e3)}var a="https://questionwave.com/q/".concat(e.LinkId);return 0===e.LinkId?Object(u.jsxs)("div",{id:"container",className:"md:w-6/12 mx-auto mt-10 px-10 py-28",children:[Object(u.jsx)("div",{className:"text-7xl font-semibold text-center",children:"Oops!"}),Object(u.jsx)("div",{className:"pt-3 text-base font-normal text-center",children:"Can't access this page."}),Object(u.jsx)("div",{className:"sm:w-6/12  mx-auto",children:Object(u.jsx)("button",{className:"  mt-6 blue_button text-lg font-bold \r focus:outline-none focus:ring focus:-mid_blue",onClick:function(){return c.push("/")},children:"Go Home"})})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"container",className:"md:w-6/12 mx-auto px-10 py-28 ",children:[Object(u.jsxs)("div",{className:"mt-10 rounded-xl bg-light_green border border-green p-5 flex items-center",children:[Object(u.jsx)("div",{className:"w-5 h-5 mr-5",children:Object(u.jsx)("img",{alt:"success",src:p})}),Object(u.jsx)("div",{children:"Great! Your your question link has been created."})]}),Object(u.jsx)("div",{id:"editTitle",className:"mt-16 flex items-center",children:Object(u.jsx)(v.a,{editOnViewClick:!0,type:"text",className:"text-3xl font-extrabold",value:e.value,onSave:function(t){e.setValue(t),e.onSave(t)}})}),Object(u.jsxs)("div",{className:"mt-10 displayLink flex items-center cursor-pointer",onClick:o,children:[Object(u.jsx)("div",{className:"w-5 h-5 mr-5 ",children:Object(u.jsx)("img",{alt:"link",src:O})}),Object(u.jsx)("div",{children:a})]}),Object(u.jsxs)("div",{className:" mt-6 sm:flex justify-between  sm:space-x-4",children:[Object(u.jsx)("div",{className:"sm:w-1/2 pt-4",children:Object(u.jsx)("button",{className:"blue_button text-lg font-bold focus:outline-none focus:ring focus:border-mid_blue",onClick:o,children:"Copy link"})}),Object(u.jsx)("div",{className:"sm:w-1/2 pt-4",children:Object(u.jsx)("button",{className:"white_button text-lg font-bold focus:outline-none focus:ring focus:border-mid_blue",onClick:function(t){fetch("/link/:id",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.Title,id:e.LinkId})}).then((function(e){return e.json()})).then((function(t){t&&window.open("/q/".concat(e.LinkId),"_blank").focus()}))},children:"Preview link"})})]}),Object(u.jsxs)("div",{id:"showSuccessMessage",className:"successMessageStyle flex items-center text-base",children:[Object(u.jsx)("div",{className:"w-5 h-5 mr-5",children:Object(u.jsx)("img",{alt:"success",src:p})}),Object(u.jsx)("div",{children:"Link successfully copied!"})]})]}),Object(u.jsx)(b,{})]})})),w=s(12),N=s(21),y=s.p+"static/media/error.1a12868c.svg",k=(s(44),s.p+"static/media/send_question_icon.2d971d84.svg");var C=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),i=s[0],c=s[1],o=(e.Count,e.setCount);function a(e){c(e.target.value)}return Object(u.jsx)(N.ScrollTo,{children:function(t){var s=t.scroll;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"askNew",className:" flex items-center ",children:[Object(u.jsx)("input",{id:"mainInput",type:"text",value:i,className:"rounded-md w-full h-12 text-black-500 outline-none ring border-mid_blue shadow p-5 overflow-auto",placeholder:"Ask a question...",onChange:a}),Object(u.jsx)("button",{onClick:function(){!function(t){if(i.length<8){var s=document.getElementById("errorMessage");s.style.visibility="visible",setTimeout((function(){s.style.visibility="hidden"}),1e3)}else fetch("/q/:id",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({linkId:e.LinkId,question:i})}).then((function(e){return e.json()})).then((function(e){e&&(o((function(e){return e+1})),c(""))}))}(),setTimeout((function(){return s({y:5e28,smooth:!0})}),1e3)},type:"submit",className:"ask_button  w-7 h-7 ",children:Object(u.jsx)("img",{alt:"send question",src:k})})]}),Object(u.jsxs)("div",{id:"errorMessage",className:"error flex items-center text-base",children:[Object(u.jsx)("div",{className:"w-5 h-5 mr-5",children:Object(u.jsx)("img",{alt:"error",src:y})}),Object(u.jsx)("div",{children:"Question must be minimum of 8 characters"})]})]})}})},I=(s(45),[]),L=function(e){var t=e.questionId,s=e.questionContent,i=e.questionUpvotes,c=e.LinkId,o=Object(n.useState)(i),a=Object(l.a)(o,2),r=a[0],d=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"upvoteSuccessNotif",className:"sm:w-3/12 mx-auto bg-light_green border border-green p-2 rounded-md text-center flex justify-center items-center text-sm ",children:[Object(u.jsx)("svg",{className:"mr-1",width:"16",height:"15",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M16.9479 0C13.788 0 10.699 0.938383 8.07166 2.69649C5.44428 4.45459 3.39649 6.95345 2.18724 9.87706C0.977992 12.8007 0.661597 16.0177 1.27807 19.1214C1.89454 22.2251 3.41618 25.0761 5.65059 27.3137C7.88499 29.5513 10.7318 31.0752 13.831 31.6926C16.9302 32.3099 20.1426 31.9931 23.062 30.7821C25.9814 29.5711 28.4766 27.5203 30.2322 24.8891C31.9877 22.2579 32.9248 19.1645 32.9248 16C32.9248 11.7565 31.2415 7.68687 28.2453 4.68629C25.249 1.68571 21.1852 0 16.9479 0ZM27.3828 10.63L14.2618 23.76L6.51304 16C6.24821 15.7348 6.09943 15.3751 6.09943 15C6.09943 14.6249 6.24821 14.2652 6.51304 14C6.77788 13.7348 7.13707 13.5858 7.5116 13.5858C7.88613 13.5858 8.24532 13.7348 8.51015 14L14.2818 19.78L25.4057 8.65C25.5368 8.51868 25.6925 8.41451 25.8638 8.34344C26.0351 8.27237 26.2188 8.23579 26.4042 8.23579C26.5897 8.23579 26.7733 8.27237 26.9446 8.34344C27.116 8.41451 27.2716 8.51868 27.4028 8.65C27.5339 8.78132 27.6379 8.93722 27.7089 9.1088C27.7799 9.28038 27.8164 9.46428 27.8164 9.65C27.8164 9.83572 27.7799 10.0196 27.7089 10.1912C27.6379 10.3628 27.5339 10.5187 27.4028 10.65L27.3828 10.63Z",fill:"#13B43D"})}),"Upvoted"]}),Object(u.jsxs)("div",{id:"upvoteDuplicateNotif",className:"sm:w-4/12 mx-auto bg-red  p-2 rounded-md text-center flex justify-center items-center  text-sm ",children:[Object(u.jsx)("svg",{className:"mr-1",width:"15",height:"15",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M13.2707 0C5.95333 0 0 5.98133 0 13.3333C0 20.6853 5.98133 26.6667 13.3333 26.6667C20.6853 26.6667 26.6667 20.6853 26.6667 13.3333C26.6667 5.98133 20.6573 0 13.2707 0ZM14.6667 20H12V17.3333H14.6667V20ZM14.6667 14.6667H12V6.66667H14.6667V14.6667Z",fill:"#CF062E"})}),"You can only upvote once"]}),Object(u.jsx)("div",{className:"my-16",children:Object(u.jsxs)("div",{className:" px-10 py-5  bg-white rounded-2xl h-auto flex items-center space-x-4 select-none overflow-auto ",children:[Object(u.jsxs)("div",{className:"flex-col  -mt-1 items-center justify-start mr-2 w-5  ",children:[Object(u.jsx)("button",{id:"upvoteButton",className:"upvoteButton text-blue p-1 -mt-1",onClick:function(e){if("undefined"!==typeof Storage){var s,n=sessionStorage.getItem("upvoteArray");if(s=null!=n?n.split(",").map(Number):[1],(I=s).includes(t)){var o=document.getElementById("upvoteDuplicateNotif");o.style.visibility="visible",o.animate([{transform:"translateY(50px)"}],{duration:500}),setTimeout((function(){o.style.visibility="hidden"}),1300)}else{var a=i+1;d(a),I.push(t),sessionStorage.setItem("upvoteArray",I);var l=document.getElementById("upvoteSuccessNotif");l.style.visibility="visible",l.animate([{transform:"translateY(50px)"}],{duration:500}),setTimeout((function(){l.style.visibility="hidden"}),1e3),fetch("/q/:id",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({question_id:t,question_upvotes:a,id:c})}).then((function(e){return e.json()})).then((function(e){}))}}},children:Object(u.jsx)("svg",{width:"13",height:"8",viewBox:"0 0 13 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"upvote_icon  ",children:Object(u.jsx)("path",{d:"M12.9056 7.33958L6.84161 0.154254C6.66803 -0.0514181 6.33381 -0.0514181 6.15839 0.154254L0.094437 7.33958C-0.130838 7.60752 0.0722788 8 0.436042 8H12.564C12.9277 8 13.1308 7.60752 12.9056 7.33958Z"})})}),Object(u.jsx)("div",{className:" text-center text-lg text-gray -mt-1 ",children:r}),Object(u.jsx)("div",{id:"result"})]}),Object(u.jsx)("span",{className:" text-lg  md:w-10/12 sm:w-11/12 w-9/12",children:s})]})})]})},q=function(e){var t=e.questionId,s=e.questionContent,n=e.questionUpvotes,i=e.createdAt,c=e.setUpvotes,o=(e.Upvotes,e.LinkId),a=i.map((function(e,i){return Object(u.jsx)(L,{questionUpvotes:n[i],questionContent:s[i],questionId:t[i],setUpvotes:c,LinkId:o},i)}));return Object(u.jsx)("div",{children:a})},_=(s(46),s.p+"static/media/message_icon.86d12c71.svg"),S=function(e){var t=Object(n.useState)(0),s=Object(l.a)(t,2),i=s[0],c=s[1],o=Object(n.useState)([]),a=Object(l.a)(o,2),r=a[0],d=a[1],j=Object(n.useState)([]),m=Object(l.a)(j,2),b=m[0],x=m[1],h=Object(n.useState)([]),f=Object(l.a)(h,2),v=f[0],p=f[1],O=Object(n.useState)([]),g=Object(l.a)(O,2),N=g[0],y=g[1],k=e.setTitle,I=e.setLinkId;return Object(n.useEffect)((function(){var e=window.location.href.match("([a-z0-9_-]*[]?)$")[1];p([]),d([]),x([]),y([]),fetch("/q/".concat(e)).then((function(e){return e.json()})).then((function(t){if(console.log(t),t){if(0===t.length)return{hasError:!0};for(var s=t[0].title,n=t.length,i=t.length,o=function(e){null!==t[e].question?(p((function(s){return[].concat(Object(w.a)(s),[t[e].question_id])})),d((function(s){return[].concat(Object(w.a)(s),[t[e].upvotes])})),x((function(s){return[].concat(Object(w.a)(s),[t[e].question])})),y((function(s){return[].concat(Object(w.a)(s),[t[e].created])}))):console.log(" ")},a=0;a<i;a++)o(a);k(s),I(e),c(n-1)}else console.log("")}))}),[i]),i<1?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"md:w-10/12 mx-auto static   ",children:Object(u.jsxs)("div",{className:"md:w-9/12 mx-auto px-10 py-20 ",children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"text-3xl font-extrabold",children:e.Title}),Object(u.jsxs)("div",{className:"mt-5 text-xl font-bold text-gray",children:[i," questions so far"]})]}),Object(u.jsxs)("div",{className:"mt-32 px-10 py-5 bg-white rounded-2xl h-auto flex space-x-4 select-none ",children:[Object(u.jsx)("span",{className:" self-stretch mt-1 w-10",children:Object(u.jsx)("img",{alt:"message",src:_})}),Object(u.jsx)("span",{className:" text-lg",children:"Questions will show up here once people start asking. Go ahead, share your question link with people!"})]})]})}),Object(u.jsx)("div",{className:"w-full bottom-0 pb-6 fixed  bg-light_blue ",children:Object(u.jsx)("div",{className:"md:w-10/12 mx-auto py-2   ",children:Object(u.jsx)("div",{className:" md:w-9/12 px-10 mx-auto mb-10  pt-2 h-14 ",children:Object(u.jsx)(C,{LinkId:e.LinkId,Count:i,setCount:c})})})})]}):Object(u.jsxs)("div",{className:"w-full ",children:[Object(u.jsx)("div",{className:"md:w-10/12 mx-auto static  ",children:Object(u.jsxs)("div",{className:"md:w-9/12 mx-auto px-10 py-20",children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"text-3xl font-extrabold",children:e.Title}),Object(u.jsxs)("div",{className:"mt-5 text-xl font-bold text-gray",children:[i," questions so far"]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(q,{LinkId:e.LinkId,createdAt:N,questionId:v,questionContent:b,questionUpvotes:r,setUpvotes:d})})]})}),Object(u.jsx)("div",{className:"w-full bottom-0 pb-6 fixed  bg-light_blue ",children:Object(u.jsx)("div",{className:"md:w-10/12 mx-auto py-2   ",children:Object(u.jsx)("div",{className:" md:w-9/12 px-10 mx-auto mb-10  pt-2 h-14 ",children:Object(u.jsx)(C,{LinkId:e.LinkId,Count:i,setCount:c})})})})]})},T=s(22),E=s(23),B=s(25),M=s(24),U=function(){var e=Object(r.e)();return Object(u.jsxs)("div",{id:"container",className:"md:w-6/12 mx-auto mt-10 px-10 py-28",children:[Object(u.jsx)("div",{className:"text-7xl font-semibold text-center",children:"Oops!"}),Object(u.jsx)("div",{className:"pt-3 text-base font-normal text-center",children:"You have wondered too far."}),Object(u.jsx)("div",{className:"sm:w-6/12  mx-auto",children:Object(u.jsx)("button",{className:"  mt-6 blue_button text-lg font-bold \r focus:outline-none focus:ring focus:-mid_blue",onClick:function(){return e.push("/")},children:"Go Home"})})]})},V=function(e){Object(B.a)(s,e);var t=Object(M.a)(s);function s(){var e;Object(T.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1,error:{message:"",stack:""},info:{componentStack:""}},e.componentDidCatch=function(t,s){e.setState({error:t,info:s})},e}return Object(E.a)(s,[{key:"render",value:function(){var e=this.state,t=e.hasError,s=e.error,n=e.info;console.log(s,n);var i=this.props.children;return t?Object(u.jsx)(U,{}):i}}]),s}(i.a.Component);V.getDerivedStateFromError=function(e){return{hasError:!0}};var A=V;s(47);var H=function(){var e=Object(n.useState)(" "),t=Object(l.a)(e,2),s=t[0],i=t[1],c=Object(n.useState)(0),o=Object(l.a)(c,2),d=o[0],m=o[1],b=Object(n.useState)(" "),x=Object(l.a)(b,2),h=x[0],v=x[1],p=d;return Object(u.jsx)("div",{className:"full_screen",children:Object(u.jsx)(a.a,{children:Object(u.jsxs)(A,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(r.b,{children:[Object(u.jsx)(f,{exact:!0,path:"/",Title:s,LinkId:d,setTitle:i,setLinkId:m,onSubmit:function(e){return++p,m(p),console.log("from app "+p,d),p},onChange:function(e){i(e)}}),Object(u.jsx)(g,{path:"/link/:linkId",Title:s,LinkId:d,value:h,setTitle:i,setLinkId:m,setValue:v,onUpdate:function(e){m(d)},onSave:function(e){i(e)}}),Object(u.jsx)(S,{path:"/q/:linkId",Title:s,setTitle:i,setLinkId:m,LinkId:d})]})]})})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),D()}},[[48,1,2]]]);
//# sourceMappingURL=main.df8365cf.chunk.js.map