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
                            <Layout.Sider>Sider</Layout.Sider>
                            <Layout.Content>Content</Layout.Content>
                        </Layout>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                    <Layout>
                        <Layout.Header>Header</Layout.Header>
                        <Layout>
                            <Layout.Content>Content</Layout.Content>
                            <Layout.Sider>Sider</Layout.Sider>
                        </Layout>
                        <Layout.Footer>Footer</Layout.Footer>
                    </Layout>
                    <Layout>
                        <Layout.Sider>Sider</Layout.Sider>
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