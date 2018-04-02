const api = 'http://huzhihui.51vip.biz';
module.exports = {
  webpack: './webpack.dev.config.js',
  paths: {
    // '/sysProject/getAll': api,
    '/sysProject/getAll': ({ proxy }) => {
      proxy('http://huzhihui.51vip.biz/sysProject.getAll');
    },
  },
};
