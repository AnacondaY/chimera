## Carousel
Loop a series of images and text.
### Examples
@@--------@@
### API
property | description | type | default
-----|------| ---- | ---
autoplay | indicate whether automatical playing | ```Boolean``` | ```true```
interval | interval of content change. In milliseconds  | ```Number``` | ```3000```
speed | speed of content change. In milliseconds | ```Number``` | ```300```
hoverToStop | indicate whether to stop autoplay by hovering | ```Boolean``` | ```true``` 
showController | indicate whether to show control buttons on the left and right sides | ```Boolean``` | ```true```
showIndicators | indicate whether to show indicators | ```Boolean``` | ```true```
effect | the animation of content change | ```'slide'丨'fade'``` | ```'slide'```
onChange | the callback function triggered by content change | ```(currentIndex: Number) => {}``` | -