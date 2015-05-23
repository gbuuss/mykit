Kit = function(){

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

    return {
        init: function(options){

            // These are the defaults.
            var settings = $.extend({
                cover: false,
            }, options);

            if(settings.cover){
                cover();
            }
        }
    }
}();