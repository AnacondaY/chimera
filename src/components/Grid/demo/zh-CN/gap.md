### 列间隙
相同行中列之间的间隙, 通过```Row```组件的```gap```属性控制
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