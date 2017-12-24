### 不同尺寸
设置```size```可以控制输入框大小。
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