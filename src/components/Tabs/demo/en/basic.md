### Basic
A simple Tabs.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tabs defaultActiveIndex={2}>
                    <Tabs.Pane label="Tab 1">
                        Content of Tab 1
                    </Tabs.Pane>
                    <Tabs.Pane label="Tab 2">
                        Content of Tab 2
                    </Tabs.Pane>
                    <Tabs.Pane label="Tab 3">
                        Content of Tab 3
                    </Tabs.Pane>
                </Tabs>
            )
        }
    }    
```