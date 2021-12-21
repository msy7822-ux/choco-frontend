import { setContext } from '@apollo/client/link/context';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
} from "@apollo/client";

// apollo client default options
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql?apollo=true`,
});

// create apollo link
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token && token !== 'undefined' ? token : "",
    }
  }
});

// apollo cache init config
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        merchandises: {
          merge() {
            return {};
          },

          read(existing) {
            return existing;
          },
        }
      }
    }
  }
});

// apollo persist cache
export const doPersistCache = async () => {
    if (typeof window !== 'undefined') {{
      return await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
      });
  }}
}

// apollo client initialize
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
  defaultOptions: defaultOptions,
});

