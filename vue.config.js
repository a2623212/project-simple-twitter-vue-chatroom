module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/project-simple-twitter-vue-chatroom/" : "/",
  devServer: {
    proxy: "https://a2623212.github.io",
  },
};
