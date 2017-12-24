## Progress 进度条
用于提示用户上一个交互操作完成的进度。
### 代码示例
@@----------------@@
### API

属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mode | 展示模式 | ```'line'丨'circle'``` | ```'line'```
progress | 当前进度 | ```Number``` | ```0```
status | 进度条状态 | ```'processing'丨'paused'丨'success'丨'error'```| ```'processing'```
outside | 文字是否在外侧显示, 仅在```mode='line'```下可用 | ```Boolean``` | ```false```
template | 文字渲染模板, 参数```progress```和```status```分别代表当前进度和状态 | ```String丨(progress: Number, status: String): String丨ReactNode => {}``` | -
diameter | 设置进度环的直径, 仅在```mode='circle'```下可用 | ```Number``` | ```120```
strokeWidth | 环的粗细, 仅在```mode='circle'```下可用 | ```Number``` | ```6```
width | 进度条宽度, 仅在```mode='line'```下可用 | ```Number``` | -