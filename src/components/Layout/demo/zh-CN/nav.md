### 配合Navigation
```javascript
    class Demo extends React.Component {

        render(){
            const { Header, Sider, Content, Footer } = Layout;
            const { Item, Subnav, ItemGroup } = Navigation;
            return (
                <Layout>
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
                            <Navigation mode="vertical">
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
                            Content
                        </Content>
                    </Layout>
                    <Footer style={{height: 120}}>Footer</Footer>
                </Layout>
            )
        }

    }
```