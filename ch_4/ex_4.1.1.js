var user = new Backbone.Model({
  name: 'Walter Mellon'
});

user.get('name');
// => Walter Mellon

user.on('change', function(model){
  console.log('Changed Attributes: ', model.changedAttributes());
});

user.set('name', 'Hank Venture');
// => Changed Attributes: { name: 'Hank Venture' }


/* Warning: this illustrates an anti-pattern, do not use */
var store = new Backbone.Model({
  name: "Hank's Supply Co",
  hours: {
    weekdays: '10 - 5',
    weekends: '12 - 4'
  }
});

var hours = store.get('hours');

hours.holidays = 'closed'; // no events events triggered

store.toJSON();
// {
//   name: "Hank's Supply Co",
//   hours: {
//     weekdays: '10 - 5',
//     weekends: '12 - 4',
//     holidays: 'closed' // directly modified via reference
//   }
// }


var StoreModel = Backbone.Model.extend({
  get: function(attr){
    return _.clone(this.attributes[attr]);
  },
});
