### Disabled Checkbox
The checkbox will be disabled when attribute ```disabled``` is set.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <Checkbox>Enabled</Checkbox>
                    <Checkbox disabled>Disabled</Checkbox>
                </div>
            )
        }
    }
```