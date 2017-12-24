### 垂直模式
选项卡纵向展示。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tabs mode="vertical" style={{height: 168}}>
                    <Tabs.Pane label="选项页 1">
                        选项页1的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 2">
                        选项页2的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 3">
                        选项页3的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 4">
                        选项页4的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 5">
                        选项页5的内容
                    </Tabs.Pane>
                </Tabs>
            )
        }
    }
```