import{Q as g,H as N,v as q,o as $,c as S,w as o,a as e,R as k,h as i,B as U,u as s,T as C,U as P,V as R,f,i as p,t as b,_ as j,b as A,d,x as V,y as h,z as m,A as M,S as B,F as x,W as F,G as Y,X as E,Y as G,Z as y}from"./index.42f109b5.js";import{a as H,_ as r}from"./FormField.748bfb73.js";import{_ as T}from"./FormFilePicker.c9e19659.js";const D={class:"space-y-3 text-center md:text-left lg:mx-12"},L={class:"flex justify-center md:block"},O={class:"text-2xl"},z=p(" Howdy, "),Q=p("! "),W=i("p",null,[p("Last login "),i("b",null,"12 mins ago"),p(" from "),i("b",null,"127.0.0.1")],-1),X={class:"flex justify-center md:block"},Z={__name:"UserCard",setup(v){const u=g(),n=N(()=>u.userName),l=q([]);return(w,c)=>($(),S(f,null,{default:o(()=>[e(R,{type:"justify-around lg:justify-center"},{default:o(()=>[e(k,{class:"lg:mx-12"}),i("div",D,[i("div",L,[e(H,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=_=>l.value=_),name:"sample-switch",type:"switch",options:{one:"Notifications"}},null,8,["modelValue"])]),i("h1",O,[z,i("b",null,U(s(n)),1),Q]),W,i("div",X,[e(C,{text:"Verified",type:"info",icon:s(P)},null,8,["icon"])])])]),_:1})]),_:1}))}},I={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},oe={__name:"ProfileView",setup(v){const u=g(),n=b({name:u.userName,email:u.userEmail}),l=b({password_current:"",password:"",password_confirmation:""}),w=()=>{u.setUser(n)},c=()=>{};return(_,a)=>($(),S(j,null,{default:o(()=>[e(B,null,{default:o(()=>[e(A,{icon:s(x),title:"Profile",main:""},{default:o(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:_.mdiGithub,label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(Z,{class:"mb-6"}),i("div",I,[e(f,{title:"Edit Profile",icon:s(F),form:"",onSubmit:V(w,["prevent"])},{footer:o(()=>[e(h,null,{default:o(()=>[e(d,{color:"info",type:"submit",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:o(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:o(()=>[e(T)]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:o(()=>[e(m,{modelValue:n.name,"onUpdate:modelValue":a[0]||(a[0]=t=>n.name=t),icon:s(x),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:o(()=>[e(m,{modelValue:n.email,"onUpdate:modelValue":a[1]||(a[1]=t=>n.email=t),icon:s(Y),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["icon","onSubmit"]),e(f,{title:"Change Password",icon:s(E),form:"",onSubmit:V(c,["prevent"])},{footer:o(()=>[e(h,null,{default:o(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:o(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:o(()=>[e(m,{modelValue:l.password_current,"onUpdate:modelValue":a[2]||(a[2]=t=>l.password_current=t),icon:s(G),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(M),e(r,{label:"New password",help:"Required. New password"},{default:o(()=>[e(m,{modelValue:l.password,"onUpdate:modelValue":a[3]||(a[3]=t=>l.password=t),icon:s(y),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:o(()=>[e(m,{modelValue:l.password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=t=>l.password_confirmation=t),icon:s(y),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["icon","onSubmit"])])]),_:1})]),_:1}))}};export{oe as default};
