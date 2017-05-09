// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#1282c7', '#1282c7', '#002663', '#ebebeb', '#ffffff', '#cfcfcf', '#ededed', '#002663', '#116fa9', '#FFFFFF', 'rgba(0, 26, 51, .7)', '#222222', '#e8e8e8', '#FFFFFF', '#ffffff', '#5b5b5b', '#002e5b', '#e8e8e8', '#ed3740', '#044a87', '#FFFFFF', '#1282C7', '#FFFFFF', '#FFFFFF', '#1282c7', '#FFFFFF', '#000000', '#0D0D0D', '#FFFFFF', '#222222', '#ed3740', '#0D0D0D', '#191919', '#262626', '#333333', '#4C4C4C', '#666666', '#7F7F7F', '#999999', '#B2B2B2', '#CCCCCC', '#D9D9D9', '#E5E5E5', '#F2F2F2', '#F8F8F8', '#FFFFFF', '#e8e8e8', '#1282c7', '#FFFFFF', '#FFFFFF', '#00162c', '#002244', '#222222', '#000000', '#FFFFFF', '#ed3740', '#1395e5', '#1282c7', '#ed3740', '#002e5b' ];

var init_mlb_brand_colors = function(title) {
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
