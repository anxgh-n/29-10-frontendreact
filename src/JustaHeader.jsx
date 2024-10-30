import { Link } from "react-router-dom";

export default function JustaHeader(){

    return(<>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark m-5">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link">Counter Component</Link>
                </li>
                {/* anchor tag kills the purpose of single page application
                as it reload page from the server - 
                instead we use "link tag" */}
                <li className="nav-item">
                    <Link to="/ecom-list" className="nav-link">E-commerce Component</Link>
                </li>
                <li className="nav-item">
                <Link to="/training" className="nav-link">Training Area</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>);
}