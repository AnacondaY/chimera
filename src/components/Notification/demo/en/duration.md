### Duration
The time from appearance to disappearance of notification are controlled by attribute ```duration```. If it set to ```0```, notification will never be closed automatically.
```javascript
    class Demo extends React.Component {
        show(){
            message('Notification title', 'This is a notification', 3000);
        }

        render(){
            return (
                <Button onClick={this.show.bind(this)}>duration 5300ms</Button>
            )
        }
    }
```