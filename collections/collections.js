Mobs = new Mongo.Collection('mobs');
Items = new Mongo.Collection('items');
Places = new Mongo.Collection('places');
Classes = new Mongo.Collection('classes');

// Classes.allow({
// 	insert: function () {
// 		return true;
// 	},
// 	update: function () {
// 		return true;
// 	}
// });