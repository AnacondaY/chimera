### Themed message
A message preset with different theme.
```javascript
    class Demo extends React.Component{
        showMessage(type: String){
            message[type]('This is a message', 2000);
        }

        render(){
            return (
                <div className="demo-message-list">
                    <Button type="success" onClick={this.showMessage.bind(this, 'success')}>success</Button>
                    <Button type="error" onClick={this.showMessage.bind(this, 'error')}>error</Button>
                    <Button type="warning" onClick={this.showMessage.bind(this, 'warning')}>warning</Button>
                    <Button type="info" onClick={this.showMessage.bind(this, 'info')}>info</Button>
                </div>
            )
        }
    }
```