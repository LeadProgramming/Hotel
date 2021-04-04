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
          lineNumber: 25,
          columnNumber: 21
        }, _this), listings === null || listings === void 0 ? void 0 : listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Room #: ", i.roomNumber]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Type: ", i.roomType]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "relative inline-block text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "button",
                    "class": "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
                    id: "options-menu",
                    "aria-expanded": "false",
                    "aria-haspopup": "true",
                    children: [i.roomStatus, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      "class": "-mr-1 ml-2 h-5 w-5",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        "fill-rule": "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 37
              }, _this), i.dailyRate && rsrvInfo.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Daily Rate: ", i.dailyRate]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Total Charge: ", i.totalCharge]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: reserve.call(null, i, totalCharge[j]),
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, _this)
          }, JSON.stringify(i), false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsInJzcnZJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlc2VydmF0aW9uIiwiZm9yRWFjaCIsImkiLCJqIiwiZGF5cyIsImRhaWx5UmF0ZSIsInJlc2VydmUiLCJ0b3RhbENoYXJnZSIsInJvb21OdW1iZXIiLCJyb29tU3RhdHVzIiwicm9vbVR5cGUiLCJmaXJlQXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImFkZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVzZXJ2ZWREYXRlIiwiRGF0ZSIsIm5vdyIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwibWFwIiwiY2FsbCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FBNUI7QUFDQUosVUFBUSxDQUFDSyxPQUFULENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUVELEtBQUMsQ0FBQyxhQUFELENBQUQsR0FBbUJMLFFBQVEsQ0FBQ08sSUFBVCxHQUFnQkYsQ0FBQyxDQUFDRyxTQUFyQztBQUFnRCxHQUE3RTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFrRTtBQUFBLFFBQS9ERCxTQUErRCxTQUEvREEsU0FBK0Q7QUFBQSxRQUFwREUsV0FBb0QsU0FBcERBLFdBQW9EO0FBQUEsUUFBdkNDLFVBQXVDLFNBQXZDQSxVQUF1QztBQUFBLFFBQTNCQyxVQUEyQixTQUEzQkEsVUFBMkI7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QURmSCxLOztBQWdIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbXMuYjZiMjI0ZDkxNDM4NDVhN2Y3NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcclxuaW1wb3J0IGZpcmVBcHAgZnJvbSBcIi4uL2ZpcmViYXNlX2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5jb25zdCBSb29tcyA9ICh7IGxpc3RpbmdzIH0pID0+IHtcclxuICAgIGNvbnN0IHJzcnZJbmZvID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVzZXJ2YXRpb24pO1xyXG4gICAgbGlzdGluZ3MuZm9yRWFjaCgoaSwgaikgPT4geyBpW1widG90YWxDaGFyZ2VcIl0gPSByc3J2SW5mby5kYXlzICogaS5kYWlseVJhdGUgfSk7XHJcbiAgICBjb25zdCByZXNlcnZlID0gKHsgZGFpbHlSYXRlLCB0b3RhbENoYXJnZSwgcm9vbU51bWJlciwgcm9vbVN0YXR1cywgcm9vbVR5cGUgfSkgPT4ge1xyXG4gICAgICAgIGZpcmVBcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncmVzZXJ2YXRpb24nKS5hZGQoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHJzcnZJbmZvLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHJzcnZJbmZvLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByZXNlcnZlZERhdGU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNoZWNrSW5EYXRlOiByc3J2SW5mby5jaGVja0luRGF0ZSxcclxuICAgICAgICAgICAgY2hlY2tPdXREYXRlOiByc3J2SW5mby5jaGVja091dERhdGUsXHJcbiAgICAgICAgICAgIHJvb21UeXBlOiByb29tVHlwZSxcclxuICAgICAgICAgICAgcm9vbVN0YXR1czogcm9vbVN0YXR1cyxcclxuICAgICAgICAgICAgcm9vbU51bWJlcjogcm9vbU51bWJlcixcclxuICAgICAgICAgICAgZGFpbHlSYXRlOiBkYWlseVJhdGUsXHJcbiAgICAgICAgICAgIHRvdGFsQ2hhcmdlOiB0b3RhbENoYXJnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9vbXNcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5ncz8ubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9vbSAjOiB7aS5yb29tTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZToge2kucm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTIgYmctd2hpdGUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktMTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiIGlkPVwib3B0aW9ucy1tZW51XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kucm9vbVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIi1tci0xIG1sLTIgaC01IHctNVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LTU2IHJvdW5kZWQtbWQgc2hhZG93LWxnIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiIHJvbGU9XCJtZW51XCIgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYXJpYS1sYWJlbGxlZGJ5PVwib3B0aW9ucy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTFcIiByb2xlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+QWNjb3VudCBzZXR0aW5nczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiIHJvbGU9XCJtZW51aXRlbVwiPlN1cHBvcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIiByb2xlPVwibWVudWl0ZW1cIj5MaWNlbnNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiI1wiIHJvbGU9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJsb2NrIHctZnVsbCB0ZXh0LWxlZnQgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGFpbHlSYXRlICYmIHJzcnZJbmZvLmZpcnN0TmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFpbHkgUmF0ZToge2kuZGFpbHlSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgQ2hhcmdlOiB7aS50b3RhbENoYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNlcnZlLmNhbGwobnVsbCwgaSwgdG90YWxDaGFyZ2Vbal0pfT5SZXNlcnZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBsZXQgbGlzdGluZ3MgPSBbXTtcclxuICAgIGlmIChxdWVyeS50eXBlKSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVR5cGVcIiwgXCI9PVwiLCBxdWVyeS50eXBlKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJyb29tU3RhdHVzXCIsIFwiPT1cIiwgXCJhdmFpbGFibGVcIilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeURhdGEuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0aW5ncy5wdXNoKGkuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwicm9vbVwiKVxyXG4gICAgICAgICAgICAub3JkZXJCeShcInJvb21OdW1iZXJcIilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeURhdGEuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0aW5ncy5wdXNoKGkuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IGxpc3RpbmdzIH0sXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUm9vbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=