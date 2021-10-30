import Header from "./Header"
import Sidebar from "./Sidebar"
import "../Style/Home.css"
import CalendarSection from "./CalendarSection"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import About from "./About";
import Contact from "./Contact";

  
function Home() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <HomeScreen />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <div className="home">
                    <Sidebar />
                    <div className="main">
                        <Header />
                        <CalendarSection />
                    </div>
            </div>
            </Switch>
        </Router>
    )
}

export default Home
