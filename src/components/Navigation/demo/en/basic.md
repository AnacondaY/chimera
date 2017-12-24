### Horizontal
The horizontal navigation is often used as main nav.
```javascript
    class Demo extends React.Component {
        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <Navigation onItemSelect={(mark, marks) => console.log(mark, marks)}>
                    <Item mark="1"><Icon type="setting"/>Dashboard</Item>
                    <Subnav mark="2" title={<span><Icon type="user"/>User Center</span>}>
                        <Item mark="2-1"><Icon type="time"/>Time Management</Item>
                        <Item mark="2-2"><Icon type="lock"/>Your Password</Item>
                        <Item mark="2-3"><Icon type="mail"/>Your Email</Item>
                    </Subnav>
                    <Item mark="3"><Icon type="share"/>Share</Item>
                </Navigation>
            )
        }
    }
```
