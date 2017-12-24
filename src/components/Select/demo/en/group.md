### Option group
The samilar options can be grouped by ```Select.OptGroup```.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Select placeholder="Option group" className="demo-select">
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