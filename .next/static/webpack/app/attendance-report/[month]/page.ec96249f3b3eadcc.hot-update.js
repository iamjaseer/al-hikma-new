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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AttendanceView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Header */ \"(app-pages-browser)/./src/app/Components/Header/index.jsx\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ProtectedRoute */ \"(app-pages-browser)/./src/app/ProtectedRoute.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AttendanceView(param) {\n    let { params } = param;\n    _s();\n    let { month } = params;\n    //CONTEXT\n    const { loginUser } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const { profile } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    //STATES\n    const [getAttendance, setGetAttendance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [getHolidays, setGetHolidays] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [totalSalary, setTotalSalary] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    //FIREBASE DB\n    // const attendanceReportCollectionRef =  collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`, where('month' == 5))\n    console.log(loginUser.uid);\n    //PRINT DAYS BY MONTH NUMBER\n    const attendanceTable = (holidays)=>{\n        //WORKING TIME START AND END\n        const startTime = 7;\n        const endTime = 8;\n        const days = [];\n        const mergedArray = [\n            ...holidays,\n            ...getAttendance\n        ];\n        days.push(mergedArray.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex justify-start items-center gap-5\",\n                    children: [\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.date.substring(item.date.indexOf(\"-\") + 4)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\" : \"bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.day\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 41\n                        }, this) : null,\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"HOLIDAY - \",\n                                    item.reason\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold\" : \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"IN \",\n                                        item.punchIn,\n                                        \" \",\n                                        startTime < item.punchIn ? \"- LPU\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"OUT \",\n                                        item.punchOut,\n                                        \" \",\n                                        endTime > item.punchOut ? \"- EPO\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 41\n                        }, this) : null\n                    ]\n                }, key, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)));\n        return days;\n    };\n    //DATE MALAYALAM\n    function dateMalayalam(date) {\n        switch(date){\n            case \"1\":\n                return \"ജനുവരി\";\n                break;\n            case \"2\":\n                return \"ഫെബ്രുവരി \";\n                break;\n            case \"3\":\n                return \"മാർച്ച്\";\n                break;\n            case \"4\":\n                return \"ഏപ്രിൽ\";\n                break;\n            case \"5\":\n                return \"മെയ്\";\n                break;\n            case \"6\":\n                return \"ജൂൺ\";\n                break;\n            case \"7\":\n                return \"ജൂലൈ\";\n                break;\n            case \"8\":\n                return \"ഓഗസ്റ്റ്\";\n                break;\n            case \"9\":\n                return \"സെപ്റ്റംബർ\";\n                break;\n            case \"10\":\n                return \"ഒക്ടോബർ\";\n                break;\n            case \"11\":\n                return \"നവംബർ\";\n                break;\n            case \"12\":\n                return \"ഡിസംബർ\";\n                break;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        //CALCULATE SALARY\n        (async ()=>{\n            try {\n                const perDay = await profile[0].salary / 30;\n                setTotalSalary(perDay);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //HOLIDAYS\n        (async ()=>{\n            try {\n                const holidaysCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"holidays-2024-2025\"));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(holidaysCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                //filteredData.map((item) => {\n                setGetHolidays(filteredData);\n            //console.log(item)\n            //});\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //ATTENDANCE\n        (async ()=>{\n            try {\n                const attendanceReportCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(profile[0].userId, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear())), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"month\", \"==\", 5));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(attendanceReportCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setGetAttendance(filteredData);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n    }, []);\n    //console.log(getAttendance)\n    //console.log(getHolidays)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white h-screen  px-6 py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"page-header\",\n                    title: \"ഹാജർ പട്ടിക \".concat(dateMalayalam(month), \" \").concat(new Date().getFullYear())\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 251,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid items-start px-6 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"p-0 m-0 number text-sm uppercase\",\n                        children: attendanceTable(getHolidays)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                        lineNumber: 253,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 252,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block w-full\",\n                            children: \"ജനുവരി മാസത്തെ ശമ്പളം\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 258,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"number block text-end\",\n                            children: [\n                                \"₹\",\n                                totalSalary\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 261,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 257,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n            lineNumber: 250,\n            columnNumber: 2\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n        lineNumber: 249,\n        columnNumber: 9\n    }, this);\n}\n_s(AttendanceView, \"0nQNoxzSDrFbxq6vnMeyTtdFpDQ=\", false, function() {\n    return [\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext,\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = AttendanceView;\nvar _c;\n$RefreshReg$(_c, \"AttendanceView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXR0ZW5kYW5jZS1yZXBvcnQvW21vbnRoXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRTtBQUMxQjtBQUNGO0FBQ2dCO0FBQ2Y7QUFDTztBQUluQyxTQUFTVSxlQUFlLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFFbkMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFJaEIsU0FBUztJQUNULE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdQLG9FQUFjQTtJQUNwQyxNQUFNLEVBQUVRLE9BQU8sRUFBRSxHQUFHUixvRUFBY0E7SUFHbEMsUUFBUTtJQUNSLE1BQU0sQ0FBQ1MsZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRS9DLGFBQWE7SUFDYixxTEFBcUw7SUFHekxhLFFBQVFDLEdBQUcsQ0FBQ1QsVUFBVVUsR0FBRztJQUdyQiw0QkFBNEI7SUFFNUIsTUFBTUMsa0JBQWtCLENBQUNDO1FBSXJCLDRCQUE0QjtRQUM1QixNQUFNQyxZQUFZO1FBQ2xCLE1BQU1DLFVBQVU7UUFJaEIsTUFBTUMsT0FBTyxFQUFFO1FBR2YsTUFBTUMsY0FBYztlQUFJSjtlQUFhVjtTQUFjO1FBR25EYSxLQUFLRSxJQUFJLENBR0wsWUFBY0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUVyQjswQkFFSSw0RUFBQ0M7b0JBQUdDLFdBQVU7O3dCQUVUSCxLQUFLSSxNQUFNLGtCQUFJLDhEQUFDQzs0QkFBS0YsV0FBVTtzQ0FBK0ZILEtBQUtNLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLTSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxPQUFPOzs7Ozs7d0JBQzNLLENBQUNSLEtBQUtJLE1BQU0s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LHNDQUFzQztnQkFFdEMsTUFBTUosZUFBZUQsS0FBS0UsSUFBSSxDQUFDcEIsR0FBRyxDQUFDLENBQUNxQixNQUNoQzt3QkFDSSxHQUFHQSxJQUFJSCxJQUFJLEVBQUU7d0JBQ2JJLElBQUlELElBQUlDLEVBQUU7b0JBQ2Q7Z0JBR0pyQyxpQkFBaUJrQztZQUVyQixFQUFFLE9BQU9ILEtBQUs7Z0JBQ1YxQixRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ3lCO1lBQ2hCO1FBQ0o7SUFJSixHQUFHLEVBQUU7SUFLTCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBRzFCLHFCQUNJLDhEQUFDdEMsdURBQWNBO2tCQUN0Qiw0RUFBQ2tEO1lBQUl4QixXQUFVOzs4QkFDUSw4REFBQy9CLDBEQUFNQTtvQkFBQ3dELE1BQUs7b0JBQWNDLE9BQU8sZUFBdUMsT0FBeEJqQixjQUFjaEMsUUFBTyxLQUE0QixPQUF6QixJQUFJNEMsT0FBT0UsV0FBVzs7Ozs7OzhCQUMvRiw4REFBQ0M7b0JBQUl4QixXQUFVOzhCQUNYLDRFQUFDMkI7d0JBQUczQixXQUFVO2tDQUNUWCxnQkFBZ0JQOzs7Ozs7Ozs7Ozs4QkFHekIsOERBQUMwQztvQkFBSXhCLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBZTs7Ozs7O3NDQUcvQiw4REFBQ0U7NEJBQUtGLFdBQVU7O2dDQUF3QjtnQ0FDbENoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xDO0dBalF3QlQ7O1FBT0VKLGdFQUFjQTtRQUNoQkEsZ0VBQWNBOzs7S0FSZEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdHRlbmRhbmNlLXJlcG9ydC9bbW9udGhdL3BhZ2UuanN4Pzk4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9jb25maWdcIlxyXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0L3VzZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tICcuLi8uLi9Qcm90ZWN0ZWRSb3V0ZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0dGVuZGFuY2VWaWV3KHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgICBsZXQgeyBtb250aCB9ID0gcGFyYW1zXHJcblxyXG5cclxuXHJcbiAgICAvL0NPTlRFWFRcclxuICAgIGNvbnN0IHsgbG9naW5Vc2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpXHJcbiAgICBjb25zdCB7IHByb2ZpbGUgfSA9IHVzZVVzZXJDb250ZXh0KClcclxuXHJcblxyXG4gICAgLy9TVEFURVNcclxuICAgIGNvbnN0IFtnZXRBdHRlbmRhbmNlLCBzZXRHZXRBdHRlbmRhbmNlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2dldEhvbGlkYXlzLCBzZXRHZXRIb2xpZGF5c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbFNhbGFyeSwgc2V0VG90YWxTYWxhcnldID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICAvL0ZJUkVCQVNFIERCXHJcbiAgICAvLyBjb25zdCBhdHRlbmRhbmNlUmVwb3J0Q29sbGVjdGlvblJlZiA9ICBjb2xsZWN0aW9uKGRiLCBgYXR0ZW5kYW5jZS11c2VyLSR7bG9naW5Vc2VyLnVpZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsIHdoZXJlKCdtb250aCcgPT0gNSkpXHJcblxyXG5cclxuY29uc29sZS5sb2cobG9naW5Vc2VyLnVpZClcclxuXHJcblxyXG4gICAgLy9QUklOVCBEQVlTIEJZIE1PTlRIIE5VTUJFUlxyXG5cclxuICAgIGNvbnN0IGF0dGVuZGFuY2VUYWJsZSA9IChob2xpZGF5cykgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vV09SS0lORyBUSU1FIFNUQVJUIEFORCBFTkRcclxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSA3XHJcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IDhcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBkYXlzID0gW107XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtZXJnZWRBcnJheSA9IFsuLi5ob2xpZGF5cywgLi4uZ2V0QXR0ZW5kYW5jZV07XHJcblxyXG5cclxuICAgICAgICBkYXlzLnB1c2goXHJcblxyXG5cclxuICAgICAgICAgICAgKG1lcmdlZEFycmF5KS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGdhcC01XCIga2V5PXtrZXl9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmVhc29uICYmIDxzcGFuIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1ibHVlLTgwMCBib3JkZXIgdGV4dC1ibHVlLTgwMCByb3VuZGVkLWZ1bGwgcC0yIHctMTAgaC05IGZsZXgganVzdGlmeS1jZW50ZXJcIj57aXRlbS5kYXRlLnN1YnN0cmluZyhpdGVtLmRhdGUuaW5kZXhPZihcIi1cIikgKyA0KX08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0ucmVhc29uID8gPHNwYW4gY2xhc3NOYW1lPXtzdGFydFRpbWUgPCBpdGVtLnB1bmNoSW4gfHwgZW5kVGltZSA+IGl0ZW0ucHVuY2hPdXQgPyAnYmcteWVsbG93LTQwMCBib3JkZXIgYm9yZGVyLXllbGxvdy00MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIHctMTAgaC05IGZsZXgganVzdGlmeS1jZW50ZXInIDogJ2JnLXNreS00MDAgYm9yZGVyIGJvcmRlci1za3ktNDAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiB3LTEwIGgtOSBmbGV4IGp1c3RpZnktY2VudGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yZWFzb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBib3JkZXItYi1ncmF5LTEwMCBib3JkZXItYi0yIHB5LTQgIHRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSE9MSURBWSAtIHtpdGVtLnJlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0ucmVhc29uID8gPHNwYW4gY2xhc3NOYW1lPXtzdGFydFRpbWUgPCBpdGVtLnB1bmNoSW4gfHwgZW5kVGltZSA+IGl0ZW0ucHVuY2hPdXQgPyAnZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBib3JkZXItYi1ncmF5LTEwMCBib3JkZXItYi0yIHB5LTQgIHRleHQteWVsbG93LTQwMCBmb250LXNlbWlib2xkJyA6ICdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC1za3ktNDAwIGZvbnQtc2VtaWJvbGQnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOIHtpdGVtLnB1bmNoSW59IHtzdGFydFRpbWUgPCBpdGVtLnB1bmNoSW4gPyAnLSBMUFUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9VVCB7aXRlbS5wdW5jaE91dH0ge2VuZFRpbWUgPiBpdGVtLnB1bmNoT3V0ID8gJy0gRVBPJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgYm9yZGVyLWItZ3JheS0xMDAgYm9yZGVyLWItMiBweS00ICB0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF5fTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKCkuZ2V0RGF0ZSgpLTF9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQlNFTlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIGRheXM7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL0RBVEUgTUFMQVlBTEFNXHJcblxyXG4gICAgZnVuY3Rpb24gZGF0ZU1hbGF5YWxhbShkYXRlKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSc4LSo4LWB4LS14LSw4LS/J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtKvgtYbgtKzgtY3gtLDgtYHgtLXgtLDgtL8gJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtK7gtL7gtbzgtJrgtY3gtJrgtY0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0j+C0quC1jeC0sOC0v+C1vSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSu4LWG4LSv4LWNJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJzgtYLgtbonXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0nOC1guC0suC1iCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LST4LSX4LS44LWN4LSx4LWN4LSx4LWNJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzknOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtLjgtYbgtKrgtY3gtLHgtY3gtLHgtILgtKzgtbwnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJLgtJXgtY3gtJ/gtYfgtL7gtKzgtbwnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtKjgtLXgtILgtKzgtbwnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtKHgtL/gtLjgtILgtKzgtbwnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vQ0FMQ1VMQVRFIFNBTEFSWVxyXG5cclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyRGF5ID0gYXdhaXQgcHJvZmlsZVswXS5zYWxhcnkvMzBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbFNhbGFyeShwZXJEYXkpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9IT0xJREFZU1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaG9saWRheXNDb2xsZWN0aW9uUmVmID0gYXdhaXQgcXVlcnkoY29sbGVjdGlvbihkYiwgYGhvbGlkYXlzLTIwMjQtMjAyNWApLCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoaG9saWRheXNDb2xsZWN0aW9uUmVmLCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0R2V0SG9saWRheXMoZmlsdGVyZWREYXRhKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKTtcclxuXHJcblxyXG4gICAgICAgIC8vQVRURU5EQU5DRVxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRhbmNlUmVwb3J0Q29sbGVjdGlvblJlZiA9IGF3YWl0IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIGBhdHRlbmRhbmNlLXVzZXItJHtwcm9maWxlWzBdLnVzZXJJZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWApLCB3aGVyZSgnbW9udGgnLCAnPT0nLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYsKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0R2V0QXR0ZW5kYW5jZShmaWx0ZXJlZERhdGEpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZ2V0QXR0ZW5kYW5jZSlcclxuICAgIC8vY29uc29sZS5sb2coZ2V0SG9saWRheXMpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxyXG4gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLXNjcmVlbiAgcHgtNiBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdHlwZT1cInBhZ2UtaGVhZGVyXCIgdGl0bGU9e2DgtLngtL7gtJzgtbwg4LSq4LSf4LWN4LSf4LS/4LSVICR7ZGF0ZU1hbGF5YWxhbShtb250aCl9ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBpdGVtcy1zdGFydCBweC02IHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwLTAgbS0wIG51bWJlciB0ZXh0LXNtIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlVGFibGUoZ2V0SG9saWRheXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctd2hpdGUgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtNSBwLTQgdGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgtJzgtKjgtYHgtLXgtLDgtL8g4LSu4LS+4LS44LSk4LWN4LSk4LWGIOC0tuC0ruC1jeC0quC0s+C0glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyIGJsb2NrIHRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oK5e3RvdGFsU2FsYXJ5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJIZWFkZXIiLCJkYiIsInVzZVVzZXJDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm90ZWN0ZWRSb3V0ZSIsIkF0dGVuZGFuY2VWaWV3IiwicGFyYW1zIiwibW9udGgiLCJsb2dpblVzZXIiLCJwcm9maWxlIiwiZ2V0QXR0ZW5kYW5jZSIsInNldEdldEF0dGVuZGFuY2UiLCJnZXRIb2xpZGF5cyIsInNldEdldEhvbGlkYXlzIiwidG90YWxTYWxhcnkiLCJzZXRUb3RhbFNhbGFyeSIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiLCJhdHRlbmRhbmNlVGFibGUiLCJob2xpZGF5cyIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJkYXlzIiwibWVyZ2VkQXJyYXkiLCJwdXNoIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwiY2xhc3NOYW1lIiwicmVhc29uIiwic3BhbiIsImRhdGUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicHVuY2hJbiIsInB1bmNoT3V0IiwiZGF5IiwiZGF0ZU1hbGF5YWxhbSIsInBlckRheSIsInNhbGFyeSIsImVyciIsImhvbGlkYXlzQ29sbGVjdGlvblJlZiIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwiZG9jIiwiaWQiLCJhdHRlbmRhbmNlUmVwb3J0Q29sbGVjdGlvblJlZiIsInVzZXJJZCIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZGl2IiwidHlwZSIsInRpdGxlIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/attendance-report/[month]/page.jsx\n"));

/***/ })

});