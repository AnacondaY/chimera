### Badge
To notify user that new information is coming.
### Examples
@@--------@@
### API
property | description | type | default
-----|------| ---- | ---
number | the number presents in badge | ```Number``` | -
dot | indicate if it display in dot style instead of number | ```Boolean``` | ```false```
blink | indicate if , 仅在```dot```模式下有效 | ```Boolean``` |```false```
showZero | number为0时是否展示徽记 | ```Boolean``` | ```false```
maximum | 最大阈值, 超出将显示```maxTemplate``` | ```Number``` | -
maxTemplate | 超过最大值时显示的模板 | ```ReactNode丨(max: Number) => {}``` | -
type | 徽记的颜色 | ```'default'丨'primary'丨'info'丨'success'丨'warning'丨'error'``` | ```'error'```
