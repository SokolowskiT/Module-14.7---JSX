var contacts = [{
	id: 1,
	firstName: 'John',
	lastName: 'Doe',
	email: 'john.doe@example.com',
}, {
	id: 2,
	firstName: 'Alex',
	lastName: 'Smith',
	email: 'alex.smith@example.com',
}, {
	id: 3,
	firstName: 'Thomas',
	lastName: 'Casablancas',
	email: 'thomas.casablancas@example.com',
}];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {
					className: 'app'
				},
				React.createElement(ContactForm, {
					contact: contactForm
				}),
				React.createElement(Contacts, {
					items: contacts
				}, {})
			)
		);
	}
});