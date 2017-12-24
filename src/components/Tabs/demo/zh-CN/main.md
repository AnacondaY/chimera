## Tabs 选项卡
对大量内容进行归纳和展示。
### 代码示例
@@---------------@@
### API
#### Tabs
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
defaultActiveIndex | 默认激活选项的索引值 | ```Number``` | -
mode | 选项卡方向 | ```'horizontal'丨'vertical'``` | ```'horizontal'```
type | 选项卡表现形式 | ```'line'丨'card'``` | ```'line'```
closable | 选项卡是否可移除 | ```Boolean``` | ```false```
onChange | 当前展开项改变时触发 | ```(currentIndex: Number, prevIndex: Number) => {}``` | -
onRemove | 移除选项页时触发 | ```(currentIndex: Number, removedIndex: Number) => {} ``` | -
onTabClick | 点击选项时触发 | ```(tabIndex: Number) => {}``` | -
onPrev | 点击上一页时触发 | ```Function``` | -
onNext | 点击下一页时触发 | ```Function``` | -

#### Tabs.Pane
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
label | 选项的标签 | ```String丨ReactNode``` | -
disabled | 是否禁用该项 | ```Boolean``` | ```false```