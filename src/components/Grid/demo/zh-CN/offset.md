### 列偏移
通过```offset```属性可以使列向右移动同等数值的单位列宽。
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