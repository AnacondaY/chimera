### 单选框组
A group of radio.
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
                    <Checkbox checked={checked} onChange={c => this.toggle(c)}>Disable all</Checkbox>
                    <p>
                        <Radio.Group disabled={checked} defaultValue="2" value={value} onChange={this.handleChange}>
                            <Radio value="1">Engineering</Radio>
                            <Radio value="2">Mining</Radio>
                            <Radio value="3">Alchemy</Radio>
                            <Radio value="4">Forging</Radio>
                        </Radio.Group>
                    </p>
                </div>
            )
        }
    }
```