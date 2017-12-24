### Input width Select
Combine Input with Select.
```javascript
    class Demo extends React.Component {
        render(){
            const select = (
                <Select defaultValue="1">
                    <Select.Option value="1" label="Option1"/>
                    <Select.Option value="2" label="Option2"/>
                    <Select.Option value="3" label="Option3"/>
                </Select>
            )
            return (
                <div>
                    <Input className="demo-input" addonBefore={select} />
                    <Input addonAfter={select} />
                </div>
            )
        }
    }
```