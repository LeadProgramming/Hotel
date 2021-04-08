webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase_config */ "./firebase_config.js");




var _jsxFileName = "C:\\Users\\Diana\\Desktop\\CSUF_SPRING_2021\\CPSC_463\\projects\\hotel\\pages\\profile.js",
    _this = undefined,
    _s2 = $RefreshSig$();






var Profile = function Profile(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var guests = _ref.guests;
  var picsRef = guests === null || guests === void 0 ? void 0 : guests.map(_s(function (i) {
    _s();

    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  }, "J9pzIsEOVEZ74gjFtMkCj+5Po7s="));
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var imgFiles;
    return C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (guests) {
              imgFiles = [];
              imgFiles = guests.map(function (i) {
                return _firebase_config__WEBPACK_IMPORTED_MODULE_6__["default"].storage().refFromURL("gs://hotel-3c249.appspot.com/images/".concat(i.imgName));
              });
              imgFiles.map(function (i, j) {
                i.getDownloadURL().then(function (url) {
                  i["profilePic"] = url;
                }).then(function () {
                  picsRef[j].current.src = i.profilePic;
                });
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "space-y-4 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "pt-8 pl-8",
      children: "Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), guests ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Profile Pic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "First Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Driver ID#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "px-8 ",
            children: "Vehicle ID#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: guests === null || guests === void 0 ? void 0 : guests.map(function (i, j) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                ref: picsRef[j],
                alt: "guest's image",
                width: "100",
                height: "100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 47
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.driverId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: i.carId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "px-8 py-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/profile/" + i.email,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 82
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 47
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, _this)]
          }, JSON.stringify(i), true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this) : !email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No user has signed up yet."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 30
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s2(Profile, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var query, guests;
    return C_Users_Diana_Desktop_CSUF_SPRING_2021_CPSC_463_projects_hotel_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref3.query;
            guests = [];
            _context2.next = 4;
            return _firebase_config__WEBPACK_IMPORTED_MODULE_6__["default"].firestore().collection("guest").get().then(function (queryData) {
              queryData.forEach(function (i) {
                guests.push(i.data());
              });
            });

          case 4:
            return _context2.abrupt("return", {
              props: {
                guests: guests
              }
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getServerSideProps.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ3Vlc3RzIiwicGljc1JlZiIsIm1hcCIsImkiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpbWdGaWxlcyIsImZpcmVBcHAiLCJzdG9yYWdlIiwicmVmRnJvbVVSTCIsImltZ05hbWUiLCJqIiwiZ2V0RG93bmxvYWRVUkwiLCJ0aGVuIiwidXJsIiwiY3VycmVudCIsInNyYyIsInByb2ZpbGVQaWMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lIiwiYWRkcmVzcyIsImVtYWlsIiwiZHJpdmVySWQiLCJjYXJJZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJxdWVyeURhdGEiLCJmb3JFYWNoIiwicHVzaCIsImRhdGEiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDOUIsTUFBTUMsT0FBTyxHQUFHRCxNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUUsR0FBUixJQUFZLFVBQUFDLENBQUM7QUFBQTs7QUFBQSxXQUFJQyxvREFBTSxFQUFWO0FBQUEsR0FBYixrQ0FBaEI7QUFDQUMseURBQVMsMFhBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1IsZ0JBQUlMLE1BQUosRUFBWTtBQUNOTSxzQkFETSxHQUNLLEVBREw7QUFFVkEsc0JBQVEsR0FBR04sTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLHVCQUFJSSx3REFBTyxDQUFDQyxPQUFSLEdBQWtCQyxVQUFsQiwrQ0FBb0VOLENBQUMsQ0FBQ08s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QUFDa0MsSUFBUCxDQUFZL0IsQ0FBQyxDQUFDZ0MsSUFBRixFQUFaO0FBQ0QsZUFGRDtBQUdELGFBUEcsQ0FGUjs7QUFBQTtBQUFBLDhDQVVTO0FBQ0xDLG1CQUFLLEVBQUU7QUFBRXBDLHNCQUFNLEVBQU5BO0FBQUY7QUFERixhQVZUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mZTBhZjhkMmMyYzBiNDRhM2I2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZUFwcCBmcm9tIFwiLi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHsgZ3Vlc3RzIH0pID0+IHtcclxuICBjb25zdCBwaWNzUmVmID0gZ3Vlc3RzPy5tYXAoaSA9PiB1c2VSZWYoKSk7XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmIChndWVzdHMpIHtcclxuICAgICAgbGV0IGltZ0ZpbGVzID0gW107XHJcbiAgICAgIGltZ0ZpbGVzID0gZ3Vlc3RzLm1hcChpID0+IGZpcmVBcHAuc3RvcmFnZSgpLnJlZkZyb21VUkwoYGdzOi8vaG90ZWwtM2MyNDkuYXBwc3BvdC5jb20vaW1hZ2VzLyR7aS5pbWdOYW1lfWApKTtcclxuICAgICAgaW1nRmlsZXMubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgaS5nZXREb3dubG9hZFVSTCgpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgaVtcInByb2ZpbGVQaWNcIl0gPSB1cmw7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBwaWNzUmVmW2pdLmN1cnJlbnQuc3JjID0gaS5wcm9maWxlUGljO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJzcGFjZS15LTQgXCJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHQtOCBwbC04XCI+XHJcbiAgICAgICAgUHJvZmlsZVxyXG4gICAgICA8L2gxPlxyXG4gICAgICB7Z3Vlc3RzID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtcInRhYmxlLWF1dG9cIn0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlByb2ZpbGUgUGljPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlBob25lPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RHJpdmVyIElEIzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17XCJweC04IFwifT5WZWhpY2xlIElEIzwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7Z3Vlc3RzPy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT48aW1nIHJlZj17cGljc1JlZltqXX0gYWx0PVwiZ3Vlc3QncyBpbWFnZVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kucGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kuYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5kcml2ZXJJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5jYXJJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT48TGluayBocmVmPXtcIi9wcm9maWxlL1wiICsgaS5lbWFpbH0+PGE+VmlldzwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+IDogIWVtYWlsICYmIDxwPk5vIHVzZXIgaGFzIHNpZ25lZCB1cCB5ZXQuPC9wPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gIGxldCBndWVzdHMgPSBbXVxyXG4gIGF3YWl0IGZpcmVBcHAuZmlyZXN0b3JlKClcclxuICAgIC5jb2xsZWN0aW9uKFwiZ3Vlc3RcIilcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4ocXVlcnlEYXRhID0+IHtcclxuICAgICAgcXVlcnlEYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgZ3Vlc3RzLnB1c2goaS5kYXRhKCkpO1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGd1ZXN0cyB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==