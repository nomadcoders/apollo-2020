import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: () => false
    }
  }
});

export default client;
