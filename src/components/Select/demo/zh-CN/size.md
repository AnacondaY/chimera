### 不同尺寸
设置```size```属性可以控制选择器的大小。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-select-list">
                    <Select size="large" placeholder="大尺寸" className="demo-select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                    </Select>
                    <Select placeholder="中尺寸" className="demo-select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                    </Select>
                    <Select size="small" placeholder="小尺寸" className="demo-select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                    </Select>
                </div>
            )
        }
    }
```