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
                        <span><GymContact/></span>
                        <span><Signup/></span>
                    </div>
                </div>
			</Styles>
		);
	}
}

export default Footer;
