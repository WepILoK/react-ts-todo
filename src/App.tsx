import React from 'react';
import {Switch, Route, HashRouter} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";


function App() {
    return (
        <HashRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={TodosPage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
