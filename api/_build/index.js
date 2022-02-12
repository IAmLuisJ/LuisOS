var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react2 = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react2.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react2.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react2.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react2.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react2.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react2.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react2.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react2.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react2.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react2.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react2.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react2.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react2.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react2.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react2.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react2.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react2.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react2.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react2.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react2.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react2.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react2.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react2.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react2.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react2.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react2.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react2.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react2.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react2.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react2.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react2.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-FIVPL2EI.css";

// app/styles/dracula.css
var dracula_default = "/build/_assets/dracula-22APYHD4.css";

// app/components/Layouts/SiteLayout.jsx
init_react();
var import_react5 = __toModule(require("react"));

// app/components/Sidebar/index.jsx
init_react();
var React7 = __toModule(require("react"));

// app/components/ListDetail/TitleBar.jsx
init_react();
var import_react2 = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var import_react_feather = __toModule(require("react-feather"));

// app/components/Providers/index.jsx
init_react();
var import_react = __toModule(require("react"));
var globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val) => {
  }
};
var GlobalNavigationContext = import_react.default.createContext(globalNavigationContext);

// app/components/ListDetail/TitleBar.jsx
function TitleBar({
  title,
  globalMenu = true,
  backButton = false,
  backButtonHref,
  magicTitle = false,
  titleRef = null,
  scrollContainerRef = null,
  leadingAccessory = null,
  trailingAccessory = null,
  children
}) {
  const { isOpen, setIsOpen } = React.useContext(GlobalNavigationContext);
  const [darkMode, setDarkMode] = React.useState(false);
  const [offset, setOffset] = React.useState(200);
  const [opacity, _setOpacity] = React.useState(0);
  const [currentScrollOffset, _setCurrentScrollOffset] = React.useState(0);
  const [initialTitleOffsets, _setInitialTitleOffsets] = React.useState({
    top: 0,
    bottom: 0
  });
  const initialTitleOffsetsRef = React.useRef(initialTitleOffsets);
  const opacityRef = React.useRef(opacity);
  const currentScrollOffsetRef = React.useRef(currentScrollOffset);
  const handler = React.useCallback(() => {
    const shadowOpacity = scrollContainerRef.current.scrollTop / 200;
    setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity);
    if (!(titleRef == null ? void 0 : titleRef.current) || !(initialTitleOffsetsRef == null ? void 0 : initialTitleOffsetsRef.current))
      return;
    const titleTop = titleRef.current.getBoundingClientRect().top - 48;
    const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56;
    const initialOffsets = initialTitleOffsetsRef.current;
    let offsetAmount = parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100;
    let opacityOffset = parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1;
    setOffset(Math.min(Math.max(offsetAmount, 0), 100));
    setOpacity(opacityOffset);
  }, [title, titleRef, scrollContainerRef]);
  React.useEffect(() => {
    var _a;
    (_a = scrollContainerRef == null ? void 0 : scrollContainerRef.current) == null ? void 0 : _a.addEventListener("scroll", handler);
    return () => {
      var _a2;
      return (_a2 = scrollContainerRef == null ? void 0 : scrollContainerRef.current) == null ? void 0 : _a2.removeEventListener("scroll", handler);
    };
  }, [title, titleRef, scrollContainerRef]);
  React.useEffect(() => {
    if (!(titleRef == null ? void 0 : titleRef.current) || !(scrollContainerRef == null ? void 0 : scrollContainerRef.current))
      return;
    scrollContainerRef.current.scrollTop = 0;
    setOpacity(0);
    setInitialTitleOffsets({
      bottom: titleRef.current.getBoundingClientRect().bottom - 56,
      top: titleRef.current.getBoundingClientRect().top - 48
    });
  }, [title, titleRef, scrollContainerRef]);
  React.useEffect(() => {
    const isDarkMode = (window == null ? void 0 : window.matchMedia) && (window == null ? void 0 : window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDarkMode)
      setDarkMode(true);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      background: `rgba(${darkMode ? "50,50,50" : "255,255,255"},${currentScrollOffset === 0 ? currentScrollOffset : darkMode ? currentScrollOffset + 0.5 : currentScrollOffset + 0.8})`,
      boxShadow: `0 1px 3px rgba(0,0,0,${currentScrollOffset})`,
      minHeight: "48px"
    },
    className: `filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-none items-center justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex items-center space-x-3"
  }, globalMenu && /* @__PURE__ */ React.createElement("span", {
    onClick: () => setIsOpen(!isOpen),
    className: "flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
  }, isOpen ? /* @__PURE__ */ React.createElement(import_react_feather.X, {
    size: 16,
    className: "text-primary"
  }) : /* @__PURE__ */ React.createElement(import_react_feather.Menu, {
    size: 16,
    className: "text-primary"
  })), backButton && /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: backButtonHref
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-primary flex items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
  }, /* @__PURE__ */ React.createElement(import_react_feather.ArrowLeft, {
    size: 16,
    className: "text-primary"
  }))), leadingAccessory && /* @__PURE__ */ React.createElement(React.Fragment, null, leadingAccessory), /* @__PURE__ */ React.createElement("h2", {
    style: magicTitle ? {
      transform: `translateY(${offset}%)`,
      opacity: `${opacity}`
    } : {},
    className: "text-primary transform-gpu text-sm font-bold line-clamp-1"
  }, title)), trailingAccessory && /* @__PURE__ */ React.createElement(React.Fragment, null, trailingAccessory)), /* @__PURE__ */ React.createElement("div", null, children)));
}

// app/components/Sidebar/Navigation.jsx
init_react();
var import_react4 = __toModule(require("react"));

// app/components/Icon/index.jsx
init_react();
var React3 = __toModule(require("react"));
function HomeIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}
function WritingIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}
function FigmaIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M4.63338 14.8C5.25222 14.8 5.84571 14.5541 6.2833 14.1166C6.72088 13.679 6.96672 13.0855 6.96672 12.4666V10.1333H4.63338C4.01454 10.1333 3.42105 10.3791 2.98347 10.8167C2.54588 11.2543 2.30005 11.8478 2.30005 12.4666C2.30005 13.0855 2.54588 13.679 2.98347 14.1166C3.42105 14.5541 4.01454 14.8 4.63338 14.8V14.8Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M2.30005 7.39998C2.30005 6.78115 2.54588 6.18765 2.98347 5.75007C3.42105 5.31248 4.01454 5.06665 4.63338 5.06665H6.96672V9.73332H4.63338C4.01454 9.73332 3.42105 9.48748 2.98347 9.0499C2.54588 8.61231 2.30005 8.01882 2.30005 7.39998V7.39998Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M2.30005 2.33333C2.30005 1.71481 2.54563 1.12159 2.98282 0.684062C3.42001 0.246529 4.01304 0.000483221 4.63156 0L6.96489 0V4.66667H4.63338C4.01454 4.66667 3.42105 4.42083 2.98347 3.98325C2.54588 3.54566 2.30005 2.95217 2.30005 2.33333V2.33333Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M7.3999 0H9.73323C10.3521 0 10.9456 0.245833 11.3832 0.683417C11.8207 1.121 12.0666 1.71449 12.0666 2.33333C12.0666 2.95217 11.8207 3.54566 11.3832 3.98325C10.9456 4.42083 10.3521 4.66667 9.73323 4.66667H7.3999V0Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M11.9667 7.4034C11.9667 8.02224 11.7209 8.61573 11.2833 9.05332C10.8457 9.4909 10.2522 9.73673 9.63338 9.73673C9.01454 9.73673 8.42105 9.4909 7.98347 9.05332C7.54588 8.61573 7.30005 8.02224 7.30005 7.4034C7.30005 6.78456 7.54588 6.19107 7.98347 5.75349C8.42105 5.3159 9.01454 5.07007 9.63338 5.07007C10.2522 5.07007 10.8457 5.3159 11.2833 5.75349C11.7209 6.19107 11.9667 6.78456 11.9667 7.4034V7.4034Z",
    fill: "currentColor"
  }));
}
function PodcastIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}
function BookmarksIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}
function AMAIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}
function StackIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}
function StaffDesignIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 19 20",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5624 7.65024C15.3911 4.22834 13.9853 0.299954 10.3749 0.0277404C6.02993 -0.299865 1.80395 2.3005 0.442366 6.43482C-0.933043 10.6111 1.02411 15.0339 4.57906 17.6263C8.16191 20.239 13.1943 21.056 16.602 18.2191C19.4143 15.8778 18.023 11.8653 16.7983 8.33341C16.7186 8.10345 16.6396 7.87553 16.5624 7.65024ZM12.9543 11.6429C12.9543 13.4747 11.5233 14.6404 9.06857 14.6404C7.06405 14.6404 5.90451 13.9188 5.52211 13.0491C5.42959 12.8456 5.38642 12.6359 5.38642 12.4324C5.38642 11.8032 5.86133 11.3715 6.50895 11.3715C7.00237 11.3715 7.33543 11.5257 7.68699 12.0191C7.99538 12.457 8.51347 12.6359 9.09941 12.6359C9.88271 12.6359 10.3638 12.3152 10.3638 11.8773C10.3638 11.4578 10.0184 11.279 9.01923 11.1001L8.1249 10.9398C6.35475 10.6252 5.38642 9.73087 5.38642 8.34929C5.38642 6.56064 6.92836 5.43194 9.0439 5.43194C10.8079 5.43194 12.0723 6.05488 12.5349 7.16508C12.6089 7.34395 12.6459 7.51048 12.6459 7.71401C12.6459 8.30612 12.2141 8.70702 11.5603 8.71319C11.0052 8.71319 10.6537 8.52199 10.3391 8.04707C10.0492 7.60299 9.636 7.43646 9.07474 7.43646C8.34694 7.43646 7.97688 7.75719 7.97688 8.15809C7.97688 8.55899 8.35928 8.7502 9.24743 8.91056L10.1418 9.07092C12.0538 9.41631 12.9543 10.1996 12.9543 11.6429Z"
  }));
}
function SecurityChecklistIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}
function AppDissectionIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}
function HackerNewsIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}
function TwitterIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    viewBox: "0 0 16 14",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "14",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M14.3617 3.35401C14.3687 3.49999 14.3713 3.64777 14.3713 3.79376C14.3713 8.29039 11.0696 13.4737 5.03217 13.4737C3.17739 13.4737 1.45304 12.9105 0 11.9445C0.859457 12.0522 1.73097 11.9833 2.56473 11.7418C3.39849 11.5003 4.17814 11.0908 4.85913 10.5369C4.17428 10.5235 3.51059 10.2886 2.96085 9.86516C2.41112 9.44169 2.00282 8.85078 1.79304 8.17505C2.28527 8.27044 2.79186 8.25042 3.27565 8.11647C2.53271 7.96035 1.8647 7.54285 1.38482 6.9347C0.904951 6.32655 0.642734 5.56518 0.642609 4.77959V4.73724C1.09843 5.00001 1.60823 5.14614 2.12957 5.16347C1.4338 4.6828 0.941284 3.94507 0.752536 3.10088C0.563788 2.25669 0.693041 1.36968 1.11391 0.620882C1.93808 1.67201 2.96639 2.53173 4.13207 3.14418C5.29774 3.75663 6.5747 4.10813 7.88 4.17584C7.82353 3.92137 7.79523 3.66107 7.79565 3.39996C7.79565 2.9534 7.88054 2.51121 8.04548 2.09865C8.21041 1.68609 8.45215 1.31124 8.7569 0.995511C9.06165 0.679784 9.42344 0.429363 9.82159 0.258552C10.2197 0.0877414 10.6465 -0.00011384 11.0774 4.51813e-06C11.5265 -0.000754465 11.9709 0.0941183 12.3832 0.278738C12.7954 0.463357 13.1667 0.733786 13.4739 1.07325C14.2088 0.922489 14.9136 0.643368 15.5583 0.247815C15.3131 1.03559 14.8001 1.70424 14.1148 2.12937C14.7654 2.04944 15.4009 1.86901 16 1.5941C15.5599 2.27755 15.005 2.87363 14.3617 3.35401V3.35401Z"
  }));
}
function GitHubIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.06478 0C3.61133 0 0 3.6722 0 8.20248C0 11.8266 2.31081 14.9013 5.51518 15.9859C5.91823 16.0618 6.06622 15.808 6.06622 15.5913C6.06622 15.3957 6.05875 14.7496 6.05528 14.0642C3.81164 14.5604 3.3382 13.0963 3.3382 13.0963C2.97134 12.1483 2.44275 11.8961 2.44275 11.8961C1.71103 11.387 2.49791 11.3975 2.49791 11.3975C3.30775 11.4552 3.73417 12.2428 3.73417 12.2428C4.45347 13.4968 5.62083 13.1343 6.08103 12.9247C6.15342 12.3947 6.36245 12.0325 6.59305 11.8278C4.80178 11.6204 2.91872 10.9171 2.91872 7.77405C2.91872 6.87851 3.23377 6.14679 3.74966 5.57235C3.66593 5.36561 3.38987 4.53148 3.8278 3.40163C3.8278 3.40163 4.50501 3.18118 6.04619 4.24243C6.68951 4.0607 7.37942 3.96953 8.06478 3.96644C8.75018 3.96953 9.44062 4.0607 10.0851 4.24243C11.6244 3.18118 12.3007 3.40163 12.3007 3.40163C12.7397 4.53148 12.4635 5.36561 12.3798 5.57235C12.8969 6.14679 13.2098 6.87851 13.2098 7.77405C13.2098 10.9245 11.3231 11.6182 9.52728 11.8213C9.81657 12.0758 10.0743 12.575 10.0743 13.3403C10.0743 14.4377 10.065 15.321 10.065 15.5913C10.065 15.8096 10.2101 16.0653 10.6189 15.9848C13.8216 14.899 16.1294 11.8254 16.1294 8.20248C16.1294 3.6722 12.5187 0 8.06478 0Z"
  }));
}
function ExternalLinkIcon() {
  return /* @__PURE__ */ React3.createElement("svg", {
    width: "10",
    height: "9",
    viewBox: "0 0 10 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M9.00195 6.32617V0.824219C9.00195 0.490234 8.79102 0.267578 8.45117 0.267578L2.94922 0.279297C2.62109 0.279297 2.41016 0.519531 2.41016 0.794922C2.41016 1.07031 2.65039 1.30469 2.92578 1.30469H4.66602L7.45508 1.19922L6.39453 2.13672L1.16211 7.38086C1.05664 7.48633 0.998047 7.61523 0.998047 7.73828C0.998047 8.01367 1.24414 8.27734 1.53125 8.27734C1.66602 8.27734 1.78906 8.22461 1.89453 8.11914L7.13281 2.875L8.07617 1.81445L7.96484 4.48047V6.34961C7.96484 6.61914 8.19922 6.86523 8.48633 6.86523C8.76172 6.86523 9.00195 6.63672 9.00195 6.32617Z",
    fill: "currentColor"
  }));
}

// app/components/Sidebar/NavigationLink.jsx
init_react();
var import_remix3 = __toModule(require_remix());
var import_react3 = __toModule(require("react"));
function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isActive,
    isExternal
  }
}) {
  const { setIsOpen } = import_react3.default.useContext(GlobalNavigationContext);
  return /* @__PURE__ */ import_react3.default.createElement("li", {
    className: "flex items-stretch space-x-1",
    onClick: () => setIsOpen(false)
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix3.Link, {
    to: href
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href,
    target: isExternal ? "_blank" : void 0,
    rel: isExternal ? "noopener noreferrer" : void 0,
    className: `flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${isActive ? "bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white" : "text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200"}`
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ import_react3.default.createElement(Icon, null)), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "flex-1"
  }, label), Accessory && /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "flex w-4 items-center justify-center text-black text-opacity-40 dark:text-white"
  }, /* @__PURE__ */ import_react3.default.createElement(Accessory, null)))), Action && /* @__PURE__ */ import_react3.default.createElement(Action, null));
}

// app/components/Sidebar/Navigation.jsx
function SidebarNavigation() {
  const links3 = [
    {
      href: "/",
      label: "Home",
      icon: HomeIcon,
      trailingAccessory: null,
      isActive: true,
      trailingAction: null,
      isExternal: false
    },
    {
      href: "/writing",
      label: "Writing",
      icon: WritingIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    "Me",
    {
      href: "/bookmarks",
      label: "Bookmarks",
      icon: BookmarksIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    {
      href: "/ama",
      label: "AMA",
      icon: AMAIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    {
      href: "/stack",
      label: "Stack",
      icon: StackIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    "Projects",
    {
      href: "https://designdetails.fm",
      label: "Design Details",
      icon: PodcastIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true
    },
    {
      href: "https://staff.design",
      label: "Staff Design",
      icon: StaffDesignIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true
    },
    {
      href: "https://figma.com/@brian",
      label: "Figma Plugins",
      icon: FigmaIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true
    },
    {
      href: "/security",
      label: "Security Checklist",
      icon: SecurityChecklistIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    {
      href: "/hn",
      label: "Hacker News",
      icon: HackerNewsIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    {
      href: "/app-dissection",
      label: "App Dissection",
      icon: AppDissectionIcon,
      trailingAccessory: null,
      isActive: false,
      trailingAction: null,
      isExternal: false
    },
    "Online",
    {
      href: "https://twitter.com/helloluisj",
      label: "Twitter",
      icon: TwitterIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true
    },
    {
      href: "https://github.com/iAmLuisJ",
      label: "GitHub",
      icon: GitHubIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true
    }
  ];
  return /* @__PURE__ */ import_react4.default.createElement("ul", {
    className: "flex-1 space-y-1 px-3 py-3"
  }, links3.map((link, i) => {
    if (typeof link === "string") {
      return /* @__PURE__ */ import_react4.default.createElement("h4", {
        key: i,
        className: "px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
      }, link);
    }
    return /* @__PURE__ */ import_react4.default.createElement(NavigationLink, {
      key: i,
      link
    });
  }));
}

// app/components/Sidebar/Overlay.jsx
init_react();
var React6 = __toModule(require("react"));
function SidebarOverlay() {
  const { isOpen, setIsOpen } = React6.useContext(GlobalNavigationContext);
  return /* @__PURE__ */ React6.createElement("div", {
    className: `fixed inset-0 z-20 bg-black bg-opacity-10 transition duration-200 ease-in-out dark:bg-opacity-50 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
    onClick: () => setIsOpen(false)
  });
}

// app/components/Sidebar/index.jsx
function Sidebar() {
  const { isOpen } = React7.useContext(GlobalNavigationContext);
  const scrollContainerRef = React7.useRef(null);
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("nav", {
    ref: scrollContainerRef,
    className: `${isOpen ? "absolute inset-y-0 left-0 translate-x-0 shadow-lg" : "absolute -translate-x-full"} 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900 2xl:w-72`
  }, /* @__PURE__ */ React7.createElement(TitleBar, {
    scrollContainerRef,
    leadingAccessory: null,
    title: "Luis Juarez"
  }), /* @__PURE__ */ React7.createElement(SidebarNavigation, null)), /* @__PURE__ */ React7.createElement(SidebarOverlay, null));
}

// app/components/Layouts/SiteLayout.jsx
function SiteLayout({ children }) {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "relative flex h-full min-h-screen w-full"
  }, /* @__PURE__ */ import_react5.default.createElement(Sidebar, null), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-1"
  }, children));
}
var SiteLayout_default = SiteLayout;

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/root.jsx
function meta() {
  return { title: "LuisOS" };
}
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: dracula_default, media: "(prefers-color-scheme: dark)" }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(SiteLayout_default, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/writing/index.jsx
var writing_exports = {};
__export(writing_exports, {
  default: () => writing_default
});
init_react();
var import_react8 = __toModule(require("react"));

// app/components/Intro.jsx
init_react();
var import_react6 = __toModule(require("react"));
var Intro = () => {
  return /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "text-primary"
  }, /* @__PURE__ */ import_react6.default.createElement("p", null, "Hello, my name is Luis Juarez!")));
};
var Intro_default = Intro;

// app/components/Layouts/ListDetailView.jsx
init_react();
var import_react7 = __toModule(require("react"));
var ListDetailView = ({ list, detail, hasDetail = false }) => {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex w-full"
  }, list && /* @__PURE__ */ import_react7.default.createElement("div", {
    id: "list",
    className: `bg-dots ${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`
  }, list), detail);
};
var ListDetailView_default = ListDetailView;

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/writing/index.jsx
var Writing = () => {
  return /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "text-gray-600 body-font"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "container px-5 py-24 mx-auto"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex flex-wrap -m-4"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "p-4 md:w-1/3"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
  }, /* @__PURE__ */ import_react8.default.createElement("img", {
    className: "lg:h-48 md:h-36 w-full object-cover object-center",
    src: "https://dummyimage.com/720x400",
    alt: "blog"
  }), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "p-6"
  }, /* @__PURE__ */ import_react8.default.createElement("h2", {
    className: "tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
  }, "CATEGORY"), /* @__PURE__ */ import_react8.default.createElement("h1", {
    className: "title-font text-lg font-medium text-gray-900 mb-3"
  }, "The Catalyzer"), /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "leading-relaxed mb-3"
  }, "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "flex items-center flex-wrap "
  }, /* @__PURE__ */ import_react8.default.createElement("a", {
    className: "text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
  }, "Learn More", /* @__PURE__ */ import_react8.default.createElement("svg", {
    className: "w-4 h-4 ml-2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M5 12h14"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M12 5l7 7-7 7"
  }))), /* @__PURE__ */ import_react8.default.createElement("span", {
    className: "text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
  }, /* @__PURE__ */ import_react8.default.createElement("svg", {
    className: "w-4 h-4 mr-1",
    stroke: "currentColor",
    "stroke-width": "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /* @__PURE__ */ import_react8.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })), "1.2K"), /* @__PURE__ */ import_react8.default.createElement("span", {
    className: "text-gray-400 inline-flex items-center leading-none text-sm"
  }, /* @__PURE__ */ import_react8.default.createElement("svg", {
    className: "w-4 h-4 mr-1",
    stroke: "currentColor",
    "stroke-width": "2",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
  })), "6")))))))));
};
var writing_default = Writing;

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/about.jsx
var about_exports = {};
__markAsModule(about_exports);
init_react();
var import_react9 = __toModule(require("react"));

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
init_react();
var import_react10 = __toModule(require("react"));
var links2 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Index() {
  return /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("h1", {
    className: "text-3xl font-bold underline"
  }, "Hello world!"), /* @__PURE__ */ import_react10.default.createElement("h1", null, "Welcome to LuisOS!"), /* @__PURE__ */ import_react10.default.createElement(ListDetailView_default, {
    list: null,
    hasDetail: true,
    detail: /* @__PURE__ */ import_react10.default.createElement(Intro_default, null)
  }));
}

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/404.jsx
var __exports = {};
__export(__exports, {
  default: () => Home
});
init_react();
var React16 = __toModule(require("react"));

// app/components/ListDetail/Detail.jsx
init_react();
var React15 = __toModule(require("react"));
var import_react_feather2 = __toModule(require("react-feather"));

// app/components/LoadingSpinner/index.jsx
init_react();
var React14 = __toModule(require("react"));
function LoadingSpinner() {
  return /* @__PURE__ */ React14.createElement("svg", {
    className: "text-primary h-3.5 w-3.5 animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React14.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ React14.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}

// app/components/ListDetail/Detail.jsx
function ContentContainer(props) {
  return /* @__PURE__ */ React15.createElement("div", __spreadValues({
    className: "mx-auto w-full max-w-3xl px-4 py-8 pb-10 md:px-8"
  }, props));
}
var Container = React15.forwardRef((props, ref) => {
  return /* @__PURE__ */ React15.createElement("div", __spreadValues({
    ref,
    id: "main",
    className: "relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black"
  }, props));
});
function Header(props) {
  return /* @__PURE__ */ React15.createElement("div", __spreadValues({
    className: "space-y-3"
  }, props));
}
var Title = React15.forwardRef((props, ref) => {
  return /* @__PURE__ */ React15.createElement("h1", __spreadValues({
    ref,
    className: "text-primary font-sans text-2xl font-bold xl:text-3xl"
  }, props));
});
function Loading() {
  return /* @__PURE__ */ React15.createElement(Container, null, /* @__PURE__ */ React15.createElement("div", {
    className: "flex flex-1 flex-col items-center justify-center"
  }, /* @__PURE__ */ React15.createElement(LoadingSpinner, null)));
}
function Null() {
  return /* @__PURE__ */ React15.createElement(Container, null, /* @__PURE__ */ React15.createElement(TitleBar, {
    title: "Not found"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16"
  }, /* @__PURE__ */ React15.createElement(import_react_feather2.Compass, {
    className: "text-secondary",
    size: 32
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "flex flex-col space-y-1"
  }, /* @__PURE__ */ React15.createElement("p", {
    className: "text-primary font-semibold"
  }, "What you seek does not exist."), /* @__PURE__ */ React15.createElement("p", {
    className: "text-tertiary"
  }, "Maybe this link is broken. Maybe something was deleted, or moved. In any case, there\u2019s nothing to see here...")), /* @__PURE__ */ React15.createElement(Link, {
    to: "/"
  }, "Go home")));
}
var Detail = {
  Container,
  ContentContainer,
  Header,
  Title,
  Loading,
  Null
};

// route-module:/Users/luisjuarez/GitHub/LuisOS/app/routes/404.jsx
function MissingPage() {
  return /* @__PURE__ */ React16.createElement(Detail.Null, null);
}
function Home() {
  return /* @__PURE__ */ React16.createElement(ListDetailView_default, {
    list: null,
    hasDetail: true,
    detail: /* @__PURE__ */ React16.createElement(MissingPage, null)
  });
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/writing/index": {
    id: "routes/writing/index",
    parentId: "root",
    path: "writing",
    index: true,
    caseSensitive: void 0,
    module: writing_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3Jvb3QuanN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0xheW91dHMvU2l0ZUxheW91dC5qc3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5qc3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTGlzdERldGFpbC9UaXRsZUJhci5qc3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvUHJvdmlkZXJzL2luZGV4LmpzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyL05hdmlnYXRpb24uanN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0ljb24vaW5kZXguanN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIvTmF2aWdhdGlvbkxpbmsuanN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIvT3ZlcmxheS5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3JvdXRlcy93cml0aW5nL2luZGV4LmpzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9JbnRyby5qc3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0RGV0YWlsVmlldy5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3JvdXRlcy9hYm91dC5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3JvdXRlcy80MDQuanN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0xpc3REZXRhaWwvRGV0YWlsLmpzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9pbmRleC5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1aXNqdWFyZXovR2l0SHViL0x1aXNPUy9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2x1aXNqdWFyZXovR2l0SHViL0x1aXNPUy9hcHAvcm91dGVzL3dyaXRpbmcvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9sdWlzanVhcmV6L0dpdEh1Yi9MdWlzT1MvYXBwL3JvdXRlcy9hYm91dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2x1aXNqdWFyZXovR2l0SHViL0x1aXNPUy9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVpc2p1YXJlei9HaXRIdWIvTHVpc09TL2FwcC9yb3V0ZXMvNDA0LmpzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvd3JpdGluZy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3dyaXRpbmcvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ3cml0aW5nXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy80MDRcIjoge1xuICAgIGlkOiBcInJvdXRlcy80MDRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCI0MDRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvblxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCBjdXN0b21TdHlsZXMgZnJvbSAnLi9zdHlsZXMvY3VzdG9tLXN0eWxlcy5jc3MnO1xuaW1wb3J0IHByb3NlU3R5bGVzIGZyb20gJy4vc3R5bGVzL3Byb3NlLXN0eWxlcy5jc3MnO1xuaW1wb3J0IGRhcmtTdHlsZXMgZnJvbSAnLi9zdHlsZXMvZHJhY3VsYS5jc3MnO1xuXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0cy9TaXRlTGF5b3V0J1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTHVpc09TXCIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBkYXJrU3R5bGVzLCBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8U2l0ZUxheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvU2l0ZUxheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4uL1NpZGViYXInXG5mdW5jdGlvbiBTaXRlTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgbWluLWgtc2NyZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTFcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUxheW91dDsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFRpdGxlQmFyIH0gZnJvbSAnLi4vTGlzdERldGFpbC9UaXRsZUJhcic7XG5pbXBvcnQgeyBHbG9iYWxOYXZpZ2F0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Byb3ZpZGVycydcblxuaW1wb3J0IHsgU2lkZWJhck5hdmlnYXRpb24gfSBmcm9tICcuL05hdmlnYXRpb24nXG5pbXBvcnQgeyBTaWRlYmFyT3ZlcmxheSB9IGZyb20gJy4vT3ZlcmxheSdcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IFJlYWN0LnVzZUNvbnRleHQoR2xvYmFsTmF2aWdhdGlvbkNvbnRleHQpXG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXZcbiAgICAgICAgICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzT3BlblxuICAgICAgICAgICAgICAgICAgICA/ICdhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHRyYW5zbGF0ZS14LTAgc2hhZG93LWxnJ1xuICAgICAgICAgICAgICAgICAgICA6ICdhYnNvbHV0ZSAtdHJhbnNsYXRlLXgtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgfSAzeGw6dy04MCB6LTMwIGZsZXggaC1mdWxsIG1heC1oLXNjcmVlbiBtaW4taC1zY3JlZW4gdy0zLzQgZmxleC1ub25lIHRyYW5zZm9ybSBmbGV4LWNvbCBvdmVyZmxvdy15LWF1dG8gYm9yZGVyLXIgYm9yZGVyLWdyYXktMTUwIGJnLXdoaXRlIHBiLTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGRhcms6Ym9yZGVyLWdyYXktODAwIGRhcms6YmctZ3JheS05MDAgc206dy0xLzIgc206cGItMCBtZDp3LTEvMyBsZzpyZWxhdGl2ZSBsZzp6LWF1dG8gbGc6dy01NiBsZzp0cmFuc2xhdGUteC0wIGxnOmJnLWdyYXktNTAgbGc6ZGFyazpiZy1ncmF5LTkwMCAyeGw6dy03MmB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lclJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICBsZWFkaW5nQWNjZXNzb3J5PXtudWxsfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkx1aXMgSnVhcmV6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyTmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxTaWRlYmFyT3ZlcmxheSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCAiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBBcnJvd0xlZnQsIE1lbnUsIFggfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcblxuXG5pbXBvcnQgeyBHbG9iYWxOYXZpZ2F0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Byb3ZpZGVycydcblxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlQmFyKHtcbiAgICB0aXRsZSxcbiAgICBnbG9iYWxNZW51ID0gdHJ1ZSxcbiAgICBiYWNrQnV0dG9uID0gZmFsc2UsXG4gICAgYmFja0J1dHRvbkhyZWYsXG4gICAgbWFnaWNUaXRsZSA9IGZhbHNlLFxuICAgIHRpdGxlUmVmID0gbnVsbCxcbiAgICBzY3JvbGxDb250YWluZXJSZWYgPSBudWxsLFxuICAgIGxlYWRpbmdBY2Nlc3NvcnkgPSBudWxsLFxuICAgIHRyYWlsaW5nQWNjZXNzb3J5ID0gbnVsbCxcbiAgICBjaGlsZHJlbixcbn0pIHtcbiAgICBjb25zdCB7IGlzT3Blbiwgc2V0SXNPcGVuIH0gPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbE5hdmlnYXRpb25Db250ZXh0KVxuICAgIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IFJlYWN0LnVzZVN0YXRlKDIwMClcbiAgICBjb25zdCBbb3BhY2l0eSwgX3NldE9wYWNpdHldID0gUmVhY3QudXNlU3RhdGUoMClcbiAgICBjb25zdCBbY3VycmVudFNjcm9sbE9mZnNldCwgX3NldEN1cnJlbnRTY3JvbGxPZmZzZXRdID0gUmVhY3QudXNlU3RhdGUoMClcblxuICAgIGNvbnN0IFtpbml0aWFsVGl0bGVPZmZzZXRzLCBfc2V0SW5pdGlhbFRpdGxlT2Zmc2V0c10gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgIH0pXG5cbiAgICBjb25zdCBpbml0aWFsVGl0bGVPZmZzZXRzUmVmID0gUmVhY3QudXNlUmVmKGluaXRpYWxUaXRsZU9mZnNldHMpXG4gICAgLy8gY29uc3Qgc2V0SW5pdGlhbFRpdGxlT2Zmc2V0cyA9IChkYXRhKSA9PiB7XG4gICAgLy8gICAgIGluaXRpYWxUaXRsZU9mZnNldHNSZWYuY3VycmVudCA9IGRhdGFcbiAgICAvLyAgICAgX3NldEluaXRpYWxUaXRsZU9mZnNldHMoZGF0YSlcbiAgICAvLyB9XG5cbiAgICBjb25zdCBvcGFjaXR5UmVmID0gUmVhY3QudXNlUmVmKG9wYWNpdHkpXG4gICAgLy8gY29uc3Qgc2V0T3BhY2l0eSA9IChkYXRhKSA9PiB7XG4gICAgLy8gICAgIG9wYWNpdHlSZWYuY3VycmVudCA9IGRhdGFcbiAgICAvLyAgICAgX3NldE9wYWNpdHkoZGF0YSlcbiAgICAvLyB9XG5cbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsT2Zmc2V0UmVmID0gUmVhY3QudXNlUmVmKGN1cnJlbnRTY3JvbGxPZmZzZXQpXG4gICAgLy8gY29uc3Qgc2V0Q3VycmVudFNjcm9sbE9mZnNldCA9IChkYXRhKSA9PiB7XG4gICAgLy8gICAgIGN1cnJlbnRTY3JvbGxPZmZzZXRSZWYuY3VycmVudCA9IGRhdGFcbiAgICAvLyAgICAgX3NldEN1cnJlbnRTY3JvbGxPZmZzZXQoZGF0YSlcbiAgICAvLyB9XG5cbiAgICBjb25zdCBoYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGFkb3dPcGFjaXR5ID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wIC8gMjAwXG4gICAgICAgIHNldEN1cnJlbnRTY3JvbGxPZmZzZXQoc2hhZG93T3BhY2l0eSA+IDAuMTIgPyAwLjEyIDogc2hhZG93T3BhY2l0eSlcblxuICAgICAgICBpZiAoIXRpdGxlUmVmPy5jdXJyZW50IHx8ICFpbml0aWFsVGl0bGVPZmZzZXRzUmVmPy5jdXJyZW50KSByZXR1cm5cblxuICAgICAgICBjb25zdCB0aXRsZVRvcCA9IHRpdGxlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gNDhcbiAgICAgICAgY29uc3QgdGl0bGVCb3R0b20gPSB0aXRsZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIDU2XG4gICAgICAgIGNvbnN0IGluaXRpYWxPZmZzZXRzID0gaW5pdGlhbFRpdGxlT2Zmc2V0c1JlZi5jdXJyZW50XG5cbiAgICAgICAgbGV0IG9mZnNldEFtb3VudCA9XG4gICAgICAgICAgICBwYXJzZUZsb2F0KCh0aXRsZUJvdHRvbSAvIGluaXRpYWxPZmZzZXRzLmJvdHRvbSkudG9GaXhlZCgyKSkgKiAxMDBcblxuICAgICAgICBsZXQgb3BhY2l0eU9mZnNldCA9XG4gICAgICAgICAgICBwYXJzZUZsb2F0KCh0aXRsZVRvcCAvIGluaXRpYWxPZmZzZXRzLnRvcCkudG9GaXhlZCgyKSkgKiAtMVxuXG4gICAgICAgIHNldE9mZnNldChNYXRoLm1pbihNYXRoLm1heChvZmZzZXRBbW91bnQsIDApLCAxMDApKVxuICAgICAgICBzZXRPcGFjaXR5KG9wYWNpdHlPZmZzZXQpXG4gICAgfSwgW3RpdGxlLCB0aXRsZVJlZiwgc2Nyb2xsQ29udGFpbmVyUmVmXSlcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lclJlZj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcilcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXJSZWY/LmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpXG4gICAgfSwgW3RpdGxlLCB0aXRsZVJlZiwgc2Nyb2xsQ29udGFpbmVyUmVmXSlcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdGl0bGVSZWY/LmN1cnJlbnQgfHwgIXNjcm9sbENvbnRhaW5lclJlZj8uY3VycmVudCkgcmV0dXJuXG4gICAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IDBcbiAgICAgICAgc2V0T3BhY2l0eSgwKVxuICAgICAgICBzZXRJbml0aWFsVGl0bGVPZmZzZXRzKHtcbiAgICAgICAgICAgIGJvdHRvbTogdGl0bGVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSA1NixcbiAgICAgICAgICAgIHRvcDogdGl0bGVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSA0OCxcbiAgICAgICAgfSlcbiAgICB9LCBbdGl0bGUsIHRpdGxlUmVmLCBzY3JvbGxDb250YWluZXJSZWZdKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNEYXJrTW9kZSA9XG4gICAgICAgICAgICB3aW5kb3c/Lm1hdGNoTWVkaWEgJiZcbiAgICAgICAgICAgIHdpbmRvdz8ubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICAgICAgaWYgKGlzRGFya01vZGUpIHNldERhcmtNb2RlKHRydWUpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGByZ2JhKCR7ZGFya01vZGUgPyAnNTAsNTAsNTAnIDogJzI1NSwyNTUsMjU1J30sJHtjdXJyZW50U2Nyb2xsT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRTY3JvbGxPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGFya01vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRTY3JvbGxPZmZzZXQgKyAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnRTY3JvbGxPZmZzZXQgKyAwLjhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pYCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBgMCAxcHggM3B4IHJnYmEoMCwwLDAsJHtjdXJyZW50U2Nyb2xsT2Zmc2V0fSlgLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlci1ibHVyIHN0aWNreSB0b3AtMCB6LTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtMyBweS0yIGRhcms6Ym9yZGVyLWIgZGFyazpib3JkZXItZ3JheS05MDBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxNZW51ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcC0yIGhvdmVyOmJnLWdyYXktMjAwIGRhcms6aG92ZXI6YmctZ3JheS04MDAgbGc6aGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYWNrQnV0dG9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YmFja0J1dHRvbkhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBwLTIgaG92ZXI6YmctZ3JheS0yMDAgZGFyazpob3ZlcjpiZy1ncmF5LTgwMCBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGVhZGluZ0FjY2Vzc29yeSAmJiA8PntsZWFkaW5nQWNjZXNzb3J5fTwvPn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWdpY1RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7b2Zmc2V0fSUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0cmFuc2Zvcm0tZ3B1IHRleHQtc20gZm9udC1ib2xkIGxpbmUtY2xhbXAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0cmFpbGluZ0FjY2Vzc29yeSAmJiA8Pnt0cmFpbGluZ0FjY2Vzc29yeX08Lz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdsb2JhbE5hdmlnYXRpb25Db250ZXh0ID0ge1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgc2V0SXNPcGVuOiAodmFsKSA9PiB7IH0sXG59XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxOYXZpZ2F0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAgZ2xvYmFsTmF2aWdhdGlvbkNvbnRleHRcbilcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVycyh7IGNoaWxkcmVuLCBwYWdlUHJvcHMgfSkge1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBzZXRJc09wZW4sXG4gICAgfVxuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsU3RhdGUpXG5cbiAgICBmdW5jdGlvbiBzZXRJc09wZW4oaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpc09wZW4gfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEdsb2JhbE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9HbG9iYWxOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICAgIEFNQUljb24sXG4gICAgQXBwRGlzc2VjdGlvbkljb24sXG4gICAgQm9va21hcmtzSWNvbixcbiAgICBFeHRlcm5hbExpbmtJY29uLFxuICAgIEZpZ21hSWNvbixcbiAgICBHaXRIdWJJY29uLFxuICAgIEhhY2tlck5ld3NJY29uLFxuICAgIEhvbWVJY29uLFxuICAgIFBvZGNhc3RJY29uLFxuICAgIFNlY3VyaXR5Q2hlY2tsaXN0SWNvbixcbiAgICBTdGFja0ljb24sXG4gICAgU3RhZmZEZXNpZ25JY29uLFxuICAgIFR3aXR0ZXJJY29uLFxuICAgIFdyaXRpbmdJY29uLFxufSBmcm9tIFwiLi4vSWNvblwiXG5pbXBvcnQgeyBOYXZpZ2F0aW9uTGluayB9IGZyb20gJy4vTmF2aWdhdGlvbkxpbmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhck5hdmlnYXRpb24oKSB7XG5cbiAgICBjb25zdCBsaW5rcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJy8nLFxuICAgICAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgICAgIGljb246IEhvbWVJY29uLFxuICAgICAgICAgICAgdHJhaWxpbmdBY2Nlc3Nvcnk6IG51bGwsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNFeHRlcm5hbDogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJy93cml0aW5nJyxcbiAgICAgICAgICAgIGxhYmVsOiAnV3JpdGluZycsXG4gICAgICAgICAgICBpY29uOiBXcml0aW5nSWNvbixcbiAgICAgICAgICAgIHRyYWlsaW5nQWNjZXNzb3J5OiBudWxsLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBpc0V4dGVybmFsOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICAnTWUnLFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhyZWY6ICcvYm9va21hcmtzJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQm9va21hcmtzJyxcbiAgICAgICAgICAgIGljb246IEJvb2ttYXJrc0ljb24sXG4gICAgICAgICAgICB0cmFpbGluZ0FjY2Vzc29yeTogbnVsbCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNFeHRlcm5hbDogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJy9hbWEnLFxuICAgICAgICAgICAgbGFiZWw6ICdBTUEnLFxuICAgICAgICAgICAgaWNvbjogQU1BSWNvbixcbiAgICAgICAgICAgIHRyYWlsaW5nQWNjZXNzb3J5OiBudWxsLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBpc0V4dGVybmFsOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBocmVmOiAnL3N0YWNrJyxcbiAgICAgICAgICAgIGxhYmVsOiAnU3RhY2snLFxuICAgICAgICAgICAgaWNvbjogU3RhY2tJY29uLFxuICAgICAgICAgICAgdHJhaWxpbmdBY2Nlc3Nvcnk6IG51bGwsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB0cmFpbGluZ0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGlzRXh0ZXJuYWw6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgICdQcm9qZWN0cycsXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vZGVzaWduZGV0YWlscy5mbScsXG4gICAgICAgICAgICBsYWJlbDogJ0Rlc2lnbiBEZXRhaWxzJyxcbiAgICAgICAgICAgIGljb246IFBvZGNhc3RJY29uLFxuICAgICAgICAgICAgdHJhaWxpbmdBY2Nlc3Nvcnk6IEV4dGVybmFsTGlua0ljb24sXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB0cmFpbGluZ0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGlzRXh0ZXJuYWw6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vc3RhZmYuZGVzaWduJyxcbiAgICAgICAgICAgIGxhYmVsOiAnU3RhZmYgRGVzaWduJyxcbiAgICAgICAgICAgIGljb246IFN0YWZmRGVzaWduSWNvbixcbiAgICAgICAgICAgIHRyYWlsaW5nQWNjZXNzb3J5OiBFeHRlcm5hbExpbmtJY29uLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBpc0V4dGVybmFsOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2ZpZ21hLmNvbS9AYnJpYW4nLFxuICAgICAgICAgICAgbGFiZWw6ICdGaWdtYSBQbHVnaW5zJyxcbiAgICAgICAgICAgIGljb246IEZpZ21hSWNvbixcbiAgICAgICAgICAgIHRyYWlsaW5nQWNjZXNzb3J5OiBFeHRlcm5hbExpbmtJY29uLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBpc0V4dGVybmFsOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhyZWY6ICcvc2VjdXJpdHknLFxuICAgICAgICAgICAgbGFiZWw6ICdTZWN1cml0eSBDaGVja2xpc3QnLFxuICAgICAgICAgICAgaWNvbjogU2VjdXJpdHlDaGVja2xpc3RJY29uLFxuICAgICAgICAgICAgdHJhaWxpbmdBY2Nlc3Nvcnk6IG51bGwsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB0cmFpbGluZ0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGlzRXh0ZXJuYWw6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhyZWY6ICcvaG4nLFxuICAgICAgICAgICAgbGFiZWw6ICdIYWNrZXIgTmV3cycsXG4gICAgICAgICAgICBpY29uOiBIYWNrZXJOZXdzSWNvbixcbiAgICAgICAgICAgIHRyYWlsaW5nQWNjZXNzb3J5OiBudWxsLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb246IG51bGwsXG4gICAgICAgICAgICBpc0V4dGVybmFsOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBocmVmOiAnL2FwcC1kaXNzZWN0aW9uJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQXBwIERpc3NlY3Rpb24nLFxuICAgICAgICAgICAgaWNvbjogQXBwRGlzc2VjdGlvbkljb24sXG4gICAgICAgICAgICB0cmFpbGluZ0FjY2Vzc29yeTogbnVsbCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNFeHRlcm5hbDogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAgJ09ubGluZScsXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vaGVsbG9sdWlzaicsXG4gICAgICAgICAgICBsYWJlbDogJ1R3aXR0ZXInLFxuICAgICAgICAgICAgaWNvbjogVHdpdHRlckljb24sXG4gICAgICAgICAgICB0cmFpbGluZ0FjY2Vzc29yeTogRXh0ZXJuYWxMaW5rSWNvbixcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNFeHRlcm5hbDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2lBbUx1aXNKJyxcbiAgICAgICAgICAgIGxhYmVsOiAnR2l0SHViJyxcbiAgICAgICAgICAgIGljb246IEdpdEh1Ykljb24sXG4gICAgICAgICAgICB0cmFpbGluZ0FjY2Vzc29yeTogRXh0ZXJuYWxMaW5rSWNvbixcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgaXNFeHRlcm5hbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMSBweC0zIHB5LTNcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpbmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBwdC01IHBiLTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS0xMDAwIHRleHQtb3BhY2l0eS00MCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiA8TmF2aWdhdGlvbkxpbmsga2V5PXtpfSBsaW5rPXtsaW5rfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufSIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWVJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAwbC03IDdhMSAxIDAgMDAxLjQxNCAxLjQxNEw0IDEwLjQxNFYxN2ExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi0yYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi02LjU4NmwuMjkzLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC03LTd6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gV3JpdGluZ0ljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIgNWEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjEwYTIgMiAwIDAwMiAySDRhMiAyIDAgMDEtMi0yVjV6bTMgMWg2djRINVY2em02IDZINXYyaDZ2LTJ6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUgN2gxYTIgMiAwIDAxMiAydjUuNWExLjUgMS41IDAgMDEtMyAwVjd6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmlnbWFJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNCAxNVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTQuNjMzMzggMTQuOEM1LjI1MjIyIDE0LjggNS44NDU3MSAxNC41NTQxIDYuMjgzMyAxNC4xMTY2QzYuNzIwODggMTMuNjc5IDYuOTY2NzIgMTMuMDg1NSA2Ljk2NjcyIDEyLjQ2NjZWMTAuMTMzM0g0LjYzMzM4QzQuMDE0NTQgMTAuMTMzMyAzLjQyMTA1IDEwLjM3OTEgMi45ODM0NyAxMC44MTY3QzIuNTQ1ODggMTEuMjU0MyAyLjMwMDA1IDExLjg0NzggMi4zMDAwNSAxMi40NjY2QzIuMzAwMDUgMTMuMDg1NSAyLjU0NTg4IDEzLjY3OSAyLjk4MzQ3IDE0LjExNjZDMy40MjEwNSAxNC41NTQxIDQuMDE0NTQgMTQuOCA0LjYzMzM4IDE0LjhWMTQuOFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yLjMwMDA1IDcuMzk5OThDMi4zMDAwNSA2Ljc4MTE1IDIuNTQ1ODggNi4xODc2NSAyLjk4MzQ3IDUuNzUwMDdDMy40MjEwNSA1LjMxMjQ4IDQuMDE0NTQgNS4wNjY2NSA0LjYzMzM4IDUuMDY2NjVINi45NjY3MlY5LjczMzMySDQuNjMzMzhDNC4wMTQ1NCA5LjczMzMyIDMuNDIxMDUgOS40ODc0OCAyLjk4MzQ3IDkuMDQ5OUMyLjU0NTg4IDguNjEyMzEgMi4zMDAwNSA4LjAxODgyIDIuMzAwMDUgNy4zOTk5OFY3LjM5OTk4WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIuMzAwMDUgMi4zMzMzM0MyLjMwMDA1IDEuNzE0ODEgMi41NDU2MyAxLjEyMTU5IDIuOTgyODIgMC42ODQwNjJDMy40MjAwMSAwLjI0NjUyOSA0LjAxMzA0IDAuMDAwNDgzMjIxIDQuNjMxNTYgMEw2Ljk2NDg5IDBWNC42NjY2N0g0LjYzMzM4QzQuMDE0NTQgNC42NjY2NyAzLjQyMTA1IDQuNDIwODMgMi45ODM0NyAzLjk4MzI1QzIuNTQ1ODggMy41NDU2NiAyLjMwMDA1IDIuOTUyMTcgMi4zMDAwNSAyLjMzMzMzVjIuMzMzMzNaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNy4zOTk5IDBIOS43MzMyM0MxMC4zNTIxIDAgMTAuOTQ1NiAwLjI0NTgzMyAxMS4zODMyIDAuNjgzNDE3QzExLjgyMDcgMS4xMjEgMTIuMDY2NiAxLjcxNDQ5IDEyLjA2NjYgMi4zMzMzM0MxMi4wNjY2IDIuOTUyMTcgMTEuODIwNyAzLjU0NTY2IDExLjM4MzIgMy45ODMyNUMxMC45NDU2IDQuNDIwODMgMTAuMzUyMSA0LjY2NjY3IDkuNzMzMjMgNC42NjY2N0g3LjM5OTlWMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMS45NjY3IDcuNDAzNEMxMS45NjY3IDguMDIyMjQgMTEuNzIwOSA4LjYxNTczIDExLjI4MzMgOS4wNTMzMkMxMC44NDU3IDkuNDkwOSAxMC4yNTIyIDkuNzM2NzMgOS42MzMzOCA5LjczNjczQzkuMDE0NTQgOS43MzY3MyA4LjQyMTA1IDkuNDkwOSA3Ljk4MzQ3IDkuMDUzMzJDNy41NDU4OCA4LjYxNTczIDcuMzAwMDUgOC4wMjIyNCA3LjMwMDA1IDcuNDAzNEM3LjMwMDA1IDYuNzg0NTYgNy41NDU4OCA2LjE5MTA3IDcuOTgzNDcgNS43NTM0OUM4LjQyMTA1IDUuMzE1OSA5LjAxNDU0IDUuMDcwMDcgOS42MzMzOCA1LjA3MDA3QzEwLjI1MjIgNS4wNzAwNyAxMC44NDU3IDUuMzE1OSAxMS4yODMzIDUuNzUzNDlDMTEuNzIwOSA2LjE5MTA3IDExLjk2NjcgNi43ODQ1NiAxMS45NjY3IDcuNDAzNFY3LjQwMzRaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvZGNhc3RJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk03IDRhMyAzIDAgMDE2IDB2NGEzIDMgMCAxMS02IDBWNHptNCAxMC45M0E3LjAwMSA3LjAwMSAwIDAwMTcgOGExIDEgMCAxMC0yIDBBNSA1IDAgMDE1IDhhMSAxIDAgMDAtMiAwIDcuMDAxIDcuMDAxIDAgMDA2IDYuOTNWMTdINmExIDEgMCAxMDAgMmg4YTEgMSAwIDEwMC0yaC0zdi0yLjA3elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5ld3NsZXR0ZXJJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMi4wNDY5IDE3LjQ4NDRDMTMuNDg5IDE3LjQ4NDQgMTQuODcyIDE2LjkxMTUgMTUuODkxOCAxNS44OTE4QzE2LjkxMTUgMTQuODcyIDE3LjQ4NDQgMTMuNDg5IDE3LjQ4NDQgMTIuMDQ2OUMxNy40ODQ0IDEwLjYwNDggMTYuOTExNSA5LjIyMTcxIDE1Ljg5MTggOC4yMDE5OEMxNC44NzIgNy4xODIyNSAxMy40ODkgNi42MDkzOCAxMi4wNDY5IDYuNjA5MzhDMTAuNjA0OCA2LjYwOTM4IDkuMjIxNzEgNy4xODIyNSA4LjIwMTk4IDguMjAxOThDNy4xODIyNSA5LjIyMTcxIDYuNjA5MzggMTAuNjA0OCA2LjYwOTM4IDEyLjA0NjlDNi42MDkzOCAxMy40ODkgNy4xODIyNSAxNC44NzIgOC4yMDE5OCAxNS44OTE4QzkuMjIxNzEgMTYuOTExNSAxMC42MDQ4IDE3LjQ4NDQgMTIuMDQ2OSAxNy40ODQ0VjE3LjQ4NDRaTTEyLjcyNjYgMTAuMDA3OEMxMi43MjY2IDkuODI3NTUgMTIuNjU1IDkuNjU0NjcgMTIuNTI3NSA5LjUyNzJDMTIuNCA5LjM5OTczIDEyLjIyNzEgOS4zMjgxMiAxMi4wNDY5IDkuMzI4MTJDMTEuODY2NiA5LjMyODEyIDExLjY5MzcgOS4zOTk3MyAxMS41NjYzIDkuNTI3MkMxMS40Mzg4IDkuNjU0NjcgMTEuMzY3MiA5LjgyNzU1IDExLjM2NzIgMTAuMDA3OFYxMS4zNjcySDEwLjAwNzhDOS44Mjc1NSAxMS4zNjcyIDkuNjU0NjcgMTEuNDM4OCA5LjUyNzIgMTEuNTY2M0M5LjM5OTczIDExLjY5MzcgOS4zMjgxMiAxMS44NjY2IDkuMzI4MTIgMTIuMDQ2OUM5LjMyODEyIDEyLjIyNzEgOS4zOTk3MyAxMi40IDkuNTI3MiAxMi41Mjc1QzkuNjU0NjcgMTIuNjU1IDkuODI3NTUgMTIuNzI2NiAxMC4wMDc4IDEyLjcyNjZIMTEuMzY3MlYxNC4wODU5QzExLjM2NzIgMTQuMjY2MiAxMS40Mzg4IDE0LjQzOTEgMTEuNTY2MyAxNC41NjY1QzExLjY5MzcgMTQuNjk0IDExLjg2NjYgMTQuNzY1NiAxMi4wNDY5IDE0Ljc2NTZDMTIuMjI3MSAxNC43NjU2IDEyLjQgMTQuNjk0IDEyLjUyNzUgMTQuNTY2NUMxMi42NTUgMTQuNDM5MSAxMi43MjY2IDE0LjI2NjIgMTIuNzI2NiAxNC4wODU5VjEyLjcyNjZIMTQuMDg1OUMxNC4yNjYyIDEyLjcyNjYgMTQuNDM5MSAxMi42NTUgMTQuNTY2NSAxMi41Mjc1QzE0LjY5NCAxMi40IDE0Ljc2NTYgMTIuMjI3MSAxNC43NjU2IDEyLjA0NjlDMTQuNzY1NiAxMS44NjY2IDE0LjY5NCAxMS42OTM3IDE0LjU2NjUgMTEuNTY2M0MxNC40MzkxIDExLjQzODggMTQuMjY2MiAxMS4zNjcyIDE0LjA4NTkgMTEuMzY3MkgxMi43MjY2VjEwLjAwNzhaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2ttYXJrc0ljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSA0YTIgMiAwIDAxMi0yaDZhMiAyIDAgMDEyIDJ2MTRsLTUtMi41TDUgMThWNHpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBTUFJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIgNWEyIDIgMCAwMTItMmg3YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAySDlsLTMgM3YtM0g0YTIgMiAwIDAxLTItMlY1elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE1IDd2MmE0IDQgMCAwMS00IDRIOS44MjhsLTEuNzY2IDEuNzY3Yy4yOC4xNDkuNTk5LjIzMy45MzguMjMzaDJsMyAzdi0zaDJhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RhY2tJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgM2ExIDEgMCAwMDAgMmg2YTEgMSAwIDEwMC0ySDd6TTQgN2ExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkg1YTEgMSAwIDAxLTEtMXpNMiAxMWEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMnYtNHpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdGFmZkRlc2lnbkljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5IDIwXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNTYyNCA3LjY1MDI0QzE1LjM5MTEgNC4yMjgzNCAxMy45ODUzIDAuMjk5OTU0IDEwLjM3NDkgMC4wMjc3NDA0QzYuMDI5OTMgLTAuMjk5ODY1IDEuODAzOTUgMi4zMDA1IDAuNDQyMzY2IDYuNDM0ODJDLTAuOTMzMDQzIDEwLjYxMTEgMS4wMjQxMSAxNS4wMzM5IDQuNTc5MDYgMTcuNjI2M0M4LjE2MTkxIDIwLjIzOSAxMy4xOTQzIDIxLjA1NiAxNi42MDIgMTguMjE5MUMxOS40MTQzIDE1Ljg3NzggMTguMDIzIDExLjg2NTMgMTYuNzk4MyA4LjMzMzQxQzE2LjcxODYgOC4xMDM0NSAxNi42Mzk2IDcuODc1NTMgMTYuNTYyNCA3LjY1MDI0Wk0xMi45NTQzIDExLjY0MjlDMTIuOTU0MyAxMy40NzQ3IDExLjUyMzMgMTQuNjQwNCA5LjA2ODU3IDE0LjY0MDRDNy4wNjQwNSAxNC42NDA0IDUuOTA0NTEgMTMuOTE4OCA1LjUyMjExIDEzLjA0OTFDNS40Mjk1OSAxMi44NDU2IDUuMzg2NDIgMTIuNjM1OSA1LjM4NjQyIDEyLjQzMjRDNS4zODY0MiAxMS44MDMyIDUuODYxMzMgMTEuMzcxNSA2LjUwODk1IDExLjM3MTVDNy4wMDIzNyAxMS4zNzE1IDcuMzM1NDMgMTEuNTI1NyA3LjY4Njk5IDEyLjAxOTFDNy45OTUzOCAxMi40NTcgOC41MTM0NyAxMi42MzU5IDkuMDk5NDEgMTIuNjM1OUM5Ljg4MjcxIDEyLjYzNTkgMTAuMzYzOCAxMi4zMTUyIDEwLjM2MzggMTEuODc3M0MxMC4zNjM4IDExLjQ1NzggMTAuMDE4NCAxMS4yNzkgOS4wMTkyMyAxMS4xMDAxTDguMTI0OSAxMC45Mzk4QzYuMzU0NzUgMTAuNjI1MiA1LjM4NjQyIDkuNzMwODcgNS4zODY0MiA4LjM0OTI5QzUuMzg2NDIgNi41NjA2NCA2LjkyODM2IDUuNDMxOTQgOS4wNDM5IDUuNDMxOTRDMTAuODA3OSA1LjQzMTk0IDEyLjA3MjMgNi4wNTQ4OCAxMi41MzQ5IDcuMTY1MDhDMTIuNjA4OSA3LjM0Mzk1IDEyLjY0NTkgNy41MTA0OCAxMi42NDU5IDcuNzE0MDFDMTIuNjQ1OSA4LjMwNjEyIDEyLjIxNDEgOC43MDcwMiAxMS41NjAzIDguNzEzMTlDMTEuMDA1MiA4LjcxMzE5IDEwLjY1MzcgOC41MjE5OSAxMC4zMzkxIDguMDQ3MDdDMTAuMDQ5MiA3LjYwMjk5IDkuNjM2IDcuNDM2NDYgOS4wNzQ3NCA3LjQzNjQ2QzguMzQ2OTQgNy40MzY0NiA3Ljk3Njg4IDcuNzU3MTkgNy45NzY4OCA4LjE1ODA5QzcuOTc2ODggOC41NTg5OSA4LjM1OTI4IDguNzUwMiA5LjI0NzQzIDguOTEwNTZMMTAuMTQxOCA5LjA3MDkyQzEyLjA1MzggOS40MTYzMSAxMi45NTQzIDEwLjE5OTYgMTIuOTU0MyAxMS42NDI5WlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWN1cml0eUNoZWNrbGlzdEljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIuMTY2IDQuOTk5QTExLjk1NCAxMS45NTQgMCAwMDEwIDEuOTQ0IDExLjk1NCAxMS45NTQgMCAwMDE3LjgzNCA1Yy4xMS42NS4xNjYgMS4zMi4xNjYgMi4wMDEgMCA1LjIyNS0zLjM0IDkuNjctOCAxMS4zMTdDNS4zNCAxNi42NyAyIDEyLjIyNSAyIDdjMC0uNjgyLjA1Ny0xLjM1LjE2Ni0yLjAwMXptMTEuNTQxIDMuNzA4YTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTAuNTg2IDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcERpc3NlY3Rpb25JY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMS4zIDEuMDQ2QTEgMSAwIDAxMTIgMnY1aDRhMSAxIDAgMDEuODIgMS41NzNsLTcgMTBBMSAxIDAgMDE4IDE4di01SDRhMSAxIDAgMDEtLjgyLTEuNTczbDctMTBhMSAxIDAgMDExLjEyLS4zOHpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIYWNrZXJOZXdzSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTggMTBjMCAzLjg2Ni0zLjU4MiA3LTggN2E4Ljg0MSA4Ljg0MSAwIDAxLTQuMDgzLS45OEwyIDE3bDEuMzM4LTMuMTIzQzIuNDkzIDEyLjc2NyAyIDExLjQzNCAyIDEwYzAtMy44NjYgMy41ODItNyA4LTdzOCAzLjEzNCA4IDd6TTcgOUg1djJoMlY5em04IDBoLTJ2MmgyVjl6TTkgOWgydjJIOVY5elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXJJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE0XCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjM2MTcgMy4zNTQwMUMxNC4zNjg3IDMuNDk5OTkgMTQuMzcxMyAzLjY0Nzc3IDE0LjM3MTMgMy43OTM3NkMxNC4zNzEzIDguMjkwMzkgMTEuMDY5NiAxMy40NzM3IDUuMDMyMTcgMTMuNDczN0MzLjE3NzM5IDEzLjQ3MzcgMS40NTMwNCAxMi45MTA1IDAgMTEuOTQ0NUMwLjg1OTQ1NyAxMi4wNTIyIDEuNzMwOTcgMTEuOTgzMyAyLjU2NDczIDExLjc0MThDMy4zOTg0OSAxMS41MDAzIDQuMTc4MTQgMTEuMDkwOCA0Ljg1OTEzIDEwLjUzNjlDNC4xNzQyOCAxMC41MjM1IDMuNTEwNTkgMTAuMjg4NiAyLjk2MDg1IDkuODY1MTZDMi40MTExMiA5LjQ0MTY5IDIuMDAyODIgOC44NTA3OCAxLjc5MzA0IDguMTc1MDVDMi4yODUyNyA4LjI3MDQ0IDIuNzkxODYgOC4yNTA0MiAzLjI3NTY1IDguMTE2NDdDMi41MzI3MSA3Ljk2MDM1IDEuODY0NyA3LjU0Mjg1IDEuMzg0ODIgNi45MzQ3QzAuOTA0OTUxIDYuMzI2NTUgMC42NDI3MzQgNS41NjUxOCAwLjY0MjYwOSA0Ljc3OTU5VjQuNzM3MjRDMS4wOTg0MyA1LjAwMDAxIDEuNjA4MjMgNS4xNDYxNCAyLjEyOTU3IDUuMTYzNDdDMS40MzM4IDQuNjgyOCAwLjk0MTI4NCAzLjk0NTA3IDAuNzUyNTM2IDMuMTAwODhDMC41NjM3ODggMi4yNTY2OSAwLjY5MzA0MSAxLjM2OTY4IDEuMTEzOTEgMC42MjA4ODJDMS45MzgwOCAxLjY3MjAxIDIuOTY2MzkgMi41MzE3MyA0LjEzMjA3IDMuMTQ0MThDNS4yOTc3NCAzLjc1NjYzIDYuNTc0NyA0LjEwODEzIDcuODggNC4xNzU4NEM3LjgyMzUzIDMuOTIxMzcgNy43OTUyMyAzLjY2MTA3IDcuNzk1NjUgMy4zOTk5NkM3Ljc5NTY1IDIuOTUzNCA3Ljg4MDU0IDIuNTExMjEgOC4wNDU0OCAyLjA5ODY1QzguMjEwNDEgMS42ODYwOSA4LjQ1MjE1IDEuMzExMjQgOC43NTY5IDAuOTk1NTExQzkuMDYxNjUgMC42Nzk3ODQgOS40MjM0NCAwLjQyOTM2MyA5LjgyMTU5IDAuMjU4NTUyQzEwLjIxOTcgMC4wODc3NDE0IDEwLjY0NjUgLTAuMDAwMTEzODQgMTEuMDc3NCA0LjUxODEzZS0wNkMxMS41MjY1IC0wLjAwMDc1NDQ2NSAxMS45NzA5IDAuMDk0MTE4MyAxMi4zODMyIDAuMjc4NzM4QzEyLjc5NTQgMC40NjMzNTcgMTMuMTY2NyAwLjczMzc4NiAxMy40NzM5IDEuMDczMjVDMTQuMjA4OCAwLjkyMjQ4OSAxNC45MTM2IDAuNjQzMzY4IDE1LjU1ODMgMC4yNDc4MTVDMTUuMzEzMSAxLjAzNTU5IDE0LjgwMDEgMS43MDQyNCAxNC4xMTQ4IDIuMTI5MzdDMTQuNzY1NCAyLjA0OTQ0IDE1LjQwMDkgMS44NjkwMSAxNiAxLjU5NDFDMTUuNTU5OSAyLjI3NzU1IDE1LjAwNSAyLjg3MzYzIDE0LjM2MTcgMy4zNTQwMVYzLjM1NDAxWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdpdEh1Ykljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNyAxNlwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOC4wNjQ3OCAwQzMuNjExMzMgMCAwIDMuNjcyMiAwIDguMjAyNDhDMCAxMS44MjY2IDIuMzEwODEgMTQuOTAxMyA1LjUxNTE4IDE1Ljk4NTlDNS45MTgyMyAxNi4wNjE4IDYuMDY2MjIgMTUuODA4IDYuMDY2MjIgMTUuNTkxM0M2LjA2NjIyIDE1LjM5NTcgNi4wNTg3NSAxNC43NDk2IDYuMDU1MjggMTQuMDY0MkMzLjgxMTY0IDE0LjU2MDQgMy4zMzgyIDEzLjA5NjMgMy4zMzgyIDEzLjA5NjNDMi45NzEzNCAxMi4xNDgzIDIuNDQyNzUgMTEuODk2MSAyLjQ0Mjc1IDExLjg5NjFDMS43MTEwMyAxMS4zODcgMi40OTc5MSAxMS4zOTc1IDIuNDk3OTEgMTEuMzk3NUMzLjMwNzc1IDExLjQ1NTIgMy43MzQxNyAxMi4yNDI4IDMuNzM0MTcgMTIuMjQyOEM0LjQ1MzQ3IDEzLjQ5NjggNS42MjA4MyAxMy4xMzQzIDYuMDgxMDMgMTIuOTI0N0M2LjE1MzQyIDEyLjM5NDcgNi4zNjI0NSAxMi4wMzI1IDYuNTkzMDUgMTEuODI3OEM0LjgwMTc4IDExLjYyMDQgMi45MTg3MiAxMC45MTcxIDIuOTE4NzIgNy43NzQwNUMyLjkxODcyIDYuODc4NTEgMy4yMzM3NyA2LjE0Njc5IDMuNzQ5NjYgNS41NzIzNUMzLjY2NTkzIDUuMzY1NjEgMy4zODk4NyA0LjUzMTQ4IDMuODI3OCAzLjQwMTYzQzMuODI3OCAzLjQwMTYzIDQuNTA1MDEgMy4xODExOCA2LjA0NjE5IDQuMjQyNDNDNi42ODk1MSA0LjA2MDcgNy4zNzk0MiAzLjk2OTUzIDguMDY0NzggMy45NjY0NEM4Ljc1MDE4IDMuOTY5NTMgOS40NDA2MiA0LjA2MDcgMTAuMDg1MSA0LjI0MjQzQzExLjYyNDQgMy4xODExOCAxMi4zMDA3IDMuNDAxNjMgMTIuMzAwNyAzLjQwMTYzQzEyLjczOTcgNC41MzE0OCAxMi40NjM1IDUuMzY1NjEgMTIuMzc5OCA1LjU3MjM1QzEyLjg5NjkgNi4xNDY3OSAxMy4yMDk4IDYuODc4NTEgMTMuMjA5OCA3Ljc3NDA1QzEzLjIwOTggMTAuOTI0NSAxMS4zMjMxIDExLjYxODIgOS41MjcyOCAxMS44MjEzQzkuODE2NTcgMTIuMDc1OCAxMC4wNzQzIDEyLjU3NSAxMC4wNzQzIDEzLjM0MDNDMTAuMDc0MyAxNC40Mzc3IDEwLjA2NSAxNS4zMjEgMTAuMDY1IDE1LjU5MTNDMTAuMDY1IDE1LjgwOTYgMTAuMjEwMSAxNi4wNjUzIDEwLjYxODkgMTUuOTg0OEMxMy44MjE2IDE0Ljg5OSAxNi4xMjk0IDExLjgyNTQgMTYuMTI5NCA4LjIwMjQ4QzE2LjEyOTQgMy42NzIyIDEyLjUxODcgMCA4LjA2NDc4IDBaXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV4dGVybmFsTGlua0ljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI5XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgOVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuMDAxOTUgNi4zMjYxN1YwLjgyNDIxOUM5LjAwMTk1IDAuNDkwMjM0IDguNzkxMDIgMC4yNjc1NzggOC40NTExNyAwLjI2NzU3OEwyLjk0OTIyIDAuMjc5Mjk3QzIuNjIxMDkgMC4yNzkyOTcgMi40MTAxNiAwLjUxOTUzMSAyLjQxMDE2IDAuNzk0OTIyQzIuNDEwMTYgMS4wNzAzMSAyLjY1MDM5IDEuMzA0NjkgMi45MjU3OCAxLjMwNDY5SDQuNjY2MDJMNy40NTUwOCAxLjE5OTIyTDYuMzk0NTMgMi4xMzY3MkwxLjE2MjExIDcuMzgwODZDMS4wNTY2NCA3LjQ4NjMzIDAuOTk4MDQ3IDcuNjE1MjMgMC45OTgwNDcgNy43MzgyOEMwLjk5ODA0NyA4LjAxMzY3IDEuMjQ0MTQgOC4yNzczNCAxLjUzMTI1IDguMjc3MzRDMS42NjYwMiA4LjI3NzM0IDEuNzg5MDYgOC4yMjQ2MSAxLjg5NDUzIDguMTE5MTRMNy4xMzI4MSAyLjg3NUw4LjA3NjE3IDEuODE0NDVMNy45NjQ4NCA0LjQ4MDQ3VjYuMzQ5NjFDNy45NjQ4NCA2LjYxOTE0IDguMTk5MjIgNi44NjUyMyA4LjQ4NjMzIDYuODY1MjNDOC43NjE3MiA2Ljg2NTIzIDkuMDAxOTUgNi42MzY3MiA5LjAwMTk1IDYuMzI2MTdaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYXJ0SWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjE1XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUgMTVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk03LjUwMDAxIDEzLjEyNUM3LjA5Njg5IDEyLjc2NzUgNi42NDEyNiAxMi4zOTU2IDYuMTU5MzkgMTJINi4xNTMxNEM0LjQ1NjI2IDEwLjYxMjUgMi41MzMxNCA5LjA0MjQ3IDEuNjgzNzYgNy4xNjEyMkMxLjQwNDcxIDYuNTYyMyAxLjI1NjgzIDUuOTEwNjcgMS4yNTAwMSA1LjI0OTk3QzEuMjQ4MTQgNC4zNDM0IDEuNjExNzUgMy40NzQzNCAyLjI1ODY0IDIuODM5MkMyLjkwNTU0IDIuMjA0MDYgMy43ODExMyAxLjg1NjQ3IDQuNjg3NTEgMS44NzQ5N0M1LjQyNTQxIDEuODc2MTQgNi4xNDc0MSAyLjA4OTQgNi43Njc1MSAyLjQ4OTM1QzcuMDM5OTkgMi42NjYyIDcuMjg2NTMgMi44ODAxMyA3LjUwMDAxIDMuMTI0OTdDNy43MTQ2OSAyLjg4MTA5IDcuOTYxMjkgMi42NjcyOSA4LjIzMzE0IDIuNDg5MzVDOC44NTI5NyAyLjA4OTMyIDkuNTc0OCAxLjg3NjA0IDEwLjMxMjUgMS44NzQ5N0MxMS4yMTg5IDEuODU2NDcgMTIuMDk0NSAyLjIwNDA2IDEyLjc0MTQgMi44MzkyQzEzLjM4ODMgMy40NzQzNCAxMy43NTE5IDQuMzQzNCAxMy43NSA1LjI0OTk3QzEzLjc0MzYgNS45MTE3MyAxMy41OTU3IDYuNTY0NDcgMTMuMzE2MyA3LjE2NDM1QzEyLjQ2NjkgOS4wNDU2IDEwLjU0NDQgMTAuNjE1IDguODQ3NTEgMTJMOC44NDEyNiAxMi4wMDVDOC4zNTg3NiAxMi4zOTgxIDcuOTAzNzYgMTIuNzcgNy41MDA2NCAxMy4xM0w3LjUwMDAxIDEzLjEyNVpNNC42ODc1MSAzLjEyNDk3QzQuMTA1MzMgMy4xMTc2OCAzLjU0MzgxIDMuMzQwNSAzLjEyNTAxIDMuNzQ0OTdDMi43MjE1MSA0LjE0MTMyIDIuNDk1OTkgNC42ODQzNyAyLjQ5OTk2IDUuMjQ5OTdDMi41MDcwOSA1LjczMTUzIDIuNjE2MTYgNi4yMDYxMyAyLjgyMDAxIDYuNjQyNDdDMy4yMjA5NiA3LjQ1NDE2IDMuNzYxOTYgOC4xODg3NSA0LjQxODE0IDguODEyNDdDNS4wMzc1MSA5LjQzNzQ3IDUuNzUwMDEgMTAuMDQyNSA2LjM2NjI2IDEwLjU1MTJDNi41MzY4OSAxMC42OTE4IDYuNzEwNjQgMTAuODMzNyA2Ljg4NDM5IDEwLjk3NTZMNi45OTM3NiAxMS4wNjVDNy4xNjA2NCAxMS4yMDEyIDcuMzMzMTQgMTEuMzQyNSA3LjUwMDAxIDExLjQ4MTJMNy41MDgxNCAxMS40NzM3TDcuNTExODkgMTEuNDcwNkg3LjUxNTY0TDcuNTIxMjYgMTEuNDY2Mkg3LjUyNDM5SDcuNTI3NTFMNy41Mzg3NiAxMS40NTY4TDcuNTY0MzkgMTEuNDM2Mkw3LjU2ODc2IDExLjQzMjVMNy41NzU2NCAxMS40Mjc1SDcuNTc5MzlMNy41ODUwMSAxMS40MjI1TDguMDAwMDEgMTEuMDgxOEw4LjEwODc2IDEwLjk5MjVDOC4yODQzOSAxMC44NDkzIDguNDU4MTQgMTAuNzA3NSA4LjYyODc2IDEwLjU2NjhDOS4yNDUwMSAxMC4wNTgxIDkuOTU4MTQgOS40NTM3MiAxMC41Nzc1IDguODI1NkMxMS4yMzM4IDguMjAyMiAxMS43NzQ4IDcuNDY3NzkgMTIuMTc1NiA2LjY1NjIyQzEyLjM4MzIgNi4yMTYxIDEyLjQ5MzggNS43MzY1NCAxMi41IDUuMjQ5OTdDMTIuNTAyNiA0LjY4NjEyIDEyLjI3NzIgNC4xNDUxNSAxMS44NzUgMy43NDk5N0MxMS40NTcgMy4zNDM2NyAxMC44OTU0IDMuMTE5MDIgMTAuMzEyNSAzLjEyNDk3QzkuNjAxMjIgMy4xMTg5MyA4LjkyMTIyIDMuNDE3MDggOC40NDM3NiAzLjk0NDM1TDcuNTAwMDEgNS4wMzE4NUw2LjU1NjI2IDMuOTQ0MzVDNi4wNzg4IDMuNDE3MDggNS4zOTg4MSAzLjExODkzIDQuNjg3NTEgMy4xMjQ5N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhcnRGaWxsSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjE1XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUgMTVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xLjI1IDUuMjUwMDlDMS4yNDk4NCA0LjM0NDA1IDEuNjEzOTkgMy40NzYgMi4yNjA1MSAyLjg0MTIzQzIuOTA3MDMgMi4yMDY0NyAzLjc4MTYxIDEuODU4MzEgNC42ODc1IDEuODc1MDlDNS43NjA4MyAxLjg2OTM5IDYuNzg0OTkgMi4zMjQ1OCA3LjUgMy4xMjUwOUM4LjIxNTAxIDIuMzI0NTggOS4yMzkxNyAxLjg2OTM5IDEwLjMxMjUgMS44NzUwOUMxMS4yMTg0IDEuODU4MzEgMTIuMDkzIDIuMjA2NDcgMTIuNzM5NSAyLjg0MTIzQzEzLjM4NiAzLjQ3NiAxMy43NTAyIDQuMzQ0MDUgMTMuNzUgNS4yNTAwOUMxMy43NSA4LjU5NzU5IDkuNzYzMTMgMTEuMTI1MSA3LjUgMTMuMTI1MUM1LjI0MTg4IDExLjEwODIgMS4yNSA4LjYwMDA5IDEuMjUgNS4yNTAwOVpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxOYXZpZ2F0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Byb3ZpZGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uTGluayh7IGxpbms6IHtcbiAgICBocmVmLFxuICAgIGxhYmVsLFxuICAgIGljb246IEljb24sXG4gICAgdHJhaWxpbmdBY2Nlc3Nvcnk6IEFjY2Vzc29yeSxcbiAgICB0cmFpbGluZ0FjdGlvbjogQWN0aW9uLFxuICAgIGlzQWN0aXZlLFxuICAgIGlzRXh0ZXJuYWwsXG59LFxufSkge1xuICAgIGNvbnN0IHsgc2V0SXNPcGVuIH0gPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbE5hdmlnYXRpb25Db250ZXh0KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdHJldGNoIHNwYWNlLXgtMVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8TGluayB0bz17aHJlZn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpc0V4dGVybmFsID8gJ19ibGFuaycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlbD17aXNFeHRlcm5hbCA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIHNwYWNlLXgtMyByb3VuZGVkLW1kIHB4LTIgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gICR7aXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWJsYWNrIHRleHQtd2hpdGUgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMjAwIHNtOmhvdmVyOmJnLWdyYXktMjAwIHNtOmhvdmVyOnRleHQtZ3JheS05MDAgc206ZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBzbTpkYXJrOmhvdmVyOnRleHQtZ3JheS0yMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtMVwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtBY2Nlc3NvcnkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCB3LTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTQwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2Nlc3NvcnkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7QWN0aW9uICYmIDxBY3Rpb24gLz59XG4gICAgICAgIDwvbGk+XG4gICAgKVxufSIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgR2xvYmFsTmF2aWdhdGlvbkNvbnRleHQgfSBmcm9tICcuLi9Qcm92aWRlcnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyT3ZlcmxheSgpIHtcbiAgICBjb25zdCB7IGlzT3Blbiwgc2V0SXNPcGVuIH0gPSBSZWFjdC51c2VDb250ZXh0KEdsb2JhbE5hdmlnYXRpb25Db250ZXh0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCB6LTIwIGJnLWJsYWNrIGJnLW9wYWNpdHktMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgZGFyazpiZy1vcGFjaXR5LTUwICR7aXNPcGVuXG4gICAgICAgICAgICAgICAgPyAncG9pbnRlci1ldmVudHMtYXV0byBvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgICA6ICdwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnRybyc7XG5pbXBvcnQgTGlzdERldGFpbFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzL0xpc3REZXRhaWxWaWV3JztcbmltcG9ydCBTaXRlTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cy9TaXRlTGF5b3V0JztcblxuY29uc3QgV3JpdGluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1tLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbWQ6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCBib3JkZXItb3BhY2l0eS02MCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGc6aC00OCBtZDpoLTM2IHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiIHNyYz1cImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vNzIweDQwMFwiIGFsdD1cImJsb2dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlc3QgdGV4dC14cyB0aXRsZS1mb250IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDAgbWItMVwiPkNBVEVHT1JZPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLWZvbnQgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIG1iLTNcIj5UaGUgQ2F0YWx5emVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZGluZy1yZWxheGVkIG1iLTNcIj5QaG90byBib290aCBmYW0ga2luZm9sayBjb2xkLXByZXNzZWQgc3JpcmFjaGEgbGVnZ2luZ3MgamlhbmJpbmcgbWljcm9kb3NpbmcgdG91c2xlZCB3YWlzdGNvYXQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTUwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWItMiBsZzptYi0wXCI+TGVhcm4gTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDVsNyA3LTcgN1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbXItMyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbGc6bWwtYXV0byBtZDptbC0wIG1sLWF1dG8gbGVhZGluZy1ub25lIHRleHQtc20gcHItMyBweS0xIGJvcmRlci1yLTIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTJzNC04IDExLTggMTEgOCAxMSA4LTQgOC0xMSA4LTExLTgtMTEtOHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiM1wiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjEuMktcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGxlYWRpbmctbm9uZSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgMTEuNWE4LjM4IDguMzggMCAwMS0uOSAzLjggOC41IDguNSAwIDAxLTcuNiA0LjcgOC4zOCA4LjM4IDAgMDEtMy44LS45TDMgMjFsMS45LTUuN2E4LjM4IDguMzggMCAwMS0uOS0zLjggOC41IDguNSAwIDAxNC43LTcuNiA4LjM4IDguMzggMCAwMTMuOC0uOWguNWE4LjQ4IDguNDggMCAwMTggOHYuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEludHJvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgICA8cD5IZWxsbywgbXkgbmFtZSBpcyBMdWlzIEp1YXJleiE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybzsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGlzdERldGFpbFZpZXcgPSAoeyBsaXN0LCBkZXRhaWwsIGhhc0RldGFpbCA9IGZhbHNlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgICB7bGlzdCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1kb3RzICR7aGFzRGV0YWlsID8gJ2hpZGRlbiBsZzpmbGV4JyA6ICdtaW4taC1zY3JlZW4gdy1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZGV0YWlsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3REZXRhaWxWaWV3OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm8nO1xuaW1wb3J0IExpc3REZXRhaWxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0RGV0YWlsVmlldyc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGlzdERldGFpbFZpZXcgbGlzdD17bnVsbH0gaGFzRGV0YWlsIGRldGFpbD17PEludHJvIC8+fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnRybyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb1wiO1xuaW1wb3J0IExpc3REZXRhaWxWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dHMvTGlzdERldGFpbFZpZXdcIjtcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhcHBTdHlsZXMgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdW5kZXJsaW5lXCI+XG4gICAgICAgIEhlbGxvIHdvcmxkIVxuICAgICAgPC9oMT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIEx1aXNPUyE8L2gxPlxuICAgICAgPExpc3REZXRhaWxWaWV3IGxpc3Q9e251bGx9IGhhc0RldGFpbCBkZXRhaWw9ezxJbnRybyAvPn0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExpc3REZXRhaWxWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0RGV0YWlsVmlldyc7XG5pbXBvcnQgeyBEZXRhaWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0RGV0YWlsL0RldGFpbFwiO1xuXG5mdW5jdGlvbiBNaXNzaW5nUGFnZSgpIHtcbiAgICByZXR1cm4gPERldGFpbC5OdWxsIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgcmV0dXJuIDxMaXN0RGV0YWlsVmlldyBsaXN0PXtudWxsfSBoYXNEZXRhaWwgZGV0YWlsPXs8TWlzc2luZ1BhZ2UgLz59IC8+XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb21wYXNzIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXIgfSBmcm9tICcuLi9Mb2FkaW5nU3Bpbm5lcic7XG5pbXBvcnQgeyBUaXRsZUJhciB9IGZyb20gJy4vVGl0bGVCYXInO1xuXG5mdW5jdGlvbiBDb250ZW50Q29udGFpbmVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctM3hsIHB4LTQgcHktOCBwYi0xMCBtZDpweC04XCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGlkPVwibWFpblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IG1heC1oLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2wgb3ZlcmZsb3cteS1hdXRvIGJnLXdoaXRlIGRhcms6YmctYmxhY2tcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgIClcbn1cbilcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCIgey4uLnByb3BzfSAvPlxufVxuXG5jb25zdCBUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDFcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2FucyB0ZXh0LTJ4bCBmb250LWJvbGQgeGw6dGV4dC0zeGxcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgIClcbn0pXG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBOdWxsKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGVCYXIgdGl0bGU9XCJOb3QgZm91bmRcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS02IHB4LTggdGV4dC1jZW50ZXIgbGc6cHgtMTZcIj5cbiAgICAgICAgICAgICAgICA8Q29tcGFzcyBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiIHNpemU9ezMyfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgeW91IHNlZWsgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10ZXJ0aWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF5YmUgdGhpcyBsaW5rIGlzIGJyb2tlbi4gTWF5YmUgc29tZXRoaW5nIHdhcyBkZWxldGVkLCBvciBtb3ZlZC4gSW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFueSBjYXNlLCB0aGVyZVx1MjAxOXMgbm90aGluZyB0byBzZWUgaGVyZS4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+R28gaG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBEZXRhaWwgPSB7XG4gICAgQ29udGFpbmVyLFxuICAgIENvbnRlbnRDb250YWluZXIsXG4gICAgSGVhZGVyLFxuICAgIFRpdGxlLFxuICAgIExvYWRpbmcsXG4gICAgTnVsbCxcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIExvYWRpbmdTcGlubmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBoLTMuNSB3LTMuNSBhbmltYXRlLXNwaW5cIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIlxuICAgICAgICAgICAgICAgIGN4PVwiMTJcIlxuICAgICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICAgIHI9XCIxMFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxTQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sT0FBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFB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
