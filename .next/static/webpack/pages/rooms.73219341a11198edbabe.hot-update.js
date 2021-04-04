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
/* harmony import */ var _components_combobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/combobox */ "./components/combobox.js");



var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel-guest\\pages\\rooms.js",
    _this = undefined,
    _s = $RefreshSig$();






var Rooms = function Rooms(_ref) {
  _s();

  var listings = _ref.listings;
  var rsrvInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.reservation;
  });
  listings.forEach(function (i, j) {
    i["totalCharge"] = rsrvInfo.days * i.dailyRate;
  });

  var reserve = function reserve(_ref2) {
    var dailyRate = _ref2.dailyRate,
        totalCharge = _ref2.totalCharge,
        roomNumber = _ref2.roomNumber,
        roomStatus = _ref2.roomStatus,
        roomType = _ref2.roomType;
    _firebase_config__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('reservation').add({
      firstName: rsrvInfo.firstName,
      lastName: rsrvInfo.lastName,
      reservedDate: Date.now(),
      checkInDate: rsrvInfo.checkInDate,
      checkOutDate: rsrvInfo.checkOutDate,
      roomType: roomType,
      roomStatus: roomStatus,
      roomNumber: roomNumber,
      dailyRate: dailyRate,
      totalCharge: totalCharge
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Rooms"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this), listings === null || listings === void 0 ? void 0 : listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Room #: ", i.roomNumber]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Type: ", i.roomType]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_combobox__WEBPACK_IMPORTED_MODULE_4__["default"], {
                options: ["available"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 37
              }, _this), i.dailyRate && rsrvInfo.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Daily Rate: ", i.dailyRate]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Total Charge: ", i.totalCharge]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: reserve.call(null, i, totalCharge[j]),
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }, _this)
          }, JSON.stringify(i), false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsInJzcnZJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlc2VydmF0aW9uIiwiZm9yRWFjaCIsImkiLCJqIiwiZGF5cyIsImRhaWx5UmF0ZSIsInJlc2VydmUiLCJ0b3RhbENoYXJnZSIsInJvb21OdW1iZXIiLCJyb29tU3RhdHVzIiwicm9vbVR5cGUiLCJmaXJlQXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImFkZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVzZXJ2ZWREYXRlIiwiRGF0ZSIsIm5vdyIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwibWFwIiwiY2FsbCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FBNUI7QUFDQUosVUFBUSxDQUFDSyxPQUFULENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUVELEtBQUMsQ0FBQyxhQUFELENBQUQsR0FBbUJMLFFBQVEsQ0FBQ08sSUFBVCxHQUFnQkYsQ0FBQyxDQUFDRyxTQUFyQztBQUFnRCxHQUE3RTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFrRTtBQUFBLFFBQS9ERCxTQUErRCxTQUEvREEsU0FBK0Q7QUFBQSxRQUFwREUsV0FBb0QsU0FBcERBLFdBQW9EO0FBQUEsUUFBdkNDLFVBQXVDLFNBQXZDQSxVQUF1QztBQUFBLFFBQTNCQyxVQUEyQixTQUEzQkEsVUFBMkI7QUFBQSxRQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDOUVDLDREQUFPLENBQUNDLFNBQVIsR0FBb0JDLFVBQXBCLENBQStCLGFBQS9CLEVBQThDQyxHQUE5QyxDQUFrRDtBQUM5Q0MsZUFBUyxFQUFFbEIsUUFBUSxDQUFDa0IsU0FEMEI7QUFFOUNDLGNBQVEsRUFBRW5CLFFBQVEsQ0FBQ21CLFFBRjJCO0FBRzlDQyxrQkFBWSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFIZ0M7QUFJOUNDLGlCQUFXLEVBQUV2QixRQUFRLENBQUN1QixXQUp3QjtBQUs5Q0Msa0JBQVksRUFBRXhCLFFBQVEsQ0FBQ3dCLFlBTHVCO0FBTTlDWCxjQUFRLEVBQUVBLFFBTm9DO0FBTzlDRCxnQkFBVSxFQUFFQSxVQVBrQztBQVE5Q0QsZ0JBQVUsRUFBRUEsVUFSa0M7QUFTOUNILGVBQVMsRUFBRUEsU0FUbUM7QUFVOUNFLGlCQUFXLEVBQUVBO0FBVmlDLEtBQWxEO0FBWUgsR0FiRDs7QUFjQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLWCxRQUpMLGFBSUtBLFFBSkwsdUJBSUtBLFFBQVEsQ0FBRTBCLEdBQVYsQ0FBYyxVQUFDcEIsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsOEJBQ0k7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJO0FBQUEsdUNBQ2FELENBQUMsQ0FBQ00sVUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSTtBQUFBLHFDQUNXTixDQUFDLENBQUNRLFFBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBT0kscUVBQUMsNERBQUQ7QUFBVSx1QkFBTyxFQUFFLENBQUMsV0FBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKLEVBVVFSLENBQUMsQ0FBQ0csU0FBRixJQUFlUixRQUFRLENBQUNrQixTQUF4QixpQkFDQTtBQUFBLHdDQUNJO0FBQUEsNkNBQ2lCYixDQUFDLENBQUNHLFNBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEsK0NBQ21CSCxDQUFDLENBQUNLLFdBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JO0FBQVEseUJBQU8sRUFBRUQsT0FBTyxDQUFDaUIsSUFBUixDQUFhLElBQWIsRUFBbUJyQixDQUFuQixFQUFzQkssV0FBVyxDQUFDSixDQUFELENBQWpDLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKO0FBQUEsOEJBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVXFCLElBQUksQ0FBQ0MsU0FBTCxDQUFldkIsQ0FBZixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUE0QkgsU0E3QkEsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMENILENBM0REOztHQUFNUCxLO1VBQ2VHLHVEOzs7S0FEZkgsSzs7QUF5RlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb21zLjczMjE5MzQxYTExMTk4ZWRiYWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENvbWJvYm94IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbWJvYm94XCI7XHJcbmNvbnN0IFJvb21zID0gKHsgbGlzdGluZ3MgfSkgPT4ge1xyXG4gICAgY29uc3QgcnNydkluZm8gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZXNlcnZhdGlvbik7XHJcbiAgICBsaXN0aW5ncy5mb3JFYWNoKChpLCBqKSA9PiB7IGlbXCJ0b3RhbENoYXJnZVwiXSA9IHJzcnZJbmZvLmRheXMgKiBpLmRhaWx5UmF0ZSB9KTtcclxuICAgIGNvbnN0IHJlc2VydmUgPSAoeyBkYWlseVJhdGUsIHRvdGFsQ2hhcmdlLCByb29tTnVtYmVyLCByb29tU3RhdHVzLCByb29tVHlwZSB9KSA9PiB7XHJcbiAgICAgICAgZmlyZUFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdyZXNlcnZhdGlvbicpLmFkZCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogcnNydkluZm8uZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogcnNydkluZm8ubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJlc2VydmVkRGF0ZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY2hlY2tJbkRhdGU6IHJzcnZJbmZvLmNoZWNrSW5EYXRlLFxyXG4gICAgICAgICAgICBjaGVja091dERhdGU6IHJzcnZJbmZvLmNoZWNrT3V0RGF0ZSxcclxuICAgICAgICAgICAgcm9vbVR5cGU6IHJvb21UeXBlLFxyXG4gICAgICAgICAgICByb29tU3RhdHVzOiByb29tU3RhdHVzLFxyXG4gICAgICAgICAgICByb29tTnVtYmVyOiByb29tTnVtYmVyLFxyXG4gICAgICAgICAgICBkYWlseVJhdGU6IGRhaWx5UmF0ZSxcclxuICAgICAgICAgICAgdG90YWxDaGFyZ2U6IHRvdGFsQ2hhcmdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb29tc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RpbmdzPy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtKU09OLnN0cmluZ2lmeShpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb29tICM6IHtpLnJvb21OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3ggb3B0aW9ucz17W1wiYXZhaWxhYmxlXCJdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kYWlseVJhdGUgJiYgcnNydkluZm8uZmlyc3ROYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYWlseSBSYXRlOiB7aS5kYWlseVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBDaGFyZ2U6IHtpLnRvdGFsQ2hhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2VydmUuY2FsbChudWxsLCBpLCB0b3RhbENoYXJnZVtqXSl9PlJlc2VydmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGxldCBsaXN0aW5ncyA9IFtdO1xyXG4gICAgaWYgKHF1ZXJ5LnR5cGUpIHtcclxuICAgICAgICBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwicm9vbVwiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJyb29tVHlwZVwiLCBcIj09XCIsIHF1ZXJ5LnR5cGUpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21TdGF0dXNcIiwgXCI9PVwiLCBcImF2YWlsYWJsZVwiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwicm9vbU51bWJlclwiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgbGlzdGluZ3MgfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb29tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==