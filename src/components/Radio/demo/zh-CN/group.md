### 单选框组
将逻辑互斥的选项置于一组中。
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                checked: false
            }
            this.handleChange = this.handleChange.bind(this);
            this.toggle = this.toggle.bind(this);
        }
        handleChange(value){
            this.setState({
                value
            });
        }
        toggle(checked){
            this.setState({
                checked
            })
        }
        render(){
            const { value, checked } = this.state;
            return (
                <div>
                    <Checkbox checked={checked} onChange={c => this.toggle(c)}>禁用</Checkbox>
                    <p>
                        <Radio.Group disabled={checked} value={value} defaultValue="2" onChange={this.handleChange}>
                            <Radio value="1">草药</Radio>
                            <Radio value="2">采矿</Radio>
                            <Radio value="3">炼金</Radio>
                            <Radio value="4">锻造</Radio>
                        </Radio.Group>
                    </p>
                </div>
            )
        }
    }
```