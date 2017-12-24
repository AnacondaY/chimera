### Controlled Checkbox
The checked state of Checkbox is controlled by other component.
```javascript
    class Demo extends React.Component {

        constructor(){
            super();
            this.state = {
                checked: false
            }
        }

        handleChange(isOn: Boolean){
            this.setState({
                checked: isOn
            })
        }

        render(){
            return (
                <div>
                    <div style={{marginBottom:12}}>
                        <Toggle onChange={this.handleChange.bind(this)} checked={this.state.checked} offText="Off" onText="On" />
                    </div>
                    <Checkbox onChange={this.handleChange.bind(this)} checked={this.state.checked}>controlled checkbox</Checkbox>
                </div>
            )
        }

    }
```