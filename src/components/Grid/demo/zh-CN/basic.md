### 栅格系统
与[BootStrap](https://getbootstrap.com/)相似, 利用栅格将页面拆分为行(```Row```)和列(```Col```), 每行最多可容纳24列(```BootStrap```为12列)。

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