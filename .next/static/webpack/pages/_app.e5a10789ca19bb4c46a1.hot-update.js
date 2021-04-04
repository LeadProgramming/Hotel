webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reservationSlice.js":
/*!***********************************!*\
  !*** ./store/reservationSlice.js ***!
  \***********************************/
/*! exports provided: reserve, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reserve", function() { return reserve; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
  firstName: "",
  lastName: "",
  checkInDate: "",
  checkOutDate: "",
  roomType: "",
  days: 0
};
var reservationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'reservation',
  initialState: initialState,
  reducers: {
    reserve: function reserve(state, action) {
      state = action.payload;
    }
  }
});
var reserve = reservationSlice.actions.reserve;

/* harmony default export */ __webpack_exports__["default"] = (reservationSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVzZXJ2YXRpb25TbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwicm9vbVR5cGUiLCJkYXlzIiwicmVzZXJ2YXRpb25TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwicmVzZXJ2ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFdBQVMsRUFBRSxFQURNO0FBRWpCQyxVQUFRLEVBQUUsRUFGTztBQUdqQkMsYUFBVyxFQUFFLEVBSEk7QUFJakJDLGNBQVksRUFBRSxFQUpHO0FBS2pCQyxVQUFRLEVBQUUsRUFMTztBQU1qQkMsTUFBSSxFQUFFO0FBTlcsQ0FBckI7QUFRQSxJQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQVcsQ0FBQztBQUNqQ0MsTUFBSSxFQUFFLGFBRDJCO0FBRWpDVCxjQUFZLEVBQVpBLFlBRmlDO0FBR2pDVSxVQUFRLEVBQUU7QUFDTkMsV0FETSxtQkFDRUMsS0FERixFQUNTQyxNQURULEVBQ2lCO0FBQ25CRCxXQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBZjtBQUNIO0FBSEs7QUFIdUIsQ0FBRCxDQUFwQztJQVVlSCxPLEdBQVlKLGdCQUFnQixDQUFDUSxPLENBQTdCSixPOztBQUNBSiwrRUFBZ0IsQ0FBQ1MsT0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNWExMDc4OWNhMTliYjRjNDZhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGNoZWNrSW5EYXRlOiBcIlwiLFxyXG4gICAgY2hlY2tPdXREYXRlOiBcIlwiLFxyXG4gICAgcm9vbVR5cGU6IFwiXCIsXHJcbiAgICBkYXlzOiAwXHJcbn1cclxuY29uc3QgcmVzZXJ2YXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdyZXNlcnZhdGlvbicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHJlc2VydmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHJlc2VydmUgfSA9IHJlc2VydmF0aW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25TbGljZS5yZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=