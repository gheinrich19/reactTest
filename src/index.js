import React from 'react';
import ReactDOM from "react/lib/ReactDOM";

import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyA3MGykVaeK7YJ1vOPGFw2B87Fg1I-F6JI';
// Create a new component. This component should produce some html.


const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    )
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
