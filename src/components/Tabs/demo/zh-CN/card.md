### 卡片模式
选项卡以卡片模式展示。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Tabs type="card" closable>
                            <Tabs.Pane label="选项页 1">
                                选项页1的内容
                            </Tabs.Pane>
                            <Tabs.Pane disabled label="选项页 2">
                                选项页2的内容
                            </Tabs.Pane>
                            <Tabs.Pane label="选项页 3">
                                选项页3的内容
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} style={{height: 240}}>
                        <Tabs mode="vertical" type="card" closable>
                            <Tabs.Pane label="选项页 1">
                                选项页1的内容
                            </Tabs.Pane>
                            <Tabs.Pane disabled label="选项页 2">
                                选项页2的内容
                            </Tabs.Pane>
                            <Tabs.Pane label="选项页 3">
                                选项页3的内容
                            </Tabs.Pane>
                        </Tabs>
                    </Col>
                </Row>
            )
        }
    }    
```