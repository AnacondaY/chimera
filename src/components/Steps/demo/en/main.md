## Steps
Used to interact width large form, guiding use to complete the specific operation.
### Examples
@@--------@@
### API
#### Steps
property | description | type | default
-----|------| ---- | ---
currentIndex | the index of current step | ```Number``` | ```0```
mode | the display style of steps | ```'horizontal'丨'vertical'``` | ```'horizontal'```
status | the status of current step | ```'error'丨'success'丨'processing'``` | -

#### Steps.Step
property | description | type | default
-----|------| ---- | ---
title | the title of step | ```String丨ReactNode``` | -
description | the description of step | ```String丨ReactNode``` | -
icon| the icon of step | ```String丨ReactNode``` | -