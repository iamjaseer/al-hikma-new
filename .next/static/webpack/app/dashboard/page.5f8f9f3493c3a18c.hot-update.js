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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteGuardContext */ \"(app-pages-browser)/./src/app/Context/RouteGuardContext.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { setUser } = (0,_RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__.useRouteGuardContext)();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sssssssssssssssssssssssssssss\");\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        setLoginUser(user);\n    });\n    console.log(\"sdfsdfsdfsdfsdfsdfsdfsd\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTeachersList = async ()=>{\n            const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", \"zZfRakIcCBbEkW46oFNp1Xav17r2\")));\n            //await getDocs(teachersCollectionRef)\n            const filteredData = data.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                }));\n            //setProfile(filteredData[0])\n            console.log(filteredData);\n        };\n        getTeachersList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser: [\n                loginUser,\n                setLoginUser\n            ],\n            profile: [\n                profile,\n                setProfile\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"IUxYS0n53qPWbB5BLJpNRdQr2EA=\", false, function() {\n    return [\n        _RouteGuardContext__WEBPACK_IMPORTED_MODULE_5__.useRouteGuardContext\n    ];\n});\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV1RTtBQUNaO0FBQ1k7QUFDL0I7QUFDbUI7QUFHM0QsTUFBTVksNEJBQWNaLG9EQUFhQSxDQUFDLENBQUM7QUFJNUIsTUFBTWEsc0JBQXVCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUc3QyxNQUFNLEVBQUNDLE9BQU8sRUFBQyxHQUFHSix3RUFBb0JBO0lBR3BDLGFBQWE7SUFDYixNQUFNSyx3QkFBd0JWLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUcvQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBR3ZDLE1BQU1rQixPQUFPakIsc0RBQU9BO0lBR3BCQyxpRUFBa0JBLENBQUNnQixNQUFNLENBQUNDO1FBRTlCSixhQUFhSTtJQUdiO0lBSUFDLFFBQVFDLEdBQUcsQ0FBQztJQVFSdEIsZ0RBQVNBLENBQUM7UUFFUixNQUFNdUIsa0JBQWtCO1lBQ3RCLE1BQU1DLE9BQU8sTUFBTW5CLDJEQUFPQSxDQUFDQyx5REFBS0EsQ0FBQ1EsdUJBQXVCUCx5REFBS0EsQ0FBQyxVQUFVLE1BQU07WUFFOUUsc0NBQXNDO1lBRXRDLE1BQU1rQixlQUFlRCxLQUFLRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUNoQztvQkFDSSxHQUFHQSxJQUFJSixJQUFJLEVBQUU7b0JBQ2JLLElBQUlELElBQUlDLEVBQUU7Z0JBQ2Q7WUFFSiw2QkFBNkI7WUFDN0JSLFFBQVFDLEdBQUcsQ0FBQ0c7UUFDaEI7UUFJSUY7SUFFRixHQUFHLEVBQUU7SUFLUCxxQkFDSSw4REFBQ2IsWUFBWW9CLFFBQVE7UUFBRUMsT0FBTztZQUFFaEIsV0FBVztnQkFBQ0E7Z0JBQVdDO2FBQWE7WUFBRUMsU0FBUztnQkFBQ0E7Z0JBQVNDO2FBQVc7UUFBQztrQkFFaEdOOzs7Ozs7QUFHYixFQUFFO0dBbEVXRDs7UUFHU0Ysb0VBQW9CQTs7O0tBSDdCRTtBQW9FTixNQUFNcUIsaUJBQWlCOztJQUFNakMsT0FBQUEsaURBQVVBLENBQUNXO0FBQVcsRUFBRTtJQUEvQ3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcz81OGMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZUd1YXJkQ29udGV4dCB9IGZyb20gXCIuL1JvdXRlR3VhcmRDb250ZXh0XCI7XHJcblxyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9ICAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHtzZXRVc2VyfSA9IHVzZVJvdXRlR3VhcmRDb250ZXh0KClcclxuXHJcblxyXG4gICAgICAvL0ZJUkVCQVNFIERCXHJcbiAgICAgIGNvbnN0IHRlYWNoZXJzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidGVhY2hlcnNcIiwpXHJcbiAgXHJcblxyXG4gICAgY29uc3QgW2xvZ2luVXNlciwgc2V0TG9naW5Vc2VyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKCdzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzcycpXHJcblxyXG5cclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG5cclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgIFxyXG5zZXRMb2dpblVzZXIodXNlcilcclxuICAgICAgXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coJ3NkZnNkZnNkZnNkZnNkZnNkZnNkZnNkJylcclxuICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgZ2V0VGVhY2hlcnNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KHRlYWNoZXJzQ29sbGVjdGlvblJlZiwgd2hlcmUoJ3VzZXJJZCcsICc9PScsICd6WmZSYWtJY0NCYkVrVzQ2b0ZOcDFYYXYxN3IyJykpKVxyXG5cclxuICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgLy9zZXRQcm9maWxlKGZpbHRlcmVkRGF0YVswXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZ2V0VGVhY2hlcnNMaXN0KClcclxuXHJcbiAgICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciAgdmFsdWU9e3sgbG9naW5Vc2VyOiBbbG9naW5Vc2VyLCBzZXRMb2dpblVzZXJdLCBwcm9maWxlOiBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJ1c2VSb3V0ZUd1YXJkQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInRlYWNoZXJzQ29sbGVjdGlvblJlZiIsImxvZ2luVXNlciIsInNldExvZ2luVXNlciIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiYXV0aCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGVhY2hlcnNMaXN0IiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});