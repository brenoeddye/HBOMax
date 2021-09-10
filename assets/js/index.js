$(window).on('load', function(){
    initSmoothScrolling('.block','smoothscroll');
});

function initSmoothScrolling(container,animation){
    var sliderWidth = 0;	
    var animationWidth = 0;	
    var sliderHeight = $('>div>div:first-of-type',container).outerHeight(false);

    $('>div>div', container).each(function(){				
        animationWidth += $(this).outerWidth(false);		
    });

    var slidesVisible = $(container).width() / $('>div>div:first-of-type',container).outerWidth(false);	
    slidesVisible = Math.ceil(slidesVisible);

    var slidesNumber = $('>div>div', container).length;
    var speed = slidesNumber*8;
    
    $('>div>div',container).slice(0,slidesVisible).clone().appendTo($('>div',container));	

    $('>div>div', container).each(function(){
        sliderWidth += $(this).outerWidth(false);
    });

    $('>div',container).css({'width':sliderWidth,'height':sliderHeight});

    $("<style type='text/css'>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>").appendTo("head");	

    var cl = $(container).attr("class");
    $(container).removeClass(cl).animate({'nothing':null}, 1, function () {
        $(this).addClass(cl);
    });
}