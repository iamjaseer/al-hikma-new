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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5e439bcf4908\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9zdHlsZXMvdGhlbWUubWluLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0eWxlcy90aGVtZS5taW4uY3NzPzI1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1ZTQzOWJjZjQ5MDhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/styles/theme.min.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Context/profileContext.js":
/*!*******************************************!*\
  !*** ./src/app/Context/profileContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContextProvider: function() { return /* binding */ ProfileContextProvider; },\n/* harmony export */   useProfileContext: function() { return /* binding */ useProfileContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileContextProvider,useProfileContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfirebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query;\nconst ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ProfileContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"asdasdasdasd\");\n    const [teachers, setTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getTeachersList = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, where(\"userRole\", \"==\", \"teacher\")));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        setTeachers(filteredData);\n        setLoading(false);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getTeachersList();\n        setProfile(\"2222222222\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContext.Provider, {\n        value: {\n            profile,\n            setProfile\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\profileContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileContextProvider, \"J/l6yEYS8Fp4gpQkXxgb3J0D6H8=\");\n_c = ProfileContextProvider;\nconst useProfileContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);\n};\n_s1(useProfileContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProfileContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3hCO0FBQ2lCO0FBQ3hCO0FBRXhDTyxxREFBS0E7QUFDTCxNQUFNRSwrQkFBaUJULG9EQUFhQSxDQUFDLENBQUM7QUFJL0IsTUFBTVUseUJBQXlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUcvQyxhQUFhO0lBQ2IsTUFBTUMsd0JBQXdCUCw4REFBVUEsQ0FBQ0csZ0RBQUVBLEVBQUU7SUFJN0MsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRzNDLE1BQU1jLGtCQUFrQjtRQUNwQixNQUFNQyxPQUFPLE1BQU1aLDJEQUFPQSxDQUFDQyx5REFBS0EsQ0FBQ0ssdUJBQXVCTyxNQUFNLFlBQVksTUFBTTtRQUVoRixzQ0FBc0M7UUFFdEMsTUFBTUMsZUFBZUYsS0FBS0csSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFDaEM7Z0JBQ0ksR0FBR0EsSUFBSUwsSUFBSSxFQUFFO2dCQUNiTSxJQUFJRCxJQUFJQyxFQUFFO1lBQ2Q7UUFFSlIsWUFBWUk7UUFDWkssV0FBVztRQUNYQyxRQUFRQyxHQUFHLENBQUNUO0lBQ2hCO0lBSUFoQixnREFBU0EsQ0FBQztRQUNOZTtRQUNBSCxXQUFXO0lBRWIsR0FBRyxFQUFFO0lBS1AscUJBQ0ksOERBQUNMLGVBQWVtQixRQUFRO1FBQUNDLE9BQU87WUFBRWhCO1lBQVNDO1FBQVc7a0JBQ2pESDs7Ozs7O0FBR2IsRUFBRTtHQTVDV0Q7S0FBQUE7QUE4Q04sTUFBTW9CLG9CQUFvQjs7SUFBTTdCLE9BQUFBLGlEQUFVQSxDQUFDUTtBQUFjLEVBQUU7SUFBckRxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbnRleHQvcHJvZmlsZUNvbnRleHQuanM/MDY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY29uZmlnXCI7XHJcblxyXG5xdWVyeVxyXG5jb25zdCBQcm9maWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuXHJcbiAgICAvL0ZJUkVCQVNFIERCXHJcbiAgICBjb25zdCB0ZWFjaGVyc0NvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcInRlYWNoZXJzXCIsKVxyXG5cclxuXHJcbiAgIFxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoJ2FzZGFzZGFzZGFzZCcpXHJcbiAgICBjb25zdCBbdGVhY2hlcnMsIHNldFRlYWNoZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICBcclxuXHJcbiAgICBjb25zdCBnZXRUZWFjaGVyc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlclJvbGUnLCAnPT0nLCAndGVhY2hlcicpKSlcclxuXHJcbiAgICAgICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKVxyXG4gICAgICAgIHNldFRlYWNoZXJzKGZpbHRlcmVkRGF0YSlcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFRlYWNoZXJzTGlzdCgpXHJcbiAgICAgICAgc2V0UHJvZmlsZSgnMjIyMjIyMjIyMicpXHJcblxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2ZpbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2ZpbGUsIHNldFByb2ZpbGUgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb2ZpbGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb2ZpbGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VyQ29udGV4dCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJkYiIsIlByb2ZpbGVDb250ZXh0IiwiUHJvZmlsZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidGVhY2hlcnNDb2xsZWN0aW9uUmVmIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJ0ZWFjaGVycyIsInNldFRlYWNoZXJzIiwiZ2V0VGVhY2hlcnNMaXN0IiwiZGF0YSIsIndoZXJlIiwiZmlsdGVyZWREYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlUHJvZmlsZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/profileContext.js\n"));

/***/ })

});