### Input Size
There are three different size of Input.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" size="large" iconBefore="mail" />
                    </div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" iconBefore="mail" />
                    </div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" size="small" iconBefore="mail" />
                    </div>
                </div>
            )
        }
    }
```