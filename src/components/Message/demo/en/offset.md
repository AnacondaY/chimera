### Offset and gap
You can regulate the position of message easily by attributes ```offset``` and ```gap```.
```javascript
    class Demo extends React.Component {
        show(){
            message({
                message: 'This is a message',
                offset: 100,
                gap: 50
            });
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>Position regulation</Button>
            )
        }
    }
```