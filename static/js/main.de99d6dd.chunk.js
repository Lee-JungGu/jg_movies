(this.webpackJsonpjg_movies=this.webpackJsonpjg_movies||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(32),r=n.n(a),i=n(4),o=n.n(i),l=n(10),u=n(15),j=n(16),d=n(18),m=n(17),h=n(11),v=n.n(h),b=(n(57),n(0));var p=function(e){var t=e.getGenre,n=0,c=0;return Object(b.jsx)("div",{className:"genre_menu",children:Object(b.jsxs)("ul",{className:"drag_menu",draggable:"true",onTouchStart:function(e){n=e.changedTouches[0].clientX},onTouchMove:function(e){n>e.changedTouches[0].clientX?c>-50&&(c=e.changedTouches[0].clientX-(e.changedTouches[0].clientX+10)+c):c<20&&(c=e.changedTouches[0].clientX-(e.changedTouches[0].clientX-10)+c),document.querySelector(".drag_menu").style.left="".concat(c,"px")},children:[Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"all",onClick:t,children:"All"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"action",onClick:t,children:"Action"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"thriller",onClick:t,children:"Thriller"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"romance",onClick:t,children:"Romance"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"comedy",onClick:t,children:"Comedy"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{"data-genre":"animation",onClick:t,children:"Animation"})})]})})};var f=function(e){var t=e.name;return Object(b.jsx)("div",{className:t,children:Object(b.jsx)("span",{className:"loader_text",children:"Loding..."})})},g=n(9);n(59);var x=function(e){var t=e.year,n=e.title,c=e.summary,s=e.poster,a=e.genres,r=e.rating;return Object(b.jsx)(g.b,{to:{pathname:"/Info",state:{year:t,title:n,summary:c,poster:s,genres:a,rating:r}},className:"movie",onClick:function(){window.scroll(0,0)},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:s,alt:n,title:n}),Object(b.jsxs)("div",{className:"movie_data",children:[Object(b.jsxs)("h3",{className:"movie_title",children:[n," ",Object(b.jsx)("span",{className:"title_year",children:t})]}),Object(b.jsx)("h4",{className:"movie_rating",children:r.toString().includes(".")?r:"".concat(r,".0")}),Object(b.jsx)("ul",{className:"genres",children:a.map((function(e,t){return Object(b.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(b.jsx)("p",{className:"movie_summary",children:c.length>100?"".concat(c.slice(0,100),"..."):c})]})]})})};n(65);var O=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{children:"\xa9 JG Movies"})})},y=(n(66),n(67),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[],apiUrl:"https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=all",pageNumber:1},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(e.state.apiUrl);case 2:n=t.sent,c=n.data.data.movies,e.setState({isLoading:!1,movies:c});case 5:case"end":return t.stop()}}),t)}))),e.clickGetGenre=function(t){var n=t.target.dataset.genre;e.state.apiUrl!=="https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=".concat(n)&&e.setState({isLoading:!0,apiUrl:"https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&genre=".concat(n)}),window.scroll({top:0,left:0,behavior:"smooth"}),e.setState({pageNumber:1})},e.getPage=Object(l.a)(o.a.mark((function t(){var n,c,s,a,r,i,l,u,j,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.scrollingElement.scrollTop,c=document.scrollingElement.scrollHeight-document.scrollingElement.clientHeight-200,s=e.state.movies.length,a=e.state.pageNumber,r=document.querySelector(".loader_scroll"),i=e.state.isLoading,l=r.className.includes("show"),!(n>=c&&s===24*a)||l||i){t.next=20;break}return r.classList.add("show"),t.prev=9,t.next=12,v.a.get("".concat(e.state.apiUrl,"&page=").concat(a+1));case 12:u=t.sent,j=u.data.data.movies,d=e.state.movies.concat(j),16,a<16&&e.setState({movies:d,pageNumber:a+1});case 17:return t.prev=17,r.classList.remove("show"),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[9,,17,20]])}))),e.scrollEvent=function(){document.addEventListener("scroll",e.getPage)},e.removeScrollEvent=function(){document.removeEventListener("scroll",e.getPage)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies(),this.scrollEvent()}},{key:"componentDidUpdate",value:function(){!1===this.state.isLoading||this.getMovies()}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)(f,{name:"loader_scroll"}),t?Object(b.jsx)(f,{name:"loader"}):Object(b.jsxs)("div",{className:"contents",children:[Object(b.jsx)(p,{getGenre:this.clickGetGenre}),Object(b.jsx)("div",{className:"movies",children:n.map((function(e,t){return Object(b.jsx)(x,{id:e.id,year:e.year,genres:e.genres,title:e.title,rating:e.rating,summary:e.summary,poster:e.medium_cover_image},t)}))}),Object(b.jsx)(O,{})]})]})}}]),n}(s.a.Component)),_=n(14);n(68);var N=function(e){var t=e.searchUseKey,n=e.searchUseClick;return Object(b.jsxs)("div",{className:"search_box",action:"#",children:[Object(b.jsx)("input",{type:"search",placeholder:"Search movies...",autoComplete:"off",onKeyUp:t,required:!0}),Object(b.jsx)("span",{className:"search_boder_bottom"}),Object(b.jsx)("button",{onClick:n,children:Object(b.jsx)("i",{className:"fas fa-search"})})]})};n(69);var w=function(){var e=Object(c.useState)(!0),t=Object(_.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(_.a)(a,2),i=r[0],u=r[1],j=Object(c.useState)("https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24"),d=Object(_.a)(j,2),m=d[0],h=d[1],p=Object(c.useState)(1),g=Object(_.a)(p,2),y=g[0],w=g[1],k=Object(c.useRef)(!0),S=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector(".loader_scroll"),c=t.target.value,s="https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&query_term=".concat(c),"Enter"!==t.key||n.className.includes("show")){e.next=13;break}return e.prev=4,n.classList.add("show"),e.next=8,v.a.get(s);case 8:h(s);case 9:return e.prev=9,w(1),n.classList.remove("show"),e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[4,,9,13]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".search_box input").value,n="https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=24&query_term=".concat(t),e.prev=2,e.next=5,v.a.get(n);case 5:h(n);case 6:return e.prev=6,w(1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[2,,6,9]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,s,a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.scrollingElement.scrollTop,n=document.scrollingElement.scrollHeight-document.scrollingElement.clientHeight-200,c=i.length,s=document.querySelector(".loader_scroll"),!(t>=n&&c===24*y)||s.className.includes("show")){e.next=17;break}return s.classList.add("show"),e.prev=6,e.next=9,v.a.get("".concat(m,"&page=").concat(y+1));case 9:a=e.sent,r=a.data.data.movies,l=i.concat(r),16,y<16&&(w(y+1),u(l));case 14:return e.prev=14,s.classList.remove("show"),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[6,,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get(m);case 3:t=e.sent,void 0===(n=t.data.data.movies)?(console.log("\uadf8\ub7f0\uac70 \uc5c6\uc5b4\uc694"),u([])):u(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("\uc5d0\ub7ec\uac00 \ub0ac\uc5b4\uc694");case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();k.current?k.current=!1:e()}),[m]),Object(c.useEffect)((function(){return document.addEventListener("scroll",L),function(){document.removeEventListener("scroll",L)}})),Object(b.jsxs)("section",{className:"container_sc",children:[Object(b.jsx)(N,{searchUseKey:S,searchUseClick:E}),Object(b.jsx)(f,{name:"loader_scroll"}),n?Object(b.jsx)("div",{}):Object(b.jsxs)("div",{className:"contents",children:[Object(b.jsx)("div",{className:"movies",children:i.map((function(e,t){return Object(b.jsx)(x,{id:e.id,year:e.year,genres:e.genres,title:e.title,rating:e.rating,summary:e.summary,poster:e.medium_cover_image},t)}))}),Object(b.jsx)(O,{})]})]})},k=(n(70),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?Object(b.jsxs)("section",{className:"movie_info",children:[Object(b.jsx)("div",{className:"info_backgrond",children:Object(b.jsx)("img",{src:e.poster,alt:e.title,title:e.title})}),Object(b.jsxs)("div",{className:"info_info",children:[Object(b.jsx)("div",{className:"info_title_img",children:Object(b.jsx)("img",{src:e.poster,alt:e.title,title:e.title})}),Object(b.jsxs)("div",{className:"info_data",children:[Object(b.jsxs)("h3",{className:"info_title",children:[e.title," ",Object(b.jsx)("span",{className:"title_year",children:e.year})]}),Object(b.jsx)("h4",{className:"info_rating",children:e.rating.toString().includes(".")?e.rating:"".concat(e.rating,".0")}),Object(b.jsx)("ul",{className:"info_genres",children:e.genres.map((function(e,t){return Object(b.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(b.jsx)("p",{className:"info_summary",children:e.summary})]})]})]}):null}}]),n}(s.a.Component));n(71);var S=function(){var e=function(){window.scroll({top:0,left:0,behavior:"smooth"})};return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{className:"logo",onClick:e,children:Object(b.jsx)(g.b,{to:"/",children:"JG Movies"})}),Object(b.jsx)("nav",{className:"gnb",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:e,children:Object(b.jsx)(g.b,{to:"/",children:Object(b.jsx)("i",{className:"fas fa-home"})})}),Object(b.jsx)("li",{onClick:e,children:Object(b.jsx)(g.b,{to:"/Search",children:Object(b.jsx)("i",{className:"fas fa-search"})})})]})})]})};n(72);var E=function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=function(){var e=document.scrollingElement.scrollTop,t=document.querySelector(".top_button");e>100?t.classList.remove("hide"):t.classList.add("hide")};return Object(c.useEffect)((function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),Object(b.jsx)("aside",{children:Object(b.jsx)("div",{className:"top_button hide",onClick:function(){e?window.scroll(0,0):window.scroll({top:0,left:0,behavior:"smooth"})},children:Object(b.jsx)("i",{className:"fas fa-arrow-circle-up"})})})},L=n(2),C=function(){return Object(b.jsxs)(g.a,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(E,{}),Object(b.jsx)(L.a,{path:"/",exact:!0,component:y}),Object(b.jsx)(L.a,{path:"/Search",component:w}),Object(b.jsx)(L.a,{path:"/Info",component:k})]})};r.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.de99d6dd.chunk.js.map