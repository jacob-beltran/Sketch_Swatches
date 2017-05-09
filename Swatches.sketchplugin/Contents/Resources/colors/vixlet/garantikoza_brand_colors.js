// Ant Design Colors
// http://ant.design/docs/spec/colors

var color_list = [ '#0085ca', '#0085ca', '#1a171b', '#ebebeb', '#FFFFFF', '#cfcfcf', '#ededed', '#0085ca', '#005f90', '#ffffff', 'rgba(12,51,86,0.8)', '#222222', '#e7f1f4', '#FFFFFF', '#ffffff', '#525252', '#0c3d67', '#e8e8e8', '#00aad6', '#828386', '#ffffff', '#0085ca', '#ffffff', '#ffffff', '#18a0e7', '#ffffff', '#000000', '#0d0d0d', '#ffffff', '#222222', '#ed3740', '#0d0d0d', '#191919', '#262626', '#333333', '#4c4c4c', '#666666', '#7f7f7f', '#999999', '#b2b2b2', '#cccccc', '#d9d9d9', '#e5e5e5', '#f2f2f2', '#f8f8f8', '#ffffff', '#e8e8e8', '#007ec0', '#ffffff', '#ffffff', '#004062', '#006397', '#222222', '#000000', '#f1f1f1', '#000000', '#17affe', '#0085ca', '#000000', '#0085ca' ];

var init_garantikoza_brand_colors = function(title) {
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
