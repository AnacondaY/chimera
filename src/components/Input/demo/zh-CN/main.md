## Input 输入框
用于与用户键盘输入进行交互。
### 代码示例
@@----------------@@
### API
> ```iconBefore``` ```iconAfter```设置为```String```时会显示[Icon](/#/icon)里对应的图标

属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultValue | 输入框的默认值 | ```Number丨String``` | -
value | 输入值 | ```Number丨String``` | -
disabled | 是否禁用 | ```Boolean``` | ```false```
size | 输入框大小 | ```'large'丨'middle'丨'small'```| ```'middle'```
textarea | 是否已文本域显示 | ```Boolean``` | ```false```
cleanable | 是否支持清除文本 | ```Boolean``` | ```false```
placeholder | 占位文本 | ```String丨Number``` | -
iconBefore | 前置图标 | ```String丨ReactNode``` | -
iconAfter | 后置图标 | ```String丨ReactNode``` | -
addonBefore | 前置节点 | ```String丨ReactNode``` | -
addonAfter | 后置节点 | ```String丨ReactNode``` | -
onChange | 输入时触发, 参数```value```为当前的输入值 | ```(value: Number丨String) => {}``` | -
