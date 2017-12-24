### 禁用
使下拉菜单或者导航项不可用。
```javascript
    class Demo extends React.Component {

        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <div>
                    <Navigation>
                        <Item>控制台</Item>
                        <Subnav title="用户" disabled>
                            <Item>时间管理</Item>
                            <Item>更改密码</Item>
                            <Item>我的邮箱</Item>
                        </Subnav>
                        <Item disabled>分享</Item>
                    </Navigation>
                    <Navigation style={{marginTop: 16}}>
                        <Item>控制台</Item>
                        <Subnav title="用户">
                            <Item>时间管理</Item>
                            <Item disabled>更改密码</Item>
                            <Item>我的邮箱</Item>
                        </Subnav>
                        <Item disabled>分享</Item>
                    </Navigation>
                </div>
            )
        }

    }
```