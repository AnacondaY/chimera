## Carousel 轮播
循环播放图片及文字。
### 代码示例
@@--------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
autoplay | 是否自动播放 | ```Boolean``` | ```true```
interval | 轮播的时间间隔, 以毫秒为单位 | ```Number``` | ```3000```
speed | 切换的时间间隔, 以毫秒为单位 | ```Number``` | ```300```
hoverToStop | 鼠标悬停在轮播上时是否停止自动播放 | ```Boolean``` | ```true``` 
showController | 是否显示左右两侧控制按钮 | ```Boolean``` | ```true```
showIndicators | 是否显示指示器 | ```Boolean``` | ```true```
effect | 轮播动画效果 | ```'slide'丨'fade'``` | ```'slide'```
onChange | 当前播放的内容切换后触发, 参数为当前项的索引值 | ```(currentIndex: Number) => {}``` | -