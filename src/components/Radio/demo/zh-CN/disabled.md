### 禁用
使单选框不可用。
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                value: '1'
            }
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(value){
            this.setState({
                value
            });
        }
        render(){
            const value = this.state.value;
            return (
                <div>
                    <Radio value="1" checked={value === '1'} onChange={this.handleChange}>坦克</Radio>
                    <Radio value="2" checked={value === '2'} disabled onChange={this.handleChange}>输出</Radio>
                    <Radio value="3" checked={value === '3'} onChange={this.handleChange}>治疗</Radio>
                </div>
            )
        }
    }
```