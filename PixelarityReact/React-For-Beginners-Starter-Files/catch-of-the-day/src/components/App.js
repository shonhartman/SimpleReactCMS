import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Spotlight from './Spotlight';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Spotlight />
            </div>

        )
    }
}

export default App;