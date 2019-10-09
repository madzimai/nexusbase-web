import React from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import CollectionList from './pages/CollectionList';
import CollectionRead from './pages/CollectionRead';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/collections",
    exact: true,
    main: () => <CollectionList />
  },
  {
    path: "/c/:id/:view",
    exact: true,
    main: ({ match }) => <CollectionRead match={match} />
  }
];

export default function Routes() {
  return (
    <div className="content">
      {routes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )}
    </div>
  )
}
