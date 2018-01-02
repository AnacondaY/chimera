## Layout
Common components for page layout.

### Compoents List
* Layout: The root container of layout, which can be inserted into ```Header```, ```Footer```, ```Sider```, ```Content```, even ```Layout```。
* Header: Top of page. It's always to place navigation.
* Footer: Bottom of page. It's always to place the statements and links.
* Sider: Side bar of page both of the left and the right.
* Content: Main content of page.
> All implements of above components are on basis of flex.

### Examples
@@------------@@
### API
>The attributes of ```style``` and ```className``` are supported by all the above components.

#### Layout.Sider
property | description | type | default
-----|------| ---- | ---
collapsible | Indicate whether the sidebar enable collapsion. | ```Bolean``` | ```true```
collapsed | the state of collapsion. | ```Bolean``` | ```false```
width | width of expanded sidebar | ```Number``` | ```200```
collapsedWidth | width of collapsed sidebar  | ```Number``` | ```0```
threshold | the responsive threshold to trigger collapsion | ```'xs'丨'sm'丨'md'丨'lg'``` | ```'sm'```


