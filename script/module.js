const ModuleName = 'frzTable';
const ModuleDefaults =  {
	count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 2, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 3// [number] 
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
		var slider=0;
		var moveStep=ModuleDefaults.count.slide;
		$('.content_box2').attr("style",'left: 0px;');
		console.log(this.smallWidth);
		this.slide_left.on('click',function(){
			if(slider - moveStep >= 0){
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
		this.setShow();
		//判定瀏覽器寬度設定格子數量	
		$(window).resize(function() {
			var widowWidth= $(window).width();
			console.log(widowWidth);
			$(".content_box2").width(BoxShow);
		  	if(widowWidth<=968){
		  		Module.prototype.changeShow();
		  		return this;
		  	}else{
		  		var BoxShow=($(".main_box").width()) /7-2;
				$(".content_box2").width(BoxShow);
		  		return this;
		  	}
		});//判定瀏覽器寬度設定格子數
		this.selectBox();//表格選擇
		// this.changeShow();
		
		// this.addColNum();
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
			var selectIndex = $('.select').index()+1;//:nth-child()的索引值從1開始
			console.log(selectIndex);
			$(".content_box2:nth-child(" + selectIndex +")").addClass( "hight_light" );
			$(".boxHead:nth-child(" + selectIndex +")").removeClass( "hight_light" );
			$(this).removeClass('hight_light');
		});
		return this;
	}

	//判定瀏覽器寬度設定格子數量
	setShow(){
		var widowWidth= $(window).width();

		if(widowWidth>=968){
			var BoxShow=($(".main_box").width()/7)-2;//左右各1px的border!!!!
			console.log(BoxShow);
			var widowWidth= $(window).width();
			$(".content_box2").width(BoxShow);
		}else{
			Module.prototype.changeShow();
		  	return this;
		}
	}
	changeShow(){
		// var borderSpace= ModuleDefaults.count.show * 1-1;
		var borderSpace= ModuleDefaults.count.show * 2;
		var BoxShow=($(".main_box").width()-borderSpace)/ ModuleDefaults.count.show;
		console.log(BoxShow);
		$(".content_box2").width(BoxShow);
		// var main_boxwidth=($(".content_box2").width()+1.5)*ModuleDefaults.count.show;
		// console.log(main_boxwidth);
		// $(".main_box").width(main_boxwidth);
	 	// $('.main_box').width((BoxShow)*7);
		// $('.content_box').width((BoxShow + 2)*7);
		return this;
	}
	goRightScroll(){
		var srcollSpeed=ModuleDefaults.speed*1000;
		var srcollWidth= ($('.content_box2').width()+1)*ModuleDefaults.count.slide+1;
		$( ".content_box2" ).animate({
					left: "+="+srcollWidth+"",
				},srcollSpeed);
		return this;
	}
	goLeftScroll(){
		var srcollSpeed=ModuleDefaults.speed*1000;
		var srcollWidth= ($('.content_box2').width()+1)*ModuleDefaults.count.slide+1;
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