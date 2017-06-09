import React, { Component } from 'react';
import AjaxUtility from '../Utility/ajax-utility';

export default class UsersList extends Component {
	state = {
		users: []
	}

	async componentDidMount() {
		const users = await AjaxUtility.getJson('/api/users');
		this.setState({ users });
	}
	
	render() {
		const { users } = this.state;

		if (users.length === 0) {
			return null;
		}

		return (
			<ul>
				{users.map(u => <li key={u}>{u}</li>)}
			</ul>
		)
	}
}