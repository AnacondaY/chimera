## Message
To show the positive feedback after interaction with system.
### Examples
@@----------------@@
### API
- ```message.success(options: Object)```
- ```message.error(options: Object)```
- ```message.info(options: Object)```
- ```message.warning(options: Object)```
- ```message.config(options: Object)```
- ```message.reset()```
- ```message(options: Object)```

> Except ```message.config``` and ```message.reset```, other functions support a more simple signature as ```message( message:String丨 ReactNode, duration: Number )```

#### options
property | description | type | default
-----|------| ---- | ---
message | the content of message | ```String丨ReactNode``` | -
type | the theme of message | ```'success'丨'error'丨'info'丨'warning'``` | -
duration | time from disappearance. In miliseconds. | ```Number``` | ```3000```
offset | initial distance from the top | ```Number``` | ```0```
gap | distance between each message | ```Number``` | ```16```
onClose | the callback function triggered by message closing | ```Function``` | -