import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.eyeson.team';
axios.defaults.headers.common['Authorization'] = process.env.EYESON_API_KEY;

Vue.prototype.$axios = axios
