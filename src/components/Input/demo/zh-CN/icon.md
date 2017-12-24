### 带图标的输入框
设置```iconBefore```和```iconAfter```可以添加输入框的前后图标。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" placeholder="请输入关键字" iconBefore={<Icon type="search"/>} />
                    </div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" placeholder="请输入关键字" iconAfter={<Icon type="search" />} />
                    </div>
                </div>
            )
        }
    }
```