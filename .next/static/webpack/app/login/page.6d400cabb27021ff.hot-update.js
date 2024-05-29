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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileContextProvider: function() { return /* binding */ ProfileContextProvider; },\n/* harmony export */   useProfileContext: function() { return /* binding */ useProfileContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileContextProvider,useProfileContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ProfileContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { loginUser } = (0,_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getTeachersList = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", loginUser)));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        setProfile(filteredData[0]);\n    //console.log(filteredData)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getTeachersList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContext.Provider, {\n        value: {\n            profile,\n            setProfile\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\profileContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileContextProvider, \"/Ig0/Jl02jlOra6Tj7T9TjI7Rws=\", false, function() {\n    return [\n        _userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext\n    ];\n});\n_c = ProfileContextProvider;\nconst useProfileContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);\n};\n_s1(useProfileContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProfileContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC9wcm9maWxlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ3hCO0FBQ3dCO0FBQy9CO0FBSXhDLE1BQU1VLCtCQUFpQlYsb0RBQWFBLENBQUMsQ0FBQztBQUkvQixNQUFNVyx5QkFBeUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRy9DLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdULDREQUFjQTtJQUdwQyxhQUFhO0lBQ2IsTUFBTVUsd0JBQXdCVCw4REFBVUEsQ0FBQ0ksZ0RBQUVBLEVBQUU7SUFHN0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTWMsa0JBQWtCO1FBQ3BCLE1BQU1DLE9BQU8sTUFBTVosMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDTyx1QkFBdUJOLHlEQUFLQSxDQUFDLFVBQVUsTUFBTUs7UUFFOUUsc0NBQXNDO1FBRXRDLE1BQU1NLGVBQWVELEtBQUtFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQ2hDO2dCQUNJLEdBQUdBLElBQUlKLElBQUksRUFBRTtnQkFDYkssSUFBSUQsSUFBSUMsRUFBRTtZQUNkO1FBRUpQLFdBQVdHLFlBQVksQ0FBQyxFQUFFO0lBQzFCLDJCQUEyQjtJQUMvQjtJQUlBakIsZ0RBQVNBLENBQUM7UUFDTmU7SUFHRixHQUFHLEVBQUU7SUFLUCxxQkFDSSw4REFBQ1AsZUFBZWMsUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1lBQVNDO1FBQVc7a0JBQ2pESjs7Ozs7O0FBR2IsRUFBRTtHQTNDV0Q7O1FBR2FQLHdEQUFjQTs7O0tBSDNCTztBQTZDTixNQUFNZSxvQkFBb0I7O0lBQU16QixPQUFBQSxpREFBVUEsQ0FBQ1M7QUFBYyxFQUFFO0lBQXJEZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db250ZXh0L3Byb2ZpbGVDb250ZXh0LmpzPzA2NDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4vdXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jb25maWdcIjtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgeyBsb2dpblVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KClcclxuXHJcblxyXG4gICAgLy9GSVJFQkFTRSBEQlxyXG4gICAgY29uc3QgdGVhY2hlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ0ZWFjaGVyc1wiLClcclxuXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0VGVhY2hlcnNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KHRlYWNoZXJzQ29sbGVjdGlvblJlZiwgd2hlcmUoJ3VzZXJJZCcsICc9PScsIGxvZ2luVXNlcikpKVxyXG5cclxuICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgc2V0UHJvZmlsZShmaWx0ZXJlZERhdGFbMF0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFRlYWNoZXJzTGlzdCgpXHJcbiAgICAgXHJcblxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2ZpbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2ZpbGUsIHNldFByb2ZpbGUgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb2ZpbGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb2ZpbGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VyQ29udGV4dCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsImRiIiwiUHJvZmlsZUNvbnRleHQiLCJQcm9maWxlQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2dpblVzZXIiLCJ0ZWFjaGVyc0NvbGxlY3Rpb25SZWYiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImdldFRlYWNoZXJzTGlzdCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlUHJvZmlsZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/profileContext.js\n"));

/***/ })

});