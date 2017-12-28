### Dropdown 下拉菜单
向下/向上弹出的列表。
### 代码示例
@@---------@@

#### Dropdown
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
placement | 菜单弹出位置 | ```'bottom-left'丨'bottom-center'丨'botton-right'丨'top-left'丨'top-center'丨'top-right'``` | ```'bottom-left'```
menu | 菜单 | ```Dropdown.Menu``` | -
trigger | 菜单显隐的触发方式 | ```'click'丨'hover'``` | ```'click'```
menuStyle | 菜单的自定义样式 | ```Object``` | -
onVisibleChange | 显示/隐藏时触发, 参数```visible```为当前显隐状态 | ```(visible: Boolean) => {}```| -
onItemClick | 点击菜单项触发, 参数为对应的```action```属性 | ```(action: String) => {}``` | -

#### Dropdown.Button
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
size | 按钮尺寸 | ```'large'丨'middle'丨'small'``` | ```'large'```
type | 按钮主题 | ```'primary'丨'success'丨'error'丨'warning'丨'info'``` | ```'primary'```
onClick | 右侧箭头按钮点击事件 | ```Function``` | -

#### Dropdown.Menu
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
className | 附加的类名 | ```String``` | -
style | 自定义样式 | ```Object``` | -

#### Dropdown.Item
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
action | 菜单项的附加动作 | ```String``` | -
disabled | 是否禁用 | ```Boolean``` | ```false```
divided | 是否以分割线显示 | ```Boolean``` | ```false```