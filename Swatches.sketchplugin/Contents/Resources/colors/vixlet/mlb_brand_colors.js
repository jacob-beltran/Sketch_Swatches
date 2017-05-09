// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_mlb_brand_colors = function(title) {
    var color_list = [ "#002e5b", "#ed3740", "#1282c7", "#1395e5", "#ed3740", "#FFFFFF", "#000000", "#222222", "#002244", "#00162c", "#FFFFFF", "#FFFFFF", "#1282c7", "#e8e8e8", "#FFFFFF", "#F8F8F8", "#F2F2F2", "#E5E5E5", "#D9D9D9", "#CCCCCC", "#B2B2B2", "#999999", "#7F7F7F", "#666666", "#4C4C4C", "#333333", "#262626", "#191919", "#0D0D0D", "#ed3740", "#222222", "#FFFFFF", "#0D0D0D", "#000000", "#FFFFFF", "#1282c7", "#FFFFFF", "#FFFFFF", "#1282C7", "#FFFFFF", "#044a87", "#ed3740", "#e8e8e8", "#002e5b", "#5b5b5b", "#ffffff", "#FFFFFF", "#e8e8e8", "#222222", "rgba(0, 26, 51, .7)", "#FFFFFF", "#116fa9", "#002663", "#ededed", "#cfcfcf", "#ffffff", "#ebebeb", "#002663", "#1282c7", "#1282c7" ];
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
