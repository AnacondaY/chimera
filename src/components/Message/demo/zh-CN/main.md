## Message 消息
用于与系统交互后向用户反馈信息。
### 代码示例
@@----------------@@
### API
- ```message.success(options: Object)```
- ```message.error(options: Object)```
- ```message.info(options: Object)```
- ```message.warning(options: Object)```
- ```message.config(options: Object)```
- ```message.reset()```
- ```message(options: Object)```

> 除```message.config```和```message.reset```外, 其他方法支持更简洁的函数签名```message( message:String丨 ReactNode, duration: Number )```

#### options
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
message | 消息的内容 | ```String``` ```ReactNode``` | -
type | 消息的主题 | ```'success'丨'error'丨'info'丨'warning'``` | -
duration | 消息的持续时间, 单位毫秒 | ```Number``` | ```3000```
offset | 消息距离顶部的距离 | ```Number``` | ```0```
gap | 消息之间的间隙跨度 | ```Number``` | ```16```
onClose | 消息关闭时触发 | ```Function``` | -
