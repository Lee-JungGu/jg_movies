(this.webpackJsonpjg_movies=this.webpackJsonpjg_movies||[]).push([[0],{56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(27),i=n.n(a),r=n(11),l=n.n(r),o=n(14),j=n(28),d=n(29),h=n(32),m=n(31),u=n(15),b=n.n(u),g=(n(56),n(0));var v=function(e){var t=e.getGenre,n=0,c=0;return Object(g.jsx)("div",{className:"genre_menu",children:Object(g.jsxs)("ul",{className:"drag_menu",draggable:"true",onTouchStart:function(e){n=e.changedTouches[0].clientX},onTouchMove:function(e){n>e.changedTouches[0].clientX?c>-50&&(c=e.changedTouches[0].clientX-(e.changedTouches[0].clientX+3)+c):c<20&&(c=e.changedTouches[0].clientX-(e.changedTouches[0].clientX-3)+c),document.querySelector(".drag_menu").style.left="".concat(c,"px")},children:[Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"all",onClick:t,children:"All"})}),Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"action",onClick:t,children:"Action"})}),Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"thriller",onClick:t,children:"Thriller"})}),Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"romance",onClick:t,children:"Romance"})}),Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"comedy",onClick:t,children:"Comedy"})}),Object(g.jsx)("li",{children:Object(g.jsx)("p",{"data-genre":"animation",onClick:t,children:"Animation"})})]})})};var x=function(e){var t=e.name;return Object(g.jsx)("div",{className:t,children:Object(g.jsx)("span",{className:"loader_text",children:"Loding..."})})};n(58);var O=function(e){var t=e.year,n=e.title,c=e.summary,s=e.poster,a=e.genres,i=e.rating;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:s,alt:n,title:n}),Object(g.jsxs)("div",{className:"movie_data",children:[Object(g.jsxs)("h3",{className:"movie_title",children:[n," ",Object(g.jsx)("span",{className:"title_year",children:t})]}),Object(g.jsx)("h4",{className:"movie_rating",children:i.toString().includes(".")?i:"".concat(i,".0")}),Object(g.jsx)("ul",{className:"genres",children:a.map((function(e,t){return Object(g.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(g.jsx)("p",{className:"movie_summary",children:c.length>160?"".concat(c.slice(0,160),"..."):c})]})]})};n(59);var p=function(){return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsx)("p",{children:"\xa9 JG Movies"})})},f=(n(60),n(61),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[],apiUrl:"https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=all"},e.getMovies=Object(o.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(e.state.apiUrl);case 2:n=t.sent,c=n.data.data.movies,e.setState({isLoading:!1,movies:c});case 5:case"end":return t.stop()}}),t)}))),e.clickGetGenre=function(t){var n=t.target.dataset.genre;e.state.apiUrl!=="https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=".concat(n)&&e.setState({isLoading:!0,apiUrl:"https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=".concat(n)}),window.scroll({top:0,left:0,behavior:"smooth"})},e.getPage=function(){for(var t=document.scrollingElement.scrollTop,n=document.scrollingElement.scrollHeight-document.scrollingElement.clientHeight,c=e.state.movies.length,s=function(s){if(t===n&&c===24*s){var a=document.querySelector(".loader_scroll");a.classList.add("show"),function(){var t=Object(o.a)(l.a.mark((function t(){var n,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("".concat(e.state.apiUrl,"&page=").concat(s+1));case 3:n=t.sent,c=n.data.data.movies,i=e.state.movies.concat(c),e.setState({movies:i});case 7:return t.prev=7,a.classList.remove("show"),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[0,,7,10]])})));return function(){return t.apply(this,arguments)}}()()}},a=1;a<15;a++)s(a)},e.scrollEvent=function(){document.addEventListener("scroll",e.getPage)},e.removeScrollEvent=function(){document.removeEventListener("scroll",e.getPage)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies(),this.scrollEvent()}},{key:"componentDidUpdate",value:function(){!1===this.state.isLoading||this.getMovies()}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(g.jsxs)("section",{className:"container",children:[Object(g.jsx)(x,{name:"loader_scroll"}),t?Object(g.jsx)(x,{name:"loader"}):Object(g.jsxs)("div",{className:"contents",children:[Object(g.jsx)(v,{getGenre:this.clickGetGenre}),Object(g.jsx)("div",{className:"movies",children:n.map((function(e,t){return Object(g.jsx)(O,{id:e.id,year:e.year,genres:e.genres,title:e.title,rating:e.rating,summary:e.summary,poster:e.medium_cover_image},t)}))}),Object(g.jsx)(p,{})]})]})}}]),n}(s.a.Component)),y=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Hello"})})},_=(n(62),n(10)),N=function(e){var t=e.event;return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)("h1",{className:"logo",children:Object(g.jsx)(_.b,{to:"/",children:"JG Movies"})}),Object(g.jsxs)("nav",{className:"gnb",children:[Object(g.jsx)("input",{type:"checkbox",id:"gnb_btn"}),Object(g.jsxs)("label",{htmlFor:"gnb_btn",className:"menu_bar",children:[Object(g.jsx)("span",{}),Object(g.jsx)("span",{}),Object(g.jsx)("span",{})]}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("h2",{"data-genre":"all",onClick:t,children:"Main"})}),Object(g.jsx)("li",{className:"gnb_genres",children:Object(g.jsx)("h2",{children:"Genre"})}),Object(g.jsx)("li",{children:Object(g.jsx)("h2",{children:Object(g.jsx)(_.b,{to:"/Search",children:"Search"})})})]})]})]})},k=n(2),S=function(){return Object(g.jsxs)(_.a,{children:[Object(g.jsx)(N,{}),Object(g.jsx)(k.a,{path:"/",exact:!0,component:f}),Object(g.jsx)(k.a,{path:"/Search",component:y})]})};i.a.render(Object(g.jsx)(S,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.99a2f864.chunk.js.map