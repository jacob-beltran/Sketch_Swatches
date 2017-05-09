// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_peshawar_brand_colors = function(title) {
    var color_list = [ "#073050", "#ffc20e", "#e5ac00", "#ffc20e", "#e5ac00", "#ffffff", "#000000", "#222222", "#05233b", "#031626", "#ffffff", "#ffffff", "#e5ac00", "#e8e8e8", "#ffffff", "#f8f8f8", "#f2f2f2", "#e5e5e5", "#d9d9d9", "#cccccc", "#b2b2b2", "#999999", "#7f7f7f", "#666666", "#4c4c4c", "#333333", "#262626", "#191919", "#0d0d0d", "#ffc20e", "#222222", "#ffffff", "#0d0d0d", "#000000", "#ffffff", "#e5ac00", "#ffffff", "#ffffff", "#ffc20e", "#ffffff", "#e5ac00", "#ffc20e", "#e8e8e8", "#073050", "#073050", "#ffffff", "#FFFFFF", "#e8e8e8", "#222222", "rgba( 2, 32, 62, 0.8 )", "#ffffff", "#c89600", "#0A314F", "#ededed", "#cfcfcf", "#FFFFFF", "#EBEBEB", "#0A314F", "#FDC131", "#FDC131", "#e5ac00", "#967100", "#ffffff", "#f8f8f8" ];
    var colors = generateBrandColors( color_list );

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="width:36px;height:36px;background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
