import './Header.scss';

const Header = () => {
    return(
        <header className="header">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><a className="header__link" href="/">About</a></li>
                    <li className="header__item"><a className="header__link" href="/">Work</a></li>
                    <li className="header__item"><a className="header__link" href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}



export default Header;