### 闪烁的圆点
设置```blink```属性可使小圆点闪烁。仅在dot模式下有效。
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