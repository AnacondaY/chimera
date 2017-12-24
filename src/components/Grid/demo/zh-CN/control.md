### 列排序
通过```pull```(向左)和```push```(向右)可控制列的位置和排序。

```javascript
    class Demo extends React.Component {

        render(){
            return (
                <div className="demo-grid">
                    <Row>
                        <Col span={8} push={16}>col-8 push-16</Col>
                        <Col span={16} pull={8}>col-16 pull-8</Col>
                    </Row>
                    <Row>
                        <Col span={12} push={12}>col-12 push-12</Col>
                        <Col span={12} pull={12}>col-12 pull-12</Col>
                    </Row>
                </div>
            )
        }

    }
```