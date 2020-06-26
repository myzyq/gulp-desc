Page({
  onTabJump:function(e) {
    wx.navigateTo({
      url: '../post/post',
      success: function() {
        console.log('jump success')
      },
      fail: function () {
        console.log('jump error')
      },
      complete: function () {
        console.log('jump complete')
      }
    })
  },
  onUnload: function (event) {
    console.log('just onunload')
  },
  onHide: function (event) {
    console.log('just onhide')
  }
})

