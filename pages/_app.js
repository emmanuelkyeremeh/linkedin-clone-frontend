import "../styles/globals.css";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

const makestore = () => store;

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
