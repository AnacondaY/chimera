### Basic
a simple Select.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Select className="demo-select" placeholder="Please select...">
                    <Select.Option value="1" label="Option1" />
                    <Select.Option value="2" label="Option2" />
                    <Select.Option value="3" label="Option3" />
                </Select>
            )
        }
    }
```