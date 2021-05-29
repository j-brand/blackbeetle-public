import Vuex from "vuex";

import { ActionTypes } from "./action.type";
import { MutationTypes } from "./mutation.type";

import { album } from "./album.module";
import { story } from "./story.module";

const state = {
  state: {
    menuOpen: false,
  },
  mutations: {
    [MutationTypes.SET_MENU_STATE](state: any, open: boolean) {
      state.menuOpen = open;
    },
    [MutationTypes.TOGGLE_MENU](state: any) {
      state.menuOpen = !state.menuOpen;
    },
  },
  actions: {
    [ActionTypes.SET_MENU_STATE](context: any, menuOpen: boolean) {
      context.commit(MutationTypes.SET_MENU_STATE, menuOpen);
    },
    [ActionTypes.TOGGLE_MENU](context: any) {
      context.commit(MutationTypes.TOGGLE_MENU);
    },
  },
  getters: {
    menuOpen: (state) => {
      return state.menuOpen;
    },
  },
};

export default new Vuex.Store({
  modules: { state, album, story },
});
