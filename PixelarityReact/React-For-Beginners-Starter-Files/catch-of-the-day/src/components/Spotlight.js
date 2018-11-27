import React from 'react';

class Spotlight extends React.Component {
    render() {
        return  <article id="one" className="spotlight odd accent1">
                    <div className="inner">
                        <div className="image" data-position="top right">
                            {/* <img src="images" alt=""/> */}
                            <p>image here</p>
                        </div>
                        <h2>Chasing<br />Dreams</h2>
                        <div className="content">
                        <h3>What is the Dream Chasers Club</h3></div>
                        <p>... Blog Content</p>
                        <ul className="actions">
                            <li><a href="#" className="Learn More"></a></li>
                        </ul>
                    </div>
                </article>
    }
}

export default Spotlight;