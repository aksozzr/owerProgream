let datas = require('../../data/termData');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
     avgImg: [],
     termInfoArray: Object
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        termInfoArray: datas.datas
      });
   
  },
    /**
   * 跳转到毕设详情页面
   */
  toDetail(data){
    console.log(data.currentTarget.dataset.index)
    let index = data.currentTarget.dataset.index;
      wx.navigateTo({
        url: '/pages/details/details?index='+index,
      })
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