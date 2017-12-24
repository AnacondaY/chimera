### Trigger
There are two methods to expand or close menu.
```javascript
    class Demo extends React.Component {
        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <Navigation trigger="click">
                    <Item><Icon type="setting"/>Dashboard</Item>
                    <Subnav title={<span><Icon type="user"/>User Center</span>}>
                        <Item><Icon type="time"/>Time Management</Item>
                        <Item><Icon type="lock"/>Your Password</Item>
                        <Item><Icon type="mail"/>Your Email</Item>
                    </Subnav>
                    <Item><Icon type="share"/>Share</Item>
                </Navigation>
            )
        }
    }
```