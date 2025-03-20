"use strict";(self.webpackChunkswdr_5_docs=self.webpackChunkswdr_5_docs||[]).push([[1713],{5542:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Design/Main concepts/Errors/index","title":"Errors","description":"Errors are returned by throwing IntegratorException specifically built for this use. Thrown exception is then caught in exception middleware which detects its type (handled or unhandled) and returns appropriate HTTP response with its body.","source":"@site/docs/Design/01-Main concepts/01-Errors/index.mdx","sourceDirName":"Design/01-Main concepts/01-Errors","slug":"/Design/Main concepts/Errors/","permalink":"/integrator-docs/pl/docs/Design/Main concepts/Errors/","draft":false,"unlisted":false,"editUrl":"https://github.com/ttsk-ngo/integrator-docs/tree/main/docs/Design/01-Main concepts/01-Errors/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"designSidebar","next":{"title":"API status codes","permalink":"/integrator-docs/pl/docs/Design/Main concepts/Errors/ApiStatusCodes"}}');var s=t(4848),o=t(8453);const i={},a="Errors",c={},d=[{value:"Error response",id:"error-response",level:2},{value:"Status codes",id:"status-codes",level:2},{value:"Structure",id:"structure",level:3}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"errors",children:"Errors"})}),"\n",(0,s.jsxs)(r.p,{children:["Errors are returned by throwing ",(0,s.jsx)(r.code,{children:"IntegratorException"})," specifically built for this use. Thrown exception is then caught in exception middleware which detects its type (handled or unhandled) and returns appropriate HTTP response with its body."]}),"\n",(0,s.jsx)(r.h2,{id:"error-response",children:"Error response"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "statusCode": "string",\n    "reason": "string",\n    "messages": ["string"]\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["In addition to HTTP codes, a ",(0,s.jsx)(r.code,{children:"x-correlation-id"})," header has been implemented so that the user can receive a unique identifier for his request, which can be used to report errors to the development team."]}),"\n",(0,s.jsx)(r.h2,{id:"status-codes",children:"Status codes"}),"\n",(0,s.jsx)(r.p,{children:"Status codes are a way to distinguish exactly what happened during the processing of a request. They are helpful because for ex. HTTP 400 codes are not enough to properly inform the user of what happened."}),"\n",(0,s.jsx)(r.h3,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(r.p,{children:"Status codes are 5 digits. The first two digits and the last three are separated by a dash. The first two digits specify the part of the application from which the error was thrown. The remaining digits are the next number from the previous status code."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"xx-yyy\n\nxx:\nGlobal: 01\nIntegrator.Api: 02\nIntegrator.DataAccess: 03\nIntegrator.Domain: 04\nIntegrator.Shared: 05\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(6540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);