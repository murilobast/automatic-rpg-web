// Home route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
  }
});

// Character Selection route
Router.route('/select', {
  name: 'charSelect',
  waitOn: function () {
  	return this.subscribe('classes'),
      this.subscribe('user');
  },
  action: function () {
  	if (this.ready()) {
      if (!Meteor.user().character) {
        this.render('charSelect');
      } else {
        this.render('charSelect');
        // Router.go('/');
      }
  	}
  }
});
