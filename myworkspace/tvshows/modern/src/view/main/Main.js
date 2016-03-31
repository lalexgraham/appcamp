Ext.define('TvShows.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    requires: [
        'Ext.dataview.List',
        'TvShows.view.main.MainController',
        'TvShows.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    useTitleAsBackText: false,
    items: [
        {
            title: 'TV Shows',
            cls: 'title',
            xtype: 'list',
            bind: {
                store: '{shows}'
            },
            listeners: {
                itemtap: 'onListTap'
            },
            itemTpl: '<div style="padding: 10px;">S{episode.season}E{episode.number} {title:ellipsis(20)} <span class="date">{first_aired:date("j F Y H:s")}</span></div>'
        }
    ]
});