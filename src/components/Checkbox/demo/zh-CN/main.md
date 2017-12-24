## Checkbox 复选框
可选择多个的选项。
### 代码示例
@@---------@@
### API
#### Checkbox
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
value | 复选框的值 | ```Number丨String``` | -
checked | 是否选中 | ```Boolean``` | ```false```
indeterminate | 是否显示副状态, 与```checked```并存时不会展示 | ```Boolean``` | ```false```
disabled | 是否禁用 | ```Boolean``` | ```false```
onChange | 选中状态改变时触发, 回调参数```checked```为当前的选中状态 | ```Boolean``` | -

#### Checkbox.Group
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ----
defaultValue | 默认选中值的集合 | ```Array``` | ```[]```
value | 复选框的值的集合 | ```Array``` | -
onChange | 选中状态改变时触发, 回调参数```values```为当前的选中的值集合 | ```(values: Array) => {}``` | -