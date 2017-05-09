// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#878787', '#a43430', '#a43430', '#000000', '#232323', '#878787', '#4d4d4d', '#878787', '#8e2a27', '#1f1f1f', 'rgba(31, 31, 31, 0.7)', '#878787', '#141414', '#878787', '#000000', '#141414', '#141414', '#e8e8e8', '#ed3740', '#656565', '#1E1E1E', '#A43430', '#383838', '#FFFFFF', '#A23533', '#FFFFFF', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#ED3740', '#F4F4F4', '#E9E9E9', '#DDDDDD', '#D1D1D1', '#BBBBBB', '#A3A3A3', '#8D8D8D', '#757575', '#5F5F5F', '#474747', '#3C3C3C', '#414141', '#252525', '#141414', '#000000', '#181818', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#121212', '#181818', '#878787', '#FFFFFF', '#ADADAD', '#A43430', '#BC3C37', '#A43430', '#A43430', '#141414' ];

var init_slipknot_brand_colors = function(title) {
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
