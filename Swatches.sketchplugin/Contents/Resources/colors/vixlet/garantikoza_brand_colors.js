// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_garantikoza_brand_colors = function(title) {
    var color_list = [ "#0085ca", "#000000", "#0085ca", "#17affe", "#000000", "#f1f1f1", "#000000", "#222222", "#006397", "#004062", "#ffffff", "#ffffff", "#007ec0", "#e8e8e8", "#ffffff", "#f8f8f8", "#f2f2f2", "#e5e5e5", "#d9d9d9", "#cccccc", "#b2b2b2", "#999999", "#7f7f7f", "#666666", "#4c4c4c", "#333333", "#262626", "#191919", "#0d0d0d", "#ed3740", "#222222", "#ffffff", "#0d0d0d", "#000000", "#ffffff", "#18a0e7", "#ffffff", "#ffffff", "#0085ca", "#ffffff", "#828386", "#00aad6", "#e8e8e8", "#0c3d67", "#525252", "#ffffff", "#FFFFFF", "#e7f1f4", "#222222", "rgba(12,51,86,0.8)", "#ffffff", "#005f90", "#0085ca", "#ededed", "#cfcfcf", "#FFFFFF", "#ebebeb", "#1a171b", "#0085ca", "#0085ca" ];
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
