### Delay
Timeout of apperance or disapperance.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-tooltip-group">
                    <Tooltip enterTimeout={2000} trigger="click" content="Apperance in 2000ms">
                        <Button type="info">Apperance in 2000ms</Button>                
                    </Tooltip>
                    <Tooltip leaveTimeout={2000} trigger="click" content="Disapperance in 2000ms">
                        <Button type="info">Disapperance in 2000ms</Button>
                    </Tooltip>
                </div>
            )
        }
    }
```