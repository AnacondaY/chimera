### 基础用法
简洁的下拉菜单。
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
                        <a>下拉菜单<Icon type="caret-down"/></a>
                    </Dropdown>
                </div>
            )
        }
    }
```