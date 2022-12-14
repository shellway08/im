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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        select: {
            placeholder: 'V??lj',
            noMatch: 'Ingen tr??ff',
            loading: 'Ladar'
        },
        table: {
            noDataText: 'Ingen data',
            noFilteredDataText: 'Ingen filter data',
            confirmFilter: 'Bekr??fta',
            resetFilter: '??terst??ll filter',
            clearFilter: 'Rensa filter'
        },
        datepicker: {
            selectDate: 'V??lj datum',
            selectTime: 'V??lj tidpunkt',
            startTime: 'Start tid',
            endTime: 'Slut tid',
            clear: 'Rensa',
            ok: 'Ok',
            month: 'M??nad',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Mars',
            month4: 'April',
            month5: 'Maj',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Augusti',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'December',
            year: '??r',
            weeks: {
                sun: 'S??n',
                mon: 'M??n',
                tue: 'Tis',
                wed: 'Ons',
                thu: 'Tor',
                fri: 'Fre',
                sat: 'L??r'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Maj',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'K??lla',
                target: 'M??l'
            },
            filterPlaceholder: 'S??k h??r',
            notFoundText: 'Hittade inte'
        },
        modal: {
            okText: 'Ok',
            cancelText: 'Avbryt'
        },
        poptip: {
            okText: 'Ok',
            cancelText: 'Avbryt'
        },
        page: {
            prev: 'F??reg??ende sida',
            next: 'N??sta sida',
            total: 'Totalt',
            item: 'objekt',
            items: 'objekt',
            prev5: 'F??reg??ende 5 sidor',
            next5: 'N??sta 5 sidor',
            page: '/page',
            goto: 'G?? till',
            p: ''
        },
        rate: {
            star: 'Stj??rna',
            stars: 'Stj??rnor'
        },
        tree: {
            emptyText: 'Ingen data'
        }
    }
};

/***/ })

/******/ });
});