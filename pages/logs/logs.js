//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    musicName:'',
    songLrc:{},
    buttonText: "播放"
  },
  onLoad: function (options) {
    this.setData({
      musicName: options.name
    })
    wx.setNavigationBarTitle({
      title: options.name,
    })
    console.log(wx.Songs[0].lrc)
    wx.request({
      url: wx.Songs[0].lrc, //仅为示例，并非真实的接口地址
      data: {
 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        //songLrc  res.data;

      }
    })

  },
  musicPlay : function(){
    var that = this
    if (this.buttonText == "播放"){
      that.setData({
        buttonText: "暂停"
      })
    }else{
      that.setData({
        buttonText: "播放"
      })
    }
    console.log(this.buttonText)
  }
})
