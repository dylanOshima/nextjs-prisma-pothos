import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import client from "../lib/apollo-client";

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
