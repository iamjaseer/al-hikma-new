"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./public/styles/theme.min.css":
/*!*************************************!*\
  !*** ./public/styles/theme.min.css ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"63bade4334c0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9zdHlsZXMvdGhlbWUubWluLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0eWxlcy90aGVtZS5taW4uY3NzPzI1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2M2JhZGU0MzM0YzBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/styles/theme.min.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Context/userContext.js":
/*!****************************************!*\
  !*** ./src/app/Context/userContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileContext */ \"(app-pages-browser)/./src/app/Context/profileContext.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [activeUser, setActiveUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        const loggedUser = user;\n        setLoginUser(loggedUser);\n    // if (user) {\n    //     router.push(`/dashboard`)\n    // } else {\n    //   router.push(`/login`)\n    //   console.log('Signed Out')\n    // }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser,\n            setLoginUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"ETMIQm/SBOU137a1krRY9tFgoG8=\");\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUU7QUFDWjtBQUNOO0FBR3JELE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBQyxDQUFDO0FBSTVCLE1BQU1RLHNCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFLN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBO0lBRzVDLE1BQU1XLE9BQU9WLHNEQUFPQTtJQUdwQkMsaUVBQWtCQSxDQUFDUyxNQUFNLENBQUNDO1FBR3RCLE1BQU1DLGFBQWFEO1FBRW5CSixhQUFhSztJQU1iLGNBQWM7SUFFZCxnQ0FBZ0M7SUFFaEMsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsSUFBSTtJQUNOO0lBU0YscUJBQ0ksOERBQUNULFlBQVlVLFFBQVE7UUFBQ0MsT0FBTztZQUFFUjtZQUFXQztRQUFhO2tCQUNsREY7Ozs7OztBQUdiLEVBQUU7R0E3Q1dEO0tBQUFBO0FBK0NOLE1BQU1XLGlCQUFpQjs7SUFBTWxCLE9BQUFBLGlEQUFVQSxDQUFDTTtBQUFXLEVBQUU7SUFBL0NZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcz81OGMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyB1c2VQcm9maWxlQ29udGV4dCB9IGZyb20gXCIuL3Byb2ZpbGVDb250ZXh0XCI7XHJcblxyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9ICAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG5cclxuICBcclxuXHJcbiAgICBjb25zdCBbbG9naW5Vc2VyLCBzZXRMb2dpblVzZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW2FjdGl2ZVVzZXIsIHNldEFjdGl2ZVVzZXJdID0gdXNlU3RhdGUoKVxyXG5cclxuXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuXHJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VyXHJcblxyXG4gICAgICAgIHNldExvZ2luVXNlcihsb2dnZWRVc2VyKVxyXG5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gIFxyXG5cclxuICAgICAgICAvLyBpZiAodXNlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZGApXHJcbiAgXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHJvdXRlci5wdXNoKGAvbG9naW5gKVxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ1NpZ25lZCBPdXQnKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgIFxyXG5cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dpblVzZXIsIHNldExvZ2luVXNlciB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXNlckNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VQcm9maWxlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibG9naW5Vc2VyIiwic2V0TG9naW5Vc2VyIiwiYWN0aXZlVXNlciIsInNldEFjdGl2ZVVzZXIiLCJhdXRoIiwidXNlciIsImxvZ2dlZFVzZXIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVXNlckNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});