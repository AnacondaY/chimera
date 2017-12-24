## NumberInput
The component for numberic value input.
@@------------@@
### API
property | description | type | default
-----|------| ---- | ---
initialValue | initial value of input | ```Number``` | -
maximum | maximal value | ```Number``` | ```100```
minimum | minimal value | ```Number``` | ```0```
value | binding value | ```Number``` | -
size | size of numberic input | ```'large'丨'middle'丨'small'``` | ```middle```
disabled | disable input | ```Boolean``` | ```false``` 
formatter | convert input value to present value in specific format | ```(value: Number):String => {}``` | -
parser | reverse process of formatter | ```(value: String): Number => {}```  | -
onChange | the callback function triggered by value change | ```(value: String丨Number) => {}``` | -