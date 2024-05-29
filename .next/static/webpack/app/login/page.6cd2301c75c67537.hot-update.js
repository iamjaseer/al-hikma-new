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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/RouteGuardContext */ \"(app-pages-browser)/./src/app/Context/RouteGuardContext.js\");\n/* harmony import */ var _Context_profileContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Context/profileContext */ \"(app-pages-browser)/./src/app/Context/profileContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    //CONTEXT\n    const { setUser } = (0,_Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_7__.useRouteGuardContext)();\n    const { test } = (0,_Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_7__.useRouteGuardContext)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    //STATES\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [isFormValid, setIsFormValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Validate form \n    const validateForm = ()=>{\n        let errors = {};\n        if (!email) {\n            errors.email = \"Email is required.\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {\n            errors.email = \"Email is invalid.\";\n        }\n        if (!password) {\n            errors.password = \"Password is required.\";\n        }\n        setErrors(errors);\n        setIsFormValid(Object.keys(errors).length === 0);\n    };\n    const loginForm = async ()=>{\n        console.log(\"clicked\");\n        validateForm();\n        if (isFormValid) {\n            try {\n                //await createUserWithEmailAndPassword(auth, email, password)\n                await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(auth, email, password);\n                console.log(\"Login success\");\n                setUser(auth.currentUser);\n                // if(auth.currentUser.email == \"jaseerali2012@gmail.com\"){\n                //     router.push(`/admin`)\n                // }\n                // else{\n                //     router.push(`/teachers`)\n                // }\n                router.push(\"/dashboard\");\n            //console.log(auth.currentUser.accessToken)\n            //await sendEmailVerification(auth.currentUser)\n            // console.log('verification send')\n            } catch (err) {\n                console.log(err);\n                setMessage(\"Invalid email and password\");\n            }\n        }\n    };\n    const reset = async ()=>{\n        try {\n            //await createUserWithEmailAndPassword(auth, email, password)\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendPasswordResetEmail)(auth, email, password);\n            console.log(\"success\");\n        } catch (err) {\n            console.log(\"error\");\n            console.log(err);\n        }\n    };\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                router.push(\"/dashboard\");\n            } else {\n                router.push(\"/login\");\n                console.log(\"Signed Out\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-indigo-600 bg-primary h-screen flex items-center justify-center px-6 py-5\",\n            children: [\n                test,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-start grid items-center justify-center gap-52\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-sky-400\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl sm:text-2xl font-bold text-white\",\n                                    children: \"അക്കൗണ്ടിലേക്കു പ്രവേശിക്കുക\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-3 text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        className: \"rounded-md h-12 px-4 w-full border-0 text-black\",\n                                        placeholder: \"ഇമെയിൽ\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 27\n                                    }, this),\n                                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: errors.email\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 46\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"rounded-md h-12 px-4 w-full border-0 text-black\",\n                                        placeholder: \"പാസ്സ്‌വേർഡ് \",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 29\n                                    }, this),\n                                    errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: errors.password\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 163,\n                                        columnNumber: 49\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: loginForm,\n                                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                                        children: \"പ്രവേശിക്കുക \"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 29\n                                    }, this),\n                                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"bg-red-100 text-center rounded-md text-red-600 p-3\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 145,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"\",\n                            className: \"text-sky-400\",\n                            children: \"പാസ്സ്‌വേർഡ് മറന്നോ?\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 170,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n                    lineNumber: 139,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 136,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"sXKOzhDiUZ7HEnIWG9iJOC7rPBk=\", false, function() {\n    return [\n        _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_7__.useRouteGuardContext,\n        _Context_RouteGuardContext__WEBPACK_IMPORTED_MODULE_7__.useRouteGuardContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNjO0FBQ29FO0FBQ3RFO0FBQ2U7QUFDYjtBQUd5QjtBQUNOO0FBSy9DLFNBQVNZOztJQUdwQixTQUFTO0lBQ1QsTUFBTSxFQUFDQyxPQUFPLEVBQUUsR0FBR0gsZ0ZBQW9CQTtJQUN2QyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHSixnRkFBb0JBO0lBR3JDLE1BQU1LLFNBQVNOLDBEQUFTQTtJQVV4QixRQUFRO0lBQ1IsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFNL0MsaUJBQWlCO0lBQ2pCLE1BQU13QixlQUFlO1FBQ2pCLElBQUlKLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQ04sT0FBTztZQUNSTSxPQUFPTixLQUFLLEdBQUc7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZUYsSUFBSSxDQUFDRSxRQUFRO1lBQ3BDTSxPQUFPTixLQUFLLEdBQUc7UUFDbkI7UUFFQSxJQUFJLENBQUNFLFVBQVU7WUFDWEksT0FBT0osUUFBUSxHQUFHO1FBQ3RCO1FBQ0FLLFVBQVVEO1FBQ1ZHLGVBQWVFLE9BQU9DLElBQUksQ0FBQ04sUUFBUU8sTUFBTSxLQUFLO0lBQ2xEO0lBR0EsTUFBTUMsWUFBWTtRQUNkQyxRQUFRQyxHQUFHLENBQUM7UUFDWk47UUFFQSxJQUFJRixhQUFhO1lBQ2IsSUFBSTtnQkFDQSw2REFBNkQ7Z0JBQzdELE1BQU1yQix5RUFBMEJBLENBQUNJLE1BQU1TLE9BQU9FO2dCQUM5Q2EsUUFBUUMsR0FBRyxDQUFDO2dCQUNabkIsUUFBUU4sS0FBSzBCLFdBQVc7Z0JBR2hDLDJEQUEyRDtnQkFDM0QsNEJBQTRCO2dCQUM1QixJQUFJO2dCQUNKLFFBQVE7Z0JBQ1IsK0JBQStCO2dCQUMvQixJQUFJO2dCQUVKbEIsT0FBT21CLElBQUksQ0FBRTtZQUlMLDJDQUEyQztZQUMzQywrQ0FBK0M7WUFDaEQsbUNBQW1DO1lBRXRDLEVBQUUsT0FBT0MsS0FBSztnQkFDVkosUUFBUUMsR0FBRyxDQUFDRztnQkFDWmQsV0FBVztZQUNmO1FBQ0o7SUFFSjtJQUlBLE1BQU1lLFFBQVE7UUFDVixJQUFJO1lBQ0EsNkRBQTZEO1lBQzdELE1BQU1oQyxxRUFBc0JBLENBQUNHLE1BQU1TLE9BQU9FO1lBQzFDYSxRQUFRQyxHQUFHLENBQUM7UUFFaEIsRUFBRSxPQUFPRyxLQUFLO1lBQ1ZKLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNHO1FBQ2hCO0lBQ0o7SUFJQSxNQUFNNUIsT0FBT0Ysc0RBQU9BO0lBSXBCSixnREFBU0EsQ0FBQztRQUNOSyxpRUFBa0JBLENBQUNDLE1BQU0sQ0FBQzhCO1lBQ3RCLElBQUlBLE1BQU07Z0JBRU50QixPQUFPbUIsSUFBSSxDQUFFO1lBRWpCLE9BQU87Z0JBQ0xuQixPQUFPbUIsSUFBSSxDQUFFO2dCQUNiSCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGO0lBRU4sR0FBRyxFQUFFO0lBR0wscUJBQ0k7a0JBRUksNEVBQUNNO1lBQUlDLFdBQVU7O2dCQUNWekI7OEJBRUQsOERBQUN3QjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1ELFdBQVU7OENBQWU7Ozs7Ozs4Q0FDaEMsOERBQUNFO29DQUFHRixXQUFVOzhDQUE0Qzs7Ozs7Ozs7Ozs7O3NDQUU5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0tDLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGFBQVk7d0NBQ1pDLE9BQU83Qjt3Q0FDUDhCLFVBQVUsQ0FBQ0MsSUFBTTlCLFNBQVM4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQ3hDSSxRQUFROzs7Ozs7b0NBRVgzQixPQUFPTixLQUFLLGtCQUFJLDhEQUFDa0M7a0RBQUc1QixPQUFPTixLQUFLOzs7Ozs7a0RBQ2pDLDhEQUFDMEI7d0NBQ0dDLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGFBQVk7d0NBQ1pDLE9BQU8zQjt3Q0FDUDRCLFVBQVUsQ0FBQ0MsSUFBTTVCLFlBQVk0QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQzNDSSxRQUFROzs7Ozs7b0NBRVgzQixPQUFPSixRQUFRLGtCQUFJLDhEQUFDZ0M7a0RBQUc1QixPQUFPSixRQUFROzs7Ozs7a0RBQ3ZDLDhEQUFDaUM7d0NBQU9DLFNBQVN0Qjt3Q0FBV1MsV0FBVTtrREFBa0g7Ozs7OztvQ0FFeEtuQix5QkFBWSw4REFBQzhCO3dDQUFFWCxXQUFVO2tEQUFzRG5COzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJdkUsOERBQUNwQixpREFBSUE7NEJBQUNxRCxNQUFNOzRCQUFJZCxXQUFVO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdEO0dBOUp3QjNCOztRQUlERiw0RUFBb0JBO1FBQ3RCQSw0RUFBb0JBO1FBR3RCRCxzREFBU0E7OztLQVJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanN4PzMyODQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCwgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlL2NvbmZpZydcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC91c2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcblxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVHdWFyZENvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9Sb3V0ZUd1YXJkQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VQcm9maWxlQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L3Byb2ZpbGVDb250ZXh0XCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcblxyXG4gICAgLy9DT05URVhUXHJcbiAgICBjb25zdCB7c2V0VXNlciB9ID0gdXNlUm91dGVHdWFyZENvbnRleHQoKVxyXG4gICAgY29uc3QgeyB0ZXN0IH0gPSB1c2VSb3V0ZUd1YXJkQ29udGV4dCgpXHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICBcclxuXHJcblxyXG5cclxuICAgIC8vU1RBVEVTXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc0Zvcm1WYWxpZCwgc2V0SXNGb3JtVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gVmFsaWRhdGUgZm9ybSBcclxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyb3JzID0ge307XHJcbiAgICAgICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChlbWFpbCkpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIGludmFsaWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBzZXRFcnJvcnMoZXJyb3JzKTtcclxuICAgICAgICBzZXRJc0Zvcm1WYWxpZChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxyXG4gICAgICAgIHZhbGlkYXRlRm9ybSgpXHJcblxyXG4gICAgICAgIGlmIChpc0Zvcm1WYWxpZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy9hd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihhdXRoLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAvLyBpZihhdXRoLmN1cnJlbnRVc2VyLmVtYWlsID09IFwiamFzZWVyYWxpMjAxMkBnbWFpbC5jb21cIil7XHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKGAvYWRtaW5gKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaChgL3RlYWNoZXJzYClcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkYClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlci5hY2Nlc3NUb2tlbilcclxuICAgICAgICAgICAgICAgIC8vYXdhaXQgc2VuZEVtYWlsVmVyaWZpY2F0aW9uKGF1dGguY3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZXJpZmljYXRpb24gc2VuZCcpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ0ludmFsaWQgZW1haWwgYW5kIHBhc3N3b3JkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZXNldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2F3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmRgKVxyXG4gICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luYClcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2lnbmVkIE91dCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfSwgW10pO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBiZy1wcmltYXJ5IGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAge3Rlc3R9XHJcbiAgICAgICAgICAgICAgICB7LyogT1VUIE9GIExPQ0FUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGdyaWQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC01MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1za3ktNDAwXCI+QlJBTkQgTkFNRTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPuC0heC0leC1jeC0leC1l+C0o+C1jeC0n+C0v+C0suC1h+C0leC1jeC0leC1gSDgtKrgtY3gtLDgtLXgtYfgtLbgtL/gtJXgtY3gtJXgtYHgtJU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBoLTEyIHB4LTQgdy1mdWxsIGJvcmRlci0wIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LSH4LSu4LWG4LSv4LS/4LW9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxwPntlcnJvcnMuZW1haWx9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGgtMTIgcHgtNCB3LWZ1bGwgYm9yZGVyLTAgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLgtKrgtL7gtLjgtY3gtLjgtY3igIzgtLXgtYfgtbzgtKHgtY0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxwPntlcnJvcnMucGFzc3dvcmR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9naW5Gb3JtfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2t5LTQwMCBob3ZlcjpiZy1za3ktNTAwIGFjdGl2ZTpiZy1za3ktNTAwIHJvdW5kZWQtbWQgcC00IHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGcgdHJhbnNpdGlvbi1hbGxcIj7gtKrgtY3gtLDgtLXgtYfgtLbgtL/gtJXgtY3gtJXgtYHgtJUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAge21lc3NhZ2UgJiYgIDxwIGNsYXNzTmFtZT1cImJnLXJlZC0xMDAgdGV4dC1jZW50ZXIgcm91bmRlZC1tZCB0ZXh0LXJlZC02MDAgcC0zXCI+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jyd9IGNsYXNzTmFtZT1cInRleHQtc2t5LTQwMFwiPuC0quC0vuC0uOC1jeC0uOC1jeKAjOC0teC1h+C1vOC0oeC1jSDgtK7gtLHgtKjgtY3gtKjgtYs/PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aCIsInVzZVVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwidXNlUm91dGVHdWFyZENvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsIkxvZ2luIiwic2V0VXNlciIsInRlc3QiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaXNGb3JtVmFsaWQiLCJzZXRJc0Zvcm1WYWxpZCIsInZhbGlkYXRlRm9ybSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJsb2dpbkZvcm0iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFVzZXIiLCJwdXNoIiwiZXJyIiwicmVzZXQiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwic21hbGwiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.jsx\n"));

/***/ })

});