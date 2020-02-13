import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './Homepage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="ui body">
                    <Route path="/" exact component={HomePage} />
                </div>
            </BrowserRouter>
        </div>);
};

export default App;