(this.webpackJsonpnchendev=this.webpackJsonpnchendev||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(16),t(1)),s=t(2),i=t(4),m=t(3),u=t(7),p=t(10),d=t.n(p),h=(t(19),t(6)),E=t.n(h),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.description,t=this.props.data.myclass,n=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{className:"background-tint",id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:E.a,target:"_blank",rel:"noopener noreferrer"},"Resume")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",e,"."),r.a.createElement("h3",null,a,"."),r.a.createElement("h3",{style:{color:"white"}},t,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},n))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2020 Nick Chen"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.city,l=this.props.data.address.state,c=this.props.data.address.zip,o=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,n," ",l,", ",c),r.a.createElement("br",null),r.a.createElement("span",null,o))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:E.a,target:"_blank",rel:"noopener noreferrer",className:"button"},"View Resume")))))))}}]),t}(n.Component),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,title:e.title},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.category))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("div",null,r.a.createElement("section",{id:"projectDetails"},this.props.data&&this.props.data.projects.map((function(e){return r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,e.title)),r.a.createElement("ul",{style:{listStyleType:"circle"}},e.technologies.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("div",{key:e.header},r.a.createElement("h3",null,e.header),r.a.createElement("p",{className:"info"},""!=e.repository&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e.repository},"repository"),r.a.createElement("span",null,"\u2022")," "),""!=e.link&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e.link},"link"),r.a.createElement("span",null,"\u2022")," "),""!=e.moreinfo&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e.moreinfo},"more info"),r.a.createElement("span",null,"\u2022")," "),r.a.createElement("em",{className:"date"},e.date)),r.a.createElement("p",null,e.description))))))}))))}}]),t}(n.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-164573319-1"),u.a.pageview(window.location.pathname),n}return Object(s.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(N,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.portfolio}),r.a.createElement(v,{data:this.state.resumeData.main}))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()},6:function(e,a,t){e.exports=t.p+"static/media/resume.61c3d669.pdf"}},[[11,1,2]]]);
//# sourceMappingURL=main.366855b2.chunk.js.map