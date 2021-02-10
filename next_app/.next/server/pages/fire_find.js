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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_find.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FireFind.js":
/*!********************************!*\
  !*** ./components/FireFind.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/components/FireFind.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass FireFind extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      borderBottom: \"1px solid gray\"\n    });\n\n    this.state = {\n      input: '',\n      data: []\n    };\n    this.doChange = this.doChange.bind(this);\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doChange(e) {\n    this.setState({\n      input: e.target.value\n    });\n  }\n\n  doAction(e) {\n    this.findFireData(this.state.input);\n  }\n\n  findFireData(s) {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().equalTo(s).on('value', snapshot => {\n      self.setState({\n        data: snapshot.val()\n      });\n    });\n  }\n\n  getTableData() {\n    let result = [];\n\n    if (this.state.data == null || this.state.data.length == 0) {\n      return [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: \"NO DATA.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 27\n        }, this)\n      }, \"0\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }, this)];\n    }\n\n    ;\n\n    for (let i in this.state.data) {\n      result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].ID\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          children: this.state.data[i].name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          children: this.state.data[i].message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 19\n      }, this));\n    }\n\n    ;\n    return result;\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        style: this.style,\n        onChange: this.doChange,\n        value: this.state.input\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: this.doAction,\n        style: this.style,\n        children: \"Find\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: this.getTableData()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 14\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 12\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FireFind);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVGaW5kLmpzPzgxNTgiXSwibmFtZXMiOlsiRmlyZUZpbmQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYm9yZGVyQm90dG9tIiwic3RhdGUiLCJpbnB1dCIsImRhdGEiLCJkb0NoYW5nZSIsImJpbmQiLCJkb0FjdGlvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmluZEZpcmVEYXRhIiwicyIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5IiwiZXF1YWxUbyIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJnZXRUYWJsZURhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsIklEIiwibmFtZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWlDO0FBSy9CQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQixtQ0FKWDtBQUNOQyxrQkFBWSxFQUFFO0FBRFIsS0FJVzs7QUFFakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRSxFQURJO0FBRVhDLFVBQUksRUFBRTtBQUZLLEtBQWI7QUFJQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0Q7O0FBRURELFVBQVEsQ0FBQ0csQ0FBRCxFQUFJO0FBQ1YsU0FBS0MsUUFBTCxDQUFjO0FBQ1pOLFdBQUssRUFBRUssQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREosS0FBZDtBQUdEOztBQUNESixVQUFRLENBQUNDLENBQUQsRUFBSTtBQUNWLFNBQUtJLFlBQUwsQ0FBa0IsS0FBS1YsS0FBTCxDQUFXQyxLQUE3QjtBQUNEOztBQUVEUyxjQUFZLENBQUNDLENBQUQsRUFBSTtBQUNkLFFBQUlDLEVBQUUsR0FBR0MsK0NBQVEsQ0FBQ0MsUUFBVCxFQUFUO0FBQ0EsUUFBSUMsR0FBRyxHQUFHSCxFQUFFLENBQUNHLEdBQUgsQ0FBTyxTQUFQLENBQVY7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBRCxPQUFHLENBQUNFLFVBQUosR0FBaUJDLE9BQWpCLENBQXlCUCxDQUF6QixFQUE0QlEsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBeUNDLFFBQUQsSUFBWTtBQUNsREosVUFBSSxDQUFDVCxRQUFMLENBQWM7QUFDWkwsWUFBSSxFQUFDa0IsUUFBUSxDQUFDQyxHQUFUO0FBRE8sT0FBZDtBQUdELEtBSkQ7QUFLRDs7QUFFREMsY0FBWSxHQUFHO0FBQ2IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsUUFBSSxLQUFLdkIsS0FBTCxDQUFXRSxJQUFYLElBQW1CLElBQW5CLElBQTJCLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQnNCLE1BQWhCLElBQTBCLENBQXpELEVBQTREO0FBQzFELGFBQU8sY0FBQztBQUFBLCtCQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVosU0FBUSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRCxDQUFQO0FBQ0Q7O0FBQUE7O0FBQ0QsU0FBSSxJQUFJQyxDQUFSLElBQWEsS0FBS3pCLEtBQUwsQ0FBV0UsSUFBeEIsRUFBOEI7QUFDNUJxQixZQUFNLENBQUNHLElBQVAsZUFBWTtBQUFBLGdDQUNWO0FBQUEsb0JBQUssS0FBSzFCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQnVCLENBQWhCLEVBQW1CRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURVLGVBRVY7QUFBQSxvQkFBSyxLQUFLM0IsS0FBTCxDQUFXRSxJQUFYLENBQWdCdUIsQ0FBaEIsRUFBbUJHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlUsZUFHVjtBQUFBLG9CQUFLLEtBQUs1QixLQUFMLENBQVdFLElBQVgsQ0FBZ0J1QixDQUFoQixFQUFtQkk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIVTtBQUFBLFNBQVNKLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFaO0FBS0Q7O0FBQUE7QUFDRCxXQUFPRixNQUFQO0FBQ0Q7O0FBRURPLFFBQU0sR0FBRztBQUNQLHdCQUFPO0FBQUEsOEJBQ0w7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUUsS0FBS0MsS0FBL0I7QUFBc0MsZ0JBQVEsRUFBRSxLQUFLNUIsUUFBckQ7QUFBK0QsYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0M7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGVBRUw7QUFBUSxlQUFPLEVBQUUsS0FBS0ksUUFBdEI7QUFBZ0MsYUFBSyxFQUFFLEtBQUswQixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZLLGVBR0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhLLGVBSUw7QUFBQSwrQkFBTztBQUFBLG9CQUNKLEtBQUtULFlBQUw7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBUUQ7O0FBM0Q4Qjs7QUE4RGxCM0IsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmVGaW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuXG5jbGFzcyBGaXJlRmluZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0eWxlID0ge1xuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgZ3JheVwiXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6ICcnLFxuICAgICAgZGF0YTogW11cbiAgICB9XG4gICAgdGhpcy5kb0NoYW5nZSA9IHRoaXMuZG9DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZG9DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICBkb0FjdGlvbihlKSB7XG4gICAgdGhpcy5maW5kRmlyZURhdGEodGhpcy5zdGF0ZS5pbnB1dCk7XG4gIH1cblxuICBmaW5kRmlyZURhdGEocykge1xuICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgbGV0IHJlZiA9IGRiLnJlZignc2FtcGxlLycpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICByZWYub3JkZXJCeUtleSgpLmVxdWFsVG8ocykub24oJ3ZhbHVlJywgKHNuYXBzaG90KT0+e1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6c25hcHNob3QudmFsKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFibGVEYXRhKCkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl1cbiAgICB9O1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKDx0ciBrZXk9e2l9PlxuICAgICAgICA8dGg+e3RoaXMuc3RhdGUuZGF0YVtpXS5JRH08L3RoPlxuICAgICAgICA8dGQ+e3RoaXMuc3RhdGUuZGF0YVtpXS5uYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5kYXRhW2ldLm1lc3NhZ2V9PC90ZD5cbiAgICAgIDwvdHI+KTtcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17dGhpcy5zdHlsZX0gb25DaGFuZ2U9e3RoaXMuZG9DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRvQWN0aW9ufSBzdHlsZT17dGhpcy5zdHlsZX0+RmluZDwvYnV0dG9uPlxuICAgICAgPGhyIC8+XG4gICAgICA8dGFibGU+PHRib2R5PlxuICAgICAgICB7dGhpcy5nZXRUYWJsZURhdGEoKX0gIFxuICAgICAgPC90Ym9keT48L3RhYmxlPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlyZUZpbmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FireFind.js\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/components/Footer.js\";\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.footer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJCLENBQStCO0FBRTdCQyxRQUFNLEdBQUc7QUFDUCx3QkFBUTtBQUFBLDZCQUNOO0FBQUEsa0JBQU0sS0FBS0MsS0FBTCxDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBR0Q7O0FBTjRCOztBQVFoQkoscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGZvb3Rlcj5cbiAgICAgIDxkaXY+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxuICAgIDwvZm9vdGVyPik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/components/Header.js\";\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.header\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiaGVhZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFFN0JDLFFBQU0sR0FBRztBQUNQLHdCQUFRO0FBQUEsOEJBQ047QUFBQSxrQkFBTSxLQUFLQyxLQUFMLENBQVdDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxlQUVOO0FBQUEsa0JBQUssS0FBS0QsS0FBTCxDQUFXRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFJRDs7QUFQNEI7O0FBU2hCTCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxoZWFkZXI+XG4gICAgICA8ZGl2Pnt0aGlzLnByb3BzLmhlYWRlcn08L2Rpdj5cbiAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgIDwvaGVhZGVyPik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/components/Layout.js\";\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: this.props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"viewport\",\n          content: \"initial-scale=1.0, width=device-width\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, this), _static_Style__WEBPACK_IMPORTED_MODULE_5__[\"default\"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: this.props.header,\n        title: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, this), this.props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        footer: \"copyright SYODA-Tuyano.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJzdHlsZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUU3QkMsUUFBTSxHQUFHO0FBQ1Asd0JBQVE7QUFBQSw4QkFDTixxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQVEsS0FBS0MsS0FBTCxDQUFXQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxpQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBc0IsaUJBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURNLEVBTUxDLHFEQU5LLGVBT04scUVBQUMsMERBQUQ7QUFBUSxjQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxNQUEzQjtBQUFtQyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUE0sRUFRTCxLQUFLRCxLQUFMLENBQVdJLFFBUk4sZUFTTixxRUFBQywwREFBRDtBQUFRLGNBQU0sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQVdEOztBQWQ0Qjs7QUFnQmhCUCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge3N0eWxlfVxuICAgICAgPEhlYWRlciBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGVyfSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cbiAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPEZvb3RlciBmb290ZXI9XCJjb3B5cmlnaHQgU1lPREEtVHV5YW5vLlwiLz5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/fire_find.js":
/*!****************************!*\
  !*** ./pages/fire_find.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_FireFind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FireFind */ \"./components/FireFind.js\");\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/pages/fire_find.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"Sample data.\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FireFind__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2ZpbmQuanM/ZjViNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGtGQUNiLHFFQUFDLDBEQUFEO0FBQVEsUUFBTSxFQUFDLE1BQWY7QUFBc0IsT0FBSyxFQUFDLGNBQTVCO0FBQUEseUJBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERiIsImZpbGUiOiIuL3BhZ2VzL2ZpcmVfZmluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZpcmVGaW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZUZpbmQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQgaGVhZGVyPVwiRmlyZVwiIHRpdGxlPVwiU2FtcGxlIGRhdGEuXCI+XG4gICAgPEZpcmVGaW5kIC8+XG4gIDwvTGF5b3V0PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/fire_find.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/moyongkexing/Documents/react_next/next_app/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: `\n  body {\n    margin:10px;\n    padding:5px;\n    color:#669;\n  }\n  header {\n    font-size:64pt;\n    font-weight:bold;\n    text-align:right;\n    letter-spacing:-8px;\n    color:#ddddff;\n    margin:-32px 5px;\n  }\n  footer {\n    color:#99c;\n    font-size:12pt;\n    text-align:right;\n    border-bottom:1px solid #99c;\n    margin:50px 0px 10px 0px;\n    position: relative;\n    bottom: 10px;\n    right: 10px;\n    left: 10px;\n  }\n  h1 {\n    font-size:22pt;\n    font-weight:bold;\n    text-align:left;\n    letter-spacing:0px;\n    color:#77a;\n    margin:-50px 0px 50px 0px;\n  }\n  p {\n    margin:0px;\n    color:#669;\n    font-size:16pt;\n  }\n  hr {\n    margin:25px 0px;\n  }\n  tr {\n    margin:0px;\n  }\n  th {\n    font-size:14pt;\n    font-weight:plain;\n    text-align:left;\n    padding:0px 20px;\n    margin:0px;\n    border-bottom:1px solid gray;\n  }\n  td {\n    font-size:14pt;\n    font-weight:plain;\n    text-align:right;\n    padding:0px 20px;\n    margin:0px;\n    border-bottom:1px solid gray;\n  }\n`\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 16\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdlO0FBQUEsWUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1RGU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmIiwiZmlsZSI6Ii4vc3RhdGljL1N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgPHN0eWxlPntgXG4gIGJvZHkge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGNvbG9yOiM2Njk7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBmb250LXNpemU6NjRwdDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6LThweDtcbiAgICBjb2xvcjojZGRkZGZmO1xuICAgIG1hcmdpbjotMzJweCA1cHg7XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBjb2xvcjojOTljO1xuICAgIGZvbnQtc2l6ZToxMnB0O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzk5YztcbiAgICBtYXJnaW46NTBweCAwcHggMTBweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6MjJwdDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzowcHg7XG4gICAgY29sb3I6Izc3YTtcbiAgICBtYXJnaW46LTUwcHggMHB4IDUwcHggMHB4O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjowcHg7XG4gICAgY29sb3I6IzY2OTtcbiAgICBmb250LXNpemU6MTZwdDtcbiAgfVxuICBociB7XG4gICAgbWFyZ2luOjI1cHggMHB4O1xuICB9XG4gIHRyIHtcbiAgICBtYXJnaW46MHB4O1xuICB9XG4gIHRoIHtcbiAgICBmb250LXNpemU6MTRwdDtcbiAgICBmb250LXdlaWdodDpwbGFpbjtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG4gIH1cbiAgdGQge1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OnBsYWluO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG4gIH1cbmB9PC9zdHlsZT47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });