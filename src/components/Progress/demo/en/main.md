## Progress
To notify users that the progress of last operation.
### Examples
@@----------------@@
### API
property | description | type | default
-----|------| ---- | ---
mode | display style | ```'line'丨'circle'``` | ```'line'```
progress | current progress | ```Number``` | ```0```
status | the status of progress | ```'processing'丨'paused'丨'success'丨'error'```| ```'processing'```
outside | indicate whether text is displayed outside. It only works in case of ```mode='line'``` | ```Boolean``` | ```false```
template | template renderer | ```String丨(progress: Number, status: String): String丨ReactNode => {}``` | -
diameter | the diameter of progress ring. It only works in case of ```mode='circle'``` | ```Number``` | ```120```
strokeWidth | the thickness of progress ring. It only works in case of ```mode='circle'``` | ```Number``` | ```6```
width | the width of progress bar. It only works in case of ```mode='line'``` | ```Number``` | -