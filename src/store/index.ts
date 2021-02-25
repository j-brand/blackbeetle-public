import Vuex from "vuex";

import { createStore } from "vuex";
import { album } from "./album.module";

export default new Vuex.Store({
  modules: { album },
});
