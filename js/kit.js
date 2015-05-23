Kit = function(){

    /**
     * Coloca una imagen de fondo a
     * cualquier elemento.
     * 
     * @return {[type]} [description]
     */
    var cover = function(){
        var element = $('[data-mk="cover"]');
        var image   = element.data("src");

        element.css({
            "background": "url("+image+") no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
        });
    }

    /**
     * Mueve el scroll de la pagina
     * hasta una seccion ID.
     * 
     * @return {[type]} [description]
     */
    var scrollSmooth = function(){
        $('a[href*=#]:not([href=#])').on("click", function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        })
    }

    /**
     * [menu description]
     * @return {[type]} [description]
     */
    var menu = function(){
        var element = $('[data-mk="menu"]');
        element.find('a').on("click", function(){
            element.find("li").removeClass("active");
            $(this).parent().addClass("active");
        });
    }

    return {

        /**
         * Inicializa la configuracion global
         * del framework.
         * 
         * @param  {[type]} options [description]
         * @return {[type]}         [description]
         */
        init: function(options){

            // funciones por defecto
            var settings = $.extend({
                cover: false,
                menu: false,
                scrollSmooth: false,
            }, options);

            // inicializa las funciones
            settings.menu == true && menu();
            settings.cover == true && cover();
            settings.scrollSmooth == true && scrollSmooth();
        }
    }
}();