import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { debug } from 'debug';
import fetch from 'isomorphic-unfetch';

import { GRAPHQL_URL, IS_SERVER } from '../config';

const logger = debug('app:initApollo');
logger.log = console.log.bind(console);


