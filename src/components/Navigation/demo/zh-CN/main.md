## Navigation 导航
提供导航的菜单。
### 代码示例
@@------@@
### API
#### Navigation
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mode | 导航的表现模式 | ```'horizontal'丨'vertical'``` | ```'horizontal'```
only | 只允许一个子菜单展开 | ```Boolean``` | ```true```
openedMarks | 需要展开的子菜单的```mark```属性值集合 | ```Array[String]``` | ```[]```
activeMark | 需要激活的菜单项的```mark```属性值 | ```String``` | -
trigger | 触发子菜单展开的方式, 仅对水平菜单有效 | ```'hover'丨'click'``` | ```'hover'```
onItemSelect | 菜单项选择后触发 | ```(activeMark: String, openedMarks: String[]) => {}``` | -
onMenuOpen | 下拉菜单展开时触发 | ```(activeMark: String, openedMarks: String[]) => {}``` | -
onMenuClose | 下拉菜单关闭时触发 | ```(activeMark: String, openedMarks: String[]) => {}``` | -

#### Navigation.Item
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mark | 导航项的唯一标识 | ```String``` | -
disabled | 导航项是否禁用 | ```Boolean``` | ```false```

#### Navigation.Subnav
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
mark | 子菜单的唯一标识 | ```String``` | -
disabled | 子菜单是否禁用 | ```Boolean``` | ```false```
title | 子菜单的标题 | ```String丨ReactNode``` | -
children | 子菜单的子元素 |  ```Navgation.Item[]丨Navigation.ItemGroup[]``` | -

#### Navigation.ItemGroup
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
title | 分组名称 | ```String丨ReactNode``` | -
children | 子菜单的子元素 |  ```Navgation.Item[]``` | -
