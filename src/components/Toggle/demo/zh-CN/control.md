### 受控开关
开关状态随外部参数变化。
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
                    <Checkbox checked={this.state.checked} onChange={this.handleChange.bind(this)}>{this.state.checked ? '开启': '关闭'}</Checkbox>
                    <Toggle checked={this.state.checked} onChange={this.handleChange.bind(this)} />
                </div>
            )
        }

    }
```