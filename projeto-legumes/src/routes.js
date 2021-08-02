import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



import Main from './pages/main';
import Legumes from './pages/legumes';
import Frutas from './pages/Frutas';
import Saiba_mais from './pages/saiba_mais'
import Parceiros from './pages/parceiros'
import Duvidas from "./pages/duvidas"
import Promocao from "./pages/promocao"

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exatc component={Main} exact />
                <Route path="/legumes" component={Legumes} />
                <Route path="/frutas" component={Frutas} />
                <Route path="/parceiros" component={Parceiros} />
                <Route path="/sobre" component={Saiba_mais} />
                <Route path="/duvidas" component={Duvidas} />
                <Route path="/promocao" component={Promocao} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;