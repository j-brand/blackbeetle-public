import ApiService from "@/common/api.service";

import { GET_ALBUMS, GET_ALBUM_BY_SLUG } from "./action.type";
import { SET_ALBUM, SET_ALBUMS } from "./mutation.type";

type Album = {
  title: string;
  description: string;
};

export interface State {
  album: Album;
}

export const album = {
  state: {
    album: {},
    albums: [],
  },
  mutations: {
    [SET_ALBUM](state: any, album: Album) {
      state.album = album;
    },
    [SET_ALBUMS](state: any, albums: Album[]) {
      state.albums = albums;
    },
  },
  actions: {
    async [GET_ALBUM_BY_SLUG](context: any, slug: string) {
      const { data } = await ApiService.get("album", slug);
      context.commit(SET_ALBUM, data);
      return data;
    },
    async [GET_ALBUMS](context: any) {
      const { data } = await ApiService.get("album");
      context.commit(SET_ALBUMS, data);
      return data;
    },
  },
  getters: {
    albums: (state: any, count?: number) => {
      return state.albums.slice(0, count);
    },
  },
};
