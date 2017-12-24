### Check all
The attribute ```indeterminate``` respresent the state that one is selected at leaset but not all.
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
            const indeterminate = values.length && values.length < 3;
            const allChecked = values.length === 3;
            return (
                <div>
                    <div>
                        <Checkbox onChange={this.toggleAll.bind(this)} 
                            indeterminate={indeterminate}
                            checked={allChecked}
                        >
                            All
                        </Checkbox>
                    </div>
                    <p>
                        <Checkbox.Group value={values} onChange={this.handleChange.bind(this)}>
                            <Checkbox value="1">Misery</Checkbox>
                            <Checkbox value="2">Demon</Checkbox>
                            <Checkbox value="3">Destruction</Checkbox>
                        </Checkbox.Group>
                    </p>
                </div>
            )
        }

    }
```