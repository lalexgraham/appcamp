Ext.define('TvShows.model.Show', {
  extend: 'Ext.data.Model',
  fields: [{
      type: 'date',
      name: 'first_aired',
      dateFormat: 'C',
      convert: function(data) {
        return data;
      }
    },
    {
      name: 'title',
      type: 'string',
      mapping: 'show.title'
    }, {
      name: 'episode',
      type: 'auto'
    }, {
      name: 'genre',
      type: 'auto',
      mapping: 'show.genres[0]'
    }, {
      name: 'overview',
      type: 'string',
      mapping: 'show.overview'
    }, {
      name: 'network',
      type: 'string',
      mapping: 'show.network'
    }, {
      name: 'runtime',
      type: 'int',
      mapping: 'show.runtime'
    }, {
      name: 'logo',
      type: 'string',
      mapping: 'show.images.logo.full'
    }, {
      name: 'thumb',
      type: 'string',
      mapping: 'show.images.poster.thumb',
      convert: function(data){
        if(!data) return 'classic/resources/placeholder-t.png';
      }
    }, {
      name: 'fanart',
      type: 'string',
      mapping: 'show.images.fanart.full',
      convert: function(data){
        if(!data) return 'classic/resources/placeholder.png';
      }
    }, {
      name: 'year',
      type: 'int'
    }, {
      name: 'slug',
      type: 'string',
      mapping: 'show.ids.slug'
    }
  ]
});
