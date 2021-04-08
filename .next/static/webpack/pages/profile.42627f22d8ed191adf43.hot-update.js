webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZ3Vlc3RzIiwicGljc1JlZiIsIm1hcCIsImkiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpbWdGaWxlcyIsImZpcmVBcHAiLCJzdG9yYWdlIiwicmVmRnJvbVVSTCIsImltZ05hbWUiLCJqIiwiZ2V0RG93bmxvYWRVUkwiLCJ0aGVuIiwidXJsIiwiY3VycmVudCIsInNyYyIsInByb2ZpbGVQaWMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lIiwiYWRkcmVzcyIsImVtYWlsIiwiZHJpdmVySWQiLCJjYXJJZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFnQjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM5QixNQUFNQyxPQUFPLEdBQUdELE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFRSxHQUFSLElBQVksVUFBQUMsQ0FBQztBQUFBOztBQUFBLFdBQUlDLG9EQUFNLEVBQVY7QUFBQSxHQUFiLGtDQUFoQjtBQUNBQyx5REFBUywwWEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUixnQkFBSUwsTUFBSixFQUFZO0FBQ05NLHNCQURNLEdBQ0ssRUFETDtBQUVWQSxzQkFBUSxHQUFHTixNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsdUJBQUlJLHdEQUFPLENBQUNDLE9BQVIsR0FBa0JDLFVBQWxCLCtDQUFvRU4sQ0FBQyxDQUFDTyxPQUF0RSxFQUFKO0FBQUEsZUFBWixDQUFYO0FBQ0FKLHNCQUFRLENBQUNKLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQUlRLENBQUosRUFBVTtBQUNyQlIsaUJBQUMsQ0FBQ1MsY0FB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QkFBUyxFQUFFLFdBQWY7QUFBQSx3QkFBNkJwQixDQUFDLENBQUNxQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBSSx1QkFBUyxFQUFFLFdBQWY7QUFBQSxxQ0FBNEIscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFFLGNBQWNyQixDQUFDLENBQUNtQixLQUE1QjtBQUFBLHVDQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQSxhQUFTRyxJQUFJLENBQUNDLFNBQUwsQ0FBZXZCLENBQWYsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBYUQsU0FkQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxHQWdDTSxDQUFDbUIsS0FBRCxpQkFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0F2REQ7O0lBQU12QixPOztLQUFBQSxPOztBQXdEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS40MjYyN2YyMmQ4ZWQxOTFhZGY0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZUFwcCBmcm9tIFwiLi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHsgZ3Vlc3RzIH0pID0+IHtcclxuICBjb25zdCBwaWNzUmVmID0gZ3Vlc3RzPy5tYXAoaSA9PiB1c2VSZWYoKSk7XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmIChndWVzdHMpIHtcclxuICAgICAgbGV0IGltZ0ZpbGVzID0gW107XHJcbiAgICAgIGltZ0ZpbGVzID0gZ3Vlc3RzLm1hcChpID0+IGZpcmVBcHAuc3RvcmFnZSgpLnJlZkZyb21VUkwoYGdzOi8vaG90ZWwtM2MyNDkuYXBwc3BvdC5jb20vaW1hZ2VzLyR7aS5pbWdOYW1lfWApKTtcclxuICAgICAgaW1nRmlsZXMubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgaS5nZXREb3dubG9hZFVSTCgpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgaVtcInByb2ZpbGVQaWNcIl0gPSB1cmw7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBwaWNzUmVmW2pdLmN1cnJlbnQuc3JjID0gaS5wcm9maWxlUGljO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJzcGFjZS15LTQgXCJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHQtOCBwbC04XCI+XHJcbiAgICAgICAgUHJvZmlsZVxyXG4gICAgICA8L2gxPlxyXG4gICAgICB7Z3Vlc3RzID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtcInRhYmxlLWF1dG9cIn0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlByb2ZpbGUgUGljPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PlBob25lPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtcInB4LTggXCJ9PkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e1wicHgtOCBcIn0+RHJpdmVyIElEIzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17XCJweC04IFwifT5WZWhpY2xlIElEIzwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7Z3Vlc3RzPy5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17SlNPTi5zdHJpbmdpZnkoaSl9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT48aW1nIHJlZj17cGljc1JlZltqXX0gYWx0PVwiZ3Vlc3QncyBpbWFnZVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kucGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17XCJweC04IHB5LTRcIn0+e2kuYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5kcml2ZXJJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT57aS5jYXJJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtcInB4LTggcHktNFwifT48TGluayBocmVmPXtcIi9wcm9maWxlL1wiICsgaS5lbWFpbH0+PGE+VmlldzwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+IDogIWVtYWlsICYmIDxwPk5vIHVzZXIgaGFzIHNpZ25lZCB1cCB5ZXQuPC9wPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICBsZXQgZ3Vlc3RzID0gW11cclxuICBhd2FpdCBmaXJlQXBwLmZpcmVzdG9yZSgpXHJcbiAgICAuY29sbGVjdGlvbihcImd1ZXN0XCIpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKHF1ZXJ5RGF0YSA9PiB7XHJcbiAgICAgIHF1ZXJ5RGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgIGd1ZXN0cy5wdXNoKGkuZGF0YSgpKTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBndWVzdHMgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=