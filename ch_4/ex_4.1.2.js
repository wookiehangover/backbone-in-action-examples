var user = new Backbone.Model();
user.set('name', 'Walter Mellon');

user.on('change:alias', function(model){
  console.log('Alias: ', model.get('alias'));
});
user.set({ name: 'Hank Venture', alias: 'Batman' });
// => Alias: Batman
