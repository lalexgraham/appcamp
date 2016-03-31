/**
 * Created by leeboonstra on 19/01/16.
 */
Ext.define('TvShows.store.Shows', {
    extend: 'Ext.data.Store',

    alias: 'store.shows',

    requires: [
        'TvShows.model.Show'
    ],

    model: 'TvShows.model.Show',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        extraParams: {
            date: Ext.Date.format(new Date(), 'Y-m-d'),
            days: 1
        },
        url: 'http://se.sencha.com:8124/trakt/shows/upcoming',
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    }
});