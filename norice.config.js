const api = 'http://huzhihui.51vip.biz';
module.exports = {
  webpack: './webpack.dev.js',
  paths: {
    // '/sysProject/getAll': api,
    '/': './dist/index.html',
    '/sysProject/getAll': ({ proxy }) => {
      proxy('http://huzhihui.51vip.biz/sysProject.getAll');
    },
  },
};
