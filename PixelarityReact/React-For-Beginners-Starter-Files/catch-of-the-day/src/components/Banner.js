import React from 'react';

class Banner extends React.Component {
    render() {
        return  <section id="banner">
                    <div className="inner">
                        <h1>The<br />
                        Dream Chasers<br />
                        Club</h1>
                        <p>Helping Dreams come true regardless of where the Dreamer comes from</p>
                        <ul className="actions special">
                            <li><a href="#one" className="button large wide scrolly-middle">Discover More</a></li>
                        </ul>
                    </div>
                </section>
    }
}

export default Banner;
