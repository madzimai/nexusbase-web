import React from 'react';
import Home from './components/pages/Home';
import CollectionList from './components/pages/CollectionList';
import CollectionRead from './components/pages/CollectionRead';

export const routes = [
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