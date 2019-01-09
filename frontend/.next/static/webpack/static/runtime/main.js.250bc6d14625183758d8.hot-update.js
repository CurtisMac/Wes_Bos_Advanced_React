webpackHotUpdate("static/runtime/main.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js?774e":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js?d2d5");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js?c8bb":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js?54a1");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js?7c64":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js?3d02":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js?774e");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js?c8bb");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js?d8f0":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js?4db1":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js?7c64");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js?3d02");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js?d8f0");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js?d2d5":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js?549b");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js?54a1":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js?95d5");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js?20fd":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js?95d5":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js?549b":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js?20fd");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/next/dist/client/webpack-hot-middleware-client.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/webpack-hot-middleware-client.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js?4db1"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

__webpack_require__(/*! event-source-polyfill */ "./node_modules/event-source-polyfill/src/eventsource.js");

var _hotDevClient = _interopRequireDefault(__webpack_require__(/*! ./dev-error-overlay/hot-dev-client */ "./node_modules/next/dist/client/dev-error-overlay/hot-dev-client.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../lib/router */ "./node_modules/next/dist/lib/router/index.js"));

var handlers = {
  reload: function reload(route) {
    // If the App component changes we have to reload the current route, this is handled by hot-self-accept-loader
    // So we just return
    if (route === '/_app') {
      return;
    }

    if (route === '/_error') {
      var _arr = (0, _keys.default)(_router.default.components);

      for (var _i = 0; _i < _arr.length; _i++) {
        var r = _arr[_i];
        var err = _router.default.components[r].err;

        if (err) {
          // reload all error routes
          // which are expected to be errors of '/_error' routes
          _router.default.reload(r);
        }
      }

      return;
    } // Since _document is server only we need to reload the full page when it changes.


    if (route === '/_document') {
      window.location.reload();
      return;
    }

    _router.default.reload(route);
  },
  change: function change(route) {
    // If the App component changes we have to reload the current route, this is handled by hot-self-accept-loader
    // So we just return
    if (route === '/_app') {
      return;
    }

    var _ref = _router.default.components[route] || {},
        err = _ref.err,
        Component = _ref.Component;

    if (err) {
      // reload to recover from runtime errors
      _router.default.reload(route);
    }

    if (_router.default.route !== route) {
      // If this is a not a change for a currently viewing page.
      // We don't need to worry about it.
      return;
    }

    if (!Component) {
      // This only happens when we create a new page without a default export.
      // If you removed a default export from a exising viewing page, this has no effect.
      console.warn("Hard reloading due to no default component in page: ".concat(route));
      window.location.reload();
    }
  }
};

var _default = function _default(_ref2) {
  var assetPrefix = _ref2.assetPrefix;
  var options = {
    path: "".concat(assetPrefix, "/_next/webpack-hmr")
  };
  var devClient = (0, _hotDevClient.default)(options);
  devClient.subscribeToHmrEvent(function (obj) {
    var fn = handlers[obj.action];

    if (fn) {
      var data = obj.data || [];
      fn.apply(void 0, (0, _toConsumableArray2.default)(data));
    } else {
      throw new Error('Unexpected action ' + obj.action);
    }
  });
  return devClient;
};

exports.default = _default;

/***/ })

})
//# sourceMappingURL=main.js.250bc6d14625183758d8.hot-update.js.map