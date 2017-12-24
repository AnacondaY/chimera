### Disabled Toggle
Disable Toggle.
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                disabled: true
            }
        }

        handleChange(checked: Boolean){
            this.setState({
                disabled: checked
            })
        }

        render(){
            return (
                <div>
                    <Checkbox checked={this.state.disabled} onChange={this.handleChange.bind(this)}>Disable Toggle</Checkbox>
                    <Toggle disabled={this.state.disabled} />
                </div>
            )
        }
    }
```