### Multiple
Multiple options can be selected and removed.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-select-list">
                    <Select multiple size="large" placeholder="Multiple select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                        <Select.Option value="4" label="Option4" />
                        <Select.Option value="5" label="Option5" />
                        <Select.Option value="6" label="Option6" />
                    </Select>
                    <Select multiple placeholder="Multiple select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                        <Select.Option value="4" label="Option4" />
                        <Select.Option value="5" label="Option5" />
                        <Select.Option value="6" label="Option6" />
                    </Select>
                    <Select multiple size="small" placeholder="Multiple select">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                        <Select.Option value="4" label="Option4" />
                        <Select.Option value="5" label="Option5" />
                        <Select.Option value="6" label="Option6" />
                    </Select>
                </div>
            )
        }
    }
```