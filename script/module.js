const ModuleName = 'frzTable';
const ModuleDefaults =  {
	count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 2, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 5// [number] 
    },
    // 設定花多久時間移動完成
    speed: .2, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function($element) {
        // console.log($element)
    }
};
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.smallBox=$('.content_box2');
		this.smallWidth=$('.content_box2').width();
		this.slide_right=$('.slide_right');
		this.slide_left=$('.slide_left');
	}
	init () {
		var bigWidth=$(".col-xs-21").width();
		console.log(bigWidth);
		var slider=0;
		var moveStep=ModuleDefaults.count.slide;
		$('.content_box2').attr("style",'left: 0px;');
		console.log(this.smallWidth);
		this.slide_left.on('click',function(){
			if(slider-moveStep>=0){
				slider=slider-moveStep;
        		Module.prototype.goRightScroll();
			}
		});
		this.slide_right.on('click',function(){
			if(slider + moveStep <= 7){
		        slider=slider+moveStep;
		        Module.prototype.goLeftScroll();
		      }
		});	
		
		this.changeShow();
		this.selectBox();
		// this.addColNum();
		// this.srcollLeft();
		// this.srcollRight();
		return this;
	}
	methods () {
		return this;
	}
	frzTable(){
		return this;
	}
	selectBox(){
		$(".content_box2").on('click',function(){
			$(".content_box2").removeClass('select').removeClass('hight_light');
			$(this).addClass('select').siblings().addClass('hight_light');
			var i = $('.select').index()+1;
			console.log(i);
			$(".content_box2:nth-child(" + i +")").addClass( "hight_light" );
			$(this).removeClass('hight_light');
		});
		return this;
	}
	changeShow(){
		var borderSpace= ModuleDefaults.count.show * 2;
		var BoxShow=($(".col-xs-21").width()-borderSpace) / ModuleDefaults.count.show;
		console.log(BoxShow);
		$(".content_box2").width(BoxShow);
		$('.content_box').width((BoxShow + 2)*7);
		return this;
	}
	goRightScroll(){
		var srcollSpeed=ModuleDefaults.speed*1000;
		var srcollWidth= ($('.content_box2').width()+2)*ModuleDefaults.count.slide;
		$( ".content_box2" ).animate({
					left: "+="+srcollWidth+"",
				},srcollSpeed);
		return this;
	}
	goLeftScroll(){
		var srcollSpeed=ModuleDefaults.speed*1000;
		var srcollWidth= ($('.content_box2').width()+2)*ModuleDefaults.count.slide;
		$( ".content_box2" ).animate({
					left: "-="+srcollWidth+"",
				},srcollSpeed);
		return this;
	}
	// addColNum(){
	// 	var s = $( ".content_box2" ).toArray();
	// 	console.log(s[3]);
	// 	for( var i=0; i++; i<=42){
	// 		$( ".content_box2" ).each().addClass("col"+i+"");
	// 	}
	// }
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };