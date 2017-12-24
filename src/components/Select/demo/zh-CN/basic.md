### 基本用法
简单的选择器。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Select className="demo-select" placeholder="请选择" defaultValue="1">
                    <Select.Option value="1" label="Option1" />
                    <Select.Option value="2" label="Option2" />
                    <Select.Option value="3" label="Option3" />
                </Select>
            )
        }
    }
```