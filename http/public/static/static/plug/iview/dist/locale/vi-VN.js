(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iview/locale", [], factory);
	else if(typeof exports === 'object')
		exports["iview/locale"] = factory();
	else
		root["iview/locale"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "/dist/locale/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        select: {
            placeholder: 'Ch???n',
            noMatch: 'Kh??ng t??m th???y',
            loading: '??ang t???i'
        },
        table: {
            noDataText: 'Kh??ng c?? d??? li???u',
            noFilteredDataText: 'Kh??ng c?? d??? li???u l???c',
            confirmFilter: 'X??c nh???n',
            resetFilter: 'L??m l???i',
            clearFilter: 'X??a h???t'
        },
        datepicker: {
            selectDate: 'Ch???n ng??y',
            selectTime: 'Ch???n gi???',
            startTime: 'Ng??y b???t ?????u',
            endTime: 'Ng??y k???t th??c',
            clear: 'X??a',
            ok: '?????ng ??',
            month: '',
            month1: 'Th??ng 1',
            month2: 'Th??ng 2',
            month3: 'Th??ng 3',
            month4: 'Th??ng 4',
            month5: 'Th??ng 5',
            month6: 'Th??ng 6',
            month7: 'Th??ng 7',
            month8: 'Th??ng 8',
            month9: 'Th??ng 9',
            month10: 'Th??ng 10',
            month11: 'Th??ng 11',
            month12: 'Th??ng 12',
            year: '',
            weeks: {
                sun: 'CN',
                mon: 'T2',
                tue: 'T3',
                wed: 'T4',
                thu: 'T5',
                fri: 'T6',
                sat: 'T7'
            },
            months: {
                m1: 'Th.1',
                m2: 'Th.2',
                m3: 'Th.3',
                m4: 'Th.4',
                m5: 'Th.5',
                m6: 'Th.6',
                m7: 'Th.7',
                m8: 'Th.8',
                m9: 'Th.9',
                m10: 'Th.10',
                m11: 'Th.11',
                m12: 'Th.12'
            }
        },
        transfer: {
            titles: {
                source: 'Ngu???n',
                target: '????ch'
            },
            filterPlaceholder: 'Nh???p t??? kh??a',
            notFoundText: 'Kh??ng t??m th???y'
        },
        modal: {
            okText: '?????ng ??',
            cancelText: 'H???y b???'
        },
        poptip: {
            okText: '?????ng ??',
            cancelText: 'H???y b???'
        },
        page: {
            prev: 'Trang tr?????c',
            next: 'Trang k???',
            total: 'T???ng',
            item: 'k???t qu???',
            items: 'k???t qu???',
            prev5: '5 trang tr?????c',
            next5: '5 trang k???',
            page: '/trang',
            goto: 'T???i trang',
            p: ''
        },
        rate: {
            star: 'Sao',
            stars: 'Sao'
        },
        tree: {
            emptyText: 'Kh??ng c?? d??? li???u'
        }
    }
};

/***/ })

/******/ });
});