### Maximum, minimum and step
You can customize the attributes ```maximum```, ```minimum``` and ```step```.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-slider">
                    <Slider showTicks step={50} maximum={1000} minimum={100} />
                </div>
            )
        }
    }
```