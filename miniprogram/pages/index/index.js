// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '云函数',
      tip: '安全、免鉴权运行业务代码',
      showItem: false,
      item: [{
        title: '获取OpenId',
        page: 'getOpenId'
      },
      //  {
      //   title: '微信支付'
      // },
       {
        title: '生成小程序码',
        page: 'getMiniProgramCode'
      },
      // {
      //   title: '发送订阅消息',
      // }
    ]
    }, {
      title: '数据库',
      tip: '安全稳定的文档型数据库',
      showItem: false,
      item: [{
        title: '创建集合',
        page: 'createCollection'
      }, {
        title: '更新记录',
        page: 'updateRecord'
      }, {
        title: '查询记录',
        page: 'selectRecord'
      }, {
        title: '聚合操作',
        page: 'sumRecord'
      }]
    }, {
      title: '云存储',
      tip: '自带CDN加速文件存储',
      showItem: false,
      item: [{
        title: '上传文件',
        page: 'uploadFile'
      }]
    }, {
      title: '云托管',
      tip: '不限语言的全托管容器服务',
      showItem: false,
      item: [{
        title: '部署服务',
        page: 'deployService'
      }]
    }],
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },
  bindFormSubmit:function(e) {
    let ev = e.detail.value;
    const db = wx.cloud.database()
    // db.collection('message').add({
    //     // data 字段表示需新增的 JSON 数据
    //     data: {
    //       // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    //       tel:ev.input,
    //       mes:ev.textarea
    //     },
    //     success: function(res) {
    //       // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    //       wx.switchTab({
    //         url: '../user/user',
    //       })

    //     }
    //   })
    console.log('成功',ev.input)
    wx.cloud.callFunction({
      name: 'sendmes',
      data: {
        name:"19832102700"
      },
      success: res1 => {
        console.log('[云函数]sendmes: ', res1);
        
      
      },
      fail: err => {
        console.error('[云函数]sendmes调用失败', err)
      }
    })
    wx.cloud.callFunction({
      name: 'sendmes',
      data: {},
      success: res1 => {
        console.log('成功',res1,ev.input)
      }
    }
    )
  },
});
