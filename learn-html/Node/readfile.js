const fs = require('fs')
// require 下支持相对路径，不会因为调用路径变化而影响使用
const path = require('path')

const content = '<h3>这是一个测试<h3>'
// 写文件
fs.writeFile(path.join(__dirname, 'index.html'), content, err => {
    if (err != null) {
        console.log(null)
        return;
    }
    console.log('文件写入成功')
})
console.log(2 + '-------------')
// node下系统变量
console.log(__dirname);
// 读文件
fs.readFile(path.join(__dirname, 'a.js'), 'utf8', (err, doc) => {
    if (err == null) {
        console.log(doc)
    }
})
console.log(2)
console.log('文件被修改了 ==')
