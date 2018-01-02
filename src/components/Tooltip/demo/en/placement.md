### Placement
You can customize the popup position.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-tooltip-grid">
                    <Row>
                        <Col offset={3} span={6}>
                            <Tooltip placement="top-left" content="top-left" offset={6}>
                                <Button link type="info">top-left</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="top-center" content="top-center" offset={6}>
                                <Button link type="info">top-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="top-right" content="top-right" offset={6}>
                                <Button link type="info">top-right</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-top" content="left-top" offset={6}>
                                <Button link type="info">left-top</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-top" content="right" offset={6}>
                                <Button link type="info">right-top</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-center" content="left-center" offset={6}>
                                <Button link type="info">left-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-center" content="right-center" offset={6}>
                                <Button link type="info">right-center</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-bottom" content="left-bottom" offset={6}>
                                <Button link type="info">left-bottom</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-bottom" content="right" offset={6}>
                                <Button link type="info">right-bottom</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={3} span={6}>
                            <Tooltip placement="bottom-left" content="bottom-left" offset={6}>
                                <Button link type="info">bottom-left</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="bottom-center" content="bottom-center" offset={6}>
                                <Button link type="info">bottom-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="bottom-right" content="bottom-right" offset={6}>
                                <Button link type="info">bottom-right</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
```