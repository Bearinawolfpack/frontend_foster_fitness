import React from "react";
import Map from "../components/map";
import GymContact from "../components/gym_contact"
import styled from "styled-components";
import Signup from "../components/forms/signup_form"

const Styles = styled.div`
    #gym-info{
        background-color: #fcba03;
    }
`

class Footer extends React.Component {
	render() {
		return (
			<Styles>
                <div id="gym-info">
                    <div>
                        <Map />
                    </div>
                    <div>
                        <span>Contact Us - <GymContact/></span>
                        <span>Contact Us Form Goes Here - <Signup/></span>
                    </div>
                </div>
			</Styles>
		);
	}
}

export default Footer;
