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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AttendanceView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Header */ \"(app-pages-browser)/./src/app/Components/Header/index.jsx\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var _Context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/userContext */ \"(app-pages-browser)/./src/app/Context/userContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ProtectedRoute */ \"(app-pages-browser)/./src/app/ProtectedRoute.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AttendanceView(param) {\n    let { params } = param;\n    _s();\n    let { month } = params;\n    //CONTEXT\n    const { loginUser } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const { profile } = (0,_Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext)();\n    const userId = localStorage.getItem(\"userId\");\n    console.log(storedCount);\n    //STATES\n    const [getAttendance, setGetAttendance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [getHolidays, setGetHolidays] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [totalSalary, setTotalSalary] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    //FIREBASE DB\n    // const attendanceReportCollectionRef =  collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`, where('month' == 5))\n    //PRINT DAYS BY MONTH NUMBER\n    const attendanceTable = (holidays)=>{\n        //WORKING TIME START AND END\n        const startTime = 7;\n        const endTime = 8;\n        const days = [];\n        const mergedArray = [\n            ...holidays,\n            ...getAttendance\n        ];\n        days.push(mergedArray.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex justify-start items-center gap-5\",\n                    children: [\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.date.substring(item.date.indexOf(\"-\") + 4)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\" : \"bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center\",\n                            children: item.day\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 41\n                        }, this) : null,\n                        item.reason && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"HOLIDAY - \",\n                                    item.reason\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 41\n                        }, this),\n                        !item.reason ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: startTime < item.punchIn || endTime > item.punchOut ? \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold\" : \"flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"IN \",\n                                        item.punchIn,\n                                        \" \",\n                                        startTime < item.punchIn ? \"- LPU\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"OUT \",\n                                        item.punchOut,\n                                        \" \",\n                                        endTime > item.punchOut ? \"- EPO\" : null\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 41\n                        }, this) : null\n                    ]\n                }, key, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)));\n        return days;\n    };\n    //DATE MALAYALAM\n    function dateMalayalam(date) {\n        switch(date){\n            case \"1\":\n                return \"ജനുവരി\";\n                break;\n            case \"2\":\n                return \"ഫെബ്രുവരി \";\n                break;\n            case \"3\":\n                return \"മാർച്ച്\";\n                break;\n            case \"4\":\n                return \"ഏപ്രിൽ\";\n                break;\n            case \"5\":\n                return \"മെയ്\";\n                break;\n            case \"6\":\n                return \"ജൂൺ\";\n                break;\n            case \"7\":\n                return \"ജൂലൈ\";\n                break;\n            case \"8\":\n                return \"ഓഗസ്റ്റ്\";\n                break;\n            case \"9\":\n                return \"സെപ്റ്റംബർ\";\n                break;\n            case \"10\":\n                return \"ഒക്ടോബർ\";\n                break;\n            case \"11\":\n                return \"നവംബർ\";\n                break;\n            case \"12\":\n                return \"ഡിസംബർ\";\n                break;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        //CALCULATE SALARY\n        (async ()=>{\n            try {\n                const perDay = await profile[0].salary / 30;\n                setTotalSalary(perDay);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //HOLIDAYS\n        (async ()=>{\n            try {\n                const holidaysCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"holidays-2024-2025\"));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(holidaysCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                //filteredData.map((item) => {\n                setGetHolidays(filteredData);\n            //console.log(item)\n            //});\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n        //ATTENDANCE\n        (async ()=>{\n            try {\n                const attendanceReportCollectionRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(loginUser[0].uid, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear())), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"month\", \"==\", 5));\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(attendanceReportCollectionRef));\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setGetAttendance(filteredData);\n            } catch (err) {\n                console.log(\"error\");\n                console.log(err);\n            }\n        })();\n    }, []);\n    //console.log(getAttendance)\n    //console.log(getHolidays)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white h-screen  px-6 py-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"page-header\",\n                    title: \"ഹാജർ പട്ടിക \".concat(dateMalayalam(month), \" \").concat(new Date().getFullYear())\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 259,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid items-start px-6 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"p-0 m-0 number text-sm uppercase\",\n                        children: attendanceTable(getHolidays)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                        lineNumber: 261,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 260,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block w-full\",\n                            children: \"ജനുവരി മാസത്തെ ശമ്പളം\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 266,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"number block text-end\",\n                            children: [\n                                \"₹\",\n                                totalSalary\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                            lineNumber: 269,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n                    lineNumber: 265,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n            lineNumber: 258,\n            columnNumber: 2\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\attendance-report\\\\[month]\\\\page.jsx\",\n        lineNumber: 257,\n        columnNumber: 9\n    }, this);\n}\n_s(AttendanceView, \"0nQNoxzSDrFbxq6vnMeyTtdFpDQ=\", false, function() {\n    return [\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext,\n        _Context_userContext__WEBPACK_IMPORTED_MODULE_4__.useUserContext\n    ];\n});\n_c = AttendanceView;\nvar _c;\n$RefreshReg$(_c, \"AttendanceView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXR0ZW5kYW5jZS1yZXBvcnQvW21vbnRoXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRTtBQUMxQjtBQUNGO0FBQ2dCO0FBQ2Y7QUFDTztBQUluQyxTQUFTVSxlQUFlLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFFbkMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFJaEIsU0FBUztJQUNULE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdQLG9FQUFjQTtJQUNwQyxNQUFNLEVBQUVRLE9BQU8sRUFBRSxHQUFHUixvRUFBY0E7SUFJbEMsTUFBTVMsU0FBU0MsYUFBYUMsT0FBTyxDQUFDO0lBR3hDQyxRQUFRQyxHQUFHLENBQUNDO0lBR1IsUUFBUTtJQUNSLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRS9DLGFBQWE7SUFDYixxTEFBcUw7SUFNckwsNEJBQTRCO0lBRTVCLE1BQU1tQixrQkFBa0IsQ0FBQ0M7UUFJckIsNEJBQTRCO1FBQzVCLE1BQU1DLFlBQVk7UUFDbEIsTUFBTUMsVUFBVTtRQUloQixNQUFNQyxPQUFPLEVBQUU7UUFHZixNQUFNQyxjQUFjO2VBQUlKO2VBQWFQO1NBQWM7UUFHbkRVLEtBQUtFLElBQUksQ0FHTCxZQUFjQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBRXJCOzBCQUVJLDRFQUFDQztvQkFBR0MsV0FBVTs7d0JBRVRILEtBQUtJLE1BQU0sa0JBQUksOERBQUNDOzRCQUFLRixXQUFVO3NDQUErRkgsS0FBS00sSUFBSSxDQUFDQyxTQUFTLENBQUNQLEtBQUtNLElBQUksQ0FBQ0UsT0FBTyxDQUFDLE9BQU87Ozs7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Q0FBQ0MseURBQUtBLENBQUN1RDtnQkFFakMsc0NBQXNDO2dCQUV0QyxNQUFNSixlQUFlRCxLQUFLRSxJQUFJLENBQUNwQixHQUFHLENBQUMsQ0FBQ3FCLE1BQ2hDO3dCQUNJLEdBQUdBLElBQUlILElBQUksRUFBRTt3QkFDYkksSUFBSUQsSUFBSUMsRUFBRTtvQkFDZDtnQkFHSmxDLGlCQUFpQitCO1lBRXJCLEVBQUUsT0FBT0gsS0FBSztnQkFDVmhDLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkQsUUFBUUMsR0FBRyxDQUFDK0I7WUFDaEI7UUFDSjtJQUlKLEdBQUcsRUFBRTtJQUtMLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFHMUIscUJBQ0ksOERBQUN6Qyx1REFBY0E7a0JBQ3RCLDRFQUFDcUQ7WUFBSXhCLFdBQVU7OzhCQUNRLDhEQUFDbEMsMERBQU1BO29CQUFDMkQsTUFBSztvQkFBY0MsT0FBTyxlQUF1QyxPQUF4QmpCLGNBQWNuQyxRQUFPLEtBQTRCLE9BQXpCLElBQUkrQyxPQUFPRSxXQUFXOzs7Ozs7OEJBQy9GLDhEQUFDQztvQkFBSXhCLFdBQVU7OEJBQ1gsNEVBQUMyQjt3QkFBRzNCLFdBQVU7a0NBQ1RYLGdCQUFnQko7Ozs7Ozs7Ozs7OzhCQUd6Qiw4REFBQ3VDO29CQUFJeEIsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFlOzs7Ozs7c0NBRy9CLDhEQUFDRTs0QkFBS0YsV0FBVTs7Z0NBQXdCO2dDQUNsQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQztHQXpRd0JmOztRQU9FSixnRUFBY0E7UUFDaEJBLGdFQUFjQTs7O0tBUmRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXR0ZW5kYW5jZS1yZXBvcnQvW21vbnRoXS9wYWdlLmpzeD85ODhlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvY29uZmlnXCJcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29udGV4dC91c2VyQ29udGV4dFwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSAnLi4vLi4vUHJvdGVjdGVkUm91dGUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdHRlbmRhbmNlVmlldyh7IHBhcmFtcyB9KSB7XHJcblxyXG4gICAgbGV0IHsgbW9udGggfSA9IHBhcmFtc1xyXG5cclxuXHJcblxyXG4gICAgLy9DT05URVhUXHJcbiAgICBjb25zdCB7IGxvZ2luVXNlciB9ID0gdXNlVXNlckNvbnRleHQoKVxyXG4gICAgY29uc3QgeyBwcm9maWxlIH0gPSB1c2VVc2VyQ29udGV4dCgpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcblxyXG5cclxuY29uc29sZS5sb2coc3RvcmVkQ291bnQpXHJcblxyXG5cclxuICAgIC8vU1RBVEVTXHJcbiAgICBjb25zdCBbZ2V0QXR0ZW5kYW5jZSwgc2V0R2V0QXR0ZW5kYW5jZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtnZXRIb2xpZGF5cywgc2V0R2V0SG9saWRheXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG90YWxTYWxhcnksIHNldFRvdGFsU2FsYXJ5XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgLy9GSVJFQkFTRSBEQlxyXG4gICAgLy8gY29uc3QgYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYgPSAgY29sbGVjdGlvbihkYiwgYGF0dGVuZGFuY2UtdXNlci0ke2xvZ2luVXNlci51aWR9LW1vbnRoLSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0teWVhci0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLCB3aGVyZSgnbW9udGgnID09IDUpKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL1BSSU5UIERBWVMgQlkgTU9OVEggTlVNQkVSXHJcblxyXG4gICAgY29uc3QgYXR0ZW5kYW5jZVRhYmxlID0gKGhvbGlkYXlzKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9XT1JLSU5HIFRJTUUgU1RBUlQgQU5EIEVORFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IDdcclxuICAgICAgICBjb25zdCBlbmRUaW1lID0gOFxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5ID0gWy4uLmhvbGlkYXlzLCAuLi5nZXRBdHRlbmRhbmNlXTtcclxuXHJcblxyXG4gICAgICAgIGRheXMucHVzaChcclxuXHJcblxyXG4gICAgICAgICAgICAobWVyZ2VkQXJyYXkpLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZ2FwLTVcIiBrZXk9e2tleX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yZWFzb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWJsdWUtODAwIGJvcmRlciB0ZXh0LWJsdWUtODAwIHJvdW5kZWQtZnVsbCBwLTIgdy0xMCBoLTkgZmxleCBqdXN0aWZ5LWNlbnRlclwiPntpdGVtLmRhdGUuc3Vic3RyaW5nKGl0ZW0uZGF0ZS5pbmRleE9mKFwiLVwiKSArIDQpfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5yZWFzb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiB8fCBlbmRUaW1lID4gaXRlbS5wdW5jaE91dCA/ICdiZy15ZWxsb3ctNDAwIGJvcmRlciBib3JkZXIteWVsbG93LTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgdy0xMCBoLTkgZmxleCBqdXN0aWZ5LWNlbnRlcicgOiAnYmctc2t5LTQwMCBib3JkZXIgYm9yZGVyLXNreS00MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIHctMTAgaC05IGZsZXgganVzdGlmeS1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnJlYXNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIT0xJREFZIC0ge2l0ZW0ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5yZWFzb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiB8fCBlbmRUaW1lID4gaXRlbS5wdW5jaE91dCA/ICdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGJvcmRlci1iLWdyYXktMTAwIGJvcmRlci1iLTIgcHktNCAgdGV4dC15ZWxsb3ctNDAwIGZvbnQtc2VtaWJvbGQnIDogJ2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgYm9yZGVyLWItZ3JheS0xMDAgYm9yZGVyLWItMiBweS00ICB0ZXh0LXNreS00MDAgZm9udC1zZW1pYm9sZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU4ge2l0ZW0ucHVuY2hJbn0ge3N0YXJ0VGltZSA8IGl0ZW0ucHVuY2hJbiA/ICctIExQVScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1VUIHtpdGVtLnB1bmNoT3V0fSB7ZW5kVGltZSA+IGl0ZW0ucHVuY2hPdXQgPyAnLSBFUE8nIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBib3JkZXItYi1ncmF5LTEwMCBib3JkZXItYi0yIHB5LTQgIHRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS5nZXREYXRlKCktMX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFCU0VOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gZGF5cztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vREFURSBNQUxBWUFMQU1cclxuXHJcbiAgICBmdW5jdGlvbiBkYXRlTWFsYXlhbGFtKGRhdGUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkYXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJzgtKjgtYHgtLXgtLDgtL8nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0q+C1huC0rOC1jeC0sOC1geC0teC0sOC0vyAnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0ruC0vuC1vOC0muC1jeC0muC1jSdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSP4LSq4LWN4LSw4LS/4LW9J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtK7gtYbgtK/gtY0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0nOC1guC1uidcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn4LSc4LWC4LSy4LWIJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtJPgtJfgtLjgtY3gtLHgtY3gtLHgtY0nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0uOC1huC0quC1jeC0seC1jeC0seC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0kuC0leC1jeC0n+C1h+C0vuC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0qOC0teC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0oeC0v+C0uOC0guC0rOC1vCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9DQUxDVUxBVEUgU0FMQVJZXHJcblxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJEYXkgPSBhd2FpdCBwcm9maWxlWzBdLnNhbGFyeS8zMFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsU2FsYXJ5KHBlckRheSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL0hPTElEQVlTXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob2xpZGF5c0NvbGxlY3Rpb25SZWYgPSBhd2FpdCBxdWVyeShjb2xsZWN0aW9uKGRiLCBgaG9saWRheXMtMjAyNC0yMDI1YCksKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhxdWVyeShob2xpZGF5c0NvbGxlY3Rpb25SZWYsKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9maWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRHZXRIb2xpZGF5cyhmaWx0ZXJlZERhdGEpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcbiAgICAgICAgLy9BVFRFTkRBTkNFXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYgPSBhd2FpdCBxdWVyeShjb2xsZWN0aW9uKGRiLCBgYXR0ZW5kYW5jZS11c2VyLSR7bG9naW5Vc2VyWzBdLnVpZH0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWApLCB3aGVyZSgnbW9udGgnLCAnPT0nLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoYXR0ZW5kYW5jZVJlcG9ydENvbGxlY3Rpb25SZWYsKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0R2V0QXR0ZW5kYW5jZShmaWx0ZXJlZERhdGEpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZ2V0QXR0ZW5kYW5jZSlcclxuICAgIC8vY29uc29sZS5sb2coZ2V0SG9saWRheXMpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3RlY3RlZFJvdXRlPlxyXG4gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLXNjcmVlbiAgcHgtNiBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdHlwZT1cInBhZ2UtaGVhZGVyXCIgdGl0bGU9e2DgtLngtL7gtJzgtbwg4LSq4LSf4LWN4LSf4LS/4LSVICR7ZGF0ZU1hbGF5YWxhbShtb250aCl9ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBpdGVtcy1zdGFydCBweC02IHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwLTAgbS0wIG51bWJlciB0ZXh0LXNtIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlVGFibGUoZ2V0SG9saWRheXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctd2hpdGUgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtNSBwLTQgdGV4dC1ibHVlLTgwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgtJzgtKjgtYHgtLXgtLDgtL8g4LSu4LS+4LS44LSk4LWN4LSk4LWGIOC0tuC0ruC1jeC0quC0s+C0glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyIGJsb2NrIHRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oK5e3RvdGFsU2FsYXJ5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvUHJvdGVjdGVkUm91dGU+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJIZWFkZXIiLCJkYiIsInVzZVVzZXJDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm90ZWN0ZWRSb3V0ZSIsIkF0dGVuZGFuY2VWaWV3IiwicGFyYW1zIiwibW9udGgiLCJsb2dpblVzZXIiLCJwcm9maWxlIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRDb3VudCIsImdldEF0dGVuZGFuY2UiLCJzZXRHZXRBdHRlbmRhbmNlIiwiZ2V0SG9saWRheXMiLCJzZXRHZXRIb2xpZGF5cyIsInRvdGFsU2FsYXJ5Iiwic2V0VG90YWxTYWxhcnkiLCJhdHRlbmRhbmNlVGFibGUiLCJob2xpZGF5cyIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJkYXlzIiwibWVyZ2VkQXJyYXkiLCJwdXNoIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwiY2xhc3NOYW1lIiwicmVhc29uIiwic3BhbiIsImRhdGUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicHVuY2hJbiIsInB1bmNoT3V0IiwiZGF5IiwiZGF0ZU1hbGF5YWxhbSIsInBlckRheSIsInNhbGFyeSIsImVyciIsImhvbGlkYXlzQ29sbGVjdGlvblJlZiIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwiZG9jIiwiaWQiLCJhdHRlbmRhbmNlUmVwb3J0Q29sbGVjdGlvblJlZiIsInVpZCIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZGl2IiwidHlwZSIsInRpdGxlIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/attendance-report/[month]/page.jsx\n"));

/***/ })

});