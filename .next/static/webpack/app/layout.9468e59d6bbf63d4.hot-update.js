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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"766e30526b85\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9zdHlsZXMvdGhlbWUubWluLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0eWxlcy90aGVtZS5taW4uY3NzPzI1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3NjZlMzA1MjZiODVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/styles/theme.min.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Context/profileContext.js":
/*!*******************************************!*\
  !*** ./src/app/Context/profileContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContextProvider: function() { return /* binding */ ProfileContextProvider; },\n/* harmony export */   useProfileContext: function() { return /* binding */ useProfileContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileContextProvider,useProfileContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ProfileContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { loginUser } = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getTeachersList = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", \"zZfRakIcCBbEkW46oFNp1Xav17r2\")));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        setProfile(filteredData[0]);\n    //console.log(filteredData)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //LOGIN USER\n        const activeUser = async ()=>{\n            try {\n                const result = await loginUser.email;\n                setUserData(result);\n            //console.log(result)\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        getTeachersList();\n    }, []);\n    console.log(loginUser.uid);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContext.Provider, {\n        value: {\n            profile,\n            setProfile\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\profileContext.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileContextProvider, \"v10zqu8xl3PzfeQKQqQTm0OmUCc=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ProfileContextProvider;\nconst useProfileContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);\n};\n_s1(useProfileContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProfileContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3hCO0FBQ3dCO0FBQy9CO0FBSXhDLE1BQU1VLCtCQUFpQlYsb0RBQWFBLENBQUMsQ0FBQztBQUkvQixNQUFNVyx5QkFBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRy9DLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdULDREQUFjQTtJQUdwQyxhQUFhO0lBQ2IsTUFBTVUsd0JBQXdCVCw4REFBVUEsQ0FBQ0ksZ0RBQUVBLEVBQUU7SUFHN0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBR3pDLE1BQU1nQixrQkFBa0I7UUFDcEIsTUFBTUMsT0FBTyxNQUFNZCwyREFBT0EsQ0FBQ0MseURBQUtBLENBQUNPLHVCQUF1Qk4seURBQUtBLENBQUMsVUFBVSxNQUFNO1FBRTlFLHNDQUFzQztRQUV0QyxNQUFNYSxlQUFlRCxLQUFLRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUNoQztnQkFDSSxHQUFHQSxJQUFJSixJQUFJLEVBQUU7Z0JBQ2JLLElBQUlELElBQUlDLEVBQUU7WUFDZDtRQUVKVCxXQUFXSyxZQUFZLENBQUMsRUFBRTtJQUMxQiwyQkFBMkI7SUFDL0I7SUFJQW5CLGdEQUFTQSxDQUFDO1FBRU4sWUFBWTtRQUNoQixNQUFNd0IsYUFBYTtZQUNmLElBQUk7Z0JBQ0YsTUFBTUMsU0FBUyxNQUFNZCxVQUFVZSxLQUFLO2dCQUNwQ1YsWUFBWVM7WUFDWixxQkFBcUI7WUFDdkIsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBR0VWO0lBR0YsR0FBRyxFQUFFO0lBRVhXLFFBQVFDLEdBQUcsQ0FBQ2xCLFVBQVVtQixHQUFHO0lBR3JCLHFCQUNJLDhEQUFDdEIsZUFBZXVCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBU0M7UUFBVztrQkFDakRKOzs7Ozs7QUFHYixFQUFFO0dBMURXRDs7UUFHYVAsd0RBQWNBOzs7S0FIM0JPO0FBNEROLE1BQU13QixvQkFBb0I7O0lBQU1sQyxPQUFBQSxpREFBVUEsQ0FBQ1M7QUFBYyxFQUFFO0lBQXJEeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db250ZXh0L3Byb2ZpbGVDb250ZXh0LmpzPzA2NDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jb25maWdcIjtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgeyBsb2dpblVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KClcclxuICAgIFxyXG5cclxuICAgIC8vRklSRUJBU0UgREJcclxuICAgIGNvbnN0IHRlYWNoZXJzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidGVhY2hlcnNcIiwpXHJcblxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGdldFRlYWNoZXJzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhxdWVyeSh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYsIHdoZXJlKCd1c2VySWQnLCAnPT0nLCAnelpmUmFrSWNDQmJFa1c0Nm9GTnAxWGF2MTdyMicpKSlcclxuXHJcbiAgICAgICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKVxyXG4gICAgICAgIHNldFByb2ZpbGUoZmlsdGVyZWREYXRhWzBdKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmlsdGVyZWREYXRhKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgLy9MT0dJTiBVU0VSXHJcbiAgICBjb25zdCBhY3RpdmVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2dpblVzZXIuZW1haWw7XHJcbiAgICAgICAgICBzZXRVc2VyRGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGdldFRlYWNoZXJzTGlzdCgpXHJcbiAgICAgXHJcblxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuY29uc29sZS5sb2cobG9naW5Vc2VyLnVpZClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZmlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZmlsZSwgc2V0UHJvZmlsZSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUHJvZmlsZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvZmlsZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFByb2ZpbGVDb250ZXh0KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJDb250ZXh0IiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJQcm9maWxlQ29udGV4dCIsIlByb2ZpbGVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvZ2luVXNlciIsInRlYWNoZXJzQ29sbGVjdGlvblJlZiIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImdldFRlYWNoZXJzTGlzdCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJhY3RpdmVVc2VyIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlUHJvZmlsZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/profileContext.js\n"));

/***/ })

});