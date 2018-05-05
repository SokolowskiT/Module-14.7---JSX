var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var contacts = this.props.items;


		return (<ul className = {'contactsList'}> 
		{contacts.map((contact) => <key={contact.id} item={contact} />)}


			</ul>
		);
	}
});