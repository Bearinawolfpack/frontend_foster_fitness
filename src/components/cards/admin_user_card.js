import React from "react";
import { Container } from 'react-bootstrap'

const AdminUserCard = (props) => (
		<Container>
			<span><strong>Name: </strong></span><h5>{props.user.name}</h5>
			<span><strong>Email: </strong></span><h6>{props.user.email}</h6>
			<span><strong>Phone Number: </strong></span><h6>{props.user.phone}</h6>
			<span><strong>Message: </strong></span><p>{props.user.message}</p>
            <span><strong>Created at: </strong></span><p>{props.user.created_at}</p>
		</Container>
);


export default AdminUserCard;
