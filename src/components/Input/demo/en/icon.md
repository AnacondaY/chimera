### Icon Input
Add icon inside input.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" placeholder="Please enter keyword" iconBefore={<Icon type="search"/>} />
                    </div>
                    <div className="demo-input">
                        <Input className="demo-input-normal" placeholder="Please enter keyword" iconAfter={<Icon type="search" />} />
                    </div>
                </div>
            )
        }
    }
```