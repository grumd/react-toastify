(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),i=(n(0),n(143)),a={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",sidebar_label:"Dispatch toast outside of react component"},s={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",description:"The `toast` emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere.",source:"@site/docs/dispatch-toast-outside-of-react-component.md",permalink:"/react-toastify/dispatch-toast-outside-of-react-component",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/dispatch-toast-outside-of-react-component.md",sidebar_label:"Dispatch toast outside of react component",sidebar:"someSidebar",previous:{title:"How to style",permalink:"/react-toastify/how-to-style"},next:{title:"ToastContainer",permalink:"/react-toastify/api/toast-container"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"toast")," emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere."),Object(i.b)("p",null,"In the video below I've used it inside the service worker to notify the user that he's offline."),Object(i.b)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/Z9DLrRu4sYs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// index.js\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport 'normalize.css';\nimport App from 'src/components/App';\nimport { toast } from \"react-toastify\";\nimport registerServiceWorker from './registerServiceWorker';\n\nimport 'react-toastify/dist/ReactToastify.css';\nimport './index.css';\n\n\n\nReactDOM.render(\n    <App />,\n  document.getElementById('root')\n);\nregisterServiceWorker(toast);\n\n\n\n//registerServiceWorker.js\n\n// this is a classic service worker coming from CRA\n\nexport default function register(toast) {\n  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {\n    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);\n    if (publicUrl.origin !== window.location.origin) return;\n\n    window.addEventListener('load', () => {\n      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;\n      let isAppOnline = navigator.onLine;\n\n      window.addEventListener('online', () => {\n        if(!isAppOnline){\n          toast('\ud83e\udd84 The connectivity is back, sync in progress...');\n          isAppOnline = true;\n        }\n      });\n\n      window.addEventListener('offline', () => {\n        toast.warn('The app is running offline, any changes mades during this time will be synced as soon as the connectivity is back');\n        isAppOnline = false;\n      });\n\n      if (isLocalhost) {\n        checkValidServiceWorker(swUrl, toast);\n      } else {\n        registerValidSW(swUrl, toast);\n      }\n    });\n  }\n}\n\nfunction registerValidSW(swUrl, toast) {\n  navigator.serviceWorker\n    .register(swUrl)\n    .then(registration => {\n      registration.onupdatefound = () => {\n        const installingWorker = registration.installing;\n        installingWorker.onstatechange = () => {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              toast.info('\ud83d\udd04 New content is available; please refresh.')\n            } else {\n              toast('\ud83d\ude80 Content is cached for offline use.')\n            }\n          }\n        };\n      };\n    })\n    .catch(error => {\n      toast.error('Error during service worker registration: ' + error,);\n    });\n}\n\nfunction checkValidServiceWorker(swUrl, toast) {\n  fetch(swUrl)\n    .then(response => {\n      if (\n        response.status === 404 ||\n        response.headers.get('content-type').indexOf('javascript') === -1\n      ) {\n        navigator.serviceWorker.ready.then(registration => {\n          registration.unregister().then(() => {\n            window.location.reload();\n          });\n        });\n      } else {\n        registerValidSW(swUrl);\n      }\n    })\n    .catch(() => {\n      toast(\n        '\ud83d\udca9 No internet connection found. App is running in offline mode.'\n      );\n    });\n}\n\nexport function unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(registration => {\n      registration.unregister();\n    });\n  }\n}\n\n")))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return n?o.a.createElement(m,s({ref:t},l,{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);