import "@/styles/globals.css";
import ErrorBoundary from "@/components/error";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

export default function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];
  return (
    <ErrorBoundary>
      <StarknetConfig connectors={connectors}>
        <Component {...pageProps} />
      </StarknetConfig>
    </ErrorBoundary>
  );
}
