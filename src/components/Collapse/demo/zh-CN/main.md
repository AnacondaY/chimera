## Collapse 折叠
在有限的空间展示较多的内容。
### 代码示例
@@----------------@@
### API
#### Collapse
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultActiveIndex | 默认展开项的索引值 | ```Number``` | -
only | 是否只展开一项 | ```Boolean``` | ```false```
simple | 是否使用简洁风格 | ```Boolean``` | ```false```
onChange | 当前展开项改变时触发, 参数```index```为当前展开项的索引值, ```collapsed```为当前项折叠状态 | ```(index: Number, collapsed: Boolean) => {}``` | -

#### Collapse.Item
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
header | 展开项头部 | ```String丨ReactNode``` | -
disabled | 是否禁用该项 | ```Boolean``` | ```false```
className | 额外的类名 | ```String``` | -
style | 自定义样式 | ```Object``` | -
