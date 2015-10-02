Meteor.publish('mobs', function () {
  return Mobs.find();
});

Meteor.publish('items', function () {
  return Items.find();
});

Meteor.publish('places', function () {
  return Places.find();
});

Meteor.publish('classes', function () {
  return Classes.find();
});

Meteor.publish('user', function () {
  return Meteor.users.find({}, {fields: {character: 1, facebook: 1}});
});