### Dropdown button
```Dropdown.Button``` as the trigger element.
>```Dropdown.Button``` is just an instant component provided for triggering.

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
                        <Dropdown.Button>Own Button</Dropdown.Button>
                    </Dropdown>
                    <Dropdown menu={menu}>
                        <Button type="primary">Customized Button<Icon type="caret-down"/></Button>
                    </Dropdown>
                </div>
            )
        }
    }
``` 