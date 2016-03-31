/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TvShows.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'TvShows.store.Shows'
    ],

    stores: {
        'shows': {
            type: 'shows',
            storeId: 'TvShows'
        }
    }
});
