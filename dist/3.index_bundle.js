(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




var Modal = function Modal(_ref) {
  var children = _ref.children;
  var elRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  if (!elRef.current) {
    var div = document.createElement('div');
    elRef.current = div;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);
    return function () {
      return modalRoot.removeChild(elRef.current);
    };
  }, []);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[/* jsx */ "a"])("div", null, children), elRef.current);
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

}]);