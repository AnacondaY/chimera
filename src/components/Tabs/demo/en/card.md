### Card style
Display in card style.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Tabs type="card" closable>
                            <Tabs.Pane label="Tab 1">
                                Content of Tab1
                            </Tabs.Pane>
                            <Tabs.Pane disabled label="Tab 2">
                                Content of Tab2
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 3">
                                Content of Tab3
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} style={{height: 240}}>
                        <Tabs mode="vertical" type="card" closable>
                            <Tabs.Pane label="Tab 1">
                                Content of Tab1
                            </Tabs.Pane>
                            <Tabs.Pane disabled label="Tab 2">
                                Content of Tab2
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 3">
                                Content of Tab3
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                </Row>
            )
        }
    }    
```