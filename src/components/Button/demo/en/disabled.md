### Disabled
The Button will be disabled when attribute ```disabled``` is set.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-disabled">
                    <Button type="primary">Enabled</Button>
                    <Button disabled>Disabled</Button>
                </div>
            )
        }
    }
```