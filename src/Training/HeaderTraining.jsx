import { Link, Outlet } from "react-router-dom";

export default function HeaderApp(){

    return(<>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark m-5">
        <div className="container-fluid">
            
                {/* anchor tag kills the purpose of single page application
                as it reload page from the server - 
                instead we use "link tag" */}
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/training/venue-list" className="nav-link">Venue List</Link>
                </li>
                <li className="nav-item">
                <Link to="/training/cohort-list" className="nav-link">Cohort List</Link>
                </li>
                <li className="nav-item">
                <Link to="/training/cohort-add" className="nav-link">Cohort Add</Link>
                </li>
                <li className="nav-item">
                <Link to="/training/venue-add" className="nav-link">Venue Add</Link>
                </li>
                
            </ul>
        </div>
    </nav>
    <Outlet></Outlet>
    </>);
}