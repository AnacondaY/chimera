### Icon Button
Button can contain an [Icon]('/#/icon').
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-icon">
                    <Button type="success" icon="search">Search</Button>
                    <Button type="info" icon="edit">Edit</Button>
                    <Button type="error" icon="trash">Delete</Button>
                </div>
            )
        }
    }
```