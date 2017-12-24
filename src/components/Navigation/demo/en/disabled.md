### Disabled
The subnav or item can be disabled.
```javascript
    class Demo extends React.Component {

        render(){
            const { Item, Subnav, ItemGroup } = Navigation;    
            return (
                <div>
                    <Navigation>
                        <Item>Dashbord</Item>
                        <Subnav title="User Center" disabled>
                            <Item>Time Management</Item>
                            <Item>Your Password</Item>
                            <Item>Your Email</Item>
                        </Subnav>
                        <Item disabled>Share</Item>
                    </Navigation>
                    <Navigation style={{marginTop: 16}}>
                        <Item>Dashbord</Item>
                        <Subnav title="User Center">
                            <Item>Time Management</Item>
                            <Item disabled>Your Password</Item>
                            <Item>Your Email</Item>
                        </Subnav>
                        <Item disabled>Share</Item>
                    </Navigation>
                </div>
            )
        }

    }
```