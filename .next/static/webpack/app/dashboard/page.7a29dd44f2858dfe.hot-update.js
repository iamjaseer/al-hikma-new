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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Punching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Punching(param) {\n    let { user } = param;\n    _s();\n    //WORKING TIME START AND END\n    const startTime = 7;\n    const endTime = 8;\n    //console.log(user)\n    //FIREBASE DB\n    const attendanceCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, \"attendance-user-\".concat(user, \"-month-\").concat(new Date().getMonth() + 1, \"-year-\").concat(new Date().getFullYear()));\n    //STATES\n    const [punchStatus, setPunchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    //const [currentPuchStatus, setcurrentPuchStatus] = useState([])\n    //GET CURRENT INDIAN TIME\n    const currentTime = new Date();\n    const currentOffset = currentTime.getTimezoneOffset();\n    const ISTOffset = 330; // IST offset UTC +5:30 \n    const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);\n    // ISTTime now represents the time in IST coordinates\n    const hoursIST = ISTTime.getHours();\n    const minutesIST = ISTTime.getMinutes();\n    //GET PUNCH STATUS\n    const getPunchStatus = async ()=>{\n        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(attendanceCollectionRef));\n        //await getDocs(teachersCollectionRef)\n        const filteredData = data.docs.map((doc)=>({\n                ...doc.data(),\n                id: doc.id\n            }));\n        filteredData.map((item)=>{\n            setPunchStatus(item);\n        //console.log(item)\n        });\n    };\n    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({\n        customClass: {\n            confirmButton: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n            cancelButton: \"w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3\",\n            title: \"text-blue-800\"\n        },\n        buttonsStyling: false\n    });\n    // PUNCH IN\n    function readyIn() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, \"day-\" + new Date().getDate()), {\n                        date: new Date().toLocaleDateString(),\n                        month: new Date().getMonth() + 1,\n                        year: new Date().getFullYear(),\n                        day: new Date().getDate(),\n                        punchIn: \"\".concat(hoursIST, \":\").concat(minutesIST),\n                        punchOut: null,\n                        status: \"punchin\",\n                        teacherId: user\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    // PUNCH OUT\n    function readyOut() {\n        swalWithBootstrapButtons.fire({\n            title: \"ശ്രെദ്ധിക്കുക \",\n            text: \"തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \",\n            position: \"bottom-end\",\n            cancelButtonText: \"ഒഴിവാക്കുക \",\n            showCancelButton: true,\n            confirmButtonText: \"സ്ഥിദീകരിക്കുക\"\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                try {\n                    const attendanceDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(attendanceCollectionRef, user);\n                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(attendanceDoc, {\n                        punchOut: \"\".concat(hoursIST, \":\").concat(minutesIST),\n                        status: \"punchout\"\n                    });\n                    getPunchStatus();\n                    console.log(\"success\");\n                //router.push(`/all-teachers`)\n                } catch (err) {\n                    console.log(\"error\");\n                    console.log(err);\n                }\n            } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {}\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getPunchStatus();\n    }, []);\n    console.log(currentPuchStatus);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            startTime <= 7 && endTime >= 8 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ അകത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 185,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyIn(),\n                        children: \"അകത്തേക്ക്\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 186,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 184,\n                columnNumber: 41\n            }, this) : null,\n            punchStatus.status == \"punchin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 190,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all\",\n                        onClick: ()=>readyOut(),\n                        children: \"പുറത്തേക്കു\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 191,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 189,\n                columnNumber: 42\n            }, this) : null,\n            punchStatus.status == \"punchout\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl p-6 grid gap-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base\",\n                        children: \"തങ്ങളുടെ ഹാജർ രേഖപ്പെടുത്തി. നന്ദി  \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-transparent hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white border border-sky-400 rounded-md p-4 text-sky-400 font-bold text-lg transition-all\",\n                        children: \"റിപ്പോർട്ട് കാണുക \"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                        lineNumber: 196,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Components\\\\Punching\\\\index.jsx\",\n                lineNumber: 194,\n                columnNumber: 43\n            }, this) : null\n        ]\n    }, void 0, true);\n}\n_s(Punching, \"xxnxg2cuNttI2YPE6uz4qKG1Ehg=\");\n_c = Punching;\nvar _c;\n$RefreshReg$(_c, \"Punching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9QdW5jaGluZy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNnRjtBQUNwRTtBQUNDO0FBRzVCLFNBQVNhLFNBQVMsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUcvQiw0QkFBNEI7SUFDNUIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBR2hCLG1CQUFtQjtJQUVuQixhQUFhO0lBQ2IsTUFBTUMsMEJBQTBCaEIsOERBQVVBLENBQUNTLGdEQUFFQSxFQUFFLG1CQUFpQyxPQUFkSSxNQUFLLFdBQTJDLE9BQWxDLElBQUlJLE9BQU9DLFFBQVEsS0FBSyxHQUFFLFVBQWlDLE9BQXpCLElBQUlELE9BQU9FLFdBQVc7SUFHeEksUUFBUTtJQUVSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELGdFQUFnRTtJQU1oRSx5QkFBeUI7SUFDekIsTUFBTVcsY0FBYyxJQUFJTDtJQUV4QixNQUFNTSxnQkFBZ0JELFlBQVlFLGlCQUFpQjtJQUVuRCxNQUFNQyxZQUFZLEtBQU8sd0JBQXdCO0lBRWpELE1BQU1DLFVBQVUsSUFBSVQsS0FBS0ssWUFBWUssT0FBTyxLQUFLLENBQUNGLFlBQVlGLGFBQVksSUFBSztJQUUvRSxxREFBcUQ7SUFFckQsTUFBTUssV0FBV0YsUUFBUUcsUUFBUTtJQUNqQyxNQUFNQyxhQUFhSixRQUFRSyxVQUFVO0lBR3JDLGtCQUFrQjtJQUNsQixNQUFNQyxpQkFBaUI7UUFFckIsTUFBTUMsT0FBTyxNQUFNL0IsMkRBQU9BLENBQUNDLHlEQUFLQSxDQUFDYTtRQUVqQyxzQ0FBc0M7UUFFdEMsTUFBTWtCLGVBQWVELEtBQUtFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMvQixNQUNsQztnQkFDRSxHQUFHQSxJQUFJNEIsSUFBSSxFQUFFO2dCQUNiSSxJQUFJaEMsSUFBSWdDLEVBQUU7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QkFBRUQsV0FBVTtrQ0FBWTs7Ozs7O2tDQUN6Qiw4REFBQ0U7d0JBQU9GLFdBQVU7a0NBQWlMOzs7Ozs7Ozs7Ozt1QkFDNUw7OztBQVFmO0dBcE13QmhFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cy9QdW5jaGluZy9pbmRleC5qc3g/ODFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSwgZG9jLCB1cGRhdGVEb2MsIGdldERvYywgc2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NvbmZpZydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1bmNoaW5nKHsgdXNlciB9KSB7XHJcblxyXG5cclxuICAvL1dPUktJTkcgVElNRSBTVEFSVCBBTkQgRU5EXHJcbiAgY29uc3Qgc3RhcnRUaW1lID0gN1xyXG4gIGNvbnN0IGVuZFRpbWUgPSA4XHJcblxyXG4gIFxyXG4gIC8vY29uc29sZS5sb2codXNlcilcclxuXHJcbiAgLy9GSVJFQkFTRSBEQlxyXG4gIGNvbnN0IGF0dGVuZGFuY2VDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgYGF0dGVuZGFuY2UtdXNlci0ke3VzZXJ9LW1vbnRoLSR7bmV3IERhdGUoKS5nZXRNb250aCgpICsgMX0teWVhci0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLClcclxuXHJcblxyXG4gIC8vU1RBVEVTXHJcblxyXG4gIGNvbnN0IFtwdW5jaFN0YXR1cywgc2V0UHVuY2hTdGF0dXNdID0gdXNlU3RhdGUoW10pXHJcbiAgLy9jb25zdCBbY3VycmVudFB1Y2hTdGF0dXMsIHNldGN1cnJlbnRQdWNoU3RhdHVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy9HRVQgQ1VSUkVOVCBJTkRJQU4gVElNRVxyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgY3VycmVudE9mZnNldCA9IGN1cnJlbnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gIGNvbnN0IElTVE9mZnNldCA9IDMzMDsgICAvLyBJU1Qgb2Zmc2V0IFVUQyArNTozMCBcclxuXHJcbiAgY29uc3QgSVNUVGltZSA9IG5ldyBEYXRlKGN1cnJlbnRUaW1lLmdldFRpbWUoKSArIChJU1RPZmZzZXQgKyBjdXJyZW50T2Zmc2V0KSAqIDYwMDAwKTtcclxuXHJcbiAgLy8gSVNUVGltZSBub3cgcmVwcmVzZW50cyB0aGUgdGltZSBpbiBJU1QgY29vcmRpbmF0ZXNcclxuXHJcbiAgY29uc3QgaG91cnNJU1QgPSBJU1RUaW1lLmdldEhvdXJzKClcclxuICBjb25zdCBtaW51dGVzSVNUID0gSVNUVGltZS5nZXRNaW51dGVzKClcclxuXHJcblxyXG4gIC8vR0VUIFBVTkNIIFNUQVRVU1xyXG4gIGNvbnN0IGdldFB1bmNoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5KGF0dGVuZGFuY2VDb2xsZWN0aW9uUmVmLCkpXHJcblxyXG4gICAgLy9hd2FpdCBnZXREb2NzKHRlYWNoZXJzQ29sbGVjdGlvblJlZilcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAge1xyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICB9XHJcbiAgICApKVxyXG5cclxuICAgIGZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgc2V0UHVuY2hTdGF0dXMoaXRlbSlcclxuICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgIGNvbmZpcm1CdXR0b246IFwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbjogXCJ3LWZ1bGwgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgYWN0aXZlOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGUgYWN0aXZlOnRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ibHVlLTgwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LWJsdWUtODAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsIG10LTNcIixcclxuICAgICAgdGl0bGU6IFwidGV4dC1ibHVlLTgwMFwiXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbiAgfSk7XHJcblxyXG5cclxuIFxyXG5cclxuICAvLyBQVU5DSCBJTlxyXG4gIGZ1bmN0aW9uIHJlYWR5SW4oKSB7XHJcblxyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCLgtLbgtY3gtLDgtYbgtKbgtY3gtKfgtL/gtJXgtY3gtJXgtYHgtJUgXCIsXHJcbiAgICAgIHRleHQ6IFwi4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWG4LSk4LS+4LSZ4LWN4LSV4LW+IOC0qOC1h+C0sOC0pOC1jeC0pOC1hiDgtKrgtYHgtLHgtKTgtY3gtKTgtYvgtJ/gtY3gtJ/gtY0g4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtJ/gtYHgtKTgtY3gtKTgtL7gtbsg4LS24LWN4LSw4LSu4LS/4LSa4LWN4LSa4LWBLiDgtIfgtKTgtY0g4LS44LWN4LSl4LS/4LSm4LWA4LSV4LSw4LS/4LSV4LWN4LSV4LWB4LSVIOC0quC1geC0seC0pOC1jeC0pOC1h+C0leC1jeC0leC1geC0s+C1jeC0syDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC1huC0n+C1geC0pOC1jeC0pOC1geC0lSBcIixcclxuICAgICAgcG9zaXRpb246ICdib3R0b20tZW5kJyxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ+C0kuC0tOC0v+C0teC0vuC0leC1jeC0leC1geC0lSAnLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCLgtLjgtY3gtKXgtL/gtKbgtYDgtJXgtLDgtL/gtJXgtY3gtJXgtYHgtJVcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXREb2MoZG9jKGF0dGVuZGFuY2VDb2xsZWN0aW9uUmVmLCAnZGF5LScrbmV3IERhdGUoKS5nZXREYXRlKCkpLCB7XHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgIHB1bmNoSW46IGAke2hvdXJzSVNUfToke21pbnV0ZXNJU1R9YCxcclxuICAgICAgICAgICAgcHVuY2hPdXQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3B1bmNoaW4nLFxyXG4gICAgICAgICAgICB0ZWFjaGVySWQ6IHVzZXIsXHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIGdldFB1bmNoU3RhdHVzKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi5jYW5jZWxcclxuICAgICAgKSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gUFVOQ0ggT1VUXHJcbiAgZnVuY3Rpb24gcmVhZHlPdXQoKSB7XHJcblxyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCLgtLbgtY3gtLDgtYbgtKbgtY3gtKfgtL/gtJXgtY3gtJXgtYHgtJUgXCIsXHJcbiAgICAgIHRleHQ6IFwi4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWG4LSk4LS+4LSZ4LWN4LSV4LW+IOC0qOC1h+C0sOC0pOC1jeC0pOC1hiDgtKrgtYHgtLHgtKTgtY3gtKTgtYvgtJ/gtY3gtJ/gtY0g4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtJ/gtYHgtKTgtY3gtKTgtL7gtbsg4LS24LWN4LSw4LSu4LS/4LSa4LWN4LSa4LWBLiDgtIfgtKTgtY0g4LS44LWN4LSl4LS/4LSm4LWA4LSV4LSw4LS/4LSV4LWN4LSV4LWB4LSVIOC0quC1geC0seC0pOC1jeC0pOC1h+C0leC1jeC0leC1geC0s+C1jeC0syDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC1huC0n+C1geC0pOC1jeC0pOC1geC0lSBcIixcclxuICAgICAgcG9zaXRpb246ICdib3R0b20tZW5kJyxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ+C0kuC0tOC0v+C0teC0vuC0leC1jeC0leC1geC0lSAnLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCLgtLjgtY3gtKXgtL/gtKbgtYDgtJXgtLDgtL/gtJXgtY3gtJXgtYHgtJVcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgYXR0ZW5kYW5jZURvYyA9IGRvYyhhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiwgdXNlcilcclxuICAgICAgICAgIHVwZGF0ZURvYyhhdHRlbmRhbmNlRG9jLCB7XHJcbiAgICAgICAgICAgIHB1bmNoT3V0OiBgJHtob3Vyc0lTVH06JHttaW51dGVzSVNUfWAsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3B1bmNob3V0JyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBnZXRQdW5jaFN0YXR1cygpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAvL3JvdXRlci5wdXNoKGAvYWxsLXRlYWNoZXJzYClcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsXHJcbiAgICAgICkge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFB1bmNoU3RhdHVzKClcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhjdXJyZW50UHVjaFN0YXR1cylcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIHtzdGFydFRpbWUgPD0gNyAmJiBlbmRUaW1lID49IDggPyA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC02IGdyaWQgZ2FwLTQgXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWGIOC0heC0leC0pOC1jeC0pOC1i+C0n+C1jeC0n+C1jSDgtIngtLPgtY3gtLMg4LS54LS+4LSc4LW8IOC0sOC1h+C0luC0quC1jeC0quC1huC0n+C1geC0pOC1jeC0pOC1geC0lSAgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCIgb25DbGljaz17KCkgPT4gcmVhZHlJbigpfT7gtIXgtJXgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtY08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcbiAgICAgIHtwdW5jaFN0YXR1cy5zdGF0dXMgPT0gJ3B1bmNoaW4nID8gPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtNiBncmlkIGdhcC00IFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPuC0pOC0meC1jeC0meC0s+C1geC0n+C1hiDgtKrgtYHgtLHgtKTgtY3gtKTgtYfgtJXgtY3gtJXgtYHgtLPgtY3gtLMg4LSJ4LSz4LWN4LSzIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtYHgtJUgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNreS00MDAgaG92ZXI6Ymctc2t5LTUwMCBhY3RpdmU6Ymctc2t5LTUwMCByb3VuZGVkLW1kIHAtNCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCIgb25DbGljaz17KCkgPT4gcmVhZHlPdXQoKX0+4LSq4LWB4LSx4LSk4LWN4LSk4LWH4LSV4LWN4LSV4LWBPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiA6IG51bGx9XHJcblxyXG4gICAgICB7cHVuY2hTdGF0dXMuc3RhdHVzID09ICdwdW5jaG91dCcgPyA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC02IGdyaWQgZ2FwLTQgdy1mdWxsXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+4LSk4LSZ4LWN4LSZ4LSz4LWB4LSf4LWGIOC0ueC0vuC0nOC1vCDgtLDgtYfgtJbgtKrgtY3gtKrgtYbgtJ/gtYHgtKTgtY3gtKTgtL8uIOC0qOC0qOC1jeC0puC0vyAgPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXNreS01MDAgYWN0aXZlOmJnLXNreS01MDAgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNreS00MDAgcm91bmRlZC1tZCBwLTQgdGV4dC1za3ktNDAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRyYW5zaXRpb24tYWxsXCI+4LSx4LS/4LSq4LWN4LSq4LWL4LW84LSf4LWN4LSf4LWNIOC0leC0vuC0o+C1geC0lSA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcblxyXG4gICAgPC8+XHJcblxyXG4gIClcclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJTd2FsIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZG9jIiwidXBkYXRlRG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwiZGIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlB1bmNoaW5nIiwidXNlciIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJhdHRlbmRhbmNlQ29sbGVjdGlvblJlZiIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVuY2hTdGF0dXMiLCJzZXRQdW5jaFN0YXR1cyIsImN1cnJlbnRUaW1lIiwiY3VycmVudE9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiSVNUT2Zmc2V0IiwiSVNUVGltZSIsImdldFRpbWUiLCJob3Vyc0lTVCIsImdldEhvdXJzIiwibWludXRlc0lTVCIsImdldE1pbnV0ZXMiLCJnZXRQdW5jaFN0YXR1cyIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJkb2NzIiwibWFwIiwiaWQiLCJpdGVtIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aXRsZSIsImJ1dHRvbnNTdHlsaW5nIiwicmVhZHlJbiIsImZpcmUiLCJ0ZXh0IiwicG9zaXRpb24iLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiZ2V0RGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsInllYXIiLCJkYXkiLCJwdW5jaEluIiwicHVuY2hPdXQiLCJzdGF0dXMiLCJ0ZWFjaGVySWQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZGlzbWlzcyIsIkRpc21pc3NSZWFzb24iLCJjYW5jZWwiLCJyZWFkeU91dCIsImF0dGVuZGFuY2VEb2MiLCJjdXJyZW50UHVjaFN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Punching/index.jsx\n"));

/***/ })

});