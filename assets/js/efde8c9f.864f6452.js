"use strict";(self.webpackChunkswdr_5_docs=self.webpackChunkswdr_5_docs||[]).push([[1793],{1789:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"Design/API Reference/account","title":"/account","description":"This API is created to enable local users to get and maintain their access and refresh tokens.","source":"@site/docs/Design/03-API Reference/01-account.mdx","sourceDirName":"Design/03-API Reference","slug":"/Design/API Reference/account","permalink":"/integrator-docs/docs/Design/API Reference/account","draft":false,"unlisted":false,"editUrl":"https://github.com/ttsk-ngo/integrator-docs/tree/main/docs/Design/03-API Reference/01-account.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"/account"},"sidebar":"designSidebar","previous":{"title":"User","permalink":"/integrator-docs/docs/Design/Models/User"},"next":{"title":"index","permalink":"/integrator-docs/docs/Design/UI Specification/"}}');var o=s(4848),t=s(8453);const r={sidebar_label:"/account"},i="/account",a={},d=[{value:"/account/login",id:"accountlogin",level:2},{value:"/account/refresh",id:"accountrefresh",level:2},{value:"/account/logout",id:"accountlogout",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"account",children:"/account"})}),"\n",(0,o.jsx)(n.p,{children:"This API is created to enable local users to get and maintain their access and refresh tokens."}),"\n",(0,o.jsx)(n.h2,{id:"accountlogin",children:"/account/login"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /account/login?useCookies=false\n"})}),"\n",(0,o.jsx)(n.p,{children:"Request body"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "email": "string",\n    "password": "string"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response HTTP 200 (useCookies=false). Token-based authentication."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "tokenType": "string",\n    "accessToken": "string",\n    "expiresIn": 0,\n    "refreshToken": "string"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response HTTP 200 body for (useCookies=true - cookie-based authentication) is empty, but the response contains authentication cookie."}),"\n",(0,o.jsx)(n.h2,{id:"accountrefresh",children:"/account/refresh"}),"\n",(0,o.jsx)(n.p,{children:"This endpoint is used only in token-based authentication scenario to get another access token when the previous one is about to expire."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /account/refresh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Request body"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "refreshToken": "string"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response HTTP 200"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "tokenType": "string",\n    "accessToken": "string",\n    "expiresIn": 0,\n    "refreshToken": "string"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"accountlogout",children:"/account/logout"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /account/logout\n"})}),"\n",(0,o.jsx)(n.p,{children:"Request"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Response is HTTP 200 in case of a successful logout.",(0,o.jsx)(n.br,{}),"\n","Response is HTTP 401 in case of unauthenticated user calling the endpoint."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var c=s(6540);const o={},t=c.createContext(o);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);