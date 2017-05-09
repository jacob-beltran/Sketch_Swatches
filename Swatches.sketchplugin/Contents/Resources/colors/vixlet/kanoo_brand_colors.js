// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_kanoo_brand_colors = function(title) {
    var color_list = [ "#032d6b", "#52aeff", "#0071d4", "#1790fb", "#0071d4", "#d8d8d8", "#000000", "#222222", "#022150", "#011534", "#FFFFFF", "#FFFFFF", "#006dcc", "#e8e8e8", "#FFFFFF", "#f8f8f8", "#F2F2F2", "#E5E5E5", "#D9D9D9", "#CCCCCC", "#B2B2B2", "#999999", "#7F7F7F", "#666666", "#4C4C4C", "#333333", "#262626", "#191919", "#0D0D0D", "#0071d4", "#222222", "#FFFFFF", "#0D0D0D", "#000000", "#FFFFFF", "#0071d4", "#FFFFFF", "#FFFFFF", "#0071d4", "#FFFFFF", "#0071d4", "#0071d4", "#e8e8e8", "#073050", "#073050", "#ffffff", "#ffffff", "#e8e8e8", "#222222", "rgba(0,25,64,0.85)", "#ffffff", "#004888", "#032d6b", "#ededed", "#cfcfcf", "#e8e8e8", "#ebebeb", "#0071d4", "#0071d4", "#0071d4", "#52aeff", "#3672a8", "#ffffff", "#f8f8f8" ];
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
