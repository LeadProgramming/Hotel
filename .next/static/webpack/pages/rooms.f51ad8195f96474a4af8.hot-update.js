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
    _this = undefined;





var Rooms = function Rooms(_ref) {
  var listings = _ref.listings,
      days = _ref.days;

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
          lineNumber: 14,
          columnNumber: 21
        }, _this), listings === null || listings === void 0 ? void 0 : listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Room #: ", i.roomNumber]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                children: ["Type: ", i.roomType]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 37
              }, _this), i.dailyRate && days && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Daily Rate: ", i.dailyRate]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Total Charge: ", i.dailyRate * days]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: reserve.call(null, i),
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 33
            }, _this)
          }, JSON.stringify(i), false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsImRheXMiLCJyZXNlcnZlIiwiZGFpbHlSYXRlIiwicm9vbU51bWJlciIsInJvb21TdGF0dXMiLCJyb29tVHlwZSIsImZpcmVBcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkIiwibWFwIiwiaSIsImoiLCJjYWxsIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNsQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFxRDtBQUFBLFFBQWxEQyxTQUFrRCxTQUFsREEsU0FBa0Q7QUFBQSxRQUF2Q0MsVUFBdUMsU0FBdkNBLFVBQXVDO0FBQUEsUUFBM0JDLFVBQTJCLFNBQTNCQSxVQUEyQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNqRUMsNERBQU8sQ0FBQ0MsU0FBUixHQUFvQkMsVUFBcEIsQ0FBK0IsYUFBL0IsRUFBOENDLEdBQTlDLENBQWtELEVBQWxEO0FBR0gsR0FKRDs7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLVixRQUpMLGFBSUtBLFFBSkwsdUJBSUtBLFFBQVEsQ0FBRVcsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLDhCQUNJO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBLHVDQUNhRCxDQUFDLENBQUNSLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQSxxQ0FDV1EsQ0FBQyxDQUFDTixRQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixFQVFRTSxDQUFDLENBQUNULFNBQUYsSUFBZUYsSUFBZixpQkFDQTtBQUFBLHdDQUNJO0FBQUEsNkNBQ2lCVyxDQUFDLENBQUNULFNBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEsK0NBQ21CUyxDQUFDLENBQUNULFNBQUYsR0FBY0YsSUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBT0k7QUFBUSx5QkFBTyxFQUFFQyxPQUFPLENBQUNZLElBQVIsQ0FBYSxJQUFiLEVBQW1CRixDQUFuQixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBLDhCQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixDQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQTBCSCxTQTNCQSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0E5Q0Q7O0tBQU1iLEs7O0FBZ0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tcy5mNTFhZDgxOTVmOTY0NzRhNGFmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxyXG5pbXBvcnQgZmlyZUFwcCBmcm9tIFwiLi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmNvbnN0IFJvb21zID0gKHsgbGlzdGluZ3MsIGRheXMgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzZXJ2ZSA9ICh7IGRhaWx5UmF0ZSwgcm9vbU51bWJlciwgcm9vbVN0YXR1cywgcm9vbVR5cGUgfSkgPT4ge1xyXG4gICAgICAgIGZpcmVBcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncmVzZXJ2YXRpb24nKS5hZGQoe1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvb21zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGluZ3M/Lm1hcCgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e0pTT04uc3RyaW5naWZ5KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvb20gIzoge2kucm9vbU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZToge2kucm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRhaWx5UmF0ZSAmJiBkYXlzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYWlseSBSYXRlOiB7aS5kYWlseVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBDaGFyZ2U6IHtpLmRhaWx5UmF0ZSAqIGRheXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXJ2ZS5jYWxsKG51bGwsIGkpfT5SZXNlcnZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBsZXQgbGlzdGluZ3MgPSBbXTtcclxuICAgIGxldCBkYXlzID0gW107XHJcbiAgICBpZiAocXVlcnkudHlwZSkge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21UeXBlXCIsIFwiPT1cIiwgcXVlcnkudHlwZSlcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVN0YXR1c1wiLCBcIj09XCIsIFwiYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7IGxpc3RpbmdzLCBkYXlzOiBxdWVyeS5kYXlzIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwicm9vbVwiKVxyXG4gICAgICAgICAgICAub3JkZXJCeShcInJvb21OdW1iZXJcIilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeURhdGEuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0aW5ncy5wdXNoKGkuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgbGlzdGluZ3MgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUm9vbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=