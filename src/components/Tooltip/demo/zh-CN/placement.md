### 冒泡位置
设置```placement```可以控制气泡出现的位置
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-tooltip-grid">
                    <Row>
                        <Col offset={3} span={6}>
                            <Tooltip placement="top-left" content="top-left 顶部左侧" offset={6}>
                                <Button link type="info">top-left</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="top-center" content="top-center 顶部居中" offset={6}>
                                <Button link type="info">top-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="top-right" content="top-right 顶部右侧" offset={6}>
                                <Button link type="info">top-right</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-top" content="left-top 左侧靠上" offset={6}>
                                <Button link type="info">left-top</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-top" content="right 右侧靠上" offset={6}>
                                <Button link type="info">right-top</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-center" content="left-center 左侧居中" offset={6}>
                                <Button link type="info">left-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-center" content="right-center 右侧居中" offset={6}>
                                <Button link type="info">right-center</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Tooltip placement="left-bottom" content="left-bottom 左侧靠下" offset={6}>
                                <Button link type="info">left-bottom</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6} push={12}>
                            <Tooltip placement="right-bottom" content="right 右侧靠下" offset={6}>
                                <Button link type="info">right-bottom</Button>                        
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={3} span={6}>
                            <Tooltip placement="bottom-left" content="bottom-left 底部左侧" offset={6}>
                                <Button link type="info">bottom-left</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="bottom-center" content="bottom-center 底部居中" offset={6}>
                                <Button link type="info">bottom-center</Button>
                            </Tooltip>
                        </Col>
                        <Col span={6}>
                            <Tooltip placement="bottom-right" content="bottom-right 底部右侧" offset={6}>
                                <Button link type="info">bottom-right</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
```