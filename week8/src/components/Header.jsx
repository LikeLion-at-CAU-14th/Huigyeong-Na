import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/tech">Tech Stack</NavLink></li>
                    <li><NavLink to="/interests">Interests</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;