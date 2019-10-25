import React from 'react';
import { render } from 'react-dom';

import AppShell from '../../app/AppShell';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

// TODO: Create the GraphQL Hooks Client
// 1. Import GraphQLClient from graphql-hooks
// 2. Instantiate a GraphQLClient
// 3. It requries an object, with a required property url
// 4. This points to our GraphQL API, so it should be /graphql matching the server url

// TODO: Wrap the AppShell in GraphQL Hooks Provider
// 1. Import ClientContext from graphql-hooks
// 2. Render it as the AppShell's parent: <ClientContext.Provider>
// 3. Pass in the value prop as our client we just created value={client}

const client = new GraphQLClient({ url: `http://localhost:3000/graphql` });

const App = (
  <ClientContext.Provider value={client}>
    <AppShell />
  </ClientContext.Provider>
);

render(App, document.getElementById('app-root'));
