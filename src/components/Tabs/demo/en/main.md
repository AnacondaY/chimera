## Tabs
To sum up and display a large amount of content.
### Examples
@@---------------@@
### API
#### Tabs
property | description | type | default
-----|------| ---- | ---
defaultActiveIndex | default active index of tab | ```Number``` | -
mode | the direction mode of tabs | ```'horizontal'丨'vertical'``` | ```'horizontal'```
type | the display style of tabs | ```'line'丨'card'``` | ```'line'```
closable | indicate whether tab can be closed | ```Boolean``` | ```false```
onChange | the callback function triggered by change of active index | ```(currentIndex: Number, prevIndex: Number) => {}``` | -
onRemove | the callback function triggered by tab closing | ```(currentIndex: Number, removedIndex: Number) => {} ``` | -
onTabClick | the callback function triggered by tab click | ```(tabIndex: Number) => {}``` | -
onPrev | the callback function triggered by click of prev button | ```Function``` | -
onNext | the callback function triggered by click of next button | ```Function``` | -

#### Tabs.Pane
property | description | type | default
-----|------| ---- | ---
label | the label of tab | ```String丨ReactNode``` | -
disabled | disable tab | ```Boolean``` | ```false```