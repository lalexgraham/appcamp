Ext.define('TvShows.view.detail.Detail', {
    extend: 'Ext.Container',

    xtype: 'detail',
    scrollable: true,
    tpl: [
        '<div class="holder">',
        '<div class="img">',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">',
        '<defs>',
        '<mask id="mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">',
        '<linearGradient y2="1" x2="1" id="fade" x1="1" y1="0">',
        '<stop stop-color="white" stop-opacity="1" offset="0"></stop>',
        '<stop stop-color="white" stop-opacity="0" offset="0.55"></stop>',
        '</linearGradient>',
        '<rect x="0" y="0" width="1" height="1" fill="url(#fade)"></rect>',
        '</mask>',
        '</defs>',
        '<image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{fanart}" width="100%" height="100%" mask="url(#mask)"></image>',
        '</svg>',
        '</div>',
        '</div>',
        '<div class="text">',
        '<b>Genre: {genre}</b><span> S{episode.season}E{episode.number}</span>',
        '<p>{overview:ellipsis(300)}</p>',
        '<p><b>{first_aired:date("j F Y H:s")} {network} {runtime}min</b></p>',
        '</div>',
        '</div>'
    ]

});