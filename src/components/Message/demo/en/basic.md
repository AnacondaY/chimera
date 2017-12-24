### Basic 
The simplest usage.
```javascript
    class Demo extends React.Component{      
        showMessage(){
            message('This is a message');
        }

        render(){
            return (
                <Button onClick={this.showMessage.bind(this)}>Show message</Button>
            )
        }
    }
```