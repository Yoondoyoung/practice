import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import imageProfile from '../../profile.jpg';
class Home extends Component {

	render() {
		return (
			<Row className='main'>
				<Col className='about'>
					<h1 className='home'> Hi, I'm Yoon</h1>
					<p className='home'> i'm gonna be a good developer</p>
					<div>i don't know what should i write here</div>
				</Col>
				<Col>
					<img className='profile' src={imageProfile} alt=''/>
				</Col>
			</Row>
		);
	}
}



export default Home;