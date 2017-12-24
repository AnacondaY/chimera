### Responsive layout
Same to responsive layout of [BootStrap](https://getbootstrap.com/), four breakpoints are provided for responding.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-grid">
                    <Row>
                        <Col xs={24} sm={12} md={8} lg={6}>xs-24 sm-12 md-6 lg-4</Col>
                        <Col xs={24} sm={12} md={8} lg={6}>xs-24 sm-12 md-6 lg-4</Col>
                        <Col xs={24} sm={12} md={8} lg={6}>xs-24 sm-12 md-6 lg-4</Col>
                        <Col xs={24} sm={12} md={8} lg={6}>xs-24 sm-12 md-6 lg-4</Col>
                    </Row>
                    <Row>
                        <Col 
                            xs={{
                                span: 12,
                                push: 12
                            }}
                            sm={{
                                span: 8,
                                push:8
                            }}
                            md={{
                                span:6,
                                push:6
                            }}
                            lg={{
                                span:4,
                                push:4,
                            }}
                        >
                            col
                        </Col>
                    </Row>
                </div>
            )
        }
    }
```