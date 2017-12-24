### Addable and closable
You can add and remove tab easily.
```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                tabs: [{
                    'label': 'Tab 1',
                    'content': 'Content of Tab 1'
                },{
                    'label': 'Tab 2',
                    'content': 'Content of Tab 2' 
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
                        'label': 'New Tab',
                        'content': 'Content of new Tab'
                    }])
                }
            })
        }

        handleChange(currentIndex: Number, prevIndex: Number){
            console.log(`currentIndex:${currentIndex}, prevIndex: ${prevIndex}`);
        }

        handleRemove(currentIndex: Number, removedIndex: Number){
            this.setState(({tabs}) => {
                return {
                    tabs: tabs.filter((tab, i) => i !== removedIndex)
                }
            });
            console.log(`currentIndex:${currentIndex}, removedIndex:${removedIndex}`);
        }

        render(){
            return (
                <div className="demo-tabs">
                    <Button type="primary" onClick={this.addTab}>Add Tab</Button>
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