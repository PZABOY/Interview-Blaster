import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
export function Header() {
    return (_jsxs("div", { className: "Header", children: [_jsxs("nav", { children: [_jsx(NavLink, { to: "/home", className: "nav-link", children: "Home" }), _jsx("span", { children: " | " }), _jsx(NavLink, { to: "/about", className: "nav-link", children: "About" })] }), _jsx("h1", { className: "shiny", children: "Interview Blaster" }), _jsx("h2", { children: "Debug interviews before production" }), _jsxs("p", { children: ["Pick your role, level, and company & we\u2019ll auto-generate razor-sharp mock questions.", _jsx("br", {})] })] }));
}
