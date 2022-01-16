import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API as string;

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
