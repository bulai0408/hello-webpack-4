import axios from 'axios';

export const baseURL = 'http://netease-music.cyh48.cn/';

const instance = axios.create({
  baseURL
});

instance.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    console.error(err);
  }
);

export default instance;
