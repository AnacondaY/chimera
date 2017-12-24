## Grid
Flow layout created by rows and columns.

### Examples
@@---------------@@
### API

#### Row
property | description | type | default
-----|------| ---- | ---
tagName | the HTML tag of row | ```String``` | ```div```
gap | gap between columns | ```Number``` | ```0```
className | extra CSS class | ```String``` | -
style | customized style | ```Object``` | -

#### Col
property | description | type | default
-----|------| ---- | ---
tagName | the HTML tag of col | ```String``` | ```div```
span | the width of col. Integer between 0 and 24 | ```Number``` | -
offset | the number of cells to offset Col from the left. Integer between 0 and 24. | ```Number``` | ```0```
push | the distance of col from left to right. Integer between 0 and 24. | ```Number``` | ```0```
pull | the distance of col from right to left. Integer between 0 and 24. | ```Number``` | ```0```
className | extra CSS class | ```String``` | -
style | customized style | ```Object``` | -