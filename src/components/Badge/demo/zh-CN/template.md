### 溢出模板
当数值超过最大值时, 默认将以```${max}+```显示。通过```maxTemplate```定制渲染模板。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-badge-list">
                    <Badge maximum={999} number={1000}>
                        <div className="demo-badge"/>
                    </Badge>
                    <Badge maximum={999} number={1000} maxTemplate={(number, max) => <Icon type="more" />}>
                        <div className="demo-badge"/>
                    </Badge>
                </div>
            )
        }
    }
```