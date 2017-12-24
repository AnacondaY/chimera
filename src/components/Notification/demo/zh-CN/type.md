### 不同主题
通知可带有成功、错误、警告、信息等状态。
```javascript
    class Demo extends React.Component{
        show(type){
            notification[type]('通知标题', '通知内容');
        }
        render(){
            return (
                <div className="demo-notification-list">
                    <Button onClick={() => this.show('success')} type="success">成功通知</Button>
                    <Button onClick={() => this.show('error')} type="error">错误通知</Button>
                    <Button onClick={() => this.show('warning')} type="warning">警告通知</Button>
                    <Button onClick={() => this.show('info')} type="info">信息通知</Button>
                </div>
            )
        }
    }
```