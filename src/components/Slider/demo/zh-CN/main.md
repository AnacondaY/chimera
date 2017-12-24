## Slider 滑块
在指定范围内拖动取值。
### 代码示例
@@-----------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultValue | 默认值 | ```Number``` | 最小值
value | 绑定值 | ```Number``` | -
mode | 滑块的展示模式 | ```'horizontal'丨'vertical'``` | ```'horizontal'```
disabled | 是否禁用 | ```Boolean``` | ```false```
exclude | 是否不高亮显示小于当前值的部分 | ```Boolean``` | ```false```
showTicks | 是否显示刻度 | ```Boolean``` | ```false``` 
step | 滑动的步长值, 其值应能被最大值和最小值得差值整除 | ```Number``` | ```1```
maximum | 最大值 | ```Number``` | ```100```
minimun | 最小值 | ```Number``` | ```0```
tooltipTemplate | 文字提示渲染模板. 设置为```false```将不渲染. | ```(value: Number) => {}丨String丨Boolean ``` | ```true```
onChange | 当前值改变时触发 | ```(value: Number) => {}``` | -