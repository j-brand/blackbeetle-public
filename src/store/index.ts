import Vuex from "vuex";

import { album } from "./album.module";
import { story } from "./story.module";

export default new Vuex.Store({
  modules: { album, story },
});
