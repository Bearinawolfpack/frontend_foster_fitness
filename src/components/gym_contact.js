import React from 'react'
import { Container } from "react-bootstrap";
import { BiMap } from 'react-icons/bi';
import { ImPhone } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai'

const gymContact = () => (
    <Container>
        <h3>Ready?</h3>
        <p>Talk to us in person, on the Phone, or via Email!</p>
        
        <h4><BiMap/>Location</h4>
        <p>111 Deer Park Ave, Babylon, NY 11702</p>
        
        <h4><ImPhone/>Phone</h4>
        <p>1(631) 587-2000</p>
        
        <h4><AiOutlineMail/>Email</h4>
        <p>admin@fosterfitness.com</p>
        
        <p>Still have questions?</p>
        <p>Fill out the form and we'll get back to your within 24hr.</p>
    </Container>
)

export default gymContact