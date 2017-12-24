### Basic
There are six theme of Button controlled by ```type```.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button>default</Button>
                    <Button type="primary">primary</Button>
                    <Button type="success">success</Button>
                    <Button type="error">error</Button>
                    <Button type="warning">warning</Button>
                    <Button type="info">info</Button>
                </div>
            )
        }
    }
```