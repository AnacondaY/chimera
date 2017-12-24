### Blinking dot
The dot will be blinking if attribute ```blink``` is set. It only matters for dot mode.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-badge-list">
                    <Badge dot blink>
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                    <Badge dot blink type="primary">
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                    <Badge dot blink type="success">
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                    <Badge dot blink type="warning">
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                    <Badge dot blink type="info">
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                    <Badge dot blink type="default">
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                </div>
            )
        }
    }
```