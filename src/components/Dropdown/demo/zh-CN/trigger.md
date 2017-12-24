### 触发方式
支持```click```和```hover```触发方式。
```javascript
    class Demo extends React.Component {
        render(){
            const menu = (
                <Dropdown.Menu style={{width: 160}}>
                    <Dropdown.Item>
                        <a href="/#/button">按钮</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/#/dialog">对话框</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/#/select">选择器</a>
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        <a href="/#/carousel">轮播</a>
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