(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@frontendmasters/pet/index.js
var _frontendmasters_pet = __webpack_require__(339);
var pet_default = /*#__PURE__*/__webpack_require__.n(_frontendmasters_pet);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 3 modules
var es = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 10 modules
var core_browser_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/Pet.js



function Pet(_ref) {
  var name = _ref.name,
      animal = _ref.animal,
      breed = _ref.breed,
      media = _ref.media,
      location = _ref.location,
      id = _ref.id;
  var hero = 'http://placecorgi.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  return Object(core_browser_esm["a" /* jsx */])(es["a" /* Link */], {
    to: "/details/".concat(id),
    className: "pet"
  }, Object(core_browser_esm["a" /* jsx */])("div", {
    className: "image-container"
  }, Object(core_browser_esm["a" /* jsx */])("img", {
    src: hero,
    alt: name
  })), Object(core_browser_esm["a" /* jsx */])("div", {
    className: "info"
  }, Object(core_browser_esm["a" /* jsx */])("h1", null, name), Object(core_browser_esm["a" /* jsx */])("h2", null, "".concat(animal, " - ").concat(breed, " - ").concat(location))));
}
// CONCATENATED MODULE: ./src/components/Results.js




var Results_Results = function Results(_ref) {
  var pets = _ref.pets;
  return Object(core_browser_esm["a" /* jsx */])("div", {
    className: "search"
  }, pets.length === 0 ? Object(core_browser_esm["a" /* jsx */])("h1", null, "No Pets Found") : pets.map(function (pet) {
    return Object(core_browser_esm["a" /* jsx */])(Pet, {
      animal: pet.animal,
      key: pet.id,
      name: pet.name,
      breed: pet.breeds.primary,
      media: pet.photos,
      location: "".concat(pet.contact.address.city, ". ").concat(pet.contact.address.state),
      id: pet.id
    });
  }));
};

/* harmony default export */ var components_Results = (Results_Results);
// CONCATENATED MODULE: ./src/components/useDropdown.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useDropdown_useDropdown = function useDropdown(label, defaultState, options) {
  var _useState = Object(react["useState"])(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var id = "use-dropdown-".concat(label);

  var Dropdown = function Dropdown() {
    return Object(core_browser_esm["a" /* jsx */])("label", {
      htmlFor: id
    }, label, Object(core_browser_esm["a" /* jsx */])("select", {
      id: id,
      value: state,
      onChange: function onChange(e) {
        return setState(e.target.value);
      },
      onBlur: function onBlur(e) {
        return setState(e.target.value);
      } // disable={options.length === 0}

    }, Object(core_browser_esm["a" /* jsx */])("option", null, "All"), options.map(function (item) {
      return Object(core_browser_esm["a" /* jsx */])("option", {
        key: item,
        value: item
      }, item);
    })));
  };

  return [state, Dropdown, setState];
};

/* harmony default export */ var components_useDropdown = (useDropdown_useDropdown);
// CONCATENATED MODULE: ./src/components/SearchParams.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SearchParams_slicedToArray(arr, i) { return SearchParams_arrayWithHoles(arr) || SearchParams_iterableToArrayLimit(arr, i) || SearchParams_unsupportedIterableToArray(arr, i) || SearchParams_nonIterableRest(); }

function SearchParams_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchParams_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchParams_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchParams_arrayLikeToArray(o, minLen); }

function SearchParams_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchParams_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchParams_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SearchParams_SearchParams = function SearchParams() {
  var _useState = Object(react["useState"])('Seattle, WA'),
      _useState2 = SearchParams_slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = SearchParams_slicedToArray(_useState3, 2),
      breeds = _useState4[0],
      setBreeds = _useState4[1];

  var _useDropdown = components_useDropdown('Animal', 'dog', _frontendmasters_pet["ANIMALS"]),
      _useDropdown2 = SearchParams_slicedToArray(_useDropdown, 2),
      animal = _useDropdown2[0],
      AnimalDropdown = _useDropdown2[1];

  var _useDropdown3 = components_useDropdown('Breed', '', breeds),
      _useDropdown4 = SearchParams_slicedToArray(_useDropdown3, 3),
      breed = _useDropdown4[0],
      BreedDropdown = _useDropdown4[1],
      setBreed = _useDropdown4[2];

  var _useState5 = Object(react["useState"])([]),
      _useState6 = SearchParams_slicedToArray(_useState5, 2),
      pets = _useState6[0],
      setPets = _useState6[1];

  function requestPets() {
    return _requestPets.apply(this, arguments);
  } //disconnected from when the render happens. Happens ater render


  function _requestPets() {
    _requestPets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$pet$animals, animals;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pet_default.a.animals({
                location: location,
                breed: breed,
                type: animal
              });

            case 2:
              _yield$pet$animals = _context.sent;
              animals = _yield$pet$animals.animals;
              setPets(animals || []);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _requestPets.apply(this, arguments);
  }

  Object(react["useEffect"])(function () {
    setBreeds([]);
    setBreed('');
    pet_default.a.breeds(animal).then(function (_ref) {
      var apiBreeds = _ref.breeds;
      var breedStrings = apiBreeds.map(function (_ref2) {
        var name = _ref2.name;
        return name;
      });
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  return Object(core_browser_esm["a" /* jsx */])("div", {
    className: "search-params"
  }, Object(core_browser_esm["a" /* jsx */])("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      requestPets();
    }
  }, Object(core_browser_esm["a" /* jsx */])("label", {
    htmlFor: "location"
  }, "location", Object(core_browser_esm["a" /* jsx */])("input", {
    id: "location",
    value: location,
    placeholder: "Location",
    onChange: function onChange(e) {
      return setLocation(e.target.value);
    }
  })), Object(core_browser_esm["a" /* jsx */])(AnimalDropdown, null), Object(core_browser_esm["a" /* jsx */])(BreedDropdown, null), Object(core_browser_esm["a" /* jsx */])("button", null, "Submit")), Object(core_browser_esm["a" /* jsx */])(components_Results, {
    pets: pets
  }));
};

/* harmony default export */ var components_SearchParams = __webpack_exports__["default"] = (SearchParams_SearchParams);

/***/ })

}]);