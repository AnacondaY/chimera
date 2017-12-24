### 按钮组
将按钮以组的方式表现，多用于工具条。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <span className="demo-button-group">
                        <Button.Group>
                            <Button type="primary">上一页</Button>
                            <Button type="primary">下一页</Button>
                        </Button.Group>
                    </span>
                    <span className="demo-button-group">
                        <Button.Group>
                            <Button type="info" icon="edit" size="small"/>
                            <Button type="info" icon="trash" size="small"/>
                            <Button type="info" icon="location" size="small"/>
                            <Button type="info" icon="mail" size="small"/>
                        </Button.Group>
                    </span>
                </div>
            )
        }
    }
```