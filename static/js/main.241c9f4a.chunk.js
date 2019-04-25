(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(51),a(7)),o=a(8),m=a(10),u=a(9),d=a(11),s=(a(72),a(115)),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,{bg:"warning",style:{width:"18rem"},id:"profileCard"},l.a.createElement(s.a.Img,{variant:"top",src:"profile.jpg"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"St. Thomas Aquinas College"),l.a.createElement(s.a.Text,null,"Year: Junior",l.a.createElement("br",null),"GPA: 3.5")))}}]),t}(n.Component),p=a(104),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"Page_container"},l.a.createElement(E,null),l.a.createElement("div",{id:"aboutme"},l.a.createElement("h1",null,"About me"),l.a.createElement("p",null,"Early in my college studies, I quickly realized, that our world is quickly and inevitably going ",l.a.createElement("br",null),"through technilogiclal advancements. I have made it my soul purpose to leap into this fast pace",l.a.createElement("br",null),"world, armed and dangerous, ready to contribute to those advancements."),l.a.createElement("h1",null,"Quick quotes"),l.a.createElement("q",null,"Our greatest glory is not in never falling, but in rising every time we fall. \u2014 Confucius"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("q",{id:"longQ"},"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won't feel insecure around you. We are all meant to shine as children do. It's not just in some of us; it is in everyone. And as we let our own lights shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.\" ",l.a.createElement("br",null),"\u2014Marianne Williamson")),l.a.createElement("div",null,l.a.createElement("h1",{id:"nameB"},"Lugduni Desrsiers")),l.a.createElement("div",{id:"lang"},l.a.createElement("h2",null,l.a.createElement(p.a,{pill:!0,variant:"warning"},"Java"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"Python"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"GO"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"C++"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"C#"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"Javascript"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"HTML"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"CSS"),l.a.createElement(p.a,{pill:!0,variant:"warning"},"Java"))))}}]),t}(n.Component),b=a(16),v=a(105),g=a(56),y=a(106),f=a(57),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={},e.calculate=e.calculate.bind(Object(b.a)(Object(b.a)(e))),e.calculation=e.calculation.bind(Object(b.a)(Object(b.a)(e))),e.selectChangeEvent=e.selectChangeEvent.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"calculation",value:function(e,t,a){var n=t/100/12,l=e*(n*Math.pow(1+n,a))/(Math.pow(1+n,a)-1);return Math.round(100*l)/100}},{key:"selectChangeEvent",value:function(){if("Years"==document.getElementById("sel").options[document.getElementById("sel").selectedIndex].value)if(document.getElementById("lti").placeholder="Loan term in years",""===document.getElementById("lti").value);else{var e=document.getElementById("lti").value/12;document.getElementById("lti").value=e}else if(document.getElementById("lti").placeholder="Loan term in month",""===document.getElementById("lti").value);else{var t=12*document.getElementById("lti").value;document.getElementById("lti").value=t}}},{key:"calculate",value:function(){if(""===document.getElementById("loanA").value||""===document.getElementById("loanI").value||""===document.getElementById("lti").value)document.getElementById("monthly").innerHTML="Fill everything out!",document.getElementById("interest").innerHTML="Fill everything out!";else{var e=parseFloat(document.getElementById("loanA").value),t=parseFloat(document.getElementById("lti").value),a=parseFloat(document.getElementById("loanI").value);"Years"==document.getElementById("sel").options[document.getElementById("sel").selectedIndex].value&&(t*=12);var n=this.calculation(e,a,t),l=Math.round(100*(n*t-e))/100;document.getElementById("monthly").innerHTML="$"+n,document.getElementById("interest").innerHTML="$"+l}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(s.a,{id:"loanC"},l.a.createElement(s.a.Header,null,"Loan Calculator"),l.a.createElement(s.a.Body,null,l.a.createElement(s.a,{id:"cardO"},l.a.createElement(s.a.Body,null,l.a.createElement("h2",{align:"center"},l.a.createElement("u",null,"Monthly Pay ")),l.a.createElement("h4",{align:"center",id:"monthly"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},l.a.createElement("u",null,"Total intrest")),l.a.createElement("h5",{align:"center",id:"interest"}))),l.a.createElement("div",{id:"loanC1"},l.a.createElement(v.a,{className:"mb-5",type:"number",size:"lg"},l.a.createElement(v.a.Prepend,null,l.a.createElement(v.a.Text,null,"$")),l.a.createElement(g.a,{id:"loanA",placeholder:"Loan amount","aria-label":"Recipient's username","aria-describedby":"basic-addon2",type:"number"})),l.a.createElement(v.a,{className:"mb-5",type:"number",size:"lg"},l.a.createElement(g.a,{placeholder:"Loan term in years","aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"lti",type:"number"}),l.a.createElement(g.a,{as:"select",STYLE:"font-size : 11pt",onChange:this.selectChangeEvent,id:"sel"},l.a.createElement("option",null,"Years"),l.a.createElement("option",null,"Months"))),l.a.createElement(v.a,{className:"mb-5",size:"lg"},l.a.createElement(g.a,{id:"loanI",placeholder:"Intrest rate per year","aria-label":"Intrest rate per year","aria-describedby":"basic-addon2",type:"number"}),l.a.createElement(v.a.Append,null,l.a.createElement(v.a.Text,{id:"basic-addon2"},"%"))),l.a.createElement(y.a,null,l.a.createElement(f.a,{id:"oks",variant:"outline-primary",size:"lg",active:!0,onClick:this.calculate},"Calculate"))))),l.a.createElement("div",null))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"Page_container"},l.a.createElement(O,null))}}]),t}(n.Component),T=a(107),x=a(58),C=a(59),w=a(108),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).populate=e.populate.bind(Object(b.a)(Object(b.a)(e))),e.populateTable=e.populateTable.bind(Object(b.a)(Object(b.a)(e))),e.handleSearch=e.handleSearch.bind(Object(b.a)(Object(b.a)(e))),e.connectDB=e.connectDB.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"populate",value:function(){var e=document.getElementById("selectMake"),t=document.getElementById("selectModel");if(t.innerHTML="","BMW"==e.value)var a=["ALL MODELS|ALL MODELS","320i|320i","328i|328i","330i|330i","335i|335i","M3|M3","M4|M4","X6|X6"];else if("NISSAN"==e.value)a=["ALL MODELS|ALL MODELS","350Z|350Z","370Z|370Z","GTR|GTR","MAXIMA|MAXIMA","SENTRA|SENTRA","VERSA|VERSA","VERSA|VERSA"];else if("BMjW"==e.value)a=["|","328xi|328xi","|","|","|"];else if("BMjW"==e.value)a=["|","328xi|328xi","|","|","|"];else if("ALL MAKES"==e.value)a=["ALL MODELS|ALL MODELS"];for(var n in a){var l=a[n].split("|"),r=document.createElement("option");r.value=l[0],r.innerHTML=l[1],t.options.add(r)}}},{key:"populateTable",value:function(e,t,a,n,l,r){var c=document.createElement("Tr"),i=document.createElement("Td"),o=document.createTextNode(e);i.appendChild(o);var m=document.createElement("Td"),u=document.createTextNode(t);m.appendChild(u);var d=document.createElement("Td"),s=document.createTextNode(a);d.appendChild(s);var E=document.createElement("Td"),p=document.createTextNode(n);E.appendChild(p);var h=document.createElement("Td"),b=document.createTextNode(l);h.appendChild(b);var v=document.createElement("Td"),g=document.createTextNode(r);v.appendChild(g),c.appendChild(i),c.appendChild(m),c.appendChild(d),c.appendChild(E),c.appendChild(h),c.appendChild(v),document.getElementById("tableBody").appendChild(c)}},{key:"handleSearch",value:function(){this.populateTable("Bmw","328i","2018","102599","0","1")}},{key:"connectDB",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"Page_container"},l.a.createElement(T.a,{id:"selectRow"},l.a.createElement(x.a,{as:C.a,controlId:"formGridState"},l.a.createElement(g.a,{as:"select",id:"selectMake",onChange:this.populate},l.a.createElement("option",{value:"ALL MAKES"},"ALL MAKES"),l.a.createElement("option",{value:"BMW"},"BMW"),l.a.createElement("option",{value:"NISSAN"},"NISSAN"),l.a.createElement("option",{value:"TOYOTA"},"TOYOTA"),l.a.createElement("option",{value:"CADILLAC"},"CADILLAC"))),l.a.createElement(x.a,{as:C.a,controlId:"formGridState"},l.a.createElement(g.a,{as:"select",id:"selectModel"},l.a.createElement("option",null,"ALL MODELS"))),l.a.createElement(x.a,{as:C.a,controlId:"formGridState"},l.a.createElement(g.a,{as:"select",id:"selectYear"},l.a.createElement("option",{value:"ALL YEARS"},"ALL YEARS"),l.a.createElement("option",{value:"2010"},"2010"),l.a.createElement("option",{value:"2011"},"2011"),l.a.createElement("option",{value:"2012"},"2012"),l.a.createElement("option",{value:"2013"},"2013"),l.a.createElement("option",{value:"2014"},"2014"),l.a.createElement("option",{value:"2015"},"2015"),l.a.createElement("option",{value:"2016"},"2016"),l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018"),l.a.createElement("option",{value:"2019"},"2019"))),l.a.createElement(x.a,{as:C.a,controlId:"formGridState"},l.a.createElement(f.a,{variant:"primary",onClick:this.handleSearch},"Search"))),l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,id:"carTable",align:"center"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Make"),l.a.createElement("th",null,"Model"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Miles"),l.a.createElement("th",null,"Acc. reported"),l.a.createElement("th",null,"Owners"))),l.a.createElement("tbody",{id:"tableBody"})))}}]),t}(n.Component),L=a(110),k=a(117),B=a(118),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"pdiv"},l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement(s.a,{style:{width:"18rem"},bg:"secondary",text:"white"},l.a.createElement(s.a.Header,null,"Database Api"),l.a.createElement(s.a.Img,{variant:"top",src:"golang.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Go"),l.a.createElement(s.a.Text,null,"Backend API to for dataBase. This Project is not yet posted on github.")))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/ddunig2/Translator"},l.a.createElement(s.a,{style:{width:"18rem"},bg:"primary",text:"white"},l.a.createElement(s.a.Header,null,"Translator"),l.a.createElement(s.a.Img,{variant:"top",src:"translator.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Java"),l.a.createElement(s.a.Text,null,"This translator uses google translate API to translate between English and Spanish."))))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/ddunig2/Loan-calculator"},l.a.createElement(s.a,{style:{width:"18rem"},bg:"info",text:"white"},l.a.createElement(s.a.Header,null,"Loan Calculator"),l.a.createElement(s.a.Img,{variant:"top",src:"loancalc2.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Java"),l.a.createElement(s.a.Text,null,"A loan calculator similar to the one on this website.")))),l.a.createElement("br",null))),l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/ddunig2/MonopolyProject"},l.a.createElement(s.a,{style:{width:"18rem"},bg:"warning",text:"white"},l.a.createElement(s.a.Header,null,"Monopoly Game"),l.a.createElement(s.a.Img,{variant:"top",src:"mono.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Java"),l.a.createElement(s.a.Text,null,"A monopoly game that applies the rules of a standard game rules."))))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/ddunig2/Tic-Tac-Toe-game"},l.a.createElement(s.a,{style:{width:"18rem"},bg:"dark",text:"white"},l.a.createElement(s.a.Header,null,"Tic Toc Toe"),l.a.createElement(s.a.Img,{variant:"top",src:"ttt.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Java"),l.a.createElement(s.a.Text,null,"Tic Toc Toe is a very simple game and so is this app/project"))))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement(s.a,{style:{width:"18rem"},bg:"danger"},l.a.createElement(s.a.Header,null,"Flight Reservation System"),l.a.createElement(s.a.Img,{variant:"top",src:"androidS2.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Java"),l.a.createElement(s.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"pdiv"},l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement(s.a,{style:{width:"18rem"},bg:"secondary",text:"white"},l.a.createElement(s.a.Header,null,"Intern"),l.a.createElement(s.a.Img,{variant:"top",src:"DOE.jpg",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"SULI"),l.a.createElement(s.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement(s.a,{style:{width:"18rem"},bg:"primary",text:"white"},l.a.createElement(s.a.Header,null,"Computer Science Tutor"),l.a.createElement(s.a.Img,{variant:"top",src:"VTL.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Varsity Tutors"),l.a.createElement(s.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),l.a.createElement(C.a,{xs:6,md:4},l.a.createElement(s.a,{style:{width:"18rem"},bg:"danger",text:"white"},l.a.createElement(s.a.Header,null,"Intern"),l.a.createElement(s.a.Img,{variant:"top",src:"STAC.png",id:"expCp"}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"STEM Camp"),l.a.createElement(s.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),l.a.createElement("br",null))))}}]),t}(n.Component),S=a(109),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{align:"center"},l.a.createElement(S.a,{src:"contactme.png",id:"CM"})),l.a.createElement("div",{id:"con"},l.a.createElement("div",{align:"center"},l.a.createElement(S.a,{src:"phone.png",id:"CMP"}),l.a.createElement("h1",{id:"phoneN"},"845-596-8656")),l.a.createElement("div",{align:"center"},l.a.createElement(S.a,{src:"email.png",id:"CME"}),l.a.createElement("h1",{id:"email"},"duni.dd@gmail.com"))))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("embed",{src:"Resume.pdf#toolbar",type:"application/pdf",width:"100%",height:"800px"}))}}]),t}(n.Component),D=function(){return l.a.createElement(L.a,null,l.a.createElement(k.a,null,l.a.createElement(B.a,{exact:!0,path:"/",component:h}),l.a.createElement(B.a,{exact:!0,path:"/my_cars",component:I}),l.a.createElement(B.a,{exact:!0,path:"/loanCalculator",component:j}),l.a.createElement(B.a,{exact:!0,path:"/projects",component:A}),l.a.createElement(B.a,{exact:!0,path:"/experience",component:M}),l.a.createElement(B.a,{exact:!0,path:"/contact_me",component:N}),l.a.createElement(B.a,{exact:!0,path:"/full_resume",component:H})))},R=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://www.linkedin.com/in/lugduni-desrosiers-712329177/"},l.a.createElement(S.a,{src:"linkedin.png",roundedCircle:!0,id:"linkedinB"})))),l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/ddunig2"},l.a.createElement(S.a,{src:"gitHub2.png",roundedCircle:!0,id:"gitHubB"})))),l.a.createElement(T.a,null,l.a.createElement(C.a,{xs:6,md:4},l.a.createElement("a",{href:"https://varsitytutors.com"},l.a.createElement(S.a,{src:"varsityTutors.png",roundedCircle:!0,id:"varsityTutorsB"})))))}}]),t}(n.Component),Y=(a(76),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getY",value:function(){return(new Date).getFullYear}},{key:"render",value:function(){var e=(new Date).getFullYear();return l.a.createElement("div",{id:"footer"},l.a.createElement("h5",null,"Created by: Lu"),l.a.createElement("p",null,l.a.createElement("p",null,"LuGotCashInc | Copyright \xa9 ",e)))}}]),t}(n.Component)),P=a(112),q=a(116),G=a(114),J=a(113),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(P.a,{bg:"dark",variant:"dark",expand:"lg",id:"navbar"},l.a.createElement(P.a.Brand,{href:"/"},"Navbar"),l.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(q.a,{className:"mr-auto"},l.a.createElement(q.a.Link,{href:"/"},"Home"),l.a.createElement(q.a.Link,{href:"/#/my_cars"},"My Cars"),l.a.createElement(q.a.Link,{href:"/#loanCalculator"},"Loan Calculator"),l.a.createElement(G.a,{title:"Resume",id:"basic-nav-dropdown"},l.a.createElement(G.a.Item,{href:"/#experience"},"Experience"),l.a.createElement(G.a.Item,{href:"/#projects"},"Projects"),l.a.createElement(G.a.Item,{href:"/#full_resume"},"Full resume"),l.a.createElement(G.a.Divider,null),l.a.createElement(G.a.Item,{href:"/#contact_me"},"Contact me"))),l.a.createElement(J.a,{inline:!0},l.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(f.a,{variant:"outline-success"},"Search"))))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"root1"},l.a.createElement(F,null),l.a.createElement(R,null),l.a.createElement(D,null),l.a.createElement(Y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(111);l.a.createElement("div",null,l.a.createElement("h1",null,"this is h1"));c.a.render(l.a.createElement(_.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){},67:function(e,t,a){e.exports=a(102)},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[67,1,2]]]);
//# sourceMappingURL=main.241c9f4a.chunk.js.map