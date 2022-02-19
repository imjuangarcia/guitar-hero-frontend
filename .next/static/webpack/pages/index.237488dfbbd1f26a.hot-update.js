"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _data_meli_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/meli.json */ \"./data/meli.json\");\n\n// Chakra components\n\n\n// Content\n\nfunction ProductGrid() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        templateColumns: \"repeat(4, 1fr)\",\n        gap: 4,\n        mt: \"4\",\n        children: _data_meli_json__WEBPACK_IMPORTED_MODULE_1__.map(function(guitar, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {\n                border: \"solid\",\n                borderWidth: \"1px\",\n                borderColor: \"gray.100\",\n                borderRadius: \"8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: guitar.url,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        display: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                \"aria-label\": \"Favorite this guitar\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {}, void 0, false, void 0, void 0),\n                                color: \"gray.400\",\n                                bgColor: \"transparent\",\n                                border: \"solid\",\n                                borderWidth: \"1px\",\n                                borderColor: \"gray.100\",\n                                borderRadius: \"4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                \"aria-label\": \"Hide this guitar\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ViewOffIcon, {}, void 0, false, void 0, void 0),\n                                color: \"gray.400\",\n                                bgColor: \"transparent\",\n                                border: \"solid\",\n                                borderWidth: \"1px\",\n                                borderColor: \"gray.100\",\n                                borderRadius: \"4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                src: guitar.image,\n                                alt: guitar.title,\n                                objectFit: \"cover\",\n                                h: \"220\",\n                                w: \"100%\",\n                                borderTopLeftRadius: \"8\",\n                                borderTopRightRadius: \"8\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: guitar.url,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        p: \"2\",\n                        display: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                size: \"sm\",\n                                color: \"gray.900\",\n                                children: guitar.title\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                mt: \"2\",\n                                color: \"gray.600\",\n                                children: [\n                                    \"$\",\n                                    guitar.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQW9CO0FBQ3FFO0FBQ2pDO0FBRXhELEVBQVU7QUFDMEI7QUFFckIsUUFBUSxDQUFDVSxXQUFXLEdBQUcsQ0FBQzs7SUFDckMsTUFBTSw2RUFDSFYsa0RBQUk7UUFBQ1csZUFBZSxFQUFDLENBQWdCO1FBQUNDLEdBQUcsRUFBRSxDQUFDO1FBQUVDLEVBQUUsRUFBQyxDQUFHO2tCQUNsREosZ0RBQVEsQ0FBQyxRQUFRLENBQVBNLE1BQU0sRUFBRUMsS0FBSzswQkFDdEIsTUFBTSwrREFBTGYsc0RBQVE7Z0JBRVBnQixNQUFNLEVBQUMsQ0FBTztnQkFDZEMsV0FBVyxFQUFDLENBQUs7Z0JBQ2pCQyxXQUFXLEVBQUMsQ0FBVTtnQkFDdEJDLFlBQVksRUFBQyxDQUFHOztnR0FFZmYsa0RBQUk7d0JBQUNnQixJQUFJLEVBQUVOLE1BQU0sQ0FBQ08sR0FBRzt3QkFBRUMsTUFBTSxFQUFDLENBQVE7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ0MsT0FBTyxFQUFDLENBQU87O3dHQUM5RW5CLHdEQUFVO2dDQUNUb0IsQ0FBVSxhQUFDLENBQXNCO2dDQUNqQ0MsSUFBSSw4RUFBR3BCLHNEQUFRO2dDQUNmcUIsS0FBSyxFQUFDLENBQVU7Z0NBQ2hCQyxPQUFPLEVBQUMsQ0FBYTtnQ0FDckJaLE1BQU0sRUFBQyxDQUFPO2dDQUNkQyxXQUFXLEVBQUMsQ0FBSztnQ0FDakJDLFdBQVcsRUFBQyxDQUFVO2dDQUN0QkMsWUFBWSxFQUFDLENBQUc7Ozs7Ozt3R0FFakJkLHdEQUFVO2dDQUNUb0IsQ0FBVSxhQUFDLENBQWtCO2dDQUM3QkMsSUFBSSw4RUFBR25CLHlEQUFXO2dDQUNsQm9CLEtBQUssRUFBQyxDQUFVO2dDQUNoQkMsT0FBTyxFQUFDLENBQWE7Z0NBQ3JCWixNQUFNLEVBQUMsQ0FBTztnQ0FDZEMsV0FBVyxFQUFDLENBQUs7Z0NBQ2pCQyxXQUFXLEVBQUMsQ0FBVTtnQ0FDdEJDLFlBQVksRUFBQyxDQUFHOzs7Ozs7d0dBRWpCbEIsbURBQUs7Z0NBQ0o0QixHQUFHLEVBQUVmLE1BQU0sQ0FBQ2dCLEtBQUs7Z0NBQ2pCQyxHQUFHLEVBQUVqQixNQUFNLENBQUNrQixLQUFLO2dDQUNqQkMsU0FBUyxFQUFDLENBQU87Z0NBQ2pCQyxDQUFDLEVBQUMsQ0FBSztnQ0FDUEMsQ0FBQyxFQUFDLENBQU07Z0NBQ1JDLG1CQUFtQixFQUFDLENBQUc7Z0NBQ3ZCQyxvQkFBb0IsRUFBQyxDQUFHOzs7Ozs7Ozs7Ozs7Z0dBRzNCakMsa0RBQUk7d0JBQUNnQixJQUFJLEVBQUVOLE1BQU0sQ0FBQ08sR0FBRzt3QkFBRUMsTUFBTSxFQUFDLENBQVE7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ2UsQ0FBQyxFQUFDLENBQUc7d0JBQUNkLE9BQU8sRUFBQyxDQUFPOzt3R0FDcEZ0QixxREFBTztnQ0FBQ3FDLElBQUksRUFBQyxDQUFJO2dDQUFDWixLQUFLLEVBQUMsQ0FBVTswQ0FDaENiLE1BQU0sQ0FBQ2tCLEtBQUs7Ozs7Ozt3R0FFZDdCLGtEQUFJO2dDQUFDUyxFQUFFLEVBQUMsQ0FBRztnQ0FBQ2UsS0FBSyxFQUFDLENBQVU7O29DQUFDLENBQzNCO29DQUFDYixNQUFNLENBQUMwQixLQUFLOzs7Ozs7Ozs7Ozs7OztlQTFDYnpCLEtBQUs7Ozs7Ozs7Ozs7O0FBaURwQixDQUFDO0tBdER1Qk4sV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGFrcmEgY29tcG9uZW50c1xuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBMaW5rLCBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBTdGFySWNvbiwgVmlld09mZkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcblxuLy8gQ29udGVudFxuaW1wb3J0IG1lbGkgZnJvbSAnLi4vZGF0YS9tZWxpLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0R3JpZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9J3JlcGVhdCg0LCAxZnIpJyBnYXA9ezR9IG10PVwiNFwiPlxuICAgICAge21lbGkubWFwKChndWl0YXIsIGluZGV4KSA9PiBcbiAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBib3JkZXI9XCJzb2xpZFwiXG4gICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheS4xMDBcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z3VpdGFyLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGRpc3BsYXk9XCJibG9ja1wiPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nRmF2b3JpdGUgdGhpcyBndWl0YXInXG4gICAgICAgICAgICAgIGljb249ezxTdGFySWNvbiAvPn1cbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjQwMFwiXG4gICAgICAgICAgICAgIGJnQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIGJvcmRlcj1cInNvbGlkXCJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuMTAwXCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nSGlkZSB0aGlzIGd1aXRhcidcbiAgICAgICAgICAgICAgaWNvbj17PFZpZXdPZmZJY29uIC8+fVxuICAgICAgICAgICAgICBjb2xvcj1cImdyYXkuNDAwXCJcbiAgICAgICAgICAgICAgYmdDb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgYm9yZGVyPVwic29saWRcIlxuICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheS4xMDBcIlxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtndWl0YXIuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17Z3VpdGFyLnRpdGxlfVxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIGg9XCIyMjBcIlxuICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9XCI4XCJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9XCI4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2d1aXRhci51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBwPVwiMlwiIGRpc3BsYXk9XCJibG9ja1wiPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjkwMFwiPlxuICAgICAgICAgICAgICB7Z3VpdGFyLnRpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgbXQ9XCIyXCIgY29sb3I9XCJncmF5LjYwMFwiPlxuICAgICAgICAgICAgICAke2d1aXRhci5wcmljZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICApfVxuICAgIDwvR3JpZD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkdyaWQiLCJHcmlkSXRlbSIsIkltYWdlIiwiSGVhZGluZyIsIlRleHQiLCJMaW5rIiwiSWNvbkJ1dHRvbiIsIlN0YXJJY29uIiwiVmlld09mZkljb24iLCJtZWxpIiwiUHJvZHVjdEdyaWQiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtdCIsIm1hcCIsImd1aXRhciIsImluZGV4IiwiYm9yZGVyIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJkaXNwbGF5IiwiYXJpYS1sYWJlbCIsImljb24iLCJjb2xvciIsImJnQ29sb3IiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwib2JqZWN0Rml0IiwiaCIsInciLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJwIiwic2l6ZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Grid.js\n");

/***/ })

});