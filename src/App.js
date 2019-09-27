import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Pages from './components/pages/Index'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => Pages.Home()
  },
  {
    path: "/collections",
    exact: true,
    main: () => Pages.Collections()
  }
];

function App() {
  return (
    <Router>
      <div className="App">
          <table>
            <tr>
              <td>
                NexusBase |
              </td>
              <td>
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/collections">Collections</Link>
              </td>
            </tr>
          </table>
        <div className="content">
          {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
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
