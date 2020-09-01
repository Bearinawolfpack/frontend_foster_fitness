import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ServicesEdit extends React.Component {
	render() {
		return (
			<Layout>
				<Form>
					<Form.Group role="form">
						<Form.Label>Services Edit Form:</Form.Label>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

export default ServicesEdit;
