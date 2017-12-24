### 不同尺寸
和```Input```一样,提供大、中、小三种大小。
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