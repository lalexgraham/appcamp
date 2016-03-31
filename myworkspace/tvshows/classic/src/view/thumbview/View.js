Ext.define('TvShows.view.thumbview.View', {
    extend: 'Ext.view.View',
    alias: 'widget.thumbview', //xtype: 'thumbview'

    tpl: [
        '<h2>Upcoming shows</h2>',
        '<tpl for=".">',
        '<div class="thumb">',
        '<img src="{thumb}">',
        '</div>',
        '</tpl>'
    ],
    itemSelector: '.shows div.thumb',

    cls: 'shows',
    itemCls: 'show',
    overItemCls: 'over',
    selectedItemCls: 'selected',

    reference: 'thumbview'
});
