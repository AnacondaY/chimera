### Disabled Input
The Input will be disabled when attribute ```disabled``` is set.
设置```disabled```可使输入框不可用。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-input">
                        <Input disabled />
                    </div>
                    <div className="demo-input">
                        <Input textarea disabled/>
                    </div>
                </div>
            )
        }
    }
```