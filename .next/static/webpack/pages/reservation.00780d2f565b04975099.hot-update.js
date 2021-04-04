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
    var days = Math.floor(Date.parse(data.checkOutDate) - Date.parse(data.checkInDate));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwicGFyc2UiLCJjaGVja091dERhdGUiLCJjaGVja0luRGF0ZSIsInB1c2giLCJyb29tVHlwZSIsInJlcXVpcmVkIiwidmFsdWVBc0RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3QyxpQkFFVUMsK0RBQU8sRUFGakI7QUFBQSxNQUVoQ0MsUUFGZ0MsWUFFaENBLFFBRmdDO0FBQUEsTUFFdEJDLFlBRnNCLFlBRXRCQSxZQUZzQjtBQUFBLE1BRVJDLEtBRlEsWUFFUkEsS0FGUTtBQUFBLE1BRURDLE1BRkMsWUFFREEsTUFGQyxFQUd4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsSUFBSSxFQUFJO0FBQ3ZCLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFJLENBQUNNLFlBQWhCLElBQWdDRixJQUFJLENBQUNDLEtBQUwsQ0FBV0wsSUFBSSxDQUFDTyxXQUFoQixDQUEzQyxDQUFiO0FBQ0FmLFVBQU0sQ0FBQ2dCLElBQVAsdUJBQTJCUixJQUFJLENBQUNTLFFBQWhDLG1CQUFpRFIsSUFBakQ7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBTSxrQkFBUSxFQUFFTCxZQUFZLENBQUNHLFFBQUQsQ0FBNUI7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxXQUFaO0FBQXdCLGVBQUcsRUFBRUo7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUlFO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsZUFBRyxFQUFFQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBT0U7QUFBTyxtQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRTtBQUFPLGdCQUFJLEVBQUMsYUFBWjtBQUEwQixnQkFBSSxFQUFDLE1BQS9CO0FBQXNDLGVBQUcsRUFBRUEsUUFBUSxDQUFDO0FBQUVlLHNCQUFRLEVBQUUsSUFBWjtBQUFrQkMseUJBQVcsRUFBRTtBQUEvQixhQUFEO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFVRTtBQUFPLG1CQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQU8sZ0JBQUksRUFBQyxjQUFaO0FBQTJCLGdCQUFJLEVBQUMsTUFBaEM7QUFBdUMsZUFBRyxFQUFFaEIsUUFBUSxDQUFDO0FBQUVlLHNCQUFRLEVBQUUsSUFBWjtBQUFrQkMseUJBQVcsRUFBRTtBQUEvQixhQUFEO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFhRTtBQUFPLG1CQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRixlQWNFO0FBQVEsZ0JBQUksRUFBQyxVQUFiO0FBQXdCLGVBQUcsRUFBRWhCLFFBQTdCO0FBQUEsb0NBQ0U7QUFBUSxtQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFRLG1CQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQVEsbUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBUSxtQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBb0JFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQXBERCxDLENBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0dBcEVNTCxXO1VBQ1dHLHFELEVBQ21DQyx1RDs7O0tBRjlDSixXO0FBcUVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNlcnZhdGlvbi4wMDc4MGQyZjU2NWIwNDk3NTA5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IGZpcmVBcHAgZnJvbSBcIi4uL2ZpcmViYXNlX2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgUmVzZXJ2YXRpb24gPSAoeyByZXNlcnZhdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG4gIC8vIGNvbnN0IHdhdGNoRmllbGRzID0gd2F0Y2goW1wiY2hlY2tJbkRhdGVcIiwgXCJjaGVja091dERhdGVcIl0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihEYXRlLnBhcnNlKGRhdGEuY2hlY2tPdXREYXRlKSAtIERhdGUucGFyc2UoZGF0YS5jaGVja0luRGF0ZSkpXHJcbiAgICByb3V0ZXIucHVzaChgL3Jvb21zP3R5cGU9JHtkYXRhLnJvb21UeXBlfSZkYXlzPSR7ZGF5c31gKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBSZXNlcnZhdGlvblxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImZpcnN0TmFtZVwiIHJlZj17cmVnaXN0ZXJ9IC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImxhc3ROYW1lXCIgcmVmPXtyZWdpc3Rlcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hlY2tJbkRhdGVcIj5DaGVjay1pbiBEYXRlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNoZWNrSW5EYXRlXCIgdHlwZT1cImRhdGVcIiByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIHZhbHVlQXNEYXRlOiB0cnVlIH0pfSAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja091dERhdGVcIj5DaGVjay1PdXQgRGF0ZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjaGVja091dERhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgdmFsdWVBc0RhdGU6IHRydWUgfSl9IC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJvb21UeXBlXCI+Um9vbSBUeXBlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyb29tVHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLXCI+S2luZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEUVwiPkRvdWJsZSBRdWVlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEUUtcIj5Eb3VibGUgUXVlZW4gd2l0aCBLaXRjaGVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNcIj5TdWl0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UHJvY2VlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgIHJlc2VydmF0aW9ucy5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbi8vICAgLy8gbGV0IHJlc2VydmF0aW9ucyA9IFtdO1xyXG4vLyAgIC8vIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuLy8gICAvLyAgIC5jb2xsZWN0aW9uKFwicmVzZXJ2YXRpb25cIilcclxuLy8gICAvLyAgIC5vcmRlckJ5KFwiY2hlY2tJbkRhdGVcIilcclxuLy8gICAvLyAgIC5nZXQoKVxyXG4vLyAgIC8vICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuLy8gICAvLyAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbi8vICAgLy8gICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbi8vICAgLy8gICAgIH0pXHJcbi8vICAgLy8gICB9KVxyXG4vLyAgIC8vIHJldHVybiB7XHJcbi8vICAgLy8gICBwcm9wczogeyByZXNlcnZhdGlvbnMgfSxcclxuLy8gICAvLyB9XHJcblxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9