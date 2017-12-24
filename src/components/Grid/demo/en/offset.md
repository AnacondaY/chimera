### Column offset
By setting attribute ```offset```, the offset of ```Col``` to left can be regulated.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-grid">
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6} offset={6}>col-6 offset-6</Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>col-12 offset-6</Col>
                    </Row>
                </div>
            )
        }
    }
```