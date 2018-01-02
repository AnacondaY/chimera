### With navigation
It's common to combine layout with navigation.
```javascript
    class Demo extends React.Component {
        render(){
            const { Header, Sider, Content, Footer } = Layout;
            const { Item, Subnav, ItemGroup } = Navigation;
            return (
                <Layout className="demo-layout">
                    <Header>
                        <Navigation>
                            <Item>Nav  1</Item>
                            <Item>Nav  2</Item>
                            <Subnav title="Nav  3">
                                <ItemGroup title="Nav  Group1">
                                    <Item>Nav  3-1</Item>
                                    <Item>Nav  3-2</Item>
                                </ItemGroup>
                                <ItemGroup title="Nav  Group2">
                                    <Item>Nav  3-1</Item>
                                    <Item>Nav  3-2</Item>
                                </ItemGroup>
                            </Subnav>
                        </Navigation>
                    </Header>
                    <Layout>
                        <Sider style={{height: 320}}>
                            <Navigation mode="vertical" style={{height: '100%'}}>
                                <Item>Nav  4</Item>
                                <Subnav title="Nav  5">
                                    <Item>Nav  5-1</Item>
                                    <Item>Nav  5-2</Item>
                                    <Item>Nav  5-3</Item>
                                </Subnav>
                                <Item>Nav  6</Item>
                            </Navigation>
                        </Sider>
                        <Content>
                            <p style={{padding: '0 12px'}}>Main Content</p>
                        </Content>
                    </Layout>
                    <Footer className="demo-layout-footer">
                        Copyright by AnacondaY
                    </Footer>
                </Layout>
            )
        }
    }
```