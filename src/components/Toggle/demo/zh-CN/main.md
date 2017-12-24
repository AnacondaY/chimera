## Toggle 开关
开关用于切换一对互斥的逻辑。
@@--------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultChecked | 默认开启状态 | ```Boolean``` | ```false```
checked | 是否开启 | ```Boolean``` | -
disabled | 是否禁用 | ```Boolean``` | ```false```
offText | 关闭时显示的文本 | ```String丨ReactNode``` | -
onText | 激活时显示的文本 | ```String丨ReactNode``` | -
onChange | 当前展开项改变时触发, 参数```on```为当前激活状态 | ```(on: Boolean) => {}``` | -
