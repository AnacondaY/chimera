## Notification
To show the negative feedback for informing user.
### Examples
@@-----------@@
### API
- ```notification.success(options: Object)```
- ```notification.error(options: Object)```
- ```notification.info(options: Object)```
- ```notification.warning(options: Object)```
- ```notification.config(options: Object)```
- ```notification.reset()```
- ```notification(options: Object)```

> Except ```notification.config``` and ```notification.reset```, other functions support a more simple signature as ```notification( title:String丨 ReactNode, content: String丨 ReactNode, duration: Number )```

#### options
property | description | type | default
-----|------| ---- | ---
title | the title of notification | ```String丨ReactNode``` | -
content | the content of notification | ```String丨ReactNode``` | -
type | the theme of notification | ```'success'丨'error'丨'info'丨'warning'``` | -
duration | time from disappearance. In milliseconds. | ```Number``` | ```5000```
closable | indicate whether show the close button | ```Boolean``` | ```true```
offset | initial distance from the top | ```Number``` | ```0```
gap | distance between each notification | ```Number``` | ```16```
onClose | the callback function triggered by notification closing | ```Function``` | -