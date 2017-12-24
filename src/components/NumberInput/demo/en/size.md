### Size
There are three different sizes of numberic input.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div>
                    <div className="demo-number-input">
                        <NumberInput size="large" />                    
                    </div>
                    <div className="demo-number-input">
                        <NumberInput />                        
                    </div>
                    <div className="demo-number-input">
                        <NumberInput size="small" />                        
                    </div>
                </div>
            )
        }
    }
```