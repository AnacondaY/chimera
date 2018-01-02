## Tooltip 文字气泡
悬浮于目标节点上, 用于提示用户。
### 代码示例
@@-------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
offset | 气泡箭头与目标元素之间的间隙 | ```Number``` | ```0```
placement | 气泡出现的位置 | ```'top-center'丨'bottom-center'丨'left-center'丨'right-center'丨'top-left'丨'top-right'丨'bottom-left'丨'bottom-right'丨'left-top'丨'right-top'丨'left-bottom'丨'right-bottom'``` | ```'top-center'```
content | 气泡填充的内容 | ```String丨ReactNode``` | -
visible | 气泡的显隐 | ```Boolean``` | ```false```
enterTimeout | 显示的延迟时间, 单位毫秒 | ```Number``` | ```0```
leaveTimeout | 消失的延迟时间, 单位毫秒 | ```Number``` | ```0```
trigger | 触发方式 | ```'hover'丨'click'丨'focus'``` | ```'hover'```
onVisibleChange | 显隐切换时触发, 参数```visible```为当前显隐状态 | ```(visible: Boolean)=>{}``` | -