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
      reservedDate: Date.now()
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Rooms"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), listings === null || listings === void 0 ? void 0 : listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Room #: ", i.roomNumber]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                children: ["Type: ", i.roomType]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 37
              }, _this), i.dailyRate && days && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Daily Rate: ", i.dailyRate]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Total Charge: ", i.totalCharge]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: reserve.call(null, i, totalCharge[j]),
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 33
            }, _this)
          }, JSON.stringify(i), false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsInJzcnZJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlc2VydmF0aW9uIiwiZm9yRWFjaCIsImkiLCJqIiwiZGF5cyIsImRhaWx5UmF0ZSIsInJlc2VydmUiLCJ0b3RhbENoYXJnZSIsInJvb21OdW1iZXIiLCJyb29tU3RhdHVzIiwicm9vbVR5cGUiLCJmaXJlQXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImFkZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVzZXJ2ZWREYXRlIiwiRGF0ZSIsIm5vdyIsIm1hcCIsImNhbGwiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxHQUFOLENBQTVCO0FBQ0FKLFVBQVEsQ0FBQ0ssT0FBVCxDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUFFRCxLQUFDLENBQUMsYUFBRCxDQUFELEdBQW1CTCxRQUFRLENBQUNPLElBQVQsR0FBZ0JGLENBQUMsQ0FBQ0csU0FBckM7QUFBZ0QsR0FBN0U7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBa0U7QUFBQSxRQUEvREQsU0FBK0QsU0FBL0RBLFNBQStEO0FBQUEsUUFBcERFLFdBQW9ELFNBQXBEQSxXQUFvRDtBQUFBLFFBQXZDQyxVQUF1QyxTQUF2Q0EsVUFBdUM7QUFBQSxRQUEzQkMsVUFBMkIsU0FBM0JBLFVBQTJCO0FBQUEsUUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQzlFQyw0REFBTyxDQUFDQyxTQUFSLEdBQW9CQyxVQUFwQixDQUErQixhQUEvQixFQUE4Q0MsR0FBOUMsQ0FBa0Q7QUFDOUNDLGVBQVMsRUFBRWxCLFFBQVEsQ0FBQ2tCLFNBRDBCO0FBRTlDQyxjQUFRLEVBQUVuQixRQUFRLENBQUNtQixRQUYyQjtBQUc5Q0Msa0JBQVksRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBSGdDLEtBQWxEO0FBTUgsR0FQRDs7QUFRQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLdkIsUUFKTCxhQUlLQSxRQUpMLHVCQUlLQSxRQUFRLENBQUV3QixHQUFWLENBQWMsVUFBQ2xCLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLDhCQUNJO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBLHVDQUNhRCxDQUFDLENBQUNNLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQSxxQ0FDV04sQ0FBQyxDQUFDUSxRQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixFQVFRUixDQUFDLENBQUNHLFNBQUYsSUFBZUQsSUFBZixpQkFDQTtBQUFBLHdDQUNJO0FBQUEsNkNBQ2lCRixDQUFDLENBQUNHLFNBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEsK0NBQ21CSCxDQUFDLENBQUNLLFdBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JO0FBQVEseUJBQU8sRUFBRUQsT0FBTyxDQUFDZSxJQUFSLENBQWEsSUFBYixFQUFtQm5CLENBQW5CLEVBQXNCSyxXQUFXLENBQUNKLENBQUQsQ0FBakMsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEo7QUFBQSw4QkFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVyQixDQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQTBCSCxTQTNCQSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0FuREQ7O0dBQU1QLEs7VUFDZUcsdUQ7OztLQURmSCxLOztBQWlGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbXMuNGQ1NWNlNzZhNzNhYWRkYjQ2NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcclxuaW1wb3J0IGZpcmVBcHAgZnJvbSBcIi4uL2ZpcmViYXNlX2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5jb25zdCBSb29tcyA9ICh7IGxpc3RpbmdzIH0pID0+IHtcclxuICAgIGNvbnN0IHJzcnZJbmZvID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVzZXJ2YXRpb24pO1xyXG4gICAgbGlzdGluZ3MuZm9yRWFjaCgoaSwgaikgPT4geyBpW1widG90YWxDaGFyZ2VcIl0gPSByc3J2SW5mby5kYXlzICogaS5kYWlseVJhdGUgfSk7XHJcbiAgICBjb25zdCByZXNlcnZlID0gKHsgZGFpbHlSYXRlLCB0b3RhbENoYXJnZSwgcm9vbU51bWJlciwgcm9vbVN0YXR1cywgcm9vbVR5cGUgfSkgPT4ge1xyXG4gICAgICAgIGZpcmVBcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncmVzZXJ2YXRpb24nKS5hZGQoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHJzcnZJbmZvLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHJzcnZJbmZvLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByZXNlcnZlZERhdGU6IERhdGUubm93KCksXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9vbXNcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5ncz8ubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9vbSAjOiB7aS5yb29tTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGFpbHlSYXRlICYmIGRheXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhaWx5IFJhdGU6IHtpLmRhaWx5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIENoYXJnZToge2kudG90YWxDaGFyZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXJ2ZS5jYWxsKG51bGwsIGksIHRvdGFsQ2hhcmdlW2pdKX0+UmVzZXJ2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGxpc3RpbmdzID0gW107XHJcbiAgICBpZiAocXVlcnkudHlwZSkge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21UeXBlXCIsIFwiPT1cIiwgcXVlcnkudHlwZSlcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVN0YXR1c1wiLCBcIj09XCIsIFwiYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJyb29tTnVtYmVyXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBsaXN0aW5ncyB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvb21zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9