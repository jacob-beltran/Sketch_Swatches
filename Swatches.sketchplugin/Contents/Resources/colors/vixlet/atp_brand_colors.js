// Ant Design Colors
// http://ant.design/docs/spec/colors

var init_atp_brand_colors = function(title) {
    var color_list = [ "#00AEEF", "#000000", "#00AEEF", "#0FBEFF", "#000000", "#F1F1F1", "#000000", "#222222", "#0082B3", "#005474", "#FFFFFF", "#FFFFFF", "#00AEEF", "#E8E8E8", "#FFFFFF", "#F8F8F8", "#F2F2F2", "#E5E5E5", "#D9D9D9", "#CCCCCC", "#B2B2B2", "#999999", "#7F7F7F", "#666666", "#4C4C4C", "#333333", "#262626", "#191919", "#0D0D0D", "#ED3740", "#222222", "#FFFFFF", "#0D0D0D", "#000000", "#FFFFFF", "#4EC7F5", "#FFFFFF", "#FFFFFF", "#00AEEF", "#FFFFFF", "#828386", "#c6d22d", "#e8e8e8", "#222b36", "#097ebb", "#1e2222", "#FFFFFF", "#343434", "#FFFFFF", "rgba(23, 31, 70, 0.8)", "#ffffff", "#008dc2", "#002663", "#ededed", "#cfcfcf", "#ffffff", "#f8f8f8", "#002663", "#00AEEF", "#00AEEF" ];
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
