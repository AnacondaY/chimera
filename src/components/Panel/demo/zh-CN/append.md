### 附加元素
设置```append```节点可以展示头部右侧图标或文字。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Panel title="附加元素面板" append={<a href="/#/panel">more...</a>} className="demo-panel">
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                </Panel>
            )
        }
    }
```