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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"72d004cb1a8d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9zdHlsZXMvdGhlbWUubWluLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0eWxlcy90aGVtZS5taW4uY3NzPzI1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3MmQwMDRjYjFhOGRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/styles/theme.min.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Context/userContext.js":
/*!****************************************!*\
  !*** ./src/app/Context/userContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sssssssssssssssssssssssssssss\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n        setLoginUser(user[0]);\n        setLoading(true);\n    });\n    loading && (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTeachersList = async ()=>{\n            const data = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", auth.currentUser.uid)));\n            //await getDocs(teachersCollectionRef)\n            const filteredData = data.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                }));\n            //setProfile(filteredData[0])\n            console.log(filteredData);\n        };\n        getTeachersList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser: [\n                loginUser,\n                setLoginUser\n            ],\n            profile: [\n                profile,\n                setProfile\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"Fg2vzPhvFLj/+gA2H/Amzd+NebY=\");\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ1o7QUFDWTtBQUMvQjtBQUd4QyxNQUFNVyw0QkFBY1gsb0RBQWFBLENBQUMsQ0FBQztBQUk1QixNQUFNWSxzQkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBTTNDLGFBQWE7SUFDYixNQUFNQyx3QkFBd0JSLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUcvQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNa0IsT0FBT2pCLHNEQUFPQTtJQUdwQkMsaUVBQWtCQSxDQUFDZ0IsTUFBTSxDQUFDQztRQUU5Qk4sYUFBYU0sSUFBSSxDQUFDLEVBQUU7UUFDcEJGLFdBQVc7SUFDWDtJQUlBRCxXQUlJakIsZ0RBQVNBLENBQUM7UUFFTCxNQUFNcUIsa0JBQWtCO1lBQ3pCLE1BQU1DLE9BQVFqQiwyREFBT0EsQ0FBQ0MseURBQUtBLENBQUNNLHVCQUF1QkwseURBQUtBLENBQUMsVUFBVSxNQUFNWSxLQUFLSSxXQUFXLENBQUNDLEdBQUc7WUFFN0Ysc0NBQXNDO1lBRXRDLE1BQU1DLGVBQWVILEtBQUtJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQ2hDO29CQUNJLEdBQUdBLElBQUlOLElBQUksRUFBRTtvQkFDYk8sSUFBSUQsSUFBSUMsRUFBRTtnQkFDZDtZQUVKLDZCQUE2QjtZQUM3QkMsUUFBUUMsR0FBRyxDQUFDTjtRQUNoQjtRQUlJSjtJQUVGLEdBQUcsRUFBRTtJQUtQLHFCQUNJLDhEQUFDWixZQUFZdUIsUUFBUTtRQUFFQyxPQUFPO1lBQUVwQixXQUFXO2dCQUFDQTtnQkFBV0M7YUFBYTtZQUFFQyxTQUFTO2dCQUFDQTtnQkFBU0M7YUFBVztRQUFDO2tCQUVoR0w7Ozs7OztBQUdiLEVBQUU7R0E5RFdEO0tBQUFBO0FBZ0VOLE1BQU13QixpQkFBaUI7O0lBQU1uQyxPQUFBQSxpREFBVUEsQ0FBQ1U7QUFBVyxFQUFFO0lBQS9DeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db250ZXh0L3VzZXJDb250ZXh0LmpzPzU4YzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY29uZmlnXCI7XHJcblxyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRQcm92aWRlciA9ICAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgLy9GSVJFQkFTRSBEQlxyXG4gICAgICBjb25zdCB0ZWFjaGVyc0NvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcInRlYWNoZXJzXCIsKVxyXG4gIFxyXG5cclxuICAgIGNvbnN0IFtsb2dpblVzZXIsIHNldExvZ2luVXNlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSgnc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3MnKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG5cclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgIFxyXG5zZXRMb2dpblVzZXIodXNlclswXSlcclxuc2V0TG9hZGluZyh0cnVlKVxyXG59KTtcclxuXHJcblxyXG5cclxubG9hZGluZyAmJiBcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgICBjb25zdCBnZXRUZWFjaGVyc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICBnZXREb2NzKHF1ZXJ5KHRlYWNoZXJzQ29sbGVjdGlvblJlZiwgd2hlcmUoJ3VzZXJJZCcsICc9PScsIGF1dGguY3VycmVudFVzZXIudWlkKSkpXHJcblxyXG4gICAgICAgIC8vYXdhaXQgZ2V0RG9jcyh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYpXHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgICAvL3NldFByb2ZpbGUoZmlsdGVyZWREYXRhWzBdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBnZXRUZWFjaGVyc0xpc3QoKVxyXG5cclxuICAgICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyICB2YWx1ZT17eyBsb2dpblVzZXI6IFtsb2dpblVzZXIsIHNldExvZ2luVXNlcl0sIHByb2ZpbGU6IFtwcm9maWxlLCBzZXRQcm9maWxlXSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXNlckNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJkYiIsIlVzZXJDb250ZXh0IiwiVXNlckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidGVhY2hlcnNDb2xsZWN0aW9uUmVmIiwibG9naW5Vc2VyIiwic2V0TG9naW5Vc2VyIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF1dGgiLCJ1c2VyIiwiZ2V0VGVhY2hlcnNMaXN0IiwiZGF0YSIsImN1cnJlbnRVc2VyIiwidWlkIiwiZmlsdGVyZWREYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});