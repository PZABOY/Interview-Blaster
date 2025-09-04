import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Layout.css";
import { Routing } from "../Routing/Routing";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
export function Layout() {
    return (_jsxs("div", { className: "Layout", children: [_jsx("header", { children: _jsx(Header, {}) }), _jsx("main", { children: _jsx(Routing, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
}
