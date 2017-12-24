### Disabled slider
Slider will be not operable when attribute ```disabled``` set to ```true```.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Slider defaultValue={30} disabled/>
            )
        }
    }
```