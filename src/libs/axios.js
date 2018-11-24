const instance = axios.create({
  baseURL: "http://westo.club:3001/",
  timeout: 5000
});

instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data;
    }
    return Promise.reject(res);
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
