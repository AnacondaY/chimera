### 基础用法
简单的徽记。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-badge-list">
                    <Badge number={9}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge number={100}>
                        <div className="demo-badge"/>
                    </Badge>
                </div>
            )
        }
    }
```