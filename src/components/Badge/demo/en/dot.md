### Dot
The badge displays in dot rather than number.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-badge-list">
                    <Badge dot>
                        <span className="demo-badge-icon">
                            <Icon type="user" />
                        </span>
                    </Badge>
                    <Badge dot>
                        <span className="demo-badge-icon">
                            <Icon type="mail" />
                        </span>
                    </Badge>
                </div>
            );
        }
    }
```