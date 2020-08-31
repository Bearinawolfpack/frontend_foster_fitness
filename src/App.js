import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navbar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import Pricing from "./containers/pricing";
import Contact from "./containers/contact";
import  Coach from "./containers/coach";
import ShowCoach from "./components/cards/coach_show"
import Workout from "./containers/workout";
import Schedule from "./containers/schedule";
import NoMatch from "./components/noMatch";
import Login from "./containers/login"
import Admin from "./containers/admin"

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
        <NavigationBar />
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />¸
                <Route path="/pricing" component={Pricing} />¸
                <Route path="/schedule" component={Schedule} />¸
                <Route path="/contact" component={Contact} />¸
                <Route path="/workout" component={Workout} />¸
                <Route path="/coach" exact component={Coach} />¸
                <Route path="/coach/:id" component={ShowCoach} />¸
                <Route path="/login" component={Login} />¸
                <Route path="/admin" component={Admin} />,
                <Route component={NoMatch} />
              </Switch>
            </Router>
					<Footer />
			</React.Fragment>
		);
	}
}

export default App;
