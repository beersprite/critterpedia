import Home from './Home';
import Umbra from './Umbra';
import Litany from './Litany';
import Anamorphosis from './Anamorphosis';
import Eternity from './Eternity';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <Router>
         <div> 
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Umbra">
                    <Umbra />
                </Route>
                <Route exact path="/Litany">
                    <Litany />
                </Route>
                <Route exact path="/Anamorphosis">
                    <Anamorphosis />
                </Route>
                <Route exact path="/Eternity">
                    <Eternity />
                </Route>

            </Switch>
         </div>
        </Router>
    );
}

export default App;