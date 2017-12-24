### 距离控制
通过属性```offset```和```gap```可以调节消息的位置。
```javascript
    class Demo extends React.Component {
        show(){
            message({
                message: 'This is a message',
                offset: 100,
                gap: 50
            });
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>Position regulation</Button>
            )
        }
    }
```