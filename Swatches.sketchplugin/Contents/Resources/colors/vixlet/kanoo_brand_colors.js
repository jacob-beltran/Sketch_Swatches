// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#0071d4', '#0071d4', '#0071d4', '#ebebeb', '#e8e8e8', '#cfcfcf', '#ededed', '#032d6b', '#004888', '#ffffff', 'rgba(0,25,64,0.85)', '#222222', '#e8e8e8', '#ffffff', '#ffffff', '#073050', '#073050', '#e8e8e8', '#0071d4', '#0071d4', '#FFFFFF', '#0071d4', '#FFFFFF', '#FFFFFF', '#0071d4', '#FFFFFF', '#000000', '#0D0D0D', '#FFFFFF', '#222222', '#0071d4', '#0D0D0D', '#191919', '#262626', '#333333', '#4C4C4C', '#666666', '#7F7F7F', '#999999', '#B2B2B2', '#CCCCCC', '#D9D9D9', '#E5E5E5', '#F2F2F2', '#f8f8f8', '#FFFFFF', '#e8e8e8', '#006dcc', '#FFFFFF', '#FFFFFF', '#011534', '#022150', '#222222', '#000000', '#d8d8d8', '#0071d4', '#1790fb', '#0071d4', '#52aeff', '#032d6b' ];

var init_kanoo_brand_colors = function(title) {
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
