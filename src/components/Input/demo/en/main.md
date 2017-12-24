## Input
An basic component interactived with the operation of user typing.
### Examples
@@----------------@@
### API
> When the attribute ```iconBefore``` or ```iconAfter``` is set to ```String```, the icon corresponding to [Icon](/#/icon) will be displayed

property | description | type | default
-----|------| ---- | ---
defaultValue | the default value of input | ```Number丨String``` | -
value | the input value | ```Number丨String``` | -
disabled | disable input | ```Boolean``` | ```false```
size | to set the size of input | ```'large'丨'middle'丨'small'```| ```'middle'```
textarea | indicate whether input appears in textarea way | ```Boolean``` | ```false```
cleanable | indicate whether input is cleanable | ```Boolean``` | ```false```
placeholder | the text in input when the value is empty | ```String丨Number``` | -
iconBefore | the icon placed in front of input | ```String丨ReactNode``` | -
iconAfter | the icon placed behind input | ```String丨ReactNode``` | -
addonBefore | the element placed in front of input | ```String丨ReactNode``` | -
addonAfter | the element placed behind input | ```String丨ReactNode``` | -
onChange | the callback function triggered by value change. | ```(value: Number丨String) => {}``` | -
