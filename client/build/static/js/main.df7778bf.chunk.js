(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(63),r=n.n(c),s=(n(75),n(9)),i=n(10),l=n(13),m=n(11),u=n(14),p=n(163),h=n(165),g=(n(77),n(64)),f=n.n(g),j=n(65),d=n.n(j);var b=window.jQuery,w=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={project:!1,messages:""},n.terminal=o.a.createRef(),n.componentDidMount=function(){b.connection.twilioHub.client.newMessage=function(t){var e=t;n.setState({messages:e})},b.connection.hub.url="http://portfolioapi-prod.us-west-1.elasticbeanstalk.com/signalr",b.connection.hub.start().done(function(){})},n.commands={projects:{description:"Loads Projects Page",usage:"type projects",fn:function(){n.props.onProject(),n.props.toggleTerminal()}},contact:{description:"Contact Mike",usage:"type contact",fn:function(){n.props.onContact(),n.props.toggleTerminal()}},sendmessage:{description:"Send Mike a message",usage:"type sendmessage <message>",fn:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var o={msg:e.join(" ")};console.log(n.state.msg),function(t){console.log(t),d.a.post("http://portfolioapi-prod.us-west-1.elasticbeanstalk.com/api/test/send",t)}(o)}}},n.pushMessageToTerm=function(){n.terminal.current.pushToStdout("Mike: "+n.state.messages),console.log(n.state.messages)},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(){this.pushMessageToTerm()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"term"},o.a.createElement(f.a,{commands:this.commands,welcomeMessage:'Welcome to meekalBox type "help" for available commands',promptLabel:"me@meekalbox:~$",autoFocus:!0,contentClassName:"terminalBox",ref:this.terminal})))}}]),e}(o.a.Component),O=Object(h.a)(w),y=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"white",textAlign:"center"}},"Here Lies Projects"))}}]),e}(a.Component),v=n(68),E=n.n(v),T=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"white",textAlign:"center"}},"Here Lies Contact"))}}]),e}(a.Component),k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={showTermBtn:!1,termState:!1,project:!1,contact:!1},n.toggleTerminal=function(){n.state.project?n.setState({project:!1}):n.state.contact&&n.setState({contact:!1}),n.setState({termState:!n.state.termState,showTermBtn:!n.state.showTermBtn})},n.onProject=function(){n.setState({project:!0})},n.onContact=function(){n.setState({contact:!0})},n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.showTermBtn?o.a.createElement("img",{alt:"terminal logo",src:E.a,width:"110px",className:"termLogo",onClick:this.toggleTerminal}):null,this.state.termState?null:o.a.createElement(O,{termState:this.state.termState,toggleTerminal:this.toggleTerminal,showTermBtn:this.state.showTermBtn,onProject:this.onProject,onContact:this.onContact}),this.state.project?o.a.createElement(y,null):null,this.state.contact?o.a.createElement(T,null):null,o.a.createElement(p.a,{path:"/contact",component:T}),o.a.createElement(p.a,{path:"/projects",component:y}))}}]),e}(a.Component),S=Object(h.a)(k),C=n(164);r.a.render(o.a.createElement(C.a,null,o.a.createElement(S,null)),document.getElementById("root"))},68:function(t,e,n){t.exports=n.p+"static/media/termlogo.099a3281.png"},69:function(t,e,n){t.exports=n(162)},75:function(t,e,n){},77:function(t,e,n){}},[[69,2,1]]]);
//# sourceMappingURL=main.df7778bf.chunk.js.map