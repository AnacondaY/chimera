### Button Group
Buttons appear in group. It used to controll a series of similar action.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <span className="demo-button-group">
                        <Button.Group>
                            <Button type="primary">next</Button>
                            <Button type="primary">prev</Button>
                        </Button.Group>
                    </span>
                    <span className="demo-button-group">
                        <Button.Group>
                            <Button type="info" icon="edit" size="small"/>
                            <Button type="info" icon="trash" size="small"/>
                            <Button type="info" icon="location" size="small"/>
                            <Button type="info" icon="mail" size="small"/>
                        </Button.Group>
                    </span>
                </div>
            )
        }
    }
```