### Disbled
Disable select or option.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-select-list">
                    <Select className="demo-select" placeholder="Disable select" disabled>
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" />
                        <Select.Option value="3" label="Option3" />
                    </Select>
                    <Select className="demo-select" placeholder="Disable option">
                        <Select.Option value="1" label="Option1" />
                        <Select.Option value="2" label="Option2" disabled />
                        <Select.Option value="3" label="Option3" />
                    </Select>
                </div>
            )
        }
    }
```