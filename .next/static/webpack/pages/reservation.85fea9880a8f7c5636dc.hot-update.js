webpackHotUpdate_N_E("pages/reservation",{

/***/ "./pages/reservation.js":
/*!******************************!*\
  !*** ./pages/reservation.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase_config */ "./firebase_config.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel-guest\\pages\\reservation.js",
    _this = undefined,
    _s = $RefreshSig$();






var Reservation = function Reservation(_ref) {
  _s();

  var reservations = _ref.reservations;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors; // const watchFields = watch(["checkInDate", "checkOutDate"]);


  var onSubmit = function onSubmit(data) {
    var days = Math.floor(data.checkOutDate.getDay() - data.checkInDate.getDay());
    router.push("/rooms?type=".concat(data.roomType, "&days=").concat(days));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Reservation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: handleSubmit(onSubmit),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "firstName",
            children: "First Name: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "firstName",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "lastName",
            children: "Last Name: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "lastName",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "checkInDate",
            children: "Check-in Date: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "checkInDate",
            type: "date",
            ref: register({
              required: true,
              valueAsDate: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "checkOutDate",
            children: "Check-Out Date: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "checkOutDate",
            type: "date",
            ref: register({
              required: true,
              valueAsDate: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "roomType",
            children: "Room Type: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "roomType",
            ref: register,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "K",
              children: "King"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "DQ",
              children: "Double Queen"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "DQK",
              children: "Double Queen with Kitchen"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "S",
              children: "Suite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            children: "Proceed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
}; // export async function getServerSideProps({ query }) {
//   // let reservations = [];
//   // await fireApp.firestore()
//   //   .collection("reservation")
//   //   .orderBy("checkInDate")
//   //   .get()
//   //   .then(queryData => {
//   //     queryData.forEach(i => {
//   //       listings.push(i.data());
//   //     })
//   //   })
//   // return {
//   //   props: { reservations },
//   // }
// }


_s(Reservation, "jB3tP9MrHEwYGaNlLNr+6pXcqAQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c = Reservation;
/* harmony default export */ __webpack_exports__["default"] = (Reservation);

var _c;

$RefreshReg$(_c, "Reservation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJjaGVja091dERhdGUiLCJnZXREYXkiLCJjaGVja0luRGF0ZSIsInB1c2giLCJyb29tVHlwZSIsInJlcXVpcmVkIiwidmFsdWVBc0RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3QyxpQkFFVUMsK0RBQU8sRUFGakI7QUFBQSxNQUVoQ0MsUUFGZ0MsWUFFaENBLFFBRmdDO0FBQUEsTUFFdEJDLFlBRnNCLFlBRXRCQSxZQUZzQjtBQUFBLE1BRVJDLEtBRlEsWUFFUkEsS0FGUTtBQUFBLE1BRURDLE1BRkMsWUFFREEsTUFGQyxFQUd4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsSUFBSSxFQUFJO0FBQ3ZCLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksQ0FBQ0ksWUFBTCxDQUFrQkMsTUFBbEIsS0FBNkJMLElBQUksQ0FBQ00sV0FBTCxDQUFpQkQsTUFBakIsRUFBeEMsQ0FBYjtBQUNBYixVQUFNLENBQUNlLElBQVAsdUJBQTJCUCxJQUFJLENBQUNRLFFBQWhDLG1CQUFpRFAsSUFBakQ7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBTSxrQkFBUSxFQUFFTCxZQUFZLENBQUNHLFFBQUQsQ0FBNUI7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxXQUFaO0FBQXdCLGVBQUcsRUFBRUo7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUlFO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsZUFBRyxFQUFFQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBT0U7QUFBTyxtQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRTtBQUFPLGdCQUFJLEVBQUMsYUFBWjtBQUEwQixnQkFBSSxFQUFDLE1BQS9CO0FBQXNDLGVBQUcsRUFBRUEsUUFBUSxDQUFDO0FBQUVjLHNCQUFRLEVBQUUsSUFBWjtBQUFrQkMseUJBQVcsRUFBRTtBQUEvQixhQUFEO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFVRTtBQUFPLG1CQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQU8sZ0JBQUksRUFBQyxjQUFaO0FBQTJCLGdCQUFJLEVBQUMsTUFBaEM7QUFBdUMsZUFBRyxFQUFFZixRQUFRLENBQUM7QUFBRWMsc0JBQVEsRUFBRSxJQUFaO0FBQWtCQyx5QkFBVyxFQUFFO0FBQS9CLGFBQUQ7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQWFFO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0U7QUFBUSxnQkFBSSxFQUFDLFVBQWI7QUFBd0IsZUFBRyxFQUFFZixRQUE3QjtBQUFBLG9DQUNFO0FBQVEsbUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBUSxtQkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFRLG1CQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQVEsbUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQW9CRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0Q0QsQ0FwREQsQyxDQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztHQXBFTUwsVztVQUNXRyxxRCxFQUNtQ0MsdUQ7OztLQUY5Q0osVztBQXFFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb24uODVmZWE5ODgwYThmN2M1NjM2ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IFJlc2VydmF0aW9uID0gKHsgcmVzZXJ2YXRpb25zIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuICAvLyBjb25zdCB3YXRjaEZpZWxkcyA9IHdhdGNoKFtcImNoZWNrSW5EYXRlXCIsIFwiY2hlY2tPdXREYXRlXCJdKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGF0YS5jaGVja091dERhdGUuZ2V0RGF5KCkgLSBkYXRhLmNoZWNrSW5EYXRlLmdldERheSgpKVxyXG4gICAgcm91dGVyLnB1c2goYC9yb29tcz90eXBlPSR7ZGF0YS5yb29tVHlwZX0mZGF5cz0ke2RheXN9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgUmVzZXJ2YXRpb25cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiByZWY9e3JlZ2lzdGVyfSAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJsYXN0TmFtZVwiIHJlZj17cmVnaXN0ZXJ9IC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoZWNrSW5EYXRlXCI+Q2hlY2staW4gRGF0ZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjaGVja0luRGF0ZVwiIHR5cGU9XCJkYXRlXCIgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCB2YWx1ZUFzRGF0ZTogdHJ1ZSB9KX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hlY2tPdXREYXRlXCI+Q2hlY2stT3V0IERhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2hlY2tPdXREYXRlXCIgdHlwZT1cImRhdGVcIiByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIHZhbHVlQXNEYXRlOiB0cnVlIH0pfSAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyb29tVHlwZVwiPlJvb20gVHlwZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicm9vbVR5cGVcIiByZWY9e3JlZ2lzdGVyfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS1wiPktpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRFFcIj5Eb3VibGUgUXVlZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRFFLXCI+RG91YmxlIFF1ZWVuIHdpdGggS2l0Y2hlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTXCI+U3VpdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlByb2NlZWQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICByZXNlcnZhdGlvbnMubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4vLyAgIC8vIGxldCByZXNlcnZhdGlvbnMgPSBbXTtcclxuLy8gICAvLyBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbi8vICAgLy8gICAuY29sbGVjdGlvbihcInJlc2VydmF0aW9uXCIpXHJcbi8vICAgLy8gICAub3JkZXJCeShcImNoZWNrSW5EYXRlXCIpXHJcbi8vICAgLy8gICAuZ2V0KClcclxuLy8gICAvLyAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbi8vICAgLy8gICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4vLyAgIC8vICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4vLyAgIC8vICAgICB9KVxyXG4vLyAgIC8vICAgfSlcclxuLy8gICAvLyByZXR1cm4ge1xyXG4vLyAgIC8vICAgcHJvcHM6IHsgcmVzZXJ2YXRpb25zIH0sXHJcbi8vICAgLy8gfVxyXG5cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==