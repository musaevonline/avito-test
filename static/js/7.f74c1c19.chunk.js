(this["webpackJsonpavito-test"]=this["webpackJsonpavito-test"]||[]).push([[7],{258:function(t,e,a){"use strict";a.r(e);var s=a(101),n=a(102),c=a(107),i=a(106),r=a(10),o=a(0),l=a.n(o),d=a(255),h=a(259),u=a(77),j=(a(229),a(121),a(44),a(265)),b=a(262),m=a(260),p=a(261),f=a(103),x=a.n(f),O=a(254),v=a(263),k=a(264),g=(a(235),a(237),a(9)),w=a.n(g),N=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={data:null,collapsed:!0},n}return Object(n.a)(a,[{key:"fetchComment",value:function(){var t=this;this.setState({loading:!0,collapsed:!0}),x.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(this.props.commentId,".json")).then((function(e){var a=e.data;t.setState({data:a})}))}},{key:"componentDidMount",value:function(){this.fetchComment()}},{key:"render",value:function(){var t=this;return this.state.data?Object(r.jsx)(O.a,{className:w()({"cursor-pointer":this.state.data.kids&&this.state.collapsed,"cursor-auto":!this.state.data.kids}),onClick:function(){return t.setState({collapsed:!1})},author:"".concat(this.state.data.by," ").concat(new Date(1e3*this.state.data.time).toLocaleDateString("ru")),content:this.state.data.text,avatar:this.state.data.kids?this.state.collapsed?Object(r.jsx)(v.a,{}):Object(r.jsx)(k.a,{}):null,children:!this.state.collapsed&&Object(r.jsx)(y,{kids:this.state.data.kids})}):Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{className:"my-3"})})}}]),a}(l.a.Component),y=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return this.props.kids.map((function(t){return Object(r.jsx)(N,{commentId:t},t)}))}}]),a}(l.a.Component);y.defaultProps={kids:[]};var C=y,S=null,D=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={data:null,loading:!0,newsId:n.props.location.pathname.slice(1)},n}return Object(n.a)(a,[{key:"fetchNews",value:function(){var t=this;this.setState({loading:!0}),x.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(this.state.newsId,".json")).then((function(e){var a=e.data;t.setState({data:a,loading:!1})}))}},{key:"componentDidMount",value:function(){this.fetchNews(),S||(S=setInterval(this.fetchNews.bind(this),6e4))}},{key:"render",value:function(){var t=this;return this.state.data?Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{className:"w-full h-14 bg-blue-500 flex items-center",children:[Object(r.jsx)(j.a,{className:"transform transition-transform  hover:scale-105 text-white ml-5 p-2 cursor-pointer rounded-full hover:bg-blue-400 text-2xl leading-none ",onClick:function(){return t.props.history.replace("/")}}),Object(r.jsx)("span",{className:"ml-auto mr-14 ".concat(this.state.loading?"animate-spin":""),children:Object(r.jsx)(b.a,{className:"transform transition-all \n                                            hover:scale-105 text-white p-2 cursor-pointer\n                                            rounded-full text-2xl leading-none\n                                            ".concat(this.state.loading?"bg-transparent":"hover:bg-blue-400","\n                                         "),onClick:function(){return!t.state.loading&&t.fetchNews()}})})]}),Object(r.jsxs)("div",{className:"sm:w-3/4 w-11/12 mx-auto",children:[Object(r.jsx)(d.a,{className:"my-10",actions:[Object(r.jsxs)(h.b,{children:[Object(r.jsx)(m.a,{className:"flex"}),this.state.data.score]}),Object(r.jsxs)(h.b,{children:[Object(r.jsx)(p.a,{className:"flex"}),this.state.data.descendants]})],children:Object(r.jsx)(d.a.Meta,{title:Object(r.jsx)("a",{href:this.state.data.url,children:this.state.data.title}),description:Object(r.jsxs)("div",{className:"-mt-2",children:[new Date(1e3*this.state.data.time).toLocaleDateString("ru")," ",this.state.data.by,Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:this.state.data.url,children:this.state.data.url})})]})})}),!this.state.loading&&Object(r.jsx)(C,{kids:this.state.data.kids})]})]}):Object(r.jsx)(u.a,{className:"block mx-auto my-20"})}}]),a}(l.a.Component);e.default=D}}]);
//# sourceMappingURL=7.f74c1c19.chunk.js.map