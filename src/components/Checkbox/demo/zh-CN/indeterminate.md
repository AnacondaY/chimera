### 全选
设置```indeterminate```可表示至少有一项选中且没有全选的情况。
```javascript
    class Demo extends React.Component {

        constructor(){
            super();
            this.state = {
                values: ['1', '3']
            }
        }

        toggleAll(checked: Boolean){
            this.setState({
                values: checked ? ['1', '2', '3'] : []
            })
        }

        handleChange(values: Array){
            this.setState({
                values
            })
        }

        render(){
            const values = this.state.values;
            const indeterminate = values.length > 0 && values.length < 3;
            const allChecked = values.length === 3;
            return (
                <div>
                    <div>
                        <Checkbox onChange={this.toggleAll.bind(this)} 
                            indeterminate={indeterminate}
                            checked={allChecked}
                        >
                            全选
                        </Checkbox>
                    </div>
                    <p>
                        <Checkbox.Group value={values} onChange={this.handleChange.bind(this)}>
                            <Checkbox value="1">痛苦</Checkbox>
                            <Checkbox value="2">恶魔</Checkbox>
                            <Checkbox value="3">毁灭</Checkbox>
                        </Checkbox.Group>
                    </p>
                </div>
            )
        }

    }
```