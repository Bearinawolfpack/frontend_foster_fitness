import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminServicesCard from '../cards/admin_services_card'

class ServicesEdit extends React.Component {
    state = {
        name: "",
        description: "",
        price: 0,
        stateServices: []
    };
    
    state = { stateService: [] }

    componentDidMount(){
        fetch('http://localhost:3000/services')
        .then(resp => resp.json())
        .then(services => this.setState({stateService: services}))
    }

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
    };
    
    clickHandler = (id, str) => {
        if(str === "Delete"){
            this.deleteHandler(id)
        } else if (str === "Edit"){
            this.editHandler(id)
        }
    }

    deleteHandler = (id) => {
        fetch("http://localhost:3000/services/" + String(id), {
        method: "DELETE"
        })
    }

    editHandler = (id) => {
        console.log(id)
    }

	submitHandler = (event) => {
		event.preventDefault();

		fetch("http://localhost:3000/services", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
                "name": this.state.name,
                "description": this.state.description,
                "price": this.state.price,
                "admin_id": 8
			}),
        })
            .then(console.log)
			.then(this.resetSignup)
    };
    
    resetSignup = () => {
        this.setState({
			name: "",
			description: "",
			price: 0,
		});
	};

	render() {
        let gymServices = this.state.stateService.map(service => <AdminServicesCard service={service} key={service.id} clickHandler={this.clickHandler}/>)
		return (
			<Layout>

                <h1>Current Services Go Here</h1>
                {gymServices}
				<Form onSubmit={this.submitHandler}>
					<Form.Group role="form">
						<Form.Label>Services Edit Form:</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Name of the Service"
							value={this.state.name}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="description"
							placeholder="What is this Service for?"
							value={this.state.description}
							onChange={this.changeHandler}
						/>
						<br />
                        <Form.Control
                            type="number"
                            step="0.01"
							name="price"
							placeholder="Price of Service"
							value={this.state.price}
							onChange={this.changeHandler}
						/>
						<br />
						<Button variant="primary" type="submit">
							Add Service
						</Button>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

export default ServicesEdit;