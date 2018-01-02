### Trigger
There are two ways to control visibility of tooltip.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Tooltip trigger="click" content="click to show or hide">
                    <Button link>click me</Button>            
                </Tooltip>
            )
        }
    }
```