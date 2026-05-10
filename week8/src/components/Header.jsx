import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink href="./index.html" class="active">Home</NavLink></li>
                    <li><NavLink href="./basic.html">About Me</NavLink></li>
                    <li><NavLink href="./tech.html">Tech Stack</NavLink></li>
                    <li><NavLink href="./interests.html">Interests</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;