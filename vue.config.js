module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xiongmaoyouxuan.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
