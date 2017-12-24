### 内联表单
适合用于空间有限且表单项较少的情况, 如导航条内。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <Form mode="inline">
                        <Form.Field>
                            <Input iconBefore="user" />
                        </Form.Field>
                        <Form.Field>
                            <Input htmlType="password" iconBefore="lock" />
                        </Form.Field>
                        <Form.Field>
                            <Button htmlType="submit" type="success">登录</Button>
                        </Form.Field>
                    </Form>
                    <Navigation>
                        <Navigation.Item>首页</Navigation.Item>
                        <Navigation.Item>导航1</Navigation.Item>
                        <Navigation.Item>导航2</Navigation.Item>
                        <Form mode="inline">
                            <Form.Field>
                                <Input iconBefore="user" />
                            </Form.Field>
                            <Form.Field>
                                <Input htmlType="password" iconBefore="lock" />
                            </Form.Field>
                            <Form.Field>
                                <Button htmlType="submit" type="success">登录</Button>
                            </Form.Field>
                        </Form>
                    </Navigation>
                </div>
            )
        }
    }
```