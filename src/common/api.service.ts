import Vue from "vue";

import { environment } from "./envionment";
import axios from "axios";
const ApiService = {
  init() {
    axios.defaults.baseURL = environment.apiUrl;
  },

  get(endpoint: string, slug = "") {
    return axios.get(`${endpoint}/${slug}`);
  },

  post(endpoint: string, payload) {
    return axios.post(`${endpoint}`, payload);
  },

  /*   

  setHeader() {
    Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`; 
  },

  get(){
      return axios.get()
      
  }

  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }, 

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },  */
};

export default ApiService;
