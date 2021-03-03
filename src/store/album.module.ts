import ApiService from "@/common/api.service";

import { ActionTypes } from "./action.type";
import { MutationTypes } from "./mutation.type";

import { Album } from "@/common/models/album";

export const album = {
  state: {
    album: {},
    albums: [],
  },
  mutations: {
    [MutationTypes.SET_ALBUM](state: any, album: Album) {
      state.album = album;
    },
    [MutationTypes.SET_ALBUMS](state: any, albums: Album[]) {
      state.albums = albums;
    },
  },
  actions: {
    async [ActionTypes.GET_ALBUM_BY_SLUG](context: any, slug: string) {
      const { data } = await ApiService.get("album", slug);
      context.commit(MutationTypes.SET_ALBUM, data);
      return data;
    },
    async [ActionTypes.GET_ALBUMS](context: any) {
      const { data } = await ApiService.get("album");
      context.commit(MutationTypes.SET_ALBUMS, data);
      return data;
    },
  },
  getters: {
    albums: (state: any, count?: number) => {
      return state.albums;
    },
    album: (state: any) => {
      return state.album;
    },
  },
};
