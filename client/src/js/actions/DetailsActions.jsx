var Reflux = require('reflux');

var DetailsActions = Reflux.createActions([
  'loadDetails',
  'loadComplete'
  ]);

DetailsActions.loadDetails.preEmit = function(name) {
    $.ajax({
        type: 'GET',
        url: 'http://api.populr.io/people/' + escape(name)
      }).done(function(data) {
        data = JSON.parse(data);
        DetailsActions.loadComplete(data);
      });
  }

module.exports = DetailsActions;
