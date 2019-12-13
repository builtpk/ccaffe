$(function(){

    //페이지 폰트 컬러
    $('.page>p').on('click',function(){
        $('.page>p').css('color','#ccc');
        $(this).css('color','black');
    })

    //토글메뉴
    $('#tgl_btn').on('click',function(){
        $(".menu_nav").animate({width:'toggle'},350);
        $('#tgl_btn').css('display','none')
        
    })
        $('.close').on('click',function(){
        $('.menu_nav').animate({width:'toggle'},350);
        $('#tgl_btn').css('display','block');
    })
});

