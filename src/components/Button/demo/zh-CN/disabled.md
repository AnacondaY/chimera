### 禁用按钮
添加```disabled```属性，使按钮处于不可以状态。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-disabled">
                    <Button type="primary">可用状态</Button>
                    <Button disabled>禁用状态</Button>
                </div>
            )
        }
    }
```