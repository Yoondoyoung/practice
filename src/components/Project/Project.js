import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Project.css';
class Project extends Component {

	render() {
		return (
			<Row className='main'>
				<Col>
					<h1>My Project</h1>
				</Col>
			</Row>
		);
	}
}

export default Project;