### Disabled tab
Disable tab.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Tabs>
                            <Tabs.Pane label="Tab 1">
                                Content of Tab 1
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 2" disabled>
                                Content of Tab 2
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 3">
                                Content of Tab 3
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Tabs mode="vertical" style={{height: 168}}>
                            <Tabs.Pane label="Tab 1">
                                Content of Tab 1
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 2" disabled>
                                Content of Tab 2
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 3">
                                Content of Tab 3
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 4">
                                Content of Tab 4
                            </Tabs.Pane>
                            <Tabs.Pane label="Tab 5">
                                Content of Tab 5
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                </Row>
            )
        }
    }
```