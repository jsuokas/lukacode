module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/suokajuk/projects/private/lukacode/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
global.fetch = __webpack_require__(/*! node-fetch */ "node-fetch");

const LUKACODE_API_URL = process.env.LUKACODE_API_URL;
const LUKACODE_API_KEY = process.env.LUKACODE_API_KEY;

function Home({
  pages
}) {
  return __jsx("div", {
    className: "jsx-2291428837" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "jsx-2291428837",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2291428837" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "lukacode.dev")), pages.pages.map((it, idx) => __jsx("div", {
    key: idx,
    className: "jsx-2291428837",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, it.name)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4163115943",
    __self: this
  }, ".container.jsx-2291428837{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-2291428837{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW9rYWp1ay9wcm9qZWN0cy9wcml2YXRlL2x1a2Fjb2RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHNEIsQUFTRixlQUNSLEVBVFUsaUJBQ0osY0FTQSw0REFSUyxjQVNBLGdFQVJDLGNBU0EscUZBUkosY0FTQSwrRUFSckIsY0FTQSIsImZpbGUiOiIvVXNlcnMvc3Vva2FqdWsvcHJvamVjdHMvcHJpdmF0ZS9sdWthY29kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImdsb2JhbC5mZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuY29uc3QgTFVLQUNPREVfQVBJX1VSTCA9IHByb2Nlc3MuZW52LkxVS0FDT0RFX0FQSV9VUkw7XG5jb25zdCBMVUtBQ09ERV9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTFVLQUNPREVfQVBJX0tFWTtcblxuZnVuY3Rpb24gSG9tZSh7IHBhZ2VzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPmx1a2Fjb2RlLmRldjwvaDE+XG4gICAgICA8L21haW4+XG4gICAgICB7cGFnZXMucGFnZXMubWFwKChpdCwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9PntpdC5uYW1lfTwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoTFVLQUNPREVfQVBJX1VSTCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtMVUtBQ09ERV9BUElfS0VZfWAsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcXVlcnkgPSBgXG4gIHsgXG4gICAgcGFnZXMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gO1xuXG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHF1ZXJ5KTtcblxuICBjb25zb2xlLmxvZyhwYWdlcyk7XG5cbiAgcmV0dXJuIHsgcGFnZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/suokajuk/projects/private/lukacode/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW9rYWp1ay9wcm9qZWN0cy9wcml2YXRlL2x1a2Fjb2RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DeUIsQUFJcUIsQUFRWSxVQVBiLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiIvVXNlcnMvc3Vva2FqdWsvcHJvamVjdHMvcHJpdmF0ZS9sdWthY29kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImdsb2JhbC5mZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuY29uc3QgTFVLQUNPREVfQVBJX1VSTCA9IHByb2Nlc3MuZW52LkxVS0FDT0RFX0FQSV9VUkw7XG5jb25zdCBMVUtBQ09ERV9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTFVLQUNPREVfQVBJX0tFWTtcblxuZnVuY3Rpb24gSG9tZSh7IHBhZ2VzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPmx1a2Fjb2RlLmRldjwvaDE+XG4gICAgICA8L21haW4+XG4gICAgICB7cGFnZXMucGFnZXMubWFwKChpdCwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9PntpdC5uYW1lfTwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoTFVLQUNPREVfQVBJX1VSTCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtMVUtBQ09ERV9BUElfS0VZfWAsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcXVlcnkgPSBgXG4gIHsgXG4gICAgcGFnZXMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gO1xuXG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHF1ZXJ5KTtcblxuICBjb25zb2xlLmxvZyhwYWdlcyk7XG5cbiAgcmV0dXJuIHsgcGFnZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/suokajuk/projects/private/lukacode/pages/index.js */"));
}

Home.getInitialProps = async () => {
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_2__["GraphQLClient"](LUKACODE_API_URL, {
    headers: {
      authorization: `Bearer ${LUKACODE_API_KEY}`
    }
  });
  const query = `
  { 
    pages {
      id
      name
      description
    }
  }
`;
  const pages = await graphQLClient.request(query);
  console.log(pages);
  return {
    pages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/suokajuk/projects/private/lukacode/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map