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
var app_default = "/build/_assets/app-ZJQQKRYN.css";

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
  const links2 = [
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
      href: "https://github.com/brianlovin",
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
  }, links2.map((link, i) => {
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
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-900"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-primary font-semibold",
    href: "#main"
  }, "Skip to content"), /* @__PURE__ */ React.createElement("span", null, "(if available)"), /* @__PURE__ */ React.createElement("span", null, "or"), /* @__PURE__ */ React.createElement("a", {
    className: "text-primary font-semibold",
    href: "#list"
  }, "jump to list"), /* @__PURE__ */ React.createElement("span", null, "(if available)")), /* @__PURE__ */ React.createElement(SiteLayout_default, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), false));
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
  return /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("h1", null, "Posts will go here"));
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
  default: () => Index
});
init_react();
var import_react10 = __toModule(require("react"));
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
