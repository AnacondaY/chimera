### 不同状态
提供6种状态。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-badge-list">
                    <Badge number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge type="primary" number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge type="success" number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge type="warning" number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge type="info" number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge type="default" number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                </div>
            )
        }
    }
```
