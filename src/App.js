import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { routes } from './routes'

function App() {
  return (
    <Router>
      <div className="App">
          <div className="header">
            <Link to="/">NexusBase</Link>-|-
            <Link to="/collections">Collections</Link>
          </div>
          <hr/>
        <div className="content">
          {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
