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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AttendanceView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Header */ \"(app-pages-browser)/./src/app/Components/Header/index.jsx\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ProtectedRoute */ \"(app-pages-browser)/./src/app/ProtectedRoute.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AttendanceView(param) {\n    let { params } = param;\n    _s();\n    let { month } = params;\n    //CONTEXT\n    const userId = localStorage.getItem(\"userId\");\n    const { profile } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    //STATES\n    const [getAttendance, setGetAttendance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [getHolidays, setGetHolidays] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [totalSalary, setTotalSalary] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    //FIREBASE DB\n    // const attendanceReportCollectionRef =  collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`, where('month' == 5))\n    //PRINT DAYS BY MONTH NUMBER\n    const attendanceTable = (holidays)=>{\n        //WORKING TIME START AND END\n        const startTime = 7;\n        const endTime = 8;\n        const days = [];\n        const mergedArray = [\n            ...holidays,\n            ...getAttendance\n        ];\n        days.push(mergedArray.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex justify-start items-center gap-5\",\n                    children: [\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.date.substring(item.date.indexOf(\"-\") + 4)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\" : \"bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.day\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 41\n                        }, this) : null,\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"HOLIDAY - \",\n                                    item.reason\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold\" : \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"IN \",\n                                        item.punchIn,\n                                        \" \",\n                                        startTime < item.punchIn ? \"- LPU\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"OUT \",\n                                        item.punchOut,\n                                        \" \",\n                                        endTime > item.punchOut ? \"- EPO\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 41\n                        }, this) : null\n                    ]\n                }, key, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)));\n        return days;\n    };\n    //DATE MALAYALAM\n    function dateMalayalam(date) {\n        switch(date){\n            case \"1\":\n                return \"ജനുവരി\";\n                break;\n            case \"2\":\n                return \"ഫെബ്രുവരി \";\n                break;\n            case \"3\":\n                return \"മാർച്ച്\";\n                break;\n            case \"4\":\n                return \"ഏപ്രിൽ\";\n                break;\n            case \"5\":\n                return \"മെയ്\";\n                break;\n            case \"6\":\n                return \"ജൂൺ\";\n                break;\n            case \"7\":\n                return \"ജൂലൈ\";\n                break;\n            case \"8\":\n                return \"ഓഗസ്റ്റ്\";\n                break;\n            case \"9\":\n                return \"സെപ്റ്റംബർ\";\n                break;\n            case \"10\":\n                return \"ഒക്ടോബർ\";\n                break;\n            case \"11\":\n                return \"നവംബർ\";\n                break;\n            case \"12\":\n                return \"ഡിസംബർ\";\n                break;\n        }\n    }\n    console.log(getAttendance.length);\n    //CALCULATE SALARY\n    const paySalary = ()=>{\n        const perDay = profile[0].salary / 30;\n        return;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        //HOLIDAYS\n        (async ()=>{\n            try {\n                const holidaysCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"holidays-2024-2025\"));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(holidaysCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                //filteredData.map((item) => {\n                setGetHolidays(filteredData);\n            //console.log(item)\n            //});\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //ATTENDANCE\n        (async ()=>{\n            try {\n                const attendanceReportCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(userId, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear())), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"month\", \"==\", 5));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(attendanceReportCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setGetAttendance(filteredData);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        paySalary();\n    }, []);\n    //console.log(getAttendance)\n    //console.log(getHolidays)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white h-screen  px-6 py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"page-header\",\n                    title: \"ഹാജർ പട്ടിക \".concat(dateMalayalam(month), \" \").concat(new Date().getFullYear())\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 247,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid items-start px-6 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"p-0 m-0 number text-sm uppercase\",\n                        children: attendanceTable(getHolidays)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                        lineNumber: 249,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 248,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block w-full\",\n                            children: \"ജനുവരി മാസത്തെ ശമ്പളം\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 254,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"number block text-end\",\n                            children: [\n                                \"₹\",\n                                totalSalary\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 257,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 253,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n            lineNumber: 246,\n            columnNumber: 2\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n        lineNumber: 245,\n        columnNumber: 9\n    }, this);\n}\n_s(AttendanceView, \"/fZhSPac9h4e1Z8Vc+APdKc+mJE=\", false, function() {\n    return [\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = AttendanceView;\nvar _c;\n$RefreshReg$(_c, \"AttendanceView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXR0ZW5kYW5jZS1yZXBvcnQvW21vbnRoXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRTtBQUMxQjtBQUNGO0FBQ2dCO0FBQ2Y7QUFDTztBQUluQyxTQUFTVSxlQUFlLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFFbkMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFJaEIsU0FBUztJQUNULE1BQU1FLFNBQVNDLGFBQWFDLE9BQU8sQ0FBQztJQUNwQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHVixvRUFBY0E7SUFTbEMsUUFBUTtJQUNSLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBRS9DLGFBQWE7SUFDYixxTEFBcUw7SUFNckwsNEJBQTRCO0lBRTVCLE1BQU1lLGtCQUFrQixDQUFDQztRQUlyQiw0QkFBNEI7UUFDNUIsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxVQUFVO1FBSWhCLE1BQU1DLE9BQU8sRUFBRTtRQUdmLE1BQU1DLGNBQWM7ZUFBSUo7ZUFBYVA7U0FBYztRQUduRFUsS0FBS0UsSUFBSSxDQUdMLFlBQWNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFFckI7MEJBRUksNEVBQUNDO29CQUFHQyxXQUFVOzt3QkFFVEgsS0FBS0ksTUFBTSxrQkFBSSw4REFBQ0M7NEJBQUtGLFdBQVU7c0NBQStGSCxLQUFLTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsS0FBS00sSUFBSSxDQUFDRSxPQUFPLENBQUMsT0FBTzs7Ozs7O3dCQUMzSyxDQUFDUixLQUFLSSxNQUFNLGlCQUFHLDhEQUFDQzs0QkFBS0YsV0FBV1QsWUFBWU0sS0FBS1MsT0FB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O2dCQUdKckMsaUJBQWlCa0M7WUFFckIsRUFBRSxPQUFPSSxLQUFLO2dCQUNWWixRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ1c7WUFDaEI7UUFDSjtRQUVBVDtJQUVKLEdBQUcsRUFBRTtJQUtMLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFHMUIscUJBQ0ksOERBQUN0Qyx1REFBY0E7a0JBQ3RCLDRFQUFDb0Q7WUFBSTNCLFdBQVU7OzhCQUNRLDhEQUFDOUIsMERBQU1BO29CQUFDMEQsTUFBSztvQkFBY0MsT0FBTyxlQUF1QyxPQUF4QnBCLGNBQWMvQixRQUFPLEtBQTRCLE9BQXpCLElBQUk4QyxPQUFPRSxXQUFXOzs7Ozs7OEJBQy9GLDhEQUFDQztvQkFBSTNCLFdBQVU7OEJBQ1gsNEVBQUM4Qjt3QkFBRzlCLFdBQVU7a0NBQ1RYLGdCQUFnQko7Ozs7Ozs7Ozs7OzhCQUd6Qiw4REFBQzBDO29CQUFJM0IsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFlOzs7Ozs7c0NBRy9CLDhEQUFDRTs0QkFBS0YsV0FBVTs7Z0NBQXdCO2dDQUNsQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQztHQTdQd0JYOztRQVFBSixnRUFBY0E7OztLQVJkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F0dGVuZGFuY2UtcmVwb3J0L1ttb250aF0vcGFnZS5qc3g/OTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2NvbmZpZ1wiXHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbnRleHQvdXNlckNvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFByb3RlY3RlZFJvdXRlIGZyb20gJy4uLy4uL1Byb3RlY3RlZFJvdXRlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXR0ZW5kYW5jZVZpZXcoeyBwYXJhbXMgfSkge1xyXG5cclxuICAgIGxldCB7IG1vbnRoIH0gPSBwYXJhbXNcclxuXHJcblxyXG5cclxuICAgIC8vQ09OVEVYVFxyXG4gICAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgY29uc3QgeyBwcm9maWxlIH0gPSB1c2VVc2VyQ29udGV4dCgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vU1RBVEVTXHJcbiAgICBjb25zdCBbZ2V0QXR0ZW5kYW5jZSwgc2V0R2V0QXR0ZW5kYW5jZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtnZXRIb2xpZGF5cywgc2V0R2V0SG9saWRheXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG90YWxTYWxhcnksIHNldFRvdGFsU2FsYXJ5XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgLy9GSVJFQkFTRSBEQlxyXG4gICAgLy8gY29uc3QgYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYgPSAgY29sbGVjdGlvbihkYiwgYGF0dGVuZGFuY2UtdXNlci0ke2xvZ2luVXNlci51aWR9LW1vbnRoLSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0teWVhci0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLCB3aGVyZSgnbW9udGgnID09IDUpKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL1BSSU5UIERBWVMgQlkgTU9OVEggTlVNQkVSXHJcblxyXG4gICAgY29uc3QgYXR0ZW5kYW5jZVRhYmxlID0gKGhvbGlkYXlzKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9XT1JLSU5HIFRJTUUgU1RBUlQgQU5EIEVORFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IDdcclxuICAgICAgICBjb25zdCBlbmRUaW1lID0gOFxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5ID0gWy4uLmhvbGlkYXlzLCAuLi5nZXRBdHRlbmRhbmNlXTtcclxuXHJcblxyXG4gICAgICAgIGRheXMucHVzaChcclxuXHJcblxyXG4gICAgICAgICAgICAobWVyZ2VkQXJyYXkpLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZ2FwLTVcIiBrZXk9e2tleX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yZWFzb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWJsdWUtODAwIGJvcmRlciB0ZXh0LWJsdWUtODAwIHJvdW5kZWQtZnVsbCBwLTIgdy0xMCBoLTkgZmxleCBqdXN0aWZ5LWNlbnRlclwiPntpdGVtLmRhdGUuc3Vic3RyaW5nKGl0ZW0uZGF0ZS5pbmRleE9mKFwiLVwiKSArIDQpfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5yZWFzb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiB8fCBlbmRUaW1lID4gaXRlbS5wdW5jaE91dCA/ICdiZy15ZWxsb3ctNDAwIGJvcmRlciBib3JkZXIteWVsbG93LTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgdy0xMCBoLTkgZmxleCBqdXN0aWZ5LWNlbnRlcicgOiAnYmctc2t5LTQwMCBib3JkZXIgYm9yZGVyLXNreS00MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIHctMTAgaC05IGZsZXgganVzdGlmeS1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnJlYXNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIT0xJREFZIC0ge2l0ZW0ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5yZWFzb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiB8fCBlbmRUaW1lID4gaXRlbS5wdW5jaE91dCA/ICdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC15ZWxsb3ctNDAwIGZvbnQtc2VtaWJvbGQnIDogJ2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgYm9yZGVyLWItZ3JheS0xMDAgYm9yZGVyLWItMiBweS00ICB0ZXh0LXNreS00MDAgZm9udC1zZW1pYm9sZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU4ge2l0ZW0ucHVuY2hJbn0ge3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiA/ICctIExQVScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1VUIHtpdGVtLnB1bmNoT3V0fSB7ZW5kVGltZSA+IGl0ZW0ucHVuY2hPdXQgPyAnLSBFUE8nIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBib3JkZXItYi1ncmF5LTEwMCBib3JkZXItYi0yIHB5LTQgIHRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS5nZXREYXRlKCktMX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFCU0VOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gZGF5cztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vREFURSBNQUxBWUFMQU1cclxuXHJcbiAgICBmdW5jdGlvbiBkYXRlTWFsYXlhbGFtKGRhdGUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkYXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJzgtKjgtYHgtLXgtLDgtL8nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0q+C1huC0rOC1jeC0sOC1geC0teC0sOC0vyAnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0ruC0vuC1vOC0muC1jeC0muC1jSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSP4LSq4LWN4LSw4LS/4LW9J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtK7gtYbgtK/gtY0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0nOC1guC1uidcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSc4LWC4LSy4LWIJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJPgtJfgtLjgtY3gtLHgtY3gtLHgtY0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0uOC1huC0quC1jeC0seC1jeC0seC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0kuC0leC1jeC0n+C1h+C0vuC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0qOC0teC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0oeC0v+C0uOC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coZ2V0QXR0ZW5kYW5jZS5sZW5ndGgpXHJcblxyXG4gICAgLy9DQUxDVUxBVEUgU0FMQVJZXHJcbiAgICAgICAgY29uc3QgcGF5U2FsYXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwZXJEYXkgPSAgcHJvZmlsZVswXS5zYWxhcnkvMzBcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuLy9IT0xJREFZU1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaG9saWRheXNDb2xsZWN0aW9uUmVmID0gYXdhaXQgcXVlcnkoY29sbGVjdGlvbihkYiwgYGhvbGlkYXlzLTIwMjQtMjAyNWApLCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoaG9saWRheXNDb2xsZWN0aW9uUmVmLCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0R2V0SG9saWRheXMoZmlsdGVyZWREYXRhKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKTtcclxuXHJcblxyXG4gICAgICAgIC8vQVRURU5EQU5DRVxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGFuY2VSZXBvcnRDb2xsZWN0aW9uUmVmID0gYXdhaXQgcXVlcnkoY29sbGVjdGlvbihkYiwgYGF0dGVuZGFuY2UtdXNlci0ke3VzZXJJZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWApLCB3aGVyZSgnbW9udGgnLCAnPT0nLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYsKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0R2V0QXR0ZW5kYW5jZShmaWx0ZXJlZERhdGEpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICBwYXlTYWxhcnkoKVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGdldEF0dGVuZGFuY2UpXHJcbiAgICAvL2NvbnNvbGUubG9nKGdldEhvbGlkYXlzKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cclxuIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC1zY3JlZW4gIHB4LTYgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHR5cGU9XCJwYWdlLWhlYWRlclwiIHRpdGxlPXtg4LS54LS+4LSc4LW8IOC0quC0n+C1jeC0n+C0v+C0lSAke2RhdGVNYWxheWFsYW0obW9udGgpfSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaXRlbXMtc3RhcnQgcHgtNiBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicC0wIG0tMCBudW1iZXIgdGV4dC1zbSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZVRhYmxlKGdldEhvbGlkYXlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLXdoaXRlIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZ2FwLTUgcC00IHRleHQtYmx1ZS04MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LSc4LSo4LWB4LS14LSw4LS/IOC0ruC0vuC0uOC0pOC1jeC0pOC1hiDgtLbgtK7gtY3gtKrgtLPgtIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlciBibG9jayB0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKCuXt0b3RhbFNhbGFyeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L1Byb3RlY3RlZFJvdXRlPlxyXG4gICAgKVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiSGVhZGVyIiwiZGIiLCJ1c2VVc2VyQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvdGVjdGVkUm91dGUiLCJBdHRlbmRhbmNlVmlldyIsInBhcmFtcyIsIm1vbnRoIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2ZpbGUiLCJnZXRBdHRlbmRhbmNlIiwic2V0R2V0QXR0ZW5kYW5jZSIsImdldEhvbGlkYXlzIiwic2V0R2V0SG9saWRheXMiLCJ0b3RhbFNhbGFyeSIsInNldFRvdGFsU2FsYXJ5IiwiYXR0ZW5kYW5jZVRhYmxlIiwiaG9saWRheXMiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiZGF5cyIsIm1lcmdlZEFycmF5IiwicHVzaCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsaSIsImNsYXNzTmFtZSIsInJlYXNvbiIsInNwYW4iLCJkYXRlIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInB1bmNoSW4iLCJwdW5jaE91dCIsImRheSIsImRhdGVNYWxheWFsYW0iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicGF5U2FsYXJ5IiwicGVyRGF5Iiwic2FsYXJ5IiwiaG9saWRheXNDb2xsZWN0aW9uUmVmIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImRvY3MiLCJkb2MiLCJpZCIsImVyciIsImF0dGVuZGFuY2VSZXBvcnRDb2xsZWN0aW9uUmVmIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJkaXYiLCJ0eXBlIiwidGl0bGUiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/attendance-report/[month]/page.jsx\n"));

/***/ })

});