const api = 'http://huzhihui.51vip.biz';

module.exports = {
  webpack: './webpack.dev.js',
  paths: {
    '/apis/sysUser/login': {
      method: 'post',
      success: ({ proxy, req }) => {
        console.log(req.headers['content-type'], '-------');
        proxy('http://huzhihui.51vip.biz/sysUser/login', {
          method: 'post',
          headers: {
            Host: 'huzhihui.51vip.biz',
            'content-type': req.headers['content-type'],
            Cookie: req.headers.cookie,
          },
        });
      },
    },
    '/apis/sysProject/getAll': ({ proxy, req }) => {
      proxy('http://huzhihui.51vip.biz/sysProject/getAll', {
        headers: {
          Host: 'huzhihui.51vip.biz',
          Cookie: req.headers.cookie,
        },
      });
    },
    '/apis/system/info': ({ proxy, req }) => {
      proxy('http://huzhihui.51vip.biz/system/info', {
        headers: {
          Host: 'huzhihui.51vip.biz',
          Cookie: req.headers.cookie,
        },
      });
    },
    '/apis/system/projectStatus': ({ proxy, req }) => {
      proxy('http://huzhihui.51vip.biz/system/projectStatus', {
        headers: {
          Cookie: req.headers.cookie,
          Host: 'huzhihui.51vip.biz',
        },
      });
    },
    '/apis/sysUser/loginUserInfo': ({ proxy, req }) => {
      proxy('http://huzhihui.51vip.biz/sysUser/loginUserInfo', {
        headers: {
          Host: 'huzhihui.51vip.biz',
          Cookie: req.headers.cookie,
        },
      });
    },
    '/apis/sysProject/getAllBranch': ({ proxy, req }) => {
      proxy('http://huzhihui.51vip.biz/sysProject/getAllBranch', {
        headers: {
          Host: 'huzhihui.51vip.biz',
          Cookie: req.headers.cookie,
        },
      });
    },
    '/apis/startProject/run': {
      method: 'post',
      success: ({ proxy, req }) => {
        console.log(req.headers.cookie, '-------cookie');
        proxy('http://huzhihui.51vip.biz/startProject/run', {
          method: 'post',
          headers: {
            'content-type': req.headers['content-type'],
            Cookie: req.headers.cookie,
            Host: 'huzhihui.51vip.biz',
          },
        });
      },
    },
    '/apis/startProject/runStatus': {
      method: 'post',
      success: ({ proxy, req }) => {
        proxy('http://huzhihui.51vip.biz/startProject/runStatus', {
          method: 'post',
          headers: {
            'content-type': req.headers['content-type'],
            Cookie: req.headers.cookie,
            Host: 'huzhihui.51vip.biz',
          },
        });
      },
    },
  },
};
