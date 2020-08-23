(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ DetailsWithErrorBoundary; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@frontendmasters/pet/index.js
var pet = __webpack_require__(339);
var pet_default = /*#__PURE__*/__webpack_require__.n(pet);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 10 modules
var core_browser_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/Carousel.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Carousel_Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);
    _this.state = {
      photos: [],
      active: 0
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "handleIndexClick",
    value: function handleIndexClick(e) {
      this.setState({
        active: +e.target.dataset.index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          photos = _this$state.photos,
          active = _this$state.active;
      return Object(core_browser_esm["a" /* jsx */])("div", {
        className: "carousel"
      }, Object(core_browser_esm["a" /* jsx */])("img", {
        src: photos[active],
        alt: "animal"
      }), Object(core_browser_esm["a" /* jsx */])("div", {
        className: "carousel-smaller"
      }, photos.map(function (photo, index) {
        return Object(core_browser_esm["a" /* jsx */])("img", {
          key: photo,
          onClick: function onClick(e) {
            return _this2.handleIndexClick(e);
          },
          "data-index": index,
          src: photo,
          className: index === active ? 'active' : '',
          alt: "animal-thumbnail"
        });
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref) {
      var media = _ref.media;
      var photos = ['http"//placecorgi.com/600/600'];

      if (media.length) {
        photos = media.map(function (_ref2) {
          var large = _ref2.large;
          return large;
        });
      }

      return {
        photos: photos
      };
    }
  }]);

  return Carousel;
}(react["Component"]);

/* harmony default export */ var components_Carousel = (Carousel_Carousel);
// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 3 modules
var es = __webpack_require__(51);

// CONCATENATED MODULE: ./src/components/ErrorBoundary.js
function ErrorBoundary_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorBoundary_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorBoundary_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorBoundary_typeof(obj); }

function ErrorBoundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorBoundary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorBoundary_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorBoundary_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorBoundary_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorBoundary_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorBoundary_setPrototypeOf(subClass, superClass); }

function ErrorBoundary_setPrototypeOf(o, p) { ErrorBoundary_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBoundary_setPrototypeOf(o, p); }

function ErrorBoundary_createSuper(Derived) { var hasNativeReflectConstruct = ErrorBoundary_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ErrorBoundary_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ErrorBoundary_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ErrorBoundary_possibleConstructorReturn(this, result); }; }

function ErrorBoundary_possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorBoundary_assertThisInitialized(self); }

function ErrorBoundary_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorBoundary_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ErrorBoundary_getPrototypeOf(o) { ErrorBoundary_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBoundary_getPrototypeOf(o); }





var ErrorBoundary_ErrorBoundary = /*#__PURE__*/function (_Component) {
  ErrorBoundary_inherits(ErrorBoundary, _Component);

  var _super = ErrorBoundary_createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    ErrorBoundary_classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      redirect: false
    };
    return _this;
  }

  ErrorBoundary_createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.error('ErrorBoundary caught and err', error, info);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      var _this2 = this;

      if (this.state.redirect) {
        return Object(core_browser_esm["a" /* jsx */])(es["b" /* Redirect */], {
          to: "/"
        });
      }

      if (this.state.hasError) {
        setTimeout(function () {
          _this2.setState({
            redirect: true
          }), 5000;
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return Object(core_browser_esm["a" /* jsx */])("h1", null, "There was an error with this listing. ", Object(core_browser_esm["a" /* jsx */])(es["a" /* Link */], {
          to: "/"
        }, "Click Here"), ' ', "or wait to go back 5 seconds.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react["Component"]);

/* harmony default export */ var components_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// CONCATENATED MODULE: ./src/components/Details.js
function Details_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Details_typeof = function _typeof(obj) { return typeof obj; }; } else { Details_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Details_typeof(obj); }

function Details_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Details_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Details_createClass(Constructor, protoProps, staticProps) { if (protoProps) Details_defineProperties(Constructor.prototype, protoProps); if (staticProps) Details_defineProperties(Constructor, staticProps); return Constructor; }

function Details_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Details_setPrototypeOf(subClass, superClass); }

function Details_setPrototypeOf(o, p) { Details_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Details_setPrototypeOf(o, p); }

function Details_createSuper(Derived) { var hasNativeReflectConstruct = Details_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Details_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Details_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Details_possibleConstructorReturn(this, result); }; }

function Details_possibleConstructorReturn(self, call) { if (call && (Details_typeof(call) === "object" || typeof call === "function")) { return call; } return Details_assertThisInitialized(self); }

function Details_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Details_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Details_getPrototypeOf(o) { Details_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Details_getPrototypeOf(o); }







var Modal = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 1417));
});

var Details_Details = /*#__PURE__*/function (_Component) {
  Details_inherits(Details, _Component);

  var _super = Details_createSuper(Details);

  function Details(props) {
    var _this;

    Details_classCallCheck(this, Details);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      showModal: false
    };
    return _this;
  }

  Details_createClass(Details, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      pet_default.a.animal(this.props.id).then(function (_ref) {
        var animal = _ref.animal;

        _this2.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: "".concat(animal.contact.address.city, ", ").concat(animal.contact.address.state),
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }, {
    key: "adopt",
    value: function adopt() {
      Object(es["d" /* navigate */])(this.state.url);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loading) {
        return Object(core_browser_esm["a" /* jsx */])("h1", null, "Loading...");
      }

      var _this$state = this.state,
          animal = _this$state.animal,
          breed = _this$state.breed,
          location = _this$state.location,
          description = _this$state.description,
          name = _this$state.name,
          media = _this$state.media,
          showModal = _this$state.showModal;
      return Object(core_browser_esm["a" /* jsx */])("div", {
        className: "details"
      }, Object(core_browser_esm["a" /* jsx */])(components_Carousel, {
        media: media
      }), Object(core_browser_esm["a" /* jsx */])("div", null, Object(core_browser_esm["a" /* jsx */])("h1", null, name), Object(core_browser_esm["a" /* jsx */])("h2", null, "".concat(animal, " - ").concat(breed, " - ").concat(location), " "), Object(core_browser_esm["a" /* jsx */])("button", {
        onClick: function onClick() {
          return _this3.toggleModal();
        }
      }, "Adopt ", name), Object(core_browser_esm["a" /* jsx */])("p", null, description), showModal ? Object(core_browser_esm["a" /* jsx */])(Modal, null, Object(core_browser_esm["a" /* jsx */])("div", null, Object(core_browser_esm["a" /* jsx */])("h1", null, "Would you like to adopt ", name, "?"), Object(core_browser_esm["a" /* jsx */])("div", {
        className: "buttons"
      }, Object(core_browser_esm["a" /* jsx */])("button", {
        onClick: function onClick() {
          return _this3.adopt();
        }
      }, "Yes"), Object(core_browser_esm["a" /* jsx */])("button", {
        onClick: function onClick() {
          return _this3.toggleModal();
        }
      }, "No")))) : null));
    }
  }]);

  return Details;
}(react["Component"]);

function DetailsWithErrorBoundary(props) {
  return Object(core_browser_esm["a" /* jsx */])(components_ErrorBoundary, null, Object(core_browser_esm["a" /* jsx */])(Details_Details, props));
}

/***/ })

}]);