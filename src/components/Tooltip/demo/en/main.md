## Tooltip
A component to show tips in popup.
### Examples
@@-------@@
### API
property | description | type | default
-----|------| ---- | ---
offset | the gap between arrow and target | ```Number``` | ```0```
placement | the position of popup | ```'top-center'丨'bottom-center'丨'left-center'丨'right-center'丨'top-left'丨'top-right'丨'bottom-left'丨'bottom-right'丨'left-top'丨'right-top'丨'left-bottom'丨'right-bottom'``` | ```'top-center'```
content | tip content | ```String丨ReactNode``` | -
visible | visibility of tooltip | ```Boolean``` | ```false```
enterTimeout | appearance delay. In miliseconds. | ```Number``` | ```0```
leaveTimeout | disapperance delay. In miliseconds. | ```Number``` | ```0```
trigger | The way to show and hide tooltip. | ```'hover'丨'click'丨'focus'``` | ```'hover'```
onVisibleChange | the callback function triggered by visibility change | ```(visible: Boolean)=>{}``` | -