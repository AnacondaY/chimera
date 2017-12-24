### Dropdown
Pop-up or pop-down menu.
@@---------@@

#### Dropdown
property | description | type | default
-----|------| ---- | ---
placement | popup position | ```'bottom-left'丨'bottom-center'丨'botton-right'丨'top-left'丨'top-center'丨'top-right'``` | ```'bottom-left'```
menu | dropdown menu | ```Dropdown.Menu``` | -
trigger | how to trigger | ```'click'丨'hover'``` | ```'click'```
menuStyle | customized menu style | ```Object``` | -
onVisibleChange | the callback function triggered by change of menu visibility | ```(visible: Boolean) => {}```| -


#### Dropdown.Button
property | description | type | default
-----|------| ---- | ---
size | size of button | ```'large'丨'middle'丨'small'``` | ```'large'```
type | theme of button | ```'primary'丨'success'丨'error'丨'warning'丨'info'``` | ```'primary'```
onClick | the callback function triggered by right arrow button | ```Function``` | -

#### Dropdown.Menu
property | description | type | default
-----|------| ---- | ---
className | extra CSS class | ```String``` | -
style | customized style | ```Object``` | -