## Select
The component that select value from options.
@@---------@@
## API

### Select
property | description | type | default
-----|------| ---- | ---
defaultValue | the initial value | ```String丨Number丨Array``` | -
value | value of select option | ```String丨Number丨Array``` | -
multiple | indicate whether to support multiple selection | ```Boolean``` | ```false```
size | size of select | ```'large'丨'middle'丨'small'```| ```'middle'```
placeholder | the text in select when the value is empty | ```String``` | -
disabled | disable select | ```Boolean``` | ```false```
filterable | indicate whether to support filteration | ```Boolean``` | ```false```
remote | indicate whether to fetch options from server | ```Boolean``` | ```false```
fetching | the state indicating data are loading | ```Boolean``` | ```false```
onChange | the callback function triggered by change of selected value | ```(value: String丨String[]) => {}``` | -
onSearch | the callback function triggered by change of search content | ```(value: String) => {}``` | -

### Select.Option
property | description | type | default
-----|------| ---- | ---
value | the unique value of option. Required. | ```String丨Number``` | -
label | the label value of option. Required. | ```String``` | -
disabled | disable option | ```Boolean``` | ```false```

### Select.OptGroup
property | description | type | default
-----|------| ---- | ---
label | group name | ```String丨ReactNode``` | -
