import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <div className="Header">
            <nav>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <span> | </span>
                <NavLink to="/about" className="nav-link">About</NavLink>
            </nav>
            <h1 className="shiny">Interview Blaster</h1>
            <h2>Debug interviews before production</h2>
            <p>
                Pick your role, level, and company & we’ll auto-generate razor-sharp mock questions.<br />
                
            </p>
        </div>
    );
}
