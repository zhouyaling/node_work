/* =================================================
// jQuery Tabs Plugins 1.0
// author:chenyg@5173.com
// URL:http://stylechen.com/jquery-tabs.html
// 4th Dec 2010
// =================================================*/
var wyfwLine="";//物业服务变量
var shfwLine="";//生活服务变量
var jjfwLine="";//家居服务变量

;(function($){
	$.fn.extend({
		Tabs:function(options){
			// 处理参数
			options = $.extend({
				event : 'mouseover',
				timeout : 0,
				auto : 0,
				callback : null
			}, options);
			
			var self = $(this),
				tabBox = self.children( 'div.tab_box' ).children( 'div' ),
				menu = self.children( 'ul.tab_menu' ),
				items = menu.find( 'li' ),
				timer;
				
			var tabHandle = function( elem ){
					elem.siblings( 'li' )
						.removeClass( 'current' )
						.end()
						.addClass( 'current' );
						
					tabBox.siblings( 'div' )
						.addClass( 'hide' )
						.end()
						.eq( elem.index() )
						.removeClass( 'hide' );
				},
					
				delay = function( elem, time ){
					time ? setTimeout(function(){ tabHandle( elem ); }, time) : tabHandle( elem );
				},
				
				start = function(){
					if( !options.auto ) return;
					timer = setInterval( autoRun, options.auto );
				},
				
				autoRun = function(){
					var current = menu.find( 'li.current' ),
						firstItem = items.eq(0),
						len = items.length,
						index = current.index() + 1,
						item = index === len ? firstItem : current.next( 'li' ),
						i = index === len ? 0 : index;
					
					current.removeClass( 'current' );
					item.addClass( 'current' );
					
					tabBox.siblings( 'div' )
						.addClass( 'hide' )
						.end()
						.eq(i)
						.removeClass( 'hide' );
						//alert($(".demo1 .current p").html());
						//物业服务加载折线图
						if($(".demo1 .current p").html()=="物业费查询"){
							if(wyfwLine=="物业费查询"){
							}else{
							loadWYLineData(1);
							wyfwLine="物业费查询";
							}
							
						}else if($(".demo1 .current p").html()=="物业缴费"){
							if(wyfwLine=="物业缴费"){
							}else{
								loadWYLineData(2);
							wyfwLine="物业缴费";
							}
							
						}else if($(".demo1 .current p").html()=="语音报事报修"){
							if(wyfwLine=="语音报事报修"){
							}else{
							wyfwLine="语音报事报修";
							loadWYLineData(3);
							}
							
						}else if($(".demo1 .current p").html()=="呼叫物业中心"){
							if(wyfwLine=="呼叫物业中心"){
							}else{
							wyfwLine="呼叫物业中心";
							loadWYLineData(4);
							}
							
						} 
						//生活服务
						if($(".demo2 .current p").html()=="外卖"){
							if(shfwLine=="外卖"){
							}else{
								loadSHLineData(1);
								shfwLine="外卖";
							}
							
						}else if($(".demo2 .current p").html()=="家政"){
							if(shfwLine=="家政"){
							}else{
								loadSHLineData(2);
								shfwLine="家政";
							}
							
						}else if($(".demo2 .current p").html()=="维修"){
							if(shfwLine=="维修"){
							}else{
								loadSHLineData(3);
								shfwLine="维修";
							}
						}else if($(".demo2 .current p").html()=="天气查询"){
							if(shfwLine=="天气查询"){
							}else{
								loadSHLineData(4);
								shfwLine="天气查询";
							}
							
						}else if($(".demo2 .current p").html()=="新闻播报"){
							if(shfwLine=="新闻播报"){
							}else{
								loadSHLineData(5);
								shfwLine="新闻播报";
							}
						}
						//加载家居服务折线图
						if($(".demo3 .current p").html()=="设备控制"){
							if(jjfwLine=="设备控制"){
							}else{
								loadJJLineData(1);
								jjfwLine="设备控制"
							}
							
						}else if($(".demo3 .current p").html()=="场景"){
							if(jjfwLine=="场景"){
							}else{
								loadJJLineData(2);
								jjfwLine="场景"
							}
							
						}else if($(".demo3 .current p").html()=="安防报警"){
							if(jjfwLine=="安防报警"){
							}else{
								loadJJLineData(3);
								jjfwLine="安防报警"
							}
						}else if($(".demo3 .current p").html()=="消息推送"){
							if(jjfwLine=="消息推送"){
							}else{
								loadJJLineData(4);
								jjfwLine="消息推送"
							}
						} 
				};
							
			items.bind( options.event, function(){
				delay( $(this), options.timeout );
				if( options.callback ){
					options.callback( self );
				}
			});
			
			if( options.auto ){
				start();
				self.hover(function(){
					clearInterval( timer );
					timer = undefined;
				},function(){
					start();
				});
			}
			
			return this;
		}
	});
})(jQuery);