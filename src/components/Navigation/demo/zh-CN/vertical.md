### 垂直导航
通常置于侧边栏。

```javascript
    class Demo extends React.Component {

        render(){
            const { Item, Subnav, ItemGroup } = Navigation;
            return (
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item>导航3</Item>
                            <Item>导航2</Item>
                            <Item>导航3</Item>
                        </Navigation>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item><Icon type="picture"/>导航3</Item>
                            <Item><Icon type="location"/>导航2</Item>
                            <Item><Icon type="eye"/>导航3</Item>
                        </Navigation>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Navigation mode="vertical">
                            <Item><Icon type="picture"/>导航1</Item>
                            <Subnav title={<span><Icon type="bars"/>导航2</span>}>
                                <ItemGroup title="分组1">
                                    <Item>导航2-1</Item>
                                    <Item>导航2-2</Item>
                                </ItemGroup>
                                <ItemGroup title="分组2">
                                    <Item>导航2-3</Item>
                                    <Item>导航2-4</Item>
                                </ItemGroup>
                            </Subnav>
                            <Item><Icon type="setting"/>导航3</Item>
                        </Navigation>
                    </Col>
                </Row>
            )
        }

    }
```