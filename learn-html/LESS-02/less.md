### Less 安装
* 安装nodes   
* 基于nodejs在线安装 less 使用命令 "npm install -g less"
* 检查是否安装成功
===
## less 变量
* @变量名：值
* @color: pink;

## vscode 插件
* Easy Less
* 自动转义LESS 文件为 css文件

## less 嵌套 子元素的样式直接卸载父元素内部就好了
* 如果有 伪类 选择器加上 &
* div{
*    font-size: @font14;
*     &::before{
*         content: "div之前";
*     }
*     &:hover{
*         color: red;
*     }
* }


