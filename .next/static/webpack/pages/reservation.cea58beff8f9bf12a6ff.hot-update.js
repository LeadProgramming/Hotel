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
    var days = Math.floor((Date.parse(data.checkOutDate) - Date.parse(data.checkInDate)) / 8.64e+7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwicGFyc2UiLCJjaGVja091dERhdGUiLCJjaGVja0luRGF0ZSIsInB1c2giLCJyb29tVHlwZSIsInJlcXVpcmVkIiwidmFsdWVBc0RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3QyxpQkFFVUMsK0RBQU8sRUFGakI7QUFBQSxNQUVoQ0MsUUFGZ0MsWUFFaENBLFFBRmdDO0FBQUEsTUFFdEJDLFlBRnNCLFlBRXRCQSxZQUZzQjtBQUFBLE1BRVJDLEtBRlEsWUFFUkEsS0FGUTtBQUFBLE1BRURDLE1BRkMsWUFFREEsTUFGQyxFQUd4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsSUFBSSxFQUFJO0FBQ3ZCLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLElBQUksQ0FBQ00sWUFBaEIsSUFBZ0NGLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFJLENBQUNPLFdBQWhCLENBQWpDLElBQWlFLE9BQTVFLENBQWI7QUFDQWYsVUFBTSxDQUFDZ0IsSUFBUCx1QkFBMkJSLElBQUksQ0FBQ1MsUUFBaEMsbUJBQWlEUixJQUFqRDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLGtCQUFRLEVBQUVMLFlBQVksQ0FBQ0csUUFBRCxDQUE1QjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTyxnQkFBSSxFQUFDLFdBQVo7QUFBd0IsZUFBRyxFQUFFSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBSUU7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixlQUFHLEVBQUVBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFPRTtBQUFPLG1CQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQU8sZ0JBQUksRUFBQyxhQUFaO0FBQTBCLGdCQUFJLEVBQUMsTUFBL0I7QUFBc0MsZUFBRyxFQUFFQSxRQUFRLENBQUM7QUFBRWUsc0JBQVEsRUFBRSxJQUFaO0FBQWtCQyx5QkFBVyxFQUFFO0FBQS9CLGFBQUQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVVFO0FBQU8sbUJBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBV0U7QUFBTyxnQkFBSSxFQUFDLGNBQVo7QUFBMkIsZ0JBQUksRUFBQyxNQUFoQztBQUF1QyxlQUFHLEVBQUVoQixRQUFRLENBQUM7QUFBRWUsc0JBQVEsRUFBRSxJQUFaO0FBQWtCQyx5QkFBVyxFQUFFO0FBQS9CLGFBQUQ7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQWFFO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0U7QUFBUSxnQkFBSSxFQUFDLFVBQWI7QUFBd0IsZUFBRyxFQUFFaEIsUUFBN0I7QUFBQSxvQ0FDRTtBQUFRLG1CQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQVEsbUJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBUSxtQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFRLG1CQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsZUFvQkU7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBcERELEMsQ0FxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7R0FwRU1MLFc7VUFDV0cscUQsRUFDbUNDLHVEOzs7S0FGOUNKLFc7QUFxRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLmNlYTU4YmVmZjhmOWJmMTJhNmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgZmlyZUFwcCBmcm9tIFwiLi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBSZXNlcnZhdGlvbiA9ICh7IHJlc2VydmF0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbiAgLy8gY29uc3Qgd2F0Y2hGaWVsZHMgPSB3YXRjaChbXCJjaGVja0luRGF0ZVwiLCBcImNoZWNrT3V0RGF0ZVwiXSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IHtcclxuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKChEYXRlLnBhcnNlKGRhdGEuY2hlY2tPdXREYXRlKSAtIERhdGUucGFyc2UoZGF0YS5jaGVja0luRGF0ZSkpIC8gOC42NGUrNylcclxuICAgIHJvdXRlci5wdXNoKGAvcm9vbXM/dHlwZT0ke2RhdGEucm9vbVR5cGV9JmRheXM9JHtkYXlzfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIFJlc2VydmF0aW9uXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZmlyc3ROYW1lXCIgcmVmPXtyZWdpc3Rlcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibGFzdE5hbWVcIiByZWY9e3JlZ2lzdGVyfSAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja0luRGF0ZVwiPkNoZWNrLWluIERhdGU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2hlY2tJbkRhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgdmFsdWVBc0RhdGU6IHRydWUgfSl9IC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoZWNrT3V0RGF0ZVwiPkNoZWNrLU91dCBEYXRlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNoZWNrT3V0RGF0ZVwiIHR5cGU9XCJkYXRlXCIgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCB2YWx1ZUFzRGF0ZTogdHJ1ZSB9KX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicm9vbVR5cGVcIj5Sb29tIFR5cGU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJvb21UeXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktcIj5LaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRRXCI+RG91YmxlIFF1ZWVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRRS1wiPkRvdWJsZSBRdWVlbiB3aXRoIEtpdGNoZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1wiPlN1aXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Qcm9jZWVkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgcmVzZXJ2YXRpb25zLm1hcChpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn1cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuLy8gICAvLyBsZXQgcmVzZXJ2YXRpb25zID0gW107XHJcbi8vICAgLy8gYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4vLyAgIC8vICAgLmNvbGxlY3Rpb24oXCJyZXNlcnZhdGlvblwiKVxyXG4vLyAgIC8vICAgLm9yZGVyQnkoXCJjaGVja0luRGF0ZVwiKVxyXG4vLyAgIC8vICAgLmdldCgpXHJcbi8vICAgLy8gICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4vLyAgIC8vICAgICBxdWVyeURhdGEuZm9yRWFjaChpID0+IHtcclxuLy8gICAvLyAgICAgICBsaXN0aW5ncy5wdXNoKGkuZGF0YSgpKTtcclxuLy8gICAvLyAgICAgfSlcclxuLy8gICAvLyAgIH0pXHJcbi8vICAgLy8gcmV0dXJuIHtcclxuLy8gICAvLyAgIHByb3BzOiB7IHJlc2VydmF0aW9ucyB9LFxyXG4vLyAgIC8vIH1cclxuXHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=