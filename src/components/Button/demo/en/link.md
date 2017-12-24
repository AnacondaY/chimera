### Link Button
Button appear in text style when attribute ```link``` is set.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button link>default</Button>
                    <Button link type="primary">primary</Button>
                    <Button link type="success">success</Button>
                    <Button link type="error">error</Button>
                    <Button link type="warning">warning</Button>
                    <Button link type="info">info</Button>
                    <Button link disabled type="info">disabled</Button>                    
                </div>
            )
        }
    }
```