$(document).ready(function () {
    var menuBtn = $('#header__icono'),
        menu = $('#header__nav ul')

    menuBtn.click(function(){

        if(menu.hasClass('show')){
        
            menu.removeClass('show');    
        } else {
        
            menu.addClass('show');
        }

    })
});