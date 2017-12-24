## Select 选择器
选项较多时，以下拉菜单的形式展示。
@@---------@@
## API

### Select
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultValue | 默认选中的选项 | ```String丨Number丨Array``` | -
value | 选中的选项 | ```String丨Number丨Array``` | -
multiple | 是否可多选 | ```Boolean``` | ```false```
size | 选择器大小 | ```'large'丨'middle'丨'small'```| ```'middle'```
placeholder | 占位文本 | ```String``` | -
disabled | 禁用选择器 | ```Boolean``` | ```false```
filterable | 是否可过滤选项 | ```Boolean``` | ```false```
remote | 是否启用远程搜索模式 | ```Boolean``` | ```false```
fetching | 远程数据加载状态, 仅在```remote```模式下有效 | ```Boolean``` | ```false```
onChange | 当前展开项改变时触发, 参数```value```为当前选中的值 | ```(value: String丨String[]) => {}``` | -
onSearch | 输出文本时触发, 仅在```filterable```模式下有效 | ```(value: String) => {}``` | -

### Select.Option
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
value | 选项的唯一值, 必填 | ```String丨Number``` | -
label | 选项的标签值, 必填 | ```String``` | -
disabled | 禁用选项 | ```Boolean``` | ```false```

### Select.OptGroup
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
label | 分组名称 | ```String丨ReactNode``` | -
