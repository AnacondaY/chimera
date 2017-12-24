### 动态添加/移除
选项页数量随外部数据变化。
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                tabs: [{
                    'label': '选项页 1',
                    'content': '选项页1的内容'
                },{
                    'label': '选项页 2',
                    'content': '选项页2的内容' 
                }]
            }
            this.addTab = this.addTab.bind(this);
            this.handleRemove = this.handleRemove.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        addTab(){
            this.setState(({tabs}) => {
                return {
                    tabs: tabs.concat([{
                        'label': '新的选项页',
                        'content': '新的选项页内容'
                    }])
                }
            })
        }

        handleChange(currentIndex: Number, prevIndex: Number){
            console.log(`当前索引值:${currentIndex}, 上一个激活索引值: ${prevIndex}`);
        }

        handleRemove(currentIndex: Number, removedIndex: Number){
            this.setState(({tabs}) => {
                return {
                    tabs: tabs.filter((tab, i) => i !== removedIndex)
                }
            });
            console.log(`当前索引值:${currentIndex}, 移除索引值:${removedIndex}`);
        }

        render(){
            return (
                <div className="demo-tabs">
                    <Button type="primary" onClick={this.addTab}>新增选项页</Button>
                    <Tabs closable onRemove={this.handleRemove} onChange={this.handleChange}>
                        {this.state.tabs.map((tab, i) => {
                            return <Tabs.Pane key={`cmr-tabs-pane-${i}`} label={tab.label}>{tab.content}</Tabs.Pane>
                        })}
                    </Tabs>
                    <Tabs closable type="card" onRemove={this.handleRemove} onChange={this.handleChange}>
                        {this.state.tabs.map((tab, i) => {
                            return <Tabs.Pane key={`cmr-tabs-pane-${i}`} label={tab.label}>{tab.content}</Tabs.Pane>
                        })}
                    </Tabs>
                </div>
            )
        }
    }
```