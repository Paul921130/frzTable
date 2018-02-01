const ModuleName = 'frzTable';
const ModuleDefaults = {
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 2, // [number] 
        // M版時一個畫面show幾格儲存格 友情提示:show最好要大於slide
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
        this.slider = 1;
    }
    init() {
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $slide_left = $this.find(".slide_left");
        var $slide_right = $this.find(".slide_right");
        var $smallBox = $this.find(".content_box2");
        var $thisDot= $this.find(".dotCircle"); 

        console.log('跑了兩次!');
        console.log($this); //出來兩個一個是default 一個是rel
        console.log($smallBox);

        var slider = ModuleDefaults.count.show;
        var moveStep = ModuleDefaults.count.slide;
        var Defaultshow = ModuleDefaults.count.show; //show的數字不會變
        var srcollSpeed = ModuleDefaults.speed * 1000;
        

        $('.content_box2').attr("style", 'left: 0px;');
        // console.log($smallBox.width());
        
        this.defaultScroll();
        // console.log(this.smallWidth);
        //正在處理中!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // slide為1的時候會有問題
        // $slide_left.on('click', function() {
        //     if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
        //         slider = slider - moveStep;
        //         self.goLeftScroll();
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
        //         console.log('嘿!我在這!!!!!')
        //         var srcollSpeed = ModuleDefaults.speed * 1000;
        //         var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
        //         $smallBox.animate({
        //             left: "+=" + srcollWidth + "",
        //         }, srcollSpeed);
        //         slider = Defaultshow;
        //         //點點
        //         // $(".dotCircle").removeClass("dotSelect");
        //         // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         return this;
        //     }
        // });
        // $slide_left.on('click', function() {
        //     if (moveStep === 1 && slider - Defaultshow > 0) {
        //         slider = slider - moveStep;
        //         self.goLeftScroll();
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     }
        // });

        // //處理完成95%!!!!!!!!!!!!!!
        // $slide_right.on('click', function() {
        //     if (slider + moveStep <= 7) {
        //         slider = slider + moveStep;
        //         self.goRightScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //     } else if (7 - slider > 0) {
        //         console.log('天啊!!!!今天好冷!');
        //         var srcollWidth = ($('.content_box2').width() + 2) * (7 - slider) ; //1px的border的一半
        //         $smallBox.animate({
        //             left: "-=" + srcollWidth + "",
        //         }, srcollSpeed);

        //         slider = slider + (7 - slider);
        //         // $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         return this;
        //     };
        // });

        // //模組化on click
        // $slide_left.on('click', function() {
        //     console.log($this);
        //     self.goLeftScroll();
        // });
        
        // $slide_right.on('click', function() {
        //     console.log($this);
        //     self.goRightScroll();
        // });
        // //模組化on click
    
        //選擇表格function
        this.selectBox(); 
        this.selectDot();

        //表格顯示數量
        this.changeShow();
        this.resizeShow();
        this.setShow();   
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
    }//為什麼上面的完全沒問題 可是下面的卻會吃到上面的!?解決
    
    ///defaultScroll 測試中!!!
    defaultScroll(){
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $slide_left = $this.find(".slide_left");
        var $slide_right = $this.find(".slide_right");
        var $smallBox = $this.find(".content_box2");
        var $thisDot= $this.find(".dotCircle");

        var slider = ModuleDefaults.count.show;
        var moveStep = ModuleDefaults.count.slide;
        var Defaultshow = ModuleDefaults.count.show; //show的數字不會變
        var srcollSpeed = ModuleDefaults.speed * 1000;

        var $smallBoxNum = $smallBox.length/8;
        console.log($smallBoxNum);

        $slide_left.on('click', function() {
            if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
                slider = slider - moveStep;
                self.goLeftScroll();
                $(".dotCircle").removeClass("dotSelect");//點點測試中
                $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
            } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
                console.log('嘿!我在這!!!!!')
                var srcollSpeed = ModuleDefaults.speed * 1000;
                var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
                $smallBox.animate({
                    left: "+=" + srcollWidth + "",
                }, srcollSpeed);
                slider = Defaultshow;
                //點點
                // $(".dotCircle").removeClass("dotSelect");
                // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                //點點測試中
                //點點
                $thisDot.removeClass("dotSelect");
                $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                //點點測試中
                return this;
            }
        });
        $slide_left.on('click', function() {
            if (moveStep === 1 && slider - Defaultshow > 0) {
                slider = slider - moveStep;
                self.goLeftScroll();
                $thisDot.removeClass("dotSelect");
                $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
            }
        });

        //處理完成95%!!!!!!!!!!!!!!
        $slide_right.on('click', function() {
            if (slider + moveStep <= $smallBoxNum) {
                slider = slider + moveStep;
                self.goRightScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
                //點點
                $thisDot.removeClass("dotSelect");
                $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                //點點測試中
            } else if ($smallBoxNum - slider > 0) {
                console.log('天啊!!!!今天好冷!');
                var srcollWidth = ($('.content_box2').width() + 2) * ($smallBoxNum - slider) ; //1px的border的一半
                $smallBox.animate({
                    left: "-=" + srcollWidth + "",
                }, srcollSpeed);

                slider = slider + ($smallBoxNum - slider);
                // $(".dotCircle").removeClass("dotSelect");//點點測試中
                // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                //點點
                $thisDot.removeClass("dotSelect");
                $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
                //點點測試中
                return this;
            };
        });

        //  $slide_left.on('click', function() {
        //     if (slider - Defaultshow > 0 && slider > Defaultshow * 2 && moveStep !== 1) {
        //         slider = slider - moveStep;
        //         self.goLeftScroll();
        //         $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     } else if (slider - Defaultshow > 0 && slider <= Defaultshow * 2 && moveStep !== 1) {
        //         console.log('嘿!我在這!!!!!')
        //         var srcollSpeed = ModuleDefaults.speed * 1000;
        //         var srcollWidth = ($('.content_box2').width() + 2) * (slider - Defaultshow); //1px的border的一半
        //         $smallBox.animate({
        //             left: "+=" + srcollWidth + "",
        //         }, srcollSpeed);
        //         slider = Defaultshow;
        //         //點點
        //         // $(".dotCircle").removeClass("dotSelect");
        //         // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         return this;
        //     }
        // });
        // $slide_left.on('click', function() {
        //     if (moveStep === 1 && slider - Defaultshow > 0) {
        //         slider = slider - moveStep;
        //         self.goLeftScroll();
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //     }
        // });

        // //處理完成95%!!!!!!!!!!!!!!
        // $slide_right.on('click', function() {
        //     if (slider + moveStep <= 7) {
        //         slider = slider + moveStep;
        //         self.goRightScroll(); //這裡是剛好滾完的狀態,如slide:2 show:3
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //     } else if (7 - slider > 0) {
        //         console.log('天啊!!!!今天好冷!');
        //         var srcollWidth = ($('.content_box2').width() + 2) * (7 - slider) ; //1px的border的一半
        //         $smallBox.animate({
        //             left: "-=" + srcollWidth + "",
        //         }, srcollSpeed);

        //         slider = slider + (7 - slider);
        //         // $(".dotCircle").removeClass("dotSelect");//點點測試中
        //         // $(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點
        //         $thisDot.removeClass("dotSelect");
        //         $this.find(".dotCircle:nth-child(" + (slider-2) + ")").addClass("dotSelect");
        //         //點點測試中
        //         return this;
        //     };
        // });
    }

    resizeShow(){
        // 判定瀏覽器寬度設定格子數量 
        var self = this;
        var $this = this.$ele;
        var opts = this.option;
        var $smallBox = $this.find(".content_box2");
        $(window).resize(function() {
            //改變window尺寸時,重整畫面!
            var widowWidth = $(window).width();
            $smallBox.width(BoxShow);
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
        });
    }
    //判定瀏覽器寬度設定格子數量//要抓到ele的dom數量//寫死了....好爛...
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
    }
    changeShow() {
        var borderSpace = ModuleDefaults.count.show * 2;
        var BoxShow = ($(".main_box").width() - borderSpace) / ModuleDefaults.count.show;
        $(".content_box2").width(BoxShow);
        return this;
    }


    ///正在做!!!!不要斷掉!!!!!!!
    goLeftScroll() {
        var self = this;
        var $this = this.$ele;
        var $smallBox = $this.find('.content_box2');
        var slider = ModuleDefaults.count.show;
        var moveStep = ModuleDefaults.count.slide;
        var Defaultshow = ModuleDefaults.count.show; //show的數字不會變
        var srcollSpeed = ModuleDefaults.speed * 1000;
        var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
         $smallBox.animate({
                left: "+=" + srcollWidth + "",
            }, srcollSpeed);
        console.log(slider);
        return this;
    }

    ///正在做!!!!!不要斷掉!!!
    ///塞入了$smallBox 就不會互相影響了!!!
    goRightScroll() {
        var self = this;
        var $this = this.$ele;
          var opts = this.option; 
        var $smallBox = $this.find('.content_box2');
        var slider = ModuleDefaults.count.show;
        var moveStep = ModuleDefaults.count.slide;
        var Defaultshow = ModuleDefaults.count.show; //show的數字不會變
        var srcollSpeed = ModuleDefaults.speed * 1000;
        var srcollWidth = ($('.content_box2').width() + 2) * ModuleDefaults.count.slide;
         $smallBox.animate({
                left: "-=" + srcollWidth + "",
        }, srcollSpeed); //這裡是剛好滾完的狀態,如slide:2 show:3       
        return this;
    }
    selectDot() {
        var self = this;
        var $this = this.$ele;
        var opts = this.option; 
        var $smallBoxN = $this.find(".content_box2:not(.boxHead)");
        var $smallBox = $this.find(".content_box2");
        var $thisDot= $this.find(".dotCircle");

        $smallBoxN.on('click', function() {
            $thisDot.removeClass("dotSelect");
            // $(".dotCircle").removeClass("dotSelect");
            var selectIndex = $this.find(".select").index() + 1;
            $this.find(".dotCircle:nth-child(" + selectIndex + ")").addClass("dotSelect");
        });
        return this;

    }
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };