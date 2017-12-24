## DatePicker 日期选择器
用于选择日期或者日期范围。
@@------------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
range | 是否启用范围选择 | ```Boolean``` | ```false```
defaultValue | 初始定位的日期, 当设置```range```时, 应为长度为2的```Date```数组,否则为```Date```实例 | ```Date丨Date[]``` | -
value | 当前日期对象 | ```Date丨Date[]``` | -
mode | 选择器模式 | ```'year'丨'month'丨'date'``` | ```'date'```
size | 选择器的尺寸 | ```'large'丨'middle'丨'small'``` | ```'middle'```
disabled | 是否禁用 | ```Boolean``` | ```false``` 
placeholder | 占位文本 | ```String``` | -
formatter | 日期格式化函数 | ```(date: Date丨Date[]):String => {}``` | -
disableDate | 禁止选择指定的日期 | ```(data: Date): Boolean => {}```  | -
onChange | 用户直接输入时触发, 可用于校验输入合法性, 参数```value```为输入值 | ```(value: String) => {}``` | -
onPick | 用户选择日期值时触发 | ```(data: Date丨Date[]) => {} ``` | -