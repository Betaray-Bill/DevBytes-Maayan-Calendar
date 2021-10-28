import Header from "./Header"
import Sidebar from "./Sidebar"
import "../Style/Home.css"
import CalendarSection from "./CalendarSection"

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="main">
                <Header />
                {/* <CalendarSection /> */}
            </div>
        </div>
    )
}

export default Home
