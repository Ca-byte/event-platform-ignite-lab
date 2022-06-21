import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl4oindpn08ra01xkfy0l7a2h/master',
    cache: new InMemoryCache()
})