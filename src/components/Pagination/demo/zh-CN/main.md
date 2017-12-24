##  Pagination 分页
数据量较大时,可使用分页拆分页面数据。

### 代码示例
@@---------------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
totalRecords | 数据总记录数, 必填 | ```Number``` | -
currentPage | 当前选择的页数, 从```1```开始 | ```Number``` | ```1```
pageSize | 每页显示的记录数 | ```Number``` | ```20```
layout | 分页的子组件布局, 元素可为```'pages'丨'jumper'丨'regulator'丨'total'``` | ```String[]``` | ```['pages']```
totalRender | 总页数渲染器, 参数```pageCount```为总页数 | ```(pageCount: Number) => {} ``` | -
pageSpan | 调节器的可选项 | ```[{label: String, value: Numver}]``` | -
onChange | 页码改变时触发, 参数```page```为当前页码 | ```(page: Number) => {}``` | -
onPageSizeChange | 页容量改变时触发, 参数```pageSize```为当前页容量 | ```(pageSize: Number) => {} ``` | - 