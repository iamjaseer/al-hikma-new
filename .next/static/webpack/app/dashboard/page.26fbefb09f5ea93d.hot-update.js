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

/***/ "(app-pages-browser)/./src/app/Context/userContext.js":
/*!****************************************!*\
  !*** ./src/app/Context/userContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileContext */ \"(app-pages-browser)/./src/app/Context/profileContext.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [activeUser, setActiveUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        setActiveUser(user);\n    // if (user) {\n    //     router.push(`/dashboard`)\n    // } else {\n    //   router.push(`/login`)\n    //   console.log('Signed Out')\n    // }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoginUser(activeUser);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser,\n            setLoginUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"8Uxq+JgKjYddi9E2Q9KhZUqrEEA=\");\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUU7QUFDWjtBQUNOO0FBR3JELE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBQyxDQUFDO0FBSTVCLE1BQU1RLHNCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFLN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBO0lBRzVDLE1BQU1XLE9BQU9WLHNEQUFPQTtJQUdwQkMsaUVBQWtCQSxDQUFDUyxNQUFNLENBQUNDO1FBR3RCRixjQUFjRTtJQU1kLGNBQWM7SUFFZCxnQ0FBZ0M7SUFFaEMsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsSUFBSTtJQUNOO0lBR0RiLGdEQUFTQSxDQUFDO1FBRVBTLGFBQWFDO0lBR2hCLEdBQUcsRUFBRTtJQU1OLHFCQUNJLDhEQUFDTCxZQUFZUyxRQUFRO1FBQUNDLE9BQU87WUFBRVA7WUFBV0M7UUFBYTtrQkFDbERGOzs7Ozs7QUFHYixFQUFFO0dBaERXRDtLQUFBQTtBQWtETixNQUFNVSxpQkFBaUI7O0lBQU1qQixPQUFBQSxpREFBVUEsQ0FBQ007QUFBVyxFQUFFO0lBQS9DVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbnRleHQvdXNlckNvbnRleHQuanM/NThjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgdXNlUHJvZmlsZUNvbnRleHQgfSBmcm9tIFwiLi9wcm9maWxlQ29udGV4dFwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0UHJvdmlkZXIgPSAgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgY29uc3QgW2xvZ2luVXNlciwgc2V0TG9naW5Vc2VyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFthY3RpdmVVc2VyLCBzZXRBY3RpdmVVc2VyXSA9IHVzZVN0YXRlKClcclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBzZXRBY3RpdmVVc2VyKHVzZXIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgXHJcblxyXG4gICAgICAgIC8vIGlmICh1c2VyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkYClcclxuICBcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgcm91dGVyLnB1c2goYC9sb2dpbmApXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnU2lnbmVkIE91dCcpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9KTtcclxuXHJcbiAgIFxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0TG9naW5Vc2VyKGFjdGl2ZVVzZXIpXHJcblxyXG5cclxuICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxvZ2luVXNlciwgc2V0TG9naW5Vc2VyIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VyQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZVByb2ZpbGVDb250ZXh0IiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2dpblVzZXIiLCJzZXRMb2dpblVzZXIiLCJhY3RpdmVVc2VyIiwic2V0QWN0aXZlVXNlciIsImF1dGgiLCJ1c2VyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});