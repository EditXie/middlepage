 // 手机滑动轮播
 $(function(){
    var myElement = document.getElementById('demo')
    var hm = new Hammer(myElement);
    hm.on("swipeleft",function(){
        $('#demo').carousel('next')
    });
    hm.on("swiperight",function(){
        $('#demo').carousel('prev')
        })
   });
   
 //滚动事件绑定
$(window).scroll(function() {
             // $(window).scrollTop()  窗口滚动的高度
             // $(window).height()  屏幕可见区域的高度
     //移动高度+屏幕高度       
    var windowHeight = $(window).scrollTop();
    var sideHeight = $('#buy_icon').height();
    var sideWidth = $(window).width()/2 -$('#buy_icon').width()/2;
    if (windowHeight > sideHeight  ) {
        $('#buy_icon').css({
            'position' : 'fixed',
            right: sideWidth,
            top : -(sideHeight - $(window).height() + 10) //负值
        });
    } else {
        $('#buy_icon').css({
            'position' : 'static'  
        });
    }
});
   //适应window的大小
       window.onload=function() {
    $(window).trigger('scroll');
	};
 $(window).resize(function(){
     $(window).trigger('scroll');
 	 });