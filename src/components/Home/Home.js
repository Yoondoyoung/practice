import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
class Home extends Component {

	render() {
		return (
			<Row className='main'>
				<Col xs={6}>
					<h1 className='home'> Hi, I'm Yoon</h1>
				</Col>
				<Col xs={6}>
					<p className='home'> i'm gonna be a good developer</p>
				</Col>
			</Row>
		);
	}
}

export default Home;