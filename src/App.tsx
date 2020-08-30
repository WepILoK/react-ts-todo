import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={TodosPage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
