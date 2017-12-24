### 选择器模式
设置```mode```属性可以设置面板展示的模式, 支持年、月、日三种选择模式。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Row className="demo-datepicker-list">
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker placeholder="日选择器" />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker mode="month" placeholder="月选择器"/>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker mode="year" placeholder="年选择器"/>                    
                    </Col>
                </Row>
            )
        }
    }
```