import type { AppProps } from "next/app";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import {store} from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
