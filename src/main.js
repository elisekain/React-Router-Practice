import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

class App extends React.Component {
	render() {
		return  (
			<div>
				<h1>Here is some content that will always be on the page</h1>
				<br />
				<ul>
					<li><Link to="/todo">Todos</Link></li>
					<li><Link to="/ron-swanson">Ron Typing</Link></li>
				</ul>

				{this.props.children}
			</div>
		)
	}
}

//404
import NoMatch from '../src/components/nomatch.jsx'

//Todo
import Todo from '../src/components/todo.jsx'
import Ron from '../src/components/ron.jsx'

render((<Router history={hashHistory}>
	<Route name="app" path="/" component={App}>
		<Route name="todo" path="todo" component={Todo} />
		<Route name="ron-swanson" path="ron-swanson" component={Ron} />
	</Route>
	<Route key="404" path="*" component={NoMatch} />
</Router>), document.getElementById('root'))
