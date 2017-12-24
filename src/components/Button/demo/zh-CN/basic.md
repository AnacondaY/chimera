### 基础用法
按钮有六种表现形式，由```type```属性决定
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button>默认按钮</Button>
                    <Button type="primary">主要按钮</Button>
                    <Button type="success">成功按钮</Button>
                    <Button type="error">错误按钮</Button>
                    <Button type="warning">警告按钮</Button>
                    <Button type="info">信息按钮</Button>
                </div>
            )
        }
    }
```