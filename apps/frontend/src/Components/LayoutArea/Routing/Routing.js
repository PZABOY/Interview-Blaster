import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PageArea/home/home";
import { About } from "../../PageArea/about/about";
export function Routing() {
    return (_jsx("div", { className: "Routing", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/home" }) }), _jsx(Route, { path: "home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] }) }));
}
