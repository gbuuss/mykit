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
     * [menu description]
     * @return {[type]} [description]
     */
    var menu = function(){
        var element = $('[data-mk="menu"]');
        var smooth  = element.data("smooth");

        element.find('a[href*=#]:not([href=#])').on("click", function(){

            // marcando como activo el link presionado
            element.find("li").removeClass("active");
            $(this).parent().addClass("active");

            // scroll smoth
            if(smooth === "on"){
                if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
                    var target = $(this.hash);
                    target     = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            }
        });

        // marcando menu cuando se scrollea
        $(document).on("scroll", function(){
            var scrollPos = $(document).scrollTop();
            element.find("a[href*=#]:not([href=#])").each(function () {
                var currLink   = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    element.find("li").removeClass("active");
                    currLink.parent().addClass("active");
                }
                else{
                    currLink.parent().removeClass("active");
                }
            });
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
            }, options);

            // inicializa las funciones
            settings.menu == true && menu();
            settings.cover == true && cover();
        }
    }
}();