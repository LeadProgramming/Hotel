webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./store/reservationSlice.js":
/*!***********************************!*\
  !*** ./store/reservationSlice.js ***!
  \***********************************/
/*! exports provided: login, logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
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
var _loginSlice$actions = loginSlice.actions,
    login = _loginSlice$actions.login,
    logout = _loginSlice$actions.logout;

/* harmony default export */ __webpack_exports__["default"] = (loginSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVzZXJ2YXRpb25TbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwicm9vbVR5cGUiLCJkYXlzIiwicmVzZXJ2YXRpb25TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwicmVzZXJ2ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ2luU2xpY2UiLCJhY3Rpb25zIiwibG9naW4iLCJsb2dvdXQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsV0FBUyxFQUFFLEVBRE07QUFFakJDLFVBQVEsRUFBRSxFQUZPO0FBR2pCQyxhQUFXLEVBQUUsRUFISTtBQUlqQkMsY0FBWSxFQUFFLEVBSkc7QUFLakJDLFVBQVEsRUFBRSxFQUxPO0FBTWpCQyxNQUFJLEVBQUU7QUFOVyxDQUFyQjtBQVFBLElBQU1DLGdCQUFnQixHQUFHQyxvRUFBVyxDQUFDO0FBQ2pDQyxNQUFJLEVBQUUsYUFEMkI7QUFFakNULGNBQVksRUFBWkEsWUFGaUM7QUFHakNVLFVBQVEsRUFBRTtBQUNOQyxXQURNLG1CQUNFQyxLQURGLEVBQ1NDLE1BRFQsRUFDaUI7QUFDbkJELFdBQUssR0FBR0MsTUFBTSxDQUFDQyxPQUFmO0FBQ0g7QUFISztBQUh1QixDQUFELENBQXBDOzBCQVVpQ0MsVUFBVSxDQUFDQyxPO0lBQTdCQyxLLHVCQUFBQSxLO0lBQU9DLE0sdUJBQUFBLE07O0FBQ1BILHlFQUFVLENBQUNJLE9BQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzZlMTA5MzE2Mjc1YzczMzg2NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBjaGVja0luRGF0ZTogXCJcIixcclxuICAgIGNoZWNrT3V0RGF0ZTogXCJcIixcclxuICAgIHJvb21UeXBlOiBcIlwiLFxyXG4gICAgZGF5czogMFxyXG59XHJcbmNvbnN0IHJlc2VydmF0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAncmVzZXJ2YXRpb24nLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICByZXNlcnZlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSBsb2dpblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2xpY2UucmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9