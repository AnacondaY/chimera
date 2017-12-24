## 布局
常规布局的抽象组件。

### 组件列表
* Layout: 布局组件的容器, 可内嵌```Header```, ```Footer```, ```Sider```, ```Content```, 和```Layout```。
* Header: 头部容器, 常用于放置导航条。
* Footer: 底部容器, 常用于放置声明和链接。
* Sider: 侧边栏容器, 可折叠并支持响应式布局, 常用于放置工具和二级导航。
* Content: 内容容器, 展示网页的主题内容。
> 所有容器采用flex布局实现

@@------------@@
### API
>所有组件均支持利用```className```和```style```自定义样式

#### Layout.Sider
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
collapsible | 侧边栏是否可折叠 | ```Bolean``` | ```true```
collapsed | 侧边栏折叠状态, 为```true```时折起 | ```Bolean``` | ```true```
width | 侧边栏宽度 | ```Number``` | ```240```
collapsedWidth | 折起时侧边栏宽度 | ```Number``` | ```0```
threshold | 触发响应式的临界点, 规则同[BootStrap](https://getbootstrap.com/) | ```'xs'丨'sm'丨'md'丨'lg'``` | ```'sm'```

#### Layout.collapse
高阶函数, 返回一个高阶组件, 用于加强Layout对侧边栏的折叠功能。
>以下属性和方法均暴露在```Layout```的属性中, 可通过```this.props.cmrCollapse```访问

属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
collapsed | 侧边栏折叠状态, 为```true```时折起 | ```Bolean``` | ```true```
toggleSider | 折叠侧边栏的方法, 可挂载到```Layout```的任意子元素的```onClick```事件中 | ```function``` | -

