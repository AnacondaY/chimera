### 图标按钮
设置```icon```属性可以使按钮包含图标。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-icon">
                    <Button type="success" icon="search">搜索</Button>
                    <Button type="info" icon="edit">编辑</Button>
                    <Button type="error" icon="trash">删除</Button>
                </div>
            )
        }
    }
```