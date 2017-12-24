### 触发方式
设置```trigger```可以控制由何事件显示/隐藏气泡。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tooltip trigger="click" content="通过click显示/隐藏气泡">
                    <Button link>click me</Button>            
                </Tooltip>
            )
        }
    }
```