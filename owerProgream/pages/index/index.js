// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //username: 'Paul',
    userInfo: {}
  },

  handerUrl(){
    wx.showToast({
      "title": "进入中。。。",
      "icon": 'loading',
      "duration": 3000
    })
    this.intoInfo(1)
  },
  askUrl(){
    wx.showToast({
      "title": "客服正在赶来",
      "icon": 'loading',
      "duration": 3000
    })
    this.intoInfo(2)
  },

  intoInfo(urlId) {
    let _this = this
    let url = ""
    if (urlId == 1){
      url = '/pages/term/termInfo'
    }else{
      url = '/pages/ask/askInfo'
    }
    setTimeout(function () {
      wx.navigateTo({
        url: url,
      }) 
    }, 3000)
  },

  
  // 开启毕设按钮点击事件 ES6兼容性
  starConnnect() {
    wx.showToast({
      "title":"进入了哦"
    })
   
    
  },

  // 根据用户授权获取用户微信信息
  getUserInfoByUserHander() {
     wx.getUserInfo({
       success: (data) =>{
         this.setData({
           userInfo: data.userInfo
         })
       }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfoByUserHander()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})