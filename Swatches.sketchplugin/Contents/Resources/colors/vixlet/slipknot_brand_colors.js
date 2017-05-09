// Ant Design Colors
// http://ant.design/docs/spec/colors


var init_slipknot_brand_colors = function(title) {
    var color_list = [ "#141414", "#A43430", "#A43430", "#BC3C37", "#A43430", "#ADADAD", "#FFFFFF", "#878787", "#181818", "#121212", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#181818", "#000000", "#141414", "#252525", "#414141", "#3C3C3C", "#474747", "#5F5F5F", "#757575", "#8D8D8D", "#A3A3A3", "#BBBBBB", "#D1D1D1", "#DDDDDD", "#E9E9E9", "#F4F4F4", "#ED3740", "#FFFFFF", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#A23533", "#FFFFFF", "#383838", "#A43430", "#1E1E1E", "#656565", "#ed3740", "#e8e8e8", "#141414", "#141414", "#000000", "#878787", "#141414", "#878787", "rgba(31, 31, 31, 0.7)", "#1f1f1f", "#8e2a27", "#878787", "#4d4d4d", "#878787", "#232323", "#000000", "#a43430", "#a43430", "#878787", "#a43430", "#6c221f", "#ffffff", "#000000" ];
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
