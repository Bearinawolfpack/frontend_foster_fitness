import React from "react";
import Layout from "../layout";

class ShowCoach extends React.Component {
	state = { stateCoach: {} };

	componentDidMount() {
		fetch(`http://localhost:3000/coaches/${this.props.match.params.id}`)
			.then((resp) => resp.json())
			.then((coach) => this.setState({ stateCoach: coach }));
	}

	render() {
		return (
			<Layout>
				<h3>{this.state.stateCoach.name}</h3>
				<img
					src={this.state.stateCoach.picture}
					alt="Foster Fitness Coach"
					width="500"
					height="500"
				/>
				<p>{this.state.stateCoach.bio}</p>
			</Layout>
		);
	}
}

export default ShowCoach;
