### Badge 徽记
用于提示用户是否有新消息或消息数量。
### 代码示例
@@--------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
number | 显示的数字 | ```Number``` | -
dot | 是否以圆点显示 | ```Boolean``` | ```false```
blink | 圆点是否闪烁, 仅在```dot```模式下有效 | ```Boolean``` |```false```
showZero | number为0时是否展示徽记 | ```Boolean``` | ```false```
maximum | 最大阈值, 超出将显示```maxTemplate``` | ```Number``` | -
maxTemplate | 超过最大值时显示的模板 | ```ReactNode丨(max: Number) => {}``` | -
type | 徽记的颜色 | ```'default'丨'primary'丨'info'丨'success'丨'warning'丨'error'``` | ```'error'```
