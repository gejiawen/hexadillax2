function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

$(function() {
    $.backstretch(backRoot + random(parseInt(bgImageQ) - 1) + '.jpg');
    //console.log(backRoot + random(parseInt(bgImageQ) - 1) + '.jpg');

    $("nav[role=banner]").headroom({
        offset  : 10,
        onNotTop: function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
        },
        onTop   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
        },
        onPin   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
        },
        onUnpin : function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
        }
    });

    $(".post-body p").each(function() {
        if($(this).find("img").length) {
            $(this).css("text-align", "center");
        }
    });

    $(".post-body img").addClass("img-thumbnail img-responsive");

    $('#nav-search input').on('keyup', function (ev) {
        if (ev.keyCode === 13) {
            var keyworks = $(this).val();
            keywords = keyworks.split(' ');
            window.location = '/search/?keywords=' + keywords.join(',');
        }
    });

});
