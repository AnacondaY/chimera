### Controlled slider
The value of slider is controlled by other component.
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                value: 50
            }
        }
        handleChange(value: Number){
            this.setState({
                value
            });
        }
        render(){
            const value = this.state.value;
            return (
                <Row>
                    <Col span={18}>
                        <Slider value={value} />
                    </Col>
                    <Col span={6}>
                        <NumberInput value={value} onChange={this.handleChange.bind(this)} />
                    </Col>
                </Row>
            )
        }
    }
```