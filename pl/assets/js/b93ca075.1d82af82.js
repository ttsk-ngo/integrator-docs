"use strict";(self.webpackChunkswdr_5_docs=self.webpackChunkswdr_5_docs||[]).push([[7641],{6386:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Requirements/FunctionalRequirements/Complaint system/CS-graph01","title":"System Skarg - Diagram zale\u017cno\u015bci","description":"Legenda:","source":"@site/docs/Requirements/03-FunctionalRequirements/05-Complaint system/CS-graph01.mdx","sourceDirName":"Requirements/03-FunctionalRequirements/05-Complaint system","slug":"/Requirements/FunctionalRequirements/Complaint system/CS-graph01","permalink":"/integrator-docs/pl/docs/Requirements/FunctionalRequirements/Complaint system/CS-graph01","draft":false,"unlisted":false,"editUrl":"https://github.com/ttsk-ngo/integrator-docs/tree/main/docs/Requirements/03-FunctionalRequirements/05-Complaint system/CS-graph01.mdx","tags":[],"version":"current","frontMatter":{"sidebar_label":"CS-graph01 - System Skarg"},"sidebar":"requirementsSidebar","previous":{"title":"CS-FR0001 - Access to complaint system","permalink":"/integrator-docs/pl/docs/Requirements/FunctionalRequirements/Complaint system/CS-FR0001"},"next":{"title":"Reputation System","permalink":"/integrator-docs/pl/docs/Requirements/FunctionalRequirements/Reputation system/"}}');var r=a(4848),o=a(8453);const s={sidebar_label:"CS-graph01 - System Skarg"},i="System Skarg - Diagram zale\u017cno\u015bci",d={},l=[];function c(e){const n={h1:"h1",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"system-skarg---diagram-zale\u017cno\u015bci",children:"System Skarg - Diagram zale\u017cno\u015bci"})}),"\n",(0,r.jsx)(n.p,{children:"Legenda:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kolor \u017c\xf3\u0142ty - U\u017cytkownik"}),"\n",(0,r.jsx)(n.li,{children:"kolor niebieski - Moderator"}),"\n",(0,r.jsx)(n.li,{children:"kolor czerwony - Naczelnik moderator\xf3w lub Zarz\u0105d"}),"\n",(0,r.jsx)(n.li,{children:"kolor fioletowy - Zasady og\xf3lne wynikajace z regulaminu"}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:'graph TD\n    start(("Start"))\n    nowa@{ shape: lean-r, label: "Nowa Skarga"}\n    target1{"Skarga<br>na cz\u0142onka<br>zespo\u0142u?"}\n    target2{"Skarga<br>na<br>Naczelnika<br>lub<br>Moderatora?"}\n    target3{"Skarga<br>na Zarz\u0105d?"}\n    mod{{"Moderator 1 instancji"}}\n    nmod{{"Naczelnik Moderator\xf3w"}}\n    zarzad{{"Zarz\u0105d"}}\n    nacz{{"Naczelnicy"}}\n    dyskusja["Dyskusja pomi\u0119dzy stronami sporu"]\n    zas{"Skarga<br>zasadna?"}\n    orz1["Rozpatrzenie skargi"]\n    orz2{"Podrzymanie<br>decyzji?"}\n    pom1["Opinia dodatkowych os\xf3b na zlecenie rozpatruj\u0105cego"]\n    odw1{"odwo\u0142anie?"}\n    odw2{"Rozpatrywa\u0142<br>Zarz\u0105d<br>lub<br>Naczelnicy?"}\n    zmr["Zmiana<br>rozpatruj\u0105cego"]\n    2mod{{"Moderator 2 instancji"}}\n    koniec(("Koniec"))\n\n    start:::green--\x3enowa:::user\n    nowa ---\x3e target1\n    nowa --\x3e dyskusja:::user\n    dyskusja --\x3e zas:::mod\n    mod --\x3e zas\n    nmod --\x3e zas\n    zarzad --\x3e zas\n    nacz --\x3e zas\n    zas -- Tak ---\x3e orz1:::mod\n    zas -- Nie --\x3e koniec\n    orz1 <-..-> pom1:::mod\n    orz1 <-.-> zmr:::adm\n    orz1 ---\x3e odw2:::default\n    target1 -- Nie --\x3e mod:::adm\n    target1 -- Tak --\x3e target2:::default\n    target2 -- Nie --\x3e target3:::default\n    target2 -- Tak --\x3e zarzad:::adm\n    target3 -- Nie ---\x3e nmod:::adm\n    target3 -- Tak --\x3e nacz:::adm\n\n    odw1 -- Tak --\x3e 2mod:::mod\n    2mod --\x3e orz2\n    orz2 -- Tak --\x3e koniec\n    orz2 -- Nie --\x3e orz1\n    odw2 -- Nie --\x3e odw1:::user\n    odw2 -- Tak --\x3e koniec:::green\n    odw1 -- Nie --\x3e koniec\n\n    classDef green fill:#d4efdf,color:#1e8449,stroke:#1e8449,font-weight:bold,font-size:12pt;\n    classDef gray fill:#f2f3f4,color:#909497,stroke:#909497,font-weight:bold,font-size:12pt;\n    classDef user fill:#fef9e7,color:#9a7d0a,stroke:#9a7d0a,font-weight:bold,font-size:12pt;\n    classDef mod fill:#d6eaf8,color:#2874a6,stroke:#2874a6,font-weight:bold,font-size:12pt;\n    classDef adm fill:#fadbd8,color:#943126,stroke:#943126,font-weight:bold,font-size:12pt;\n    classDef default font-weight:bold,font-size:12pt;\n\n    class legendYellow user\n    class legendBlue mod\n    class legendRed adm\n    class Legenda gray'})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);