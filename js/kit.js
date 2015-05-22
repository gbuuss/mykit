Kit = function(){

    var cover = function(){
        var target = $('[data-mk="cover"]').parent();
        var image  = $('[data-mk="cover"]').attr("src");

        target.css({
            "background": "url("+image+") no-repeat center center",
            "-webkit-background-size": cover,
            "-moz-background-size": cover,
            "-o-background-size": cover,
            "background-size": cover,
        });
    }

    return {
        init: function(){
            cover();
        }
    }
}();