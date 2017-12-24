### Loading Button
Button is in loading state when attribute ```loading``` is set.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-basic">
                    <Button type="primary" loading>loading...</Button>
                    <Button type="success" loading>loading...</Button>
                    <Button type="error" loading>loading...</Button>
                    <Button type="warning" loading>loading...</Button>
                    <Button type="info" loading>loading...</Button>
                </div>
            )
        }
    }
```