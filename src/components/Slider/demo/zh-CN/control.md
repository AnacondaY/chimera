### 受控滑块
滑块的值受外部组件控制。
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