### Vertical
The vertical navigation is often as the side menu.
```javascript
    class Demo extends React.Component {

        render(){
            const { Item, Subnav, ItemGroup } = Navigation;
            return (
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item>Navigation Item 1</Item>
                            <Item>Navigation Item 2</Item>
                            <Item>Navigation Item 3</Item>
                        </Navigation>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item><Icon type="picture"/>Navigation Item 1</Item>
                            <Item><Icon type="location"/>Navigation Item 2</Item>
                            <Item><Icon type="eye"/>Navigation Item 3</Item>
                        </Navigation>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item><Icon type="picture"/>Navigation Item 1</Item>
                            <Subnav title={<span><Icon type="bars"/>Navigation Subnav 2</span>}>
                                <ItemGroup title="Group 1">
                                    <Item>Navigation Item 2-1</Item>
                                    <Item>Navigation Item 2-2</Item>
                                </ItemGroup>
                                <ItemGroup title="Group 2">
                                    <Item>Navigation Item 2-3</Item>
                                    <Item>Navigation Item 2-4</Item>
                                </ItemGroup>
                            </Subnav>
                            <Item><Icon type="setting"/>Navigation Item 3</Item>
                        </Navigation>
                    </Col>
                </Row>
            )
        }

    }
```