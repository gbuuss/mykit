Kit = function(){

    /**
     * [cover description]
     * @return {[type]} [description]
     */
    var cover = function(){
        var target = $('[data-mk="cover"]');
        var image  = target.data("src");

        target.css({
            "background": "url("+image+") no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
        });
    }

    /**
     * [scrollSmooth description]
     * @return {[type]} [description]
     */
    var scrollSmooth = function(){
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }

    return {
        init: function(options){

            // These are the defaults functions.
            var settings = $.extend({
                cover: false,
                scrollSmooth: false
            }, options);

            // Calling functions
            settings.cover == true && cover();
            settings.scrollSmooth == true && scrollSmooth();
        }
    }
}();