## Radio 单选框
仅能单选的备选项。
### 代码示例
@@---------------@@
### API
#### Radio
#### Radio.Button
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
value | 单选框的值 | ```String丨Number``` | -
checked | 是否选中 | ```Boolean``` | ```false```
disabled | 是否禁用 | ```Boolean``` | ```false```

#### Radio.Group
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
value | 组内选中单选框的值 | ```String丨Number``` | -
disabled | 是否禁用组内所有单选框 | ```Boolean``` | ```false```
onChange | 选中单选框的值改变时触发 | ```(value: String丨Number) => {}``` | -
