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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        select: {
            placeholder: 'Se??',
            noMatch: 'E??le??en veri yok',
            loading: 'y??kleme'
        },
        table: {
            noDataText: 'Veri Yok',
            noFilteredDataText: 'S??z??len veri yok',
            confirmFilter: 'Onayla',
            resetFilter: 'S??f??rla',
            clearFilter: 'Hepsi'
        },
        datepicker: {
            selectDate: 'Tarih se??',
            selectTime: 'Zaman se??',
            startTime: 'Ba??lang????',
            endTime: 'Biti??e',
            clear: 'Temizle',
            ok: 'Tamam',
            month: '',
            month1: 'Ocak',
            month2: '??ubat',
            month3: 'Mart',
            month4: 'Nisan',
            month5: 'May??s',
            month6: 'Haziran',
            month7: 'Temmuz',
            month8: 'A??ustos',
            month9: 'Eyl??l',
            month10: 'Ekim',
            month11: 'Kas??m',
            month12: 'Aral??k',
            year: '',
            weeks: {
                sun: 'Paz',
                mon: 'Pzt',
                tue: 'Sal',
                wed: '??ar',
                thu: 'Per',
                fri: 'Cum',
                sat: 'Cmt'
            },
            months: {
                m1: 'Oca',
                m2: '??ub',
                m3: 'Mar',
                m4: 'Nis',
                m5: 'May',
                m6: 'Haz',
                m7: 'Tem',
                m8: 'A??u',
                m9: 'Eyl',
                m10: 'Ekm',
                m11: 'Kas',
                m12: 'Ara'
            }
        },
        transfer: {
            titles: {
                source: 'Kaynak',
                target: 'Hedef'
            },
            filterPlaceholder: 'Arama yap??n',
            notFoundText: 'Bulunamad??'
        },
        modal: {
            okText: 'Tamam',
            cancelText: '??ptal'
        },
        poptip: {
            okText: 'Tamam',
            cancelText: '??ptal'
        },
        page: {
            prev: '??nceki',
            next: 'Sonraki',
            total: 'Toplam',
            item: '????e',
            items: '????eler',
            prev5: '??nceki 5 Sayfa',
            next5: 'Sonraki 5 Sayfa',
            page: '/sayfa',
            goto: 'Git',
            p: ''
        },
        rate: {
            star: 'Y??ld??z',
            stars: 'Y??ld??z'
        },
        tree: {
            emptyText: 'Veri Yok'
        }
    }
};

/***/ })

/******/ });
});