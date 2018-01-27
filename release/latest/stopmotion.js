(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Scene"));
	else if(typeof define === 'function' && define.amd)
		define("StopMotion", ["Scene"], factory);
	else if(typeof exports === 'object')
		exports["StopMotion"] = factory(require("Scene"));
	else
		root["StopMotion"] = factory(root["Scene"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StopMotion__ = __webpack_require__(2);


module.exports = __WEBPACK_IMPORTED_MODULE_0__StopMotion__["a" /* default */];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StopMotion;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scenejs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scenejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scenejs__);


const interval = 0.00001;

function stopMotion(item, start = 0, end, count) {
	if (!count || count < 1) {
		return;
	}
	const depth = (end - start) / count;

	for (let i = 1; i <= count - 1; ++i) {
		item.setFrame(start + i * depth, item.getNowFrame(start + i * depth));
	}
	for (let i = 1; i <= count; ++i) {
		item.setFrame(start + i * depth - interval, item.getFrame(start + (i - 1) * depth));
	}
}

function test(inst, target) {
	if (Array.isArray(inst)) {
		return inst.indexOf(target);
	} else if (typeof inst === "string") {
		return inst === target;
	} else {
		return inst.test(target);
	}
}
function StopMotion(obj, options = {}) {
	const { include, exclude } = options;

	if (obj instanceof __WEBPACK_IMPORTED_MODULE_0_scenejs___default.a) {
		const items = obj.items;

		for (const id in items) {
			const item = items[id];

			if (include && !test(include, id) || exclude && test(exclude, id)) {
				continue;
			}
			stopMotion(item, 0, item.getDuration(), options.count);
		}
	} else if (obj instanceof __WEBPACK_IMPORTED_MODULE_0_scenejs__["SceneItem"]) {
		stopMotion(obj, 0, obj.getDuration(), options.count);
	} else {
		const scene = new __WEBPACK_IMPORTED_MODULE_0_scenejs___default.a(obj, options);

		return StopMotion(scene, options);
	}
	return obj;
}

__WEBPACK_IMPORTED_MODULE_0_scenejs___default.a.prototype.setStopMotion = function setStopMotion(options) {
	StopMotion(this, options);
	return this;
};

__WEBPACK_IMPORTED_MODULE_0_scenejs__["SceneItem"].prototype.setStopMotion = function setStopMotion(options) {
	StopMotion(this, options);
	return this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});