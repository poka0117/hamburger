$(function(){
    // bar1,bar3がページ見込み直後に動かないようここでtransitionを付ける
    $('.bar1,.bar3').css('transition','0.5s')
    $('.bar_box').on('click',function(){
        // 0.5秒かけてbar2を消す
        $('.bar2').fadeToggle(500);
        // bar1bar2にcssを付与
        $('.bar1').toggleClass('bar1_after');
        $('.bar3').toggleClass('bar3_after');
        // menuの表示非表示
        $('.menu').fadeToggle();
    })
})