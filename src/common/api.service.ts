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
};

export default ApiService;
