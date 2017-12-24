## Collapse
To display more content in a limited area.
### Examples
@@----------------@@
### API
#### Collapse
property | description | type | default
-----|------| ---- | ---
defaultActiveIndex | the index of default expanded item | ```Number``` | -
only | indicate whether only one item can be expanded | ```Boolean``` | ```false```
simple | to display in the simple style | ```Boolean``` | ```false```
onChange | the callback function triggered by item expanding | ```(index: Number, collapsed: Boolean) => {}``` | -

#### Collapse.Item
property | description | type | default
-----|------| ---- | ---
header | the header of item | ```String丨ReactNode``` | -
disabled | disable item | ```Boolean``` | ```false```
className | extra CSS class | ```String``` | -
style | customized style | ```Object``` | -
