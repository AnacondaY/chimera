### Overflow template
```${max}+``` is displayed when number is larger than maximum by default. You can customize the template by setting attribute ```maxTemplate```. 
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