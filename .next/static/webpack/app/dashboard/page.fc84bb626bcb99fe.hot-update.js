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

/***/ "(app-pages-browser)/./src/app/dashboard/page.jsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Header */ \"(app-pages-browser)/./src/app/Components/Header/index.jsx\");\n/* harmony import */ var _Components_Punching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Punching */ \"(app-pages-browser)/./src/app/Components/Punching/index.jsx\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProtectedRoute */ \"(app-pages-browser)/./src/app/ProtectedRoute.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction AdminDashboard() {\n    _s();\n    //CONTEXT\n    const { loginUser } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    const { profile } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext)();\n    //FIREBASE DB\n    const leaveCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"leave\");\n    //STATES\n    const [leave, setLeave] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        //GT ALL leave\n        const getLeaveList = async ()=>{\n            try {\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(leaveCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"status\", \"==\", \"pending\")));\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setLeave(filteredData);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        getLeaveList();\n    }, []);\n    console.log(profile.uid);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white-custom bg-primary h-screen px-6 py-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            type: \"normal\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"welcome my-6 grid gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-blue-800\",\n                                    children: \"സ്വാഗതം,\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl text-blue-800\",\n                                    children: profile && profile[0].name\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 70,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(AdminDashboard, \"x0XYZtCWaewcJt40w8+Hu2hYsEc=\", false, function() {\n    return [\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext,\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_3__.useUserContext\n    ];\n});\n_c = AdminDashboard;\nvar _c;\n$RefreshReg$(_c, \"AdminDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDSTtBQUNXO0FBQ1o7QUFDTDtBQUMrQjtBQUN6QztBQUNrQjtBQUtoQyxTQUFTWTs7SUFJdEIsU0FBUztJQUNULE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdYLG9FQUFjQTtJQUNwQyxNQUFNLEVBQUVZLE9BQU8sRUFBQyxHQUFHWixvRUFBY0E7SUFHakMsYUFBYTtJQUNiLE1BQU1hLHFCQUFxQlQsOERBQVVBLENBQUNELGdEQUFFQSxFQUFFO0lBRzFDLFFBQVE7SUFDUixNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQU1yQ0QsZ0RBQVNBLENBQUM7UUFHUixjQUFjO1FBQ2QsTUFBTWUsZUFBZTtZQUVuQixJQUFJO2dCQUVGLE1BQU1DLE9BQU8sTUFBTVosMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDTyxvQkFBb0JOLHlEQUFLQSxDQUFDLFVBQVUsTUFBTTtnQkFFM0UsTUFBTVcsZUFBZUQsS0FBS0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFDaEM7d0JBQ0ksR0FBR0EsSUFBSUosSUFBSSxFQUFFO3dCQUNiSyxJQUFJRCxJQUFJQyxFQUFFO29CQUNkO2dCQUVKUCxTQUFTRztZQUViLEVBQUUsT0FBT0ssT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDMUM7UUFFQTtRQUVBUDtJQUVGLEdBQUcsRUFBRTtJQUlQUSxRQUFRQyxHQUFHLENBQUNiLFFBQVFjLEdBQUc7SUFFckIscUJBQ0U7a0JBR0osNEVBQUNqQix1REFBY0E7c0JBQ1Q7MEJBQ0EsNEVBQUNrQjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUM5QiwwREFBTUE7NEJBQUMrQixNQUFLOzs7Ozs7c0NBQ2IsOERBQUNGOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQW1DOzs7Ozs7OENBQ2pELDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBeUJoQixXQUFXQSxPQUFPLENBQUMsRUFBRSxDQUFDb0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1RTtHQXZFd0J0Qjs7UUFLQVYsZ0VBQWNBO1FBQ2pCQSxnRUFBY0E7OztLQU5YVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLmpzeD8xNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9Db21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBQdW5jaGluZyBmcm9tIFwiLi4vQ29tcG9uZW50cy9QdW5jaGluZ1wiXHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvdXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jb25maWdcIlxyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSAnLi4vUHJvdGVjdGVkUm91dGUnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5EYXNoYm9hcmQoKSB7XHJcblxyXG5cclxuXHJcbiAgLy9DT05URVhUXHJcbiAgY29uc3QgeyBsb2dpblVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KClcclxuICBjb25zdCB7IHByb2ZpbGV9ID0gdXNlVXNlckNvbnRleHQoKVxyXG5cclxuXHJcbiAgLy9GSVJFQkFTRSBEQlxyXG4gIGNvbnN0IGxlYXZlQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwibGVhdmVcIiwpXHJcblxyXG5cclxuICAvL1NUQVRFU1xyXG4gIGNvbnN0IFtsZWF2ZSwgc2V0TGVhdmVdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcbiAgICAvL0dUIEFMTCBsZWF2ZVxyXG4gICAgY29uc3QgZ2V0TGVhdmVMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkobGVhdmVDb2xsZWN0aW9uUmVmLCB3aGVyZSgnc3RhdHVzJywgJz09JywgJ3BlbmRpbmcnKSkpXHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSlcclxuICAgICAgICBzZXRMZWF2ZShmaWx0ZXJlZERhdGEpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVhdmVMaXN0KClcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyhwcm9maWxlLnVpZClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG5cclxuPFByb3RlY3RlZFJvdXRlPlxyXG4gICAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLWN1c3RvbSBiZy1wcmltYXJ5IGgtc2NyZWVuIHB4LTYgcHktNVwiPlxyXG4gICAgICAgICAgPEhlYWRlciB0eXBlPVwibm9ybWFsXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZSBteS02IGdyaWQgZ2FwLTFcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsdWUtODAwXCI+4LS44LWN4LS14LS+4LSX4LSk4LSCLDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ibHVlLTgwMFwiPntwcm9maWxlICYmIHByb2ZpbGVbMF0ubmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBJRiBVU0VSIEFETUlOID09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlB1bmNoaW5nIiwidXNlVXNlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiTGluayIsIlByb3RlY3RlZFJvdXRlIiwiQWRtaW5EYXNoYm9hcmQiLCJsb2dpblVzZXIiLCJwcm9maWxlIiwibGVhdmVDb2xsZWN0aW9uUmVmIiwibGVhdmUiLCJzZXRMZWF2ZSIsImdldExlYXZlTGlzdCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaDEiLCJwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});