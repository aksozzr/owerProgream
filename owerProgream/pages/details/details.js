let datas = require('../../data/termData');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    term:Object,
    collectFalg: false,
    count: 0,
    indexId: 0
  },


  /**
   * 分享页面
   */
  shareInfo(){
  
  },

  /**
   * 收藏该页面
   */
  collectInfo() {
    let collectFalg = !this.data.collectFalg
    if (this.data.count == 6){
      wx.showToast({
        "title": "请勿频繁操作",
        "image": "/images/icon/cry.jpg"
      })
      this.clearCount()
    }else{
      this.setData({
        collectFalg: collectFalg
      })
      let objFalg = wx.getStorageSync('collectFalg')
      objFalg[this.data.indexId] = collectFalg
      if (collectFalg) {
        wx.showToast({
          "title": "已收藏"
        })
        this.data.count++
      } else {
        wx.showToast({
          "title": "取消收藏"
        })
        this.data.count++
      }
      wx.setStorage({
        key: 'collectFalg',
        data: objFalg,
      })
    }
  },
 /**
   * 过了五秒将频繁操作按钮去掉
   */

  clearCount(){
     let _this = this
     setTimeout(function(){
       _this.setData({
         count: 0
       })
     },5000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      term: datas.datas[options.index],
      indexId: options.index
    })
    let collectFalgObj =  wx.getStorageSync('collectFalg')
    console.log(collectFalgObj)
    if (!collectFalgObj){
      collectFalgObj = {}
      wx.setStorage({
        key: 'collectFalg',
        data: collectFalgObj,
      })
    }else{
      let collectFalg = collectFalgObj[options.index]
      this.setData({ collectFalg });
    }
  
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