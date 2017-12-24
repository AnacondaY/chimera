## Steps 步骤条
常用于与较大表单联动, 指引用户完成期望操作。
### 代码示例
@@--------@@
### API
#### Steps
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
currentIndex | 当前步骤 | ```Number``` | ```0```
mode | 步骤条展现方式 | ```'horizontal'丨'vertical'``` | ```'horizontal'```
status | 当前步骤状态 | ```'error'丨'success'丨'processing'``` | -

#### Steps.Step
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
title | 步骤的标题 | ```String丨ReactNode``` | -
description | 步骤的描述 | ```String丨ReactNode``` | -
icon| 步骤图标 | ```String丨ReactNode``` | -