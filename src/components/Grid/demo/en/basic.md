### Grid system
Similar to [BootStrap](https://getbootstrap.com/), the containers are divided into rows(```Row```s) and columns(```Col```s), and each ```Row``` contains 24 ```Col```s at most rather than 12 columns like Bootstrap.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-grid">
                    <Row>
                        <Col span={24}>col-24</Col>
                    </Row>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                </div>
            )
        }
    }
```