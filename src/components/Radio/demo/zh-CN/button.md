### 单选按钮组
以按钮组的形式展示单选框组。
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
                <Radio.Group value={value} onChange={this.handleChange}>
                    <Radio.Button value="1">坦克</Radio.Button>
                    <Radio.Button value="2">输出</Radio.Button>
                    <Radio.Button value="3">治疗</Radio.Button>
                </Radio.Group>
            )
        }
    }
```