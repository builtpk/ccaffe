
$(function(){
    $('#nav').hide();
    $('#tgl_btn').on('click',function(){
        $('#nav').show();
    })
    $('#nav_close').on('click',function(){
        $('#nav').hide();
    })
})