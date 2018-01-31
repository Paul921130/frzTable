/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'frzTable';
var ModuleDefaults = {
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 3 // [number] 
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function whenClick($element) {
        // console.log($element)
    }
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
    function Module(ele, options) {
        _classCallCheck(this, Module);

        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.smallBox = $('.content_box2');
        this.smallWidth = $('.content_box2').width();
        this.slide_right = $('.slide_right_d');
        this.slide_left = $('.slide_left_d');
    }

    _createClass(Module, [{
        key: 'init',
        value: function init() {
            console.log('媽的跑兩次!');
            var slider = ModuleDefaults.count.show;

            var moveStep = ModuleDefaults.count.slide;

            var Defaultshow = ModuleDefaults.count.show; //show的數字不會變

            var srcollSpeed = ModuleDefaults.speed * 1000;
            // console.log(show-moveStep);
            $('.content_box2').attr("style", 'left: 0px;');

            // console.log(this.smallWidth);
            //正在處理中!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // slide為1的時候會有問題
            this.slide_left.on('click', function () {
                if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
                    slider = slider - moveStep;
                    Module.prototype.goRightScroll();
                    $(".dotCircle").removeClass("dotSelect"); //點點測試中
                    $(".dotCircle:nth-child(" + (slider - 2) + ")").addClass("dotSelect");
                } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
                    console.log('嘿!我在這!!!!!');
                    var srcollSpeed = ModuleDefaults.speed * 1000;
                    var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
                    $(".content_box2").animate({
                        left: "+=" + srcollWidth + ""
                    }, srcollSpeed);
                    slider = Defaultshow;
                    $(".dotCircle").removeClass("dotSelect"); //點點測試中
                    $(".dotCircle:nth-child(" + (slider - 2) + ")").addClass("dotSelect");
                    return this;
                }
            });
            this.slide_left.on('click', function () {
                if (moveStep === 1 && slider - Defaultshow > 0) {
                    slider = slider - moveStep;
                    Module.prototype.goRightScroll();
                    $(".dotCircle").removeClass("dotSelect"); //點點測試中
                    $(".dotCircle:nth-child(" + (slider - 2) + ")").addClass("dotSelect");
                }
            });

            //處理完成95%!!!!!!!!!!!!!!
            this.slide_right.on('click', function () {
                if (slider + moveStep <= 7) {
                    slider = slider + moveStep;

                    Module.prototype.goLeftScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
                    $(".dotCircle").removeClass("dotSelect"); //點點測試中
                    $(".dotCircle:nth-child(" + (slider - 2) + ")").addClass("dotSelect");
                } else if (7 - slider > 0) {
                    console.log('天啊!!!!今天好冷!');
                    var srcollWidth = ($('.content_box2').width() + 2) * (7 - slider); //1px的border的一半
                    $(".content_box2").animate({
                        left: "-=" + srcollWidth + ""
                    }, srcollSpeed);

                    slider = slider + (7 - slider);
                    $(".dotCircle").removeClass("dotSelect"); //點點測試中
                    $(".dotCircle:nth-child(" + (slider - 2) + ")").addClass("dotSelect");
                    return this;
                };
            });
            this.setShow();
            //判定瀏覽器寬度設定格子數量	
            $(window).resize(function () {
                // location.reload();//改變window尺寸時,重整畫面!
                var widowWidth = $(window).width();
                console.log(widowWidth);
                $(".content_box2").width(BoxShow);
                if (widowWidth <= 968) {
                    Module.prototype.changeShow();
                    return this;
                } else {
                    var BoxShow = $(".main_box").width() / 7 - 2;
                    $(".content_box2").width(BoxShow);
                    return this;
                }
            }); //判定瀏覽器寬度設定格子數
            this.selectBox(); //表格選擇function
            this.selectDot();
            // this.changeShow();
            return this;
        }
    }, {
        key: 'methods',
        value: function methods() {
            return this;
        }
    }, {
        key: 'frzTable',
        value: function frzTable() {
            return this;
        }
    }, {
        key: 'selectBox',
        value: function selectBox() {
            $(".content_box2:not(.boxHead)").on('click', function () {
                $(".content_box2").removeClass('select').removeClass('hight_light');
                $(this).addClass('select').siblings().addClass('hight_light');
                var selectIndex = $('.select').index() + 1; //:nth-child()的索引值從1開始
                $(".content_box2:nth-child(" + selectIndex + ")").addClass("hight_light");
                $(".boxHead:nth-child(" + selectIndex + ")").removeClass("hight_light");
                $(this).removeClass('hight_light');
            });
            return this;
        }
        //判定瀏覽器寬度設定格子數量

    }, {
        key: 'setShow',
        value: function setShow() {
            var widowWidth = $(window).width();
            if (widowWidth >= 968) {
                var BoxShow = $(".main_box").width() / 7 - 2; //左右各1px的border!!!!
                var widowWidth = $(window).width();
                $(".content_box2").width(BoxShow);
            } else {
                Module.prototype.changeShow();
                return this;
            }
        }
    }, {
        key: 'changeShow',
        value: function changeShow() {
            var borderSpace = ModuleDefaults.count.show * 2;
            var BoxShow = ($(".main_box").width() - borderSpace) / ModuleDefaults.count.show;
            $(".content_box2").width(BoxShow);
            return this;
        }
    }, {
        key: 'goRightScroll',
        value: function goRightScroll() {
            var srcollSpeed = ModuleDefaults.speed * 1000;
            var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
            $(".content_box2").animate({
                left: "+=" + srcollWidth + ""
            }, srcollSpeed);
            return this;
        }
    }, {
        key: 'goLeftScroll',
        value: function goLeftScroll() {
            var srcollSpeed = ModuleDefaults.speed * 1000;
            var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
            $(".content_box2").animate({
                left: "-=" + srcollWidth + ""
            }, srcollSpeed);
            return this;
        }
    }, {
        key: 'selectDot',
        value: function selectDot() {
            $(".content_box2:not(.boxHead)").on('click', function () {
                $(".dotCircle").removeClass("dotSelect");
                var selectIndex = $('.select').index() + 1;
                $(".dotCircle:nth-child(" + selectIndex + ")").addClass("dotSelect");
            });
            return this;
        }
    }]);

    return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);