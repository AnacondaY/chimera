## Radio
To select only one option.
### Examples
@@---------------@@
### API
#### Radio
#### Radio.Button
property | description | type | default
-----|------| ---- | ---
value | the unique value of radio | ```String丨Number``` | -
checked | indicate if radio is selected | ```Boolean``` | ```false```
disabled | disable radio | ```Boolean``` | ```false```

#### Radio.Group
property | description | type | default
-----|------| ---- | ---
value | the unique value of radio group | ```String丨Number``` | -
disabled | disable all radios in group | ```Boolean``` | ```false```
onChange | the callback function triggered by group value changes | ```(value: String丨Number) => {}```  | -