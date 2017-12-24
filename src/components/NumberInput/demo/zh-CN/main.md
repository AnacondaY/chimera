## NumberInput 数字输入框
仅用于输入数字的控件。
@@------------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
initialValue | 初始值 | ```Number``` | -
maximum | 最大值 | ```Number``` | ```100```
minimum | 最小值 | ```Number``` | ```0```
value | 绑定的数值 | ```Number``` | -
size | 输入框的尺寸 | ```'large'丨'middle'丨'small'``` | ```middle```
disabled | 是否禁用 | ```Boolean``` | ```false``` 
formatter | 用于把输入值格式化为显示值 | ```(value: Number):String => {}``` | -
parser | ```formatter```的逆过程, 格式化显示值 | ```(value: String): Number => {}```  | -
onChange | 数值改变时触发, 参数```value```为当前数值 | ```(value: String丨Number) => {}``` | -