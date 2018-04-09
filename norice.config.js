const api = 'http://huzhihui.51vip.biz';

module.exports = {
  webpack: './webpack.dev.js',
  paths: {
    '/apis/sysUser/login': {
      method: 'post',
      success: ({ proxy, req }) => {
        proxy('http://huzhihui.51vip.biz/sysUser/login', {
          method: 'post',
          headers: {
            ...req.headers,
            Host: 'huzhihui.51vip.biz',
          },
        });
      },
    },
    '/sysProject/getAll': ({ proxy }) => {
      proxy('http://huzhihui.51vip.biz/sysProject/getAll', {
        headers: {
          Host: 'huzhihui.51vip.biz',
        },
      });
    },
    '/apis/system/info': ({ proxy }) => {
      proxy('http://huzhihui.51vip.biz/system/info', {
        headers: {
          Host: 'huzhihui.51vip.biz',
        },
      });
    },
    '/apis/system/projectStatus': ({ proxy }) => {
      proxy('http://huzhihui.51vip.biz/system/projectStatus', {
        headers: {
          Host: 'huzhihui.51vip.biz',
        },
      });
    },
  },
};
