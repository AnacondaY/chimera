### Offset and gap
You can regulate the position of notification easily by attributes ```offset``` and ```gap```.
```javascript
    class Demo extends React.Component {
        show(){
            notification({
                title: 'Notification Title',
                content: 'This is a notification',
                offset: 100,
                gap: 50,
                onClose(){
                    console.log('Notification close');
                }
            });
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>Position regulation</Button>
            )
        }
    }
```