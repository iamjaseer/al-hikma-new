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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        setLoginUser(user);\n        setLoading(true);\n    });\n    //console.log(loading)\n    //auth.currentUser.uid)))\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTeachersList = async ()=>{\n            const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", \"zZfRakIcCBbEkW46oFNp1Xav17r2\")));\n            //await getDocs(teachersCollectionRef)\n            const filteredData = data.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                }));\n            setProfile(filteredData);\n            console.log(filteredData);\n        };\n        getTeachersList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser: [\n                loginUser,\n                setLoginUser\n            ],\n            profile: [\n                profile,\n                setProfile\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"XscXoFECE0fD4YMACP/UTSN6NxU=\");\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ1o7QUFDWTtBQUMvQjtBQUd4QyxNQUFNVyw0QkFBY1gsb0RBQWFBLENBQUMsQ0FBQztBQUk1QixNQUFNWSxzQkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBTTNDLGFBQWE7SUFDYixNQUFNQyx3QkFBd0JSLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUcvQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNa0IsT0FBT2pCLHNEQUFPQTtJQUdwQkMsaUVBQWtCQSxDQUFDZ0IsTUFBTSxDQUFDQztRQUU5Qk4sYUFBYU07UUFDYkYsV0FBVztJQUNYO0lBRUEsc0JBQXNCO0lBRXRCLHlCQUF5QjtJQUlyQmxCLGdEQUFTQSxDQUFDO1FBRUwsTUFBTXFCLGtCQUFrQjtZQUVyQixNQUFNQyxPQUFRLE1BQU9qQiwyREFBT0EsQ0FBQ0MseURBQUtBLENBQUNNLHVCQUF1QkwseURBQUtBLENBQUMsVUFBVSxNQUFNO1lBRWhGLHNDQUFzQztZQUV0QyxNQUFNZ0IsZUFBZUQsS0FBS0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFDaEM7b0JBQ0ksR0FBR0EsSUFBSUosSUFBSSxFQUFFO29CQUNiSyxJQUFJRCxJQUFJQyxFQUFFO2dCQUNkO1lBRUpYLFdBQVdPO1lBQ1hLLFFBQVFDLEdBQUcsQ0FBQ047UUFJcEI7UUFJSUY7SUFFRixHQUFHLEVBQUU7SUFLUCxxQkFDSSw4REFBQ1osWUFBWXFCLFFBQVE7UUFBRUMsT0FBTztZQUFFbEIsV0FBVztnQkFBQ0E7Z0JBQVdDO2FBQWE7WUFBRUMsU0FBUztnQkFBQ0E7Z0JBQVNDO2FBQVc7UUFBQztrQkFFaEdMOzs7Ozs7QUFHYixFQUFFO0dBbEVXRDtLQUFBQTtBQW9FTixNQUFNc0IsaUJBQWlCOztJQUFNakMsT0FBQUEsaURBQVVBLENBQUNVO0FBQVcsRUFBRTtJQUEvQ3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcz81OGMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0UHJvdmlkZXIgPSAgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIC8vRklSRUJBU0UgREJcclxuICAgICAgY29uc3QgdGVhY2hlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ0ZWFjaGVyc1wiLClcclxuICBcclxuXHJcbiAgICBjb25zdCBbbG9naW5Vc2VyLCBzZXRMb2dpblVzZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgXHJcbnNldExvZ2luVXNlcih1c2VyKVxyXG5zZXRMb2FkaW5nKHRydWUpXHJcbn0pO1xyXG5cclxuLy9jb25zb2xlLmxvZyhsb2FkaW5nKVxyXG5cclxuLy9hdXRoLmN1cnJlbnRVc2VyLnVpZCkpKVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgIGNvbnN0IGdldFRlYWNoZXJzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAgYXdhaXQgIGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlcklkJywgJz09JywgJ3paZlJha0ljQ0JiRWtXNDZvRk5wMVhhdjE3cjInKSkpXHJcblxyXG4gICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIHNldFByb2ZpbGUoZmlsdGVyZWREYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZ2V0VGVhY2hlcnNMaXN0KClcclxuXHJcbiAgICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciAgdmFsdWU9e3sgbG9naW5Vc2VyOiBbbG9naW5Vc2VyLCBzZXRMb2dpblVzZXJdLCBwcm9maWxlOiBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJVc2VyQ29udGV4dCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRlYWNoZXJzQ29sbGVjdGlvblJlZiIsImxvZ2luVXNlciIsInNldExvZ2luVXNlciIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhdXRoIiwidXNlciIsImdldFRlYWNoZXJzTGlzdCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});