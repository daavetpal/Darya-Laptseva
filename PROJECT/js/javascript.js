$(document).ready(function(){
    var open = $('#open');
    var close = $('#close');
    var menu = $('#menu');

    menu.on('click', 'a', function(event){
        event.preventDefault();
        var link = $(event.currentTarget).attr('href');
        var top = $(link).offset().top;
        $('body, html').animate({scrollTop: top-50}, 800)
    })

    open.click(function(){
        menu.attr('class', 'menu__mobile--visible');
        $(this).attr('class', '');
        close.attr('class', 'active');
    });

    close.click(function(){
        menu.attr('class', '');
        $(this).attr('class', '');
        open.attr('class', 'active');
    });
});