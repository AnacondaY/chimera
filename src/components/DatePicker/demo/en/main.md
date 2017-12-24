## DatePicker
To select date or date range.
@@------------@@
### API
property | description | type | default
-----|------| ---- | ---
range | indicate whether to select date range | ```Boolean``` | ```false```
defaultValue | the initial date | ```Date丨Date[]``` | -
value | to set date | ```Date丨Date[]``` | -
mode | mode of picker | ```'year'丨'month'丨'date'``` | ```'date'```
size | size of datepicker | ```'large'丨'middle'丨'small'``` | ```'middle'```
disabled | disable datepicker | ```Boolean``` | ```false``` 
placeholder | the text in input when the value is empty | ```String``` | -
formatter | to convert date to string | ```(date: Date丨Date[]):String => {}``` | -
disableDate | to disable specific date | ```(data: Date): Boolean => {}```  | -
onChange | the callback function triggered by input value change | ```(value: String) => {}``` | -
onPick | the callback function triggered by picking date | ```(data: Date丨Date[]) => {} ``` | -