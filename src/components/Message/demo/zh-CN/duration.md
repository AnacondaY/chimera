### 持续时间
设置```duration```属性可以控制消息的持续时间。
```javascript
    class Demo extends React.Component {

        show(){
            message('这是一条消息', 5000);
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>修改持续时间</Button>
            )
        }

    }
```