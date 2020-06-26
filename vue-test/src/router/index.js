import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Socket from '@/view/Socket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/socket',
      name: 'socket',
      component: Socket
    }
  ]
})

a = [2, 1, 5, 4, 7, 6, 9, 8, 3, 10, 15, 13, 14, 11, 12]
for (let i = 0; i < a.length; i++) {
  let min = a[i]
  for (let k = i + 1; k < a.length; k++) {
    if (min > a[k]) {
      min = a[k]
      a[k] = a[i]
      a[i] = min
    }
  }
}