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

/***/ "(app-pages-browser)/./src/app/Context/userContext.js":
/*!****************************************!*\
  !*** ./src/app/Context/userContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContextProvider: function() { return /* binding */ UserContextProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/config */ \"(app-pages-browser)/./src/app/firebase/config.js\");\n/* __next_internal_client_entry_do_not_use__ UserContextProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst UserContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    //FIREBASE DB\n    const teachersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"teachers\");\n    const [loginUser, setLoginUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const loadData = ()=>{\n        return new Promise((resolve)=>{\n            // Simulating an asynchronous operation\n            setTimeout(()=>{\n                const auth1 = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth1, (user)=>{\n                    setLoginUser(user);\n                });\n                console.log(\"Data loaded\");\n                resolve();\n            }, 200);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadData().then(()=>{\n            // Function to execute after data has been loaded\n            console.log(\"Function executed after data load\");\n            const getTeachersList = async ()=>{\n                const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(teachersCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"userId\", \"==\", auth.currentUser.uid)));\n                //const data =  await  getDocs(query(teachersCollectionRef, where('userId', '==', 'zZfRakIcCBbEkW46oFNp1Xav17r2')))\n                //await getDocs(teachersCollectionRef)\n                const filteredData = data.docs.map((doc)=>({\n                        ...doc.data(),\n                        id: doc.id\n                    }));\n                setProfile(filteredData[0]);\n            // console.log(filteredData[0])\n            };\n            getTeachersList();\n        });\n    }, []);\n    /*\r\n\r\nconst getTeachersList = async () => {\r\n\r\n    //const data =  await  getDocs(query(teachersCollectionRef, where('userId', '==', auth.currentUser.uid)))\r\n    const data =  await  getDocs(query(teachersCollectionRef, where('userId', '==', 'zZfRakIcCBbEkW46oFNp1Xav17r2')))\r\n    //await getDocs(teachersCollectionRef)\r\n    \r\n    const filteredData = data.docs.map((doc) => (\r\n        {\r\n            ...doc.data(),\r\n            id: doc.id\r\n        }\r\n    ))\r\n    setProfile(filteredData[0])\r\n   // console.log(filteredData[0])\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n    useEffect(() => {\r\n\r\n\r\n        getTeachersList()\r\n\r\n      }, []);\r\n\r\n*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loginUser: [\n                loginUser,\n                setLoginUser\n            ],\n            profile: [\n                profile,\n                setProfile\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\al-hikma\\\\src\\\\app\\\\Context\\\\userContext.js\",\n        lineNumber: 122,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserContextProvider, \"BTGHACQ2V6ycZKZqjHYHarFsO2c=\");\n_c = UserContextProvider;\nconst useUserContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVFO0FBQ1o7QUFDWTtBQUMvQjtBQUd4QyxNQUFNVyw0QkFBY1gsb0RBQWFBLENBQUMsQ0FBQztBQUk1QixNQUFNWSxzQkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBTTNDLGFBQWE7SUFDYixNQUFNQyx3QkFBd0JSLDhEQUFVQSxDQUFDSSxnREFBRUEsRUFBRTtJQUcvQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQVV2QyxNQUFNZ0IsV0FBVztRQUNmLE9BQU8sSUFBSUMsUUFBUSxDQUFDQztZQUNsQix1Q0FBdUM7WUFDdkNDLFdBQVc7Z0JBRVAsTUFBTUMsUUFBT25CLHNEQUFPQTtnQkFFcEJDLGlFQUFrQkEsQ0FBQ2tCLE9BQU0sQ0FBQ0M7b0JBQzFCUixhQUFhUTtnQkFFYjtnQkFHRkMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaTDtZQUNGLEdBQUc7UUFDTDtJQUNGO0lBSUFuQixnREFBU0EsQ0FBQztRQUNSaUIsV0FBV1EsSUFBSSxDQUFDO1lBQ2QsaURBQWlEO1lBQ2pERixRQUFRQyxHQUFHLENBQUM7WUFFWixNQUFNRSxrQkFBa0I7Z0JBRXBCLE1BQU1DLE9BQVEsTUFBT3RCLDJEQUFPQSxDQUFDQyx5REFBS0EsQ0FBQ00sdUJBQXVCTCx5REFBS0EsQ0FBQyxVQUFVLE1BQU1jLEtBQUtPLFdBQVcsQ0FBQ0MsR0FBRztnQkFDcEcsbUhBQW1IO2dCQUNuSCxzQ0FBc0M7Z0JBRXRDLE1BQU1DLGVBQWVILEtBQUtJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQ2hDO3dCQUNJLEdBQUdBLElBQUlOLElBQUksRUFBRTt3QkFDYk8sSUFBSUQsSUFBSUMsRUFBRTtvQkFDZDtnQkFFSmxCLFdBQVdjLFlBQVksQ0FBQyxFQUFFO1lBQzNCLCtCQUErQjtZQUlsQztZQUVBSjtRQUVGO0lBQ0YsR0FBRyxFQUFFO0lBS1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEsR0FHSSxxQkFDSSw4REFBQ2pCLFlBQVkwQixRQUFRO1FBQUVDLE9BQU87WUFBRXZCLFdBQVc7Z0JBQUNBO2dCQUFXQzthQUFhO1lBQUVDLFNBQVM7Z0JBQUNBO2dCQUFTQzthQUFXO1FBQUM7a0JBRWhHTDs7Ozs7O0FBR2IsRUFBRTtHQWxIV0Q7S0FBQUE7QUFvSE4sTUFBTTJCLGlCQUFpQjs7SUFBTXRDLE9BQUFBLGlEQUFVQSxDQUFDVTtBQUFXLEVBQUU7SUFBL0M0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbnRleHQvdXNlckNvbnRleHQuanM/NThjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZS9jb25maWdcIjtcclxuXHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAvL0ZJUkVCQVNFIERCXHJcbiAgICAgIGNvbnN0IHRlYWNoZXJzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidGVhY2hlcnNcIiwpXHJcbiAgXHJcblxyXG4gICAgY29uc3QgW2xvZ2luVXNlciwgc2V0TG9naW5Vc2VyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgLy8gU2ltdWxhdGluZyBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7ICAgICAgXHJcbiAgICAgICAgICAgIHNldExvZ2luVXNlcih1c2VyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGxvYWRlZCcpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxvYWREYXRhKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBkYXRhIGhhcyBiZWVuIGxvYWRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGdW5jdGlvbiBleGVjdXRlZCBhZnRlciBkYXRhIGxvYWQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VGVhY2hlcnNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9ICBhd2FpdCAgZ2V0RG9jcyhxdWVyeSh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYsIHdoZXJlKCd1c2VySWQnLCAnPT0nLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCkpKVxyXG4gICAgICAgICAgICAvL2NvbnN0IGRhdGEgPSAgYXdhaXQgIGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlcklkJywgJz09JywgJ3paZlJha0ljQ0JiRWtXNDZvRk5wMVhhdjE3cjInKSkpXHJcbiAgICAgICAgICAgIC8vYXdhaXQgZ2V0RG9jcyh0ZWFjaGVyc0NvbGxlY3Rpb25SZWYpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgc2V0UHJvZmlsZShmaWx0ZXJlZERhdGFbMF0pXHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWREYXRhWzBdKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VGVhY2hlcnNMaXN0KClcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICBcclxuXHJcblxyXG5cclxuLypcclxuXHJcbmNvbnN0IGdldFRlYWNoZXJzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAvL2NvbnN0IGRhdGEgPSAgYXdhaXQgIGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlcklkJywgJz09JywgYXV0aC5jdXJyZW50VXNlci51aWQpKSlcclxuICAgIGNvbnN0IGRhdGEgPSAgYXdhaXQgIGdldERvY3MocXVlcnkodGVhY2hlcnNDb2xsZWN0aW9uUmVmLCB3aGVyZSgndXNlcklkJywgJz09JywgJ3paZlJha0ljQ0JiRWtXNDZvRk5wMVhhdjE3cjInKSkpXHJcbiAgICAvL2F3YWl0IGdldERvY3ModGVhY2hlcnNDb2xsZWN0aW9uUmVmKVxyXG4gICAgXHJcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmRvY3MubWFwKChkb2MpID0+IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICB9XHJcbiAgICApKVxyXG4gICAgc2V0UHJvZmlsZShmaWx0ZXJlZERhdGFbMF0pXHJcbiAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YVswXSlcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBnZXRUZWFjaGVyc0xpc3QoKVxyXG5cclxuICAgICAgfSwgW10pO1xyXG5cclxuKi9cclxuXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgIHZhbHVlPXt7IGxvZ2luVXNlcjogW2xvZ2luVXNlciwgc2V0TG9naW5Vc2VyXSwgcHJvZmlsZTogW3Byb2ZpbGUsIHNldFByb2ZpbGVdIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VyQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsImRiIiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0ZWFjaGVyc0NvbGxlY3Rpb25SZWYiLCJsb2dpblVzZXIiLCJzZXRMb2dpblVzZXIiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImxvYWREYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYXV0aCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsImdldFRlYWNoZXJzTGlzdCIsImRhdGEiLCJjdXJyZW50VXNlciIsInVpZCIsImZpbHRlcmVkRGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Context/userContext.js\n"));

/***/ })

});