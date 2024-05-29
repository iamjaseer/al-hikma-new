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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContextProvider: function() { return /* binding */ ProfileContextProvider; },\n/* harmony export */   useProfileContext: function() { return /* binding */ useProfileContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileContextProvider,useProfileContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ProfileContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { loginUser } = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getTeachersList = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", \"zZfRakIcCBbEkW46oFNp1Xav17r2\")));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        setProfile(filteredData[0]);\n    //console.log(filteredData)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //LOGIN USER\n        const activeUser = async ()=>{\n            try {\n                const result = await loginUser.email;\n                setUserData(result);\n            //console.log(result)\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        getTeachersList();\n        activeUser();\n    }, [\n        loginUser\n    ]);\n    console.log(userData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContext.Provider, {\n        value: {\n            profile,\n            setProfile\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\profileContext.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileContextProvider, \"v10zqu8xl3PzfeQKQqQTm0OmUCc=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ProfileContextProvider;\nconst useProfileContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);\n};\n_s1(useProfileContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProfileContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3hCO0FBQ3dCO0FBQy9CO0FBSXhDLE1BQU1VLCtCQUFpQlYsb0RBQWFBLENBQUMsQ0FBQztBQUkvQixNQUFNVyx5QkFBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRy9DLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdULDREQUFjQTtJQUdwQyxhQUFhO0lBQ2IsTUFBTVUsd0JBQXdCVCw4REFBVUEsQ0FBQ0ksZ0RBQUVBLEVBQUU7SUFHN0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBR3pDLE1BQU1nQixrQkFBa0I7UUFDcEIsTUFBTUMsT0FBTyxNQUFNZCwyREFBT0EsQ0FBQ0MseURBQUtBLENBQUNPLHVCQUF1Qk4seURBQUtBLENBQUMsVUFBVSxNQUFNO1FBRTlFLHNDQUFzQztRQUV0QyxNQUFNYSxlQUFlRCxLQUFLRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUNoQztnQkFDSSxHQUFHQSxJQUFJSixJQUFJLEVBQUU7Z0JBQ2JLLElBQUlELElBQUlDLEVBQUU7WUFDZDtRQUVKVCxXQUFXSyxZQUFZLENBQUMsRUFBRTtJQUMxQiwyQkFBMkI7SUFDL0I7SUFJQW5CLGdEQUFTQSxDQUFDO1FBRU4sWUFBWTtRQUNoQixNQUFNd0IsYUFBYTtZQUNmLElBQUk7Z0JBQ0YsTUFBTUMsU0FBUyxNQUFNZCxVQUFVZSxLQUFLO2dCQUNwQ1YsWUFBWVM7WUFDWixxQkFBcUI7WUFDdkIsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBR0VWO1FBQ0FPO0lBRUYsR0FBRztRQUFDYjtLQUFVO0lBRXBCaUIsUUFBUUMsR0FBRyxDQUFDZDtJQUdSLHFCQUNJLDhEQUFDUCxlQUFlc0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVsQjtZQUFTQztRQUFXO2tCQUNqREo7Ozs7OztBQUdiLEVBQUU7R0ExRFdEOztRQUdhUCx3REFBY0E7OztLQUgzQk87QUE0RE4sTUFBTXVCLG9CQUFvQjs7SUFBTWpDLE9BQUFBLGlEQUFVQSxDQUFDUztBQUFjLEVBQUU7SUFBckR3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbnRleHQvcHJvZmlsZUNvbnRleHQuanM/MDY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NvbmZpZ1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCB7IGxvZ2luVXNlciB9ID0gdXNlVXNlckNvbnRleHQoKVxyXG4gICAgXHJcblxyXG4gICAgLy9GSVJFQkFTRSBEQlxyXG4gICAgY29uc3QgdGVhY2hlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ0ZWFjaGVyc1wiLClcclxuXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZ2V0VGVhY2hlcnNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KHRlYWNoZXJzQ29sbGVjdGlvblJlZiwgd2hlcmUoJ3VzZXJJZCcsICc9PScsICd6WmZSYWtJY0NCYkVrVzQ2b0ZOcDFYYXYxN3IyJykpKVxyXG5cclxuICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgc2V0UHJvZmlsZShmaWx0ZXJlZERhdGFbMF0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvL0xPR0lOIFVTRVJcclxuICAgIGNvbnN0IGFjdGl2ZVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvZ2luVXNlci5lbWFpbDtcclxuICAgICAgICAgIHNldFVzZXJEYXRhKHJlc3VsdCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgZ2V0VGVhY2hlcnNMaXN0KClcclxuICAgICAgICBhY3RpdmVVc2VyKClcclxuXHJcbiAgICAgIH0sIFtsb2dpblVzZXJdKTtcclxuICAgIFxyXG5jb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZmlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZmlsZSwgc2V0UHJvZmlsZSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUHJvZmlsZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvZmlsZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFByb2ZpbGVDb250ZXh0KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJDb250ZXh0IiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJQcm9maWxlQ29udGV4dCIsIlByb2ZpbGVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvZ2luVXNlciIsInRlYWNoZXJzQ29sbGVjdGlvblJlZiIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImdldFRlYWNoZXJzTGlzdCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJhY3RpdmVVc2VyIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlUHJvZmlsZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/profileContext.js\n"));

/***/ })

});