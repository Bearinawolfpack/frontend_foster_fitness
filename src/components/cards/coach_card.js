import React from "react";
import Layout from "../layout";
import { Link } from 'react-router-dom';

const CoachCard = (props) => (
	<React.Fragment>
        <Layout>
			<h3>{props.coach.name}</h3>
            <nav>
                <Link to={`/coach/${props.coach.id}`}>
                    <img
                        src={props.coach.picture}
                        alt="Foster Fitness Coach"
                        width="300"
                        height="300"
                    />
                </Link>
            </nav>
			<p>{props.coach.bio}</p>
		</Layout>
    </React.Fragment>
)

export default CoachCard
