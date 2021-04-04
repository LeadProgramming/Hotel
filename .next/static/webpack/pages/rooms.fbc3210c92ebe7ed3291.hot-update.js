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
  var reservationInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
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

_s(Rooms, "zCsJC/fqMagWiqU752MjQv9OApA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsImRheXMiLCJyZXNlcnZhdGlvbkluZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVzZXJ2YXRpb24iLCJyZXNlcnZlIiwiZGFpbHlSYXRlIiwicm9vbU51bWJlciIsInJvb21TdGF0dXMiLCJyb29tVHlwZSIsImZpcmVBcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwibWFwIiwiaSIsImoiLCJjYWxsIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNsQyxNQUFNQyxlQUFlLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FBbkM7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBcUQ7QUFBQSxRQUFsREMsU0FBa0QsU0FBbERBLFNBQWtEO0FBQUEsUUFBdkNDLFVBQXVDLFNBQXZDQSxVQUF1QztBQUFBLFFBQTNCQyxVQUEyQixTQUEzQkEsVUFBMkI7QUFBQSxRQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDakVDLDREQUFPLENBQUNDLFNBQVIsR0FBb0JDLFVBQXBCLENBQStCLGFBQS9CLEVBQThDQyxHQUE5QyxDQUFrRCxFQUFsRDtBQUdILEdBSkQ7O0FBS0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywwREFBRDtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFJS2QsUUFKTCxhQUlLQSxRQUpMLHVCQUlLQSxRQUFRLENBQUVlLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQiw4QkFDSTtBQUFBLG1DQUNJO0FBQUEsc0NBQ0k7QUFBQSx1Q0FDYUQsQ0FBQyxDQUFDUixVQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJO0FBQUEscUNBQ1dRLENBQUMsQ0FBQ04sUUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosRUFRUU0sQ0FBQyxDQUFDVCxTQUFGLElBQWVOLElBQWYsaUJBQ0E7QUFBQSx3Q0FDSTtBQUFBLDZDQUNpQmUsQ0FBQyxDQUFDVCxTQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSTtBQUFBLCtDQUNtQlMsQ0FBQyxDQUFDVCxTQUFGLEdBQWNOLElBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JO0FBQVEseUJBQU8sRUFBRUssT0FBTyxDQUFDWSxJQUFSLENBQWEsSUFBYixFQUFtQkYsQ0FBbkIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEo7QUFBQSw4QkFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosQ0FBZixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUEwQkgsU0EzQkEsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBL0NEOztHQUFNakIsSztVQUNzQkksdUQ7OztLQUR0QkosSzs7QUE2RVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb21zLmZiYzMyMTBjOTJlYmU3ZWQzMjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgUm9vbXMgPSAoeyBsaXN0aW5ncywgZGF5cyB9KSA9PiB7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbkluZm8gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZXNlcnZhdGlvbik7XHJcbiAgICBjb25zdCByZXNlcnZlID0gKHsgZGFpbHlSYXRlLCByb29tTnVtYmVyLCByb29tU3RhdHVzLCByb29tVHlwZSB9KSA9PiB7XHJcbiAgICAgICAgZmlyZUFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdyZXNlcnZhdGlvbicpLmFkZCh7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9vbXNcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5ncz8ubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9vbSAjOiB7aS5yb29tTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGFpbHlSYXRlICYmIGRheXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhaWx5IFJhdGU6IHtpLmRhaWx5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIENoYXJnZToge2kuZGFpbHlSYXRlICogZGF5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNlcnZlLmNhbGwobnVsbCwgaSl9PlJlc2VydmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGxldCBsaXN0aW5ncyA9IFtdO1xyXG4gICAgaWYgKHF1ZXJ5LnR5cGUpIHtcclxuICAgICAgICBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwicm9vbVwiKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJyb29tVHlwZVwiLCBcIj09XCIsIHF1ZXJ5LnR5cGUpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21TdGF0dXNcIiwgXCI9PVwiLCBcImF2YWlsYWJsZVwiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwicm9vbU51bWJlclwiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgbGlzdGluZ3MgfSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb29tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==