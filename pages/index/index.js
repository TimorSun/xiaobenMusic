//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:'',
    list:{},
    playName:'',
    playSinger:'',
    playPic:'',
    buttonSwitch:"switch-on"
  },
  onLoad: function () {
    wx.myMusic = wx.getBackgroundAudioManager()
    var that = this
    /*请求*/
    wx.request({
      url: 'https://api.bzqll.com/music/netease/songList',
      data: {
        key: '579621905',
        id: '3778678',
        limit: '10',
        offset: '0'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        wx.Post = res.data.data
        wx.Songs = res.data.data.songs

        that.setData({
          title:wx.Post.songListName,
          list:wx.Songs,
          playName:wx.Songs[0].name,
          playSinger:wx.Songs[0].singer,
          playPic: wx.Songs[0].pic
        })
      }
    })

  },
  buttonClik:function(){
    var that = this
    if(that.buttonSwitch == "switch-on"){
      that.setData({
        buttonSwitch: "switch-off"
      })
      
    }else{
      that.setData({
        buttonSwitch: "switch-on"
      })
    }
    console.log(that.buttonSwitch)
    /*播放音乐*/
    wx.myMusic.title = wx.Songs[0].name
    wx.myMusic.epname = wx.Songs[0].name
    wx.myMusic.singer = wx.Songs[0].singer
    wx.myMusic.coverImgUrl = wx.Songs[0].pic
    // 设置了 src 之后会自动播放
    wx.myMusic.src = wx.Songs[0].url
  }
})
