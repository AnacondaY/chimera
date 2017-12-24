## Slider
Pick value by dragging slider in s specific range.
### Examples
@@-----------@@
### API
property | description | type | default
-----|------| ---- | ---
defaultValue | initial value | ```Number``` | minimum
value | binding value | ```Number``` | -
mode | displaying direction | ```'horizontal'丨'vertical'``` | ```'horizontal'```
disabled | disable slider | ```Boolean``` | ```false```
exclude | indicate whether not to highlight the part less than current value | ```Boolean``` | ```false```
showTicks | indicate whether to show the ticks in trace | ```Boolean``` | ```false``` 
step | value of sliding step. It should be divided by the difference between maximun and minimum  | ```Number``` | ```1```
maximum | maximal value the slider can slide to | ```Number``` | ```100```
minimun | minimal value the slider can slide to | ```Number``` | ```0```
tooltipTemplate | rendering template of tooltip. Tooltip will be not rendered if it set to ```false``` | ```(value: Number) => {}丨String丨Boolean ``` | ```true```
onChange | the callback function triggered by value change | ```(value: Number) => {}``` | -