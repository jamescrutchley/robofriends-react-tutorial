import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../ErrorBoundary'

// Note: commented out code reflects 'robots' being a fixed array. 
// modified such that we're making an API call. 

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [], //robots,
			searchfield: ''
		}
	}

	componentDidMount() { //demonstratinng this function
		fetch('https://jsonplaceholder.typicode.com/users') //fetch from server
			.then(response=> response.json())
			.then(users => {this.setState({robots: users})});
	}

// search function
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	 //arrow function so that this refers to the right thing
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});

		
		return !robots.length ? //if true, return spinner ...
			<div className="w-100 vh-100 flex items-center justify-center">
			<Spinner className="loading" animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
			</div> :
						// if false, return the following:
			(
			<div className='tc'>
				<h1 className='f1'> Robot Friends </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}






export default App;