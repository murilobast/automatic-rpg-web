Meteor.methods({
	updateUser: function (obj) {
		Meteor.users.update(Meteor.userId, {$set: obj}, function (err, d) {
			if (!err) {
				return 1;
			} else {
				throw new Meteor.error('Error');
			}
		});
	}
});