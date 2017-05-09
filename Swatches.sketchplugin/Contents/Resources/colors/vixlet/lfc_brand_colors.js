// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_lfc_brand_colors = function(title) {
    var color_list = [ "#E31B23", "#FEC400", "#E31B23", "#E7363D", "#000000", "#FFFFFF", "#000000", "#222222", "#AA141A", "#6E0D10", "#FFFFFF", "#FFFFFF", "#E31B23", "#E8E8E8", "#FFFFFF", "#F8F8F8", "#F2F2F2", "#E5E5E5", "#D9D9D9", "#CCCCCC", "#B2B2B2", "#999999", "#7F7F7F", "#666666", "#4C4C4C", "#333333", "#262626", "#191919", "#0D0D0D", "#ED3740", "#222222", "#FFFFFF", "#0D0D0D", "#000000", "#FFFFFF", "#EC494E", "#FFFFFF", "#FFFFFF", "#E31B23", "#FFFFFF", "#000000", "#fcd700", "#e8e8e8", "#000000", "#000000", "#000000", "#FFFFFF", "#e8e8e8", "#000000", "rgba(0, 0, 0, 0.6)", "#ffffff", "#a90f15", "#000000", "#ededed", "#cfcfcf", "#ffffff", "#ebebeb", "#fcd700", "#E31B23", "#E31B23", "#fec400", "#a78100", "#ffffff", "#f8f8f8" ];
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
