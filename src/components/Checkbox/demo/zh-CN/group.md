### 复选框组
用于将复选框选择结果关联到同一数组。
```javascript
    class Demo extends React.Component {

        constructor(){
            super();
            this.state = {
                
            }
        }

        handleChange(values: Array){
            this.setState({
                selectedValues: values
            }, () => {
                console.log(this.state.selectedValues);
            });
        }

        render(){
            return (
                <Checkbox.Group onChange={this.handleChange.bind(this)} defaultValue={['1', '3']} value={this.state.selectedValues}>
                    <Checkbox value="1">刺杀</Checkbox>
                    <Checkbox value="2">狂徒</Checkbox>
                    <Checkbox value="3">敏锐</Checkbox>
                </Checkbox.Group>
            )
        }

    }
```