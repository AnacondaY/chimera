### 受控复选框
选中状态随外部属性变化而改变。
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
                        <Toggle onChange={this.handleChange.bind(this)} checked={this.state.checked} />
                    </div>
                    <Checkbox onChange={this.handleChange.bind(this)} checked={this.state.checked}>受控复选框</Checkbox>
                </div>
            )
        }

    }
```