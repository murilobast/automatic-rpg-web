Session.setDefault('selected', 'warrior');

Template.charSelect.helpers({
	getClasses: function () {
		return Classes.find();
	},
	description: function () {
		return Session.get('desc');
	}
});

Template.charSelect.events({
	'focus #charName': function (e) {
		var $this = $(e.target);
		var $opacity = $('.opacity');
		$opacity.fadeIn("slow");
		$this.addClass('floating');
	},
	'blur #charName': function (e) {
		var $this = $(e.target);
		var $opacity = $('.opacity');
		$opacity.fadeOut("slow");
		$this.removeClass('floating');
	},
	'submit #sendName': function (e) {
		e.preventDefault();
		e.stopPropagation();
		var name = e.target.name;
		var selClass = Session.get('selected');
		var obj = {
			character: {
				class: selClass,
				name: name.value,
				timestamp: new Date()
			}
		}
		Meteor.call('updateUser', obj, function (err) {
			if (!err) {
				$('.selection').fadeOut('slow', function () {
					Router.go('/');
				});
			}
		});
		e.target.name.value = '';
	}
});

Template.class.helpers({
	isSelected: function () {
		var selected = Session.get('selected')
		if (this.name === selected) {
			Session.set('desc', this.desc);
			return 'selected';
		}
	}
});

Template.class.events({
	'click #class': function (e) {
		Session.set('selected', this.name);
	}
});