import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'components/Home';
import Create from 'components/Create';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						{/* <Route path="/contact"><Contact/></Route>
						<Route path="/about"><About/></Route> */}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
