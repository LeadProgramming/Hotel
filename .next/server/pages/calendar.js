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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B+Aq");


/***/ }),

/***/ "B+Aq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BEfH");





const Calendar = ({
  rooms
}) => {
  const month = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().month() + 1;
  const day = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().date();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      className: "pt-8 pl-8 ",
      children: "Calendar"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("table", {
      className: "table-auto",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Room #"
          }), [{
            month,
            day
          }, {
            month,
            day: day + 1
          }, {
            month,
            day: day + 2
          }, {
            month,
            day: day + 3
          }, {
            month,
            day: day + 4
          }, {
            month,
            day: day + 5
          }, {
            month,
            day: day + 6
          }].map(i => {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("th", {
              className: "px-8",
              children: [i.month, "/", i.day]
            });
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tbody", {
        children: rooms.length > 0 ? rooms === null || rooms === void 0 ? void 0 : rooms.map((i, j) => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.roomNumber
            }), [false, false, false, false, false, false, false].map(i => {
              return !i ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                className: "px-8 py-4",
                children: "David"
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                className: "px-8 py-4"
              });
            })]
          }, JSON.stringify(i));
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tr", {
          children: "There are no rooms."
        })
      })]
    })]
  });
};

async function getServerSideProps({
  query
}) {
  let rooms = [];
  await _firebase_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].firestore().collection("room").orderBy("roomNumber").get().then(queryData => {
    queryData.forEach(i => {
      rooms.push(i.data());
    });
  });
  return {
    props: {
      rooms
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "BEfH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyARob1Ja2jTzCVLT9QF6eBOakuXWCVL1e8",
  authDomain: "hotel-3c249.firebaseapp.com",
  projectId: "hotel-3c249",
  storageBucket: "hotel-3c249.appspot.com",
  messagingSenderId: "745011087359",
  appId: "1:745011087359:web:714fff5e51447cc5c489ca",
  measurementId: "G-5XYXP89Z22"
}; // Configure FirebaseUI.
// export const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     // signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '/rooms',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ]
// };

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig); // if (location.hostname === "localhost")
  //     firebase.firestore().useEmulator("localhost", 8080);
}

const fireApp = firebase__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["a"] = (fireApp);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })

/******/ });