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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/rooms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase_config.js":
/*!****************************!*\
  !*** ./firebase_config.js ***!
  \****************************/
/*! exports provided: firebaseConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
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
/* harmony default export */ __webpack_exports__["default"] = (fireApp);

/***/ }),

/***/ "./pages/rooms.js":
/*!************************!*\
  !*** ./pages/rooms.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase_config */ "./firebase_config.js");


var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel\\pages\\rooms.js";




const Rooms = ({
  listings
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const rsrvInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.reservation);
  listings.forEach(i => {
    i["totalCharge"] = rsrvInfo.days * i.dailyRate;
  });

  const reserving = ({
    dailyRate,
    totalCharge,
    roomNumber,
    roomType
  }) => {
    _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('reservation').add({
      firstName: rsrvInfo.firstName,
      lastName: rsrvInfo.lastName,
      reservedDate: Date.now(),
      checkInDate: rsrvInfo.checkInDate,
      checkOutDate: rsrvInfo.checkOutDate,
      roomType: roomType,
      roomStatus: "occupied",
      roomNumber: roomNumber,
      dailyRate: dailyRate,
      totalCharge: totalCharge
    });
    _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('room').doc(roomNumber).update({
      roomStatus: "occupied",
      checkInDate: rsrvInfo.checkInDate,
      checkOutDate: rsrvInfo.checkOutDate
    });
    router.push("/rooms");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "pt-8 pl-8 ",
      children: "Rooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room #"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Daily Rate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Total Charge"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: (listings === null || listings === void 0 ? void 0 : listings.length) > 0 ? listings.map((i, j) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.roomNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.roomType
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: !rsrvInfo.firstName.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  role: "none",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i.roomStatus,
                    children: i.roomStatus
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 53
                  }, undefined), ["available", "occupied", "dirty", "maintenance"].map(i => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: i,
                      children: i
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 61
                    }, undefined);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 49
                }, undefined)
              }, void 0, false) : i.roomStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, undefined), i.dailyRate && rsrvInfo.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: i.dailyRate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: i.totalCharge
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: () => {
                    reserving(i);
                  },
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 41
              }, undefined)]
            }, void 0, true)]
          }, JSON.stringify(i), true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, undefined);
        }) : "No rooms available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps({
  query
}) {
  let listings = [];

  if (query.type) {
    await _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("room").where("roomType", "==", query.type).where("roomStatus", "==", "available").get().then(queryData => {
      queryData.forEach(i => {
        listings.push(i.data());
      });
    });
  } else {
    await _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("room").orderBy("roomNumber").get().then(queryData => {
      queryData.forEach(i => {
        listings.push(i.data());
      });
    });
  }

  return {
    props: {
      listings
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Rooms);

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VfY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Jvb21zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlQXBwIiwiUm9vbXMiLCJsaXN0aW5ncyIsInJvdXRlciIsInVzZVJvdXRlciIsInJzcnZJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlc2VydmF0aW9uIiwiZm9yRWFjaCIsImkiLCJkYXlzIiwiZGFpbHlSYXRlIiwicmVzZXJ2aW5nIiwidG90YWxDaGFyZ2UiLCJyb29tTnVtYmVyIiwicm9vbVR5cGUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZXNlcnZlZERhdGUiLCJEYXRlIiwibm93IiwiY2hlY2tJbkRhdGUiLCJjaGVja091dERhdGUiLCJyb29tU3RhdHVzIiwiZG9jIiwidXBkYXRlIiwicHVzaCIsIm1hcCIsImoiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJ0eXBlIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwicXVlcnlEYXRhIiwiZGF0YSIsIm9yZGVyQnkiLCJwcm9wcyJdLCJtYXBwaW5n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Q0FBQzRCLElBQVQsQ0FBY3BCLENBQUMsQ0FBQ2dDLElBQUYsRUFBZDtBQUNILE9BRkQ7QUFHSCxLQVJDLENBQU47QUFTSDs7QUFDRCxTQUFPO0FBQ0hFLFNBQUssRUFBRTtBQUFFMUM7QUFBRjtBQURKLEdBQVA7QUFHSDtBQUNjRCxvRUFBZixFOzs7Ozs7Ozs7OztBQ2pJQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9yb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcm9vbXMuanNcIik7XG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUFSb2IxSmEyalR6Q1ZMVDlRRjZlQk9ha3VYV0NWTDFlOFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJob3RlbC0zYzI0OS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJob3RlbC0zYzI0OVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJob3RlbC0zYzI0OS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzQ1MDExMDg3MzU5XCIsXHJcbiAgICBhcHBJZDogXCIxOjc0NTAxMTA4NzM1OTp3ZWI6NzE0ZmZmNWU1MTQ0N2NjNWM0ODljYVwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTVYWVhQODlaMjJcIlxyXG59O1xyXG4vLyBDb25maWd1cmUgRmlyZWJhc2VVSS5cclxuLy8gZXhwb3J0IGNvbnN0IHVpQ29uZmlnID0ge1xyXG4vLyAgICAgLy8gUG9wdXAgc2lnbmluIGZsb3cgcmF0aGVyIHRoYW4gcmVkaXJlY3QgZmxvdy5cclxuLy8gICAgIC8vIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbi8vICAgICAvLyBSZWRpcmVjdCB0byAvc2lnbmVkSW4gYWZ0ZXIgc2lnbiBpbiBpcyBzdWNjZXNzZnVsLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gcHJvdmlkZSBhIGNhbGxiYWNrcy5zaWduSW5TdWNjZXNzIGZ1bmN0aW9uLlxyXG4vLyAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9yb29tcycsXHJcbi8vICAgICAvLyBXZSB3aWxsIGRpc3BsYXkgR29vZ2xlIGFuZCBGYWNlYm9vayBhcyBhdXRoIHByb3ZpZGVycy5cclxuLy8gICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuLy8gICAgICAgICBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4vLyAgICAgXVxyXG4vLyB9O1xyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgIC8vIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIilcclxuICAgIC8vICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS51c2VFbXVsYXRvcihcImxvY2FsaG9zdFwiLCA4MDgwKTtcclxufVxyXG5jb25zdCBmaXJlQXBwID0gZmlyZWJhc2U7XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmVBcHA7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuY29uc3QgUm9vbXMgPSAoeyBsaXN0aW5ncyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJzcnZJbmZvID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVzZXJ2YXRpb24pO1xyXG4gICAgbGlzdGluZ3MuZm9yRWFjaCgoaSkgPT4geyBpW1widG90YWxDaGFyZ2VcIl0gPSByc3J2SW5mby5kYXlzICogaS5kYWlseVJhdGUgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzZXJ2aW5nID0gKHsgZGFpbHlSYXRlLCB0b3RhbENoYXJnZSwgcm9vbU51bWJlciwgcm9vbVR5cGUgfSkgPT4ge1xyXG4gICAgICAgIGZpcmVBcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncmVzZXJ2YXRpb24nKS5hZGQoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHJzcnZJbmZvLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHJzcnZJbmZvLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByZXNlcnZlZERhdGU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNoZWNrSW5EYXRlOiByc3J2SW5mby5jaGVja0luRGF0ZSxcclxuICAgICAgICAgICAgY2hlY2tPdXREYXRlOiByc3J2SW5mby5jaGVja091dERhdGUsXHJcbiAgICAgICAgICAgIHJvb21UeXBlOiByb29tVHlwZSxcclxuICAgICAgICAgICAgcm9vbVN0YXR1czogXCJvY2N1cGllZFwiLFxyXG4gICAgICAgICAgICByb29tTnVtYmVyOiByb29tTnVtYmVyLFxyXG4gICAgICAgICAgICBkYWlseVJhdGU6IGRhaWx5UmF0ZSxcclxuICAgICAgICAgICAgdG90YWxDaGFyZ2U6IHRvdGFsQ2hhcmdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlyZUFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdyb29tJykuZG9jKHJvb21OdW1iZXIpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHJvb21TdGF0dXM6IFwib2NjdXBpZWRcIixcclxuICAgICAgICAgICAgY2hlY2tJbkRhdGU6IHJzcnZJbmZvLmNoZWNrSW5EYXRlLFxyXG4gICAgICAgICAgICBjaGVja091dERhdGU6IHJzcnZJbmZvLmNoZWNrT3V0RGF0ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Jvb21zXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzcGFjZS15LTRcIn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC04IHBsLTggXCI+XHJcbiAgICAgICAgICAgICAgICBSb29tc1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtcInRhYmxlLWF1dG9cIn0+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlJvb20gIzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+Um9vbSBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17XCJweC04IFwifT5Sb29tIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RGFpbHkgUmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+VG90YWwgQ2hhcmdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGluZ3M/Lmxlbmd0aCA+IDAgPyBsaXN0aW5ncy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0pTT04uc3RyaW5naWZ5KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kucm9vbU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wicHgtOCBweS00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJzcnZJbmZvLmZpcnN0TmFtZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCByb2xlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aS5yb29tU3RhdHVzfT57aS5yb29tU3RhdHVzfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcImF2YWlsYWJsZVwiLCBcIm9jY3VwaWVkXCIsIFwiZGlydHlcIiwgXCJtYWludGVuYW5jZVwiXS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0gPntpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogaS5yb29tU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRhaWx5UmF0ZSAmJiByc3J2SW5mby5maXJzdE5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wicHgtOCBweS00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmRhaWx5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS50b3RhbENoYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2aW5nKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlc2VydmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDogXCJObyByb29tcyBhdmFpbGFibGVcIn1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGxpc3RpbmdzID0gW107XHJcbiAgICBpZiAocXVlcnkudHlwZSkge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21UeXBlXCIsIFwiPT1cIiwgcXVlcnkudHlwZSlcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVN0YXR1c1wiLCBcIj09XCIsIFwiYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJyb29tTnVtYmVyXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBsaXN0aW5ncyB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvb21zO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==