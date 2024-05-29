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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Punching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Punching(param) {\n    let { user } = param;\n    _s();\n    //WORKING TIME START AND END\n    const startTime = 7;\n    const endTime = 8;\n    //console.log(user)\n    //FIREBASE DB\n    const attendanceCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(user, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear()));\n    //STATES\n    const [punchStatus, setPunchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    //const [currentPuchStatus, setcurrentPuchStatus] = useState([])\n    //GET CURRENT INDIAN TIME\n    const currentTime = new Date();\n    const currentOffset = currentTime.getTimezoneOffset();\n    const ISTOffset = 330; // IST offset UTC +5:30 \n    const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);\n    // ISTTime now represents the time in IST coordinates\n    const hoursIST = ISTTime.getHours();\n    const minutesIST = ISTTime.getMinutes();\n    //GET PUNCH STATUS\n    const getPunchStatus = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(attendanceCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"day\", \"==\", parseInt(new Date().getDate()))));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        filteredData.map((item)=>{\n            setPunchStatus(item);\n        //console.log(item)\n        });\n    };\n    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({\n        customClass: {\n            confirmButton: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n            cancelButton: \"w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3\",\n            title: \"text-blue-800\"\n        },\n        buttonsStyling: false\n    });\n    // PUNCH IN\n    function readyIn() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, \"day-\" + new Date().getDate()), {\n                        // date: \"5/26/2024\",\n                        // month: 5,\n                        // year: 2024,\n                        // day: 26,\n                        // punchIn: 7,\n                        // punchOut: 8,\n                        // status: 'punchout',\n                        // teacherId: user,\n                        date: new Date().toLocaleDateString(),\n                        month: new Date().getMonth() + 1,\n                        year: new Date().getFullYear(),\n                        day: new Date().getDate(),\n                        punchIn: \"\".concat(hoursIST, \":\").concat(minutesIST),\n                        punchOut: null,\n                        status: \"punchin\",\n                        teacherId: user\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    // PUNCH OUT\n    function readyOut() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    const attendanceDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, \"day-\" + new Date().getDate());\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(attendanceDoc, {\n                        punchOut: \"\".concat(hoursIST, \":\").concat(minutesIST),\n                        status: \"punchout\"\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                //router.push(`/all-teachers`)\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getPunchStatus();\n    }, []);\n    //console.log(punchStatus)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            punchStatus.status && startTime <= 7 && endTime >= 8 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ അകത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyIn(),\n                        children: \"അകത്തേക്ക്\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 198,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 196,\n                columnNumber: 63\n            }, this) : null,\n            punchStatus.status == \"punchin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyOut(),\n                        children: \"പുറത്തേക്കു\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 201,\n                columnNumber: 42\n            }, this) : null,\n            punchStatus.status == \"punchout\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ ഹാജർ രേഖപ്പെടുത്തി. നന്ദി  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 207,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-transparent hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white border border-sky-400 rounded-md p-4 text-sky-400 font-bold text-lg transition-all\",\n                        children: \"റിപ്പോർട്ട് കാണുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 208,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 206,\n                columnNumber: 43\n            }, this) : null\n        ]\n    }, void 0, true);\n}\n_s(Punching, \"xxnxg2cuNttI2YPE6uz4qKG1Ehg=\");\n_c = Punching;\nvar _c;\n$RefreshReg$(_c, \"Punching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9QdW5jaGluZy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNnRjtBQUNwRTtBQUNDO0FBRzVCLFNBQVNhLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUcvQiw0QkFBNEI7SUFDNUIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBR2hCLG1CQUFtQjtJQUVuQixhQUFhO0lBQ2IsTUFBTUMsMEJBQTBCaEIsOERBQVVBLENBQUNTLGdEQUFFQSxFQUFFLG1CQUFpQyxPQUFkSSxNQUFLLFdBQTJDLE9BQWxDLElBQUlJLE9BQU9DLFFBQVEsS0FBSyxHQUFFLFVBQWlDLE9BQXpCLElBQUlELE9BQU9FLFdBQVc7SUFHeEksUUFBUTtJQUVSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELGdFQUFnRTtJQU1oRSx5QkFBeUI7SUFDekIsTUFBTVcsY0FBYyxJQUFJTDtJQUV4QixNQUFNTSxnQkFBZ0JELFlBQVlFLGlCQUFpQjtJQUVuRCxNQUFNQyxZQUFZLEtBQU8sd0JBQXdCO0lBRWpELE1BQU1DLFVBQVUsSUFBSVQsS0FBS0ssWUFBWUssT0FBTyxLQUFLLENBQUNGLFlBQVlGLGFBQVksSUFBSztJQUUvRSxxREFBcUQ7SUFFckQsTUFBTUssV0FBV0YsUUFBUUcsUUFBUTtJQUNqQyxNQUFNQyxhQUFhSixRQUFRSyxVQUFVO0lBR3JDLGtCQUFrQjtJQUNsQixNQUFNQyxpQkFBaUI7UUFFckIsTUFBTUMsT0FBTyxNQUFNL0IsMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDYSx5QkFBeUJaLHlEQUFLQSxDQUFDLE9BQU8sTUFBTThCLFNBQVMsSUFBSWpCLE9BQU9rQixPQUFPO1FBRXhHLHNDQUFzQztRQUV0QyxNQUFNQyxlQUFlSCxLQUFLSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDakMsTUFDbEM7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O2dCQUFJQyxXQUFVOztrQ0FDaEQsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFZOzs7Ozs7a0NBQ3pCLDhEQUFDRTt3QkFBT0YsV0FBVTt3QkFBa0hHLFNBQVMsSUFBTU47a0NBQVk7Ozs7Ozs7Ozs7O3VCQUN4SjtZQUVSckQsWUFBWTZDLE1BQU0sSUFBSSwyQkFBYSw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNqRCw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQVk7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFPRixXQUFVO2tDQUFpTDs7Ozs7Ozs7Ozs7dUJBQzVMOzs7QUFRZjtHQWhOd0JoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudHMvUHVuY2hpbmcvaW5kZXguanN4PzgxZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbid1c2UgY2xpZW50J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBnZXREb2NzLCBxdWVyeSwgd2hlcmUsIGRvYywgdXBkYXRlRG9jLCBnZXREb2MsIHNldERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS9jb25maWcnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdW5jaGluZyh7IHVzZXIgfSkge1xyXG5cclxuXHJcbiAgLy9XT1JLSU5HIFRJTUUgU1RBUlQgQU5EIEVORFxyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IDdcclxuICBjb25zdCBlbmRUaW1lID0gOFxyXG5cclxuICBcclxuICAvL2NvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gIC8vRklSRUJBU0UgREJcclxuICBjb25zdCBhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIGBhdHRlbmRhbmNlLXVzZXItJHt1c2VyfS1tb250aC0ke25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDF9LXllYXItJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCwpXHJcblxyXG5cclxuICAvL1NUQVRFU1xyXG5cclxuICBjb25zdCBbcHVuY2hTdGF0dXMsIHNldFB1bmNoU3RhdHVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIC8vY29uc3QgW2N1cnJlbnRQdWNoU3RhdHVzLCBzZXRjdXJyZW50UHVjaFN0YXR1c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vR0VUIENVUlJFTlQgSU5ESUFOIFRJTUVcclxuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBjdXJyZW50VGltZS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuICBjb25zdCBJU1RPZmZzZXQgPSAzMzA7ICAgLy8gSVNUIG9mZnNldCBVVEMgKzU6MzAgXHJcblxyXG4gIGNvbnN0IElTVFRpbWUgPSBuZXcgRGF0ZShjdXJyZW50VGltZS5nZXRUaW1lKCkgKyAoSVNUT2Zmc2V0ICsgY3VycmVudE9mZnNldCkgKiA2MDAwMCk7XHJcblxyXG4gIC8vIElTVFRpbWUgbm93IHJlcHJlc2VudHMgdGhlIHRpbWUgaW4gSVNUIGNvb3JkaW5hdGVzXHJcblxyXG4gIGNvbnN0IGhvdXJzSVNUID0gSVNUVGltZS5nZXRIb3VycygpXHJcbiAgY29uc3QgbWludXRlc0lTVCA9IElTVFRpbWUuZ2V0TWludXRlcygpXHJcblxyXG5cclxuICAvL0dFVCBQVU5DSCBTVEFUVVNcclxuICBjb25zdCBnZXRQdW5jaFN0YXR1cyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jcyhxdWVyeShhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiwgd2hlcmUoJ2RheScsICc9PScsIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKSkpKVxyXG5cclxuICAgIC8vYXdhaXQgZ2V0RG9jcyh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYpXHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5kb2NzLm1hcCgoZG9jKSA9PiAoXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgfVxyXG4gICAgKSlcclxuXHJcbiAgICBmaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIHNldFB1bmNoU3RhdHVzKGl0ZW0pXHJcbiAgICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICBjb25maXJtQnV0dG9uOiBcInctZnVsbCBiZy1za3ktNDAwIGhvdmVyOmJnLXNreS01MDAgYWN0aXZlOmJnLXNreS01MDAgcm91bmRlZC1tZCBwLTQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbFwiLFxyXG4gICAgICBjYW5jZWxCdXR0b246IFwidy1mdWxsIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIGFjdGl2ZTpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTp0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItYmx1ZS04MDAgcm91bmRlZC1tZCBwLTQgdGV4dC1ibHVlLTgwMCBmb250LWJvbGQgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbCBtdC0zXCIsXHJcbiAgICAgIHRpdGxlOiBcInRleHQtYmx1ZS04MDBcIlxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG4gIH0pO1xyXG5cclxuXHJcbiBcclxuXHJcbiAgLy8gUFVOQ0ggSU5cclxuICBmdW5jdGlvbiByZWFkeUluKCkge1xyXG5cclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgdGl0bGU6IFwi4LS24LWN4LSw4LWG4LSm4LWN4LSn4LS/4LSV4LWN4LSV4LWB4LSVIFwiLFxyXG4gICAgICB0ZXh0OiBcIuC0pOC0meC1jeC0meC0s+C1geC0n+C1huC0pOC0vuC0meC1jeC0leC1viDgtKjgtYfgtLDgtKTgtY3gtKTgtYYg4LSq4LWB4LSx4LSk4LWN4LSk4LWL4LSf4LWN4LSf4LWNIOC0ieC0s+C1jeC0syDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LSf4LWB4LSk4LWN4LSk4LS+4LW7IOC0tuC1jeC0sOC0ruC0v+C0muC1jeC0muC1gS4g4LSH4LSk4LWNIOC0uOC1jeC0peC0v+C0puC1gOC0leC0sOC0v+C0leC1jeC0leC1geC0lSDgtKrgtYHgtLHgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtYHgtLPgtY3gtLMg4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtYHgtJUgXCIsXHJcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWVuZCcsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICfgtJLgtLTgtL/gtLXgtL7gtJXgtY3gtJXgtYHgtJUgJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwi4LS44LWN4LSl4LS/4LSm4LWA4LSV4LSw4LS/4LSV4LWN4LSV4LWB4LSVXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgc2V0RG9jKGRvYyhhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiwgJ2RheS0nK25ldyBEYXRlKCkuZ2V0RGF0ZSgpKSwge1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0ZTogXCI1LzI2LzIwMjRcIixcclxuICAgICAgICAgICAgLy8gbW9udGg6IDUsXHJcbiAgICAgICAgICAgIC8vIHllYXI6IDIwMjQsXHJcbiAgICAgICAgICAgIC8vIGRheTogMjYsXHJcbiAgICAgICAgICAgIC8vIHB1bmNoSW46IDcsXHJcbiAgICAgICAgICAgIC8vIHB1bmNoT3V0OiA4LFxyXG4gICAgICAgICAgICAvLyBzdGF0dXM6ICdwdW5jaG91dCcsXHJcbiAgICAgICAgICAgIC8vIHRlYWNoZXJJZDogdXNlcixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICAgICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgZGF5OiBuZXcgRGF0ZSgpLmdldERhdGUoKSxcclxuICAgICAgICAgICAgcHVuY2hJbjogYCR7aG91cnNJU1R9OiR7bWludXRlc0lTVH1gLFxyXG4gICAgICAgICAgICBwdW5jaE91dDogbnVsbCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncHVuY2hpbicsXHJcbiAgICAgICAgICAgIHRlYWNoZXJJZDogdXNlcixcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgZ2V0UHVuY2hTdGF0dXMoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICByZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLmNhbmNlbFxyXG4gICAgICApIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyBQVU5DSCBPVVRcclxuICBmdW5jdGlvbiByZWFkeU91dCgpIHtcclxuXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIuC0tuC1jeC0sOC1huC0puC1jeC0p+C0v+C0leC1jeC0leC1geC0lSBcIixcclxuICAgICAgdGV4dDogXCLgtKTgtJngtY3gtJngtLPgtYHgtJ/gtYbgtKTgtL7gtJngtY3gtJXgtb4g4LSo4LWH4LSw4LSk4LWN4LSk4LWGIOC0quC1geC0seC0pOC1jeC0pOC1i+C0n+C1jeC0n+C1jSDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC0n+C1geC0pOC1jeC0pOC0vuC1uyDgtLbgtY3gtLDgtK7gtL/gtJrgtY3gtJrgtYEuIOC0h+C0pOC1jSDgtLjgtY3gtKXgtL/gtKbgtYDgtJXgtLDgtL/gtJXgtY3gtJXgtYHgtJUg4LSq4LWB4LSx4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWB4LSz4LWN4LSzIOC0ieC0s+C1jeC0syDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LWG4LSf4LWB4LSk4LWN4LSk4LWB4LSVIFwiLFxyXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1lbmQnLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAn4LSS4LS04LS/4LS14LS+4LSV4LWN4LSV4LWB4LSVICcsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIuC0uOC1jeC0peC0v+C0puC1gOC0leC0sOC0v+C0leC1jeC0leC1geC0lVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBhdHRlbmRhbmNlRG9jID0gZG9jKGF0dGVuZGFuY2VDb2xsZWN0aW9uUmVmLCAnZGF5LScrbmV3IERhdGUoKS5nZXREYXRlKCkpXHJcbiAgICAgICAgICB1cGRhdGVEb2MoYXR0ZW5kYW5jZURvYywge1xyXG4gICAgICAgICAgICBwdW5jaE91dDogYCR7aG91cnNJU1R9OiR7bWludXRlc0lTVH1gLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwdW5jaG91dCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgZ2V0UHVuY2hTdGF0dXMoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaChgL2FsbC10ZWFjaGVyc2ApXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICByZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLmNhbmNlbFxyXG4gICAgICApIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQdW5jaFN0YXR1cygpXHJcblxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy9jb25zb2xlLmxvZyhwdW5jaFN0YXR1cylcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIHtwdW5jaFN0YXR1cy5zdGF0dXMgJiYgc3RhcnRUaW1lIDw9IDcgJiYgZW5kVGltZSA+PSA4ID8gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtNiBncmlkIGdhcC00IFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPuC0pOC0meC1jeC0meC0s+C1geC0n+C1hiDgtIXgtJXgtKTgtY3gtKTgtYvgtJ/gtY3gtJ/gtY0g4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtYHgtJUgIDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1za3ktNDAwIGhvdmVyOmJnLXNreS01MDAgYWN0aXZlOmJnLXNreS01MDAgcm91bmRlZC1tZCBwLTQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbFwiIG9uQ2xpY2s9eygpID0+IHJlYWR5SW4oKX0+4LSF4LSV4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWNPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiA6IG51bGx9XHJcblxyXG4gICAgICB7cHVuY2hTdGF0dXMuc3RhdHVzID09ICdwdW5jaGluJyA/IDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBwLTYgZ3JpZCBnYXAtNCBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj7gtKTgtJngtY3gtJngtLPgtYHgtJ/gtYYg4LSq4LWB4LSx4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWB4LSz4LWN4LSzIOC0ieC0s+C1jeC0syDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LWG4LSf4LWB4LSk4LWN4LSk4LWB4LSVIDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1za3ktNDAwIGhvdmVyOmJnLXNreS01MDAgYWN0aXZlOmJnLXNreS01MDAgcm91bmRlZC1tZCBwLTQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbFwiIG9uQ2xpY2s9eygpID0+IHJlYWR5T3V0KCl9PuC0quC1geC0seC0pOC1jeC0pOC1h+C0leC1jeC0leC1gTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj4gOiBudWxsfVxyXG5cclxuICAgICAge3B1bmNoU3RhdHVzLnN0YXR1cyA9PSAncHVuY2hvdXQnID8gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtNiBncmlkIGdhcC00IHctZnVsbFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPuC0pOC0meC1jeC0meC0s+C1geC0n+C1hiDgtLngtL7gtJzgtbwg4LSw4LWH4LSW4LSq4LWN4LSq4LWG4LSf4LWB4LSk4LWN4LSk4LS/LiDgtKjgtKjgtY3gtKbgtL8gIDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1za3ktNTAwIGFjdGl2ZTpiZy1za3ktNTAwIGhvdmVyOnRleHQtd2hpdGUgYWN0aXZlOnRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1za3ktNDAwIHJvdW5kZWQtbWQgcC00IHRleHQtc2t5LTQwMCBmb250LWJvbGQgdGV4dC1sZyB0cmFuc2l0aW9uLWFsbFwiPuC0seC0v+C0quC1jeC0quC1i+C1vOC0n+C1jeC0n+C1jSDgtJXgtL7gtKPgtYHgtJUgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiA6IG51bGx9XHJcblxyXG5cclxuICAgIDwvPlxyXG5cclxuICApXHJcblxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiU3dhbCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsImRvYyIsInVwZGF0ZURvYyIsImdldERvYyIsInNldERvYyIsImRiIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQdW5jaGluZyIsInVzZXIiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiYXR0ZW5kYW5jZUNvbGxlY3Rpb25SZWYiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1bmNoU3RhdHVzIiwic2V0UHVuY2hTdGF0dXMiLCJjdXJyZW50VGltZSIsImN1cnJlbnRPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsIklTVE9mZnNldCIsIklTVFRpbWUiLCJnZXRUaW1lIiwiaG91cnNJU1QiLCJnZXRIb3VycyIsIm1pbnV0ZXNJU1QiLCJnZXRNaW51dGVzIiwiZ2V0UHVuY2hTdGF0dXMiLCJkYXRhIiwicGFyc2VJbnQiLCJnZXREYXRlIiwiZmlsdGVyZWREYXRhIiwiZG9jcyIsIm1hcCIsImlkIiwiaXRlbSIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGl0bGUiLCJidXR0b25zU3R5bGluZyIsInJlYWR5SW4iLCJmaXJlIiwidGV4dCIsInBvc2l0aW9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsInllYXIiLCJkYXkiLCJwdW5jaEluIiwicHVuY2hPdXQiLCJzdGF0dXMiLCJ0ZWFjaGVySWQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZGlzbWlzcyIsIkRpc21pc3NSZWFzb24iLCJjYW5jZWwiLCJyZWFkeU91dCIsImF0dGVuZGFuY2VEb2MiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Punching/index.jsx\n"));

/***/ })

});