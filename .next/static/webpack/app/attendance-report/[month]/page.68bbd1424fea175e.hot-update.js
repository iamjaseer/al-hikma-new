"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/attendance-report/[month]/page",{

/***/ "(app-pages-browser)/./src/app/attendance-report/[month]/page.jsx":
/*!****************************************************!*\
  !*** ./src/app/attendance-report/[month]/page.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AttendanceView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Header */ \"(app-pages-browser)/./src/app/Components/Header/index.jsx\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ProtectedRoute */ \"(app-pages-browser)/./src/app/ProtectedRoute.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AttendanceView(param) {\n    let { params } = param;\n    _s();\n    let { month } = params;\n    const loadData = ()=>{\n        return new Promise((resolve)=>{\n            // Simulating an asynchronous operation\n            setTimeout(()=>{\n                onAuthStateChanged(auth, (user)=>{\n                    setLoginUser(user);\n                });\n                resolve();\n            }, 1000);\n        });\n    };\n    //STATES\n    const [getAttendance, setGetAttendance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [getHolidays, setGetHolidays] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [totalSalary, setTotalSalary] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    //FIREBASE DB\n    // const attendanceReportCollectionRef =  collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`, where('month' == 5))\n    //PRINT DAYS BY MONTH NUMBER\n    const attendanceTable = (holidays)=>{\n        //WORKING TIME START AND END\n        const startTime = 7;\n        const endTime = 8;\n        const days = [];\n        const mergedArray = [\n            ...holidays,\n            ...getAttendance\n        ];\n        days.push(mergedArray.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex justify-start items-center gap-5\",\n                    children: [\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.date.substring(item.date.indexOf(\"-\") + 4)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\" : \"bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.day\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 41\n                        }, this) : null,\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"HOLIDAY - \",\n                                    item.reason\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold\" : \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"IN \",\n                                        item.punchIn,\n                                        \" \",\n                                        startTime < item.punchIn ? \"- LPU\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"OUT \",\n                                        item.punchOut,\n                                        \" \",\n                                        endTime > item.punchOut ? \"- EPO\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 41\n                        }, this) : null\n                    ]\n                }, key, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)));\n        return days;\n    };\n    //DATE MALAYALAM\n    function dateMalayalam(date) {\n        switch(date){\n            case \"1\":\n                return \"ജനുവരി\";\n                break;\n            case \"2\":\n                return \"ഫെബ്രുവരി \";\n                break;\n            case \"3\":\n                return \"മാർച്ച്\";\n                break;\n            case \"4\":\n                return \"ഏപ്രിൽ\";\n                break;\n            case \"5\":\n                return \"മെയ്\";\n                break;\n            case \"6\":\n                return \"ജൂൺ\";\n                break;\n            case \"7\":\n                return \"ജൂലൈ\";\n                break;\n            case \"8\":\n                return \"ഓഗസ്റ്റ്\";\n                break;\n            case \"9\":\n                return \"സെപ്റ്റംബർ\";\n                break;\n            case \"10\":\n                return \"ഒക്ടോബർ\";\n                break;\n            case \"11\":\n                return \"നവംബർ\";\n                break;\n            case \"12\":\n                return \"ഡിസംബർ\";\n                break;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        //CALCULATE SALARY\n        (async ()=>{\n            try {\n                const perDay = await profile[0].salary / 30;\n                setTotalSalary(perDay);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //HOLIDAYS\n        (async ()=>{\n            try {\n                const holidaysCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"holidays-2024-2025\"));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(holidaysCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                //filteredData.map((item) => {\n                setGetHolidays(filteredData);\n            //console.log(item)\n            //});\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //ATTENDANCE\n        (async ()=>{\n            try {\n                const attendanceReportCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(loginUser[0].uid, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear())), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"month\", \"==\", 5));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(attendanceReportCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setGetAttendance(filteredData);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n    }, []);\n    //console.log(getAttendance)\n    //console.log(getHolidays)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white h-screen  px-6 py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"page-header\",\n                    title: \"ഹാജർ പട്ടിക \".concat(dateMalayalam(month), \" \").concat(new Date().getFullYear())\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 266,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid items-start px-6 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"p-0 m-0 number text-sm uppercase\",\n                        children: attendanceTable(getHolidays)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                        lineNumber: 268,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 267,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block w-full\",\n                            children: \"ജനുവരി മാസത്തെ ശമ്പളം\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 273,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"number block text-end\",\n                            children: [\n                                \"₹\",\n                                totalSalary\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 276,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 272,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n            lineNumber: 265,\n            columnNumber: 2\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n        lineNumber: 264,\n        columnNumber: 9\n    }, this);\n}\n_s(AttendanceView, \"LW8VB5eQIX9ypWMOP8qZdQS2tTg=\");\n_c = AttendanceView;\nvar _c;\n$RefreshReg$(_c, \"AttendanceView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXR0ZW5kYW5jZS1yZXBvcnQvW21vbnRoXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRTtBQUMxQjtBQUNGO0FBQ2dCO0FBQ2Y7QUFDTztBQUluQyxTQUFTVSxlQUFlLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFFbkMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFPaEIsTUFBTUUsV0FBVztRQUNiLE9BQU8sSUFBSUMsUUFBUSxDQUFDQztZQUNoQix1Q0FBdUM7WUFDdkNDLFdBQVc7Z0JBRVBDLG1CQUFtQkMsTUFBTSxDQUFDQztvQkFDdEJDLGFBQWFEO2dCQUVqQjtnQkFFQUo7WUFDSixHQUFHO1FBQ1A7SUFDSjtJQUlBLFFBQVE7SUFDUixNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUUvQyxhQUFhO0lBQ2IscUxBQXFMO0lBTXJMLDRCQUE0QjtJQUU1QixNQUFNbUIsa0JBQWtCLENBQUNDO1FBSXJCLDRCQUE0QjtRQUM1QixNQUFNQyxZQUFZO1FBQ2xCLE1BQU1DLFVBQVU7UUFJaEIsTUFBTUMsT0FBTyxFQUFFO1FBR2YsTUFBTUMsY0FBYztlQUFJSjtlQUFhUDtTQUFjO1FBR25EVSxLQUFLRSxJQUFJLENBR0wsWUFBY0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUVyQjswQkFFSSw0RUFBQ0M7b0JBQUdDLFdBQVU7O3dCQUVUSCxLQUFLSSxNQUFNLGtCQUFJLDhEQUFDQzs0QkFBS0YsV0FBVTtzQ0FBK0ZILEtBQUtNLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLTSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxPQUFPOzs7Ozs7d0JB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QSxDQUFDMEQ7Z0JBRWpDLHNDQUFzQztnQkFFdEMsTUFBTUosZUFBZUQsS0FBS0UsSUFBSSxDQUFDdkIsR0FBRyxDQUFDLENBQUN3QixNQUNoQzt3QkFDSSxHQUFHQSxJQUFJSCxJQUFJLEVBQUU7d0JBQ2JJLElBQUlELElBQUlDLEVBQUU7b0JBQ2Q7Z0JBR0pyQyxpQkFBaUJrQztZQUVyQixFQUFFLE9BQU9MLEtBQUs7Z0JBQ1ZDLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkQsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQjtRQUNKO0lBSUosR0FBRyxFQUFFO0lBS0wsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUcxQixxQkFDSSw4REFBQzFDLHVEQUFjQTtrQkFDdEIsNEVBQUN5RDtZQUFJNUIsV0FBVTs7OEJBQ1EsOERBQUNsQywwREFBTUE7b0JBQUMrRCxNQUFLO29CQUFjQyxPQUFPLGVBQXVDLE9BQXhCckIsY0FBY25DLFFBQU8sS0FBNEIsT0FBekIsSUFBSW1ELE9BQU9FLFdBQVc7Ozs7Ozs4QkFDL0YsOERBQUNDO29CQUFJNUIsV0FBVTs4QkFDWCw0RUFBQytCO3dCQUFHL0IsV0FBVTtrQ0FDVFgsZ0JBQWdCSjs7Ozs7Ozs7Ozs7OEJBR3pCLDhEQUFDMkM7b0JBQUk1QixXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQWU7Ozs7OztzQ0FHL0IsOERBQUNFOzRCQUFLRixXQUFVOztnQ0FBd0I7Z0NBQ2xDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xDO0dBaFJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdHRlbmRhbmNlLXJlcG9ydC9bbW9udGhdL3BhZ2UuanN4Pzk4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9jb25maWdcIlxyXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0L3VzZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tICcuLi8uLi9Qcm90ZWN0ZWRSb3V0ZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0dGVuZGFuY2VWaWV3KHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgICBsZXQgeyBtb250aCB9ID0gcGFyYW1zXHJcblxyXG5cclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8gU2ltdWxhdGluZyBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvZ2luVXNlcih1c2VyKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy9TVEFURVNcclxuICAgIGNvbnN0IFtnZXRBdHRlbmRhbmNlLCBzZXRHZXRBdHRlbmRhbmNlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2dldEhvbGlkYXlzLCBzZXRHZXRIb2xpZGF5c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbFNhbGFyeSwgc2V0VG90YWxTYWxhcnldID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICAvL0ZJUkVCQVNFIERCXHJcbiAgICAvLyBjb25zdCBhdHRlbmRhbmNlUmVwb3J0Q29sbGVjdGlvblJlZiA9ICBjb2xsZWN0aW9uKGRiLCBgYXR0ZW5kYW5jZS11c2VyLSR7bG9naW5Vc2VyLnVpZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsIHdoZXJlKCdtb250aCcgPT0gNSkpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vUFJJTlQgREFZUyBCWSBNT05USCBOVU1CRVJcclxuXHJcbiAgICBjb25zdCBhdHRlbmRhbmNlVGFibGUgPSAoaG9saWRheXMpID0+IHtcclxuXHJcblxyXG5cclxuICAgICAgICAvL1dPUktJTkcgVElNRSBTVEFSVCBBTkQgRU5EXHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gN1xyXG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSA4XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbWVyZ2VkQXJyYXkgPSBbLi4uaG9saWRheXMsIC4uLmdldEF0dGVuZGFuY2VdO1xyXG5cclxuXHJcbiAgICAgICAgZGF5cy5wdXNoKFxyXG5cclxuXHJcbiAgICAgICAgICAgIChtZXJnZWRBcnJheSkubWFwKChpdGVtLCBrZXkpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtNVwiIGtleT17a2V5fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnJlYXNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYmx1ZS04MDAgYm9yZGVyIHRleHQtYmx1ZS04MDAgcm91bmRlZC1mdWxsIHAtMiB3LTEwIGgtOSBmbGV4IGp1c3RpZnktY2VudGVyXCI+e2l0ZW0uZGF0ZS5zdWJzdHJpbmcoaXRlbS5kYXRlLmluZGV4T2YoXCItXCIpICsgNCl9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLnJlYXNvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3RhcnRUaW1lIDwgaXRlbS5wdW5jaEluIHx8IGVuZFRpbWUgPiBpdGVtLnB1bmNoT3V0ID8gJ2JnLXllbGxvdy00MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNDAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiB3LTEwIGgtOSBmbGV4IGp1c3RpZnktY2VudGVyJyA6ICdiZy1za3ktNDAwIGJvcmRlciBib3JkZXItc2t5LTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgdy0xMCBoLTkgZmxleCBqdXN0aWZ5LWNlbnRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmVhc29uICYmIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgYm9yZGVyLWItZ3JheS0xMDAgYm9yZGVyLWItMiBweS00ICB0ZXh0LWJsdWUtODAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhPTElEQVkgLSB7aXRlbS5yZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLnJlYXNvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3RhcnRUaW1lIDwgaXRlbS5wdW5jaEluIHx8IGVuZFRpbWUgPiBpdGVtLnB1bmNoT3V0ID8gJ2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgYm9yZGVyLWItZ3JheS0xMDAgYm9yZGVyLWItMiBweS00ICB0ZXh0LXllbGxvdy00MDAgZm9udC1zZW1pYm9sZCcgOiAnZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBib3JkZXItYi1ncmF5LTEwMCBib3JkZXItYi0yIHB5LTQgIHRleHQtc2t5LTQwMCBmb250LXNlbWlib2xkJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJTiB7aXRlbS5wdW5jaElufSB7c3RhcnRUaW1lIDwgaXRlbS5wdW5jaEluID8gJy0gTFBVJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPVVQge2l0ZW0ucHVuY2hPdXR9IHtlbmRUaW1lID4gaXRlbS5wdW5jaE91dCA/ICctIEVQTycgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRheX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLmdldERhdGUoKS0xfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUJTRU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiBkYXlzO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9EQVRFIE1BTEFZQUxBTVxyXG5cclxuICAgIGZ1bmN0aW9uIGRhdGVNYWxheWFsYW0oZGF0ZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGRhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0nOC0qOC1geC0teC0sOC0vydcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSr4LWG4LSs4LWN4LSw4LWB4LS14LSw4LS/ICdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSu4LS+4LW84LSa4LWN4LSa4LWNJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtI/gtKrgtY3gtLDgtL/gtb0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0ruC1huC0r+C1jSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSc4LWC4LW6J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJzgtYLgtLLgtYgnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0k+C0l+C0uOC1jeC0seC1jeC0seC1jSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LS44LWG4LSq4LWN4LSx4LWN4LSx4LSC4LSs4LW8J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzEwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSS4LSV4LWN4LSf4LWH4LS+4LSs4LW8J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzExJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSo4LS14LSC4LSs4LW8J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzEyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSh4LS/4LS44LSC4LSs4LW8J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG5cclxuICAgICAgICAvL0NBTENVTEFURSBTQUxBUllcclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlckRheSA9IGF3YWl0IHByb2ZpbGVbMF0uc2FsYXJ5LzMwXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG90YWxTYWxhcnkocGVyRGF5KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vSE9MSURBWVNcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbGlkYXlzQ29sbGVjdGlvblJlZiA9IGF3YWl0IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIGBob2xpZGF5cy0yMDI0LTIwMjVgKSwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KGhvbGlkYXlzQ29sbGVjdGlvblJlZiwpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYXdhaXQgZ2V0RG9jcyh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEdldEhvbGlkYXlzKGZpbHRlcmVkRGF0YSlcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCk7XHJcblxyXG5cclxuICAgICAgICAvL0FUVEVOREFOQ0VcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYgPSBhd2FpdCBxdWVyeShjb2xsZWN0aW9uKGRiLCBgYXR0ZW5kYW5jZS11c2VyLSR7bG9naW5Vc2VyWzBdLnVpZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWApLCB3aGVyZSgnbW9udGgnLCAnPT0nLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYsKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0R2V0QXR0ZW5kYW5jZShmaWx0ZXJlZERhdGEpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZ2V0QXR0ZW5kYW5jZSlcclxuICAgIC8vY29uc29sZS5sb2coZ2V0SG9saWRheXMpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxyXG4gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLXNjcmVlbiAgcHgtNiBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdHlwZT1cInBhZ2UtaGVhZGVyXCIgdGl0bGU9e2DgtLngtL7gtJzgtbwg4LSq4LSf4LWN4LSf4LS/4LSVICR7ZGF0ZU1hbGF5YWxhbShtb250aCl9ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBpdGVtcy1zdGFydCBweC02IHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwLTAgbS0wIG51bWJlciB0ZXh0LXNtIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlVGFibGUoZ2V0SG9saWRheXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctd2hpdGUgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtNSBwLTQgdGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgtJzgtKjgtYHgtLXgtLDgtL8g4LSu4LS+4LS44LSk4LWN4LSk4LWGIOC0tuC0ruC1jeC0quC0s+C0glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyIGJsb2NrIHRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oK5e3RvdGFsU2FsYXJ5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJIZWFkZXIiLCJkYiIsInVzZVVzZXJDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm90ZWN0ZWRSb3V0ZSIsIkF0dGVuZGFuY2VWaWV3IiwicGFyYW1zIiwibW9udGgiLCJsb2FkRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGgiLCJ1c2VyIiwic2V0TG9naW5Vc2VyIiwiZ2V0QXR0ZW5kYW5jZSIsInNldEdldEF0dGVuZGFuY2UiLCJnZXRIb2xpZGF5cyIsInNldEdldEhvbGlkYXlzIiwidG90YWxTYWxhcnkiLCJzZXRUb3RhbFNhbGFyeSIsImF0dGVuZGFuY2VUYWJsZSIsImhvbGlkYXlzIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImRheXMiLCJtZXJnZWRBcnJheSIsInB1c2giLCJtYXAiLCJpdGVtIiwia2V5IiwibGkiLCJjbGFzc05hbWUiLCJyZWFzb24iLCJzcGFuIiwiZGF0ZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJwdW5jaEluIiwicHVuY2hPdXQiLCJkYXkiLCJkYXRlTWFsYXlhbGFtIiwicGVyRGF5IiwicHJvZmlsZSIsInNhbGFyeSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJob2xpZGF5c0NvbGxlY3Rpb25SZWYiLCJkYXRhIiwiZmlsdGVyZWREYXRhIiwiZG9jcyIsImRvYyIsImlkIiwiYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYiLCJsb2dpblVzZXIiLCJ1aWQiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImRpdiIsInR5cGUiLCJ0aXRsZSIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/attendance-report/[month]/page.jsx\n"));

/***/ })

});