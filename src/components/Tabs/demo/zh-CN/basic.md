### 基础用法
简单的选项卡。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tabs defaultActiveIndex={2}>
                    <Tabs.Pane label="选项页 1">
                        选项页1的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 2">
                        选项页2的内容
                    </Tabs.Pane>
                    <Tabs.Pane label="选项页 3">
                        选项页3的内容
                    </Tabs.Pane>
                </Tabs>
            )
        }
    }    
```