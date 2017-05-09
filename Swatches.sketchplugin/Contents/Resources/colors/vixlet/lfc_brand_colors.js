// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#E31B23', '#E31B23', '#fcd700', '#ebebeb', '#ffffff', '#cfcfcf', '#ededed', '#000000', '#a90f15', '#ffffff', 'rgba(0, 0, 0, 0.6)', '#000000', '#e8e8e8', '#FFFFFF', '#000000', '#000000', '#000000', '#e8e8e8', '#fcd700', '#000000', '#FFFFFF', '#E31B23', '#FFFFFF', '#FFFFFF', '#EC494E', '#FFFFFF', '#000000', '#0D0D0D', '#FFFFFF', '#222222', '#ED3740', '#0D0D0D', '#191919', '#262626', '#333333', '#4C4C4C', '#666666', '#7F7F7F', '#999999', '#B2B2B2', '#CCCCCC', '#D9D9D9', '#E5E5E5', '#F2F2F2', '#F8F8F8', '#FFFFFF', '#E8E8E8', '#E31B23', '#FFFFFF', '#FFFFFF', '#6E0D10', '#AA141A', '#222222', '#000000', '#FFFFFF', '#000000', '#E7363D', '#E31B23', '#FEC400', '#E31B23' ];

var init_lfc_brand_colors = function(title) {
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
