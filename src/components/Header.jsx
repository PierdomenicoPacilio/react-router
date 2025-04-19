import { Link, NavLink } from "react-router-dom";
export default function Header() {
    return <header>
        <nav>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/lista-post">Lista dei Post</NavLink>
            <NavLink to="/chi-siamo">Chi Siamo</NavLink>
        </nav>
    </header>
}