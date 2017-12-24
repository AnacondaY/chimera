## Navigation
Component for navigating pages.
### Examples
@@------@@
### API
#### Navigation
property | description | type | default
-----|------| ---- | ---
mode | oritation of navigation | ```'horizontal'丨'vertical'``` | ```'horizontal'```
only | only one subnav keep expanded at one time | ```Boolean``` | ```true```
openedMarks | the set of expanded subnav marks | ```String[]``` | ```[]```
activeMark | the set of active navigation item marks | ```String``` | -
trigger | the trigger method to expand subnav. Only works in ```mode='horizontal'``` | ```'hover'丨'click'``` | ```'hover'```
onItemSelect | the callback function triggered by navigation item selected | ```(activeMark: String, openedMarks: String[]) => {}``` | -
onMenuOpen | the callback function triggered by menu opening | ```(activeMark: String, openedMarks: String[]) => {}``` | -
onMenuClose | the callback function triggered by menu closing | ```(activeMark: String, openedMarks: String[]) => {}``` | -

#### Navigation.Item
property | description | type | default
-----|------| ---- | ---
mark | the unique string of item | ```String``` | -
disabled | disable item | ```Boolean``` | ```false```

#### Navigation.Subnav
property | description | type | default
-----|------| ---- | ---
mark | the unique string of subnav | ```String``` | -
disabled | disable subnav | ```Boolean``` | ```false```
title | title of subnav | ```String丨ReactNode``` | -
children | children elements |  ```Navgation.Item[]丨Navigation.ItemGroup[]``` | -

#### Navigation.ItemGroup
property | description | type | default
-----|------| ---- | ---
title | title of group | ```String丨ReactNode``` | -
children | children elements |  ```Navgation.Item[]``` | -
