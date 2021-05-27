import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = `${process.env.VUE_APP_PUBLIC_URL}/api`;
  },

  get(endpoint: string, slug = "") {
    
    if (slug != "") {
      slug = `/${slug}`;
    }

    return axios.get(`${endpoint}${slug}`);
  },

  post(endpoint: string, payload) {
    return axios.post(`${endpoint}`, payload);
  },
};

export default ApiService;
