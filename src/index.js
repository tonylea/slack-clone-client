import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes';

// require('dotenv').config();

const client = new ApolloClient({
  // uri: process.env.GRAPHQL_URI
  uri: 'http://localhost:4000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
