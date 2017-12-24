### 禁用输入框
设置```disabled```可使输入框不可用。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-input">
                        <Input disabled placeholder="禁用输入框" />
                    </div>
                    <div className="demo-input">
                        <Input textarea disabled placeholder="禁用文本域"/>
                    </div>
                </div>
            )
        }
    }
```