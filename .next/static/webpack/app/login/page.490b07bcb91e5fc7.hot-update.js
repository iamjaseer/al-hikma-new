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

/***/ "(app-pages-browser)/./src/app/Context/profileContext.js":
/*!*******************************************!*\
  !*** ./src/app/Context/profileContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContextProvider: function() { return /* binding */ ProfileContextProvider; },\n/* harmony export */   useProfileContext: function() { return /* binding */ useProfileContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileContextProvider,useProfileContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ProfileContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [teachers, setTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getTeachersList = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", \"zZfRakIcCBbEkW46oFNp1Xav17r2\")));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        setProfile(filteredData);\n    //console.log(filteredData)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getTeachersList();\n        setProfile(teachers);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContext.Provider, {\n        value: {\n            profile,\n            setProfile\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\profileContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileContextProvider, \"HT3gZZvppWffsv1HHFp+hvrSP6k=\");\n_c = ProfileContextProvider;\nconst useProfileContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);\n};\n_s1(useProfileContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProfileContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3hCO0FBQ3dCO0FBQy9CO0FBSXhDLE1BQU1VLCtCQUFpQlYsb0RBQWFBLENBQUMsQ0FBQztBQUkvQixNQUFNVyx5QkFBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRy9DLGFBQWE7SUFDYixNQUFNQyx3QkFBd0JSLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUs3QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsa0JBQWtCO1FBQ3BCLE1BQU1DLE9BQU8sTUFBTWIsMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDTSx1QkFBdUJMLHlEQUFLQSxDQUFDLFVBQVUsTUFBTTtRQUU5RSxzQ0FBc0M7UUFFdEMsTUFBTVksZUFBZUQsS0FBS0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFDaEM7Z0JBQ0ksR0FBR0EsSUFBSUosSUFBSSxFQUFFO2dCQUNiSyxJQUFJRCxJQUFJQyxFQUFFO1lBQ2Q7UUFFSlAsV0FBV0c7SUFDWCwyQkFBMkI7SUFDL0I7SUFJQWxCLGdEQUFTQSxDQUFDO1FBQ05nQjtRQUNBRCxXQUFXSDtJQUViLEdBQUcsRUFBRTtJQUtQLHFCQUNJLDhEQUFDSixlQUFlZSxRQUFRO1FBQUNDLE9BQU87WUFBRVY7WUFBU0M7UUFBVztrQkFDakRMOzs7Ozs7QUFHYixFQUFFO0dBM0NXRDtLQUFBQTtBQTZDTixNQUFNZ0Isb0JBQW9COztJQUFNMUIsT0FBQUEsaURBQVVBLENBQUNTO0FBQWMsRUFBRTtJQUFyRGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcz8wNjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY29uZmlnXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG5cclxuICAgIC8vRklSRUJBU0UgREJcclxuICAgIGNvbnN0IHRlYWNoZXJzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidGVhY2hlcnNcIiwpXHJcblxyXG5cclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IFt0ZWFjaGVycywgc2V0VGVhY2hlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBnZXRUZWFjaGVyc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlcklkJywgJz09JywgJ3paZlJha0ljQ0JiRWtXNDZvRk5wMVhhdjE3cjInKSkpXHJcblxyXG4gICAgICAgIC8vYXdhaXQgZ2V0RG9jcyh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYpXHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgICBzZXRQcm9maWxlKGZpbHRlcmVkRGF0YSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VGVhY2hlcnNMaXN0KClcclxuICAgICAgICBzZXRQcm9maWxlKHRlYWNoZXJzKVxyXG5cclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm9maWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9maWxlLCBzZXRQcm9maWxlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Qcm9maWxlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9maWxlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoUHJvZmlsZUNvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlckNvbnRleHQiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJkYiIsIlByb2ZpbGVDb250ZXh0IiwiUHJvZmlsZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidGVhY2hlcnNDb2xsZWN0aW9uUmVmIiwidGVhY2hlcnMiLCJzZXRUZWFjaGVycyIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwiZ2V0VGVhY2hlcnNMaXN0IiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VQcm9maWxlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/profileContext.js\n"));

/***/ })

});