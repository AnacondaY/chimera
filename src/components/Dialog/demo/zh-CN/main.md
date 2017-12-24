## 对话框
一般用于处理与用户交互相关事务。
@@-----@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
visible | 是否显示对话框 | ```Boolean``` | ```false```
width | 对话框宽度 | ```Number``` | ```360```
title | 对话框标题 | ```String``` ```ReactNode``` | -
footer | 对话框脚部, 不设置时不展示 | ```Boolean``` | -
closable | 是否显示关闭按钮 | ```Boolean``` | ```true```
onVisibleChange | 显示/隐藏时触发, 参数```visible```为当前显隐状态 | ```(visible: Boolean) => {}```| -
