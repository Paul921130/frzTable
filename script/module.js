const ModuleName = 'frzTable';
const ModuleDefaults = {
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 2, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 3 // [number] 
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function($element) {
        // console.log($element)
    }
};
const ModuleReturns = ['output', 'methods'];

class Module {
    constructor(ele, options) {
        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.smallBox = $('.content_box2');
        this.smallWidth = $('.content_box2').width();
        this.slide_right = $('.slide_right');
        this.slide_left = $('.slide_left');
    }
    init() {
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $content_box2 = $this.find('.content_box2');
        var $slide_right = $this.find('.slide_right');
        var $slider_left = $this.find('.slide_left');

        var slider = ModuleDefaults.count.show;

        var moveStep = ModuleDefaults.count.slide;

        var Defaultshow = ModuleDefaults.count.show; //show的數字不會變

        var srcollSpeed = ModuleDefaults.speed * 1000;
        // console.log(show-moveStep);
        $content_box2.attr("style", 'left: 0px;');
        // console.log(this.smallWidth);
        //正在處理中!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // slide為1的時候會有問題
        $slider_left.on('click', function() {
            if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
                slider = slider - moveStep;
                self.goRightScroll();
                // Module.prototype.goRightScroll();
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider- 2) + ")").addClass("dotSelect");
            } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
                console.log('嘿!我在這!!!!!')
                var srcollSpeed = ModuleDefaults.speed * 1000;
                var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
                $content_box2.animate({
                    left: "+=" + srcollWidth + "",
                }, srcollSpeed);
                slider = Defaultshow;
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                return this;
            }
        });
        $slider_left.on('click', function() {
            if (moveStep === 1 && slider - Defaultshow > 0) {
                slider = slider - moveStep;
                self.goRightScroll();
                // Module.prototype.goRightScroll();
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
            }
        });

        //處理完成95%!!!!!!!!!!!!!!
        $slide_right.on('click', function() {
            if (slider + moveStep <= 7) {
                slider = slider + moveStep;
                self.goLeftScroll();
                // Module.prototype.goLeftScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
            } else if (7 - slider > 0) {
                console.log('天啊!!!!今天好冷!');
                var srcollWidth = ($('.content_box2').width() + 2) * (7 - slider) ; //1px的border的一半
                $content_box2.animate({
                    left: "-=" + srcollWidth + "",
                }, srcollSpeed);

                slider = slider + (7 - slider);
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                return this;
            };
        });
        // this.slide_left.on('click', function() {
        //     if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
        //         slider = slider - moveStep;
        //         Module.prototype.goRightScroll();
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
        //         console.log('嘿!我在這!!!!!')
        //         var srcollSpeed = ModuleDefaults.speed * 1000;
        //         var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
        //         $(".content_box2").animate({
        //             left: "+=" + srcollWidth + "",
        //         }, srcollSpeed);
        //         slider = Defaultshow;
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         return this;
        //     }
        // });
        // this.slide_left.on('click', function() {
        //     if (moveStep === 1 && slider - Defaultshow > 0) {
        //         slider = slider - moveStep;
        //         Module.prototype.goRightScroll();
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     }
        // });

        // //處理完成95%!!!!!!!!!!!!!!
        // this.slide_right.on('click', function() {
        //     if (slider + moveStep <= 7) {
        //         slider = slider + moveStep;

        //         Module.prototype.goLeftScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     } else if (7 - slider > 0) {
        //         console.log('天啊!!!!今天好冷!');
        //         var srcollWidth = ($('.content_box2').width() + 2) * (7 - slider) ; //1px的border的一半
        //         $(".content_box2").animate({
        //             left: "-=" + srcollWidth + "",
        //         }, srcollSpeed);

        //         slider = slider + (7 - slider);
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         return this;
        //     };
        // });
        this.setShow();
        //判定瀏覽器寬度設定格子數量
        // 判定瀏覽器寬度設定格子數量 
        $(window).resize(function() {
            //改變window尺寸時,重整畫面!
            var self = this;
            var $this = this.$ele;
            // var $smallBox = $this.find(".content_box2");
            var widowWidth = $(window).width();
            $this.find(".content_box2").width(BoxShow);
            if (widowWidth <= 968) {
                Module.prototype.changeShow();
                return this;
            } else {
                var BoxShow = ($(".main_box").width()) / 7 - 2;
                var BoxShow2 = ($(".main_box").width()) / 5 - 2;
                $(".content_box2_defaule").width(BoxShow);
                $(".content_box2_rel").width(BoxShow2);
                return this;
            }
        }); //判定瀏覽器寬度設定格子數
        	
        // $(window).resize(function() {
        // 	// location.reload();//改變window尺寸時,重整畫面!
        //     var widowWidth = $(window).width();
        //     console.log(widowWidth);
        //     $(".content_box2").width(BoxShow);
        //     if (widowWidth <= 968) {
        //         Module.prototype.changeShow();
        //         return this;
        //     } else {
        //         var BoxShow = ($(".main_box").width()) / 7 - 2;
        //         $(".content_box2").width(BoxShow);
        //         return this;
        //     }
        // }); //判定瀏覽器寬度設定格子數
        this.selectBox(); //表格選擇function
        this.selectDot();
        // this.changeShow();
        return this;
    }
    methods() {
        return this;
    }
    frzTable() {
        return this;
    }
    selectBox() {
        var self = this;
        var $this = this.$ele;
        var $smallBoxN = $this.find(".content_box2:not(.boxHead)");
        var $smallBox = $this.find(".content_box2");
        var $BoxSelect = $this.find(".select");
            $smallBoxN.on('click', function() {
            $smallBox.removeClass('select').removeClass('hight_light');
            $(this).addClass('select').siblings().addClass('hight_light');
            var selectIndex = $this.find(".select").index() + 1;//:nth-child()的索引值從1開始
            $this.find(".content_box2:nth-child(" + selectIndex + ")").removeClass("hight_light").addClass("hight_light");
            $(".boxHead:nth-child(" + selectIndex + ")").removeClass("hight_light");
            $(this).removeClass('hight_light');
        });
        return this;
        // $(".content_box2:not(.boxHead)").on('click', function() {
        //     $(".content_box2").removeClass('select').removeClass('hight_light');
        //     $(this).addClass('select').siblings().addClass('hight_light');
        //     var selectIndex = $('.select').index() + 1; //:nth-child()的索引值從1開始
        //     $(".content_box2:nth-child(" + selectIndex + ")").addClass("hight_light");
        //     $(".boxHead:nth-child(" + selectIndex + ")").removeClass("hight_light");
        //     $(this).removeClass('hight_light');
        // });
        // return this;
    }

    //判定瀏覽器寬度設定格子數量
    setShow() {
        var self = this;
        var $this = this.$ele;
        var $smallBox = $this.find(".content_box2");
        var $mainBox = $this.find(".main_box");
        var $smallBoxNumber=$smallBox.length / 8;//抓到了有幾排!!!分別上7下5!
        console.log($smallBoxNumber);
        console.log(this.$ele.hasClass('default'));
        var widowWidth = $(window).width();
        if (widowWidth >= 968) {
            // var BoxShow = ($(".main_box").width() / 7) - 2; //左右各1px的border!!!!
            // var BoxShow = ($mainBox.width() / $smallBoxNumber) - 2;
            var BoxShow = ($(".main_box").width() / 7) - 2;
            var BoxShow2 = ($(".main_box").width() / 5) - 2;
            // $smallBox.width(BoxShow);
            $(".content_box2_defaule").width(BoxShow);
            $(".content_box2_rel").width(BoxShow2);
        } else {
            Module.prototype.changeShow();
            return this;
        }
        // var widowWidth = $(window).width();
        // if (widowWidth >= 968) {
        //     var BoxShow = ($(".main_box").width() / 7) - 2; //左右各1px的border!!!!
        //     var widowWidth = $(window).width();
        //     $(".content_box2").width(BoxShow);
        // } else {
        //     Module.prototype.changeShow();
        //     return this;
        // }
    }
    changeShow() {
        var borderSpace = ModuleDefaults.count.show * 2;
        var BoxShow = ($(".main_box").width() - borderSpace) / ModuleDefaults.count.show;
        $(".content_box2").width(BoxShow);
        return this;
    }
    goRightScroll() {
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $content_box2 = $this.find('.content_box2');
        // var $this = this.$ele;
        // var opts = this.option; 
        // var srcollSpeed = ModuleDefaults.speed * 1000;
        // var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
        // $this.find('.content_box2').animate({
        //     left: "+=" + srcollWidth + "",
        // }, srcollSpeed);
        // return this;
        var srcollSpeed = ModuleDefaults.speed * 1000;
        var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
        $content_box2.animate({
            left: "+=" + srcollWidth + "",
        }, srcollSpeed);
        return this;
    }
    goLeftScroll() {
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $content_box2 = $this.find('.content_box2');
        // var $this = this.$ele;
        // var opts = this.option;
        // var srcollSpeed = ModuleDefaults.speed * 1000;
        // var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
        // $content_box2.animate({
        //     left: "-=" + srcollWidth + "",
        // }, srcollSpeed);
        // return this;
        var srcollSpeed = ModuleDefaults.speed * 1000;
        var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
        $content_box2.animate({
            left: "-=" + srcollWidth + "",
        }, srcollSpeed);
        return this;
    }
    selectDot(){
    	$(".content_box2:not(.boxHead)").on('click', function() {
	    	$(".dotCircle").removeClass("dotSelect");
	    	var selectIndex = $('.select').index() + 1;
	    	$(".dotCircle:nth-child(" + selectIndex + ")").addClass("dotSelect");
	    	});
    	return this;
    }
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };