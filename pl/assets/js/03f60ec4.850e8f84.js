"use strict";(self.webpackChunkswdr_5_docs=self.webpackChunkswdr_5_docs||[]).push([[2096],{5441:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Requirements/UseCases/Reputation system/RS-graph1","title":"Reputation flow diagram","description":"","source":"@site/docs/Requirements/04-UseCases/06-Reputation system/RS-graph1.mdx","sourceDirName":"Requirements/04-UseCases/06-Reputation system","slug":"/Requirements/UseCases/Reputation system/RS-graph1","permalink":"/integrator-docs/pl/docs/Requirements/UseCases/Reputation system/RS-graph1","draft":false,"unlisted":false,"editUrl":"https://github.com/ttsk-ngo/integrator-docs/tree/main/docs/Requirements/04-UseCases/06-Reputation system/RS-graph1.mdx","tags":[],"version":"current","frontMatter":{"sidebar_label":"RS-graph1 - Reputation flow"},"sidebar":"requirementsSidebar","previous":{"title":"RS-UC0002 - Log View","permalink":"/integrator-docs/pl/docs/Requirements/UseCases/Reputation system/RS-UC0002"},"next":{"title":"Performance","permalink":"/integrator-docs/pl/docs/Requirements/NonFunctionalRequirements/Performance"}}');var o=a(4848),r=a(8453);const s={sidebar_label:"RS-graph1 - Reputation flow"},i="Reputation flow diagram",d={},c=[];function m(e){const n={h1:"h1",header:"header",mermaid:"mermaid",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"reputation-flow-diagram",children:"Reputation flow diagram"})}),"\n",(0,o.jsx)(n.mermaid,{value:'graph TD\n    ns(("Nowa Skarga"))\n    wi["Dyskusja mi\u0119dzy stronami"]\n    mod["Moderator<br>Skarga na osob\u0119 spoza zespo\u0142u TD2"]\n    nmod["Naczelnik Moderator\xf3w<br>Skarga na osob\u0119 z zespo\u0142u TD2"]\n    zarzad["Zarz\u0105d<br>Skarga na Naczelnika lub Moderatora"]\n    nacz["Naczelnicy<br>Skarga na Zarz\u0105d"]\n    who{"Kto<br>rozpatruje<br>skarg\u0119?"}\n    zas{"Skarga<br>zastadna?"}\n    orz1["Rozpatrzenie skargi"]\n    pom1["Opinia dodatkowych os\xf3b na zlecenie rozpatruj\u0105cego"]\n    odw1{"odwo\u0142anie?"}\n    odw2{"Rozpatrywa\u0142<br>Zarz\u0105d<br>lub<br>Naczelnicy?"}\n    koniec(("koniec"))\n\n\n    ns --\x3e wi\n    wi --\x3e who\n    who ---\x3e mod\n    who --\x3e nmod\n    who --\x3e zarzad\n    who ---\x3e nacz\n    mod ---\x3e zas\n    nmod --\x3e zas\n    zarzad --\x3e zas\n    nacz ---\x3e zas\n    zas -- Tak --\x3e orz1\n    orz1 <-.-> pom1\n    orz1 ---\x3e odw1\n    odw1 -- Tak --\x3e odw2\n    odw2 -- Nie --\x3e who\n    odw2 -- Tak ---\x3e koniec\n    odw1 -- Nie ---\x3e koniec\n\n    %% Definiowanie klasy CSS\n    classDef centeredText fill:#f9f,stroke:#333,stroke-width:2px,text-align:center,dominant-baseline:middle,text-anchor:middle;\n    %% Przypisywanie klasy do nod\xf3w\n    class mod,nmod centeredText;'})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);