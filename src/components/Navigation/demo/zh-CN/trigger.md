### 触发方式
水平导航的下拉菜单支持```click```和```hover```两种方式展开/收起。
```javascript
    class Demo extends React.Component {
        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <Navigation trigger="click">
                    <Item><Icon type="setting"/>控制台</Item>
                    <Subnav title={<span><Icon type="user"/>用户</span>}>
                        <Item><Icon type="time"/>时间管理</Item>
                        <Item><Icon type="lock"/>更改密码</Item>
                        <Item><Icon type="mail"/>我的邮箱</Item>
                    </Subnav>
                    <Item><Icon type="share"/>分享</Item>
                </Navigation>
            )
        }
    }
```