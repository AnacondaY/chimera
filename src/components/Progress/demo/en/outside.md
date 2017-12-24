### Outside
Text are placed outside.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-progress-list">
                    <Progress progress={30} outside/>
                    <Progress progress={50} outside status="paused"/>
                    <Progress progress={100} outside status="success" />
                    <Progress progress={75} outside status="error" />
                </div>
            )
        }
    }
```