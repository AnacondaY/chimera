### 下拉菜单按钮
提供组件```Dropdown.Button```作为下拉按钮。
>```Dropdown.Button```其实是一个定制的按钮组，当然用户也可以自定义，这里只是提供一个即用的组件

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
                        <Dropdown.Button>自带按钮</Dropdown.Button>
                    </Dropdown>
                    <Dropdown menu={menu}>
                        <Button type="primary" icon="caret-down"></Button>
                    </Dropdown>
                </div>
            )
        }
    }
``` 