// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#FDC131', '#FDC131', '#0A314F', '#EBEBEB', '#FFFFFF', '#cfcfcf', '#ededed', '#0A314F', '#c89600', '#ffffff', 'rgba( 2, 32, 62, 0.8 )', '#222222', '#e8e8e8', '#FFFFFF', '#ffffff', '#073050', '#073050', '#e8e8e8', '#ffc20e', '#e5ac00', '#ffffff', '#ffc20e', '#ffffff', '#ffffff', '#e5ac00', '#ffffff', '#000000', '#0d0d0d', '#ffffff', '#222222', '#ffc20e', '#0d0d0d', '#191919', '#262626', '#333333', '#4c4c4c', '#666666', '#7f7f7f', '#999999', '#b2b2b2', '#cccccc', '#d9d9d9', '#e5e5e5', '#f2f2f2', '#f8f8f8', '#ffffff', '#e8e8e8', '#e5ac00', '#ffffff', '#ffffff', '#031626', '#05233b', '#222222', '#000000', '#ffffff', '#e5ac00', '#ffc20e', '#e5ac00', '#ffc20e', '#073050' ];

var init_peshawar_brand_colors = function(title) {
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
