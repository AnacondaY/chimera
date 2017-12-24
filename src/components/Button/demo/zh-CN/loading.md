### 加载按钮
设置```loading```属性使按钮处于加载状态。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button type="primary" loading>加载按钮</Button>
                    <Button type="success" loading>加载按钮</Button>
                    <Button type="error" loading>加载按钮</Button>
                    <Button type="warning" loading>加载按钮</Button>
                    <Button type="info" loading>加载按钮</Button>
                </div>
            )
        }
    }
```