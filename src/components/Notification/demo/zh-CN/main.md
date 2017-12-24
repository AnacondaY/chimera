## Notification 通知
用于显示系统反馈给用户的信息。
### 代码示例
@@-----------@@
### API
- ```notification.success(options: Object)```
- ```notification.error(options: Object)```
- ```notification.info(options: Object)```
- ```notification.warning(options: Object)```
- ```notification.config(options: Object)```
- ```notification.reset()```
- ```notification(options: Object)```

> 除```notification.config```和```notification.reset```外, 其他方法支持更简洁的函数签名```notification( title:String丨 ReactNode, content: String丨 ReactNode, duration: Number )```

#### options
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
title | 通知的标题 | ```String``` ```ReactNode``` | -
content | 通知的内容 | ```String``` ```ReactNode``` | -
type | 通知的主题 | ```'success'丨'error'丨'info'丨'warning'``` | -
duration | 通知的持续时间, 单位毫秒, 为0时通知不会自动消失 | ```Number``` | ```5000```
closable | 是否显示关闭按钮 | ```Boolean``` | ```true```
offset | 通知距离顶部的距离 | ```Number``` | ```0```
gap | 通知之间的间隙跨度 | ```Number``` | ```16```
onClose | 通知关闭时触发 | ```Function``` | -


