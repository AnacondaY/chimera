### Themed notification
A notification preset with different theme.
```javascript
    class Demo extends React.Component{
        show(type: String){
            notification[type]('Notification Title','This is a notification', 3000);
        }

        render(){
            return (
                <div className="demo-notification-list">
                    <Button type="success" onClick={this.show.bind(this, 'success')}>success</Button>
                    <Button type="error" onClick={this.show.bind(this, 'error')}>error</Button>
                    <Button type="warning" onClick={this.show.bind(this, 'warning')}>warning</Button>
                    <Button type="info" onClick={this.show.bind(this, 'info')}>info</Button>
                </div>
            )
        }
    }
```