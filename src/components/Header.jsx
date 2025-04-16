import { Link, NavLink } from "react-router-dom";
export default function Header() {
    return <header>
        <nav>
            <Link to="/">Home Page</Link>
            <NavLink to="/chi-siamo">Chi Siamo</NavLink>
            <NavLink to="/lista-post">Lista dei Post</NavLink>
        </nav>
    </header>
}