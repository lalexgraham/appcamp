/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TvShows.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'TvShows.view.detail.Detail'
    ],

    onListTap: function(list, i, t, rec){
        this.getView().push({
            title: rec.getData().title,
            xtype: 'detail',
            data: rec.getData()
        });
    }

});
