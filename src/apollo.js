import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql.now.sh/"
});

export default client;
