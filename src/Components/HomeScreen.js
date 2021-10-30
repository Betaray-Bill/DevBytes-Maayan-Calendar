import Login from "./Login"
import '../Style/HomeScreen.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from "./About";
import bg_vid from "../bg_vid.mp4"


function HomeScreen() {
    return (
        <Router>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <div class="HomeScreen">
                    <Login />
                </div>
            </Switch>
        </Router>
    )
}

export default HomeScreen
