### 配合下拉框
将下拉框和输入框组合使用。
```javascript
    class Demo extends React.Component {
        render(){
            const select = (
                <Select defaultValue="1">
                    <Select.Option value="1" label="Option1"/>
                    <Select.Option value="2" label="Option2" />
                    <Select.Option value="3" label="Option3" />
                </Select>
            )
            return (
                <div className="demo-input">
                    <Input className="demo-input" addonBefore={select} />
                    <Input addonAfter={select} />
                </div>
            )
        }
    }
```