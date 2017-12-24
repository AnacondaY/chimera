### Mode of DatePicker
There are three picker mode that can be used to pick year, month or date.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Row className="demo-datepicker-list">
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker placeholder="date picker" />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker mode="month" placeholder="month picker"/>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <DatePicker mode="year" placeholder="year picker"/>                    
                    </Col>
                </Row>
            )
        }
    }
```