webpackHotUpdate_N_E("pages/rooms",{

/***/ "./pages/rooms.js":
/*!************************!*\
  !*** ./pages/rooms.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase_config */ "./firebase_config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel-guest\\pages\\rooms.js",
    _this = undefined,
    _s = $RefreshSig$();





var Rooms = function Rooms(_ref) {
  _s();

  var listings = _ref.listings,
      days = _ref.days;
  var rsrvInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.reservation;
  });

  var reserve = function reserve(_ref2) {
    var dailyRate = _ref2.dailyRate,
        roomNumber = _ref2.roomNumber,
        roomStatus = _ref2.roomStatus,
        roomType = _ref2.roomType;
    _firebase_config__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('reservation').add({});
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Rooms"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this), listings === null || listings === void 0 ? void 0 : listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Room #: ", i.roomNumber]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                children: ["Type: ", i.roomType]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 37
              }, _this), i.dailyRate && days && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Daily Rate: ", i.dailyRate]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Total Charge: ", i.dailyRate * days]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: reserve.call(null, i),
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 33
            }, _this)
          }, JSON.stringify(i), false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_s(Rooms, "fTw1cEGfOuh7M4meOO3uVJ0+tNc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Rooms;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Rooms);

var _c;

$RefreshReg$(_c, "Rooms");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsImRheXMiLCJyc3J2SW5mbyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZXNlcnZhdGlvbiIsInJlc2VydmUiLCJkYWlseVJhdGUiLCJyb29tTnVtYmVyIiwicm9vbVN0YXR1cyIsInJvb21UeXBlIiwiZmlyZUFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJhZGQiLCJtYXAiLCJpIiwiaiIsImNhbGwiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2xDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsR0FBTixDQUE1Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFxRDtBQUFBLFFBQWxEQyxTQUFrRCxTQUFsREEsU0FBa0Q7QUFBQSxRQUF2Q0MsVUFBdUMsU0FBdkNBLFVBQXVDO0FBQUEsUUFBM0JDLFVBQTJCLFNBQTNCQSxVQUEyQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNqRUMsNERBQU8sQ0FBQ0MsU0FBUixHQUFvQkMsVUFBcEIsQ0FBK0IsYUFBL0IsRUFBOENDLEdBQTlDLENBQWtELEVBQWxEO0FBR0gsR0FKRDs7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLZCxRQUpMLGFBSUtBLFFBSkwsdUJBSUtBLFFBQVEsQ0FBRWUsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLDhCQUNJO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBLHVDQUNhRCxDQUFDLENBQUNSLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQSxxQ0FDV1EsQ0FBQyxDQUFDTixRQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixFQVFRTSxDQUFDLENBQUNULFNBQUYsSUFBZU4sSUFBZixpQkFDQTtBQUFBLHdDQUNJO0FBQUEsNkNBQ2lCZSxDQUFDLENBQUNULFNBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEsK0NBQ21CUyxDQUFDLENBQUNULFNBQUYsR0FBY04sSUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBT0k7QUFBUSx5QkFBTyxFQUFFSyxPQUFPLENBQUNZLElBQVIsQ0FBYSxJQUFiLEVBQW1CRixDQUFuQixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBLDhCQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixDQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQTBCSCxTQTNCQSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0EvQ0Q7O0dBQU1qQixLO1VBQ2VJLHVEOzs7S0FEZkosSzs7QUE2RVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb21zLjY2NDc5N2YyODFjN2I0YjRiZjE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgUm9vbXMgPSAoeyBsaXN0aW5ncywgZGF5cyB9KSA9PiB7XHJcbiAgICBjb25zdCByc3J2SW5mbyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJlc2VydmF0aW9uKTtcclxuICAgIGNvbnN0IHJlc2VydmUgPSAoeyBkYWlseVJhdGUsIHJvb21OdW1iZXIsIHJvb21TdGF0dXMsIHJvb21UeXBlIH0pID0+IHtcclxuICAgICAgICBmaXJlQXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Jlc2VydmF0aW9uJykuYWRkKHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb29tc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RpbmdzPy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtKU09OLnN0cmluZ2lmeShpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb29tICM6IHtpLnJvb21OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IHtpLnJvb21UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kYWlseVJhdGUgJiYgZGF5cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFpbHkgUmF0ZToge2kuZGFpbHlSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgQ2hhcmdlOiB7aS5kYWlseVJhdGUgKiBkYXlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2VydmUuY2FsbChudWxsLCBpKX0+UmVzZXJ2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGxpc3RpbmdzID0gW107XHJcbiAgICBpZiAocXVlcnkudHlwZSkge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21UeXBlXCIsIFwiPT1cIiwgcXVlcnkudHlwZSlcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVN0YXR1c1wiLCBcIj09XCIsIFwiYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJyb29tTnVtYmVyXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBsaXN0aW5ncyB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvb21zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9