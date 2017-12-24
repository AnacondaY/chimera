### Trigger
There are two ways to trigger menu appearing and disappearing.
```javascript
    class Demo extends React.Component {
        render(){
            const menu = (
                <Dropdown.Menu style={{width: 160}}>
                    <Dropdown.Item>
                        <a href="/#/button">Button</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/#/dialog">Dialog</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/#/select">Select</a>
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        <a href="/#/carousel">Carousel</a>
                    </Dropdown.Item>
                </Dropdown.Menu>
            )
            return (
                <div className="demo-dropdown-list">
                    <Dropdown menu={menu}>
                        <Button link type="primary">Click me!<Icon type="caret-down"/></Button>
                    </Dropdown>
                    <Dropdown menu={menu} trigger="hover">
                        <Button link type="primary">Hover me!<Icon type="caret-down"/></Button>
                    </Dropdown>
                </div>
            )
        }
    }
```