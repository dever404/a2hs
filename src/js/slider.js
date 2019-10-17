/*$(document).ready(function(){
    $('.list-slider img').on('click', function() {
        $('.list-slider img').parent().removeClass('active');
        $(this).parent().addClass('active');
        setTimeout(function() {
            $('.curent-item').text(activeItem ());
        }, 1000);
        	
    });
    $('.btn-carousel').on('click', function() {
        setTimeout(function() {
            $('.curent-item').text(activeItem ());
            $('.list-slider li').removeClass('active');
            $('.list-slider li').each(function(index ) {
                if($(this).attr('data-slide-to') == (activeItem ()-1))
                    $(this).addClass('active');
            });
                
        }, 1000);
    });
    $('.count-item').text($('.carousel-item').length);
    $('.curent-item').text(activeItem ());

    function activeItem (){
        return  $('.carousel-item.active').index() + 1 ;
    }
});*/
