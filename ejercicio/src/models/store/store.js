import { createStore } from "redux";
import { firstReducer } from "../reducers/firstReducer";

const initialStore = {
  ping: "...loading",
  pong: "...loading"
};

export const store = createStore(firstReducer, initialStore);
