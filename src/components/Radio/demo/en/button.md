### Button group style
Display in button group style.
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
                    <Radio.Button value="1">Tank</Radio.Button>
                    <Radio.Button value="2">DPS</Radio.Button>
                    <Radio.Button value="3">Support</Radio.Button>
                </Radio.Group>
            )
        }
    }
```