import React from 'react'
import Form from 'react-bootstrap/Form'
import Layout from '../layout'
import Button from 'react-bootstrap/Button'

const Signup = () => (
    <Layout>
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" value=''/>
            <br />
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Email" value=''/>
            <br />
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Phone Number" value=''/>
            <br />
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Tell us what's on your mind..." value=''/>
            <br />
            <Button variant="dark" type="submit">Submit</Button>
        </Form.Group>
    </Layout>
)

export default Signup