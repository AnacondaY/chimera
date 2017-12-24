### Checkbox Group
To associate checkbox selection results to the same array.
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
                    <Checkbox value="1">Assassination</Checkbox>
                    <Checkbox value="2">Thug</Checkbox>
                    <Checkbox value="3">Acuteness</Checkbox>
                </Checkbox.Group>
            )
        }

    }
```