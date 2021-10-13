(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=t(1),c=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"javascript: document.body.scrollIntoView(false);"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",l.a.createElement("br",null),e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"a ",e.role,".",l.a.createElement("br",null),e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#resume"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),e.Achievements.map(function(e,a){return l.a.createElement("p",{key:a},e)})))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.Beginning," - ",e.End)),l.a.createElement("div",{style:{marginBottom:20}},e.Achievements.map(function(e,a){return l.a.createElement("p",{key:a},e)}))))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars row"},e.skills.map(function(e,a){return l.a.createElement("div",{key:a,className:"skills"},l.a.createElement("img",{src:"".concat(e.img),alt:" "}),l.a.createElement("p",null,e.skillname))})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("h1",null,"Check Out Some of My Works"),l.a.createElement("div",{className:"portfolio-content"},l.a.createElement("div",{className:"col"},l.a.createElement("h5",null,"Periodic Tables (Live)"),l.a.createElement("a",{href:"https://khamilton-periodic-tables.herokuapp.com/dashboard",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:"images/PT.png",alt:"Periodic Tables"})),l.a.createElement("p",null,"React app utilizing Express and PostgreSQL allowing management of reservations by restaurant management.")),l.a.createElement("div",{className:"col"},l.a.createElement("h5",null,"Flashcard-o-Matic"),l.a.createElement("img",{src:"images/FC.png",alt:"Flashcards"}),l.a.createElement("p",null,"React app utilizing a local database to allow creating of React fundamental study decks (external database integration and deployment in process)."))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("h3",{style:{color:"white",paddingTop:10}},"Contact")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className,style:{color:"white"}})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f={name:"Kevin Hamilton",role:"full-stack Node/React developer",roleDescription:" This is my portfolio.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/khamilton-dev/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/KHamilton-dev",className:"fa fa-github"},{name:"gmail",url:"mailto:khamilton.dev@gmail.com",className:"fa fa-envelope"}],aboutme:"resumeData.aboutme",education:[{UniversityName:"Thinkful",specialization:"Software Engineering",MonthOfPassing:"Aug",YearOfPassing:"2021",Achievements:["Designed mobile-first full-stack applications from conception to deployment","Advised and consulted fellow students to achieve mutual goals","Created maintainable, concise, and efficient code with excellent readability"]}],work:[{CompanyName:"Garlic Knot",specialization:"Driver",Beginning:"Jan 2014",End:"Current",Total:"5 years",Achievements:["Calculated the most efficient and effective path to delivering customer orders","Routinely outperformed expected deliveries per hour set forth by management","Demonstrated professionalism by addressing any customer's issues in a poilte and courteous manner"]},{CompanyName:"Carrabba's",specialization:"Coordinator",Beginning:"Mar 2019",End:"Current",Total:"2 years",Achievements:["Ensured customer satisfaction through prompt and respectful service","Showcased organizational abilities by choreographing dozens of orders simulataneously","Educated new employees on computer systems POS"]}],skillsDescription:"Your skills here",skills:[{skillname:"React",img:"images/react.png"},{skillname:"Node",img:"images/node.png"},{skillname:"HTML5",img:"images/html.png"},{skillname:"Javascript",img:"images/javascript.png"},{skillname:"CSS3",img:"images/css.png"},{skillname:"Express",img:"images/express.png"},{skillname:"PostgreSQL",img:"images/postgresql.png"},{skillname:"Git/GitHub",img:"images/git.png"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:f}),l.a.createElement(d,{resumeData:f}),l.a.createElement(h,{resumeData:f}),l.a.createElement(E,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(13)}},[[8,2,1]]]);
//# sourceMappingURL=main.0afb2511.chunk.js.map