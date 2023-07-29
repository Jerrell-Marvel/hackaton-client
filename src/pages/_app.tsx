import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "../../context/LoginContext";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </QueryClientProvider>
  );
}
