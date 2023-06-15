import { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "../lib/relay/environment";

const App = ({ Component, pageProps }: AppProps) => {
  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
};

export default App;
