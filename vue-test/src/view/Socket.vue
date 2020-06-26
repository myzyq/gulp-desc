</<template>
  <div>
      just test
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.socket()
    setTimeout(() => {
      this.socket()
    }, 1000)
  },
  methods: {
    socket: () => {
      if ('WebSocket' in window) {
        // 打开一个 web socket
        var ws = new WebSocket('ws://127.0.0.1:10081')
        ws.onopen = function () {
          // Web Socket 已连接上，使用 send() 方法发送数据
          ws.send('这是一个测试-请接收')
          console.log('数据发送中...')
        }
        ws.onmessage = function (evt) {
          console.log(evt)
          console.log('数据已接收...')
        }
        // ws.onclose = function () {
        //   // 关闭 websocket
        //   console.log('连接已关闭...')
        // }
      } else {
        // 浏览器不支持 WebSocket
        alert('您的浏览器不支持 WebSocket!')
      }
    }
  }
}
</script>
