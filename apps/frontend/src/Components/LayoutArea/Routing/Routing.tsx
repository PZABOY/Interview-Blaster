import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PageArea/home/home";
import { About } from "../../PageArea/about/about";

export function Routing() {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
