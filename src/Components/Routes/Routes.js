import Home from './Home';
import Bugs from './Bugs';
import Fish from './Fish';
import SeaCreatures from './SeaCreatures';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <Router>
         <div> 
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Bugs">
                    <Bugs />
                </Route>
                <Route exact path="/Fish">
                    <Fish />
                </Route>
                <Route exact path="/SeaCreatures">
                    <SeaCreatures />
                </Route>
            </Switch>
         </div>
        </Router>
    );
}

export default App;