// JavaScript Document

//点击模块TOP5动画
$(function () {
	$(".pie").animate({
		top : '75px',
		width:'388px',
		height:'195px',
		left: '50%',
		opacity:'1',
		marginLeft:'-194px',
		position:'absolute',
		
	},1500,function(){
		$(".M-piedate").animate({
		opacity:'1',
	
	},1000);
	$(".M-ptwp").animate({
			opacity:'1',
			},1000);
		$(".M-tag").animate({
			opacity:'1',
			},1000);	
		});
	
	
	
	
	
	
});
