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

/***/ "(app-pages-browser)/./src/app/login/page.jsx":
/*!********************************!*\
  !*** ./src/app/login/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Context/RouteGuardContext */ \"(app-pages-browser)/./src/app/Context/RouteGuardContext.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    //CONTEXT\n    const { setUserId } = (0,_Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_6__.useRouteGuardContext)();\n    const { test } = (0,_Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_6__.useRouteGuardContext)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //STATES\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [isFormValid, setIsFormValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Validate form \n    const validateForm = ()=>{\n        let errors = {};\n        if (!email) {\n            errors.email = \"Email is required.\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {\n            errors.email = \"Email is invalid.\";\n        }\n        if (!password) {\n            errors.password = \"Password is required.\";\n        }\n        setErrors(errors);\n        setIsFormValid(Object.keys(errors).length === 0);\n    };\n    const loginForm = async ()=>{\n        console.log(\"clicked\");\n        validateForm();\n        if (isFormValid) {\n            try {\n                //await createUserWithEmailAndPassword(auth, email, password)\n                await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(auth, email, password);\n                console.log(\"Login success\");\n                // if(auth.currentUser.email == \"jaseerali2012@gmail.com\"){\n                //     router.push(`/admin`)\n                // }\n                // else{\n                //     router.push(`/teachers`)\n                // }\n                router.push(\"/dashboard\");\n            //console.log(auth.currentUser.accessToken)\n            //await sendEmailVerification(auth.currentUser)\n            // console.log('verification send')\n            } catch (err) {\n                console.log(err);\n                setMessage(\"Invalid email and password\");\n            }\n        }\n    };\n    const reset = async ()=>{\n        try {\n            //await createUserWithEmailAndPassword(auth, email, password)\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendPasswordResetEmail)(auth, email, password);\n            console.log(\"success\");\n        } catch (err) {\n            console.log(\"error\");\n            console.log(err);\n        }\n    };\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                router.push(\"/dashboard\");\n            } else {\n                router.push(\"/login\");\n                console.log(\"Signed Out\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-indigo-600 bg-primary h-screen flex items-center justify-center px-6 py-5\",\n            children: [\n                test,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-start grid items-center justify-center gap-52\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-sky-400\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl sm:text-2xl font-bold text-white\",\n                                    children: \"അക്കൗണ്ടിലേക്കു പ്രവേശിക്കുക\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-3 text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        className: \"rounded-md h-12 px-4 w-full border-0 text-black\",\n                                        placeholder: \"ഇമെയിൽ\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 27\n                                    }, this),\n                                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: errors.email\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 46\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"rounded-md h-12 px-4 w-full border-0 text-black\",\n                                        placeholder: \"പാസ്സ്‌വേർഡ് \",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 29\n                                    }, this),\n                                    errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: errors.password\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 49\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: loginForm,\n                                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                                        children: \"പ്രവേശിക്കുക \"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 163,\n                                        columnNumber: 29\n                                    }, this),\n                                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"bg-red-100 text-center rounded-md text-red-600 p-3\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 144,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"\",\n                            className: \"text-sky-400\",\n                            children: \"പാസ്സ്‌വേർഡ് മറന്നോ?\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 169,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 135,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"tWCA8N9SuVoGiokDWLK8u3hHlqg=\", false, function() {\n    return [\n        _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_6__.useRouteGuardContext,\n        _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_6__.useRouteGuardContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ2M7QUFDb0U7QUFDdEU7QUFDRTtBQUd5QjtBQUNaO0FBSXpDLFNBQVNXOztJQUdwQixTQUFTO0lBQ1QsTUFBTSxFQUFDQyxTQUFTLEVBQUUsR0FBR0gsZ0ZBQW9CQTtJQUN6QyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHSixnRkFBb0JBO0lBR3JDLE1BQU1LLFNBQVNOLDBEQUFTQTtJQVV4QixRQUFRO0lBQ1IsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUNxQixhQUFhQyxlQUFlLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQU0vQyxpQkFBaUI7SUFDakIsTUFBTXVCLGVBQWU7UUFDakIsSUFBSUosU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDTixPQUFPO1lBQ1JNLE9BQU9OLEtBQUssR0FBRztRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlRixJQUFJLENBQUNFLFFBQVE7WUFDcENNLE9BQU9OLEtBQUssR0FBRztRQUNuQjtRQUVBLElBQUksQ0FBQ0UsVUFBVTtZQUNYSSxPQUFPSixRQUFRLEdBQUc7UUFDdEI7UUFDQUssVUFBVUQ7UUFDVkcsZUFBZUUsT0FBT0MsSUFBSSxDQUFDTixRQUFRTyxNQUFNLEtBQUs7SUFDbEQ7SUFHQSxNQUFNQyxZQUFZO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQztRQUNaTjtRQUVBLElBQUlGLGFBQWE7WUFDYixJQUFJO2dCQUNBLDZEQUE2RDtnQkFDN0QsTUFBTXBCLHlFQUEwQkEsQ0FBQ0ksTUFBTVEsT0FBT0U7Z0JBQzlDYSxRQUFRQyxHQUFHLENBQUM7Z0JBS3BCLDJEQUEyRDtnQkFDM0QsNEJBQTRCO2dCQUM1QixJQUFJO2dCQUNKLFFBQVE7Z0JBQ1IsK0JBQStCO2dCQUMvQixJQUFJO2dCQUVKakIsT0FBT2tCLElBQUksQ0FBRTtZQUlMLDJDQUEyQztZQUMzQywrQ0FBK0M7WUFDaEQsbUNBQW1DO1lBRXRDLEVBQUUsT0FBT0MsS0FBSztnQkFDVkgsUUFBUUMsR0FBRyxDQUFDRTtnQkFDWmIsV0FBVztZQUNmO1FBQ0o7SUFFSjtJQUlBLE1BQU1jLFFBQVE7UUFDVixJQUFJO1lBQ0EsNkRBQTZEO1lBQzdELE1BQU05QixxRUFBc0JBLENBQUNHLE1BQU1RLE9BQU9FO1lBQzFDYSxRQUFRQyxHQUFHLENBQUM7UUFFaEIsRUFBRSxPQUFPRSxLQUFLO1lBQ1ZILFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNFO1FBQ2hCO0lBQ0o7SUFJQSxNQUFNMUIsT0FBT0Ysc0RBQU9BO0lBSXBCSixnREFBU0EsQ0FBQztRQUNOSyxpRUFBa0JBLENBQUNDLE1BQU0sQ0FBQzRCO1lBQ3RCLElBQUlBLE1BQU07Z0JBRU5yQixPQUFPa0IsSUFBSSxDQUFFO1lBRWpCLE9BQU87Z0JBQ0xsQixPQUFPa0IsSUFBSSxDQUFFO2dCQUNiRixRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGO0lBRU4sR0FBRyxFQUFFO0lBR0wscUJBQ0k7a0JBRUksNEVBQUNLO1lBQUlDLFdBQVU7O2dCQUNWeEI7OEJBRUQsOERBQUN1QjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1ELFdBQVU7OENBQWU7Ozs7Ozs4Q0FDaEMsOERBQUNFO29DQUFHRixXQUFVOzhDQUE0Qzs7Ozs7Ozs7Ozs7O3NDQUU5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0tDLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGFBQVk7d0NBQ1pDLE9BQU81Qjt3Q0FDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFNBQVM2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQ3hDSSxRQUFROzs7Ozs7b0NBRVgxQixPQUFPTixLQUFLLGtCQUFJLDhEQUFDaUM7a0RBQUczQixPQUFPTixLQUFLOzs7Ozs7a0RBQ2pDLDhEQUFDeUI7d0NBQ0dDLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGFBQVk7d0NBQ1pDLE9BQU8xQjt3Q0FDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLFlBQVkyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQzNDSSxRQUFROzs7Ozs7b0NBRVgxQixPQUFPSixRQUFRLGtCQUFJLDhEQUFDK0I7a0RBQUczQixPQUFPSixRQUFROzs7Ozs7a0RBQ3ZDLDhEQUFDZ0M7d0NBQU9DLFNBQVNyQjt3Q0FBV1EsV0FBVTtrREFBa0g7Ozs7OztvQ0FFeEtsQix5QkFBWSw4REFBQzZCO3dDQUFFWCxXQUFVO2tEQUFzRGxCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJdkUsOERBQUNuQixpREFBSUE7NEJBQUNtRCxNQUFNOzRCQUFJZCxXQUFVO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdEO0dBL0p3QjFCOztRQUlDRiw0RUFBb0JBO1FBQ3hCQSw0RUFBb0JBO1FBR3RCRCxzREFBU0E7OztLQVJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanN4PzMyODQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCwgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlL2NvbmZpZydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlR3VhcmRDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvUm91dGVHdWFyZENvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC91c2VyQ29udGV4dFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcblxyXG4gICAgLy9DT05URVhUXHJcbiAgICBjb25zdCB7c2V0VXNlcklkIH0gPSB1c2VSb3V0ZUd1YXJkQ29udGV4dCgpXHJcbiAgICBjb25zdCB7IHRlc3QgfSA9IHVzZVJvdXRlR3VhcmRDb250ZXh0KClcclxuXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgLy9TVEFURVNcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2lzRm9ybVZhbGlkLCBzZXRJc0Zvcm1WYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBmb3JtIFxyXG4gICAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgaW52YWxpZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9IFxyXG4gICAgICAgIHNldEVycm9ycyhlcnJvcnMpO1xyXG4gICAgICAgIHNldElzRm9ybVZhbGlkKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXHJcbiAgICAgICAgdmFsaWRhdGVGb3JtKClcclxuXHJcbiAgICAgICAgaWYgKGlzRm9ybVZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaWYoYXV0aC5jdXJyZW50VXNlci5lbWFpbCA9PSBcImphc2VlcmFsaTIwMTJAZ21haWwuY29tXCIpe1xyXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaChgL2FkbWluYClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goYC90ZWFjaGVyc2ApXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZGApXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGF1dGguY3VycmVudFVzZXIuYWNjZXNzVG9rZW4pXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IHNlbmRFbWFpbFZlcmlmaWNhdGlvbihhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmVyaWZpY2F0aW9uIHNlbmQnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCdJbnZhbGlkIGVtYWlsIGFuZCBwYXNzd29yZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcmVzZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9hd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICBhd2FpdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkYClcclxuICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbmApXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpZ25lZCBPdXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICBcclxuICAgIH0sIFtdKTtcclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgYmctcHJpbWFyeSBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTVcIj5cclxuICAgICAgICAgICAgICAgIHt0ZXN0fVxyXG4gICAgICAgICAgICAgICAgey8qIE9VVCBPRiBMT0NBVElPTiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBncmlkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtc2t5LTQwMFwiPkJSQU5EIE5BTUU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj7gtIXgtJXgtY3gtJXgtZfgtKPgtY3gtJ/gtL/gtLLgtYfgtJXgtY3gtJXgtYEg4LSq4LWN4LSw4LS14LWH4LS24LS/4LSV4LWN4LSV4LWB4LSVPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgaC0xMiBweC00IHctZnVsbCBib3JkZXItMCB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC0h+C0ruC1huC0r+C0v+C1vVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8cD57ZXJyb3JzLmVtYWlsfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBoLTEyIHB4LTQgdy1mdWxsIGJvcmRlci0wIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LSq4LS+4LS44LWN4LS44LWN4oCM4LS14LWH4LW84LSh4LWNIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiA8cD57ZXJyb3JzLnBhc3N3b3JkfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luRm9ybX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCI+4LSq4LWN4LSw4LS14LWH4LS24LS/4LSV4LWN4LSV4LWB4LSVIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgIHttZXNzYWdlICYmICA8cCBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIHRleHQtY2VudGVyIHJvdW5kZWQtbWQgdGV4dC1yZWQtNjAwIHAtM1wiPnttZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycnfSBjbGFzc05hbWU9XCJ0ZXh0LXNreS00MDBcIj7gtKrgtL7gtLjgtY3gtLjgtY3igIzgtLXgtYfgtbzgtKHgtY0g4LSu4LSx4LSo4LWN4LSo4LWLPzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGgiLCJ1c2VSb3V0ZXIiLCJ1c2VSb3V0ZUd1YXJkQ29udGV4dCIsInVzZVVzZXJDb250ZXh0IiwiTG9naW4iLCJzZXRVc2VySWQiLCJ0ZXN0Iiwicm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImVycm9ycyIsInNldEVycm9ycyIsImlzRm9ybVZhbGlkIiwic2V0SXNGb3JtVmFsaWQiLCJ2YWxpZGF0ZUZvcm0iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibG9naW5Gb3JtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlcnIiLCJyZXNldCIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzbWFsbCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.jsx\n"));

/***/ })

});