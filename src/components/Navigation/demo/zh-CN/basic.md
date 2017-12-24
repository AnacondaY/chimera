### 水平导航
用于顶层的主导航。
```javascript
    class Demo extends React.Component {
        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <Navigation onItemSelect={(mark, marks) => console.log(mark, marks)}>
                    <Item mark="1"><Icon type="setting"/>控制台</Item>
                    <Subnav mark="2" title={<span><Icon type="user"/>用户</span>}>
                        <Item mark="2-1"><Icon type="time"/>时间管理</Item>
                        <Item mark="2-2"><Icon type="lock"/>更改密码</Item>
                        <Item mark="2-3"><Icon type="mail"/>我的邮箱</Item>
                    </Subnav>
                    <Item mark="3"><Icon type="share"/>分享</Item>
                </Navigation>
            )
        }
    }
```
