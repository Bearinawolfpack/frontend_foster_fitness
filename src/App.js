import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navbar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import Pricing from "./containers/pricing";
import Contact from "./containers/contact";
import Coach from "./containers/coach";
import Workout from "./containers/workout";
import Schedule from "./containers/schedule";
import NoMatch from "./components/noMatch";
import Layout from "./components/layout";
import Login from "./containers/login"

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
        <NavigationBar />
				{/* <Layout> */}
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />¸
                <Route path="/pricing" component={Pricing} />¸
                <Route path="/schedule" component={Schedule} />¸
                <Route path="/contact" component={Contact} />¸
                <Route path="/workout" component={Workout} />¸
                <Route path="/coach" component={Coach} />¸
                <Route path="/login" component={Login} />¸
                <Route component={NoMatch} />
              </Switch>
            </Router>
					<Footer />
				{/* </Layout> */}
			</React.Fragment>
		);
	}
}

export default App;
