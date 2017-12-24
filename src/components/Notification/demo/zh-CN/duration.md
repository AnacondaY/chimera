### 持续时间
设置```duration```属性可以控制通知的持续时间, 设置为```0```时则不会自动关闭。
```javascript
    class Demo extends React.Component {

        show(){
            notification({
                title: '通知标题',
                content: '通知内容',
                duration: 0
            })
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>手动关闭的通知</Button>
            )
        }

    }
```