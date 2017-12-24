### 链接按钮
设置属性```link```将使按钮以文字的形式展现。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button link>默认按钮</Button>
                    <Button link type="primary">主要按钮</Button>
                    <Button link type="success">成功按钮</Button>
                    <Button link type="error">错误按钮</Button>
                    <Button link type="warning">警告按钮</Button>
                    <Button link type="info">信息按钮</Button>
                    <Button link disabled type="info">禁用按钮</Button>                    
                </div>
            )
        }
    }
```