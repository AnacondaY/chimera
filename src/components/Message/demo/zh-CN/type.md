### 主题消息
消息可带有成功、错误、警告、信息等状态。
```javascript
    class Demo extends React.Component{

        showMessage(type: String){
            message[type]('这是一条消息');
        }

        render(){
            return (
                <div className="demo-message-list">
                    <Button type="success" onClick={this.showMessage.bind(this, 'success')}>成功消息</Button>
                    <Button type="error" onClick={this.showMessage.bind(this, 'error')}>错误消息</Button>
                    <Button type="warning" onClick={this.showMessage.bind(this, 'warning')}>警告消息</Button>
                    <Button type="info" onClick={this.showMessage.bind(this, 'info')}>信息消息</Button>
                </div>
            )
        }

    }
```