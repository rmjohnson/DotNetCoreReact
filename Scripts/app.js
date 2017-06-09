import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UsersList from './Components/users-list';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello ASP.NET Core and React!</h1>
				<UsersList />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));