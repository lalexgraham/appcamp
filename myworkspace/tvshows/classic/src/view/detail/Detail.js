Ext.define('TvShows.view.detail.Detail', {
    extend: 'Ext.Component',
    xtype: 'detail',

    requires: [
        'Ext.plugin.Responsive',
        'Ext.util.Format'
    ],

    plugins: ['responsive'],
    config: {
        ellipsis: 400
    },
    updateEllipsis: function(){
        //redo the bind
        this.setData(this.getData());
    },
    responsiveConfig: {
        'width <= 1600': {
            ellipsis: 400
        },
        'width > 1600': {
            ellipsis: 1000
        }
    },

    tpl: [
        "<div class='holder'>",
        "<div class='text'>",
        '<tpl if="logo">',
        '<img class="logo" src="{logo}">',
        '<tpl else>',
        '<h1>{title}</h1>',
        '</tpl>',
        '<tpl if="genre">',
        '<strong>Genre: {genre}</strong> ',
        '</tpl>',
        '<tpl if="episode">',
        'S{episode.season}E{episode.number}',
        '</tpl>',
        '<tpl if="overview">',
        '<p>{[this.getOverview(values)]}</p>',
        '</tpl>',
        '<strong>{first_aired:date("j F Y H:s")} {network}',
        '<tpl if="runtime">{runtime}min</tpl></strong>',
        "</div>",
        '<div class="img">',
        '<div class="applogo">EXTflix</div>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="712" height="400">',
        '<defs>',
        '<mask id="mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">',
        '<linearGradient id="fade_right_svg_gradient" gradientUnits="objectBoundingBox" x2="1" y2="0">',
        '<stop stop-color="white" stop-opacity="0" offset="0"></stop>',
        '<stop stop-color="white" stop-opacity="1" offset="0.75"></stop>',
        '</linearGradient>',
        '<rect x="0" y="0" width="1" height="1" fill="url(#fade_right_svg_gradient)"></rect>',
        '</mask>',
        '</defs>',
        '<image xlink:href="{fanart}" width="712" height="400" mask="url(#mask)"></image>',
        '</svg>',
        '</div>',
        "</div>",
        {
            isEmpty: function(values){
                if(values) return true;
            },
            getOverview: function(values){
                var ellipsis = Ext.ComponentQuery.query('detail')[0].getEllipsis();
                return Ext.util.Format.ellipsis(values.overview, ellipsis);
            }
        }],
    bind: {
        data: '{thumbview.selection}'
    }
});