### 配合Navigation
布局常常和导航结合使用。
```javascript
    class Demo extends React.Component {
        render(){
            const { Header, Sider, Content, Footer } = Layout;
            const { Item, Subnav, ItemGroup } = Navigation;
            return (
                <Layout className="demo-layout">
                    <Header>
                        <Navigation>
                            <Item>导航1</Item>
                            <Item>导航2</Item>
                            <Subnav title="导航3">
                                <ItemGroup title="导航分类1">
                                    <Item>导航3-1</Item>
                                    <Item>导航3-2</Item>
                                </ItemGroup>
                                <ItemGroup title="导航分类2">
                                    <Item>导航3-1</Item>
                                    <Item>导航3-2</Item>
                                </ItemGroup>
                            </Subnav>
                        </Navigation>
                    </Header>
                    <Layout>
                        <Sider style={{height: 320}}>
                            <Navigation mode="vertical" style={{height: '100%'}}>
                                <Item>导航4</Item>
                                <Subnav title="导航5">
                                    <Item>导航5-1</Item>
                                    <Item>导航5-2</Item>
                                    <Item>导航5-3</Item>
                                </Subnav>
                                <Item>导航6</Item>
                            </Navigation>
                        </Sider>
                        <Content>
                            <p style={{padding: '0 12px'}}>文章内容。。。</p>
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