"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/Context/userContext.js":
/*!****************************************!*\
  !*** ./src/app/Context/userContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteGuardContext */ \"(app-pages-browser)/./src/app/Context/RouteGuardContext.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { userId } = (0,_RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__.useRouteGuardContext)();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sssssssssssssssssssssssssssss\");\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        setLoginUser(user);\n    });\n    console.log(userId);\n    // useEffect(() => {\n    //   const getTeachersList = async () => {\n    //     const data = await getDocs(query(teachersCollectionRef, where('userId', '==', 'zZfRakIcCBbEkW46oFNp1Xav17r2')))\n    //     //await getDocs(teachersCollectionRef)\n    //     const filteredData = data.docs.map((doc) => (\n    //         {\n    //             ...doc.data(),\n    //             id: doc.id\n    //         }\n    //     ))\n    //     //setProfile(filteredData[0])\n    //     console.log(filteredData)\n    // }\n    //     getTeachersList()\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser: [\n                loginUser,\n                setLoginUser\n            ],\n            profile: [\n                profile,\n                setProfile\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"4T3xcgft8l7SMY5ZmdjMHEgGs7A=\", false, function() {\n    return [\n        _RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__.useRouteGuardContext\n    ];\n});\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV1RTtBQUNaO0FBQ1k7QUFDL0I7QUFDbUI7QUFHM0QsTUFBTVksNEJBQWNaLG9EQUFhQSxDQUFDLENBQUM7QUFJNUIsTUFBTWEsc0JBQXVCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUk3QyxNQUFNLEVBQUNDLE1BQU0sRUFBRSxHQUFHSix3RUFBb0JBO0lBSXBDLGFBQWE7SUFDYixNQUFNSyx3QkFBd0JWLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUcvQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBR3ZDLE1BQU1rQixPQUFPakIsc0RBQU9BO0lBR3BCQyxpRUFBa0JBLENBQUNnQixNQUFNLENBQUNDO1FBRTlCSixhQUFhSTtJQUdiO0lBSUFDLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFRUixvQkFBb0I7SUFFcEIsMENBQTBDO0lBQzFDLHNIQUFzSDtJQUV0SCw2Q0FBNkM7SUFFN0Msb0RBQW9EO0lBQ3BELFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyxJQUFJO0lBSUosd0JBQXdCO0lBRXhCLFlBQVk7SUFLWixxQkFDSSw4REFBQ0gsWUFBWWEsUUFBUTtRQUFFQyxPQUFPO1lBQUVULFdBQVc7Z0JBQUNBO2dCQUFXQzthQUFhO1lBQUVDLFNBQVM7Z0JBQUNBO2dCQUFTQzthQUFXO1FBQUM7a0JBRWhHTjs7Ozs7O0FBR2IsRUFBRTtHQXBFV0Q7O1FBSVNGLG9FQUFvQkE7OztLQUo3QkU7QUFzRU4sTUFBTWMsaUJBQWlCOztJQUFNMUIsT0FBQUEsaURBQVVBLENBQUNXO0FBQVcsRUFBRTtJQUEvQ2UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db250ZXh0L3VzZXJDb250ZXh0LmpzPzU4YzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlR3VhcmRDb250ZXh0IH0gZnJvbSBcIi4vUm91dGVHdWFyZENvbnRleHRcIjtcclxuXHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHt1c2VySWQgfSA9IHVzZVJvdXRlR3VhcmRDb250ZXh0KClcclxuIFxyXG5cclxuXHJcbiAgICAgIC8vRklSRUJBU0UgREJcclxuICAgICAgY29uc3QgdGVhY2hlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ0ZWFjaGVyc1wiLClcclxuICBcclxuXHJcbiAgICBjb25zdCBbbG9naW5Vc2VyLCBzZXRMb2dpblVzZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoJ3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzJylcclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgXHJcbnNldExvZ2luVXNlcih1c2VyKVxyXG4gICAgICBcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyh1c2VySWQpXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAvLyAgIGNvbnN0IGdldFRlYWNoZXJzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhxdWVyeSh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYsIHdoZXJlKCd1c2VySWQnLCAnPT0nLCAnelpmUmFrSWNDQmJFa1c0Nm9GTnAxWGF2MTdyMicpKSlcclxuXHJcbiAgICAvLyAgICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICAvLyAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAvLyAgICAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApKVxyXG4gICAgLy8gICAgIC8vc2V0UHJvZmlsZShmaWx0ZXJlZERhdGFbMF0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZmlsdGVyZWREYXRhKVxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgLy8gICAgIGdldFRlYWNoZXJzTGlzdCgpXHJcblxyXG4gICAgLy8gICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgIHZhbHVlPXt7IGxvZ2luVXNlcjogW2xvZ2luVXNlciwgc2V0TG9naW5Vc2VyXSwgcHJvZmlsZTogW3Byb2ZpbGUsIHNldFByb2ZpbGVdIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VyQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsImRiIiwidXNlUm91dGVHdWFyZENvbnRleHQiLCJVc2VyQ29udGV4dCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJZCIsInRlYWNoZXJzQ29sbGVjdGlvblJlZiIsImxvZ2luVXNlciIsInNldExvZ2luVXNlciIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiYXV0aCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});