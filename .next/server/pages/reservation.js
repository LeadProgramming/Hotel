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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tnSG");


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

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "eM2I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reserve; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  firstName: "",
  lastName: "",
  checkInDate: "",
  checkOutDate: "",
  roomType: "",
  days: 0
};
const reservationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'reservation',
  initialState,
  reducers: {
    reserve(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.checkInDate = Date.parse(action.payload.checkInDate);
      state.checkOutDate = Date.parse(action.payload.checkOutDate);
      state.roomType = action.payload.roomType;
      state.days = action.payload.days;
    }

  }
});
const {
  reserve
} = reservationSlice.actions;
/* harmony default export */ __webpack_exports__["a"] = (reservationSlice.reducer);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "tnSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BEfH");
/* harmony import */ var _store_reservationSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eM2I");








const Reservation = ({
  reservations
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(); // const watchFields = watch(["checkInDate", "checkOutDate"]);

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  const onSubmit = data => {
    const days = Math.floor((Date.parse(data.checkOutDate) - Date.parse(data.checkInDate)) / 8.64e+7);
    data["days"] = days;
    dispatch(Object(_store_reservationSlice__WEBPACK_IMPORTED_MODULE_5__[/* reserve */ "b"])(data));
    router.push(`/rooms?type=${data.roomType}`);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      className: "pt-8 text-center font-bold text-gray-700 text-xl",
      children: "Reservation"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "firstName",
        children: "First Name:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        className: "block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none",
        name: "firstName",
        ref: register
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "firstName",
        htmlFor: "lastName",
        children: "Last Name:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        className: "block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none",
        name: "lastName",
        ref: register
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "checkInDate",
        children: "Check-in Date:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        className: "block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none",
        name: "checkInDate",
        type: "date",
        ref: register({
          required: true,
          valueAsDate: true
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "checkOutDate",
        children: "Check-Out Date:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        className: "block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none",
        name: "checkOutDate",
        type: "date",
        ref: register({
          required: true,
          valueAsDate: true
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "block text-gray-700 text-sm font-bold mb-2",
        htmlFor: "roomType",
        children: "Room Type:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: "block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none",
        name: "roomType",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "K",
          children: "King"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "DQ",
          children: "Double Queen"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "DQK",
          children: "Double Queen with Kitchen"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "S",
          children: "Suite"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
        type: "submit",
        children: "Proceed"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "mt-8 text-center font-bold text-gray-700 text-xl ",
      children: "All Reservations"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("table", {
      className: "table-auto mx-8",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "First Name "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Last Name"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Initial Date"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Check-In"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Check-Out"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Room Type"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Room Status"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Room #"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Daily Rate"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
            className: "px-8",
            children: "Total Charge"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tbody", {
        children: (reservations === null || reservations === void 0 ? void 0 : reservations.length) > 0 ? reservations.map(i => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.firstName
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.lastName
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: new Date(i.reservedDate).toDateString()
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: new Date(i.checkInDate).toDateString()
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: new Date(i.checkOutDate).toDateString()
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.roomType
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.roomStatus
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.roomNumber
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.dailyRate
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
              className: "px-8 py-4",
              children: i.totalCharge
            })]
          });
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tr", {
          children: "No rooms to display"
        })
      })]
    })]
  });
};

async function getServerSideProps({
  query
}) {
  let reservations = [];
  await _firebase_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].firestore().collection("reservation").orderBy("checkInDate").get().then(queryData => {
    queryData.forEach(i => {
      reservations.push(i.data());
    });
  });
  return {
    props: {
      reservations
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Reservation);

/***/ })

/******/ });