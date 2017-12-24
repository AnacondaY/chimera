### Exclude
Do not highlight the part of trace less than current value.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-slider">
                    <Slider defaultValue={35} exclude />
                    <Slider defaultValue={65} exclude disabled />
                </div>
            )
        }
    }
```