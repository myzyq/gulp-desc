import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import Vue from 'vue'
import App from './compoents/App.vue'

const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})