### 禁用
设置```disabled```使开关失效。
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
                    <Checkbox checked={this.state.disabled} onChange={this.handleChange.bind(this)}>禁用开关</Checkbox>
                    <Toggle disabled={this.state.disabled} />
                </div>
            )
        }

    }
```