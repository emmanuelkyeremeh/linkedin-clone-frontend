import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import { signupReducer, loginReducer } from "./reducers/userReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

let userData = "";

const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
  userData = localStorage.getItem("userDataLinkedin")
    ? JSON.parse(localStorage.getItem("userDataLinkedin"))
    : null;
}

const initialState = {
  userLogin: {
    userDataLinkedin: userData,
  },
};

const reducer = combineReducers({
  userSignup: signupReducer,
  userLogin: loginReducer,
});

let store;

const isClient = typeof window !== "undefined";

if (isClient) {
  const persistConfig = {
    key: "root",
    storage,
  };
  store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.__PERSISTOR = persistStore(store);
} else {
  store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;
