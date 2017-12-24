### Basic
Basic usage of radio.
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
                    <Radio value="1" checked={value === '1'} onChange={this.handleChange}>Tank</Radio>
                    <Radio value="2" checked={value === '2'} onChange={this.handleChange}>DPS</Radio>
                    <Radio value="3" checked={value === '3'} onChange={this.handleChange}>Support</Radio>
                </div>
            )
        }
    }
```