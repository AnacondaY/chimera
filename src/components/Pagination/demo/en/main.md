##  Pagination
A heavy data can be divided into several pages to speed loading up. 

### Examples
@@---------------@@
### API
property | description | type | default
-----|------| ---- | ---
totalRecords | the total count of records. Required. | ```Number``` | -
currentPage | selected index of page. Starts at 1. | ```Number``` | ```1```
pageSize | the records count of per page | ```Number``` | ```20```
layout | the layout of subcomponents in pagination, including ```'pages'丨'jumper'丨'regulator'丨'total'``` | ```String[]``` | ```['pages']```
totalRender | the renderer of summary infomation | ```(pageCount: Number) => {} ``` | -
pageSpan | the avilable options of page size selector | ```[{label: String, value: Numver}]``` | -
onChange | the callback function triggered by change of page | ```(page: Number) => {}``` | -
onPageSizeChange | the callback function triggered by change of page size | ```(pageSize: Number) => {} ``` | - 