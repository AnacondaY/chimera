### 基本用法
简单的文字提示。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tooltip content="some text">
                    <Button link>hover me</Button>
                </Tooltip>
            )
        }
    }
```