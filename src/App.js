import React from 'react';
import HelloWorld from './features/helloWorld/HelloWorld';
import TeamBuilder from './features/teamBuilder/TeamBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="mb-5 text-center">
            <Link className="mr-3 btn btn-outline-primary" to="/hello-world">Go to Hello World</Link>
            <Link className="btn btn-outline-primary" to="/team-builder">Go to Team Builder</Link>
          </nav>

          <Switch>
            <Route path="/hello-world">
              <HelloWorld />
            </Route>
            <Route path="/team-builder">
              <TeamBuilder />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
