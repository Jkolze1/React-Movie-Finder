(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=a(10),s=a(11),u=a(12),o=a(15),m=a(13),h=a(16);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var E=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)};var f=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("center",null,r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children)))};a(23);var p=function(e){return r.a.createElement("center",null,r.a.createElement("form",null,r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Movie",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search"))))};var b=function(e){return r.a.createElement("center",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}}),r.a.createElement("h3",null,"Director(s): ",e.director),r.a.createElement("h3",null,"Genre: ",e.genre),r.a.createElement("h3",null,"Released: ",e.released)))},g=a(14),w=a.n(g),N={search:function(e){return w.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")}};a(43);var y=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Movie-Finder"))};a(44);var S=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Search for movies!"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.recipepuppy.com/about/api/"},"Powered by React"))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:{},search:""},a.searchMovies=function(e){N.search(e).then(function(e){return a.setState({result:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(i.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchMovies(a.state.search)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchMovies("Mean Girls")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(S,null),r.a.createElement(d,null,r.a.createElement("center",null,r.a.createElement(E,{size:"sm-10"},r.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})," ",r.a.createElement("br",null)),r.a.createElement(v,null,r.a.createElement(E,{size:"sm-12"},r.a.createElement(f,{heading:this.state.result.Title||"Search for a Movie to Begin"},this.state.result.Title?r.a.createElement(b,{title:this.state.result.Title,src:this.state.result.Poster,director:this.state.result.Director,genre:this.state.result.Genre,released:this.state.result.Released}):r.a.createElement("h3",null,"No Results to Display")))))))}}]),t}(n.Component);var j=function(){return r.a.createElement(k,null)};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.62d207dd.chunk.js.map