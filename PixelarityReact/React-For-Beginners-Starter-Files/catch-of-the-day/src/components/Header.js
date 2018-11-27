import React from 'react';

class Header extends React.Component {
    render() {
        return  <header id="header" className="alt">
                    <a className="logo">The Dream Chasers Club <span>by Shaun Hartman</span></a>
                    <nav>
                        <ul>
                            <li>
                                <a>Menu</a>
                            </li>
                        </ul>
                    </nav>
                </header>

    }
}

export default Header;