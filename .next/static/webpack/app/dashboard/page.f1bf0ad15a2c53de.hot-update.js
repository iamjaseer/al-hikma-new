"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/Context/RouteGuardContext.js":
/*!**********************************************!*\
  !*** ./src/app/Context/RouteGuardContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouteGuardContextProvider: function() { return /* binding */ RouteGuardContextProvider; },\n/* harmony export */   useRouteGuardContext: function() { return /* binding */ useRouteGuardContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ RouteGuardContextProvider,useRouteGuardContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nuseRouteGuardContext;\nconst RouteGuardContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst RouteGuardContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //CONTEXT\n    const { loginUser } = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();\n    const { user, setUser } = useRouteGuardContext();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authCheck();\n    }, []);\n    function authCheck() {\n        if (loginUser) {\n            router.push(\"/dashboard\");\n        } else {\n            router.push(\"/login\");\n        }\n    }\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RouteGuardContext.Provider, {\n        value: {\n            loading,\n            setLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\RouteGuardContext.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RouteGuardContextProvider, \"Ot70WCBbVEs2qhl5i/q6GD0U0LU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext,\n        useRouteGuardContext\n    ];\n});\n_c = RouteGuardContextProvider;\nconst useRouteGuardContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteGuardContext);\n};\n_s1(useRouteGuardContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"RouteGuardContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9Sb3V0ZUd1YXJkQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUU7QUFDeEI7QUFDSjtBQUczQ007QUFFQSxNQUFNQyxrQ0FBb0JQLG9EQUFhQSxDQUFDLENBQUM7QUFJbEMsTUFBTVEsNEJBQTRCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUVsRCxNQUFNQyxTQUFTTCwwREFBU0E7SUFFdkIsU0FBUztJQUNULE1BQU0sRUFBRU0sU0FBUyxFQUFFLEdBQUdQLDREQUFjQTtJQUNwQyxNQUFNLEVBQUVRLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO0lBRzFCSixnREFBU0EsQ0FBQztRQUNQWTtJQUNKLEdBQUcsRUFBRTtJQUdMLFNBQVNBO1FBQ1AsSUFBSUgsV0FBVztZQUNSRCxPQUFPSyxJQUFJLENBQUU7UUFFZixPQUFPO1lBQ05MLE9BQU9LLElBQUksQ0FBRTtRQUVsQjtJQUNIO0lBRUEsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBR3ZDLHFCQUNJLDhEQUFDSSxrQkFBa0JXLFFBQVE7UUFBQ0MsT0FBTztZQUFFSDtZQUFTQztRQUFXO2tCQUNyRFI7Ozs7OztBQUdaLEVBQUU7R0FoQ1dEOztRQUVNSCxzREFBU0E7UUFHREQsd0RBQWNBO1FBQ1ZFOzs7S0FObEJFO0FBa0NOLE1BQU1GLHVCQUF1Qjs7SUFBTUwsT0FBQUEsaURBQVVBLENBQUNNO0FBQWlCLEVBQUU7SUFBM0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dC9Sb3V0ZUd1YXJkQ29udGV4dC5qcz9lMGZhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcblxyXG51c2VSb3V0ZUd1YXJkQ29udGV4dCBcclxuXHJcbmNvbnN0IFJvdXRlR3VhcmRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRlR3VhcmRDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgIC8vQ09OVEVYVFxyXG4gICAgIGNvbnN0IHsgbG9naW5Vc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpXHJcbiAgICAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VSb3V0ZUd1YXJkQ29udGV4dCgpXHJcblxyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF1dGhDaGVjaygpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGF1dGhDaGVjaygpIHtcclxuICAgICAgaWYgKGxvZ2luVXNlcikge1xyXG4gICAgICAgICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmRgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luYClcclxuICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVHdWFyZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9hZGluZywgc2V0TG9hZGluZyB9fT5cclxuICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Sb3V0ZUd1YXJkQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VSb3V0ZUd1YXJkQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoUm91dGVHdWFyZENvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJ1c2VSb3V0ZUd1YXJkQ29udGV4dCIsIlJvdXRlR3VhcmRDb250ZXh0IiwiUm91dGVHdWFyZENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwibG9naW5Vc2VyIiwidXNlciIsInNldFVzZXIiLCJhdXRoQ2hlY2siLCJwdXNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/RouteGuardContext.js\n"));

/***/ })

});