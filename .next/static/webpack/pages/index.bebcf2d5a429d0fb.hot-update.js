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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _data_meli_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/meli.json */ \"./data/meli.json\");\n\n// Chakra components\n\n// Content\n\nfunction ProductGrid() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        templateColumns: \"repeat(4, 1fr)\",\n        gap: 4,\n        mt: \"4\",\n        children: _data_meli_json__WEBPACK_IMPORTED_MODULE_1__.map(function(guitar, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: guitar.image,\n                        alt: guitar.title,\n                        objectFit: \"cover\",\n                        h: \"320\",\n                        w: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        size: \"sm\",\n                        mt: \"4\",\n                        color: \"gray.900\",\n                        children: guitar.title\n                    }, void 0, false, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        mt: \"2\",\n                        color: \"gray.600\",\n                        children: guitar.price\n                    }, void 0, false, {\n                        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jmg/Desktop/JMG/Clients/JMG/Projects/06_Guitar Hero/Code/guitar-hero-frontend/components/Grid.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n};\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsRUFBb0I7QUFDbUQ7QUFFdkUsRUFBVTtBQUMwQjtBQUVyQixRQUFRLENBQUNNLFdBQVcsR0FBRyxDQUFDOztJQUNyQyxNQUFNLDZFQUNITixrREFBSTtRQUFDTyxlQUFlLEVBQUMsQ0FBZ0I7UUFBQ0MsR0FBRyxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFDLENBQUc7a0JBQ2xESixnREFBUSxDQUFDLFFBQVEsQ0FBUE0sTUFBTSxFQUFFQyxLQUFLOzBCQUN0QixNQUFNLCtEQUFMWCxzREFBUTs7Z0dBQ05DLG1EQUFLO3dCQUNKVyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csS0FBSzt3QkFDakJDLEdBQUcsRUFBRUosTUFBTSxDQUFDSyxLQUFLO3dCQUNqQkMsU0FBUyxFQUFDLENBQU87d0JBQ2pCQyxDQUFDLEVBQUMsQ0FBSzt3QkFDUEMsQ0FBQyxFQUFDLENBQU07Ozs7OztnR0FFVGhCLHFEQUFPO3dCQUFDaUIsSUFBSSxFQUFDLENBQUk7d0JBQUNYLEVBQUUsRUFBQyxDQUFHO3dCQUFDWSxLQUFLLEVBQUMsQ0FBVTtrQ0FDdkNWLE1BQU0sQ0FBQ0ssS0FBSzs7Ozs7O2dHQUVkWixrREFBSTt3QkFBQ0ssRUFBRSxFQUFDLENBQUc7d0JBQUNZLEtBQUssRUFBQyxDQUFVO2tDQUMxQlYsTUFBTSxDQUFDVyxLQUFLOzs7Ozs7O2VBWkZWLEtBQUs7Ozs7Ozs7Ozs7O0FBa0I1QixDQUFDO0tBdEJ1Qk4sV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGFrcmEgY29tcG9uZW50c1xuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbi8vIENvbnRlbnRcbmltcG9ydCBtZWxpIGZyb20gJy4uL2RhdGEvbWVsaS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdyaWQoKSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPSdyZXBlYXQoNCwgMWZyKScgZ2FwPXs0fSBtdD1cIjRcIj5cbiAgICAgIHttZWxpLm1hcCgoZ3VpdGFyLCBpbmRleCkgPT4gXG4gICAgICAgIDxHcmlkSXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17Z3VpdGFyLmltYWdlfVxuICAgICAgICAgICAgYWx0PXtndWl0YXIudGl0bGV9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBoPVwiMzIwXCJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIG10PVwiNFwiIGNvbG9yPVwiZ3JheS45MDBcIj5cbiAgICAgICAgICAgIHtndWl0YXIudGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IG10PVwiMlwiIGNvbG9yPVwiZ3JheS42MDBcIj5cbiAgICAgICAgICAgIHtndWl0YXIucHJpY2V9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgKX1cbiAgICA8L0dyaWQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHcmlkIiwiR3JpZEl0ZW0iLCJJbWFnZSIsIkhlYWRpbmciLCJUZXh0IiwibWVsaSIsIlByb2R1Y3RHcmlkIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibXQiLCJtYXAiLCJndWl0YXIiLCJpbmRleCIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJvYmplY3RGaXQiLCJoIiwidyIsInNpemUiLCJjb2xvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Grid.js\n");

/***/ })

});