import { GraphQLClient } from 'graphql-request';

const endpoit = 'http://localhost:3051/graphql';

export const graphqlClient = new GraphQLClient(endpoit);
