### 脚部
设置```footer```为面板添加脚部元素。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Panel title="带脚部的面板" footer={<div>脚部信息</div>} className="demo-panel">
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                    <p>面板的内容...</p>
                </Panel>
            )
        }
    }
```