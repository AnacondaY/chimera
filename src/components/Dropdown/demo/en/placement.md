### Placement
The position of menu appears are controlled by attribute ```placement```.
```javascript
    class Demo extends React.Component {
        render(){
            const menu = (
                <Dropdown.Menu>
                    <Dropdown.Item>Menu Item 001</Dropdown.Item>
                    <Dropdown.Item>Menu Item 002</Dropdown.Item>
                    <Dropdown.Item>Menu Item 003</Dropdown.Item>
                    <Dropdown.Item>Menu Item 004</Dropdown.Item>
                </Dropdown.Menu>
            )
            return (
                <div className="demo-dropdown-grid">
                    <Row>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu} placement="top-left">
                                <Button link>top-left</Button>
                            </Dropdown>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu} placement="top-center">
                                <Button link>top-center</Button>
                            </Dropdown>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu} placement="top-right">
                                <Button link>top-right</Button>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu}>
                                <Button link>bottom-left</Button>
                            </Dropdown>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu} placement="bottom-center">
                                <Button link>bottom-center</Button>
                            </Dropdown>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Dropdown trigger="hover" menu={menu} placement="bottom-right">
                                <Button link>bottom-right</Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
```