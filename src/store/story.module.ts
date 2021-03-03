import ApiService from "@/common/api.service";
import { Story } from "@/common/models/story";
import { ActionTypes } from "./action.type";
import { MutationTypes } from "./mutation.type";

export const story = {
  state: {
    story: {},
    stories: [],
  },
  mutations: {
    [MutationTypes.SET_STORY](state: any, story: Story) {
      state.story = story;
    },
    [MutationTypes.SET_STORIES](state: any, stories: Story[]) {
      state.stories = stories;
    },
  },
  actions: {
    async [ActionTypes.GET_STORY_BY_SLUG](context: any, slug: string) {
      const { data } = await ApiService.get("story", slug);
      context.commit(MutationTypes.SET_STORY, data);
      return data;
    },
    async [ActionTypes.GET_STORIES](context: any) {
      const { data } = await ApiService.get("story");
      context.commit(MutationTypes.SET_STORIES, data);
      return data;
    },
  },
  getters: {
    stories: (state: any) => {
      return state.stories;
    },
    story: (state: any) => {
      return state.story;
    },
  },
};
