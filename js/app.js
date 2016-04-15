(function (){

//select list items in footer and hide them only if the viewport in under 992px
var toHide =$(".footer ul li:nth-child(n+2)");
if($(window).width() > 952){
	toHide.removeClass("hide");
}
else{

	toHide.addClass("hide");
	$(".footer ul li:first-child").click(function(){
		var clicked  = $(this);
	    clicked.nextAll("li").toggleClass("hide animated fadeIn");

	});

}


//show the menu when the burger item is clicked
var toShow =$('.burger');
toShow.click(function(){

	$('.mobile-navigation').toggleClass("back animated fadeInRight");

});

//Add selected class to the right Desktop navigation LI menu

$('.desktop-navigation ul li').click(function(){
	$('.desktop-navigation ul li').removeClass('selected');
	$(this).addClass('selected');



});

//Add selected class to the right Category navigation LI menu

$('.work_filter ul li').click(function(){
	$('.work_filter ul li').removeClass('category');
	$(this).addClass('category');



});
})();