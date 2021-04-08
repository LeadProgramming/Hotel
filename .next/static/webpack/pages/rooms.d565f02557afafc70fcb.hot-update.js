webpackHotUpdate_N_E("pages/rooms",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase_config */ "./firebase_config.js");



var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel\\pages\\rooms.js",
    _this = undefined,
    _s = $RefreshSig$();





var Rooms = function Rooms(_ref) {
  _s();

  var listings = _ref.listings;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var rsrvInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.reservation;
  });
  listings.forEach(function (i) {
    i["totalCharge"] = rsrvInfo.days * i.dailyRate;
  });

  var reserving = function reserving(_ref2) {
    var dailyRate = _ref2.dailyRate,
        totalCharge = _ref2.totalCharge,
        roomNumber = _ref2.roomNumber,
        roomType = _ref2.roomType;
    _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('reservation').add({
      firstName: rsrvInfo.firstName,
      lastName: rsrvInfo.lastName,
      reservedDate: Date.now(),
      checkInDate: rsrvInfo.checkInDate,
      checkOutDate: rsrvInfo.checkOutDate,
      roomType: roomType,
      roomStatus: "occupied",
      roomNumber: roomNumber,
      dailyRate: dailyRate,
      totalCharge: totalCharge
    });
    _firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('room').doc(roomNumber).update({
      roomStatus: "occupied",
      checkInDate: rsrvInfo.checkInDate,
      checkOutDate: rsrvInfo.checkOutDate
    });
    router.push("/rooms");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "pt-8 pl-8 ",
      children: "Rooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room #"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Room Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Daily Rate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Total Charge"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: (listings === null || listings === void 0 ? void 0 : listings.length) > 0 ? listings.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.roomNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.roomType
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: !rsrvInfo.firstName.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  role: "none",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i.roomStatus,
                    children: i.roomStatus
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 53
                  }, _this), ["available", "occupied", "dirty", "maintenance"].map(function (i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: i,
                      children: i
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 61
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 49
                }, _this)
              }, void 0, false) : i.roomStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, _this), i.dailyRate && rsrvInfo.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: i.dailyRate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: i.totalCharge
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-8 py-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    reserving(i);
                  },
                  children: "Reserve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 41
              }, _this)]
            }, void 0, true)]
          }, JSON.stringify(i), true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, _this);
        }) : "No rooms available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(Rooms, "WVurFAWlKUITANn1Naxaiz/i3Ug=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbXMuanMiXSwibmFtZXMiOlsiUm9vbXMiLCJsaXN0aW5ncyIsInJvdXRlciIsInVzZVJvdXRlciIsInJzcnZJbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlc2VydmF0aW9uIiwiZm9yRWFjaCIsImkiLCJkYXlzIiwiZGFpbHlSYXRlIiwicmVzZXJ2aW5nIiwidG90YWxDaGFyZ2UiLCJyb29tTnVtYmVyIiwicm9vbVR5cGUiLCJmaXJlQXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImFkZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVzZXJ2ZWREYXRlIiwiRGF0ZSIsIm5vdyIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwicm9vbVN0YXR1cyIsImRvYyIsInVwZGF0ZSIsInB1c2giLCJsZW5ndGgiLCJtYXAiLCJqIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxHQUFOLENBQTVCO0FBQ0FOLFVBQVEsQ0FBQ08sT0FBVCxDQUFpQixVQUFDQyxDQUFELEVBQU87QUFBRUEsS0FBQyxDQUFDLGFBQUQsQ0FBRCxHQUFtQkwsUUFBUSxDQUFDTSxJQUFULEdBQWdCRCxDQUFDLENBQUNFLFNBQXJDO0FBQWdELEdBQTFFOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQXNEO0FBQUEsUUFBbkRELFNBQW1ELFNBQW5EQSxTQUFtRDtBQUFBLFFBQXhDRSxXQUF3QyxT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cy5kNTY1ZjAyNTU3YWZhZmM3MGZjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmaXJlQXBwIGZyb20gXCIuLi9maXJlYmFzZV9jb25maWdcIjtcclxuY29uc3QgUm9vbXMgPSAoeyBsaXN0aW5ncyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJzcnZJbmZvID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVzZXJ2YXRpb24pO1xyXG4gICAgbGlzdGluZ3MuZm9yRWFjaCgoaSkgPT4geyBpW1widG90YWxDaGFyZ2VcIl0gPSByc3J2SW5mby5kYXlzICogaS5kYWlseVJhdGUgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzZXJ2aW5nID0gKHsgZGFpbHlSYXRlLCB0b3RhbENoYXJnZSwgcm9vbU51bWJlciwgcm9vbVR5cGUgfSkgPT4ge1xyXG4gICAgICAgIGZpcmVBcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncmVzZXJ2YXRpb24nKS5hZGQoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHJzcnZJbmZvLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHJzcnZJbmZvLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByZXNlcnZlZERhdGU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNoZWNrSW5EYXRlOiByc3J2SW5mby5jaGVja0luRGF0ZSxcclxuICAgICAgICAgICAgY2hlY2tPdXREYXRlOiByc3J2SW5mby5jaGVja091dERhdGUsXHJcbiAgICAgICAgICAgIHJvb21UeXBlOiByb29tVHlwZSxcclxuICAgICAgICAgICAgcm9vbVN0YXR1czogXCJvY2N1cGllZFwiLFxyXG4gICAgICAgICAgICByb29tTnVtYmVyOiByb29tTnVtYmVyLFxyXG4gICAgICAgICAgICBkYWlseVJhdGU6IGRhaWx5UmF0ZSxcclxuICAgICAgICAgICAgdG90YWxDaGFyZ2U6IHRvdGFsQ2hhcmdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlyZUFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdyb29tJykuZG9jKHJvb21OdW1iZXIpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHJvb21TdGF0dXM6IFwib2NjdXBpZWRcIixcclxuICAgICAgICAgICAgY2hlY2tJbkRhdGU6IHJzcnZJbmZvLmNoZWNrSW5EYXRlLFxyXG4gICAgICAgICAgICBjaGVja091dERhdGU6IHJzcnZJbmZvLmNoZWNrT3V0RGF0ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Jvb21zXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzcGFjZS15LTRcIn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC04IHBsLTggXCI+XHJcbiAgICAgICAgICAgICAgICBSb29tc1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtcInRhYmxlLWF1dG9cIn0+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlJvb20gIzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+Um9vbSBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17XCJweC04IFwifT5Sb29tIFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RGFpbHkgUmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+VG90YWwgQ2hhcmdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGluZ3M/Lmxlbmd0aCA+IDAgPyBsaXN0aW5ncy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0pTT04uc3RyaW5naWZ5KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kucm9vbU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wicHgtOCBweS00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5yb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJzcnZJbmZvLmZpcnN0TmFtZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCByb2xlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aS5yb29tU3RhdHVzfT57aS5yb29tU3RhdHVzfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcImF2YWlsYWJsZVwiLCBcIm9jY3VwaWVkXCIsIFwiZGlydHlcIiwgXCJtYWludGVuYW5jZVwiXS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0gPntpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogaS5yb29tU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRhaWx5UmF0ZSAmJiByc3J2SW5mby5maXJzdE5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wicHgtOCBweS00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmRhaWx5UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS50b3RhbENoYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2aW5nKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlc2VydmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDogXCJObyByb29tcyBhdmFpbGFibGVcIn1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGxpc3RpbmdzID0gW107XHJcbiAgICBpZiAocXVlcnkudHlwZSkge1xyXG4gICAgICAgIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJyb29tXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcInJvb21UeXBlXCIsIFwiPT1cIiwgcXVlcnkudHlwZSlcclxuICAgICAgICAgICAgLndoZXJlKFwicm9vbVN0YXR1c1wiLCBcIj09XCIsIFwiYXZhaWxhYmxlXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZUFwcC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInJvb21cIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJyb29tTnVtYmVyXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbihxdWVyeURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MucHVzaChpLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBsaXN0aW5ncyB9LFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvb21zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9