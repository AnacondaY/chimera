## Table 表格
以二维表的形式展示数据, 支持数据的过滤、排序、统计等操作。
@@--------@@
### API
#### Table
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
columns | 表格列定义, 配置见下, 必填 | [ColumnProps](/#/) | -
data | 数据集合, 必填 | ```Array``` | - 
striped | 表格奇偶数行以不同样式展示 | ```Boolean``` | ```false```
bordered | 显示单元格边框 | ```Boolean``` | ```false```
hoverHighlight | 悬停在表格列时高亮显示 | ```B oolean``` | ```true```
summaryRender | 汇总行渲染器, 为```true```时将使用默认渲染器;为```Function```时, 参数```data```、```columns```为数据集合和列定义 | ```Boolean丨(data: Array, columns: Array): Array => {}``` | ```false```
expandedRowRender | 展开行渲染器, 参数```data```为数据集合 | ```(data: Array) => {}``` | ```false```
rowClass | 行的附加类 | ```String丨(row: Object, rowIndex: Number):String => {}``` | -
rowStyle | 行的附加样式 | ```Object丨(row: Object, rowIndex: Number): Object => {}``` | -
cellClass | 单元格的附加类 | ```String丨(row: Object, col: Object, rowIndex: Number, colIndex: Number):String => {}``` | -
cellStyle | 单元格的附加样式 | ```Object丨(row: Object, col: Object, rowIndex: Number, colIndex: Number):Object => {}``` | -

#### ColumnProps
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
key | 数据值对应的字段, 请确保唯一性 | ```String``` | -
label | 列标题 | ```String``` | -
children | 子列集合, 用于复合列定义 | ```Array[ColumnProps]``` | -
width | 改列宽度, 如不设置, 列宽将自适应 | ```Number``` | -
index | 是否已列号显示该列 | ```Boolean``` | ```false```
filterable | 该列是否支持过滤 | ```Boolean``` | ```false```
sortable | 该列是否支持排序 | ```Boolean``` | ```false```
filter | 自定义过滤器 | ```(list)``` | -
sorter | 自定义排序器 | ```()``` | -
render | 自定义该列单元格渲染器 | ```(row: Object, col: Object, rowIndex: Number, colIndex: Number):String丨Number => {}``` | -
