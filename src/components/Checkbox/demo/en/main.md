## Checkbox
To select multiple option.
### Examples
@@---------@@
### API
#### Checkbox
property | description | type | default
-----|------| ---- | ---
value | the unique value of checkbox | ```Number丨String``` | -
checked | indicate if checkbox is selected | ```Boolean``` | ```false```
indeterminate | indicate whether checkbox show side state | ```Boolean``` | ```false```
disabled | disable checkbox | ```Boolean``` | ```false```
onChange | the callback function triggered by checked state changes | ```Boolean``` | -

#### Checkbox.Group
property | description | type | default
-----|------| ---- | ---
defaultValue | a set of default checked value | ```Array``` | ```[]```
value | a set of checkbox value | ```Array``` | -
onChange | the callback function triggered by values change | ```(values: Array) => {}``` | -