Ext.define('TvShows.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.Center',
        'Ext.layout.container.Fit',
        'Ext.plugin.Responsive',
        'TvShows.view.detail.Detail',
        'TvShows.view.main.MainController',
        'TvShows.view.main.MainModel',
        'TvShows.view.thumbview.View'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'center',
    items: [{
        layout: 'border',
        plugins: ['responsive'],
        responsiveConfig: {
            'width <= 1600': {
                height: '90%',
                width: '90%'
            },
            'width > 1600': {
                height: '75%',
                width: '75%'
            }
        },
        items: [
            {
                title: 'TV SHOWS',
                region: 'north',
                xtype: 'detail',
                height: 400
            },
            {
                region: 'center',
                layout: 'fit',
                bind: {
                    store: '{shows}'
                },
                xtype: 'thumbview',
                scrollable: true
            }]
    }]
});
