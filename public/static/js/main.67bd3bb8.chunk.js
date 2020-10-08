(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),o=(a(5),a(10)),l=a(1),s=a(7),u=a.n(s),p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:u.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",className:"header__logo"}))},m=function(e){return r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar"},r.a.createElement("img",{src:e.userAvatar,alt:"\u0412\u0430\u0448\u0435 \u0444\u043e\u0442\u043e",className:"profile__avatar-img",onClick:e.avatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name",title:e.userName},e.userName),r.a.createElement("button",{className:"profile__edit",type:"button",onClick:e.profile}),r.a.createElement("p",{className:"profile__job",title:e.userDescription},e.userDescription)),r.a.createElement("button",{className:"profile__button",type:"button",onClick:e.addPlace}))},d=function(e){return r.a.createElement("div",{className:"template__place"},r.a.createElement("figure",{className:"card"},r.a.createElement("img",{src:e.src,alt:e.alt,className:"card__pic",onClick:function(){e.onCardClick(e)}}),r.a.createElement("button",{className:"card__trash ".concat(e.owner===e.myId&&"active"),onClick:function(){e.onCardDelete(e)}}),r.a.createElement("figcaption",{className:"card__text"},r.a.createElement("h4",{className:"card__name"},e.title),r.a.createElement("div",{className:"card__like-block"},r.a.createElement("button",{type:"button",onClick:function(){e.onCardLike(e)},className:"card__like ".concat(void 0!==e.cardLiked&&"card__like card__like_active")}),r.a.createElement("p",{className:"card__like-number"},e.like)))))},_=function(e){return r.a.createElement("section",{className:"popup ".concat(e.card&&"active"),id:"bigimg"},r.a.createElement("figure",{className:"popup__block-big"},r.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),r.a.createElement("img",{src:e.card&&e.card.src,alt:e.card&&e.card.title,className:"popup__pic"}),r.a.createElement("figcaption",{className:"popup__text"},r.a.createElement("p",{className:"popup__place"},e.card&&e.card.title))))},f=r.a.createContext(),h=r.a.createContext(),v=function(e){var t=r.a.useContext(f),a=r.a.useContext(h).map((function(e){return{src:e.link,id:e._id,owner:e.owner._id,alt:e.name,likes:e.likes,title:e.name,like:e.likes.length,cardLiked:e.likes.find((function(e){return e._id===t._id}))}}));return r.a.createElement("main",null,r.a.createElement(m,{avatar:e.onEditAvatar,profile:e.onEditProfile,addPlace:e.onAddPlace,userName:t.name,userDescription:t.about,userAvatar:t.avatar}),r.a.createElement("section",{className:"places"},a.map((function(a){return r.a.createElement(d,Object.assign({key:a.id,myId:t._id},a,e))}))),r.a.createElement(_,{card:e.card,onClose:e.onClose}))},E=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"active"),id:e.id},r.a.createElement("form",{className:"popup__block",noValidate:!0,onSubmit:e.onSubmit},r.a.createElement("button",{className:"popup__close",type:"button",onClick:e.isClose}),r.a.createElement("h4",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{className:"popup__save",type:"submit"},e.buttonText)))},b=function(e){var t=r.a.useRef(null);return r.a.createElement(E,{title:e.title,id:e.id,buttonText:e.buttonText,isOpen:e.isOpen,isClose:e.isClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{ref:t,type:"url",className:"popup__input popup__input_place",id:"avatar-input",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"avatar-input-error"})))},N=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],i=r.a.useState(""),o=Object(l.a)(i,2),s=o[0],u=o[1],p=r.a.useContext(f);return r.a.useEffect((function(){e.isOpen&&(c(""),u(""),c(p.name),u(p.about))}),[p,e.isOpen]),r.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",id:e.id,isOpen:e.isOpen,buttonText:e.buttonText,isClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:n,about:s})}},r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{type:"text",className:"popup__input popup__input_name",id:"name-input",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0418\u043c\u044f",onChange:function(e){c(e.target.value)},value:n,minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"name-input-error"})),r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{type:"text",className:"popup__input popup__input_job",id:"job-input",name:"about",onChange:function(e){u(e.target.value)},placeholder:"\u041e \u0441\u0435\u0431\u0435",value:s,minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"job-input-error"})))},g=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],i=r.a.useState(""),o=Object(l.a)(i,2),s=o[0],u=o[1];return r.a.createElement(E,{title:e.title,id:e.id,isOpen:e.isOpen,buttonText:e.buttonText,isClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({place:n,link:s})}},r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{type:"text",className:"popup__input popup__input_place",id:"place-input",name:"place",value:n,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){e.preventDefault(),c(e.target.value)},minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"place-input-error"})),r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{className:"popup__input popup__input_pic",id:"pic-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:s,onChange:function(e){e.preventDefault(),u(e.target.value)},name:"link",type:"url",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"pic-input-error"})))},k=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copy"},"\xa9 2020 Mesto Russia"))},C=a(8),y=a(9),O=new(function(){function e(t){var a=t.url,n=t.headers;Object(C.a)(this,e),this._url=a,this._headers=n}return Object(y.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u043f\u0430\u043d\u044c\u043a\u0438, \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setCard",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return a._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"unLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getProfile",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setProfile",value:function(e,t){var a=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return a._getResponseData(e)}))}},{key:"profileAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"2078e82d-f04d-4fd6-8014-7e1fe1782828","Content-Type":"application/json"}}),x=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],m=r.a.useState(!1),d=Object(l.a)(m,2),_=d[0],C=d[1],y=r.a.useState(!1),x=Object(l.a)(y,2),j=x[0],S=x[1],D=r.a.useState(),P=Object(l.a)(D,2),T=P[0],L=P[1],A=r.a.useState({}),R=Object(l.a)(A,2),w=R[0],U=R[1],q=r.a.useState([]),J=Object(l.a)(q,2),I=J[0],M=J[1];r.a.useEffect((function(){Promise.all([O.getProfile(),O.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];U(a),M(n)})).catch((function(e){console.log(e)}))}),[]);function H(){u(!1),n(!1),C(!1),S(!1),L()}return r.a.createElement(h.Provider,{value:I},r.a.createElement(f.Provider,{value:w},r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(v,{onCardLike:function(e){e.likes.some((function(e){return e._id===w._id}))?O.unLike(e.id).then((function(t){var a=I.map((function(a){return a._id===e.id?t:a}));M(a)})).catch((function(e){console.log(e)})):O.addLike(e.id).then((function(t){var a=I.map((function(a){return a._id===e.id?t:a}));M(a)})).catch((function(e){console.log(e)}))},onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onTrash:function(){S(!0)},onEditAvatar:function(){C(!0)},onClose:H,card:T,onCardClick:function(e){L(e)},onCardDelete:function(e){O.deleteCard(e.id).then((function(t){var a=I.filter((function(t){return t._id!==e.id}));M(a)})).catch((function(e){console.log(e)}))}}),r.a.createElement(N,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",id:"profile",isOpen:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isClose:H,onUpdateUser:function(e){var t=e.name,a=e.about;O.setProfile(t,a).then((function(e){U(e),H()})).catch((function(e){console.log(e)}))}}),r.a.createElement(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",id:"add-card",isOpen:s,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isClose:H,onAddPlace:function(e){var t=e.place,a=e.link;O.setCard(t,a).then((function(e){M([e].concat(Object(o.a)(I))),H()}))}}),r.a.createElement(b,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",id:"new-avatar",buttonText:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:_,isClose:H,onUpdateAvatar:function(e){var t=e.avatar;O.profileAvatar(t).then((function(e){U(e),H()})).catch((function(e){console.log(e)}))}}),r.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",id:"remove-card",buttonText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",isOpen:j,isClose:H}),r.a.createElement(k,null))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.querySelector("#root"))},5:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.67bd3bb8.chunk.js.map