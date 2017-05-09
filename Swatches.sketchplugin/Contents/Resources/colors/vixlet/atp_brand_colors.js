// Ant Design Colors
// http://ant.design/docs/spec/colors
var color_list = [ '#00AEEF', '#00AEEF', '#002663', '#f8f8f8', '#ffffff', '#cfcfcf', '#ededed', '#002663', '#008dc2', '#ffffff', 'rgba(23, 31, 70, 0.8)', '#FFFFFF', '#343434', '#FFFFFF', '#1e2222', '#097ebb', '#222b36', '#e8e8e8', '#c6d22d', '#828386', '#FFFFFF', '#00AEEF', '#FFFFFF', '#FFFFFF', '#4EC7F5', '#FFFFFF', '#000000', '#0D0D0D', '#FFFFFF', '#222222', '#ED3740', '#0D0D0D', '#191919', '#262626', '#333333', '#4C4C4C', '#666666', '#7F7F7F', '#999999', '#B2B2B2', '#CCCCCC', '#D9D9D9', '#E5E5E5', '#F2F2F2', '#F8F8F8', '#FFFFFF', '#E8E8E8', '#00AEEF', '#FFFFFF', '#FFFFFF', '#005474', '#0082B3', '#222222', '#000000', '#F1F1F1', '#000000', '#0FBEFF', '#00AEEF', '#000000', '#00AEEF'];

var init_atp_brand_colors = function(title) {
    var colors = [];
    for( var i = 0; i < color_list.length; i++ ) {
        colors.push( [ 'brand' + i, tinycolor( color_list[ i ] ).toHex() ] );
    }

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
