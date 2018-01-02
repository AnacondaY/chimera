### 常见布局
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-layout-basic">
                    <Layout>
                        <Layout.Header>Header</Layout.Header>
                        <Layout.Content>Content</Layout.Content>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                    <Layout>
                        <Layout.Header>Header</Layout.Header>
                        <Layout>
                            <Layout.Sider style={{lineHeight: '180px'}}>Sider</Layout.Sider>
                            <Layout.Content>Content</Layout.Content>
                        </Layout>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                    <Layout>
                        <Layout.Header>Header</Layout.Header>
                        <Layout>
                            <Layout.Content>Content</Layout.Content>
                            <Layout.Sider style={{lineHeight: '180px'}}>Sider</Layout.Sider>
                        </Layout>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                    <Layout>
                        <Layout.Sider  style={{lineHeight: '260px'}}>Sider</Layout.Sider>
                        <Layout>
                            <Layout.Header>Header</Layout.Header>
                            <Layout.Content>Content</Layout.Content>
                            <Layout.Footer>Footer</Layout.Footer>
                        </Layout>
                    </Layout>
                </div>
            )
        }

    }
```