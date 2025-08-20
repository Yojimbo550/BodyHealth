import { Link } from "react-router-dom"

import "./theNavigation.scss"

const  TheNavigation = () => {

    return(

        <div className="navigation">
            <Link to="/">Main page</Link>
            <Link to="/tasks">tasks</Link>
            <Link to="/body">body health</Link>
            <Link to="/calendar">calendar</Link>
            <Link to="/music">music</Link>
            <Link to="/weather">weather</Link>

        </div>
    )

}

export default TheNavigation