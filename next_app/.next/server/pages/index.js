module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/pages/index.js\";\n\nconst h1 = {\n  fontSize: '72pt',\n  fontWeight: 'bold',\n  textAlign: 'right',\n  letterSpacing: '-8px',\n  color: '#f0f0f0',\n  margin: '-40px 0px'\n};\nconst p = {\n  margin: '0px',\n  color: '#666',\n  fontSize: '16pt'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: \"jsx-13110838\",\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"13110838\",\n    children: \"h1.jsx-13110838{font-size:68px;font-weight:bold;text-align:right;-webkit-letter-spacing:-8px;-moz-letter-spacing:-8px;-ms-letter-spacing:-8px;letter-spacing:-8px;color:#f0f0f0;margin:-32px 0px;}p.jsx-13110838{margin:0px;color:#666;font-size:16pt;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3lvbmdrZXhpbmcvRG9jdW1lbnRzL3JlYWN0X25leHQvbmV4dF9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JjLEFBR3NCLEFBUUwsV0FDQSxJQVJPLE9BU0gsVUFSRyxLQVNuQixZQVJzQixpR0FDTixjQUNHLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbW95b25na2V4aW5nL0RvY3VtZW50cy9yZWFjdF9uZXh0L25leHRfYXBwL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaDEgPSB7XG4gIGZvbnRTaXplOic3MnB0JyxcbiAgZm9udFdlaWdodDonYm9sZCcsXG4gIHRleHRBbGlnbjoncmlnaHQnLFxuICBsZXR0ZXJTcGFjaW5nOictOHB4JyxcbiAgY29sb3I6JyNmMGYwZjAnLFxuICBtYXJnaW46Jy00MHB4IDBweCdcbn1cblxuXG5jb25zdCBwID0ge1xuICBtYXJnaW46JzBweCcsXG4gIGNvbG9yOicjNjY2JyxcbiAgZm9udFNpemU6JzE2cHQnXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT48ZGl2PlxuICA8c3R5bGUganN4PntgXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA2OHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtOHB4O1xuICAgICAgY29sb3I6ICNmMGYwZjA7XG4gICAgICBtYXJnaW46IC0zMnB4IDBweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW46MHB4O1xuICAgICAgY29sb3I6IzY2NjtcbiAgICAgIGZvbnQtc2l6ZToxNnB0O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8aDEgc3R5bGU9e2gxfT5OZXh0LmpzPC9oMT5cbiAgPHAgc3R5bGU9e3B9PldlbGNvbWUgdG8gbmV4dC5qcyE8L3A+XG4gIDxwPuOBk+OCjOOBr+ODk+ODq+ODiOOCpOODs0NTU+OBq+OCiOOCi+OCueOCv+OCpOODq+OBp+OBmeOAgjwvcD5cbjwvZGl2PlxuXG4iXX0= */\\n/*@ sourceURL=/Users/moyongkexing/Documents/react_next/next_app/pages/index.js */\"\n  }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    style: h1,\n    className: \"jsx-13110838\",\n    children: \"Next.js\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    style: p,\n    className: \"jsx-13110838\",\n    children: \"Welcome to next.js!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    className: \"jsx-13110838\",\n    children: \"\\u3053\\u308C\\u306F\\u30D3\\u30EB\\u30C8\\u30A4\\u30F3CSS\\u306B\\u3088\\u308B\\u30B9\\u30BF\\u30A4\\u30EB\\u3067\\u3059\\u3002\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 18,\n  columnNumber: 21\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImgxIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwibWFyZ2luIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUc7QUFDVEMsVUFBUSxFQUFDLE1BREE7QUFFVEMsWUFBVSxFQUFDLE1BRkY7QUFHVEMsV0FBUyxFQUFDLE9BSEQ7QUFJVEMsZUFBYSxFQUFDLE1BSkw7QUFLVEMsT0FBSyxFQUFDLFNBTEc7QUFNVEMsUUFBTSxFQUFDO0FBTkUsQ0FBWDtBQVVBLE1BQU1DLENBQUMsR0FBRztBQUNSRCxRQUFNLEVBQUMsS0FEQztBQUVSRCxPQUFLLEVBQUMsTUFGRTtBQUdSSixVQUFRLEVBQUM7QUFIRCxDQUFWO0FBT2Usa0ZBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQWdCbEI7QUFBSSxTQUFLLEVBQUVELEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCa0IsZUFpQmxCO0FBQUcsU0FBSyxFQUFFTyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQmtCLGVBa0JsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGgxID0ge1xuICBmb250U2l6ZTonNzJwdCcsXG4gIGZvbnRXZWlnaHQ6J2JvbGQnLFxuICB0ZXh0QWxpZ246J3JpZ2h0JyxcbiAgbGV0dGVyU3BhY2luZzonLThweCcsXG4gIGNvbG9yOicjZjBmMGYwJyxcbiAgbWFyZ2luOictNDBweCAwcHgnXG59XG5cblxuY29uc3QgcCA9IHtcbiAgbWFyZ2luOicwcHgnLFxuICBjb2xvcjonIzY2NicsXG4gIGZvbnRTaXplOicxNnB0J1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+PGRpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLThweDtcbiAgICAgIGNvbG9yOiAjZjBmMGYwO1xuICAgICAgbWFyZ2luOiAtMzJweCAwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luOjBweDtcbiAgICAgIGNvbG9yOiM2NjY7XG4gICAgICBmb250LXNpemU6MTZwdDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPGgxIHN0eWxlPXtoMX0+TmV4dC5qczwvaDE+XG4gIDxwIHN0eWxlPXtwfT5XZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICA8cD7jgZPjgozjga/jg5Pjg6vjg4jjgqTjg7NDU1Pjgavjgojjgovjgrnjgr/jgqTjg6vjgafjgZnjgII8L3A+XG48L2Rpdj5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });