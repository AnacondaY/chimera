### Duration
The time from appearance to disappearance of message are controlled by attribute ```duration```.
```javascript
    class Demo extends React.Component {
        show(){
            message('This is a message', 5000);
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>duration 5000ms</Button>
            )
        }
    }
```