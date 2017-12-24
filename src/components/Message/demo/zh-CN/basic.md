### 基础用法
最简单的用法。
```javascript
    class Demo extends React.Component{      
        showMessage(){
            message('这是一条消息');
        }

        render(){
            return (
                <Button onClick={this.showMessage.bind(this)}>显示消息</Button>
            )
        }
    }
```