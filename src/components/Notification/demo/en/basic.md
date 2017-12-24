### Basic
The simplest usage.
```javascript
    class Demo extends React.Component{
        show(){
            notification('Notification Title', 'This is a notification')
        }
        render(){
            return (
                <Button onClick={() => this.show()}>Show notification</Button>
            )
        }
    }
```