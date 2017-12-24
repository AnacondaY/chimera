### Controlled Toggle
Checked state of Toggle is controlled by other component.
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                checked: true
            }
        }

        handleChange(checked: Boolean){
            this.setState({
                checked
            })
        }

        render(){
            return (
                <div>
                    <Checkbox checked={this.state.checked} onChange={this.handleChange.bind(this)}>{this.state.checked ? 'ON': 'OFF'}</Checkbox>
                    <Toggle checked={this.state.checked} onChange={this.handleChange.bind(this)} />
                </div>
            )
        }
    }
```