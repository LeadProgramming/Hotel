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



var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel-guest\\pages\\rooms.js",
    _this = undefined;



var Rooms = function Rooms(_ref) {
  var listings = _ref.listings,
      days = _ref.days;
  var totalCharge = i.dailyRate * days;

  var reserve = function reserve(_ref2) {// fireApp.firestore().collection('reservation').add(data);

    var dailyRate = _ref2.dailyRate,
        roomNumber = _ref2.roomNumber,
        roomStatus = _ref2.roomStatus,
        roomType = _ref2.roomType;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsImRheXMiLCJ0b3RhbENoYXJnZSIsImkiLCJkYWlseVJhdGUiLCJyZXNlcnZlIiwicm9vbU51bWJlciIsInJvb21TdGF0dXMiLCJyb29tVHlwZSIsIm1hcCIsImoiLCJjYWxsIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2xDLE1BQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDQyxTQUFGLEdBQWNILElBQWxDOztBQUNBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQXFELENBRWpFOztBQUZpRSxRQUFsREQsU0FBa0QsU0FBbERBLFNBQWtEO0FBQUEsUUFBdkNFLFVBQXVDLFNBQXZDQSxVQUF1QztBQUFBLFFBQTNCQyxVQUEyQixTQUEzQkEsVUFBMkI7QUFBQSxRQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFHcEUsR0FIRDs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUlLUixRQUpMLGFBSUtBLFFBSkwsdUJBSUtBLFFBQVEsQ0FBRVMsR0FBVixDQUFjLFVBQUNOLENBQUQsRUFBSU8sQ0FBSixFQUFVO0FBQ3JCLDhCQUNJO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBLHVDQUNhUCxDQUFDLENBQUNHLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQSxxQ0FDV0gsQ0FBQyxDQUFDSyxRQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixFQVFRTCxDQUFDLENBQUNDLFNBQUYsSUFBZUgsSUFBZixpQkFDQTtBQUFBLHdDQUNJO0FBQUEsNkNBQ2lCRSxDQUFDLENBQUNDLFNBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEsK0NBQ21CRCxDQUFDLENBQUNDLFNBQUYsR0FBY0gsSUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBT0k7QUFBUSx5QkFBTyxFQUFFSSxPQUFPLENBQUNNLElBQVIsQ0FBYSxJQUFiLEVBQW1CUixDQUFuQixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBLDhCQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVTLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixDQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQTBCSCxTQTNCQSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0E5Q0Q7O0tBQU1KLEs7O0FBZ0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tcy5kZTcxM2UwMGFlM2NhZDU0MDUxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxyXG5pbXBvcnQgZmlyZUFwcCBmcm9tIFwiLi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcblxyXG5jb25zdCBSb29tcyA9ICh7IGxpc3RpbmdzLCBkYXlzIH0pID0+IHtcclxuICAgIGNvbnN0IHRvdGFsQ2hhcmdlID0gaS5kYWlseVJhdGUgKiBkYXlzO1xyXG4gICAgY29uc3QgcmVzZXJ2ZSA9ICh7IGRhaWx5UmF0ZSwgcm9vbU51bWJlciwgcm9vbVN0YXR1cywgcm9vbVR5cGUgfSkgPT4ge1xyXG5cclxuICAgICAgICAvLyBmaXJlQXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Jlc2VydmF0aW9uJykuYWRkKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9vbXNcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5ncz8ubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9vbSAjOiB7aS5yb29tTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGFpbHlSYXRlICYmIGRheXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhaWx5IFJhdGU6IHtpLmRhaWx5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIENoYXJnZToge2kuZGFpbHlSYXRlICogZGF5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNlcnZlLmNhbGwobnVsbCwgaSl9PlJlc2VydmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGxldCBsaXN0aW5ncyA9IFtdO1xyXG4gICAgbGV0IGRheXMgPSBbXTtcclxuICAgIGlmIChxdWVyeS50eXBlKSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVR5cGVcIiwgXCI9PVwiLCBxdWVyeS50eXBlKVxyXG4gICAgICAgICAgICAud2hlcmUoXCJyb29tU3RhdHVzXCIsIFwiPT1cIiwgXCJhdmFpbGFibGVcIilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeURhdGEuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0aW5ncy5wdXNoKGkuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgbGlzdGluZ3MsIGRheXM6IHF1ZXJ5LmRheXMgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwicm9vbU51bWJlclwiKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyBsaXN0aW5ncyB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSb29tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==