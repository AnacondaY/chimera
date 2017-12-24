### Column gap
The gap between each ```Col``` in one ```Row``` are controlled by the atttribute ```gap``` of ```Row```.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-grid-gap">
                    <Row gap={8}>
                        <Col span={8}>
                            <div className="demo-col">col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className="demo-col">col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className="demo-col">col-8</div>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
```