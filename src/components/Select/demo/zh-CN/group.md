### 分组
归纳相近的选项。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Select placeholder="选项分组" className="demo-select">
                    <Select.OptGroup label="Group1">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                    </Select.OptGroup>
                    <Select.OptGroup label="Group2">
                        <Select.Option value="4" label="Option4" />
                        <Select.Option value="5" label="Option5" />
                    </Select.OptGroup>
                </Select>
            )
        }
    }
```