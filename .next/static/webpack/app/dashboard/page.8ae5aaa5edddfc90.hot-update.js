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

/***/ "(app-pages-browser)/./src/app/Components/Punching/index.jsx":
/*!***********************************************!*\
  !*** ./src/app/Components/Punching/index.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Punching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Punching(param) {\n    let { user } = param;\n    _s();\n    //WORKING TIME START AND END\n    const startTime = 7;\n    const endTime = 8;\n    //console.log(user)\n    //FIREBASE DB\n    const attendanceCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(user, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear()));\n    //STATES\n    const [punchStatus, setPunchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    //const [currentPuchStatus, setcurrentPuchStatus] = useState([])\n    //GET CURRENT INDIAN TIME\n    const currentTime = new Date();\n    const currentOffset = currentTime.getTimezoneOffset();\n    const ISTOffset = 330; // IST offset UTC +5:30 \n    const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);\n    // ISTTime now represents the time in IST coordinates\n    const hoursIST = ISTTime.getHours();\n    const minutesIST = ISTTime.getMinutes();\n    //GET PUNCH STATUS\n    const getPunchStatus = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(attendanceCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"day\", \"==\", parseInt(new Date().getDate()))));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        filteredData.map((item)=>{\n            setPunchStatus(item);\n        //console.log(item)\n        });\n    };\n    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({\n        customClass: {\n            confirmButton: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n            cancelButton: \"w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3\",\n            title: \"text-blue-800\"\n        },\n        buttonsStyling: false\n    });\n    // PUNCH IN\n    function readyIn() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, \"day-31\"), {\n                        date: \"5/31/2024\",\n                        month: 5,\n                        year: 2024,\n                        day: 28,\n                        punchIn: 7,\n                        punchOut: null,\n                        status: \"punchin\",\n                        teacherId: user\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    // PUNCH OUT\n    function readyOut() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    const attendanceDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, \"day-\" + new Date().getDate());\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(attendanceDoc, {\n                        punchOut: \"\".concat(hoursIST, \":\").concat(minutesIST),\n                        status: \"punchout\"\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                //router.push(`/all-teachers`)\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getPunchStatus();\n    }, []);\n    //console.log(punchStatus)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            punchStatus.status && startTime <= 7 && endTime >= 8 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ അകത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyIn(),\n                        children: \"അകത്തേക്ക്\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 198,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 196,\n                columnNumber: 63\n            }, this) : null,\n            punchStatus.status == \"punchin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyOut(),\n                        children: \"പുറത്തേക്കു\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 201,\n                columnNumber: 42\n            }, this) : null,\n            punchStatus.status == \"punchout\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ ഹാജർ രേഖപ്പെടുത്തി. നന്ദി  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 207,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-transparent hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white border border-sky-400 rounded-md p-4 text-sky-400 font-bold text-lg transition-all\",\n                        children: \"റിപ്പോർട്ട് കാണുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 208,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 206,\n                columnNumber: 43\n            }, this) : null\n        ]\n    }, void 0, true);\n}\n_s(Punching, \"xxnxg2cuNttI2YPE6uz4qKG1Ehg=\");\n_c = Punching;\nvar _c;\n$RefreshReg$(_c, \"Punching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9QdW5jaGluZy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNnRjtBQUNwRTtBQUNDO0FBRzVCLFNBQVNhLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUcvQiw0QkFBNEI7SUFDNUIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBR2hCLG1CQUFtQjtJQUVuQixhQUFhO0lBQ2IsTUFBTUMsMEJBQTBCaEIsOERBQVVBLENBQUNTLGdEQUFFQSxFQUFFLG1CQUFpQyxPQUFkSSxNQUFLLFdBQTJDLE9BQWxDLElBQUlJLE9BQU9DLFFBQVEsS0FBSyxHQUFFLFVBQWlDLE9BQXpCLElBQUlELE9BQU9FLFdBQVc7SUFHeEksUUFBUTtJQUVSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELGdFQUFnRTtJQU1oRSx5QkFBeUI7SUFDekIsTUFBTVcsY0FBYyxJQUFJTDtJQUV4QixNQUFNTSxnQkFBZ0JELFlBQVlFLGlCQUFpQjtJQUVuRCxNQUFNQyxZQUFZLEtBQU8sd0JBQXdCO0lBRWpELE1BQU1DLFVBQVUsSUFBSVQsS0FBS0ssWUFBWUssT0FBTyxLQUFLLENBQUNGLFlBQVlGLGFBQVksSUFBSztJQUUvRSxxREFBcUQ7SUFFckQsTUFBTUssV0FBV0YsUUFBUUcsUUFBUTtJQUNqQyxNQUFNQyxhQUFhSixRQUFRSyxVQUFVO0lBR3JDLGtCQUFrQjtJQUNsQixNQUFNQyxpQkFBaUI7UUFFckIsTUFBTUMsT0FBTyxNQUFNL0IsMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDYSx5QkFBeUJaLHlEQUFLQSxDQUFDLE9BQU8sTUFBTThCLFNBQVMsSUFBSWpCLE9BQU9rQixPQUFPO1FBRXhHLHNDQUFzQztRQUV0QyxNQUFNQyxlQUFlSCxLQUFLSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDakMsTUFDbEM7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Ozs7Ozs7Ozs7O3VCQUM1TDs7O0FBUWY7R0FoTndCL0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21wb25lbnRzL1B1bmNoaW5nL2luZGV4LmpzeD84MWU4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4ndXNlIGNsaWVudCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZ2V0RG9jcywgcXVlcnksIHdoZXJlLCBkb2MsIHVwZGF0ZURvYywgZ2V0RG9jLCBzZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVuY2hpbmcoeyB1c2VyIH0pIHtcclxuXHJcblxyXG4gIC8vV09SS0lORyBUSU1FIFNUQVJUIEFORCBFTkRcclxuICBjb25zdCBzdGFydFRpbWUgPSA3XHJcbiAgY29uc3QgZW5kVGltZSA9IDhcclxuXHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuICAvL0ZJUkVCQVNFIERCXHJcbiAgY29uc3QgYXR0ZW5kYW5jZUNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBgYXR0ZW5kYW5jZS11c2VyLSR7dXNlcn0tbW9udGgtJHtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxfS15ZWFyLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsKVxyXG5cclxuXHJcbiAgLy9TVEFURVNcclxuXHJcbiAgY29uc3QgW3B1bmNoU3RhdHVzLCBzZXRQdW5jaFN0YXR1c10gPSB1c2VTdGF0ZShbXSlcclxuICAvL2NvbnN0IFtjdXJyZW50UHVjaFN0YXR1cywgc2V0Y3VycmVudFB1Y2hTdGF0dXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvL0dFVCBDVVJSRU5UIElORElBTiBUSU1FXHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gY3VycmVudFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbiAgY29uc3QgSVNUT2Zmc2V0ID0gMzMwOyAgIC8vIElTVCBvZmZzZXQgVVRDICs1OjMwIFxyXG5cclxuICBjb25zdCBJU1RUaW1lID0gbmV3IERhdGUoY3VycmVudFRpbWUuZ2V0VGltZSgpICsgKElTVE9mZnNldCArIGN1cnJlbnRPZmZzZXQpICogNjAwMDApO1xyXG5cclxuICAvLyBJU1RUaW1lIG5vdyByZXByZXNlbnRzIHRoZSB0aW1lIGluIElTVCBjb29yZGluYXRlc1xyXG5cclxuICBjb25zdCBob3Vyc0lTVCA9IElTVFRpbWUuZ2V0SG91cnMoKVxyXG4gIGNvbnN0IG1pbnV0ZXNJU1QgPSBJU1RUaW1lLmdldE1pbnV0ZXMoKVxyXG5cclxuXHJcbiAgLy9HRVQgUFVOQ0ggU1RBVFVTXHJcbiAgY29uc3QgZ2V0UHVuY2hTdGF0dXMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERvY3MocXVlcnkoYXR0ZW5kYW5jZUNvbGxlY3Rpb25SZWYsIHdoZXJlKCdkYXknLCAnPT0nLCBwYXJzZUludChuZXcgRGF0ZSgpLmdldERhdGUoKSkpKSlcclxuXHJcbiAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZG9jcy5tYXAoKGRvYykgPT4gKFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgIH1cclxuICAgICkpXHJcblxyXG4gICAgZmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBzZXRQdW5jaFN0YXR1cyhpdGVtKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgY29uZmlybUJ1dHRvbjogXCJ3LWZ1bGwgYmctc2t5LTQwMCBob3ZlcjpiZy1za3ktNTAwIGFjdGl2ZTpiZy1za3ktNTAwIHJvdW5kZWQtbWQgcC00IHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGcgdHJhbnNpdGlvbi1hbGxcIixcclxuICAgICAgY2FuY2VsQnV0dG9uOiBcInctZnVsbCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCBhY3RpdmU6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWJsdWUtODAwIHJvdW5kZWQtbWQgcC00IHRleHQtYmx1ZS04MDAgZm9udC1ib2xkIHRleHQtbGcgdHJhbnNpdGlvbi1hbGwgbXQtM1wiLFxyXG4gICAgICB0aXRsZTogXCJ0ZXh0LWJsdWUtODAwXCJcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuICB9KTtcclxuXHJcblxyXG4gXHJcblxyXG4gIC8vIFBVTkNIIElOXHJcbiAgZnVuY3Rpb24gcmVhZHlJbigpIHtcclxuXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIuC0tuC1jeC0sOC1huC0puC1jeC0p+C0v+C0leC1jeC0leC1geC0lSBcIixcclxuICAgICAgdGV4dDogXCLgtKTgtJngtY3gtJngtLPgtYHgtJ/gtYbgtKTgtL7gtJngtY3gtJXgtb4g4LSo4LWH4LSw4LSk4LWN4LSk4LWGIOC0quC1geC0seC0pOC1jeC0pOC1i+C0n+C1jeC0n+C1jSDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC0n+C1geC0pOC1jeC0pOC0vuC1uyDgtLbgtY3gtLDgtK7gtL/gtJrgtY3gtJrgtYEuIOC0h+C0pOC1jSDgtLjgtY3gtKXgtL/gtKbgtYDgtJXgtLDgtL/gtJXgtY3gtJXgtYHgtJUg4LSq4LWB4LSx4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWB4LSz4LWN4LSzIOC0ieC0s+C1jeC0syDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LWG4LSf4LWB4LSk4LWN4LSk4LWB4LSVIFwiLFxyXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1lbmQnLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAn4LSS4LS04LS/4LS14LS+4LSV4LWN4LSV4LWB4LSVICcsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIuC0uOC1jeC0peC0v+C0puC1gOC0leC0sOC0v+C0leC1jeC0leC1geC0lVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldERvYyhkb2MoYXR0ZW5kYW5jZUNvbGxlY3Rpb25SZWYsICdkYXktMzEnKSwge1xyXG5cclxuICAgICAgICAgICAgZGF0ZTogXCI1LzMxLzIwMjRcIixcclxuICAgICAgICAgICAgbW9udGg6IDUsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjQsXHJcbiAgICAgICAgICAgIGRheTogMjgsXHJcbiAgICAgICAgICAgIHB1bmNoSW46IDcsXHJcbiAgICAgICAgICAgIHB1bmNoT3V0OiBudWxsLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwdW5jaGluJyxcclxuICAgICAgICAgICAgdGVhY2hlcklkOiB1c2VyLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxyXG4gICAgICAgICAgICAvLyBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgLy8geWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAvLyBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyBwdW5jaEluOiBgJHtob3Vyc0lTVH06JHttaW51dGVzSVNUfWAsXHJcbiAgICAgICAgICAgIC8vIHB1bmNoT3V0OiBudWxsLFxyXG4gICAgICAgICAgICAvLyBzdGF0dXM6ICdwdW5jaGluJyxcclxuICAgICAgICAgICAgLy8gdGVhY2hlcklkOiB1c2VyLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICBnZXRQdW5jaFN0YXR1cygpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsXHJcbiAgICAgICkge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vIFBVTkNIIE9VVFxyXG4gIGZ1bmN0aW9uIHJlYWR5T3V0KCkge1xyXG5cclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgdGl0bGU6IFwi4LS24LWN4LSw4LWG4LSm4LWN4LSn4LS/4LSV4LWN4LSV4LWB4LSVIFwiLFxyXG4gICAgICB0ZXh0OiBcIuC0pOC0meC1jeC0meC0s+C1geC0n+C1huC0pOC0vuC0meC1jeC0leC1viDgtKjgtYfgtLDgtKTgtY3gtKTgtYYg4LSq4LWB4LSx4LSk4LWN4LSk4LWL4LSf4LWN4LSf4LWNIOC0ieC0s+C1jeC0syDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LSf4LWB4LSk4LWN4LSk4LS+4LW7IOC0tuC1jeC0sOC0ruC0v+C0muC1jeC0muC1gS4g4LSH4LSk4LWNIOC0uOC1jeC0peC0v+C0puC1gOC0leC0sOC0v+C0leC1jeC0leC1geC0lSDgtKrgtYHgtLHgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtYHgtLPgtY3gtLMg4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtYHgtJUgXCIsXHJcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWVuZCcsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICfgtJLgtLTgtL/gtLXgtL7gtJXgtY3gtJXgtYHgtJUgJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwi4LS44LWN4LSl4LS/4LSm4LWA4LSV4LSw4LS/4LSV4LWN4LSV4LWB4LSVXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGF0dGVuZGFuY2VEb2MgPSBkb2MoYXR0ZW5kYW5jZUNvbGxlY3Rpb25SZWYsICdkYXktJytuZXcgRGF0ZSgpLmdldERhdGUoKSlcclxuICAgICAgICAgIHVwZGF0ZURvYyhhdHRlbmRhbmNlRG9jLCB7XHJcbiAgICAgICAgICAgIHB1bmNoT3V0OiBgJHtob3Vyc0lTVH06JHttaW51dGVzSVNUfWAsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3B1bmNob3V0JyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBnZXRQdW5jaFN0YXR1cygpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAvL3JvdXRlci5wdXNoKGAvYWxsLXRlYWNoZXJzYClcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsXHJcbiAgICAgICkge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFB1bmNoU3RhdHVzKClcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICAvL2NvbnNvbGUubG9nKHB1bmNoU3RhdHVzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgICAge3B1bmNoU3RhdHVzLnN0YXR1cyAmJiBzdGFydFRpbWUgPD0gNyAmJiBlbmRUaW1lID49IDggPyA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC02IGdyaWQgZ2FwLTQgXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWGIOC0heC0leC0pOC1jeC0pOC1i+C0n+C1jeC0n+C1jSDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC1huC0n+C1geC0pOC1jeC0pOC1geC0lSAgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCIgb25DbGljaz17KCkgPT4gcmVhZHlJbigpfT7gtIXgtJXgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtY08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcbiAgICAgIHtwdW5jaFN0YXR1cy5zdGF0dXMgPT0gJ3B1bmNoaW4nID8gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtNiBncmlkIGdhcC00IFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPuC0pOC0meC1jeC0meC0s+C1geC0n+C1hiDgtKrgtYHgtLHgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtYHgtLPgtY3gtLMg4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtYHgtJUgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCIgb25DbGljaz17KCkgPT4gcmVhZHlPdXQoKX0+4LSq4LWB4LSx4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWBPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiA6IG51bGx9XHJcblxyXG4gICAgICB7cHVuY2hTdGF0dXMuc3RhdHVzID09ICdwdW5jaG91dCcgPyA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC02IGdyaWQgZ2FwLTQgdy1mdWxsXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWGIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtL8uIOC0qOC0qOC1jeC0puC0vyAgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXNreS01MDAgYWN0aXZlOmJnLXNreS01MDAgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNreS00MDAgcm91bmRlZC1tZCBwLTQgdGV4dC1za3ktNDAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCI+4LSx4LS/4LSq4LWN4LSq4LWL4LW84LSf4LWN4LSf4LWNIOC0leC0vuC0o+C1geC0lSA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcblxyXG4gICAgPC8+XHJcblxyXG4gIClcclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJTd2FsIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZG9jIiwidXBkYXRlRG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwiZGIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlB1bmNoaW5nIiwidXNlciIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVuY2hTdGF0dXMiLCJzZXRQdW5jaFN0YXR1cyIsImN1cnJlbnRUaW1lIiwiY3VycmVudE9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiSVNUT2Zmc2V0IiwiSVNUVGltZSIsImdldFRpbWUiLCJob3Vyc0lTVCIsImdldEhvdXJzIiwibWludXRlc0lTVCIsImdldE1pbnV0ZXMiLCJnZXRQdW5jaFN0YXR1cyIsImRhdGEiLCJwYXJzZUludCIsImdldERhdGUiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiaWQiLCJpdGVtIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aXRsZSIsImJ1dHRvbnNTdHlsaW5nIiwicmVhZHlJbiIsImZpcmUiLCJ0ZXh0IiwicG9zaXRpb24iLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiZGF0ZSIsIm1vbnRoIiwieWVhciIsImRheSIsInB1bmNoSW4iLCJwdW5jaE91dCIsInN0YXR1cyIsInRlYWNoZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJkaXNtaXNzIiwiRGlzbWlzc1JlYXNvbiIsImNhbmNlbCIsInJlYWR5T3V0IiwiYXR0ZW5kYW5jZURvYyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Punching/index.jsx\n"));

/***/ })

});