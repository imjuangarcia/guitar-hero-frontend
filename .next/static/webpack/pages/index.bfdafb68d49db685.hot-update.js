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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _data_meli_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/meli.json */ \"./data/meli.json\");\n\n// Chakra components\n\n\n// Content\n\nfunction ProductGrid() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        templateColumns: \"repeat(4, 1fr)\",\n        gap: 4,\n        mt: \"4\",\n        children: _data_meli_json__WEBPACK_IMPORTED_MODULE_1__.map(function(guitar, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {\n                border: \"solid\",\n                borderWidth: \"1px\",\n                borderColor: \"gray.100\",\n                borderRadius: \"8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: guitar.url,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        display: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                \"aria-label\": \"Favorite this guitar\",\n                                cicon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {}, void 0, false, void 0, void 0)\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                \"aria-label\": \"Hide this guitar\",\n                                cicon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ViewOffIcon, {}, void 0, false, void 0, void 0)\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                src: guitar.image,\n                                alt: guitar.title,\n                                objectFit: \"cover\",\n                                h: \"220\",\n                                w: \"100%\",\n                                borderTopLeftRadius: \"8\",\n                                borderTopRightRadius: \"8\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: guitar.url,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        p: \"2\",\n                        display: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                size: \"sm\",\n                                color: \"gray.900\",\n                                children: guitar.title\n                            }, void 0, false, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                mt: \"2\",\n                                color: \"gray.600\",\n                                children: [\n                                    \"$\",\n                                    guitar.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQW9CO0FBQ3FFO0FBQ2pDO0FBRXhELEVBQVU7QUFDMEI7QUFFckIsUUFBUSxDQUFDVSxXQUFXLEdBQUcsQ0FBQzs7SUFDckMsTUFBTSw2RUFDSFYsa0RBQUk7UUFBQ1csZUFBZSxFQUFDLENBQWdCO1FBQUNDLEdBQUcsRUFBRSxDQUFDO1FBQUVDLEVBQUUsRUFBQyxDQUFHO2tCQUNsREosZ0RBQVEsQ0FBQyxRQUFRLENBQVBNLE1BQU0sRUFBRUMsS0FBSzswQkFDdEIsTUFBTSwrREFBTGYsc0RBQVE7Z0JBRVBnQixNQUFNLEVBQUMsQ0FBTztnQkFDZEMsV0FBVyxFQUFDLENBQUs7Z0JBQ2pCQyxXQUFXLEVBQUMsQ0FBVTtnQkFDdEJDLFlBQVksRUFBQyxDQUFHOztnR0FFZmYsa0RBQUk7d0JBQUNnQixJQUFJLEVBQUVOLE1BQU0sQ0FBQ08sR0FBRzt3QkFBRUMsTUFBTSxFQUFDLENBQVE7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ0MsT0FBTyxFQUFDLENBQU87O3dHQUM5RW5CLHdEQUFVO2dDQUNUb0IsQ0FBVSxhQUFDLENBQXNCO2dDQUNqQ0MsS0FBSyw4RUFBR3BCLHNEQUFROzs7Ozs7d0dBRWpCRCx3REFBVTtnQ0FDVG9CLENBQVUsYUFBQyxDQUFrQjtnQ0FDN0JDLEtBQUssOEVBQUduQix5REFBVzs7Ozs7O3dHQUVwQk4sbURBQUs7Z0NBQ0owQixHQUFHLEVBQUViLE1BQU0sQ0FBQ2MsS0FBSztnQ0FDakJDLEdBQUcsRUFBRWYsTUFBTSxDQUFDZ0IsS0FBSztnQ0FDakJDLFNBQVMsRUFBQyxDQUFPO2dDQUNqQkMsQ0FBQyxFQUFDLENBQUs7Z0NBQ1BDLENBQUMsRUFBQyxDQUFNO2dDQUNSQyxtQkFBbUIsRUFBQyxDQUFHO2dDQUN2QkMsb0JBQW9CLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7O2dHQUczQi9CLGtEQUFJO3dCQUFDZ0IsSUFBSSxFQUFFTixNQUFNLENBQUNPLEdBQUc7d0JBQUVDLE1BQU0sRUFBQyxDQUFRO3dCQUFDQyxHQUFHLEVBQUMsQ0FBcUI7d0JBQUNhLENBQUMsRUFBQyxDQUFHO3dCQUFDWixPQUFPLEVBQUMsQ0FBTzs7d0dBQ3BGdEIscURBQU87Z0NBQUNtQyxJQUFJLEVBQUMsQ0FBSTtnQ0FBQ0MsS0FBSyxFQUFDLENBQVU7MENBQ2hDeEIsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7O3dHQUVkM0Isa0RBQUk7Z0NBQUNTLEVBQUUsRUFBQyxDQUFHO2dDQUFDMEIsS0FBSyxFQUFDLENBQVU7O29DQUFDLENBQzNCO29DQUFDeEIsTUFBTSxDQUFDeUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7ZUE5QmJ4QixLQUFLOzs7Ozs7Ozs7OztBQXFDcEIsQ0FBQztLQTFDdUJOLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkLmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hha3JhIGNvbXBvbmVudHNcbmltcG9ydCB7IEdyaWQsIEdyaWRJdGVtLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluaywgSWNvbkJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgU3Rhckljb24sIFZpZXdPZmZJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5cbi8vIENvbnRlbnRcbmltcG9ydCBtZWxpIGZyb20gJy4uL2RhdGEvbWVsaS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdyaWQoKSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPSdyZXBlYXQoNCwgMWZyKScgZ2FwPXs0fSBtdD1cIjRcIj5cbiAgICAgIHttZWxpLm1hcCgoZ3VpdGFyLCBpbmRleCkgPT4gXG4gICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgYm9yZGVyPVwic29saWRcIlxuICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuMTAwXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2d1aXRhci51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBkaXNwbGF5PVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0Zhdm9yaXRlIHRoaXMgZ3VpdGFyJ1xuICAgICAgICAgICAgICBjaWNvbj17PFN0YXJJY29uIC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0hpZGUgdGhpcyBndWl0YXInXG4gICAgICAgICAgICAgIGNpY29uPXs8Vmlld09mZkljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17Z3VpdGFyLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2d1aXRhci50aXRsZX1cbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBoPVwiMjIwXCJcbiAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPVwiOFwiXG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPVwiOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPXtndWl0YXIudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgcD1cIjJcIiBkaXNwbGF5PVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS45MDBcIj5cbiAgICAgICAgICAgICAge2d1aXRhci50aXRsZX1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IG10PVwiMlwiIGNvbG9yPVwiZ3JheS42MDBcIj5cbiAgICAgICAgICAgICAgJHtndWl0YXIucHJpY2V9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgKX1cbiAgICA8L0dyaWQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHcmlkIiwiR3JpZEl0ZW0iLCJJbWFnZSIsIkhlYWRpbmciLCJUZXh0IiwiTGluayIsIkljb25CdXR0b24iLCJTdGFySWNvbiIsIlZpZXdPZmZJY29uIiwibWVsaSIsIlByb2R1Y3RHcmlkIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibXQiLCJtYXAiLCJndWl0YXIiLCJpbmRleCIsImJvcmRlciIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJocmVmIiwidXJsIiwidGFyZ2V0IiwicmVsIiwiZGlzcGxheSIsImFyaWEtbGFiZWwiLCJjaWNvbiIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJvYmplY3RGaXQiLCJoIiwidyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInAiLCJzaXplIiwiY29sb3IiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Grid.js\n");

/***/ })

});